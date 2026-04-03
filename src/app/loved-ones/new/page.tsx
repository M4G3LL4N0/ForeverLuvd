"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";

export default function NewLovedOnePage() {
  const supabase = createClient();
  const router = useRouter();

  const [name, setName] = useState("");
  const [relationshipType, setRelationshipType] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [status, setStatus] = useState("");

  async function handleCreate(e: React.FormEvent) {
    e.preventDefault();
    setStatus("Creating...");

    const { error } = await supabase.from("loved_ones").insert({
      name,
      relationship_type: relationshipType || null,
      birth_date: birthDate || null,
    });

    if (error) {
      setStatus(error.message);
      return;
    }

    router.push("/dashboard");
    router.refresh();
  }

  return (
    <main className="container-wrap py-16">
      <div className="card mx-auto max-w-2xl p-8">
        <div className="space-y-2 border-b border-neutral-800 pb-6">
          <h1 className="text-3xl font-semibold">Preserve Their Memory</h1>
          <p className="text-neutral-400">
            Begin honoring someone special by creating their private profile. This will be a safe space to cherish your memories together.
          </p>
        </div>

        <form onSubmit={handleCreate} className="mt-8 space-y-8">
          <div className="space-y-6">
            <div>
              <label className="label">Their Name</label>
              <input
                className="input"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Mom, Dad, Grandma, Alex..."
                required
              />
              <p className="mt-2 text-sm text-neutral-400">
                Enter the name you most fondly remember them by.
              </p>
            </div>

            <div>
              <label className="label">Your Relationship</label>
              <input
                className="input"
                value={relationshipType}
                onChange={(e) => setRelationshipType(e.target.value)}
                placeholder="Mother, father, partner, friend..."
              />
              <p className="mt-2 text-sm text-neutral-400">
                How you were connected in each other's lives.
              </p>
            </div>

            <div>
              <label className="label">Birth Date</label>
              <input
                className="input"
                type="date"
                value={birthDate}
                onChange={(e) => setBirthDate(e.target.value)}
              />
              <p className="mt-2 text-sm text-neutral-400">
                Optional - helps us celebrate their life at special times.
              </p>
            </div>
          </div>

          <div className="pt-4">
            <button 
              className="btn btn-primary w-full"
              type="submit"
            >
              Create Memory Profile
            </button>
            {status && (
              <p className="mt-3 text-center text-sm text-neutral-400">
                {status}
              </p>
            )}
          </div>
        </form>
      </div>
    </main>
  );
}
