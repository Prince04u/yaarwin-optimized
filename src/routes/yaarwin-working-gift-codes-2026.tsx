import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";
import { ContentPage } from "@/components/content-page";
import { buildMeta, buildLinks, breadcrumbJsonLd, jsonLdScript } from "@/content/meta";
import { faqJsonLd } from "@/components/faq";
import { workingCodesContent } from "@/content/pages";

export const Route = createFileRoute("/yaarwin-working-gift-codes-2026")({
  head: () => ({
    meta: buildMeta({ title: "YaarWin Working Gift Codes 2026 — Full List & How to Redeem", description: "Comprehensive list of YaarWin working gift codes for 2026 with redemption guide, validity rules and tips to avoid scam codes.", path: "/yaarwin-working-gift-codes-2026" }),
    links: buildLinks("/yaarwin-working-gift-codes-2026"),
    scripts: [
      jsonLdScript(breadcrumbJsonLd([{ name: "Working Codes 2026", url: "/yaarwin-working-gift-codes-2026" }])),
      ...(workingCodesContent.faqs ? [jsonLdScript(faqJsonLd(workingCodesContent.faqs))] : []),
    ],
  }),
  component: WorkingCodesPage,
});

function WorkingCodesPage() {
  return (
    <PageShell crumbs={[{ label: "Working Codes 2026" }]}>
      <ContentPage {...workingCodesContent} />
    </PageShell>
  );
}
