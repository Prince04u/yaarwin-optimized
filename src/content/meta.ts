export const SITE = {
  name: "YaarWin",
  domain: "https://yaarwinn.live", // ❗ no trailing slash
  tagline: "India's trusted YaarWin colour prediction guide & gift code hub",
  loginUrl: "https://yaarwin.net/#/register?invitationCode=26863113492",
  registerUrl: "https://yaarwin.net/#/register?invitationCode=26863113492",
  telegram: "https://t.me/yaarrwin",
};

// ✅ universal URL join fix
export function joinUrl(base: string, path: string) {
  return `${base.replace(/\/$/, "")}/${path.replace(/^\//, "")}`;
}

// ✅ META TAGS
export function buildMeta(opts: {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: string;
}) {
  const url = joinUrl(SITE.domain, opts.path);

  return [
    { title: opts.title },
    { name: "description", content: opts.description },
    { name: "robots", content: "index, follow" },
    { name: "author", content: SITE.name },

    { property: "og:title", content: opts.title },
    { property: "og:description", content: opts.description },
    { property: "og:url", content: url },
    { property: "og:type", content: opts.type ?? "website" },
    { property: "og:site_name", content: SITE.name },

    ...(opts.image ? [{ property: "og:image", content: opts.image }] : []),

    { name: "twitter:card", content: opts.image ? "summary_large_image" : "summary" },
    { name: "twitter:title", content: opts.title },
    { name: "twitter:description", content: opts.description },
    ...(opts.image ? [{ name: "twitter:image", content: opts.image }] : []),
  ];
}

// ✅ CANONICAL LINKS
export function buildLinks(path: string) {
  return [{ rel: "canonical", href: joinUrl(SITE.domain, path) }];
}

// ✅ BREADCRUMB SCHEMA
export function breadcrumbJsonLd(crumbs: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: joinUrl(SITE.domain, c.url),
    })),
  };
}

// ✅ JSON-LD SCRIPT
export function jsonLdScript(data: unknown) {
  return {
    type: "application/ld+json" as const,
    children: JSON.stringify(data),
  };
}
