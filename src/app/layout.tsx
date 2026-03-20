import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { Nav } from "@/components/nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ForeverLuvd",
  description: "Preserve the voice, memories, and essence of the people you love.",
};

import { AppLayout } from "@/components/layouts/app-layout"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isApp = false // TODO: Replace with actual auth check
  
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(
        "min-h-screen bg-background font-sans antialiased",
        inter.className
      )}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {isApp ? (
            <AppLayout>{children}</AppLayout>
          ) : (
            <div className="flex min-h-screen flex-col">
              <Nav />
              <main className="flex-1">{children}</main>
            </div>
          )}
          <Toaster position="top-center" />
        </ThemeProvider>
      </body>
    </html>
  );
}
