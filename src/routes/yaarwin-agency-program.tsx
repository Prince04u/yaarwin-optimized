import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";
import { ContentPage } from "@/components/content-page";
import { buildMeta, buildLinks, breadcrumbJsonLd, jsonLdScript } from "@/content/meta";
import { faqJsonLd } from "@/components/faq";
import { agencyContent } from "@/content/pages";

export const Route = createFileRoute("/yaarwin-agency-program")({
  head: () => ({
    meta: buildMeta({ title: "YaarWin Agency Program — Daily Salary, Bonuses & Tiers", description: "Detailed breakdown of the YaarWin agency program — daily salary tiers, deposit-member milestones, agent referral bonuses and rules.", path: "/yaarwin-agency-program" }),
    links: buildLinks("/yaarwin-agency-program"),
    scripts: [
      jsonLdScript(breadcrumbJsonLd([{ name: "Agency Program", url: "/yaarwin-agency-program" }])),
      ...(agencyContent.faqs ? [jsonLdScript(faqJsonLd(agencyContent.faqs))] : []),
    ],
  }),
  component: AgencyPage,
});

function AgencyPage() {
  return (
    <PageShell crumbs={[{ label: "Agency Program" }]}>
      <ContentPage {...agencyContent} />
    </PageShell>
  );
}
