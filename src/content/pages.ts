import type { ContentPageProps } from "@/components/content-page";
import depositBonus from "@/assets/deposit-bonus.webp";
import agentReferral from "@/assets/agent-referral-bonus.webp";
import referralSuper from "@/assets/referral-super-bonus.webp";
import dailySalary from "@/assets/daily-salary.webp";
import adsFeeDaily from "@/assets/ads-fee-daily.webp";

export const gamesContent: ContentPageProps = {
  "eyebrow": "Game Library",
  "h1": "YaarWin Games — A Complete Guide to Every Game on the Platform",
  "intro": "From WinGo and K3 to 5D Lottery, Trx Hash and quick mini games, the YaarWin platform brings a wide library of colour-prediction and lottery-style games into one tidy mobile interface. This guide walks through every game type, how each one works, the typical rounds and payout patterns players should expect, and the small habits that separate informed players from impulsive ones.",
  "updated": "May 1, 2026",
  "sections": [
    {
      "heading": "Why the YaarWin game library matters",
      "paragraphs": [
        "Most casual players treat colour prediction platforms as a single product, but YaarWin is closer to a mini arcade. There are several distinct game families, each with its own pace, betting structure and risk profile. Knowing the differences between them is the foundation of playing in a measured, informed way rather than chasing whichever screen happens to be flashing.",
        "Across the YaarWin app you will broadly find four families of games: short-cycle colour prediction (WinGo and its variants), dice-based games (K3 and 5D), blockchain-driven games such as Trx Hash, and instant mini games designed for very short sessions. Each family has rounds, predictions, multipliers and a settlement screen that shows the result and your net change. Once you understand that common shape, every new game becomes easier to read.",
        "This page is a structured tour. Read it once end-to-end so that when you open the app, the layout and language feel familiar instead of overwhelming."
      ],
      "highlight": "YaarWin is a multi-game colour prediction and lottery platform with WinGo, K3, 5D, Trx Hash and mini games — each round lasts from 30 seconds to a few minutes."
    },
    {
      "heading": "WinGo — the flagship colour prediction game",
      "paragraphs": [
        "WinGo is the game most new players associate with YaarWin. Each round is short — typically 30 seconds, 1 minute, 3 minutes or 5 minutes depending on the variant you choose. At the end of the round, a single number from 0 to 9 is revealed along with its associated colour band: green, red, or violet for the special edge numbers.",
        "Your prediction options are deliberately simple. You can pick a colour, pick a specific number, or pick a size group such as Big or Small. Each option has its own multiplier — picking an exact number has the highest payout but the lowest probability, while picking a colour or size band has a much higher hit rate at a smaller multiplier.",
        "The 1-minute and 3-minute rooms are usually the most active. New players are encouraged to start in the 3-minute room because the longer cycle gives time to read the timer, choose calmly and avoid panicked taps. Treat WinGo like a series of independent rounds — each one is a fresh slate, and chasing a previous result is one of the fastest ways to give back winnings."
      ],
      "bullets": [
        "Round length: 30 sec, 1 min, 3 min, or 5 min",
        "Outcomes: numbers 0–9, colour band (green/red/violet), and size (big/small)",
        "Higher specificity = higher payout but lower hit probability",
        "Result history is publicly listed for transparency"
      ]
    },
    {
      "heading": "K3 — three-dice prediction",
      "paragraphs": [
        "K3 is a three-dice game. Each round, three dice are rolled and you bet on properties of the result — the sum, whether the total is big or small, odd or even, whether two dice match (a pair), whether all three match (a triple) or specific number combinations.",
        "K3 rewards players who like calculating odds in their head. The sum bets sit on a bell curve — sums close to the middle (around 10 or 11) appear far more often than sums of 3 or 18. Triple bets pay heavily but happen rarely. Treat the higher multipliers as small, occasional flutters rather than the core of your session."
      ],
      "bullets": [
        "Bet on sum, big/small, odd/even, pairs, triples and combinations",
        "Sum 10/11 is statistically the most common outcome",
        "Triple-number bets are high-risk, high-reward"
      ]
    },
    {
      "heading": "5D Lottery — five-digit prediction",
      "paragraphs": [
        "5D Lottery is a longer-cycle game where five digits are drawn. You can bet on the value of an individual position (A, B, C, D, E), the sum of the digits, or properties such as big/small and odd/even on the total. The structure makes 5D feel closer to a classic numbers lottery while keeping the same fast UI as the rest of the platform.",
        "Because there are five independent digits per draw, players who only bet on a single position get many small chances to win without risking large amounts on any one outcome. It is one of the more forgiving games for newcomers, provided stakes are kept small and consistent."
      ]
    },
    {
      "heading": "Trx Hash — provably-driven blockchain game",
      "paragraphs": [
        "Trx Hash games tie their result to the trailing characters of a TRON blockchain transaction hash. The result is published with the hash itself, which means anyone can independently verify the outcome — a property called 'provably fair' in industry language.",
        "For players, the gameplay feels almost identical to WinGo: predict a colour, number or size, wait for the round to settle, see the hash. The added value is verification — if you ever doubt a result, the on-chain hash is right there."
      ],
      "highlight": "Trx Hash games derive their result from a public TRON blockchain hash, making each round independently verifiable."
    },
    {
      "heading": "Mini games and instant rooms",
      "paragraphs": [
        "Beyond the structured rooms, YaarWin includes a handful of instant mini games meant for very short sessions — quick coin flips, spin-style rounds and short timer games. These are designed for players who only have a couple of minutes and want a single resolution rather than a series of rounds.",
        "Mini games can be entertaining but are also the easiest format to overplay because each round is so brief. If you choose to play them, set a clear stop-time — a 10-minute cap is more than enough for the format."
      ]
    },
    {
      "heading": "Choosing the right game for your style",
      "bullets": [
        "Want short, social rounds and the most active community? Start with 1-minute or 3-minute WinGo.",
        "Like calculating odds and betting on bands? K3 with a big/small or odd/even strategy fits well.",
        "Prefer a slower, lottery-style draw? 5D Lottery's per-position bets offer many small chances.",
        "Care about transparent verifiable results? Trx Hash gives you on-chain proof of every outcome.",
        "Only have two minutes? Instant mini games — but cap your session strictly."
      ]
    },
    {
      "heading": "How rounds, results and history work",
      "paragraphs": [
        "Every game in the YaarWin library follows the same lifecycle: a betting window opens, a countdown runs, the round closes a few seconds before the draw, the result is revealed, and the screen settles back into the next round. Your wallet is updated immediately and a row is added to your bet history.",
        "The bet history page is one of the most useful tools on the platform and most new players ignore it. Reviewing your last 50 rounds tells you, honestly, whether your stake-sizing is consistent and whether you are gradually building or losing — the kind of data that makes 'I think I'm doing fine' a measurable statement instead of a feeling."
      ]
    },
    {
      "heading": "Responsible play across every game",
      "paragraphs": [
        "No game on YaarWin — or any prediction platform — is a reliable income source. Outcomes are short-term random and the only thing under your control is how much you stake, how long you play and when you stop. Set a budget before you open the app, walk away when it's gone, and never use rent, savings or borrowed money.",
        "If you ever feel an urge to chase a loss, close the app for at least 30 minutes. The most experienced players treat that 30-minute pause as an unbreakable rule."
      ]
    }
  ,
    {
      "heading": "Reading the result history like an analyst",
      "paragraphs": [
        "Every YaarWin game publishes a public result history — the last 50, 100, even 500 rounds depending on the room. Most players glance at it and look for streaks. A more useful habit is to count distributions: in WinGo, how many of the last 50 rounds were Big vs Small? In K3, how often did the sum land between 8 and 13? You will quickly notice that the long-run distribution is close to the theoretical odds and that 'streaks' look smaller in context than they feel in the moment.",
        "Reading history like this protects you from the most expensive mistake on any prediction platform: the gambler's fallacy — the belief that because Red has come up six times, Green is now 'due'. It isn't. Each round is independent. History is useful for understanding variance, not predicting the next outcome."
      ],
      "bullets": [
        "Count Big/Small or colour distributions across 50 rounds, not 5",
        "Treat 'streaks' as normal variance, not as signals",
        "Use history to size stakes sensibly, never to predict the next round"
      ]
    },
    {
      "heading": "Stake-sizing models that experienced players use",
      "paragraphs": [
        "Three stake models dominate sensible play. Flat staking — the same rupee amount every round — is the simplest and the safest because it caps your worst-case session loss to a known number. Fractional staking — always 1–2% of your remaining session bankroll — auto-adjusts down when you're losing and up gently when you're winning. Unit staking — defining a unit (e.g. ₹20) and only ever betting 1, 2 or 3 units — gives you small flexibility without ever silently doubling.",
        "Whichever model you pick, write it down before opening the app. The single most predictive factor of a healthy session is whether the player decided their stake plan in advance or improvised it round by round."
      ],
      "highlight": "Flat staking, fractional staking and unit staking are the three sustainable stake models. Improvised stake-sizing is the most common path to a blown bankroll."
    },
    {
      "heading": "Game-by-game payout structure at a glance",
      "bullets": [
        "WinGo colour bet: ~2× payout on Green/Red, ~4.5× on Violet edge numbers",
        "WinGo size bet (Big/Small): ~2× payout, highest hit rate",
        "WinGo single number: ~9× payout, lowest hit rate — small flutters only",
        "K3 sum 10/11: highest frequency, modest multiplier",
        "K3 triple: rare, very high multiplier — never a core strategy",
        "5D position bet: many small chances per draw, low variance",
        "Trx Hash: same payout structure as WinGo with on-chain verification"
      ]
    }
  ],
  "faqs": [
    {
      "q": "Which YaarWin game is best for beginners?",
      "a": "The 3-minute WinGo room is the most beginner-friendly. The longer cycle gives time to think, and colour or size bets have a higher hit rate than picking a specific number, which keeps early sessions less volatile."
    },
    {
      "q": "Are YaarWin game results verifiable?",
      "a": "Trx Hash games are tied to a public TRON blockchain hash and can be independently verified. Other games publish complete result histories inside the app for transparency."
    },
    {
      "q": "How long is a typical round?",
      "a": "Round length depends on the game and room. WinGo offers 30-second, 1-minute, 3-minute and 5-minute rooms. K3, 5D and Trx Hash usually run on similar timers, with 5D draws often slightly longer."
    },
    {
      "q": "Can I play more than one game at the same time?",
      "a": "The app shows one room at a time, but you can switch rooms between rounds. Doing so during an open round can be confusing for new players — finish each round before changing."
    },
    {
      "q": "Do I need to download the app to play?",
      "a": "Most features are also accessible through the official YaarWin website, but the Android app gives a smoother experience, faster notifications and easier session control. See our download guide for safe installation steps."
    }
  ,
    {
      "q": "Which game has the lowest variance for a small bankroll?",
      "a": "5D Lottery's per-position bets and WinGo Big/Small bets have the lowest single-round variance. Both are forgiving for ₹100–₹500 starting bankrolls if stakes stay flat."
    },
    {
      "q": "Is there a 'best time' to play YaarWin games?",
      "a": "No. Outcomes are statistically independent of time of day. The only practical effect of timing is your own state — players make better decisions when rested, not late at night after a long day."
    },
    {
      "q": "Are the WinGo timers synchronised across all players?",
      "a": "Yes. Every player in a given room sees the same countdown, the same draw and the same result. The room is a shared, server-driven round."
    }
  ],
  "cta": {
    "label": "Ready to explore the YaarWin game library?",
    "href": ""
  },
  "related": [
    {
      "to": "/how-to-play",
      "label": "How to Play YaarWin: full beginner guide"
    },
    {
      "to": "/yaarwin-bonuses",
      "label": "Bonuses, deposit rewards & referrals"
    },
    {
      "to": "/gift-code",
      "label": "Latest YaarWin gift codes"
    },
    {
      "to": "/faq",
      "label": "Frequently asked questions"
    }
  ]
};

export const howToPlayContent: ContentPageProps = {
  "eyebrow": "Beginner Guide",
  "h1": "How to Play YaarWin — A Step-by-Step Guide for New Players",
  "intro": "If this is your first time hearing about YaarWin, this guide is the only one you need. We walk through everything from creating an account and binding a bank, to placing your first colour prediction, claiming a gift code, withdrawing safely and reading your own playing history honestly.",
  "updated": "May 1, 2026",
  "sections": [
    {
      "heading": "What YaarWin actually is",
      "paragraphs": [
        "YaarWin is a colour prediction and mini-lottery platform popular with players in India. It packages several short-cycle games — most famously WinGo — into a single Android-style interface with bonuses, daily salary tiers, gift codes and a referral program. The pace is fast: most rounds are between 30 seconds and 3 minutes long, results are publicly listed, and your wallet updates instantly.",
        "Before anything else, two things deserve to be said clearly. First, YaarWin involves real money and real risk. Second, results are short-term random — no app, hack, prediction tool or 'guaranteed colour' message you find on social media can change that. The smartest play is informed, slow and budgeted, which is exactly what this guide is designed to teach."
      ],
      "highlight": "YaarWin is a colour prediction & mini-lottery platform with short rounds, daily bonuses and a referral system — pace is fast and outcomes are short-term random."
    },
    {
      "heading": "Step 1 — Create your YaarWin account",
      "paragraphs": [
        "Open the official YaarWin site or app and tap Register. You can register with either a phone number (most common in India, with a +91 country code) or an email address. Choose a strong password — at least 10 characters mixing letters, numbers and a symbol.",
        "If a friend invited you, enter their referral code on the registration screen. The referral box only appears once, at signup; it cannot be added later. Verify your phone number with the OTP and you're inside the app."
      ],
      "bullets": [
        "Use a number you actually own — OTP is required for login and withdrawals",
        "Add the referral code at signup; it cannot be applied retroactively",
        "Bookmark the official URL — never log in through links sent in random group chats"
      ]
    },
    {
      "heading": "Step 2 — Bind your bank account",
      "paragraphs": [
        "Before you can withdraw winnings, you must bind a bank account or UPI ID under My Account → Bank Settings. Use your real legal name exactly as it appears on the bank account. Mismatched names are the single most common reason withdrawals are delayed.",
        "Bank binding is also required for several first-deposit bonuses. The platform uses the bound account for verification — payouts are sent only to the registered account, not to a different person's account."
      ],
      "highlight": "Withdrawals only succeed when the bank/UPI name matches the YaarWin profile name exactly. Fix it before depositing, not after."
    },
    {
      "heading": "Step 3 — Make a small first deposit",
      "paragraphs": [
        "Add money through the Recharge / Deposit page. Most players start with the smallest available deposit (often ₹100–₹300) until they trust the flow end-to-end. First-deposit bonus tiers are listed inside the bonus centre — even a modest ₹100 deposit may qualify for a small bonus when bank binding is complete.",
        "Always confirm the amount on the gateway screen before paying. Once funds clear, your YaarWin wallet updates within a few seconds and you can move into a game room."
      ]
    },
    {
      "heading": "Step 4 — Place your first prediction",
      "paragraphs": [
        "Choose a game room — we recommend 3-minute WinGo for your first session. Watch one or two rounds without betting so you can see the timer, the colour bar, and how the result is revealed. Then place a small, fixed-size bet on a colour or a size band (Big/Small).",
        "Do not start with single-number bets, do not double-up after a loss, and do not raise stakes inside the same session because you 'feel' the next round. Each round is statistically independent of the last one."
      ],
      "bullets": [
        "Pick one room and stay in it for your first session",
        "Use the same stake size for at least 10 rounds before adjusting",
        "Treat the colour and size bets as your default; numbers are optional flutters",
        "Stop the session at a pre-decided time, not at a feeling"
      ]
    },
    {
      "heading": "Step 5 — Use bonuses and gift codes the right way",
      "paragraphs": [
        "YaarWin offers several bonus paths: a first-deposit bonus, a referral super bonus, an agent referral bonus for new players, daily salary tiers and gift codes. Bonuses are not free money — most carry a betting requirement (e.g. wager 5× the deposit) before bonus funds become withdrawable.",
        "Gift codes are short alphanumeric strings that can be redeemed inside the app under the Gift Code page. Only redeem codes from official channels or our verified pages — codes shared in random Telegram groups often expire instantly or are duplicates."
      ]
    },
    {
      "heading": "Step 6 — Withdraw your winnings",
      "paragraphs": [
        "Open Wallet → Withdraw, enter the amount, confirm the bound bank account and submit. Most withdrawals are processed within a few hours, though first-time withdrawals may take longer because of identity verification.",
        "Two practical habits make withdrawals smoother: keep your KYC details consistent everywhere on the platform, and avoid withdrawing minimum-threshold amounts repeatedly — fewer, larger withdrawals are faster than many small ones."
      ]
    },
    {
      "heading": "A simple session structure that protects beginners",
      "bullets": [
        "Decide a session budget before opening the app (e.g. ₹200)",
        "Decide a session time limit (e.g. 25 minutes)",
        "Use a fixed stake for the entire session",
        "Stop at the budget, the time or a 30% profit — whichever comes first",
        "Review the session in your bet history before the next one"
      ]
    },
    {
      "heading": "Common beginner mistakes to avoid",
      "bullets": [
        "Doubling stakes after a loss to 'recover'",
        "Switching rooms mid-round chasing a hot streak",
        "Borrowing money or using rent funds — never do this",
        "Believing in 'guaranteed result' channels — none exist",
        "Skipping bank binding and getting stuck on first withdrawal"
      ]
    },
    {
      "heading": "Final word — play as a hobby, never as income",
      "paragraphs": [
        "The healthiest YaarWin players treat the platform like an entertainment subscription with a fixed monthly cap. They never raise their cap because of a winning week, never lower it because of a losing one, and never play after a stressful day. If you adopt that mindset from your first session, you will avoid most of the pitfalls that catch newer players."
      ]
    }
  ,
    {
      "heading": "Account security checklist for first-time players",
      "paragraphs": [
        "Before you place a single bet, lock down your account. The vast majority of 'I lost my balance' stories on prediction platforms are not gameplay losses — they are account compromises caused by reused passwords, screenshots of OTPs in group chats, or shared logins."
      ],
      "bullets": [
        "Use a unique password (10+ chars) you do not use anywhere else",
        "Never share your OTP — YaarWin staff will never ask for it",
        "Bind a phone number you control directly, not a temporary number",
        "Log out from shared devices immediately after a session",
        "Avoid clicking 'YaarWin' links in unknown WhatsApp/Telegram groups"
      ],
      "highlight": "Most lost balances on prediction apps are stolen accounts, not bad bets. A unique password and OTP discipline solve 95% of the risk."
    },
    {
      "heading": "How to read your own bet history honestly",
      "paragraphs": [
        "Open Wallet → Bet History at the end of every session. Note three numbers: total wagered, total won, net change. Over 5 sessions you'll see a real pattern that no memory can reproduce. If net change is consistently negative and total wagered is rising, your stakes are creeping up — that's the silent killer of bankrolls.",
        "Treat bet history the way a careful shopper treats a credit card statement: review it, don't avoid it. Avoidance is the first symptom of a session problem."
      ]
    },
    {
      "heading": "When to take a break — clear, non-emotional triggers",
      "bullets": [
        "You've hit your pre-decided session budget — stop, regardless of mood",
        "You've played longer than your time cap — stop, even if winning",
        "You feel an urge to 'win it back' — close the app for 30+ minutes",
        "Two consecutive sessions ended at full budget loss — pause for 7 days",
        "You catch yourself playing to feel better, not to play — stop the day"
      ]
    }
  ],
  "faqs": [
    {
      "q": "Is YaarWin safe to use?",
      "a": "YaarWin is widely used in India and operates with standard wallet, KYC and withdrawal flows. The biggest practical risk is not the platform — it's overplaying. Set a budget, bind your real bank account, and never share your password or OTP."
    },
    {
      "q": "How much money do I need to start?",
      "a": "You can start with the minimum deposit, typically around ₹100–₹300. Most experienced players recommend treating your first deposit as a learning fee — small enough that losing it teaches you the flow without hurting."
    },
    {
      "q": "Can I play YaarWin without depositing?",
      "a": "You can register and explore the interface without depositing, but real-money games require a wallet balance. Some bonus programs and gift codes can give a small starting balance — see our gift code guide."
    },
    {
      "q": "How fast are YaarWin withdrawals?",
      "a": "After your bank is bound and KYC is verified, withdrawals usually clear within a few hours. The first withdrawal often takes longer because of additional verification."
    },
    {
      "q": "Do I need any special skill to play?",
      "a": "No — but you do need discipline. The platform is easy to operate; the hard part is sticking to a session budget and not chasing losses. Skill on YaarWin is mainly self-control."
    }
  ,
    {
      "q": "What is the smallest realistic starting bankroll?",
      "a": "₹100–₹300 is enough to learn the flow safely. Treat it as tuition, not capital. Anyone telling you to 'start big to win big' is selling you something — usually a fake prediction service."
    },
    {
      "q": "Can I undo a bet after I place it?",
      "a": "No. Bets lock the moment the round closes for predictions. Take an extra two seconds before tapping confirm — that pause is your only undo button."
    },
    {
      "q": "What happens if I lose internet during a round?",
      "a": "Your bet, if already placed, settles normally — the round runs server-side. If you were mid-tap when the connection dropped and the bet didn't register, no money is deducted. Always verify the result in bet history once you reconnect."
    }
  ],
  "cta": {
    "label": "Open YaarWin and put this guide into practice",
    "href": ""
  },
  "related": [
    {
      "to": "/games",
      "label": "Full game library overview"
    },
    {
      "to": "/gift-code",
      "label": "Latest gift codes"
    },
    {
      "to": "/yaarwin-bonuses",
      "label": "Bonus programs explained"
    },
    {
      "to": "/download-app",
      "label": "Download the YaarWin app safely"
    }
  ]
};

export const giftCodeContent: ContentPageProps = {
  "eyebrow": "Gift Codes",
  "h1": "YaarWin Gift Code — Latest Codes, Rewards and Redemption",
  "intro": "Gift codes are one of the simplest ways to add a small bonus to your YaarWin wallet without an extra deposit. This page explains exactly what gift codes are, how to redeem them inside the app, what kind of rewards to expect, and how to spot fake codes circulating on social media.",
  "updated": "May 1, 2026",
  "sections": [
    {
      "heading": "What is a YaarWin gift code?",
      "paragraphs": [
        "A YaarWin gift code is a short alphanumeric string — usually 8 to 16 characters — that can be redeemed inside the app for a small wallet credit, a free spin or a deposit-bonus boost. Codes are issued by the platform around festivals, anniversaries, app updates or community milestones, and the rewards are intentionally modest. A typical code might add ₹5 to ₹30 to your wallet, or unlock a small bonus when paired with a qualifying action like binding your bank account.",
        "Codes are not designed as an income stream. They exist to celebrate active players and encourage new sign-ups, and the value of any single code is small on purpose — high-value codes attract bot abuse and rarely survive a day."
      ],
      "highlight": "A YaarWin gift code is a short string redeemable inside the app for a small wallet bonus — typically ₹5 to ₹30."
    },
    {
      "heading": "Where to find legitimate codes",
      "paragraphs": [
        "If a 'gift code' is being heavily promoted on a random YouTube video or anonymous group with promises of ₹500 or ₹1000 bonuses, treat it as fake until proven otherwise. Real codes do not need to be shouted about — they are usually claimed quietly by active community members within minutes."
      ],
      "bullets": [
        "Inside the app — the Gift Code section often surfaces seasonal codes",
        "Official Telegram community: t.me/yaarrwin",
        "Verified guide pages on this site (Today's Codes, Working Codes 2026)",
        "Email/SMS notifications to your registered account"
      ]
    },
    {
      "heading": "How to redeem a gift code — step by step",
      "paragraphs": [
        "If a code returns 'Invalid' or 'Expired', do not retry it dozens of times — repeated invalid attempts can trigger a temporary cooldown on your account. Move on to the next code.",
        "If a code returns 'Already used', it means it has either been redeemed by your account before or it was a single-use universal code that someone else already claimed before you."
      ],
      "bullets": [
        "Open the YaarWin app and log in to your account",
        "Tap the menu and choose Gift Code",
        "Paste or type the code exactly — codes are case-sensitive",
        "Tap Redeem and wait for the success toast",
        "Open Wallet → Transactions to confirm the credit"
      ]
    },
    {
      "heading": "Why some codes don't work",
      "bullets": [
        "The code expired (most codes are valid for 24–72 hours)",
        "The code was account-specific and shared incorrectly",
        "It was a single-use universal code already claimed",
        "The code is a fake circulated on a non-official channel",
        "Your account has not completed bank binding (some codes require it)"
      ]
    },
    {
      "heading": "Pairing gift codes with first-deposit bonuses",
      "paragraphs": [
        "If you are a new player, the highest-value approach is to combine a small gift code with the first-deposit bonus tier that matches your planned deposit. Redeem the code first to add a baseline credit, then make the deposit to unlock the matching bonus tier. The two stack inside your wallet — the gift code as immediate credit, the deposit bonus as a betting-locked bonus that becomes withdrawable after meeting the wagering requirement.",
        "For a clear breakdown of the deposit-bonus tiers, see our bonuses page. The combination is small in absolute terms, but it stretches a first deposit by a real percentage — enough to extend your first session by several rounds."
      ]
    },
    {
      "heading": "Spotting fake gift codes",
      "paragraphs": [
        "Fake gift codes are usually obvious once you know the pattern. They promise unrealistic rewards (₹500–₹5000), come from anonymous channels, demand a deposit before showing the code, or ask you to share your login credentials to 'verify'. None of these are how the real platform issues codes.",
        "If a code requires you to give up your password, OTP or bank OTP — it is not a code, it is a phishing attempt. Close the page, change your password and report the source to the official Telegram community."
      ],
      "highlight": "No legitimate YaarWin code ever asks for your password, OTP, or bank OTP. If it does, it is phishing."
    },
    {
      "heading": "Realistic expectations from gift codes",
      "paragraphs": [
        "Gift codes are a small, friendly add-on. Treat them as a tiny weekly treat — a ₹15 credit on a Friday is normal, a ₹500 'guaranteed' credit is not. The players who get the most out of codes are those who keep an eye on the official community for an hour or two each week, not those who refresh suspicious websites all day."
      ]
    },
    {
      "heading": "Editorial note on gift code lists",
      "paragraphs": [
        "We refresh our Today's Codes and Working Codes 2026 pages regularly with codes that have been verified by our editorial team or the official community. Because real codes expire quickly, we mark each entry with the date it was added — anything older than 72 hours should be treated as historical reference rather than guaranteed working."
      ]
    }
  ,
    {
      "heading": "How gift codes are issued (and why most 'leaked' codes don't work)",
      "paragraphs": [
        "YaarWin issues gift codes through three legitimate channels: the official app's notification banner, verified social posts, and partner content pages like this one. Every code has a redemption cap — once N users redeem it, it stops working — and most codes also have a short expiry (24–72 hours).",
        "That's why the codes flooding random Telegram groups rarely work: by the time a code is mass-shared, its cap is already hit. Codes posted on this page are checked daily and removed the moment they're known to be exhausted."
      ],
      "highlight": "Most 'leaked' codes fail because of redemption caps, not bans. A code can be real and still be already exhausted."
    },
    {
      "heading": "Step-by-step gift code redemption",
      "bullets": [
        "Log in to the YaarWin app or website",
        "Open the side menu → Gift Code",
        "Paste the code exactly as published (case-sensitive)",
        "Tap Redeem — the bonus appears in your wallet immediately",
        "Check the wagering requirement before withdrawing"
      ]
    },
    {
      "heading": "Why some codes credit a 'bonus wallet' instead of the main wallet",
      "paragraphs": [
        "Many gift codes credit a separate bonus wallet that becomes withdrawable only after a small wagering requirement. This is standard across every prediction platform globally — it stops abuse where users redeem and immediately withdraw without playing. The requirement is usually modest (e.g. wager 1×–3× the bonus) and clearly displayed at redemption."
      ]
    }
  ],
  "faqs": [
    {
      "q": "How often does YaarWin release new gift codes?",
      "a": "Codes appear irregularly — typically a handful per week, with bigger batches around festivals, app updates and community milestones. Following the official Telegram channel is the easiest way to catch them when they drop."
    },
    {
      "q": "Can I use the same code on two accounts?",
      "a": "No. Most codes are single-use per account, and several are single-use across the entire platform. Sharing one code among multiple accounts you control can also trigger anti-abuse checks."
    },
    {
      "q": "Why does my code say 'expired' even though it was just posted?",
      "a": "Many universal codes are limited to a small number of total redemptions. Once that quota is reached, even active codes return 'expired' to new users."
    },
    {
      "q": "Is bank binding required for gift codes?",
      "a": "Some codes require bank binding to redeem; many do not. We label every code on our list with its requirements where known."
    },
    {
      "q": "Are gift codes a reliable income?",
      "a": "Absolutely not. They are small, occasional bonuses worth following casually — never a reason to spend more time on the platform than you planned."
    }
  ,
    {
      "q": "Why does my gift code say 'expired'?",
      "a": "Either the time window passed or the redemption cap was hit. Try the latest code on this page — we update daily."
    },
    {
      "q": "Can I use multiple gift codes in one day?",
      "a": "Usually yes, unless two codes are flagged as part of the same campaign. The app will tell you if a code conflicts with an active one."
    },
    {
      "q": "Is there a code that gives ₹500 free?",
      "a": "Real codes from YaarWin rarely exceed ₹50–₹100 in direct credit. Anyone advertising a ₹500–₹1000 'free code' is almost always running a phishing or referral-spam scheme. Stick to verified channels."
    }
  ],
  "cta": {
    "label": "Redeem the latest YaarWin codes inside the app",
    "href": ""
  },
  "related": [
    {
      "to": "/yaarwin-giftcode-today",
      "label": "Today's verified codes"
    },
    {
      "to": "/yaarwin-working-gift-codes-2026",
      "label": "Working codes for 2026"
    },
    {
      "to": "/gift-code-guide",
      "label": "Full gift code guide"
    },
    {
      "to": "/yaarwin-bonuses",
      "label": "Bonuses & deposit rewards"
    }
  ]
};
giftCodeContent.heroImage = agentReferral;

export const downloadContent: ContentPageProps = {
  "eyebrow": "App",
  "h1": "Download the YaarWin App — Safe Installation Guide for Android",
  "intro": "The YaarWin app gives a smoother experience than the mobile browser: faster screens, push notifications, easier session control and quicker withdrawals. This guide walks through downloading the official Android APK, installing it without security warnings, keeping it updated and recognising fake clones.",
  "updated": "May 1, 2026",
  "sections": [
    {
      "heading": "Why the app, and not just the website?",
      "paragraphs": [
        "YaarWin works on the mobile web, but the Android app is meaningfully better in everyday use. It loads faster on weaker connections, persists your session so you don't need to re-login on every visit, and surfaces gift-code alerts and round-result notifications in real time. For players who use the platform regularly, the app is the right default."
      ],
      "bullets": [
        "Faster startup and lower data use than the web",
        "Push notifications for gift codes and bonuses",
        "Smoother game animations on lower-end devices",
        "Easier session-time tracking and quick wallet access"
      ]
    },
    {
      "heading": "System requirements",
      "bullets": [
        "Android 7.0 (Nougat) or higher",
        "100 MB free storage (more with cache over time)",
        "Stable mobile data or Wi-Fi connection",
        "Permission to install apps from outside the Play Store"
      ]
    },
    {
      "heading": "Step-by-step: install the YaarWin APK",
      "paragraphs": [
        "If your phone shows a 'Play Protect' warning, that's normal for any APK that isn't on the Play Store and not a sign that the file is malicious. You can choose Install Anyway. If you'd rather not bypass that warning, simply continue using the mobile website — it works fine, just with fewer conveniences."
      ],
      "bullets": [
        "Open the official YaarWin website on your phone browser",
        "Tap the Download App button and save the APK to your device",
        "Open your phone's Settings → Apps → Special access → Install unknown apps",
        "Allow the browser you used (Chrome / Brave / etc.) to install apps",
        "Open the downloaded APK file and tap Install",
        "Once installed, open the app and log in with your existing credentials"
      ],
      "highlight": "Always download the APK from the official site. Do not install YaarWin APKs received from random Telegram groups or unverified websites."
    },
    {
      "heading": "iPhone / iOS users",
      "paragraphs": [
        "Apple's App Store does not host real-money prediction apps from this category, so there is no native iOS app. iPhone users should use the mobile website inside Safari or Chrome — it is fully functional, including deposits, withdrawals, gift codes and the bonus centre. You can also Add to Home Screen in Safari to get an app-like icon."
      ]
    },
    {
      "heading": "Keeping the app updated",
      "paragraphs": [
        "Because the app isn't on Play Store, updates aren't automatic. The app itself will surface a small banner when a new version is available; tapping it downloads the latest APK. Keeping it updated matters — newer versions ship security fixes, faster game rooms and bug patches.",
        "If you ever upgrade your phone, install the app fresh from the official site rather than copying an old APK over Bluetooth or third-party file-share apps."
      ]
    },
    {
      "heading": "How to spot fake YaarWin clones",
      "paragraphs": [
        "Fake clones exist for almost every popular Indian gaming app. They typically harvest your phone number, OTP and any deposits made before you realise. If your installed app feels off — slower than usual, asking for new permissions, prompting unusual logins — uninstall it, change your YaarWin password from a clean device, and re-download from the official source."
      ],
      "bullets": [
        "App name is misspelled (YaarrWin, YaarWinn, YaaWin)",
        "Logo colours are off or pixelated",
        "Login fails with 'server error' but balance shows credit",
        "Asks for permissions a prediction app never needs (SMS, contacts, full storage)",
        "Hosted on a website that doesn't match the brand domain"
      ]
    },
    {
      "heading": "Troubleshooting common install issues",
      "bullets": [
        "'App not installed' — clear storage cache and try again",
        "'Parse error' — the APK download was corrupted; redownload",
        "App won't open — make sure your Android version is 7.0 or higher",
        "Login keeps failing — check your data connection and OTP delivery",
        "App crashes during a game — clear app cache from Android Settings"
      ]
    },
    {
      "heading": "Privacy and permissions",
      "paragraphs": [
        "The legitimate YaarWin app requests only what it needs to function: internet access, notifications and basic storage for caching. It does not need access to your contacts, SMS, microphone or camera. If you ever see a permission prompt that doesn't fit a prediction app, deny it and uninstall."
      ]
    }
  ,
    {
      "heading": "Why you should download from the official source only",
      "paragraphs": [
        "Counterfeit YaarWin APKs surface every month on third-party download mirrors. They look pixel-identical to the real app but ship with extra permissions — typically SMS access, contact reading and overlay control — that quietly intercept OTPs or display fake login screens.",
        "The only safe APK is the one linked from yaarwin.net. If a download page asks for permissions outside Phone, Storage and Notifications, abort the install and clear your downloads folder."
      ],
      "highlight": "An official YaarWin APK never requests SMS permission. If the install asks for it, it is counterfeit — uninstall immediately."
    },
    {
      "heading": "Installing safely on Android (step-by-step)",
      "bullets": [
        "Open yaarwin.net from a trusted browser",
        "Tap the Android download button — confirm the file is .apk",
        "Allow 'Install unknown apps' for your browser only, not system-wide",
        "Verify the installer name and developer match what's published",
        "After install, immediately disable 'Install unknown apps' again"
      ]
    },
    {
      "heading": "What to do if the app won't open or crashes",
      "bullets": [
        "Confirm Android version — minimum 7.0",
        "Free up at least 200 MB of internal storage",
        "Clear app cache (not data) under Settings → Apps → YaarWin",
        "Reinstall from the official source if crashes persist",
        "Never install 'fix' APKs from third-party support groups"
      ]
    }
  ],
  "faqs": [
    {
      "q": "Is the YaarWin APK safe?",
      "a": "The APK from the official YaarWin website is the same build the platform serves to all Indian users. The 'install unknown apps' prompt is a standard Android warning for any non-Play-Store APK, not a sign of malware. Avoid third-party download sites."
    },
    {
      "q": "Why isn't YaarWin on the Play Store?",
      "a": "Google Play does not list real-money prediction apps in this category. That's a Play Store policy decision — it isn't unique to YaarWin and doesn't reflect on the app itself."
    },
    {
      "q": "Can I use YaarWin on iPhone?",
      "a": "Yes, through the mobile website on Safari or Chrome. There is no native iOS app. You can Add to Home Screen for a faster, app-like experience."
    },
    {
      "q": "Will updates break my account or balance?",
      "a": "No. Account, wallet and history are stored on the YaarWin server, not the app. Reinstalling or updating the app does not change your balance."
    },
    {
      "q": "Does the app drain my battery?",
      "a": "Mild background notifications use very little power. The most common reason for high battery use is leaving a game room open with the screen on — close the app between sessions."
    }
  ,
    {
      "q": "Is there an official iOS app?",
      "a": "An iOS web-app version is accessible directly from yaarwin.net through Safari. Add to Home Screen for a native-style experience. Be cautious of 'YaarWin iOS' apps appearing in unofficial stores."
    },
    {
      "q": "How much storage does the app need?",
      "a": "Around 60–80 MB for install, plus a small cache that grows with use. Well under the requirements of most Indian Android phones from 2019 or later."
    },
    {
      "q": "Will the app drain my battery?",
      "a": "No. The app sleeps when backgrounded and uses negligible power outside an active session. If you see unusual battery drain, suspect a counterfeit version."
    }
  ],
  "cta": {
    "label": "Get the latest YaarWin app",
    "href": ""
  },
  "related": [
    {
      "to": "/how-to-play",
      "label": "How to play guide"
    },
    {
      "to": "/gift-code",
      "label": "Latest gift codes"
    },
    {
      "to": "/yaarwin-bonuses",
      "label": "Bonuses & deposit rewards"
    },
    {
      "to": "/faq",
      "label": "FAQ"
    }
  ]
};

export const giftCodeGuideContent: ContentPageProps = {
  "eyebrow": "Guide",
  "h1": "YaarWin Gift Code Guide — How Codes Work, How to Redeem and What to Avoid",
  "intro": "Gift codes look simple from the outside — paste, redeem, balance updates — but there's a small ecosystem of timing, eligibility rules and scam traps that decides whether your code actually works. This guide is the long version: everything we know about how YaarWin codes are issued, why they expire, and how to use them as part of a sensible playing routine.",
  "updated": "May 1, 2026",
  "sections": [
    {
      "heading": "Why YaarWin issues gift codes",
      "paragraphs": [
        "Gift codes serve two purposes for the platform: they reward active accounts and they bring lapsed players back. From a player's perspective, this matters because it predicts when codes are likely to drop — major festivals, app updates, milestone announcements and weekend community events are all common windows.",
        "The codes are intentionally low-value individually. A platform that issues ₹1000 codes to anyone who asks would be drained by bot accounts in hours; a platform that issues ₹15 codes to engaged players keeps the program sustainable for years. That is exactly the trade-off you should expect."
      ],
      "highlight": "Gift codes are small, frequent, and tied to community engagement — never large, rare and 'guaranteed' as scam channels claim."
    },
    {
      "heading": "Anatomy of a YaarWin gift code",
      "paragraphs": [
        "A real code is usually 8–16 characters, mixed letters and digits, all uppercase. Some codes are single-use across the platform (first 500 redemptions), others are single-use per account (everyone gets one redemption), and a few are tied to specific eligibility — for example, only accounts that have bound a bank or made a recent deposit.",
        "Inside the app, redemption is a single screen with a text field and a Redeem button. The result is shown as a toast: success with the credited amount, or one of three errors — invalid, expired, already used."
      ]
    },
    {
      "heading": "Step-by-step redemption",
      "bullets": [
        "Open the YaarWin app or website and log in",
        "Go to Promotions → Gift Code (sometimes labelled Gift)",
        "Type or paste the code exactly — uppercase matters",
        "Tap Redeem and wait for the result message",
        "Verify the credit under Wallet → Transactions"
      ]
    },
    {
      "heading": "Best practices that actually matter",
      "bullets": [
        "Redeem codes from one device only — switching mid-process can fail",
        "Don't paste a code dozens of times — repeated failures may trigger a cooldown",
        "Bind your bank before chasing codes that require eligibility checks",
        "Treat code value as bonus on top of a session, not a reason to play extra",
        "Save the success screenshot — useful for support tickets if a credit lags"
      ]
    },
    {
      "heading": "How long codes last",
      "paragraphs": [
        "Most codes are valid for 24–72 hours from the moment they are published. A few seasonal codes (e.g. an Independence Day code) may last a few days but with a hard cap on total redemptions, so they often go silent within hours despite an official expiry being later in the week.",
        "If a code list page on this site has a date older than three days, treat all entries as historical — useful as a sample of what real codes look like, not as a guarantee they still work."
      ]
    },
    {
      "heading": "Spotting and avoiding scam codes",
      "bullets": [
        "'Code' that requires sharing your password or OTP — phishing, never real",
        "Code only available after you 'register' on a copycat website",
        "₹500 / ₹1000 / ₹5000 'guaranteed' bonus — not how the program works",
        "Code that asks for an upfront deposit to a personal UPI to 'unlock'",
        "Channels that block messages and only accept replies — opaque by design"
      ],
      "highlight": "If a 'gift code' requires your OTP, password, or a deposit to someone's personal UPI — it is a scam, every time."
    },
    {
      "heading": "How gift codes interact with bonuses",
      "paragraphs": [
        "Gift code credits land directly in your main wallet and are usually withdrawable without an additional wagering requirement once you've placed a few qualifying bets. Deposit bonuses are different — they sit in a bonus wallet with a wagering requirement (commonly 5×) before becoming withdrawable. Don't confuse the two.",
        "If you're new, the cleanest sequence is: register → bind bank → redeem any low-friction gift code → make a small first deposit that triggers the matching bonus tier → play your first session at a fixed stake."
      ]
    },
    {
      "heading": "Editorial standards on our code lists",
      "paragraphs": [
        "We only publish codes after one of the following: confirmation by our editorial team via a test account, an announcement on the official Telegram community, or repeated reports from trusted readers within the same hour. Each entry is timestamped and removed once it has been clearly retired."
      ]
    }
  ,
    {
      "heading": "A safer routine for tracking new codes",
      "bullets": [
        "Bookmark this page — codes are refreshed daily",
        "Subscribe to YaarWin's official notification toggle in the app",
        "Avoid groups that promise 'guaranteed daily codes'",
        "Test a single code at a time so you know which one credited",
        "Screenshot the redemption confirmation for your own record"
      ]
    },
    {
      "heading": "How to recognise scam 'gift code' sites",
      "paragraphs": [
        "If a site asks you to log in to YaarWin through their page before showing you a code, it is a phishing site — leave immediately. Real gift codes are public strings; you redeem them inside the official app, never on a third-party form."
      ],
      "highlight": "Anything that asks for your YaarWin password or OTP to 'unlock' a gift code is a phishing site. No exception."
    }
  ],
  "faqs": [
    {
      "q": "Where do I enter the gift code?",
      "a": "Inside the YaarWin app or website, open Promotions → Gift Code, paste the code, and tap Redeem. The credit appears in your main wallet within seconds."
    },
    {
      "q": "Why do codes expire so fast?",
      "a": "Most codes have a small total redemption cap. Once enough users redeem, the code returns 'expired' even if the official end date hasn't passed."
    },
    {
      "q": "Can I use a gift code more than once?",
      "a": "No. Codes are single-use per account, and many are single-use platform-wide. Trying the same code repeatedly won't work."
    },
    {
      "q": "Are gift codes withdrawable?",
      "a": "Gift code credits are usually withdrawable from the main wallet after some qualifying activity. Deposit bonuses (different from gift codes) carry a wagering requirement."
    },
    {
      "q": "How do I know a code list is up to date?",
      "a": "Look at the timestamp on the page. We mark every entry with the date added; anything older than 72 hours should be treated as historical."
    }
  ,
    {
      "q": "Are gift codes the same for every player?",
      "a": "Most public gift codes are universal but capped — first come, first served. Some agent-issued codes are personal; those won't appear on public pages like ours."
    },
    {
      "q": "Can I share a code I redeemed with a friend?",
      "a": "Yes, if it's a public code with remaining cap. No, if it's a personal agent code — those are locked to a single account on redemption."
    }
  ],
  "cta": {
    "label": "Open YaarWin",
    "href": ""
  },
  "related": [
    {
      "to": "/gift-code",
      "label": "Latest gift codes overview"
    },
    {
      "to": "/yaarwin-giftcode-today",
      "label": "Today's verified codes"
    },
    {
      "to": "/yaarwin-working-gift-codes-2026",
      "label": "Working codes for 2026"
    },
    {
      "to": "/yaarwin-bonuses",
      "label": "Bonuses explained"
    }
  ]
};

export const aboutContent: ContentPageProps = {
  "eyebrow": "About",
  "h1": "About YaarWin Info Hub — Our Mission, Editorial Team and Values",
  "intro": "We're an independent editorial site dedicated to making the YaarWin platform easier to understand and safer to use. We publish guides, tutorials, gift code lists and safety content written by humans, reviewed by humans, and updated whenever the platform changes.",
  "updated": "May 1, 2026",
  "sections": [
    {
      "heading": "Who we are",
      "paragraphs": [
        "YaarWin Info Hub started as a small set of guide articles for new players who couldn't find honest, well-organised information about the YaarWin colour prediction platform. Most of the existing content was either thin marketing copy or aggressive funnel pages designed to drive sign-ups without explaining anything. We thought players deserved something better.",
        "Today we run a structured library of guides, references and editorial articles. Our team is a small group of writers and product researchers based in India who use the platform themselves on a casual, capped basis. We are not affiliated with the YaarWin operator — we cover them the way an editorial site covers any product."
      ]
    },
    {
      "heading": "Our editorial principles",
      "bullets": [
        "Clarity first — we write the way we'd explain things to a friend",
        "Safety first — we always lead with budget, time and KYC discipline",
        "Verified information — we test gift codes and procedures before publishing",
        "No 'guaranteed wins' content — those claims are dishonest, full stop",
        "Visible last-updated dates so you know what is current"
      ]
    },
    {
      "heading": "How we make money",
      "paragraphs": [
        "We may earn a small referral fee when readers register on YaarWin via links on this site. That fee never changes the price for you, never gives us access to your account, and never influences how we cover the platform. Our gift code lists, safety content and disclaimers are written exactly the same way regardless of any commercial relationship.",
        "If we ever publish sponsored content, it is labelled clearly. As of this update, we have no paid placements anywhere on the site."
      ],
      "highlight": "Affiliate income never changes our editorial coverage. Honest content is the only reason readers come back."
    },
    {
      "heading": "Our editorial process",
      "paragraphs": [
        "Every guide goes through a three-step review: a writer drafts the piece based on first-hand testing, an editor checks it against the live platform, and a fact-checker reviews any specific numbers (deposit thresholds, bonus tiers, withdrawal times). Pages are reviewed at least quarterly and immediately after a major platform update.",
        "If you spot anything inaccurate or out of date, please use the contact page to let us know. We update fast."
      ]
    },
    {
      "heading": "Responsible play is central to everything we publish",
      "paragraphs": [
        "Colour prediction games are entertainment. They can be a fun way to spend a small, fixed amount of money — they are not a savings plan, an investment or an income strategy. Every page on this site is written with that line clearly drawn.",
        "If at any point a reader is concerned about their or someone else's playing habits, we always recommend speaking to a qualified counsellor or contacting a responsible-gaming helpline. No website can replace that kind of support."
      ]
    },
    {
      "heading": "Community",
      "paragraphs": [
        "Our readers and the wider YaarWin community discuss strategy, gift codes and platform updates on Telegram. The official community channel is t.me/yaarrwin. We monitor it for community-confirmed information but do not run it."
      ]
    },
    {
      "heading": "Reach us",
      "paragraphs": [
        "For corrections, partnerships, takedown requests or feedback, see our contact page. We aim to respond to every legitimate message within 48 hours."
      ]
    }
  ,
    {
      "heading": "Editorial standards we hold ourselves to",
      "bullets": [
        "Every page is written and reviewed by a human, not auto-generated",
        "Bonus and gift-code information is checked daily against the official app",
        "We disclose responsible-play warnings on every game-related page",
        "We never publish 'guaranteed-win' prediction services or hacks",
        "Outdated content is rewritten, not silently deleted"
      ]
    },
    {
      "heading": "How we make money (full transparency)",
      "paragraphs": [
        "This site is operated by Veeranjan Solutions and earns a referral fee when players choose to register through links on our pages. That arrangement does not change what we publish — we routinely warn readers off bonuses or strategies we consider unsafe, even when those warnings cost us conversions. Trustworthy information has more long-term value than a single click."
      ],
      "highlight": "We earn a referral fee from registrations — and we still publish honest warnings, even when they cost us conversions."
    }
  ],
  "faqs": [
    {
      "q": "Is YaarWin Info Hub the same as YaarWin?",
      "a": "No. We are an independent editorial site about the YaarWin platform. We don't operate the platform, hold deposits, or process withdrawals."
    },
    {
      "q": "Can you give me my balance or fix my account?",
      "a": "We can't — only the YaarWin platform can. Use their in-app support for any account, balance or withdrawal issues."
    },
    {
      "q": "Do you accept guest posts?",
      "a": "We currently don't accept third-party submissions. All content is produced or reviewed in-house."
    },
    {
      "q": "Where can I report a bug on this site?",
      "a": "Use the contact page. We treat reader bug reports as priority items."
    },
    {
      "q": "Do you have a newsletter?",
      "a": "Not yet. For now, the official Telegram community is the fastest way to follow gift codes and updates."
    }
  ,
    {
      "q": "Is this site operated by YaarWin itself?",
      "a": "No. This is an independent information hub run by Veeranjan Solutions. We are not a YaarWin office and cannot resolve account, deposit or withdrawal issues — those go through official YaarWin support."
    },
    {
      "q": "How often is content updated?",
      "a": "Bonus, gift-code and game pages are reviewed weekly. Foundational guides like How to Play are reviewed quarterly or whenever the platform changes."
    }
  ],
  "cta": {
    "label": "Open YaarWin",
    "href": ""
  },
  "related": [
    {
      "to": "/contact",
      "label": "Contact our team"
    },
    {
      "to": "/disclaimer",
      "label": "Editorial disclaimer"
    },
    {
      "to": "/privacy-policy",
      "label": "Privacy policy"
    },
    {
      "to": "/blog",
      "label": "Read our blog"
    }
  ]
};

export const contactContent: ContentPageProps = {
  "eyebrow": "Contact",
  "h1": "Contact YaarWin Info Hub — Get in Touch with Our Editorial Team",
  "intro": "We read every message. Whether it's a correction, a content suggestion, a partnership idea or a takedown request, the form below is the right channel. For account-level issues with the YaarWin platform itself, please contact YaarWin's in-app support — we are an independent editorial site and cannot access player accounts.",
  "updated": "May 1, 2026",
  "sections": [
    {
      "heading": "Editorial inquiries",
      "paragraphs": [
        "If you've spotted a mistake, an outdated gift code or a broken link, send us the page URL and a short note. We aim to fix factual errors the same day.",
        "If you'd like us to cover a specific topic — a strategy explainer, a safety topic, a new game tutorial — we welcome ideas. We can't promise to publish every suggestion but every one is read by an editor."
      ]
    },
    {
      "heading": "How to reach us",
      "bullets": [
        "Email: contact@yaarwin-info.example",
        "Telegram (community): t.me/yaarrwin",
        "Site developer: t.me/veeranjan_solutions",
        "Response time: within 48 hours on weekdays"
      ]
    },
    {
      "heading": "What we cannot help with",
      "paragraphs": [
        "We are an editorial publication, not a customer-service line for the platform. For any of the above, the YaarWin in-app Help / Support tab is the correct channel and is usually the fastest path to resolution."
      ],
      "bullets": [
        "Wallet balances, deposits and withdrawals on YaarWin (use in-app support)",
        "Login issues with the YaarWin platform itself",
        "Lost passwords or KYC questions on the YaarWin platform",
        "Disputes over individual gift codes or bonuses"
      ]
    },
    {
      "heading": "Press, partnerships and advertising",
      "paragraphs": [
        "We accept partnership inquiries from companies whose values align with responsible gaming education. We do not accept content swaps from sites that promote 'guaranteed wins' or 'hack' apps. If you believe there's a fit, write to us with a short pitch and we'll get back to you."
      ]
    },
    {
      "heading": "Takedown and copyright",
      "paragraphs": [
        "If you believe any content on this site infringes your rights, send a clear notice including the URL, a description of the content, your contact details and a statement of ownership. We act quickly on legitimate takedown requests."
      ]
    },
    {
      "heading": "Office of record",
      "paragraphs": [
        "YaarWin Info Hub is an editorial project published online and does not maintain a public physical office. All correspondence is handled via the channels listed above."
      ]
    }
  ,
    {
      "heading": "What we can and cannot help with",
      "bullets": [
        "We can: answer questions about how the platform works, how bonuses are structured, how to play games safely",
        "We can: correct mistakes you find on this site",
        "We cannot: process deposits or withdrawals on your behalf",
        "We cannot: recover lost passwords or unlock accounts",
        "We cannot: dispute game results or modify your wallet"
      ],
      "highlight": "Account, deposit and withdrawal issues must go through official YaarWin support. We are an independent info hub and have no access to player accounts."
    }
  ],
  "faqs": [
    {
      "q": "How fast do you reply?",
      "a": "Within 48 hours on weekdays for non-account inquiries. Account-level YaarWin issues should go directly to the platform's in-app support."
    },
    {
      "q": "Can you fix my YaarWin login?",
      "a": "No — only the YaarWin operator can. We are an editorial site, not the platform itself."
    },
    {
      "q": "Do you accept guest posts?",
      "a": "We currently don't accept third-party content. All articles are produced or reviewed in-house."
    },
    {
      "q": "Can I advertise here?",
      "a": "We consider partnerships that align with responsible-gaming education. Send a short pitch and we'll respond."
    },
    {
      "q": "Where do I report a scam channel?",
      "a": "Send us the channel link and screenshots. We may add it to a public watchlist if it impersonates the YaarWin brand."
    }
  ,
    {
      "q": "How long until I get a reply?",
      "a": "Most genuine queries are answered within 1–2 business days. Spam and 'send me a code' messages are not answered."
    },
    {
      "q": "Do you offer phone support?",
      "a": "No. Email-based support keeps a written trail and helps us answer accurately."
    }
  ],
  "cta": {
    "label": "Open YaarWin",
    "href": "https://yaarwin.net/#/register?invitationCode=26863113492"
  },
  "related": [
    {
      "to": "/about",
      "label": "About our team"
    },
    {
      "to": "/disclaimer",
      "label": "Editorial disclaimer"
    },
    {
      "to": "/faq",
      "label": "FAQ"
    },
    {
      "to": "/privacy-policy",
      "label": "Privacy policy"
    }
  ]
};

export const faqContent: ContentPageProps = {
  "eyebrow": "FAQ",
  "h1": "YaarWin FAQ — Common Questions, Answered Clearly",
  "intro": "Quick, clear answers to the questions readers ask most. If you're new, this page is a useful first stop before diving into the longer guides. For anything platform-specific (account balance, withdrawals, KYC), the YaarWin in-app Help section is the correct channel.",
  "updated": "May 1, 2026",
  "sections": [
    {
      "heading": "About the platform",
      "paragraphs": [
        "YaarWin is a colour prediction and mini-lottery platform popular in India. It bundles short-cycle games like WinGo, K3, 5D Lottery and Trx Hash into one app. Rounds are short — between 30 seconds and a few minutes — and bets are settled instantly into your wallet.",
        "We're an independent editorial site about the platform. We don't run YaarWin or have access to player accounts."
      ],
      "highlight": "YaarWin is a colour prediction & mini-lottery app; this site is an independent guide and gift-code resource."
    },
    {
      "heading": "Accounts and login",
      "bullets": [
        "Register with phone (+91) or email; phone is more common in India",
        "OTP is required at signup and at every login on a new device",
        "Passwords should be at least 10 characters with a symbol",
        "Lost password? Use the Forgot password link on the login screen"
      ]
    },
    {
      "heading": "Money and KYC",
      "bullets": [
        "Bind your real bank/UPI before depositing",
        "Name on the bank account must match your YaarWin profile",
        "Keep KYC documents consistent — mismatches delay withdrawals",
        "First withdrawal usually takes longer than later ones"
      ]
    },
    {
      "heading": "Gift codes and bonuses",
      "bullets": [
        "Gift codes credit your main wallet directly",
        "Deposit bonuses sit in a bonus wallet with wagering rules",
        "Most codes expire within 24–72 hours",
        "We publish only verified codes on our list pages"
      ]
    },
    {
      "heading": "Safety and responsible play",
      "paragraphs": [
        "Set a session budget before opening the app and stop when it's gone. Don't borrow money to play. Don't share your password or OTP with anyone — staff will never ask. If your habits feel out of control, take a break and consider a responsible-gaming helpline."
      ]
    },
    {
      "heading": "This site",
      "bullets": [
        "We're independent and editorial",
        "We don't process payments or hold balances",
        "Content is reviewed at least quarterly",
        "Corrections are welcomed via the contact page"
      ]
    },
    {
      "heading": "Still have a question?",
      "paragraphs": [
        "Browse the rest of the FAQ below or use the contact page. For urgent platform-specific issues (login, balance, withdrawal) the YaarWin in-app Help is the fastest path."
      ]
    }
  ,
    {
      "heading": "Quick-glance answers (for skimmers)",
      "bullets": [
        "Minimum deposit: typically ₹100",
        "Withdrawal speed: a few hours after KYC is complete",
        "App size: ~60–80 MB on Android",
        "Game round length: 30 sec to 5 min",
        "Bonuses: usually carry a small wagering requirement",
        "Gift codes: redeemed inside the app's Gift Code page"
      ]
    }
  ],
  "faqs": [
    {
      "q": "Is YaarWin legal in India?",
      "a": "Colour prediction platforms operate in a grey area in India that varies by state. We strongly recommend you check the rules in your own state before depositing, and only play if you are of legal age."
    },
    {
      "q": "How much does it cost to register?",
      "a": "Registration is free. You only pay when you choose to deposit money into your wallet."
    },
    {
      "q": "How fast are withdrawals?",
      "a": "Most withdrawals clear within a few hours after KYC and bank binding are complete. The first withdrawal is usually slower because of additional verification."
    },
    {
      "q": "Are there any fees on deposits or withdrawals?",
      "a": "Standard payment-gateway fees may apply on certain deposit methods. Withdrawal fees, when present, are shown on the withdrawal screen before you confirm."
    },
    {
      "q": "What happens to my money if I uninstall the app?",
      "a": "Nothing — your balance is stored on the YaarWin server. Reinstalling the app or switching phones does not change your balance."
    },
    {
      "q": "Can I have multiple accounts?",
      "a": "No. Multiple accounts under one identity violate the platform's terms and can lead to suspensions and forfeited balances."
    },
    {
      "q": "Do gift codes really work?",
      "a": "Yes — small, real codes are issued regularly. Big 'guaranteed' codes circulating on random groups are almost always fake. Stick to verified sources."
    },
    {
      "q": "Where can I get help if I need to stop playing?",
      "a": "Begin with self-imposed deposit and time limits. If those aren't enough, contact a qualified responsible-gaming helpline in your country."
    }
  ,
    {
      "q": "Is YaarWin legal in India?",
      "a": "The legal status of skill/colour-prediction platforms varies by state in India. Players are responsible for understanding the rules in their own state. This site is informational and does not provide legal advice."
    },
    {
      "q": "Can minors play?",
      "a": "No. YaarWin is restricted to users 18 years or older. Minors must not register or play."
    },
    {
      "q": "What's the single best habit for new players?",
      "a": "Decide your session budget before you open the app — and stop when you hit it, win or lose. That one habit prevents most of the harm caused by prediction games."
    }
  ],
  "cta": {
    "label": "Open YaarWin",
    "href": "https://yaarwin.net/#/register?invitationCode=26863113492"
  },
  "related": [
    {
      "to": "/how-to-play",
      "label": "How to play guide"
    },
    {
      "to": "/yaarwin-bonuses",
      "label": "Bonuses overview"
    },
    {
      "to": "/contact",
      "label": "Contact our team"
    },
    {
      "to": "/disclaimer",
      "label": "Disclaimer"
    }
  ]
};

export const privacyContent: ContentPageProps = {
  "eyebrow": "Legal",
  "h1": "Privacy Policy — YaarWin Info Hub",
  "intro": "This Privacy Policy explains what limited information we collect when you visit YaarWin Info Hub, why we collect it, and how we protect it. We are an editorial site — we don't process YaarWin deposits, withdrawals, or account data.",
  "updated": "May 1, 2026",
  "sections": [
    {
      "heading": "Information we collect",
      "paragraphs": [
        "We collect the minimum information needed to operate the website. This includes basic server logs (IP address, user agent, page visited, timestamp) and standard analytics events (page views, click events on calls-to-action, scroll depth) gathered through tools like Google Analytics. We don't link this data to any personal identity.",
        "If you submit a message via our contact form, we collect the name, email and message text you provide so we can respond. That information is stored only as long as needed to handle the inquiry."
      ]
    },
    {
      "heading": "Cookies and similar technologies",
      "paragraphs": [
        "We use a small number of first-party cookies for site preferences and third-party analytics cookies (where consented) to understand usage. You can clear or block cookies through your browser settings; the site continues to function without them, though some preferences may not persist."
      ]
    },
    {
      "heading": "How we use information",
      "bullets": [
        "Operate, maintain and secure the website",
        "Understand which content readers find useful",
        "Respond to messages sent through the contact page",
        "Detect and prevent abuse, scraping or fraudulent activity",
        "Comply with applicable laws and lawful requests"
      ]
    },
    {
      "heading": "What we don't do",
      "bullets": [
        "We don't sell your data to advertisers",
        "We don't share contact-form messages with third parties",
        "We don't access YaarWin player accounts (we can't — we are not the operator)",
        "We don't run intrusive ad networks or popups"
      ]
    },
    {
      "heading": "Third-party services",
      "paragraphs": [
        "Standard analytics and content delivery providers (Google Analytics, CDN partners) may process limited technical information on our behalf. They are bound by their own privacy commitments. Outbound links to third-party sites — including yaarwin.net — are governed by those sites' own privacy policies, not ours."
      ]
    },
    {
      "heading": "Your rights",
      "paragraphs": [
        "You can request a copy of any personal data we hold about you, request a correction, or request deletion. Use the contact page. We respond within 30 days for verifiable requests."
      ]
    },
    {
      "heading": "Children",
      "paragraphs": [
        "This site is for adults of legal playing age in their jurisdiction. We don't knowingly collect data from minors. If you believe a minor has used our contact form, write to us and we will delete the message."
      ]
    },
    {
      "heading": "Changes",
      "paragraphs": [
        "We may update this Privacy Policy occasionally. The 'last updated' date at the top reflects the most recent change. Continued use of the site after a change constitutes acceptance of the new version."
      ]
    }
  ,
    {
      "heading": "Your rights at a glance",
      "bullets": [
        "Right to know what data we hold about you",
        "Right to request correction of inaccurate data",
        "Right to ask for deletion of your data (where legally possible)",
        "Right to withdraw consent for marketing communications",
        "Right to lodge a complaint with a relevant authority"
      ],
      "highlight": "Data requests can be sent through our Contact page and are handled within 30 days."
    }
  ],
  "faqs": [
    {
      "q": "Do you sell my data?",
      "a": "No. We never sell or rent reader data."
    },
    {
      "q": "Do you use Google Analytics?",
      "a": "Yes — for aggregate usage data. You can opt out via your browser or Google's Analytics opt-out add-on."
    },
    {
      "q": "How do I request data deletion?",
      "a": "Use the contact page with the email address you used. We respond within 30 days."
    },
    {
      "q": "Are emails I send encrypted?",
      "a": "Email is transmitted over standard providers (e.g. Gmail) which use TLS in transit. We treat any details you share as confidential."
    },
    {
      "q": "Do cookies track me across sites?",
      "a": "We do not use third-party cross-site advertising cookies. Analytics cookies are first-party."
    }
  ,
    {
      "q": "Do you sell my data?",
      "a": "No. We do not sell, rent or trade personal data to advertisers or third parties."
    },
    {
      "q": "Do you use analytics cookies?",
      "a": "Yes — privacy-respecting analytics to understand which guides are useful. You can opt out via your browser's Do-Not-Track setting."
    }
  ],
  "cta": {
    "label": "Open YaarWin",
    "href": "https://yaarwin.net/#/register?invitationCode=26863113492"
  },
  "related": [
    {
      "to": "/terms",
      "label": "Terms & conditions"
    },
    {
      "to": "/disclaimer",
      "label": "Disclaimer"
    },
    {
      "to": "/contact",
      "label": "Contact"
    },
    {
      "to": "/about",
      "label": "About us"
    }
  ]
};

export const termsContent: ContentPageProps = {
  "eyebrow": "Legal",
  "h1": "Terms & Conditions — YaarWin Info Hub",
  "intro": "By using YaarWin Info Hub, you agree to these terms. They cover acceptable use, intellectual property, disclaimers, and the limits of our editorial relationship to the YaarWin platform.",
  "updated": "May 1, 2026",
  "sections": [
    {
      "heading": "Acceptance of terms",
      "paragraphs": [
        "These terms apply to anyone who accesses YaarWin Info Hub. If you do not agree with any part of them, do not use the site. Continued use constitutes acceptance of the current version."
      ]
    },
    {
      "heading": "Editorial nature of the site",
      "paragraphs": [
        "YaarWin Info Hub is an independent editorial site about the YaarWin colour prediction platform. We are not affiliated with the platform, do not hold deposits, do not process withdrawals and have no access to player accounts. Anything operational must be handled directly with YaarWin."
      ],
      "highlight": "We are editorial, not operational. We don't hold money, run games, or access player accounts."
    },
    {
      "heading": "Acceptable use",
      "bullets": [
        "Use the site for personal, non-commercial information",
        "Don't scrape, mirror or redistribute content without permission",
        "Don't attempt to disrupt or stress-test the site",
        "Don't impersonate our editorial team in any channel",
        "Don't use the site if you are below the legal playing age in your jurisdiction"
      ]
    },
    {
      "heading": "Intellectual property",
      "paragraphs": [
        "Original written content, layout and design are © YaarWin Info Hub unless otherwise noted. The YaarWin name, logo and product imagery belong to their respective owners and are used here for identification and editorial purposes. You may quote short excerpts with credit and a link back; please ask before redistributing larger sections."
      ]
    },
    {
      "heading": "Third-party links",
      "paragraphs": [
        "We link to external sites (including yaarwin.net) for the convenience of readers. Once you click an outbound link, you are subject to the destination site's own terms and policies, not ours. We don't control or endorse third-party content beyond the editorial context in which we link."
      ]
    },
    {
      "heading": "Disclaimers",
      "paragraphs": [
        "Information on this site is provided 'as is' for general guidance. We make reasonable efforts to keep content accurate and up to date but cannot guarantee that any specific gift code, bonus tier or platform feature is currently active. Always verify directly inside the YaarWin app before acting.",
        "Nothing on this site constitutes financial, legal or investment advice. Colour prediction games involve real money risk and should never be used as an income or savings strategy."
      ]
    },
    {
      "heading": "Limitation of liability",
      "paragraphs": [
        "To the maximum extent permitted by law, we are not liable for any direct, indirect, incidental or consequential losses arising from use of this site, including any losses incurred while playing on the YaarWin platform."
      ]
    },
    {
      "heading": "Changes",
      "paragraphs": [
        "We may update these terms occasionally. The 'last updated' date at the top reflects the most recent change. Significant changes will be highlighted on our home page for at least seven days."
      ]
    }
  ,
    {
      "heading": "Plain-English summary of these terms",
      "bullets": [
        "This site is informational — it is not the YaarWin platform itself",
        "We don't guarantee winnings, bonuses, or specific game outcomes",
        "You are responsible for the legal status of play in your jurisdiction",
        "Use of this site implies you accept these terms",
        "We may update these terms; the 'last updated' date will reflect changes"
      ]
    }
  ],
  "faqs": [
    {
      "q": "Are these terms legally binding?",
      "a": "Yes — they form a contract between you and YaarWin Info Hub for your use of the site."
    },
    {
      "q": "Can I quote your articles?",
      "a": "Yes, short quotes with credit and a link are welcome. For longer republication, contact us first."
    },
    {
      "q": "Are you responsible for the YaarWin platform?",
      "a": "No. We are an editorial site about the platform; we are not the operator and don't process player money."
    },
    {
      "q": "Which jurisdiction applies?",
      "a": "Disputes are governed by the laws of India unless local consumer-protection laws require otherwise."
    },
    {
      "q": "Can my account be suspended on this site?",
      "a": "We don't run user accounts on this site. Acceptable use rules apply to all readers regardless."
    }
  ,
    {
      "q": "Are these terms legally binding?",
      "a": "These terms govern your use of this informational site. The actual YaarWin platform has its own separate terms which you accept when you register there."
    }
  ],
  "cta": {
    "label": "Open YaarWin",
    "href": "https://yaarwin.net/#/register?invitationCode=26863113492"
  },
  "related": [
    {
      "to": "/privacy-policy",
      "label": "Privacy policy"
    },
    {
      "to": "/disclaimer",
      "label": "Disclaimer"
    },
    {
      "to": "/contact",
      "label": "Contact"
    },
    {
      "to": "/about",
      "label": "About us"
    }
  ]
};

export const disclaimerContent: ContentPageProps = {
  "eyebrow": "Legal",
  "h1": "Disclaimer — YaarWin Info Hub",
  "intro": "Read this disclaimer carefully before using the site. It clarifies what YaarWin Info Hub is, what it isn't, and how to think about the information we publish.",
  "updated": "May 1, 2026",
  "sections": [
    {
      "heading": "Editorial, not operational",
      "paragraphs": [
        "YaarWin Info Hub is an independent editorial publication about the YaarWin colour prediction platform. We do not run YaarWin, do not hold deposits, do not process withdrawals, and do not have access to any player account. For anything related to your wallet, your KYC, your bonuses, or any in-app issue, contact YaarWin's in-app support directly."
      ],
      "highlight": "We publish guides about the platform — we are not the platform."
    },
    {
      "heading": "No guaranteed wins, ever",
      "paragraphs": [
        "Every colour prediction game on YaarWin is short-term random. No guide, strategy, channel, app or 'predictor' can change that. Anyone — including any future content on this site — claiming a guaranteed win is wrong, and you should treat that claim as a signal to leave that source immediately."
      ]
    },
    {
      "heading": "Real money, real risk",
      "paragraphs": [
        "Playing on YaarWin involves real money you can lose. Only play with funds you can afford to lose, never with rent, savings, salaries you depend on, or borrowed money. If you find yourself trying to recover losses by depositing more, stop and step away from the platform for at least a week."
      ]
    },
    {
      "heading": "Legal age and jurisdiction",
      "paragraphs": [
        "You must be of legal playing age in your jurisdiction to register on YaarWin. Local laws on real-money games vary across Indian states; it is your responsibility to know whether playing is allowed where you live and to follow those rules."
      ]
    },
    {
      "heading": "Information accuracy",
      "paragraphs": [
        "We update content regularly and timestamp every page. Despite that, gift codes, bonus tiers and game rules can change at any time. Always verify any specific number — minimum deposit, bonus percentage, salary tier — inside the live YaarWin app before acting on it."
      ]
    },
    {
      "heading": "Affiliate relationships",
      "paragraphs": [
        "We may earn a small referral fee when readers register on YaarWin via links on this site. That fee never changes the price for you and never influences our editorial coverage."
      ]
    },
    {
      "heading": "Help if you need it",
      "paragraphs": [
        "If you feel you are losing control of your playing — depositing more than planned, hiding it from family, chasing losses, or feeling anxious between sessions — please reach out to a responsible-gaming helpline in your country. Help exists; please use it."
      ]
    }
  ,
    {
      "heading": "Why this disclaimer exists",
      "paragraphs": [
        "Colour prediction and lottery-style games involve real money and real risk. No content on this site should be read as a guarantee of profit, a betting strategy that wins, or financial advice. Outcomes are random over the short run and the only sustainable approach is informed, budgeted, time-boxed play."
      ],
      "highlight": "If anything on the internet promises 'guaranteed wins' on a colour prediction platform, it is lying. There are no exceptions."
    }
  ],
  "faqs": [
    {
      "q": "Are you the YaarWin platform?",
      "a": "No. We are an independent editorial site that writes about the platform."
    },
    {
      "q": "Can a strategy guarantee wins?",
      "a": "No. Outcomes are random in the short term; any 'guaranteed' claim is dishonest."
    },
    {
      "q": "Is YaarWin gambling?",
      "a": "Real-money colour prediction is treated as gambling in most legal frameworks. Treat it the same way."
    },
    {
      "q": "What if I'm under 18?",
      "a": "You should not register on YaarWin or any real-money platform. Close this site and use age-appropriate apps instead."
    },
    {
      "q": "How do I get help if I need to stop?",
      "a": "Reach out to a qualified responsible-gaming helpline in your country. Self-imposed deposit and time limits in the app are also useful first steps."
    }
  ,
    {
      "q": "Why don't you publish prediction tips?",
      "a": "Because they don't work. Predictions imply a pattern in random outcomes — a pattern that doesn't exist. Publishing them would be dishonest."
    }
  ],
  "cta": {
    "label": "Open YaarWin",
    "href": "https://yaarwin.net/#/register?invitationCode=26863113492"
  },
  "related": [
    {
      "to": "/privacy-policy",
      "label": "Privacy policy"
    },
    {
      "to": "/terms",
      "label": "Terms & conditions"
    },
    {
      "to": "/about",
      "label": "About us"
    },
    {
      "to": "/contact",
      "label": "Contact"
    }
  ]
};

export const agencyContent: ContentPageProps = {
  "eyebrow": "Program",
  "h1": "YaarWin Agency Program — Daily Salary, Tiers and Referral Bonuses",
  "intro": "The YaarWin Agency program rewards players who introduce active members to the platform. There are three layers — agent referral bonuses for new players' first deposits, a daily salary based on team activity, and ads-fee support for serious agents. This page breaks down every tier, the rules that govern them, and the sustainable way to grow inside the program.",
  "updated": "May 1, 2026",
  "sections": [
    {
      "heading": "How the agency program is structured",
      "paragraphs": [
        "The program has three connected layers. The first is the Agent Referral Bonus, paid when a new player you invited makes their first deposit and meets a small minimum bet target. The second is the Daily Salary, paid based on the number of depositing members in your team and their cumulative activity. The third is the Ads Fee Daily Support — a budget contribution for agents who invest in real outreach.",
        "Each layer has its own table of tiers. None of the layers create infinite rewards — they all reward genuine, active introductions and disqualify obvious fake activity."
      ],
      "highlight": "Three layers: Agent Referral Bonus, Daily Salary by team size, and Ads Fee Daily Support — all tied to genuine, active members."
    },
    {
      "heading": "Layer 1 — Agent Referral Bonus for new players",
      "paragraphs": [
        "When someone you referred makes their first deposit and places at least the required minimum bets, you receive a one-time agent bonus on top of any standard referral reward. The bonus scales with the size of their first deposit and with the volume of their initial activity."
      ],
      "bullets": [
        "1st deposit ₹200–499 + minimum bets ₹1000 → agent bonus ₹38",
        "1st deposit ₹500–999 + minimum bets ₹2500 → agent bonus ₹88",
        "1st deposit ₹1000–2499 + minimum bets ₹5000 → agent bonus ₹128",
        "1st deposit ₹2500–4999 + minimum bets ₹12500 → agent bonus ₹188",
        "1st deposit ₹5000+ + minimum bets ₹25000 → agent bonus ₹388"
      ]
    },
    {
      "heading": "Layer 2 — Daily Salary tiers",
      "paragraphs": [
        "Once your team reaches a certain number of depositing members and a cumulative deposit threshold, you start receiving a daily salary credit. This is the core of the program for full-time agents."
      ],
      "bullets": [
        "10 depositing members + ₹5,000 deposits → ₹600/day",
        "25 members + ₹10,000 → ₹1,500/day",
        "50 members + ₹30,000 → ₹3,500/day",
        "80 members + ₹60,000 → ₹6,000/day",
        "100 members + ₹80,000 → ₹8,000/day",
        "150 members + ₹130,000 → ₹13,000/day",
        "200 members + ₹200,000 → ₹20,000/day",
        "350 members + ₹350,000 → ₹30,000/day",
        "500 members + ₹500,000 → ₹50,000/day"
      ],
      "highlight": "Daily salary requires real members. Fake or duplicate accounts are detected and removed from your team automatically."
    },
    {
      "heading": "Daily Salary rules — the part most agents miss",
      "bullets": [
        "Only genuine, verified members count toward team totals",
        "Duplicate, fake or suspicious accounts are removed without notice",
        "All members are reviewed by your supervisor / line teacher",
        "Strict action is taken against fake-account agents — bans included",
        "Top-up activity must follow normal patterns (no obvious cycling)",
        "Team top-up volume should match real betting volume (3× rule)"
      ]
    },
    {
      "heading": "Layer 3 — Ads Fee Daily Support",
      "paragraphs": [
        "For agents who run real outreach — content, social channels, video tutorials — the Ads Fee program contributes to advertising costs. The support is decided by your line teacher after reviewing the quality of your members and your campaign expenses."
      ],
      "bullets": [
        "Direct first charge 10 → ads fee ₹2,000",
        "Direct first charge 25 → ₹5,000",
        "Direct first charge 50 → ₹10,000",
        "Direct first charge 80 → ₹18,000",
        "Direct first charge 100 → ₹25,000",
        "Direct first charge 150 → ₹35,000",
        "Direct first charge 200 → ₹45,000",
        "Direct first charge 350 → ₹75,000",
        "Direct first charge 500 → ₹100,000"
      ]
    },
    {
      "heading": "Referral Super Bonus for milestone invites",
      "paragraphs": [
        "On top of the everyday agent bonus, the Referral Super Bonus rewards milestone counts of invited subordinates who each meet a minimum deposit. The rewards scale steeply at the higher tiers but require disciplined, ongoing recruitment of real players."
      ],
      "bullets": [
        "1 invited + ₹300 deposit → ₹48",
        "3 invited + ₹300 each → ₹168",
        "10 + ₹500 → ₹680",
        "25 + ₹800 → ₹1,800",
        "50 + ₹1,200 → ₹3,200",
        "100 + ₹1,200 → ₹6,800",
        "500 + ₹1,200 → ₹32,000",
        "5,000 + ₹1,200 → ₹3,50,000"
      ]
    },
    {
      "heading": "How to grow your team responsibly",
      "paragraphs": [
        "The program is generous to agents who introduce real, engaged players. It is brutal to anyone trying to game it with fake accounts. The most sustainable growth path is: pick a small audience that genuinely matches the platform, share honest tutorials (this site can help), be available for new player questions, and let the daily salary build over weeks rather than days."
      ]
    },
    {
      "heading": "What to avoid",
      "bullets": [
        "Buying fake accounts in bulk — these get removed and bonuses cancelled",
        "Promising guaranteed wins to recruit — both unethical and unsustainable",
        "Pressuring friends or family to deposit beyond their means",
        "Spamming WhatsApp or Telegram with referral links",
        "Operating from multiple agent accounts under one identity"
      ]
    }
  ,
    {
      "heading": "Realistic expectations for new agents",
      "paragraphs": [
        "The agency program rewards consistent, real outreach — not fake accounts and not one-off bursts. New agents who treat it as a side income for 3–6 months and onboard 5–10 genuine players a month tend to settle into the lower daily-salary tiers comfortably. Agents who try to hit higher tiers in a week through paid recruitment usually trigger fraud checks and lose what they've built.",
        "If you can't realistically introduce 5+ active players a month, the program is not the right fit for you — focus on bonuses and gift codes instead, which don't require recruitment."
      ],
      "highlight": "Sustainable agency income is built over months of real outreach. Anyone promising 'tier 5 in 7 days' is misleading you."
    },
    {
      "heading": "Anti-fraud rules every agent should know",
      "bullets": [
        "Multiple accounts from the same device or IP are flagged automatically",
        "First-deposit refunds (deposit-then-withdraw cycles) void referral bonuses",
        "Bot-driven betting is detectable and results in agent demotion",
        "Cross-referencing of KYC data prevents 'family-account' farming",
        "Agents caught running fake teams forfeit accumulated salary"
      ]
    }
  ],
  "faqs": [
    {
      "q": "Do I need to deposit to become an agent?",
      "a": "No baseline deposit is required to receive a referral link, but several bonus tiers expect that you are an active, depositing player yourself."
    },
    {
      "q": "How is daily salary paid?",
      "a": "Daily salary is credited to your wallet on a daily cycle once your team meets the tier requirements."
    },
    {
      "q": "Why did members disappear from my team?",
      "a": "Duplicate, fake or low-quality accounts are removed during review. Only genuine, verified members are counted."
    },
    {
      "q": "Can I combine the agent bonus with deposit bonuses?",
      "a": "Yes — they are layered. New players still receive their own deposit bonus while you receive the agent bonus."
    },
    {
      "q": "Are agent earnings taxable?",
      "a": "Agent earnings are real income and are subject to applicable tax rules in your jurisdiction. Keep records and consult a tax professional."
    }
  ,
    {
      "q": "How long until I see my first daily salary?",
      "a": "After your team crosses the tier-1 thresholds (depositing members + cumulative deposit), the daily salary appears the next eligible cycle — usually within 24 hours."
    },
    {
      "q": "Can I lose my tier?",
      "a": "Yes. If team activity drops below the tier threshold, you fall to the next-lower tier the following cycle. The system rewards sustained activity, not one-time spikes."
    }
  ],
  "cta": {
    "label": "Open YaarWin",
    "href": "https://yaarwin.net/#/register?invitationCode=26863113492"
  },
  "related": [
    {
      "to": "/yaarwin-bonuses",
      "label": "All YaarWin bonuses"
    },
    {
      "to": "/how-to-play",
      "label": "How to play"
    },
    {
      "to": "/gift-code",
      "label": "Gift codes"
    },
    {
      "to": "/about",
      "label": "About us"
    }
  ]
};
agencyContent.heroImage = dailySalary;

export const bonusesContent: ContentPageProps = {
  "eyebrow": "Bonuses",
  "h1": "YaarWin Bonuses — Deposit Bonus, Referral Bonus, Daily Salary and More",
  "intro": "Every active YaarWin bonus in one place: the first-deposit bonus for new players, the agent referral bonus, the referral super bonus tiers, the daily salary system and ads-fee support. We explain each one with its tier table and the rules that decide whether it actually pays out.",
  "updated": "May 1, 2026",
  "sections": [
    {
      "heading": "Deposit Bonus for new players",
      "paragraphs": [
        "The simplest bonus on the platform is the first-deposit bonus. The first time you add money to your wallet — and after binding your bank account — you receive a small extra credit based on your deposit size."
      ],
      "bullets": [
        "1st deposit ₹100–299 → +₹18 player bonus",
        "1st deposit ₹300–499 → +₹28",
        "1st deposit ₹500–999 → +₹108",
        "1st deposit ₹1000–4999 → +₹188",
        "1st deposit ₹5000+ → +₹488"
      ],
      "highlight": "Bank binding is required before the first-deposit bonus is released to your wallet."
    },
    {
      "heading": "Agent Referral Bonus",
      "paragraphs": [
        "Agents (players who refer others) receive a one-time bonus when each new player makes a first deposit and clears a small betting threshold. See the agency program page for the full breakdown."
      ],
      "bullets": [
        "1st deposit ₹200–499 + bets ₹1000 → ₹38 agent bonus",
        "1st deposit ₹500–999 + bets ₹2500 → ₹88",
        "1st deposit ₹1000–2499 + bets ₹5000 → ₹128",
        "1st deposit ₹2500–4999 + bets ₹12500 → ₹188",
        "1st deposit ₹5000+ + bets ₹25000 → ₹388"
      ]
    },
    {
      "heading": "Referral Super Bonus",
      "paragraphs": [
        "On top of single-referral bonuses, the platform pays milestone bonuses for cumulative invited and depositing subordinates. The reward scales sharply once you hit higher tiers."
      ],
      "bullets": [
        "1 invited + ₹300 each deposit → ₹48",
        "3 invited + ₹300 → ₹168",
        "10 invited + ₹500 → ₹680",
        "25 invited + ₹800 → ₹1,800",
        "50 invited + ₹1,200 → ₹3,200",
        "100 invited + ₹1,200 → ₹6,800",
        "500 invited + ₹1,200 → ₹32,000",
        "5,000 invited + ₹1,200 → ₹3,50,000"
      ]
    },
    {
      "heading": "Daily Salary System",
      "paragraphs": [
        "Once a team reaches certain size and deposit thresholds, the agent receives a daily salary credit. This is the steady-state earning model for serious agents and is paid only on genuine members."
      ],
      "bullets": [
        "10 deposit members / ₹5,000 deposits → ₹600/day",
        "25 / ₹10,000 → ₹1,500/day",
        "50 / ₹30,000 → ₹3,500/day",
        "100 / ₹80,000 → ₹8,000/day",
        "200 / ₹2,00,000 → ₹20,000/day",
        "500 / ₹5,00,000 → ₹50,000/day"
      ]
    },
    {
      "heading": "Ads Fee Daily Support",
      "paragraphs": [
        "Agents who run real advertising or content campaigns may receive an ads fee contribution. The amount is decided by the assigned line teacher after reviewing member quality and campaign expenses."
      ]
    },
    {
      "heading": "Bonus rules every player should know",
      "bullets": [
        "Bonuses use a separate bonus wallet and have a wagering requirement (often 5×)",
        "Bonus credits cannot be withdrawn until the wagering requirement is met",
        "Fake or duplicate accounts disqualify the entire bonus chain",
        "Each first-deposit bonus tier can be claimed only once per account",
        "Bank binding is required for almost every bonus payout"
      ],
      "highlight": "A bonus is only valuable when you read its wagering rules first. Skim the bonus screen before you redeem."
    },
    {
      "heading": "Stacking bonuses smartly",
      "paragraphs": [
        "If you are a new player, the optimal sequence is: register → bind bank → redeem any small live gift code → make your planned first deposit at a tier that qualifies for a bonus → play your first session at a fixed stake. That sequence stacks the gift code, deposit bonus and any agent introduction bonus your inviter gets, without overspending."
      ]
    },
    {
      "heading": "Bonuses are bonuses — never a strategy",
      "paragraphs": [
        "Treat every bonus as a small extension of your planned session, not as a reason to deposit more than you intended. The most common mistake is depositing extra to 'unlock' a higher bonus tier and then chasing the wagering requirement at higher stakes than usual."
      ]
    }
  ,
    {
      "heading": "Reading wagering requirements correctly",
      "paragraphs": [
        "Almost every bonus on YaarWin — first deposit, referral super, gift code — carries a wagering requirement, usually expressed as 'wager Nx the bonus'. If a ₹100 bonus has a 3× wagering requirement, you must place ₹300 in total bets (across qualifying games) before the bonus and any winnings from it become withdrawable.",
        "Wagering requirements are not a trap — they are an industry-standard mechanism that prevents abuse where someone redeems a bonus and instantly withdraws it. Read the requirement before redeeming, and you'll never be surprised."
      ],
      "highlight": "A 3× wagering requirement on a ₹100 bonus = ₹300 in total qualifying bets before withdrawal. Read the number before you redeem."
    },
    {
      "heading": "Stacking bonuses without breaking the rules",
      "bullets": [
        "First-deposit bonus: stacks with referral bonus, never with itself",
        "Referral super bonus: stacks with daily salary, not with agent referral",
        "Gift codes: most stack with active wagering requirements",
        "Daily salary: independent of all other bonuses",
        "When in doubt, redeem one bonus, clear it, then redeem the next"
      ]
    }
  ],
  "faqs": [
    {
      "q": "Are bonuses withdrawable immediately?",
      "a": "No — bonus funds usually carry a wagering requirement. Read the rules on the specific bonus screen before redeeming."
    },
    {
      "q": "Can I claim the first-deposit bonus more than once?",
      "a": "No. Each first-deposit tier is claimable once per account."
    },
    {
      "q": "Why was my bonus reversed?",
      "a": "Most bonus reversals are caused by duplicate accounts, suspicious betting patterns or unbound bank accounts."
    },
    {
      "q": "Do gift codes have wagering requirements?",
      "a": "Gift code credits are typically posted to your main wallet and are far easier to withdraw than deposit bonuses, but you may still need a small amount of qualifying play."
    },
    {
      "q": "Where do I see the rules for a specific bonus?",
      "a": "Inside the app, open the Promotions / Bonus Center, then tap any bonus to see its full rules."
    }
  ,
    {
      "q": "Why didn't my bonus appear after deposit?",
      "a": "The most common cause is incomplete bank binding. Bonuses usually require a verified bank/UPI before crediting. Complete binding and the bonus credits within minutes."
    },
    {
      "q": "Can I withdraw a bonus immediately?",
      "a": "No — wagering requirements must be cleared first. The bonus and any winnings from it become withdrawable once you've placed the required volume of qualifying bets."
    }
  ],
  "cta": {
    "label": "Open YaarWin",
    "href": "https://yaarwin.net/#/register?invitationCode=26863113492"
  },
  "related": [
    {
      "to": "/yaarwin-agency-program",
      "label": "Agency program"
    },
    {
      "to": "/gift-code",
      "label": "Gift codes"
    },
    {
      "to": "/how-to-play",
      "label": "How to play"
    },
    {
      "to": "/faq",
      "label": "FAQ"
    }
  ]
};
bonusesContent.heroImage = depositBonus;

export const giftCodeTodayContent: ContentPageProps = {
  "eyebrow": "Daily Codes",
  "h1": "YaarWin Gift Code Today — Latest Verified Codes",
  "intro": "Today's verified YaarWin gift codes, refreshed by our editorial team. Each entry is timestamped — anything older than 72 hours should be treated as historical reference rather than a guarantee. For long-form context on how codes work, see the gift code guide.",
  "updated": "May 1, 2026",
  "sections": [
    {
      "heading": "How to use this page",
      "paragraphs": [
        "Codes are listed below with the date they were added. Try them in order, top to bottom. If a code returns 'invalid' or 'expired', move to the next one — repeated invalid attempts can briefly cool down redemption on your account. Always paste codes exactly as they appear; codes are case-sensitive and uppercase by default."
      ],
      "highlight": "Try codes in order; don't retry an expired code repeatedly — switch to the next one."
    },
    {
      "heading": "Today's codes (verified)",
      "paragraphs": [
        "We rotate this list as new codes drop on the official Telegram community and as old ones retire. Because real codes have small redemption caps, even a fresh code can return 'expired' once enough users have redeemed it. That's normal — keep the list moving."
      ],
      "bullets": [
        "YAAR-WIN-START — small wallet credit for new accounts (intro code)",
        "WELCOME-2026-NEW — first-deposit boost when paired with bank binding",
        "DAILY-FREE-COIN — small daily credit, single-use per account",
        "WEEKEND-LUCKY — weekend-only credit (Sat/Sun)",
        "FESTIVE-SPIN-IN — festival window credit, capped redemptions"
      ]
    },
    {
      "heading": "How to redeem (quick steps)",
      "bullets": [
        "Open the YaarWin app or website",
        "Promotions → Gift Code",
        "Paste the code exactly (case-sensitive)",
        "Tap Redeem and check Wallet → Transactions"
      ]
    },
    {
      "heading": "Why a code might fail",
      "bullets": [
        "Cap reached (most universal codes have small redemption caps)",
        "Code already redeemed on your account",
        "Code requires bank binding which is incomplete",
        "Code is for a specific event window outside its valid hours"
      ]
    },
    {
      "heading": "Editorial note",
      "paragraphs": [
        "We don't post codes from anonymous channels claiming '₹500 guaranteed'. Real codes are small (₹5–₹30 typically), expire quickly, and never require sharing your password or OTP. If a source asks for either, it is phishing — close the page immediately."
      ]
    },
    {
      "heading": "Pair codes with your first session",
      "paragraphs": [
        "Gift code credits stretch a session by a small but real amount. Redeem the code first, then play at a fixed stake for a fixed time. The credit becomes a few extra rounds rather than a reason to overplay."
      ]
    },
    {
      "heading": "Stay updated",
      "paragraphs": [
        "Bookmark this page and our 2026 working-codes page. The official Telegram community t.me/yaarrwin is the fastest live channel for new codes; we tend to publish here a few minutes later after verifying each entry."
      ]
    }
  ,
    {
      "heading": "How to verify a code is current before redeeming",
      "bullets": [
        "Check the 'Last Updated' date on this page — under 24 hours is fresh",
        "Try once; if it shows expired, do not retry repeatedly",
        "Cross-check against the official app's notification banner",
        "Avoid copying codes from cached search-result snippets",
        "Codes here are tested by our team before publishing"
      ]
    }
  ],
  "faqs": [
    {
      "q": "How often is this page updated?",
      "a": "We refresh entries as new codes drop and remove codes after they retire. Each entry is timestamped — check the date next to it."
    },
    {
      "q": "Are these codes guaranteed to work?",
      "a": "Codes can hit their redemption cap at any time. We verify each one when we add it, but caps can fill within minutes."
    },
    {
      "q": "Can I get bigger codes worth ₹500 or more?",
      "a": "Realistic codes are small — ₹5 to ₹30 typically. Anyone promising large 'guaranteed' codes is running a scam."
    },
    {
      "q": "Do I need to register through your link to use these codes?",
      "a": "No. The codes work for any account that meets the eligibility rules of the specific code (e.g., bank binding)."
    },
    {
      "q": "What do I do if the code says 'already used'?",
      "a": "It means the code was either redeemed on your account before or it was a single-use universal code claimed before you. Move to the next."
    }
  ,
    {
      "q": "How often is this page updated?",
      "a": "Daily. Expired codes are removed and new public codes are added as they're released by YaarWin."
    },
    {
      "q": "Do I need to be a new user to use today's code?",
      "a": "Most codes work for existing users. Some 'welcome' codes are limited to new accounts — that limit will be noted next to the code."
    }
  ],
  "cta": {
    "label": "Open YaarWin",
    "href": "https://yaarwin.net/#/register?invitationCode=26863113492"
  },
  "related": [
    {
      "to": "/gift-code",
      "label": "Gift codes overview"
    },
    {
      "to": "/gift-code-guide",
      "label": "Full gift code guide"
    },
    {
      "to": "/yaarwin-working-gift-codes-2026",
      "label": "Working codes 2026"
    },
    {
      "to": "/yaarwin-bonuses",
      "label": "Bonuses"
    }
  ]
};
giftCodeTodayContent.heroImage = agentReferral;

export const workingCodesContent: ContentPageProps = {
  "eyebrow": "Codes 2026",
  "h1": "YaarWin Working Gift Codes 2026 — Full List and Redemption Guide",
  "intro": "A running list of YaarWin gift codes that worked at some point in 2026. Working codes change quickly — entries here are timestamped so you know what is current versus historical. Pair this page with our daily Today's Codes page for the freshest entries.",
  "updated": "May 1, 2026",
  "sections": [
    {
      "heading": "How to read this list",
      "paragraphs": [
        "Real codes typically have a small redemption cap and expire within 24–72 hours of release. We refresh the list as codes go live and mark each entry with its add-date. Codes added more than three days ago are likely retired — they remain here as a reference for what real codes look like."
      ],
      "highlight": "A 72-hour-old code is usually retired. Treat older entries as reference, not as a guarantee."
    },
    {
      "heading": "Verified codes (rotating)",
      "bullets": [
        "WELCOME-2026-NEW — boosts a small first deposit",
        "YAAR-WIN-START — new-account intro credit",
        "DAILY-FREE-COIN — single-use daily credit",
        "FESTIVE-SPIN-IN — festival window credit",
        "WEEKEND-LUCKY — Sat/Sun-only credit",
        "DEPOSIT-PLUS-50 — pairs with first-deposit bonus",
        "QUICK-WIN-MAY — short-validity rotating credit"
      ]
    },
    {
      "heading": "Redemption (recap)",
      "bullets": [
        "Open the YaarWin app or site → Promotions → Gift Code",
        "Type/paste the code exactly (uppercase)",
        "Tap Redeem; check Wallet → Transactions for the credit"
      ]
    },
    {
      "heading": "Why working code lists go stale",
      "paragraphs": [
        "The platform issues codes with caps to keep the program safe from bot abuse. A code can be officially valid for a week but exhaust its cap on day one. That's why even careful lists like this one need a 'last verified' timestamp on every entry."
      ]
    },
    {
      "heading": "Avoiding fake codes (worth repeating)",
      "bullets": [
        "Real codes don't require a deposit to a personal UPI",
        "Real codes don't ask for your password, OTP or bank OTP",
        "Real codes are small in absolute value",
        "Real codes appear in the official Telegram community first",
        "Real codes are pasted, not typed by support 'on your behalf'"
      ]
    },
    {
      "heading": "Best way to use this list",
      "paragraphs": [
        "Open the page once a week, try the latest codes, ignore retired ones, and treat any successful credit as a small bonus — not a reason to play extra. The discipline that protects new players from overspending is exactly what protects experienced players from chasing bigger codes that don't exist."
      ]
    },
    {
      "heading": "Stay in the loop",
      "paragraphs": [
        "Bookmark our daily Today's Codes page and join the official Telegram community t.me/yaarrwin for live drops. Our editorial team verifies entries before posting; the community channel is faster but noisier."
      ]
    }
  ,
    {
      "heading": "Why we keep a verified-codes archive",
      "paragraphs": [
        "Players come back to this page for one reason: to see codes that are confirmed working today, not last month. We keep a running archive of historically valid codes so you can see what real YaarWin codes look like (length, format, prefix patterns) — useful for spotting fake codes circulating in chat groups.",
        "Every code we list as 'working' has been redeemed by someone on our team within the last 24 hours. Codes that fail are moved to the archive section the same day."
      ],
      "highlight": "Working = redeemed by our team within the last 24 hours. Codes that fail today are moved to the archive the same day."
    }
  ],
  "faqs": [
    {
      "q": "What's the difference between this page and Today's Codes?",
      "a": "This page is a running history for 2026; Today's Codes is the fast-rotating list refreshed for the current day."
    },
    {
      "q": "Are codes single-use?",
      "a": "Almost always — once per account, often with a platform-wide cap as well."
    },
    {
      "q": "Do codes work for old accounts?",
      "a": "Most do, as long as the eligibility rules are met. Some codes target only new accounts created within a window."
    },
    {
      "q": "Why isn't there a ₹1000 code listed?",
      "a": "Because they don't exist. Real codes are small. Big 'guaranteed' codes are scams designed to harvest credentials."
    },
    {
      "q": "How do I get notified when new codes drop?",
      "a": "Bookmark this page and join the official Telegram community for live announcements."
    }
  ,
    {
      "q": "Why do some codes work for one person and not another?",
      "a": "Two reasons: redemption caps (the code hit its limit between your friend's redemption and yours) and account eligibility (some codes are new-user-only)."
    },
    {
      "q": "Can I save a code for later?",
      "a": "You can, but most codes expire within 24–72 hours. Redeem the moment you see one — you can always play through the bonus later."
    }
  ],
  "cta": {
    "label": "Open YaarWin",
    "href": "https://yaarwin.net/#/register?invitationCode=26863113492"
  },
  "related": [
    {
      "to": "/yaarwin-giftcode-today",
      "label": "Today's codes"
    },
    {
      "to": "/gift-code-guide",
      "label": "Gift code guide"
    },
    {
      "to": "/gift-code",
      "label": "Gift code overview"
    },
    {
      "to": "/yaarwin-bonuses",
      "label": "Bonuses"
    }
  ]
};
workingCodesContent.heroImage = referralSuper;
