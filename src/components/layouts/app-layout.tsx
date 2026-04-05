import type { ReactNode } from "react";
import { Sidebar } from "@/components/sidebar";
import { MobileNav } from "@/components/mobile-nav";

export default function AppLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      {/* Mobile header */}
      <div className="md:hidden">
        <div className="container-wrap py-4">
          <div className="card flex items-center justify-between px-4 py-3">
            <h1 className="text-xl font-semibold tracking-tight">ForeverLuvd</h1>
            <MobileNav />
          </div>
        </div>
      </div>

      {/* Desktop layout */}
      <div className="hidden md:flex">
        <Sidebar className="border-r border-white/10" />
        <main className="flex-1">
          <div className="container-wrap py-6">
            <div className="card px-5 py-4">
              <h1 className="text-xl font-semibold tracking-tight">ForeverLuvd</h1>
            </div>
          </div>
          <div className="container-wrap pb-6">
            {children}
          </div>
        </main>
      </div>

      {/* Mobile content */}
      <div className="md:hidden">
        <div className="container-wrap pb-6">
          {children}
        </div>
      </div>
    </div>
  );
}
