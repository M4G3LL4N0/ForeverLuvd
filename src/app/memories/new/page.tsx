"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { createClient, isSupabaseConfigured } from "@/lib/supabase/client";

type LovedOne = {
  id: string;
  name: string;
};

export default function NewMemoryPage() {
  const router = useRouter();
  const configured = isSupabaseConfigured();

  const [lovedOnes, setLovedOnes] = useState<LovedOne[]>([]);
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

      const supabase = createClient();
      const { data } = await supabase
        .from("loved_ones")
        .select("id,name")
        .order("created_at", { ascending: false });

      setLovedOnes(data || []);
      if (data?.[0]?.id) setLovedOneId(data[0].id);
    }

    loadLovedOnes();
  }, [configured]);

  async function handleCreate(e: React.FormEvent) {
    e.preventDefault();

    if (!configured) {
      setStatus("Supabase is not configured yet. Add the Vercel environment variables and redeploy.");
      return;
    }

    setStatus("Saving memory...");
    const supabase = createClient();

    let fileUrl: string | null = null;

    if (file) {
      const filePath = `${crypto.randomUUID()}-${file.name}`;

      const { error: uploadError } = await supabase.storage
        .from("memory-files")
        .upload(filePath, file);

      if (uploadError) {
        setStatus(uploadError.message);
        return;
      }

      const { data: publicUrlData } = supabase.storage
        .from("memory-files")
        .getPublicUrl(filePath);

      fileUrl = publicUrlData.publicUrl;
    }

    const { error } = await supabase.from("memories").insert({
      loved_one_id: lovedOneId,
      title,
      description: description || null,
      memory_type: memoryType,
      memory_date: memoryDate || null,
      file_url: fileUrl,
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
        <p className="mb-3 text-xs uppercase tracking-[0.28em] text-neutral-500">
          Memory capture
        </p>
        <h1 className="text-3xl font-semibold">Add a memory</h1>
        <p className="mt-3 text-neutral-400">
          Preserve a moment, note, file, or story.
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
            <label className="label">Loved one</label>
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
            <label className="label">Title</label>
            <input
              className="input"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Birthday voicemail, old photo, story from childhood..."
              required
              disabled={!configured}
            />
          </div>

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
            <label className="label">Date of memory</label>
            <input
              className="input"
              type="date"
              value={memoryDate}
              onChange={(e) => setMemoryDate(e.target.value)}
              disabled={!configured}
            />
          </div>

          <div>
            <label className="label">Description</label>
            <textarea
              className="input min-h-32"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Why this moment matters..."
              disabled={!configured}
            />
          </div>

          <div>
            <label className="label">File upload</label>
            <input
              className="input"
              type="file"
              onChange={(e) => setFile(e.target.files?.[0] || null)}
              disabled={!configured}
            />
          </div>

          <button className="btn btn-primary" type="submit" disabled={!configured}>
            Save memory
          </button>
        </form>

        {status ? <p className="mt-4 text-sm text-neutral-400">{status}</p> : null}
      </div>
    </main>
  );
}
