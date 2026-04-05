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
  type Status = {
    type: 'idle' | 'loading' | 'success' | 'error';
    message: string;
  };
  
  const [status, setStatus] = useState<Status>({ type: 'idle', message: '' });
  const [file, setFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);

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
      setStatus({
        type: 'error',
        message: "Supabase is not configured yet. Add the Vercel environment variables and redeploy."
      });
      return;
    }

    setIsUploading(true);
    setStatus({ type: 'loading', message: 'Saving memory...' });

    // Basic file validation
    if (file) {
      const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB
      if (file.size > MAX_FILE_SIZE) {
        setStatus({
          type: 'error',
          message: 'File size exceeds 10MB limit'
        });
        setIsUploading(false);
        return;
      }
    }

    const result = await createMemory({
      loved_one_id: lovedOneId,
      title,
      description: description || null,
      memory_type: memoryType,
      memory_date: memoryDate || null,
      file,
    });

    if (!result.success) {
      setStatus({
        type: 'error',
        message: result.error || "Failed to save memory."
      });
      setIsUploading(false);
      return;
    }

    setStatus({ type: 'success', message: 'Memory saved successfully!' });
    setTimeout(() => {
      router.push("/dashboard");
      router.refresh();
    }, 1500);
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
                onChange={(e) => {
                  const selectedFile = e.target.files?.[0];
                  if (selectedFile) {
                    setFile(selectedFile);
                  }
                }}
                disabled={!configured || isUploading}
                accept=".jpg,.jpeg,.png,.gif,.mp4,.mov,.mp3,.wav,.pdf,.doc,.docx"
              />
              <p className="mt-2 text-sm text-neutral-400">
                Photos, videos, audio recordings, or documents that help preserve this memory.
                Max file size: 10MB. Supported formats: JPG, PNG, GIF, MP4, MOV, MP3, WAV, PDF, DOC
              </p>
            </div>
          </div>

          <div className="pt-6">
            <button 
              className="btn btn-primary w-full" 
              type="submit" 
              disabled={!configured || isUploading}
            >
              {isUploading ? (
                <span className="flex items-center gap-2">
                  <span className="animate-spin">⏳</span>
                  Saving...
                </span>
              ) : (
                'Preserve this memory'
              )}
            </button>
          </div>
        </form>

        {status.message && (
          <p 
            className={`mt-4 text-sm ${
              status.type === 'error' ? 'text-red-400' :
              status.type === 'success' ? 'text-green-400' :
              'text-neutral-400'
            }`}
          >
            {status.message}
          </p>
        )}
      </div>
    </main>
  );
}
