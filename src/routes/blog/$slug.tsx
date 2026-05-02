import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { PageShell, Section, Prose } from "@/components/page-shell";
import { buildMeta, buildLinks, breadcrumbJsonLd, jsonLdScript, SITE } from "@/content/meta";
import { blogPosts } from "@/content/blog";
import { Calendar, ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = blogPosts.find((p) => p.slug === params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return { meta: [] };
    const { post } = loaderData;
    const path = `/blog/${post.slug}`;
    return {
      meta: buildMeta({ title: `${post.title} — YaarWin Blog`, description: post.excerpt, path, type: "article" }),
      links: buildLinks(path),
      scripts: [
        jsonLdScript(breadcrumbJsonLd([
          { name: "Blog", url: "/blog" },
          { name: post.title, url: path },
        ])),
        jsonLdScript({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: post.title,
          description: post.excerpt,
          datePublished: post.date,
          author: { "@type": "Organization", name: "YaarWin Info Hub" },
          publisher: { "@type": "Organization", name: SITE.name, logo: { "@type": "ImageObject", url: `${SITE.domain}/apple-touch-icon.png` } },
          mainEntityOfPage: `${SITE.domain}${path}`,
        }),
      ],
    };
  },
  notFoundComponent: () => (
    <PageShell crumbs={[{ label: "Blog" }]}>
      <Section>
        <div className="mx-auto max-w-md text-center">
          <h1 className="text-3xl font-bold">Post not found</h1>
          <p className="mt-3 text-muted-foreground">This article does not exist or has been moved.</p>
          <Link to="/blog" className="mt-6 inline-flex items-center gap-2 text-primary"><ArrowLeft className="h-4 w-4" /> Back to blog</Link>
        </div>
      </Section>
    </PageShell>
  ),
  component: BlogPost,
});

function BlogPost() {
  const { post } = Route.useLoaderData();
  return (
    <PageShell crumbs={[{ label: "Blog", to: "/blog" }, { label: post.title }]}>
      <header className="bg-gradient-soft">
        <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
          <span className="text-xs font-semibold uppercase tracking-wide text-primary">{post.category}</span>
          <h1 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">{post.title}</h1>
          <p className="mt-4 text-lg text-foreground/75">{post.excerpt}</p>
          <div className="mt-4 flex items-center gap-1.5 text-xs text-muted-foreground">
            <Calendar className="h-3.5 w-3.5" /> Published {post.date}
          </div>
        </div>
      </header>
      <Section>
        <Prose>
          {post.body.map((block, i) => {
            if (block.type === "h2") return <h2 key={i}>{block.text}</h2>;
            if (block.type === "h3") return <h3 key={i}>{block.text}</h3>;
            if (block.type === "ul") return <ul key={i}>{block.items.map((it, j) => <li key={j}>{it}</li>)}</ul>;
            return <p key={i}>{block.text}</p>;
          })}
          <div className="mt-10 rounded-xl border border-border bg-secondary/40 p-5">
            <h3 className="mb-3 text-base font-semibold">Related guides</h3>
            <ul className="grid gap-2 sm:grid-cols-2">
              <li><Link to="/how-to-play" className="text-primary hover:underline">How to Play YaarWin</Link></li>
              <li><Link to="/gift-code" className="text-primary hover:underline">YaarWin Gift Codes</Link></li>
              <li><Link to="/yaarwin-bonuses" className="text-primary hover:underline">Bonuses Overview</Link></li>
              <li><Link to="/faq" className="text-primary hover:underline">FAQ</Link></li>
            </ul>
          </div>
        </Prose>
      </Section>
    </PageShell>
  );
}
