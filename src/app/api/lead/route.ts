import { NextResponse } from "next/server";
import {
  buildLeadPayload,
  isHttpsUrl,
  parseLeadForwardResponse,
} from "./leadPayload";

export const runtime = "nodejs";

const LEAD_FORWARD_TIMEOUT_MS = 10_000;

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const scriptUrl = process.env.GOOGLE_SCRIPT_URL;

    if (!scriptUrl || !isHttpsUrl(scriptUrl)) {
      return NextResponse.json({ ok: false, error: "Configuration missing" }, { status: 500 });
    }

    const lead = buildLeadPayload(body);

    if (!lead.ok) {
      return NextResponse.json({ ok: false, error: lead.error }, { status: 400 });
    }

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), LEAD_FORWARD_TIMEOUT_MS);

    try {
      const res = await fetch(scriptUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(lead.payload),
        cache: "no-store",
        signal: controller.signal,
      });

      const result = await parseLeadForwardResponse(res);
      return NextResponse.json(result, { status: result.ok ? 200 : 502 });
    } finally {
      clearTimeout(timeout);
    }
  } catch (err) {
    console.error("Form error:", err);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
