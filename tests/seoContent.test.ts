import assert from "node:assert/strict";
import test from "node:test";

import { getLocalPage, localPages } from "../src/content/localPages.ts";
import { site } from "../src/content/site.ts";

test("site domain is configured for the production canonical host", () => {
  assert.equal(site.domain, "sunwaysolarsystems.in");
});

test("all local landing page slugs are unique, URL-safe, and resolvable", () => {
  const seen = new Set<string>();

  for (const page of localPages) {
    assert.equal(getLocalPage(page.slug), page);
    assert.match(page.slug, /^[a-z0-9-]+$/);
    assert.equal(seen.has(page.slug), false, `duplicate slug: ${page.slug}`);
    seen.add(page.slug);
  }
});

test("all local landing pages have SEO and section content", () => {
  for (const page of localPages) {
    assert.ok(page.title.length > 0, `${page.slug} missing title`);
    assert.ok(page.description.length > 0, `${page.slug} missing description`);
    assert.ok(page.keywords.length > 0, `${page.slug} missing keywords`);
    assert.ok(page.proofPoints.length > 0, `${page.slug} missing proof points`);
    assert.ok(page.sections.length > 0, `${page.slug} missing sections`);
  }
});
