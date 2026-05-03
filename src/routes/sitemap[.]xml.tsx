import { createFileRoute } from "@tanstack/react-router";
import { SITE } from "@/content/meta";
import { blogPosts } from "@/content/blog";

// ✅ safe URL join (no // issue ever)
function joinUrl(base: string, path: string) {
  return `${base.replace(/\/$/, "")}/${path.replace(/^\//, "")}`;
}

const staticPaths = [
  "/", "/games", "/how-to-play", "/gift-code", "/download-app", "/gift-code-guide",
  "/about", "/contact", "/faq", "/blog",
  "/privacy-policy", "/terms", "/disclaimer",
  "/yaarwin-agency-program", "/yaarwin-bonuses",
  "/yaarwin-giftcode-today", "/yaarwin-working-gift-codes-2026",
];

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: () => {
        const today = new Date().toISOString().slice(0, 10);

        const urls = [
          // ✅ STATIC PAGES
          ...staticPaths.map((p) => {
            const isHome = p === "/";

            return `<url>
  <loc>${joinUrl(SITE.domain, p)}</loc>
  <lastmod>${today}</lastmod>
  <changefreq>${isHome ? "daily" : "weekly"}</changefreq>
  <priority>${isHome ? "1.0" : "0.8"}</priority>
</url>`;
          }),

          // ✅ BLOG POSTS
          ...blogPosts.map((p) => {
            return `<url>
  <loc>${joinUrl(SITE.domain, `/blog/${p.slug}`)}</loc>
  <lastmod>${p.date}</lastmod>
  <changefreq>monthly</changefreq>
  <priority>0.6</priority>
</url>`;
          }),
        ].join("\n");

        const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

        return new Response(body, {
          headers: { "Content-Type": "application/xml" },
        });
      },
    },
  },
});
