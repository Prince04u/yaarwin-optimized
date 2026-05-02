import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";
import { ContentPage } from "@/components/content-page";
import { buildMeta, buildLinks, breadcrumbJsonLd, jsonLdScript } from "@/content/meta";
import { faqJsonLd } from "@/components/faq";
import { downloadContent } from "@/content/pages";

export const Route = createFileRoute("/download-app")({
  head: () => ({
    meta: buildMeta({ title: "Download YaarWin App — Official APK Guide for Android", description: "Step-by-step guide to download and install the YaarWin Android app safely, including device requirements, security tips and troubleshooting.", path: "/download-app" }),
    links: buildLinks("/download-app"),
    scripts: [
      jsonLdScript(breadcrumbJsonLd([{ name: "Download App", url: "/download-app" }])),
      ...(downloadContent.faqs ? [jsonLdScript(faqJsonLd(downloadContent.faqs))] : []),
    ],
  }),
  component: DownloadPage,
});

function DownloadPage() {
  return (
    <PageShell crumbs={[{ label: "Download App" }]}>
      <ContentPage {...downloadContent} />
    </PageShell>
  );
}
