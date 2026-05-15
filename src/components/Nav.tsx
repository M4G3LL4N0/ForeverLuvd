"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  { href: "/onboarding", label: "Get Started" },
  { href: "/family", label: "Family Stewardship" },
  { href: "/legacy", label: "Legacy Planning" },
  { href: "/voice", label: "Voice Continuity" },
  { href: "/technology", label: "Technology" },
  { href: "/pricing", label: "Plans" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="container-wrap sticky top-0 z-50 py-4 md:py-6">
      <div className="card flex items-center justify-between gap-3 border-white/15 bg-gradient-to-b from-white/5 to-white/2 px-4 py-3 backdrop-blur-lg md:px-6">
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight text-white transition duration-300 hover:text-opacity-80 md:text-xl"
          onClick={() => setOpen(false)}
        >
          ForeverLuvd
        </Link>

        <nav className="hidden gap-4 text-sm text-neutral-300 md:flex md:gap-6" aria-label="Primary">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="transition duration-300 hover:text-white hover:underline hover:underline-offset-8 hover:decoration-white/40"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 md:gap-4">
          <Link
            href="/auth/sign-in"
            className="btn btn-secondary hidden border-white/20 px-4 py-2 text-sm transition-all duration-300 hover:border-white/30 hover:bg-white/10 hover:text-white sm:inline-flex md:px-6 md:text-base"
            onClick={() => setOpen(false)}
          >
            Sign In
          </Link>
          <Link
            href="/onboarding"
            className="btn btn-primary bg-gradient-to-r from-indigo-500 to-violet-500 px-3 py-2 text-xs transition-all duration-300 hover:from-indigo-600 hover:to-violet-600 hover:shadow-lg sm:px-4 sm:text-sm md:px-6 md:text-base"
            onClick={() => setOpen(false)}
          >
            Start Free Trial
          </Link>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/20 text-white md:hidden"
            aria-expanded={open}
            aria-controls="foreverluvd-mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            <span aria-hidden>{open ? "×" : "☰"}</span>
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="foreverluvd-mobile-nav"
          className="card mt-2 flex flex-col gap-1 border-white/15 px-4 py-4 md:hidden"
          aria-label="Mobile"
        >
          <p className="px-2 pb-2 text-xs text-neutral-400">Memorial and legacy tools — not medical or legal advice.</p>
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="rounded-xl px-3 py-3 text-sm text-neutral-200 hover:bg-white/5"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <Link href="/auth/sign-in" className="mt-2 rounded-xl px-3 py-3 text-sm text-neutral-300" onClick={() => setOpen(false)}>
            Sign In
          </Link>
        </nav>
      )}
    </header>
  );
}
