import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";
import { ContentPage } from "@/components/content-page";
import { buildMeta, buildLinks, breadcrumbJsonLd, jsonLdScript } from "@/content/meta";
import { faqJsonLd } from "@/components/faq";
import { faqContent } from "@/content/pages";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: buildMeta({ title: "YaarWin FAQ — Common Questions Answered Clearly", description: "Quick answers to the most common questions about YaarWin: account, login, gift codes, deposits, withdrawals, bonuses and safety.", path: "/faq" }),
    links: buildLinks("/faq"),
    scripts: [
      jsonLdScript(breadcrumbJsonLd([{ name: "FAQ", url: "/faq" }])),
      ...(faqContent.faqs ? [jsonLdScript(faqJsonLd(faqContent.faqs))] : []),
    ],
  }),
  component: FAQPageRoute,
});

function FAQPageRoute() {
  return (
    <PageShell crumbs={[{ label: "FAQ" }]}>
      <ContentPage {...faqContent} />
    </PageShell>
  );
}
