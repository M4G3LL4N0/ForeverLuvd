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
        <header className="border-b border-white/10">
          <div className="container-wrap py-3">
            <div className="card flex items-center justify-between px-4 py-3">
              <Link href="/dashboard" className="text-xl font-semibold tracking-tight">
                ForeverLuvd
              </Link>

              <MobileNav />
            </div>
          </div>
        </header>

        <main className="flex-1">{children}</main>
      </div>
    </div>
  );
}
