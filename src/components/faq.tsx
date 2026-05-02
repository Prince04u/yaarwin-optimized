import { useState } from "react";
import { ChevronDown } from "lucide-react";

export interface FAQItem { q: string; a: string }

export function FAQ({ items, title = "Frequently Asked Questions" }: { items: FAQItem[]; title?: string }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="mx-auto max-w-3xl">
      <h2 className="mb-6 text-center text-2xl font-bold tracking-tight sm:text-3xl">{title}</h2>
      <div className="space-y-3">
        {items.map((it, i) => (
          <div key={i} className="overflow-hidden rounded-xl border border-border bg-card shadow-card">
            <button onClick={() => setOpen(open === i ? null : i)} className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left">
              <span className="font-semibold text-foreground">{it.q}</span>
              <ChevronDown className={`h-5 w-5 shrink-0 text-primary transition-transform ${open === i ? "rotate-180" : ""}`} />
            </button>
            {open === i && <div className="border-t border-border bg-secondary/30 px-5 py-4 text-sm leading-relaxed text-foreground/80">{it.a}</div>}
          </div>
        ))}
      </div>
    </section>
  );
}

export function faqJsonLd(items: FAQItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((it) => ({
      "@type": "Question",
      name: it.q,
      acceptedAnswer: { "@type": "Answer", text: it.a },
    })),
  };
}