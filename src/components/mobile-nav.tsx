"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navGroups = [
  {
    title: "Your Vault",
    items: [
      { href: "/dashboard", label: "Memory Vault" },
      { href: "/chat", label: "Memory Companion" },
    ],
  },
  {
    title: "Preserve",
    items: [
      { href: "/loved-ones/new", label: "Add Loved One" },
      { href: "/memories/new", label: "Add Memory" },
    ],
  },
  {
    title: "Account",
    items: [
      { href: "/settings", label: "Settings" },
      { href: "/pricing", label: "Upgrade" },
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

            {navGroups.map((group) => (
              <div key={group.title} className="mb-6">
                <h3 className="mb-3 px-2 text-xs font-semibold uppercase tracking-wider text-neutral-400">
                  {group.title}
                </h3>
                <nav className="flex flex-col gap-3">
                  {group.items.map((link) => (
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
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}
