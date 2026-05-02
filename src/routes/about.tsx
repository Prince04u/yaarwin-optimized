import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";
import { ContentPage } from "@/components/content-page";
import { buildMeta, buildLinks, breadcrumbJsonLd, jsonLdScript } from "@/content/meta";
import { faqJsonLd } from "@/components/faq";
import { aboutContent } from "@/content/pages";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: buildMeta({ title: "About YaarWin Info Hub — Our Mission, Editorial Team & Values", description: "Learn who we are, how we research the YaarWin platform, our editorial standards, and our commitment to honest, safety-first information.", path: "/about" }),
    links: buildLinks("/about"),
    scripts: [
      jsonLdScript(breadcrumbJsonLd([{ name: "About Us", url: "/about" }])),
      ...(aboutContent.faqs ? [jsonLdScript(faqJsonLd(aboutContent.faqs))] : []),
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <PageShell crumbs={[{ label: "About Us" }]}>
      <ContentPage {...aboutContent} />
    </PageShell>
  );
}
