import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";
import { ContentPage } from "@/components/content-page";
import { buildMeta, buildLinks, breadcrumbJsonLd, jsonLdScript } from "@/content/meta";
import { faqJsonLd } from "@/components/faq";
import { bonusesContent } from "@/content/pages";

export const Route = createFileRoute("/yaarwin-bonuses")({
  head: () => ({
    meta: buildMeta({ title: "YaarWin Bonuses — Deposit Bonus, Referral Bonus & Daily Rewards", description: "Every active bonus on YaarWin in one place: first-deposit bonus, agent referral bonus, daily salary, super referral and more.", path: "/yaarwin-bonuses" }),
    links: buildLinks("/yaarwin-bonuses"),
    scripts: [
      jsonLdScript(breadcrumbJsonLd([{ name: "Bonuses", url: "/yaarwin-bonuses" }])),
      ...(bonusesContent.faqs ? [jsonLdScript(faqJsonLd(bonusesContent.faqs))] : []),
    ],
  }),
  component: BonusesPage,
});

function BonusesPage() {
  return (
    <PageShell crumbs={[{ label: "Bonuses" }]}>
      <ContentPage {...bonusesContent} />
    </PageShell>
  );
}
