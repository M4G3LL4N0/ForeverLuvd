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
    <main className="container-wrap py-12">
      <div className="card mx-auto max-w-2xl p-8">
        <p className="mb-3 text-xs uppercase tracking-[0.28em] text-neutral-500">
          Loved one profile
        </p>
        <h1 className="text-3xl font-semibold">Add a loved one</h1>
        <p className="mt-3 text-neutral-400">
          Start a private profile for someone important to you.
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

        <form onSubmit={handleCreate} className="mt-8 space-y-5">
          <div>
            <label className="label">Name</label>
            <input
              className="input"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Mom, Dad, Grandma, Alex..."
              required
              disabled={!configured}
            />
          </div>

          <div>
            <label className="label">Relationship</label>
            <input
              className="input"
              value={relationshipType}
              onChange={(e) => setRelationshipType(e.target.value)}
              placeholder="Mother, father, partner, friend..."
              disabled={!configured}
            />
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
          </div>

          <button className="btn btn-primary" type="submit" disabled={!configured}>
            Save loved one
          </button>
        </form>

        {status ? <p className="mt-4 text-sm text-neutral-400">{status}</p> : null}
      </div>
    </main>
  );
}
