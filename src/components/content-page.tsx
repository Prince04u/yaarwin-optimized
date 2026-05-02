import { Link } from "@tanstack/react-router";
import { CheckCircle2, Calendar, Shield, BookOpen, Users, ArrowRight, Hash } from "lucide-react";
import { FAQ, type FAQItem } from "./faq";

export interface ContentSection {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
  highlight?: string;
}

export interface ContentPageProps {
  eyebrow: string;
  h1: string;
  intro: string;
  updated?: string;
  heroImage?: string;
  sections: ContentSection[];
  faqs?: FAQItem[];
  cta?: { label: string; href: string };
  related?: { to: string; label: string }[];
}

function slugify(s: string) {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

export function ContentPage(p: ContentPageProps) {
  const toc = p.sections.map((s) => ({ id: slugify(s.heading), label: s.heading }));

  return (
    <>
      {/* COMPACT HERO — single column, no empty side gap */}
      <header className="relative overflow-hidden border-b border-border/60 bg-gradient-soft">
        <div className="pointer-events-none absolute -right-32 -top-32 h-72 w-72 rounded-full bg-primary/15 blur-3xl" />
        <div className="pointer-events-none absolute -left-32 -bottom-32 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
        <div className="relative mx-auto max-w-4xl px-4 py-12 text-center sm:px-6 sm:py-16">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" /> {p.eyebrow}
          </div>
          <h1 className="text-balance text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
            {p.h1}
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-pretty text-base text-foreground/75 sm:text-lg">
            {p.intro}
          </p>
          <div className="mx-auto mt-6 flex max-w-3xl flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-muted-foreground">
            {p.updated && (
              <span className="inline-flex items-center gap-1.5">
                <Calendar className="h-3.5 w-3.5 text-primary" /> Last updated:{" "}
                <strong className="font-semibold text-foreground">{p.updated}</strong>
              </span>
            )}
            <span className="inline-flex items-center gap-1.5">
              <BookOpen className="h-3.5 w-3.5 text-primary" /> Editorial team · YaarWin Info Hub
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Shield className="h-3.5 w-3.5 text-primary" /> Reviewed for accuracy
            </span>
          </div>
        </div>

        {/* Trust strip */}
        <div className="border-t border-border/60 bg-background/70 backdrop-blur">
          <div className="mx-auto grid max-w-7xl grid-cols-2 gap-2 px-4 py-3 text-xs sm:grid-cols-4 sm:px-6 sm:text-sm">
            {[
              { icon: Shield, label: "Safety-first content" },
              { icon: CheckCircle2, label: "Verified information" },
              { icon: BookOpen, label: "1800+ word guide" },
              { icon: Users, label: "Updated regularly" },
            ].map((s) => (
              <div key={s.label} className="flex items-center gap-2 text-muted-foreground">
                <s.icon className="h-4 w-4 text-primary" />
                <span className="truncate">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* CONTENT — article + sticky TOC, balanced columns */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Sticky TOC */}
          <aside className="hidden lg:col-span-3 lg:block">
            <div className="sticky top-24">
              <div className="rounded-2xl border border-border bg-card p-5 shadow-card">
                <div className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  <Hash className="h-3.5 w-3.5 text-primary" /> On this page
                </div>
                <ul className="space-y-1 text-sm">
                  {toc.map((t, i) => (
                    <li key={t.id}>
                      <a
                        href={`#${t.id}`}
                        className="flex items-start gap-2 rounded-md px-2 py-1.5 text-foreground/75 transition-colors hover:bg-primary/5 hover:text-primary"
                      >
                        <span className="mt-0.5 w-5 shrink-0 text-[10px] font-bold tabular-nums text-primary">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="line-clamp-2 leading-snug">{t.label}</span>
                      </a>
                    </li>
                  ))}
                </ul>
                {p.cta && (
                  <a
                    href={p.cta.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 flex w-full items-center justify-center gap-1.5 rounded-md bg-gradient-hero px-4 py-2.5 text-sm font-semibold text-primary-foreground shadow-card transition-transform hover:scale-[1.02]"
                  >
                    Open YaarWin <ArrowRight className="h-4 w-4" />
                  </a>
                )}
              </div>
            </div>
          </aside>

          {/* Article */}
          <article className="lg:col-span-9">
            <div className="prose-yaar max-w-none space-y-5 text-[15.5px] leading-[1.75] text-foreground/85 [&_p]:my-0 [&_ul]:my-0 [&_ul]:list-none [&_ul]:space-y-2 [&_ul]:pl-0 [&_li]:relative [&_li]:pl-6 [&_li]:before:absolute [&_li]:before:left-0 [&_li]:before:top-[0.55em] [&_li]:before:h-1.5 [&_li]:before:w-1.5 [&_li]:before:rounded-full [&_li]:before:bg-primary [&_strong]:text-foreground [&_a]:font-medium [&_a]:text-primary hover:[&_a]:underline">
              {p.sections.map((s, i) => {
                const id = slugify(s.heading);
                const num = String(i + 1).padStart(2, "0");
                return (
                  <section key={i} id={id} className="scroll-mt-24 pt-2 first:pt-0">
                    <div className="mb-5 flex items-start gap-4 border-l-4 border-primary pl-4">
                      <div>
                        <div className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
                          Section {num}
                        </div>
                        <h2 className="mt-1 text-2xl font-extrabold tracking-tight text-foreground sm:text-[28px]">
                          {s.heading}
                        </h2>
                      </div>
                    </div>
                    <div className="space-y-4">
                      {s.paragraphs?.map((para, j) => <p key={j}>{para}</p>)}
                      {s.bullets && (
                        <ul>
                          {s.bullets.map((b, j) => <li key={j}>{b}</li>)}
                        </ul>
                      )}
                      {s.highlight && (
                        <div className="rounded-xl border-l-4 border-primary bg-primary/5 p-4 text-sm">
                          <strong className="text-primary">Quick answer:</strong> {s.highlight}
                        </div>
                      )}
                    </div>
                    {i < p.sections.length - 1 && (
                      <div className="mt-10 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
                    )}
                  </section>
                );
              })}

              {p.cta && (
                <div className="mt-12 overflow-hidden rounded-2xl bg-gradient-hero p-8 text-center text-primary-foreground shadow-elegant">
                  <h3 className="text-xl font-bold sm:text-2xl">{p.cta.label}</h3>
                  <a
                    href={p.cta.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-1.5 rounded-md bg-white px-6 py-2.5 text-sm font-semibold text-primary shadow-card transition-transform hover:scale-105"
                  >
                    Open YaarWin <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              )}

              {p.related && p.related.length > 0 && (
                <div className="mt-12 rounded-2xl border border-border bg-secondary/40 p-6 sm:p-8">
                  <div className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-primary">
                    Continue reading
                  </div>
                  <ul className="grid gap-2 sm:grid-cols-2">
                    {p.related.map((r) => (
                      <li key={r.to}>
                        <a
                          href={r.to}
                          className="flex items-center gap-2 rounded-lg p-2.5 text-sm transition-colors hover:bg-background"
                        >
                          <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
                          <span className="text-foreground/85">{r.label}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </article>
        </div>
      </section>

      {p.faqs && p.faqs.length > 0 && (
        <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 sm:pb-20">
          <div className="rounded-3xl border border-border bg-secondary/30 p-6 sm:p-10">
            <FAQ items={p.faqs} />
          </div>
        </section>
      )}
    </>
  );
}

void Link;
