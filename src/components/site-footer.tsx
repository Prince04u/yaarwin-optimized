import { Link } from "@tanstack/react-router";
import logo from "@/assets/yaarwin-logo.webp";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-secondary/40">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <Link to="/" className="flex items-center gap-2 font-bold">
              <img src={logo} alt="YaarWin" className="h-8 w-8 rounded-full" width={32} height={32} />
              <span>Yaar<span className="text-primary">Win</span></span>
            </Link>
            <p className="mt-3 text-sm text-muted-foreground">
              India's trusted resource hub for the YaarWin colour prediction platform — guides, gift codes, and safety tips.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold">Platform</h4>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li><Link to="/games" className="hover:text-primary">Games</Link></li>
              <li><Link to="/how-to-play" className="hover:text-primary">How to Play</Link></li>
              <li><Link to="/gift-code" className="hover:text-primary">Gift Code</Link></li>
              <li><Link to="/download-app" className="hover:text-primary">Download App</Link></li>
              <li><Link to="/yaarwin-bonuses" className="hover:text-primary">Bonuses</Link></li>
              <li><Link to="/yaarwin-agency-program" className="hover:text-primary">Agency Program</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold">Resources</h4>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li><Link to="/blog" className="hover:text-primary">Blog</Link></li>
              <li><Link to="/gift-code-guide" className="hover:text-primary">Gift Code Guide</Link></li>
              <li><Link to="/yaarwin-giftcode-today" className="hover:text-primary">Today's Codes</Link></li>
              <li><Link to="/yaarwin-working-gift-codes-2026" className="hover:text-primary">Working Codes 2026</Link></li>
              <li><Link to="/faq" className="hover:text-primary">FAQ</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold">Company</h4>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li><Link to="/about" className="hover:text-primary">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
              <li><Link to="/privacy-policy" className="hover:text-primary">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-primary">Terms & Conditions</Link></li>
              <li><Link to="/disclaimer" className="hover:text-primary">Disclaimer</Link></li>
              <li><a href="https://t.me/yaarrwin" target="_blank" rel="noopener noreferrer" className="hover:text-primary">Telegram Community</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 text-sm text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} YaarWin Information Hub. All rights reserved.</p>
          <p>
            Site developed by{" "}
            <a href="https://t.me/veeranjan_solutions" target="_blank" rel="noopener noreferrer" className="font-medium text-primary hover:underline">
              Veeranjan Solutions
            </a>
          </p>
        </div>
        <p className="mt-4 text-center text-xs text-muted-foreground">
          This site is an independent informational resource. Please play responsibly and only if of legal age in your jurisdiction.
        </p>
      </div>
    </footer>
  );
}