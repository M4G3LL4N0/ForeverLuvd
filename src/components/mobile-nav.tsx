"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navGroups = [
  {
    title: "Your Legacy",
    items: [
      { href: "/dashboard", label: "Dashboard" },
      { href: "/chat", label: "Memory Companion" },
    ],
  },
  {
    title: "Preserve Memories",
    items: [
      { href: "/loved-ones/new", label: "Add Loved One" },
      { href: "/memories/new", label: "Add Memory" },
    ],
  },
  {
    title: "Continuity",
    items: [
      { href: "/family", label: "Family" },
      { href: "/legacy", label: "Legacy" },
      { href: "/voice", label: "Voice" },
    ],
  },
  {
    title: "Account",
    items: [
      { href: "/settings", label: "Settings" },
      { href: "/pricing", label: "Plans" },
      { href: "/technology", label: "Technology" },
    ],
  },
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

            <div className="mb-6">
              <Link
                href="/onboarding"
                onClick={() => setOpen(false)}
                className="mb-6 block rounded-2xl bg-gradient-to-r from-[#ff7b6b] to-[#ffae7a] px-4 py-3 text-sm font-medium text-white text-center transition hover:opacity-90"
              >
                Quick Start Guide
              </Link>
            </div>

            {navGroups.map((group) => (
              <div key={group.title} className="mb-6">
                <h3 className="mb-3 px-2 text-xs font-semibold uppercase tracking-wider text-neutral-400">
                  {group.title}
                </h3>
                <nav className="flex flex-col gap-2">
                  {group.items.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="rounded-xl px-4 py-3 text-sm text-[var(--foreground)] transition hover:bg-white/5"
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
              </div>
            ))}

            <div className="mt-8 border-t border-white/10 pt-6">
              <Link
                href="/pricing"
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-indigo-400 hover:text-indigo-300"
              >
                View Plans & Pricing →
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
