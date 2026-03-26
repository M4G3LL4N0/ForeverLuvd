import Link from "next/link";

export default function Nav() {
  return (
    <header className="container-wrap py-6">
      <div className="card flex items-center justify-between px-5 py-4">
        <Link href="/" className="text-xl font-semibold tracking-tight">
          ForeverLuvd
        </Link>

        <nav className="hidden gap-6 text-sm text-neutral-300 md:flex">
          <a href="#how-it-works">How it works</a>
          <a href="#privacy">Privacy</a>
          <a href="#pricing">Pricing</a>
        </nav>

        <div className="flex gap-3">
          <Link href="/auth/sign-in" className="btn btn-secondary">
            Sign in
          </Link>
          <Link href="/auth/sign-up" className="btn btn-primary">
            Start preserving
          </Link>
        </div>
      </div>
    </header>
  );
}
