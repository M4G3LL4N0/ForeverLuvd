import Link from "next/link";

export default function Nav() {
  return (
    <header className="container-wrap py-6 sticky top-0 z-50">
      <div className="card flex items-center justify-between px-6 py-3 bg-gradient-to-b from-white/5 to-white/2 backdrop-blur-lg border-white/15">
        <div className="flex items-center space-x-10">
          <Link href="/" className="text-xl font-semibold tracking-tight text-white hover:text-opacity-80 transition">
            ForeverLuvd
          </Link>

          <nav className="hidden gap-6 text-sm text-neutral-200 md:flex">
            <Link href="/onboarding" className="hover:text-white transition hover:underline hover:underline-offset-8 hover:decoration-white/30">
              Get Started
            </Link>
            <Link href="/family" className="hover:text-white transition hover:underline hover:underline-offset-8 hover:decoration-white/30">
              Family Stewardship
            </Link>
            <Link href="/legacy" className="hover:text-white transition hover:underline hover:underline-offset-8 hover:decoration-white/30">
              Legacy Planning
            </Link>
            <Link href="/voice" className="hover:text-white transition hover:underline hover:underline-offset-8 hover:decoration-white/30">
              Voice Continuity
            </Link>
            <Link href="/technology" className="hover:text-white transition hover:underline hover:underline-offset-8 hover:decoration-white/30">
              Technology
            </Link>
            <Link href="/pricing" className="hover:text-white transition hover:underline hover:underline-offset-8 hover:decoration-white/30">
              Plans
            </Link>
          </nav>
        </div>
        <Link href="/" className="text-xl font-semibold tracking-tight text-white">
          ForeverLuvd
        </Link>

        <nav className="hidden gap-8 text-sm text-neutral-200 md:flex">
          <Link href="/onboarding" className="hover:text-white transition">
            Get Started
          </Link>
          <Link href="/family" className="hover:text-white transition">
            Family Stewardship
          </Link>
          <Link href="/legacy" className="hover:text-white transition">
            Legacy Planning
          </Link>
          <Link href="/voice" className="hover:text-white transition">
            Voice Continuity
          </Link>
          <Link href="/technology" className="hover:text-white transition">
            Technology
          </Link>
          <Link href="/pricing" className="hover:text-white transition">
            Plans
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Link 
            href="/auth/sign-in" 
            className="btn btn-secondary px-6 border-white/20 hover:border-white/30 hover:bg-white/10 hover:text-white transition-all"
          >
            Sign In
          </Link>
          <Link 
            href="/onboarding" 
            className="btn btn-primary px-6 bg-gradient-to-r from-indigo-500 to-violet-500 hover:from-indigo-600 hover:to-violet-600 hover:shadow-lg transition-all"
          >
            Start Free Trial
          </Link>
        </div>
      </div>
    </header>
  );
}
