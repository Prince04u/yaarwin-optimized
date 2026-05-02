import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";
import { ContentPage } from "@/components/content-page";
import { buildMeta, buildLinks, breadcrumbJsonLd, jsonLdScript } from "@/content/meta";
import { faqJsonLd } from "@/components/faq";
import { termsContent } from "@/content/pages";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: buildMeta({ title: "Terms & Conditions — YaarWin Info Hub", description: "The terms governing your use of the YaarWin Info Hub website. Acceptable use, disclaimers, intellectual property and liability.", path: "/terms" }),
    links: buildLinks("/terms"),
    scripts: [
      jsonLdScript(breadcrumbJsonLd([{ name: "Terms & Conditions", url: "/terms" }])),
      ...(termsContent.faqs ? [jsonLdScript(faqJsonLd(termsContent.faqs))] : []),
    ],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <PageShell crumbs={[{ label: "Terms & Conditions" }]}>
      <ContentPage {...termsContent} />
    </PageShell>
  );
}
