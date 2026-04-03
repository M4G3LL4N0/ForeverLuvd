"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

export default function SignInPage() {
  const router = useRouter();
  const supabase = useMemo(() => createClient(), []);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("");

  async function handleSignIn(e: React.FormEvent) {
    e.preventDefault();
    setStatus("Signing in...");

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setStatus(error.message);
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
            />
          </div>

          <button className="btn btn-primary w-full" type="submit">
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
