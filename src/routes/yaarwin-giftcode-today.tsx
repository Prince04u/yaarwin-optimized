import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";
import { ContentPage } from "@/components/content-page";
import { buildMeta, buildLinks, breadcrumbJsonLd, jsonLdScript } from "@/content/meta";
import { faqJsonLd } from "@/components/faq";
import { giftCodeTodayContent } from "@/content/pages";

export const Route = createFileRoute("/yaarwin-giftcode-today")({
  head: () => ({
    meta: buildMeta({ title: "YaarWin Gift Code Today — Verified Codes Updated Daily", description: "Today's latest verified YaarWin gift codes with redemption steps. Updated regularly with notes on expiry and eligibility.", path: "/yaarwin-giftcode-today" }),
    links: buildLinks("/yaarwin-giftcode-today"),
    scripts: [
      jsonLdScript(breadcrumbJsonLd([{ name: "Gift Code Today", url: "/yaarwin-giftcode-today" }])),
      ...(giftCodeTodayContent.faqs ? [jsonLdScript(faqJsonLd(giftCodeTodayContent.faqs))] : []),
    ],
  }),
  component: GiftTodayPage,
});

function GiftTodayPage() {
  return (
    <PageShell crumbs={[{ label: "Gift Code Today" }]}>
      <ContentPage {...giftCodeTodayContent} />
    </PageShell>
  );
}
