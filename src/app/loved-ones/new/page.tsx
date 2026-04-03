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
      <div className="card mx-auto max-w-2xl overflow-hidden">
        <div className="bg-gradient-to-r from-neutral-900 to-neutral-800 px-8 py-10">
          <h1 className="text-3xl font-semibold tracking-tight text-white">
            Honor Their Legacy
          </h1>
          <p className="mt-2 text-neutral-300">
            Begin crafting a sacred space to celebrate {name || "your loved one"}'s life and the love you shared.
          </p>
        </div>

        <form onSubmit={handleCreate} className="space-y-8 p-8">
          <div className="space-y-8">
            <div className="space-y-1">
              <label className="label">Full Name</label>
              <input
                className="input"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="The name you called them by..."
                required
              />
              <p className="mt-1 text-sm text-neutral-500">
                The name that brings them closest to your heart
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div className="space-y-1">
                <label className="label">Relationship</label>
                <input
                  className="input"
                  value={relationshipType}
                  onChange={(e) => setRelationshipType(e.target.value)}
                  placeholder="How you knew each other"
                />
                <p className="mt-1 text-sm text-neutral-500">
                  Mother, mentor, childhood friend...
                </p>
              </div>

              <div className="space-y-1">
                <label className="label">Birth Date</label>
                <input
                  className="input"
                  type="date"
                  value={birthDate}
                  onChange={(e) => setBirthDate(e.target.value)}
                />
                <p className="mt-1 text-sm text-neutral-500">
                  We'll honor their special days
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-neutral-800 pt-8">
            <button
              className="btn btn-primary w-full py-3 text-lg"
              type="submit"
            >
              {name ? `Create ${name}'s Memorial` : "Begin Their Story"}
            </button>
            {status && (
              <p className="mt-4 text-center text-sm text-neutral-500">
                {status}
              </p>
            )}
          </div>
        </form>
      </div>
    </main>
  );
}
