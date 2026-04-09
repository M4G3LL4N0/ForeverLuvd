import Link from "next/link";

export default function Nav() {
  return (
    <header className="container-wrap py-4 md:py-6 sticky top-0 z-50">
      <div className="card flex items-center justify-between px-4 md:px-6 py-3 bg-gradient-to-b from-white/5 to-white/2 backdrop-blur-lg border-white/15">
        <Link 
          href="/" 
          className="text-lg md:text-xl font-semibold tracking-tight text-white hover:text-opacity-80 transition duration-300"
        >
          ForeverLuvd
        </Link>

        <nav className="hidden gap-4 md:gap-6 text-sm text-neutral-300 md:flex">
          <Link 
            href="/onboarding" 
            className="hover:text-white transition duration-300 hover:underline hover:underline-offset-8 hover:decoration-white/40"
          >
            Get Started
          </Link>
          <Link 
            href="/family" 
            className="hover:text-white transition duration-300 hover:underline hover:underline-offset-8 hover:decoration-white/40"
          >
            Family Stewardship
          </Link>
          <Link 
            href="/legacy" 
            className="hover:text-white transition duration-300 hover:underline hover:underline-offset-8 hover:decoration-white/40"
          >
            Legacy Planning
          </Link>
          <Link 
            href="/voice" 
            className="hover:text-white transition duration-300 hover:underline hover:underline-offset-8 hover:decoration-white/40"
          >
            Voice Continuity
          </Link>
          <Link 
            href="/technology" 
            className="hover:text-white transition duration-300 hover:underline hover:underline-offset-8 hover:decoration-white/40"
          >
            Technology
          </Link>
          <Link 
            href="/pricing" 
            className="hover:text-white transition duration-300 hover:underline hover:underline-offset-8 hover:decoration-white/40"
          >
            Plans
          </Link>
        </nav>

        <div className="flex items-center gap-2 md:gap-4">
          <Link 
            href="/auth/sign-in" 
            className="btn btn-secondary px-4 md:px-6 py-2 border-white/20 hover:border-white/30 hover:bg-white/10 hover:text-white transition-all duration-300 text-sm md:text-base"
          >
            Sign In
          </Link>
          <Link 
            href="/onboarding" 
            className="btn btn-primary px-4 md:px-6 py-2 bg-gradient-to-r from-indigo-500 to-violet-500 hover:from-indigo-600 hover:to-violet-600 hover:shadow-lg transition-all duration-300 text-sm md:text-base"
          >
            Start Free Trial
          </Link>
        </div>
      </div>
    </header>
  );
}
