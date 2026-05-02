import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";
import { ContentPage } from "@/components/content-page";
import { buildMeta, buildLinks, breadcrumbJsonLd, jsonLdScript } from "@/content/meta";
import { faqJsonLd } from "@/components/faq";
import { giftCodeContent } from "@/content/pages";

export const Route = createFileRoute("/gift-code")({
  head: () => ({
    meta: buildMeta({ title: "YaarWin Gift Code — Latest Codes, Rewards & Redemption", description: "Find the latest YaarWin gift codes, learn how to redeem them inside the app, and understand promotional rules. Verified and updated regularly.", path: "/gift-code" }),
    links: buildLinks("/gift-code"),
    scripts: [
      jsonLdScript(breadcrumbJsonLd([{ name: "Gift Code", url: "/gift-code" }])),
      ...(giftCodeContent.faqs ? [jsonLdScript(faqJsonLd(giftCodeContent.faqs))] : []),
    ],
  }),
  component: GiftCodePage,
});

function GiftCodePage() {
  return (
    <PageShell crumbs={[{ label: "Gift Code" }]}>
      <ContentPage {...giftCodeContent} />
    </PageShell>
  );
}
