import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ForeverLuvd",
  description: "Private continuity platform for preserving memory, voice, identity, and legacy.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
