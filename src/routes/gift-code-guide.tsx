import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";
import { ContentPage } from "@/components/content-page";
import { buildMeta, buildLinks, breadcrumbJsonLd, jsonLdScript } from "@/content/meta";
import { faqJsonLd } from "@/components/faq";
import { giftCodeGuideContent } from "@/content/pages";

export const Route = createFileRoute("/gift-code-guide")({
  head: () => ({
    meta: buildMeta({ title: "YaarWin Gift Code Guide — How Codes Work & Best Practices", description: "A detailed guide to YaarWin gift codes: where to find legitimate codes, how to redeem them, expiry rules, and how to avoid scam codes.", path: "/gift-code-guide" }),
    links: buildLinks("/gift-code-guide"),
    scripts: [
      jsonLdScript(breadcrumbJsonLd([{ name: "Gift Code Guide", url: "/gift-code-guide" }])),
      ...(giftCodeGuideContent.faqs ? [jsonLdScript(faqJsonLd(giftCodeGuideContent.faqs))] : []),
    ],
  }),
  component: GiftCodeGuidePage,
});

function GiftCodeGuidePage() {
  return (
    <PageShell crumbs={[{ label: "Gift Code Guide" }]}>
      <ContentPage {...giftCodeGuideContent} />
    </PageShell>
  );
}
