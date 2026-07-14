export type LeadPayload = {
  name: string;
  phone: string;
  location: string;
  billRange: string;
  customerType: string;
};

export type LeadPayloadResult =
  | { ok: true; payload: LeadPayload }
  | { ok: false; error: string };

const MAX_FIELD_LENGTH = 160;
const PHONE_PATTERN = /^[+\d][\d\s()+-]{6,24}$/;

function cleanField(value: unknown) {
  return typeof value === "string" ? value.trim().slice(0, MAX_FIELD_LENGTH) : "";
}

export function isHttpsUrl(value: string) {
  try {
    return new URL(value).protocol === "https:";
  } catch {
    return false;
  }
}

export function buildLeadPayload(body: unknown): LeadPayloadResult {
  const data = body && typeof body === "object" ? (body as Record<string, unknown>) : {};

  const payload = {
    name: cleanField(data.name),
    phone: cleanField(data.phone),
    location: cleanField(data.location),
    billRange: cleanField(data.billRange),
    customerType: cleanField(data.customerType),
  };

  if (
    !payload.name ||
    !PHONE_PATTERN.test(payload.phone) ||
    !payload.location ||
    !payload.billRange ||
    !payload.customerType
  ) {
    return { ok: false, error: "Invalid form details" };
  }

  return { ok: true, payload };
}

export async function parseLeadForwardResponse(res: Response) {
  if (!res.ok) {
    return { ok: false, error: "Lead service unavailable" };
  }

  const contentType = res.headers.get("content-type") ?? "";
  if (!contentType.includes("application/json")) {
    return { ok: true };
  }

  try {
    const result = await res.json();
    return result && typeof result === "object" ? result : { ok: true };
  } catch {
    return { ok: true };
  }
}
