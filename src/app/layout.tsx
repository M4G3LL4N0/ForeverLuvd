import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ForeverLuvd",
  description: "Preserve the voice, memories, and essence of the people you love.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
        {children}
      </body>
    </html>
  );
}
