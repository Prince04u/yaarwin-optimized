import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";
import { ContentPage } from "@/components/content-page";
import { buildMeta, buildLinks, breadcrumbJsonLd, jsonLdScript } from "@/content/meta";
import { faqJsonLd } from "@/components/faq";
import { contactContent } from "@/content/pages";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: buildMeta({ title: "Contact YaarWin Info Hub — Get in Touch With Our Team", description: "Reach the YaarWin Info Hub editorial team for feedback, content corrections, partnership requests, or general queries.", path: "/contact" }),
    links: buildLinks("/contact"),
    scripts: [
      jsonLdScript(breadcrumbJsonLd([{ name: "Contact", url: "/contact" }])),
      ...(contactContent.faqs ? [jsonLdScript(faqJsonLd(contactContent.faqs))] : []),
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <PageShell crumbs={[{ label: "Contact" }]}>
      <ContentPage {...contactContent} />
    </PageShell>
  );
}
