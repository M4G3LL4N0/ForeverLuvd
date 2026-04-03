import Link from "next/link";
import { cn } from "@/lib/utils";
import { Icons } from "@/components/icons";

const navItems = [
  {
    href: "/dashboard",
    label: "Dashboard",
    icon: Icons.dashboard,
  },
  {
    href: "/loved-ones/new",
    label: "Add loved one",
    icon: Icons.users,
  },
  {
    href: "/memories/new",
    label: "Add memory",
    icon: Icons.album,
  },
  {
    href: "/chat",
    label: "AI Chat",
    icon: Icons.messageSquare,
  },
  {
    href: "/settings",
    label: "Settings",
    icon: Icons.settings,
  },
];

export function Sidebar({ className }: { className?: string }) {
  return (
    <aside
      className={cn(
        "hidden w-72 shrink-0 md:block",
        className
      )}
    >
      <div className="card sticky top-6 p-4">
        <div className="mb-4 px-2">
          <Link href="/dashboard" className="text-xl font-semibold tracking-tight">
            ForeverLuvd
          </Link>
          <p className="mt-2 text-sm text-neutral-400">
            Preserve memories, voices, and the presence of the people you love.
          </p>
        </div>

        <div className="my-4 h-px bg-white/10" />

        <nav className="flex flex-col gap-2">
          {navItems.map((item) => {
            const Icon = item.icon;

            return (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-[var(--foreground)] transition hover:bg-white/10"
              >
                <Icon className="h-4 w-4" />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}
