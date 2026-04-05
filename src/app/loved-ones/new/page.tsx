"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { isSupabaseConfigured } from "@/lib/supabase/client";
import { createLovedOne } from "@/lib/data/loved-ones";

export default function NewLovedOnePage() {
  const router = useRouter();
  const configured = isSupabaseConfigured();

  const [name, setName] = useState("");
  const [relationshipType, setRelationshipType] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [status, setStatus] = useState("");

  async function handleCreate(e: React.FormEvent) {
    e.preventDefault();

    if (!configured) {
      setStatus("Supabase is not configured yet. Add the Vercel environment variables and redeploy.");
      return;
    }

    setStatus("Creating...");

    const { success, error } = await createLovedOne({
      name,
      relationship_type: relationshipType,
      birth_date: birthDate,
    });

    if (!success) {
      setStatus(error || "Error creating loved one");
      return;
    }

    router.push("/dashboard");
    router.refresh();
  }

  return (
    <main className="container-wrap py-16">
      <div className="card mx-auto max-w-2xl p-8">
        <div className="space-y-2 border-b border-white/5 pb-6">
          <p className="text-xs uppercase tracking-[0.28em] text-neutral-500">
            Begin your legacy
          </p>
          <h1 className="text-3xl font-semibold tracking-tight">
            Preserve a cherished connection
          </h1>
          <p className="text-neutral-400">
            Create a sacred space to honor and remember someone special. This private profile will help you capture the essence of your relationship.
          </p>
        </div>

        {!configured ? (
          <div className="mt-8 rounded-2xl border border-yellow-500/30 bg-yellow-500/10 p-4 text-sm text-yellow-200">
            Supabase is not configured for this deployment yet. Add
            <code className="mx-1">NEXT_PUBLIC_SUPABASE_URL</code>
            and
            <code className="mx-1">NEXT_PUBLIC_SUPABASE_ANON_KEY</code>
            in Vercel project settings, then redeploy.
          </div>
        ) : null}

        <form onSubmit={handleCreate} className="mt-8 space-y-8">
          <div className="space-y-6">
            <div>
              <label className="label">Their name</label>
              <input
                className="input"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Mom, Dad, Grandma, Alex..."
                required
                disabled={!configured}
              />
              <p className="mt-2 text-sm text-neutral-400">
                The name you know them by, as it feels most natural to you.
              </p>
            </div>

            <div>
              <label className="label">Your relationship</label>
              <input
                className="input"
                value={relationshipType}
                onChange={(e) => setRelationshipType(e.target.value)}
                placeholder="Mother, father, partner, friend..."
                disabled={!configured}
              />
              <p className="mt-2 text-sm text-neutral-400">
                How you would describe your bond with them.
              </p>
            </div>

            <div>
              <label className="label">Birth date</label>
              <input
                className="input"
                type="date"
                value={birthDate}
                onChange={(e) => setBirthDate(e.target.value)}
                disabled={!configured}
              />
              <p className="mt-2 text-sm text-neutral-400">
                If known, helps us create meaningful timelines.
              </p>
            </div>
          </div>

          <div className="pt-4">
            <button 
              className="btn btn-primary w-full" 
              type="submit" 
              disabled={!configured}
            >
              Begin preserving their legacy
            </button>
          </div>
        </form>

        {status ? (
          <p className="mt-6 text-sm text-neutral-400 text-center">
            {status}
          </p>
        ) : null}
      </div>
    </main>
  );
}
