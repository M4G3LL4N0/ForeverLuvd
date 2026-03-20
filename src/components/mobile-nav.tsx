"use client"

import { Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Sidebar } from "@/components/sidebar"

export function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger className="fixed top-4 left-4 z-50 md:hidden">
        <Menu className="h-6 w-6" />
      </SheetTrigger>
      <SheetContent side="left" className="w-56 p-0">
        <Sidebar />
      </SheetContent>
    </Sheet>
  )
}
