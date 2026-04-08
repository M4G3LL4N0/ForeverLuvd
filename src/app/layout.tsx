import type { Metadata } from 'next';
import './globals.css';
import { ErrorBoundary } from '@/components/ErrorBoundary';
import { validateEnv } from '@/lib/utils/env';

export const metadata: Metadata = {
  title: "ForeverLuvd",
  description: "Preserve the voice, memories, and essence of the people you love.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // Validate required environment variables
  validateEnv(['NEXT_PUBLIC_SUPABASE_URL', 'NEXT_PUBLIC_SUPABASE_ANON_KEY']);
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-gradient-to-br from-[#0a0a1a] via-[#1a0a2a] to-[#0a0a1a] text-[var(--foreground)]">
        {children}
      </body>
    </html>
  );
}
