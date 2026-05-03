import type { MetadataRoute } from "next";
import { site } from "@/content/site";
import { localPages } from "@/content/localPages";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = `https://${site.domain}`;
  const now = new Date();

  const routes: Array<{ path: string; priority: number }> = [
    { path: "/", priority: 1 },
    { path: "/residential", priority: 0.8 },
    { path: "/commercial", priority: 0.8 },
    { path: "/projects", priority: 0.7 },
    { path: "/about", priority: 0.6 },
    { path: "/contact", priority: 0.9 },
    ...localPages.map((page) => ({ path: `/${page.slug}`, priority: 0.85 })),
  ];

  return routes.map((r) => ({
    url: `${base}${r.path}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: r.priority,
  }));
}
