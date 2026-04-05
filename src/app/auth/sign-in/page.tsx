"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { isSupabaseConfigured } from "@/lib/supabase/client";
import { signIn } from "@/lib/data/auth";

export default function SignInPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("");

  const configured = isSupabaseConfigured();

  async function handleSignIn(e: React.FormEvent) {
    e.preventDefault();

    if (!configured) {
      setStatus("Supabase is not configured yet. Add the Vercel environment variables and redeploy.");
      return;
    }

    setStatus("Signing in...");

    const { success, error } = await signIn({ email, password });

    if (!success) {
      setStatus(error || "Failed to sign in");
      return;
    }

    setStatus("Success.");
    router.push("/dashboard");
    router.refresh();
  }

  return (
    <main className="container-wrap flex min-h-screen items-center justify-center py-20">
      <div className="card w-full max-w-md p-8">
        <h1 className="text-3xl font-semibold">Welcome back</h1>
        <p className="mt-3 text-neutral-400">
          Sign in to your private memory vault.
        </p>

        {!configured ? (
          <div className="mt-6 rounded-2xl border border-yellow-500/30 bg-yellow-500/10 p-4 text-sm text-yellow-200">
            Supabase is not configured for this deployment yet. Add
            <code className="mx-1">NEXT_PUBLIC_SUPABASE_URL</code>
            and
            <code className="mx-1">NEXT_PUBLIC_SUPABASE_ANON_KEY</code>
            in Vercel project settings, then redeploy.
          </div>
        ) : null}

        <form onSubmit={handleSignIn} className="mt-8 space-y-5">
          <div>
            <label className="label">Email</label>
            <input
              className="input"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={!configured}
            />
          </div>

          <div>
            <label className="label">Password</label>
            <input
              className="input"
              type="password"
              placeholder="Your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              disabled={!configured}
            />
          </div>

          <button className="btn btn-primary w-full" type="submit" disabled={!configured}>
            Sign in
          </button>
        </form>

        {status ? <p className="mt-4 text-sm text-neutral-400">{status}</p> : null}

        <p className="mt-6 text-sm text-neutral-400">
          Need an account?{" "}
          <Link href="/auth/sign-up" className="text-white underline">
            Sign up
          </Link>
        </p>
      </div>
    </main>
  );
}
