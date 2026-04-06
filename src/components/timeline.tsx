import Link from "next/link";

type MemoryItem = {
  id: string;
  title: string;
  description?: string | null;
  memory_type?: string | null;
  memory_date?: string | null;
  file_url?: string | null;
};

const MEMORY_TYPE_STYLES = {
  note: "bg-white/5 border-white/10",
  photo: "bg-pink-500/10 border-pink-500/20",
  voice: "bg-blue-500/10 border-blue-500/20",
  letter: "bg-purple-500/10 border-purple-500/20",
  moment: "bg-green-500/10 border-green-500/20",
};

export default function Timeline({
  items,
  lovedOneId,
}: {
  items: MemoryItem[];
  lovedOneId: string;
}) {
  if (!items?.length) {
    return (
      <div className="rounded-[28px] border border-dashed border-white/20 bg-gradient-to-b from-white/5 to-transparent p-8 text-center backdrop-blur-sm">
        <div className="mx-auto max-w-md">
          <p className="text-xl font-semibold text-white">Begin their story</p>
          <p className="mt-3 text-neutral-300/90 leading-relaxed">
            This sacred space holds the promise of remembrance. 
            Add your first memory - a photo, letter, or moment - 
            to begin honoring their unique presence in your life.
          </p>
        <div className="mt-6">
          <Link
            href={`/memories/new?lovedOneId=${lovedOneId}`}
            className="inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 text-sm font-medium text-white transition-all hover:bg-white/10 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]"
          >
            <span>Add First Memory</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-plus"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="relative space-y-8">
      <div className="absolute bottom-0 left-[18px] top-0 w-px bg-gradient-to-b from-white/20 via-white/10 to-transparent" />

      {items.map((memory) => (
        <div key={memory.id} className="group relative flex gap-6">
          <div className="relative z-10 mt-4 h-3 w-3 rounded-full border border-white/20 bg-gradient-to-b from-white/90 to-white/70 shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]" />

          <div className="card flex-1 overflow-hidden p-6 backdrop-blur-sm transition-all hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h3 className="text-xl font-semibold tracking-tight text-white">{memory.title}</h3>
              <span className={`rounded-full border px-3 py-1 text-xs uppercase tracking-[0.18em] ${
                MEMORY_TYPE_STYLES[memory.memory_type as keyof typeof MEMORY_TYPE_STYLES] || 
                MEMORY_TYPE_STYLES.note
              }`}>
                {memory.memory_type || "memory"}
              </span>
            </div>

            {memory.memory_date ? (
              <p className="mt-2 text-sm font-medium text-neutral-400">
                {new Date(memory.memory_date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </p>
            ) : null}

            {memory.description ? (
              <p className="mt-4 text-neutral-300/90 leading-relaxed">
                {memory.description}
              </p>
            ) : null}

            {memory.file_url ? (
              <div className="mt-4">
                <a
                  href={memory.file_url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 text-sm font-medium text-white transition-all hover:bg-white/10 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]"
                >
                  <span>View Attachment</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-external-link"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><path d="M15 3h6v6"/><path d="M10 14 21 3"/></svg>
                </a>
              </div>
            ) : null}
          </div>
        </div>
      ))}
    </div>
  );
}
