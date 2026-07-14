import assert from "node:assert/strict";
import test from "node:test";

import {
  buildLeadPayload,
  isHttpsUrl,
  parseLeadForwardResponse,
} from "../src/app/api/lead/leadPayload.ts";

test("buildLeadPayload trims fields, validates phone, and ignores extra data", () => {
  const result = buildLeadPayload({
    name: "  Anu  ",
    phone: " +91 96330 21955 ",
    location: " Kottarakkara ",
    billRange: "Rs 3000-Rs 6000",
    customerType: "Residential",
    website: "bot-field",
  });

  assert.deepEqual(result, {
    ok: true,
    payload: {
      name: "Anu",
      phone: "+91 96330 21955",
      location: "Kottarakkara",
      billRange: "Rs 3000-Rs 6000",
      customerType: "Residential",
    },
  });
});

test("buildLeadPayload rejects invalid phone numbers", () => {
  assert.deepEqual(
    buildLeadPayload({
      name: "Anu",
      phone: "not a phone",
      location: "Kottarakkara",
      billRange: "Rs 3000-Rs 6000",
      customerType: "Residential",
    }),
    { ok: false, error: "Invalid form details" },
  );
});

test("isHttpsUrl only accepts https URLs", () => {
  assert.equal(isHttpsUrl("https://script.google.com/macros/s/id/exec"), true);
  assert.equal(isHttpsUrl("http://script.google.com/macros/s/id/exec"), false);
  assert.equal(isHttpsUrl("not a url"), false);
});

test("parseLeadForwardResponse normalizes JSON and non-JSON upstream responses", async () => {
  const jsonResponse = new Response(JSON.stringify({ ok: true, id: "123" }), {
    status: 200,
    headers: { "content-type": "application/json" },
  });
  assert.deepEqual(await parseLeadForwardResponse(jsonResponse), { ok: true, id: "123" });

  const textResponse = new Response("Accepted", { status: 200 });
  assert.deepEqual(await parseLeadForwardResponse(textResponse), { ok: true });

  const failedResponse = new Response("Bad gateway", { status: 502 });
  assert.deepEqual(await parseLeadForwardResponse(failedResponse), {
    ok: false,
    error: "Lead service unavailable",
  });
});
