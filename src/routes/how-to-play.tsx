import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";
import { ContentPage } from "@/components/content-page";
import { buildMeta, buildLinks, breadcrumbJsonLd, jsonLdScript } from "@/content/meta";
import { faqJsonLd } from "@/components/faq";
import { howToPlayContent } from "@/content/pages";

export const Route = createFileRoute("/how-to-play")({
  head: () => ({
    meta: buildMeta({ title: "How to Play YaarWin — Step-by-Step Beginner Guide (2026)", description: "Learn how to play YaarWin colour prediction games safely. A complete walkthrough covering account setup, betting, deposits, withdrawals and strategy.", path: "/how-to-play" }),
    links: buildLinks("/how-to-play"),
    scripts: [
      jsonLdScript(breadcrumbJsonLd([{ name: "How to Play", url: "/how-to-play" }])),
      ...(howToPlayContent.faqs ? [jsonLdScript(faqJsonLd(howToPlayContent.faqs))] : []),
    ],
  }),
  component: HowToPlayPage,
});

function HowToPlayPage() {
  return (
    <PageShell crumbs={[{ label: "How to Play" }]}>
      <ContentPage {...howToPlayContent} />
    </PageShell>
  );
}
