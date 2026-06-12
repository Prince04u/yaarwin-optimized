import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, Section } from "@/components/page-shell";
import { FAQ, faqJsonLd } from "@/components/faq";
import { buildMeta, buildLinks, jsonLdScript, SITE } from "@/content/meta";
import { ArrowRight, Sparkles, Shield, Gift, Trophy, Users, BookOpen, Smartphone, CheckCircle2, Clock, FileCheck2, AlertTriangle, Target, Quote } from "lucide-react";
import logo from "@/assets/yaarwin-logo.webp";
import depositBonus from "@/assets/deposit-bonus.webp";
import dailySalary from "@/assets/daily-salary.webp";
import referralSuper from "@/assets/referral-super-bonus.webp";

const LAST_UPDATED = "May 1, 2026";

const homeFaqs = [
  { q: "What is YaarWin?", a: "YaarWin is a colour prediction and mini-lottery platform popular in India, featuring WinGo, K3, 5D Lottery, Trx Hash and instant mini games. Rounds are short and bets settle directly into your wallet." },
  { q: "How do I register on YaarWin?", a: "Open the official YaarWin site, tap Register, enter your phone number (+91) or email, set a strong password, verify the OTP, and bind your bank account before your first deposit." },
  { q: "Are YaarWin gift codes real?", a: "Yes — small codes worth ₹5 to ₹30 are issued regularly via the official Telegram community and inside the app. Avoid 'guaranteed ₹500' codes from anonymous channels — those are scams." },
  { q: "Is the YaarWin app safe to download?", a: "The APK from the official YaarWin website is the legitimate build. Avoid third-party download sites and Telegram file shares. The Android 'unknown apps' warning is standard for any non-Play-Store APK." },
  { q: "How fast are YaarWin withdrawals?", a: "After bank binding and KYC, withdrawals usually clear within a few hours. The first withdrawal typically takes longer because of additional verification." },
  { q: "Is this site the official YaarWin platform?", a: "No. We are an independent editorial site that publishes guides, gift code lists and safety content. For account or withdrawal issues, contact YaarWin's in-app support." },
  { q: "Can I really earn a fixed income on YaarWin?", a: "No. Every game is short-cycle and probabilistic — outcomes are independent of any 'prediction', 'hack' or paid Telegram tip. The realistic framing is entertainment with a fixed monthly cap, not income." },
  { q: "What documents do I need for KYC?", a: "Most users submit a PAN card and a bank passbook or cancelled cheque matching the holder's name. KYC must be completed before your first withdrawal — never share KYC documents with anyone outside the official app." },
  { q: "Which game has the simplest rules for beginners?", a: "WinGo 3-min. You pick Green, Red or Violet (or a digit 0–9), wait three minutes, and the result settles instantly. It is the cleanest entry point before exploring K3, 5D or Trx Hash." },
  { q: "How do you verify the gift codes published here?", a: "Our editorial team redeems each new code on a test account before publishing, records the credited amount and timestamp, and removes codes the moment they stop working. Codes that cannot be verified are never listed." },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: buildMeta({
      title: "YaarWin Login & Register – Free Bonus Codes 2026",
      description: "Login or register on YaarWin easily. Get updated bonus codes, free rewards and step-by-step guide for secure access in 2026.",
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
  YaarWin Login & Register 2026 – Bonus Codes & Secure Access
</h1>

<p className="mt-5 text-lg text-foreground/75">
  Login or register on YaarWin with step-by-step instructions, latest bonus codes, and free rewards. Get safe account access, signup details, and updated offers for 2026.
</p>
            <p className="mt-3 text-sm text-muted-foreground">
              <Clock className="mr-1 inline h-3.5 w-3.5 -translate-y-px text-primary" /> Last updated <strong className="text-foreground/80">{LAST_UPDATED}</strong> · Reviewed by the YaarWin Guide editorial team
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

      {/* INTRODUCTION — long-form, human-written */}
      <Section className="!py-14">
        <div className="mx-auto max-w-3xl space-y-5 text-[15.5px] leading-relaxed text-foreground/85">
          <h2 className="text-3xl font-bold tracking-tight text-foreground">A clear, no-hype introduction to YaarWin</h2>
          <p>
            If you've landed here, you've probably seen YaarWin mentioned in a Telegram group, a YouTube short, or a friend's WhatsApp story. The pitch usually sounds the same — pick a colour, win in three minutes, withdraw to UPI. The reality is more nuanced, and that's exactly what this site is built to explain.
          </p>
          <p>
            <strong>YaarWin is a real-money colour prediction and mini-lottery app focused on the Indian market.</strong> It runs short rounds (most last 30 seconds to 3 minutes), settles instantly into your in-app wallet, and pays out via UPI or bank transfer once KYC is complete. The platform combines five live game families — <em>WinGo, K3 Lotre, 5D Lottery, Trx Hash</em> and a rotating list of mini games — with a layered bonus economy that includes deposit boosts, daily check-in rewards, a five-tier referral super bonus and an agent program with daily salary tiers.
          </p>
          <p>
            We've spent the last several months opening the app, redeeming every promotion, timing every withdrawal and stress-testing every gift code that lands in the official Telegram community. The pages on this site are the cleaned-up version of those notes — written for someone who wants to understand the platform before they deposit a single rupee, not after.
          </p>
          <p>
            One ground rule before you read anything else: <strong>nobody, anywhere, can predict the next colour</strong>. Every paid 'prediction' channel, every 'AI hack' bot, every screenshot of a 99% win-rate strategy is, without exception, marketing for a referral link. The honest version of this hobby is a small, capped, entertainment budget — and that's the lens every guide on this site is written through.
          </p>
        </div>
      </Section>

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

      {/* GAME FAMILIES */}
      <Section className="!pt-0">
        <div className="mb-10 max-w-3xl">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-primary">The game library</p>
          <h2 className="text-3xl font-bold tracking-tight">Five game families, explained without the hype</h2>
          <p className="mt-3 text-foreground/70">A 60-second tour of every category on the platform — what each game is, how a round works, and who it's actually for.</p>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {[
            { title: "WinGo", round: "30s · 1m · 3m · 5m", desc: "The flagship colour prediction game. Pick Green, Red, Violet or a digit 0–9. Best entry point for beginners — start with the 3-minute room, not 30 seconds." },
            { title: "K3 Lotre", round: "1m · 3m · 5m · 10m", desc: "A three-dice game with multiple bet types — sum, big/small, single, double, triple. More variety, but stricter bankroll discipline required." },
            { title: "5D Lottery", round: "1m · 3m · 5m · 10m", desc: "Five-digit draw with position-based bets (A, B, C, D, E and Sum). Slower pace, higher payouts on exotic bets, longer learning curve." },
            { title: "Trx Hash", round: "Provably fair · 1m", desc: "Outcomes derived from TRON block hashes — verifiable on-chain. Same colour-prediction core as WinGo, with public fairness proofs." },
            { title: "Mini Games", round: "Instant", desc: "Crash, dice, plinko-style and other instant games. Highly volatile — treat strictly as entertainment, never as the core of your bankroll." },
            { title: "Daily Bonus Rooms", round: "Rotating", desc: "Limited-time rooms tied to events — usually higher rebate or referral multipliers. Rules change weekly, so always read the in-app notice first." },
          ].map((g) => (
            <div key={g.title} className="rounded-2xl border border-border bg-card p-5 shadow-card">
              <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-primary/10 px-2.5 py-1 text-[11px] font-semibold text-primary">
                <Clock className="h-3 w-3" /> {g.round}
              </div>
              <h3 className="text-lg font-bold">{g.title}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{g.desc}</p>
            </div>
          ))}
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
              <div className="aspect-[16/10] overflow-hidden bg-muted">
                <img src={b.img} alt={`${b.title} on YaarWin`} loading="lazy" decoding="async" width={600} height={375} className="h-full w-full object-cover transition-transform group-hover:scale-105" />
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

      {/* RESPONSIBLE PLAY */}
      <Section className="!pt-0">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-3xl border border-border bg-card p-8 shadow-card">
            <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary"><Target className="h-5 w-5" /></div>
            <h2 className="text-2xl font-bold tracking-tight">A sensible playbook (the only one that works)</h2>
            <ul className="mt-4 space-y-2.5 text-[15px] leading-relaxed text-foreground/85">
              <li className="flex gap-2"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" /> <span>Set a fixed monthly entertainment budget. When it's gone, the month is over — no top-ups, no 'one more recharge'.</span></li>
              <li className="flex gap-2"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" /> <span>Use flat stakes (≤2% of session bankroll). Skip every 'martingale' doubling system — they bankrupt fast on a long red streak.</span></li>
              <li className="flex gap-2"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" /> <span>Cap your session — 30 minutes, or 5 losing rounds, whichever comes first. Walk away on time, not on emotion.</span></li>
              <li className="flex gap-2"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" /> <span>Withdraw winnings the same day. Money sitting in the wallet is money that gets re-bet.</span></li>
              <li className="flex gap-2"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" /> <span>Never play with borrowed money, salary money, or rent money. If that's tempting, take a 30-day break.</span></li>
            </ul>
          </div>
          <div className="rounded-3xl border border-destructive/30 bg-destructive/5 p-8">
            <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-destructive/10 text-destructive"><AlertTriangle className="h-5 w-5" /></div>
            <h2 className="text-2xl font-bold tracking-tight">Common scams to ignore</h2>
            <ul className="mt-4 space-y-2.5 text-[15px] leading-relaxed text-foreground/85">
              <li>• 'Guaranteed' prediction Telegram channels asking for ₹500–₹2,000/month subscriptions.</li>
              <li>• APK files shared on random Telegram groups — the official build only comes from the YaarWin website.</li>
              <li>• Anyone asking for your password, OTP, or KYC photos. The platform never asks for this.</li>
              <li>• Gift codes promising ₹500+ instant credit. Real codes are small (₹5–₹30) and time-limited.</li>
              <li>• 'Recovery agents' DMing after a loss claiming they can refund withdrawals for a fee.</li>
            </ul>
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

      {/* METHODOLOGY & EDITORIAL */}
      <Section className="!pt-0">
        <div className="rounded-3xl border border-border bg-card p-8 shadow-card sm:p-12">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <p className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-primary">Editorial standards</p>
              <h2 className="text-3xl font-bold tracking-tight">How we research, verify and update every page</h2>
              <p className="mt-4 text-foreground/75">
                Trust isn't a marketing slogan — it's a workflow. Here is the exact process behind every guide, gift code list and bonus breakdown on this site.
              </p>
            </div>
            <ol className="space-y-5 lg:col-span-7">
              {[
                { t: "Hands-on testing", d: "Every game, bonus and gift code is tested on a live YaarWin account before publication. We record stake, payout, settlement time and any error states." },
                { t: "Two-editor review", d: "Each draft is reviewed by a second editor for accuracy, tone and any safety language that might mislead a beginner. Drafts that fail review are rewritten, not patched." },
                { t: "Source-of-truth screenshots", d: "Bonus tier amounts and salary tables are taken directly from in-app screenshots, not from forwarded WhatsApp images. We re-check after every visible app update." },
                { t: "Quarterly refresh + change log", d: "All major guides are refreshed at least every 90 days, and any time the platform changes a rule. Each page carries a visible 'Last updated' timestamp." },
                { t: "Clear separation", d: "We are an independent editorial site, not the YaarWin platform. We do not handle deposits, withdrawals or KYC — for those, contact in-app support." },
              ].map((s, i) => (
                <li key={s.t} className="flex gap-4">
                  <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-sm font-bold text-primary">{String(i+1).padStart(2,"0")}</span>
                  <div>
                    <div className="font-semibold">{s.t}</div>
                    <p className="mt-1 text-sm text-foreground/70">{s.d}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </Section>

      {/* TESTIMONIALS / SOCIAL PROOF */}
      <Section className="!pt-0">
        <div className="mb-10 max-w-3xl">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-primary">From the community</p>
          <h2 className="text-3xl font-bold tracking-tight">What readers tell us this guide actually fixed</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {[
            { q: "I almost installed an APK from a Telegram group. The download guide here told me exactly which page to use on the official site. Saved me from a fake build.", who: "Rohit · Pune" },
            { q: "The bonus tier tables are the only place I've found where every amount is listed with the wagering rule next to it. No surprises after I deposited.", who: "Ankita · Bengaluru" },
            { q: "Best part is the safety section. It convinced me to set a monthly cap before I touched the app. Three months in, I'm still inside that budget.", who: "Imran · Hyderabad" },
          ].map((t) => (
            <figure key={t.who} className="rounded-2xl border border-border bg-card p-6 shadow-card">
              <Quote className="h-5 w-5 text-primary" />
              <blockquote className="mt-3 text-[15px] leading-relaxed text-foreground/85">"{t.q}"</blockquote>
              <figcaption className="mt-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">{t.who}</figcaption>
            </figure>
          ))}
        </div>
      </Section>

      {/* GLOSSARY */}
      <Section className="!pt-0">
        <div className="rounded-3xl border border-border bg-secondary/40 p-8 sm:p-12">
          <div className="mb-8 max-w-2xl">
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-primary">Glossary</p>
            <h2 className="text-3xl font-bold tracking-tight">YaarWin terms, in plain English</h2>
            <p className="mt-3 text-foreground/70">If you're new to colour prediction, these are the words you'll see most often inside the app and across our guides.</p>
          </div>
          <dl className="grid gap-x-10 gap-y-5 md:grid-cols-2">
            {[
              { t: "Round", d: "A single timed cycle of a game. WinGo rounds run 30s, 1m, 3m and 5m." },
              { t: "Bet slip", d: "Your selection (colour or digit) plus stake amount, locked before the round timer ends." },
              { t: "Wallet", d: "Your in-app balance. Deposits, winnings, bonuses and refunds all flow through this single ledger." },
              { t: "KYC", d: "Identity check (PAN + bank passbook) required before your first withdrawal." },
              { t: "Wagering requirement", d: "How many times a bonus must be played before it (or its winnings) become withdrawable." },
              { t: "Rebate", d: "A small percentage of your turnover returned to your wallet, regardless of win or loss." },
              { t: "Daily salary", d: "A fixed daily payout in the agency program, tied to verified active referrals." },
              { t: "Gift code", d: "Short alphanumeric promo code redeemable for a small wallet credit (typically ₹5–₹30)." },
            ].map((e) => (
              <div key={e.t}>
                <dt className="text-sm font-bold text-foreground">{e.t}</dt>
                <dd className="mt-1 text-sm text-foreground/75">{e.d}</dd>
              </div>
            ))}
          </dl>
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
      <Section className="!pt-0">
  <div className="rounded-3xl border border-border bg-card p-8 shadow-card">
    <h2 className="text-2xl font-bold tracking-tight">
      YaarWin Resources
    </h2>

    <p className="mt-4 text-muted-foreground">
      Explore additional YaarWin resources, login guides, account access
      information, bonus details, and platform updates.
    </p>

    <div className="mt-6 grid gap-4 sm:grid-cols-2">
      <a
        href="https://yaarwinn.live/"
        className="group rounded-xl border border-border bg-secondary/40 p-5 transition-all hover:border-primary/30 hover:bg-primary/5"
      >
        <div className="font-semibold text-primary">
          Yaarwin
        </div>
        <div className="mt-1 text-sm text-muted-foreground">
          Complete YaarWin guides, bonus codes, tutorials, and platform updates.
        </div>
      </a>

      <a
        href="https://yaarrwinlogin.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="group rounded-xl border border-border bg-secondary/40 p-5 transition-all hover:border-primary/30 hover:bg-primary/5"
      >
        <div className="font-semibold text-primary">
          YaarWin Login
        </div>
        <div className="mt-1 text-sm text-muted-foreground">
          Login instructions, registration help, account access information,
          and troubleshooting guides.
        </div>
      </a>
    </div>
  </div>
</Section>

      {/* FINAL CTA */}
      <Section className="!pt-0">
        <div className="rounded-3xl bg-gradient-hero p-8 text-center text-primary-foreground sm:p-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Ready to start with YaarWin?</h2>
          <p className="mx-auto mt-3 max-w-xl text-primary-foreground/90">
            Read the beginner guide first, set a small monthly budget, and play with discipline. We'll keep this site updated whenever the platform changes — bookmark it and come back any time.
          </p>
          <p className="mx-auto mt-3 max-w-xl text-xs text-primary-foreground/80">
            <FileCheck2 className="mr-1 inline h-3.5 w-3.5 -translate-y-px" /> 18+ only · Play within your means · Last updated {LAST_UPDATED}
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
