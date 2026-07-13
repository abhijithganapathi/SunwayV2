import { NextResponse } from "next/server";

export const runtime = "nodejs";

const MAX_FIELD_LENGTH = 160;
const PHONE_PATTERN = /^[+\d][\d\s()+-]{6,24}$/;

function cleanField(value: unknown) {
  return typeof value === "string" ? value.trim().slice(0, MAX_FIELD_LENGTH) : "";
}

function isHttpsUrl(value: string) {
  try {
    return new URL(value).protocol === "https:";
  } catch {
    return false;
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const scriptUrl = process.env.GOOGLE_SCRIPT_URL;

    if (!scriptUrl || !isHttpsUrl(scriptUrl)) {
      return NextResponse.json({ ok: false, error: "Configuration missing" }, { status: 500 });
    }

    const payload = {
      name: cleanField(body.name),
      phone: cleanField(body.phone),
      location: cleanField(body.location),
      billRange: cleanField(body.billRange),
      customerType: cleanField(body.customerType),
    };

    if (
      !payload.name ||
      !PHONE_PATTERN.test(payload.phone) ||
      !payload.location ||
      !payload.billRange ||
      !payload.customerType
    ) {
      return NextResponse.json({ ok: false, error: "Invalid form details" }, { status: 400 });
    }

    const res = await fetch(scriptUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      cache: "no-store",
    });

    const result = await res.json();
    return NextResponse.json(result);
  } catch (err) {
    console.error("Form error:", err);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
