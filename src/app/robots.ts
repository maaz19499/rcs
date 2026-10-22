import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/structured-data";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // ── Default: allow all public content, block internals ──────────────
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/_next/",    // Next.js build assets — not useful to crawlers
          "/api/",      // Server-side API routes
          "/admin/",    // Reserved admin paths
        ],
      },

      // ── AI search bots: allow indexing (search discovery) ───────────────
      // These power AI-assisted search results; allowing them improves
      // RCS Arabia's visibility in AI-driven search surfaces.
      { userAgent: "OAI-SearchBot", allow: "/" },     // ChatGPT search
      { userAgent: "PerplexityBot", allow: "/" },     // Perplexity search
      { userAgent: "Claude-SearchBot", allow: "/" },  // Claude search
      { userAgent: "Claude-User", allow: "/" },       // Claude user-directed retrieval

      // ── AI training crawlers: opt out ────────────────────────────────────
      // Block use of site content for LLM training datasets.
      // Distinct from search bots above — does not affect search ranking.
      { userAgent: "GPTBot", disallow: "/" },         // OpenAI training
      { userAgent: "ClaudeBot", disallow: "/" },      // Anthropic training
      { userAgent: "CCBot", disallow: "/" },          // Common Crawl (training datasets)
      { userAgent: "Google-Extended", disallow: "/" }, // Gemini training/grounding
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
