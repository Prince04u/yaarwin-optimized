import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { ChevronRight, Home } from "lucide-react";
import { SiteHeader } from "./site-header";
import { SiteFooter } from "./site-footer";

interface Crumb { label: string; to?: string }

export function PageShell({ children, crumbs }: { children: ReactNode; crumbs?: Crumb[] }) {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      {crumbs && crumbs.length > 0 && (
        <nav aria-label="Breadcrumb" className="border-b border-border/60 bg-secondary/30">
          <ol className="mx-auto flex max-w-7xl flex-wrap items-center gap-1.5 px-4 py-3 text-xs text-muted-foreground sm:px-6 sm:text-sm">
            <li>
              <Link to="/" className="flex items-center gap-1 hover:text-primary">
                <Home className="h-3.5 w-3.5" /> Home
              </Link>
            </li>
            {crumbs.map((c, i) => (
              <li key={i} className="flex items-center gap-1.5">
                <ChevronRight className="h-3.5 w-3.5" />
                {c.to && i < crumbs.length - 1 ? (
                  <a href={c.to} className="hover:text-primary">{c.label}</a>
                ) : (
                  <span className="font-medium text-foreground">{c.label}</span>
                )}
              </li>
            ))}
          </ol>
        </nav>
      )}
      <main className="flex-1">{children}</main>
      <MobileStickyCTA />
      <SiteFooter />
    </div>
  );
}

function MobileStickyCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-border bg-background/95 p-3 shadow-elegant backdrop-blur lg:hidden">
      <div className="flex gap-2">
        <a href="https://www.jaiclub25.com/#/register?invitationCode=766633764567" target="_blank" rel="noopener noreferrer"
          className="flex-1 rounded-md border border-primary px-4 py-2.5 text-center text-sm font-semibold text-primary">
          Login
        </a>
        <a href="https://www.jaiclub25.com/#/register?invitationCode=766633764567" target="_blank" rel="noopener noreferrer"
          className="flex-1 rounded-md bg-gradient-hero px-4 py-2.5 text-center text-sm font-semibold text-primary-foreground shadow-elegant">
          Register Now
        </a>
      </div>
    </div>
  );
}

export function Section({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <section className={`mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 ${className}`}>{children}</section>;
}

export function Prose({ children }: { children: ReactNode }) {
  return (
    <div className="prose-yaar mx-auto max-w-3xl space-y-5 text-[15px] leading-relaxed text-foreground/85 [&_h2]:mt-10 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:tracking-tight [&_h2]:text-foreground [&_h3]:mt-6 [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:text-foreground [&_ul]:list-disc [&_ul]:space-y-1.5 [&_ul]:pl-5 [&_ol]:list-decimal [&_ol]:space-y-1.5 [&_ol]:pl-5 [&_strong]:text-foreground [&_a]:text-primary [&_a]:font-medium hover:[&_a]:underline">
      {children}
    </div>
  );
}
