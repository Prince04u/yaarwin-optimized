import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, Section } from "@/components/page-shell";
import { buildMeta, buildLinks, breadcrumbJsonLd, jsonLdScript } from "@/content/meta";
import { blogPosts } from "@/content/blog";
import { Calendar, Tag } from "lucide-react";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: buildMeta({
      title: "YaarWin Blog — Guides, Strategies & Platform Updates",
      description: "Read in-depth YaarWin guides: colour prediction strategy, beginner tutorials, safety awareness and platform updates from our editorial team.",
      path: "/blog",
    }),
    links: buildLinks("/blog"),
    scripts: [jsonLdScript(breadcrumbJsonLd([{ name: "Blog", url: "/blog" }]))],
  }),
  component: BlogIndex,
});

function BlogIndex() {
  const categories = Array.from(new Set(blogPosts.map((p) => p.category)));
  return (
    <PageShell crumbs={[{ label: "Blog" }]}>
      <header className="bg-gradient-soft">
        <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16">
          <h1 className="text-3xl font-extrabold tracking-tight sm:text-5xl">YaarWin Blog</h1>
          <p className="mt-4 text-lg text-foreground/75">
            Beginner guides, colour-prediction strategy notes, platform tutorials and safety awareness — written by our editorial team.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {categories.map((c) => (
              <span key={c} className="inline-flex items-center gap-1 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                <Tag className="h-3 w-3" /> {c}
              </span>
            ))}
          </div>
        </div>
      </header>
      <Section>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              to="/blog/$slug"
              params={{ slug: post.slug }}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-card transition-all hover:-translate-y-1 hover:shadow-elegant"
            >
              <div className="flex h-40 items-center justify-center bg-gradient-hero text-4xl font-extrabold text-primary-foreground">
                {post.category[0]}
              </div>
              <div className="flex flex-1 flex-col p-5">
                <span className="text-xs font-semibold uppercase tracking-wide text-primary">{post.category}</span>
                <h2 className="mt-2 text-lg font-bold leading-tight group-hover:text-primary">{post.title}</h2>
                <p className="mt-2 line-clamp-3 text-sm text-muted-foreground">{post.excerpt}</p>
                <div className="mt-auto flex items-center gap-1.5 pt-4 text-xs text-muted-foreground">
                  <Calendar className="h-3.5 w-3.5" /> {post.date}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Section>
    </PageShell>
  );
}
