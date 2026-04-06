import Link from "next/link";
import { Sidebar } from "@/components/sidebar";
import { MobileNav } from "@/components/mobile-nav";

export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      <Sidebar />

      <div className="flex flex-1 flex-col">
        <header className="border-b border-white/10 bg-[var(--background)]">
          <div className="container-wrap py-3">
            <div className="card flex items-center justify-between px-4 py-3">
              <Link 
                href="/dashboard" 
                className="text-xl font-semibold tracking-tight flex items-center gap-2"
              >
                <span className="bg-gradient-to-r from-[#ffd6c2] via-[#ffae7a] to-[#ff7b6b] bg-clip-text text-transparent">
                  ForeverLuvd
                </span>
              </Link>
              <MobileNav />
            </div>
          </div>
        </header>

        <main className="flex-1 bg-[var(--background)]">
          <div className="container-wrap py-6">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
