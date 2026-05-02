import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";
import { ContentPage } from "@/components/content-page";
import { buildMeta, buildLinks, breadcrumbJsonLd, jsonLdScript } from "@/content/meta";
import { faqJsonLd } from "@/components/faq";
import { disclaimerContent } from "@/content/pages";

export const Route = createFileRoute("/disclaimer")({
  head: () => ({
    meta: buildMeta({ title: "Disclaimer — YaarWin Info Hub", description: "Important disclaimer regarding the YaarWin Info Hub website. We are an independent informational resource, not a gambling operator.", path: "/disclaimer" }),
    links: buildLinks("/disclaimer"),
    scripts: [
      jsonLdScript(breadcrumbJsonLd([{ name: "Disclaimer", url: "/disclaimer" }])),
      ...(disclaimerContent.faqs ? [jsonLdScript(faqJsonLd(disclaimerContent.faqs))] : []),
    ],
  }),
  component: DisclaimerPage,
});

function DisclaimerPage() {
  return (
    <PageShell crumbs={[{ label: "Disclaimer" }]}>
      <ContentPage {...disclaimerContent} />
    </PageShell>
  );
}
