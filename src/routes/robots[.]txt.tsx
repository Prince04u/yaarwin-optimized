import { createFileRoute } from "@tanstack/react-router";
import { SITE } from "@/content/meta";

export const Route = createFileRoute("/robots.txt")({
  server: {
    handlers: {
      GET: () => {
        const body = `User-agent: *
Allow: /

# Sitemap
Sitemap: ${SITE.domain}/sitemap.xml
`;

        return new Response(body, {
          headers: { "Content-Type": "text/plain" },
        });
      },
    },
  },
});
