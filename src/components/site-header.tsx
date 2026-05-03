import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/yaarwin-logo.webp";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/games", label: "Games" },
  { to: "/how-to-play", label: "How to Play" },
  { to: "/gift-code", label: "Gift Code" },
  { to: "/download-app", label: "Download" },
  { to: "/blog", label: "Blog" },
  { to: "/about", label: "About" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        <Link to="/" className="flex items-center gap-2 font-bold">
          <img src={logo} alt="YaarWin logo" className="h-9 w-9 rounded-full" width={36} height={36} />
          <span className="text-lg tracking-tight">Yaar<span className="text-primary">Win</span></span>
        </Link>
        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="rounded-md px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-accent hover:text-foreground"
              activeProps={{ className: "rounded-md px-3 py-2 text-sm font-semibold text-primary bg-accent" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-2 lg:flex">
          <a href="https://yaarwin.net/#/" target="_blank" rel="noopener noreferrer"
            className="rounded-md px-4 py-2 text-sm font-medium text-foreground hover:text-primary">Login</a>
          <a href="https://yaarwin.net/#/" target="_blank" rel="noopener noreferrer"
            className="rounded-md bg-gradient-hero px-4 py-2 text-sm font-semibold text-primary-foreground shadow-elegant transition-transform hover:scale-[1.02]">
            Register
          </a>
        </div>
        <button onClick={() => setOpen(!open)} className="lg:hidden p-2" aria-label="Toggle menu">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 p-4">
            {navLinks.map((l) => (
              <Link key={l.to} to={l.to} onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2.5 text-sm font-medium hover:bg-accent">
                {l.label}
              </Link>
            ))}
            <a href="https://yaarwin.net/#/" target="_blank" rel="noopener noreferrer"
              className="mt-2 rounded-md bg-gradient-hero px-4 py-2.5 text-center text-sm font-semibold text-primary-foreground">
              Register Now
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}