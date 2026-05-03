export const Route = createFileRoute("/robots.txt")({
  server: {
    handlers: {
      GET: ({ request }) => {
        const url = new URL(request.url);
        const base = url.origin;

        const body = `User-agent: *
Allow: /

Sitemap: ${base}/sitemap.xml
`;

        return new Response(body, {
          headers: { "Content-Type": "text/plain" },
        });
      },
    },
  },
});
