"use client";

import { useState } from "react";
import Link from "next/link";
import { isSupabaseConfigured } from "@/lib/supabase/client";
import { signUp } from "@/lib/data/auth";

export default function SignUpPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("");

  const configured = isSupabaseConfigured();

  async function handleSignUp(e: React.FormEvent) {
    e.preventDefault();

    if (!configured) {
      setStatus("Supabase is not configured yet. Add the Vercel environment variables and redeploy.");
      return;
    }

    setStatus("Creating account...");

    const { success, error } = await signUp({ email, password });

    setStatus(
      success
        ? "Account created. Check your email if confirmation is enabled."
        : error || "Failed to create account"
    );
  }

  return (
    <main className="container-wrap flex min-h-screen items-center justify-center py-20">
      <div className="card w-full max-w-md p-8">
        <h1 className="text-3xl font-semibold">Start preserving</h1>
        <p className="mt-3 text-neutral-400">
          Create your ForeverLuvd account.
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

        <form onSubmit={handleSignUp} className="mt-8 space-y-5">
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
              placeholder="Create a strong password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              disabled={!configured}
            />
          </div>

          <button className="btn btn-primary w-full" type="submit" disabled={!configured}>
            Create account
          </button>
        </form>

        {status ? <p className="mt-4 text-sm text-neutral-400">{status}</p> : null}

        <p className="mt-6 text-sm text-neutral-400">
          Already have an account?{" "}
          <Link href="/auth/sign-in" className="text-white underline hover:text-indigo-400 transition-colors">
            Sign in
          </Link>
        </p>
      </div>
    </main>
  );
}
