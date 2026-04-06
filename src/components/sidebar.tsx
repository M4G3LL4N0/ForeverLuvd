import Link from "next/link";
import { cn } from "@/lib/utils";
import { Icons } from "@/components/icons";

const navGroups = [
  {
    title: "Your Legacy",
    items: [
      {
        href: "/dashboard",
        label: "Dashboard",
        icon: Icons.home,
        description: "View your memory vault",
      },
      {
        href: "/chat",
        label: "Memory Companion",
        icon: Icons.message,
        description: "Conversations with context",
      },
    ],
  },
  {
    title: "Preserve Memories",
    items: [
      {
        href: "/loved-ones/new",
        label: "Add Loved One",
        icon: Icons.heart,
        description: "Create a new profile",
      },
      {
        href: "/memories/new",
        label: "Add Memory",
        icon: Icons.archive,
        description: "Save a new moment",
      },
    ],
  },
  {
    title: "Account",
    items: [
      {
        href: "/settings",
        label: "Settings",
        icon: Icons.settings,
        description: "Manage your account",
      },
      {
        href: "/pricing",
        label: "Plans",
        icon: Icons.sparkles,
        description: "View subscription options",
      },
    ],
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
          <Link 
            href="/dashboard" 
            className="text-xl font-semibold tracking-tight flex items-center gap-2"
          >
            <span className="bg-gradient-to-r from-[#ffd6c2] via-[#ffae7a] to-[#ff7b6b] bg-clip-text text-transparent">
              ForeverLuvd
            </span>
          </Link>
          <p className="mt-2 text-sm text-neutral-400">
            Your private memory vault for loved ones
          </p>
        </div>

        <div className="my-4 h-px bg-white/10" />

        {navGroups.map((group) => (
          <div key={group.title} className="mb-6">
            <h3 className="mb-3 px-2 text-xs font-semibold uppercase tracking-wider text-neutral-400">
              {group.title}
            </h3>
            <nav className="flex flex-col gap-2">
              {group.items.map((item) => {
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
        ))}
      </div>
    </aside>
  );
}
