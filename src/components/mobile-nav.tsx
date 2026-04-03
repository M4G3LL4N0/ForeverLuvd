"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/dashboard", label: "Dashboard" },
  { href: "/loved-ones/new", label: "Add loved one" },
  { href: "/memories/new", label: "Add memory" },
  { href: "/chat", label: "AI Chat" },
  { href: "/settings", label: "Settings" },
];

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-label="Open navigation"
        onClick={() => setOpen(true)}
        className="btn btn-secondary"
      >
        <Menu className="h-5 w-5" />
      </button>

      {open ? (
        <div className="fixed inset-0 z-50 bg-black/60">
          <div className="absolute right-0 top-0 h-full w-[85%] max-w-sm border-l border-white/10 bg-[var(--background)] p-6 shadow-2xl">
            <div className="mb-6 flex items-center justify-between">
              <Link
                href="/dashboard"
                className="text-lg font-semibold tracking-tight"
                onClick={() => setOpen(false)}
              >
                ForeverLuvd
              </Link>

              <button
                type="button"
                aria-label="Close navigation"
                onClick={() => setOpen(false)}
                className="btn btn-secondary"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <nav className="flex flex-col gap-3">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-[var(--foreground)] transition hover:bg-white/10"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      ) : null}
    </div>
  );
}
