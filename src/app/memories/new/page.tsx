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
      <div className="card mx-auto max-w-2xl p-8">
        <h1 className="text-3xl font-semibold">Add a memory</h1>
        <p className="mt-3 text-neutral-400">
          Preserve a moment, note, file, or story.
        </p>

        <form onSubmit={handleCreate} className="mt-8 space-y-5">
          <div>
            <label className="label">Loved one</label>
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
          </div>

          <div>
            <label className="label">Title</label>
            <input
              className="input"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Birthday voicemail, old photo, story from childhood..."
              required
            />
          </div>

          <div>
            <label className="label">Type</label>
            <select
              className="input"
              value={memoryType}
              onChange={(e) => setMemoryType(e.target.value)}
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
            />
          </div>

          <div>
            <label className="label">Description</label>
            <textarea
              className="input min-h-32"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Why this moment matters..."
            />
          </div>

          <div>
            <label className="label">File upload</label>
            <input
              className="input"
              type="file"
              onChange={(e) => setFile(e.target.files?.[0] || null)}
            />
          </div>

          <button className="btn btn-primary" type="submit">
            Save memory
          </button>
        </form>

        {status ? <p className="mt-4 text-sm text-neutral-400">{status}</p> : null}
      </div>
    </main>
  );
}
