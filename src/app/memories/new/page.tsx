"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { createMemory } from "@/lib/data/memories";
import { getLovedOnes } from "@/lib/data/loved-ones";
import { isSupabaseConfigured } from "@/lib/supabase/client";

type LovedOneOption = {
  id: string;
  name: string;
};

export default function NewMemoryPage() {
  const router = useRouter();
  const configured = isSupabaseConfigured();

  const [lovedOnes, setLovedOnes] = useState<LovedOneOption[]>([]);
  const [lovedOneId, setLovedOneId] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [memoryType, setMemoryType] = useState("note");
  const [memoryDate, setMemoryDate] = useState("");
  const [status, setStatus] = useState("");
  const [file, setFile] = useState<File | null>(null);

  useEffect(() => {
    async function loadLovedOnes() {
      if (!configured) return;

      const lovedOnesData = await getLovedOnes();
      const mapped: LovedOneOption[] = lovedOnesData.map((lo) => ({
        id: lo.id,
        name: lo.name,
      }));

      setLovedOnes(mapped);

      if (mapped[0]?.id) {
        setLovedOneId(mapped[0].id);
      }
    }

    loadLovedOnes();
  }, [configured]);

  async function handleCreate(e: React.FormEvent) {
    e.preventDefault();

    if (!configured) {
      setStatus(
        "Supabase is not configured yet. Add the Vercel environment variables and redeploy."
      );
      return;
    }

    setStatus("Saving memory...");

    const result = await createMemory({
      loved_one_id: lovedOneId,
      title,
      description: description || null,
      memory_type: memoryType,
      memory_date: memoryDate || null,
      file,
    });

    if (!result.success) {
      setStatus(result.error || "Failed to save memory.");
      return;
    }

    router.push("/dashboard");
    router.refresh();
  }

  return (
    <main className="container-wrap py-12">
      <div className="card mx-auto max-w-2xl p-8">
        <div className="space-y-1 border-b border-white/5 pb-6">
          <p className="text-xs uppercase tracking-[0.28em] text-neutral-500">
            Preserve a moment
          </p>
          <h1 className="text-3xl font-semibold">Capture a memory</h1>
          <p className="text-neutral-400">
            Safeguard precious moments, stories, and keepsakes forever.
          </p>
        </div>

        {!configured ? (
          <div className="mt-6 rounded-2xl border border-yellow-500/30 bg-yellow-500/10 p-4 text-sm text-yellow-200">
            Supabase is not configured for this deployment yet. Add
            <code className="mx-1">NEXT_PUBLIC_SUPABASE_URL</code>
            and
            <code className="mx-1">NEXT_PUBLIC_SUPABASE_ANON_KEY</code>
            in Vercel project settings, then redeploy.
          </div>
        ) : null}

        <form onSubmit={handleCreate} className="mt-8 space-y-8">
          <div className="space-y-5">
            <div>
              <label className="label">Who is this memory about?</label>
              <select
                className="input"
                value={lovedOneId}
                onChange={(e) => setLovedOneId(e.target.value)}
                required
                disabled={!configured}
              >
                <option value="">Select a loved one</option>
                {lovedOnes.map((person) => (
                  <option key={person.id} value={person.id}>
                    {person.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="label">Memory title</label>
              <input
                className="input"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="e.g. 'Grandma's apple pie recipe', 'Dad's fishing story', 'Our wedding vows'"
                required
                disabled={!configured}
              />
              <p className="mt-2 text-sm text-neutral-400">
                A short, meaningful title to remember this by
              </p>
            </div>
          </div>

          <div className="space-y-5 rounded-2xl border border-white/5 bg-white/5 p-5">
            <h2 className="text-sm font-medium text-neutral-300">Memory details</h2>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="label">Type</label>
                <select
                  className="input"
                  value={memoryType}
                  onChange={(e) => setMemoryType(e.target.value)}
                  disabled={!configured}
                >
                  <option value="note">Note</option>
                  <option value="photo">Photo</option>
                  <option value="video">Video</option>
                  <option value="audio">Audio</option>
                  <option value="letter">Letter</option>
                </select>
              </div>

              <div>
                <label className="label">Date</label>
                <input
                  className="input"
                  type="date"
                  value={memoryDate}
                  onChange={(e) => setMemoryDate(e.target.value)}
                  disabled={!configured}
                />
              </div>
            </div>

            <div>
              <label className="label">Description</label>
              <textarea
                className="input min-h-32"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="What makes this memory special? Why does it matter?"
                disabled={!configured}
              />
            </div>
          </div>

          <div className="space-y-5 rounded-2xl border border-white/5 bg-white/5 p-5">
            <h2 className="text-sm font-medium text-neutral-300">Attach a keepsake</h2>
            <div>
              <label className="label">Upload file</label>
              <input
                className="input"
                type="file"
                onChange={(e) => setFile(e.target.files?.[0] || null)}
                disabled={!configured}
              />
              <p className="mt-2 text-sm text-neutral-400">
                Photos, videos, audio recordings, or documents that help preserve this memory
              </p>
            </div>
          </div>

          <div className="pt-6">
            <button 
              className="btn btn-primary w-full" 
              type="submit" 
              disabled={!configured}
            >
              Preserve this memory
            </button>
          </div>
        </form>

        {status ? <p className="mt-4 text-sm text-neutral-400">{status}</p> : null}
      </div>
    </main>
  );
}
