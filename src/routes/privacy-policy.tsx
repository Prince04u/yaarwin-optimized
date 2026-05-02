import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";
import { ContentPage } from "@/components/content-page";
import { buildMeta, buildLinks, breadcrumbJsonLd, jsonLdScript } from "@/content/meta";
import { faqJsonLd } from "@/components/faq";
import { privacyContent } from "@/content/pages";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: buildMeta({ title: "Privacy Policy — YaarWin Info Hub", description: "How we collect, use and protect data on the YaarWin Info Hub website. Our privacy practices, cookies, and your rights.", path: "/privacy-policy" }),
    links: buildLinks("/privacy-policy"),
    scripts: [
      jsonLdScript(breadcrumbJsonLd([{ name: "Privacy Policy", url: "/privacy-policy" }])),
      ...(privacyContent.faqs ? [jsonLdScript(faqJsonLd(privacyContent.faqs))] : []),
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <PageShell crumbs={[{ label: "Privacy Policy" }]}>
      <ContentPage {...privacyContent} />
    </PageShell>
  );
}
