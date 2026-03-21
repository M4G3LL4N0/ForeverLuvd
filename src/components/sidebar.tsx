"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import * as Icons from "@/components/icons"
import { buttonVariants } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

const navItems = [
  { name: "Dashboard", href: "/dashboard", icon: Icons.Dashboard },
  { name: "Loved Ones", href: "/loved-ones", icon: Icons.Users },
  { name: "Memories", href: "/memories", icon: Icons.Album },
  { name: "Voice Notes", href: "/voice", icon: Icons.Mic },
  { name: "Letters", href: "/letters", icon: Icons.Mail },
  { name: "AI Presence", href: "/ai-presence", icon: Icons.Bot },
  { name: "Settings", href: "/settings", icon: Icons.Settings },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={cn(
            buttonVariants({ variant: "ghost" }),
            pathname?.startsWith(item.href)
              ? "bg-muted hover:bg-muted"
              : "hover:bg-transparent hover:underline",
            "justify-start w-full"
          )}
        >
          <item.icon className="mr-2 h-4 w-4" />
          {item.name}
        </Link>
      ))}
      <Separator className="w-full" />
      {/* Add user profile/account links here */}
    </nav>
  )
}
