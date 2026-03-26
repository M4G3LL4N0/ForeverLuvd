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
    <main className="container-wrap py-12">
      <div className="card mx-auto max-w-2xl p-8">
        <h1 className="text-3xl font-semibold">Add a loved one</h1>
        <p className="mt-3 text-neutral-400">
          Start a private profile for someone important to you.
        </p>

        <form onSubmit={handleCreate} className="mt-8 space-y-5">
          <div>
            <label className="label">Name</label>
            <input
              className="input"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Mom, Dad, Grandma, Alex..."
              required
            />
          </div>

          <div>
            <label className="label">Relationship</label>
            <input
              className="input"
              value={relationshipType}
              onChange={(e) => setRelationshipType(e.target.value)}
              placeholder="Mother, father, partner, friend..."
            />
          </div>

          <div>
            <label className="label">Birth date</label>
            <input
              className="input"
              type="date"
              value={birthDate}
              onChange={(e) => setBirthDate(e.target.value)}
            />
          </div>

          <button className="btn btn-primary" type="submit">
            Save loved one
          </button>
        </form>

        {status ? <p className="mt-4 text-sm text-neutral-400">{status}</p> : null}
      </div>
    </main>
  );
}
