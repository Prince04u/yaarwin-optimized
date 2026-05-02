import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, Section } from "@/components/page-shell";
import { FAQ, faqJsonLd } from "@/components/faq";
import { buildMeta, buildLinks, jsonLdScript, SITE } from "@/content/meta";
import { ArrowRight, Sparkles, Shield, Gift, Trophy, Users, BookOpen, Smartphone, CheckCircle2 } from "lucide-react";
import logo from "@/assets/yaarwin-logo.jpg";
import depositBonus from "@/assets/deposit-bonus.jpg";
import dailySalary from "@/assets/daily-salary.jpg";
import referralSuper from "@/assets/referral-super-bonus.jpg";

const homeFaqs = [
  { q: "What is YaarWin?", a: "YaarWin is a colour prediction and mini-lottery platform popular in India, featuring WinGo, K3, 5D Lottery, Trx Hash and instant mini games. Rounds are short and bets settle directly into your wallet." },
  { q: "How do I register on YaarWin?", a: "Open the official YaarWin site, tap Register, enter your phone number (+91) or email, set a strong password, verify the OTP, and bind your bank account before your first deposit." },
  { q: "Are YaarWin gift codes real?", a: "Yes — small codes worth ₹5 to ₹30 are issued regularly via the official Telegram community and inside the app. Avoid 'guaranteed ₹500' codes from anonymous channels — those are scams." },
  { q: "Is the YaarWin app safe to download?", a: "The APK from the official YaarWin website is the legitimate build. Avoid third-party download sites and Telegram file shares. The Android 'unknown apps' warning is standard for any non-Play-Store APK." },
  { q: "How fast are YaarWin withdrawals?", a: "After bank binding and KYC, withdrawals usually clear within a few hours. The first withdrawal typically takes longer because of additional verification." },
  { q: "Is this site the official YaarWin platform?", a: "No. We are an independent editorial site that publishes guides, gift code lists and safety content. For account or withdrawal issues, contact YaarWin's in-app support." },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: buildMeta({
      title: "YaarWin — Colour Prediction Guide, Login, Gift Codes & Bonuses 2026",
      description: "India's trusted YaarWin information hub. Learn how to play, claim verified gift codes, register, login, download the app and stay safe — all in one place.",
      path: "/",
    }),
    links: buildLinks("/"),
    scripts: [
      jsonLdScript({
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: "YaarWin Information Hub",
        url: SITE.domain,
        description: "Independent YaarWin guide with gift codes, bonus tiers and safety content.",
      }),
      jsonLdScript(faqJsonLd(homeFaqs)),
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <PageShell>
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-soft">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-2">
          <div className="animate-fade-up">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
              <Sparkles className="h-3.5 w-3.5" /> Updated for 2026 · Independent guide
            </div>
            <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Your trusted guide to <span className="text-gradient">YaarWin</span>
            </h1>
            <p className="mt-5 text-lg text-foreground/75">
              Honest tutorials, verified gift codes, bonus breakdowns and safety advice — written by humans, reviewed by humans, and updated when the platform changes.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href={SITE.registerUrl} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md bg-gradient-hero px-6 py-3 text-sm font-semibold text-primary-foreground shadow-elegant transition-transform hover:scale-[1.03]">
                Register on YaarWin <ArrowRight className="h-4 w-4" />
              </a>
              <Link to="/how-to-play" className="inline-flex items-center gap-2 rounded-md border border-primary/30 bg-background px-6 py-3 text-sm font-semibold text-primary hover:bg-primary/5">
                Read the beginner guide
              </Link>
            </div>
            <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-xs text-muted-foreground">
              <span className="inline-flex items-center gap-1.5"><Shield className="h-3.5 w-3.5 text-primary" /> Safety-first content</span>
              <span className="inline-flex items-center gap-1.5"><CheckCircle2 className="h-3.5 w-3.5 text-primary" /> Verified gift codes</span>
              <span className="inline-flex items-center gap-1.5"><BookOpen className="h-3.5 w-3.5 text-primary" /> 1800+ word guides</span>
            </div>
          </div>
          <div className="relative animate-fade-up [animation-delay:120ms]">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-hero opacity-20 blur-3xl" />
            <div className="relative mx-auto flex h-72 w-72 items-center justify-center rounded-full bg-gradient-hero shadow-elegant sm:h-96 sm:w-96">
              <img src={logo} alt="YaarWin logo" fetchPriority="high" decoding="async" width={320} height={320} className="h-56 w-56 rounded-full object-cover sm:h-72 sm:w-72" />
            </div>
            <div className="mt-6 grid grid-cols-3 gap-3 text-center">
              {[
                { val: "15+", label: "Detailed guides" },
                { val: "2026", label: "Updated for" },
                { val: "100%", label: "Independent" },
              ].map((s) => (
                <div key={s.label} className="rounded-xl border border-border bg-card/80 p-3 shadow-card backdrop-blur">
                  <div className="text-xl font-extrabold text-primary">{s.val}</div>
                  <div className="text-[11px] text-muted-foreground">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* QUICK NAV CARDS */}
      <Section>
        <h2 className="mb-2 text-center text-3xl font-bold tracking-tight">Everything you need, in one place</h2>
        <p className="mx-auto mb-10 max-w-2xl text-center text-muted-foreground">
          Whether you're registering for the first time or chasing the latest gift code, start here.
        </p>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { to: "/how-to-play" as const, icon: BookOpen, title: "How to Play", desc: "Step-by-step beginner guide from registration to first withdrawal." },
            { to: "/games" as const, icon: Trophy, title: "Game Library", desc: "WinGo, K3, 5D Lottery, Trx Hash and mini games — explained simply." },
            { to: "/gift-code" as const, icon: Gift, title: "Gift Codes", desc: "Verified, timestamped codes with redemption steps and warnings." },
            { to: "/download-app" as const, icon: Smartphone, title: "Download App", desc: "Install the official Android APK safely with our 6-step guide." },
          ].map((c) => (
            <Link key={c.to} to={c.to} className="group rounded-2xl border border-border bg-card p-5 shadow-card transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-elegant">
              <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <c.icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold group-hover:text-primary">{c.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{c.desc}</p>
              <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-primary">Read guide <ArrowRight className="h-3 w-3" /></span>
            </Link>
          ))}
        </div>
      </Section>

      {/* WHAT IS YAARWIN */}
      <Section className="!pt-0">
        <div className="rounded-3xl border border-border bg-secondary/40 p-8 sm:p-12">
          <div className="grid gap-10 lg:grid-cols-3">
            <div className="lg:col-span-1">
              <h2 className="text-3xl font-bold tracking-tight">What is YaarWin?</h2>
              <p className="mt-3 text-sm text-muted-foreground">A quick, honest overview before you read the longer guides.</p>
            </div>
            <div className="space-y-4 text-[15px] leading-relaxed text-foreground/85 lg:col-span-2">
              <p>
                <strong>YaarWin is a colour prediction and mini-lottery platform popular in India.</strong> It bundles short-cycle games — WinGo, K3, 5D Lottery, Trx Hash and instant mini games — into a clean Android-style app with bonuses, daily salary tiers, gift codes and a referral program. Rounds last 30 seconds to a few minutes, and bets settle instantly into your wallet.
              </p>
              <p>
                Two things matter before you start. First, real money means real risk: every game on the platform is short-term random and no guide, channel or 'predictor' can change that. Second, the smartest players treat YaarWin like an entertainment subscription with a fixed monthly cap — never as an income or savings strategy. Every page on this site is written with that line clearly drawn.
              </p>
              <p>
                Use the menu above to dive in: <Link to="/how-to-play" className="font-semibold text-primary hover:underline">How to Play</Link> for the beginner walkthrough, <Link to="/yaarwin-bonuses" className="font-semibold text-primary hover:underline">Bonuses</Link> for the full reward breakdown, or <Link to="/gift-code" className="font-semibold text-primary hover:underline">Gift Code</Link> for today's verified codes.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* BONUSES SHOWCASE */}
      <Section className="!pt-0">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold tracking-tight">Bonuses & rewards on YaarWin</h2>
          <p className="mt-2 text-muted-foreground">Five layered programs — each with clear rules and tier tables.</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { img: depositBonus, title: "Deposit Bonus", desc: "First-deposit bonuses from ₹18 up to ₹488 across five tiers — paired with bank binding.", to: "/yaarwin-bonuses" as const },
            { img: referralSuper, title: "Referral Super Bonus", desc: "Milestone rewards from ₹48 (1 invite) up to ₹3,50,000 (5,000 invites) when referrals deposit and play.", to: "/yaarwin-bonuses" as const },
            { img: dailySalary, title: "Daily Salary System", desc: "Daily payout up to ₹50,000/day for verified team activity — 9 tiers, real members only.", to: "/yaarwin-agency-program" as const },
          ].map((b) => (
            <Link key={b.title} to={b.to} className="group overflow-hidden rounded-2xl border border-border bg-card shadow-card transition-all hover:-translate-y-1 hover:shadow-elegant">
              <div className="aspect-[3/4] overflow-hidden bg-muted">
                <img src={b.img} alt={b.title} loading="lazy" decoding="async" className="h-full w-full object-cover transition-transform group-hover:scale-105" />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold group-hover:text-primary">{b.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{b.desc}</p>
                <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-primary">View tiers <ArrowRight className="h-3 w-3" /></span>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      {/* HOW IT WORKS */}
      <Section className="!pt-0">
        <div className="rounded-3xl bg-gradient-hero p-8 text-primary-foreground sm:p-12">
          <h2 className="text-3xl font-bold tracking-tight">From signup to first session in 5 steps</h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {["Register with phone or email","Bind your bank / UPI","Make a small first deposit","Pick the 3-min WinGo room","Play at a fixed stake, then stop"].map((step, i) => (
              <div key={i} className="rounded-xl bg-white/10 p-4 backdrop-blur">
                <div className="text-2xl font-extrabold">{String(i+1).padStart(2,"0")}</div>
                <div className="mt-2 text-sm">{step}</div>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={SITE.registerUrl} target="_blank" rel="noopener noreferrer" className="rounded-md bg-white px-6 py-3 text-sm font-semibold text-primary shadow-card hover:scale-105 transition-transform">Register Now</a>
            <Link to="/how-to-play" className="rounded-md border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-white/20">Read full guide</Link>
          </div>
        </div>
      </Section>

      {/* WHY US */}
      <Section className="!pt-0">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Why readers trust this guide</h2>
            <p className="mt-3 text-foreground/75">
              We are an independent editorial team. We test every gift code we publish, document every bonus tier from the live app, and timestamp every page so you always know what's current. We never publish 'guaranteed wins' content because no such thing exists.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "Every guide reviewed quarterly and after platform updates",
                "Gift codes verified by our editorial team before publishing",
                "Safety-first: budget, time and KYC discipline lead every page",
                "No clickbait — clear answers above the fold on every page",
              ].map((line) => (
                <li key={line} className="flex items-start gap-3 text-sm">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span className="text-foreground/85">{line}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: Shield, label: "Safety-first", val: "Always" },
              { icon: BookOpen, label: "Long-form guides", val: "1800+ words" },
              { icon: Gift, label: "Verified codes", val: "Daily" },
              { icon: Users, label: "Community", val: "t.me/yaarrwin" },
            ].map((s) => (
              <div key={s.label} className="rounded-2xl border border-border bg-card p-5 shadow-card">
                <s.icon className="h-6 w-6 text-primary" />
                <div className="mt-3 text-2xl font-extrabold">{s.val}</div>
                <div className="text-xs text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* PROGRAMMATIC LINKS */}
      <Section className="!pt-0">
        <div className="rounded-3xl border border-border bg-secondary/40 p-8 sm:p-12">
          <h2 className="text-2xl font-bold tracking-tight">Explore deeper resources</h2>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { to: "/yaarwin-agency-program" as const, label: "YaarWin Agency Program — full tier breakdown" },
              { to: "/yaarwin-bonuses" as const, label: "All YaarWin Bonuses in one place" },
              { to: "/yaarwin-giftcode-today" as const, label: "Today's verified gift codes" },
              { to: "/yaarwin-working-gift-codes-2026" as const, label: "Working gift codes 2026" },
              { to: "/gift-code-guide" as const, label: "Complete gift code guide" },
              { to: "/blog" as const, label: "Editorial blog — strategy, safety, tutorials" },
            ].map((l) => (
              <Link key={l.to} to={l.to} className="group flex items-center gap-2 rounded-xl border border-border bg-card p-4 text-sm transition-colors hover:border-primary/30 hover:bg-primary/5">
                <ArrowRight className="h-4 w-4 shrink-0 text-primary transition-transform group-hover:translate-x-1" />
                <span className="font-medium text-foreground/85 group-hover:text-foreground">{l.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section className="!pt-0">
        <FAQ items={homeFaqs} />
      </Section>

      {/* FINAL CTA */}
      <Section className="!pt-0">
        <div className="rounded-3xl bg-gradient-hero p-8 text-center text-primary-foreground sm:p-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Ready to start with YaarWin?</h2>
          <p className="mx-auto mt-3 max-w-xl text-primary-foreground/90">
            Read the beginner guide first, set a small budget, and play with discipline. We'll be here whenever you need a refresher.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a href={SITE.registerUrl} target="_blank" rel="noopener noreferrer" className="rounded-md bg-white px-6 py-3 text-sm font-semibold text-primary shadow-card hover:scale-105 transition-transform">Register on YaarWin</a>
            <Link to="/how-to-play" className="rounded-md border border-white/40 bg-white/10 px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-white/20">Read the guide</Link>
          </div>
        </div>
      </Section>
    </PageShell>
  );
}
