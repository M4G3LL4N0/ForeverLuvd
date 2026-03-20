import { Sidebar } from "@/components/sidebar"
import { MobileNav } from "@/components/mobile-nav"

export default function AppLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen w-full flex-col bg-background md:flex-row">
      <aside className="sticky top-0 hidden h-screen w-56 border-r bg-background md:block">
        <Sidebar />
      </aside>

      <div className="md:hidden">
        <MobileNav />
      </div>

      <main className="flex-1 overflow-y-auto p-4 md:p-6">
        {children}
      </main>
    </div>
  )
}
