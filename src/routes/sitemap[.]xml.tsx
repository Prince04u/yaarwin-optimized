import { createFileRoute } from "@tanstack/react-router";
import { SITE } from "@/content/meta";
import { blogPosts } from "@/content/blog";

const staticPaths = [
  "/", "/games", "/how-to-play", "/gift-code", "/download-app", "/gift-code-guide",
  "/about", "/contact", "/faq", "/blog",
  "/privacy-policy", "/terms", "/disclaimer",
  "/yaarwin-agency-program", "/yaarwin-bonuses", "/yaarwin-giftcode-today", "/yaarwin-working-gift-codes-2026",
];

export const Route = createFileRoute("/custom-sitemap.xml")({
  server: {
    handlers: {
      GET: () => {
        const today = new Date().toISOString().slice(0, 10);
        const urls = [
          ...staticPaths.map((p) => `<url><loc>${SITE.domain}${p}</loc><lastmod>${today}</lastmod></url>`),
          ...blogPosts.map((p) => `<url><loc>${SITE.domain}/blog/${p.slug}</loc><lastmod>${p.date}</lastmod></url>`),
        ].join("\n");
        const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`;
        return new Response(body, { headers: { "Content-Type": "application/xml" } });
      },
    },
  },
});
