import type { ReactNode } from "react";
import Link from "next/link";

export default function AppLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <div className="container-wrap py-6">
        <div className="card flex items-center justify-between px-5 py-4">
          <Link href="/dashboard" className="text-xl font-semibold tracking-tight">
            ForeverLuvd
          </Link>

          <nav className="flex gap-3 text-sm text-neutral-300">
            <Link href="/dashboard" className="btn btn-secondary">
              Dashboard
            </Link>
            <Link href="/chat" className="btn btn-secondary">
              AI Chat
            </Link>
            <Link href="/settings" className="btn btn-secondary">
              Settings
            </Link>
          </nav>
        </div>
      </div>

      <div>{children}</div>
    </div>
  );
}
