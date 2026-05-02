import { createFileRoute } from "@tanstack/react-router";
import { SITE } from "@/content/meta";

export const Route = createFileRoute("/robots.txt")({
  server: {
    handlers: {
      GET: () => {
        const body = `User-agent: *\nAllow: /\n\nSitemap: ${SITE.domain}/sitemap.xml\n`;
        return new Response(body, { headers: { "Content-Type": "text/plain" } });
      },
    },
  },
});
