import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";
import { ContentPage } from "@/components/content-page";
import { buildMeta, buildLinks, breadcrumbJsonLd, jsonLdScript } from "@/content/meta";
import { faqJsonLd } from "@/components/faq";
import { gamesContent } from "@/content/pages";

export const Route = createFileRoute("/games")({
  head: () => ({
    meta: buildMeta({ title: "YaarWin Games — Colour Prediction, WinGo, Mini Lotto & More", description: "Explore every game available on the YaarWin platform: WinGo, K3, 5D, Trx Hash, Mini Games and live lottery. Rules, payouts, and beginner tips.", path: "/games" }),
    links: buildLinks("/games"),
    scripts: [
      jsonLdScript(breadcrumbJsonLd([{ name: "Games", url: "/games" }])),
      ...(gamesContent.faqs ? [jsonLdScript(faqJsonLd(gamesContent.faqs))] : []),
    ],
  }),
  component: GamesPage,
});

function GamesPage() {
  return (
    <PageShell crumbs={[{ label: "Games" }]}>
      <ContentPage {...gamesContent} />
    </PageShell>
  );
}
