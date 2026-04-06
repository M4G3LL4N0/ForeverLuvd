import Link from "next/link";

export default function Nav() {
  return (
    <header className="container-wrap py-6">
      <div className="card flex items-center justify-between px-5 py-4">
        <Link href="/" className="text-xl font-semibold tracking-tight">
          ForeverLuvd
        </Link>

        <nav className="hidden gap-8 text-sm text-neutral-300 md:flex">
          <Link href="/onboarding" className="hover:text-white transition">
            How It Works
          </Link>
          <Link href="/family" className="hover:text-white transition">
            Family
          </Link>
          <Link href="/legacy" className="hover:text-white transition">
            Legacy
          </Link>
          <Link href="/pricing" className="hover:text-white transition">
            Pricing
          </Link>
          <Link href="/technology" className="hover:text-white transition">
            Technology
          </Link>
        </nav>

        <div className="flex gap-3">
          <Link href="/auth/sign-in" className="btn btn-secondary">
            Sign In
          </Link>
          <Link 
            href="/onboarding" 
            className="btn btn-primary bg-gradient-to-r from-[#ff7b6b] to-[#ffae7a] hover:opacity-90"
          >
            Start Free Trial
          </Link>
        </div>
      </div>
    </header>
  );
}
