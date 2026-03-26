"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase/client";
import Link from "next/link";

export default function SignUpPage() {
  const supabase = createClient();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("");

  async function handleSignUp(e: React.FormEvent) {
    e.preventDefault();
    setStatus("Creating account...");

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${window.location.origin}/dashboard`,
      },
    });

    setStatus(error ? error.message : "Account created. Check your email if confirmation is enabled.");
  }

  return (
    <main className="container-wrap flex min-h-screen items-center justify-center py-20">
      <div className="card w-full max-w-md p-8">
        <h1 className="text-3xl font-semibold">Start preserving</h1>
        <p className="mt-3 text-neutral-400">
          Create your ForeverLuvd account.
        </p>

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
            />
          </div>

          <button className="btn btn-primary w-full" type="submit">
            Create account
          </button>
        </form>

        {status ? <p className="mt-4 text-sm text-neutral-400">{status}</p> : null}

        <p className="mt-6 text-sm text-neutral-400">
          Already have an account?{" "}
          <Link href="/auth/sign-in" className="text-white underline">
            Sign in
          </Link>
        </p>
      </div>
    </main>
  );
}
