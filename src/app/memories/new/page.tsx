"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";

type LovedOne = {
  id: string;
  name: string;
};

export default function NewMemoryPage() {
  const supabase = createClient();
  const router = useRouter();

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
      const { data } = await supabase
        .from("loved_ones")
        .select("id,name")
        .order("created_at", { ascending: false });

      setLovedOnes(data || []);
      if (data?.[0]?.id) setLovedOneId(data[0].id);
    }

    loadLovedOnes();
  }, [supabase]);

  async function handleCreate(e: React.FormEvent) {
    e.preventDefault();
    setStatus("Saving memory...");

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
      <div className="card mx-auto max-w-2xl overflow-hidden">
        <div className="bg-neutral-900 px-8 py-6">
          <h1 className="text-3xl font-semibold">Preserve a Memory</h1>
          <p className="mt-2 text-neutral-300">
            Capture a moment that matters - photos, letters, voice notes or stories
          </p>
        </div>

        <form onSubmit={handleCreate} className="space-y-6 p-8">
          <div className="space-y-6">
            <div>
              <label className="label">For</label>
              <select
                className="input"
                value={lovedOneId}
                onChange={(e) => setLovedOneId(e.target.value)}
                required
              >
                {lovedOnes.map((person) => (
                  <option key={person.id} value={person.id}>
                    {person.name}
                  </option>
                ))}
              </select>
              <p className="mt-1 text-sm text-neutral-400">
                Who is this memory connected to?
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="label">Memory Title</label>
                <input
                  className="input"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="e.g. 'Grandma's 80th birthday'"
                  required
                />
                <p className="mt-1 text-sm text-neutral-400">
                  A short, meaningful name
                </p>
              </div>

              <div>
                <label className="label">Type</label>
                <select
                  className="input"
                  value={memoryType}
                  onChange={(e) => setMemoryType(e.target.value)}
                >
                  <option value="note">Written Note</option>
                  <option value="photo">Photo</option>
                  <option value="video">Video</option>
                  <option value="audio">Voice Note</option>
                  <option value="letter">Letter</option>
                </select>
              </div>
            </div>

            <div>
              <label className="label">Memory Date</label>
              <input
                className="input"
                type="date"
                value={memoryDate}
                onChange={(e) => setMemoryDate(e.target.value)}
              />
              <p className="mt-1 text-sm text-neutral-400">
                When this moment happened (if known)
              </p>
            </div>

            <div>
              <label className="label">Your Thoughts</label>
              <textarea
                className="input min-h-40"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="What makes this memory special? How does it make you feel?"
              />
            </div>

            <div className="rounded-lg border-2 border-dashed border-neutral-700 p-6 text-center">
              <label className="label">Add a File</label>
              <p className="mb-3 text-sm text-neutral-400">
                Upload photos, scans, recordings or documents
              </p>
              <input
                className="block w-full cursor-pointer text-sm"
                type="file"
                onChange={(e) => setFile(e.target.files?.[0] || null)}
              />
            </div>
          </div>

          <div className="pt-4">
            <button
              className="btn btn-primary w-full py-3 text-lg"
              type="submit"
            >
              Preserve This Memory
            </button>
          </div>
        </form>

        {status && (
          <div className="border-t border-neutral-800 px-8 py-4">
            <p className="text-sm text-neutral-400">{status}</p>
          </div>
        )}
      </div>
    </main>
  );
}
