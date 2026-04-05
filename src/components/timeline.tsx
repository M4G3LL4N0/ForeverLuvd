import Link from "next/link";

type MemoryItem = {
  id: string;
  title: string;
  description?: string | null;
  memory_type?: string | null;
  memory_date?: string | null;
  file_url?: string | null;
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
      <div className="rounded-[28px] border border-dashed border-white/10 bg-white/5 p-8 text-neutral-400">
        <p className="text-lg font-medium text-white">Start building their timeline</p>
        <p className="mt-3 max-w-xl">
          This timeline is waiting for its first memory. Add a story, photo,
          voice note, letter, or meaningful moment to begin preserving their presence.
        </p>
        <div className="mt-6">
          <Link
            href={`/memories/new?lovedOneId=${lovedOneId}`}
            className="text-white underline transition-colors hover:text-neutral-300"
          >
            Add the first memory
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="relative space-y-6">
      <div className="absolute bottom-0 left-4 top-0 w-px bg-gradient-to-b from-white/20 via-white/10 to-transparent" />

      {items.map((memory) => (
        <div key={memory.id} className="relative flex gap-4">
          <div className="relative z-10 mt-3 h-3 w-3 rounded-full border border-white/20 bg-white/80 shadow-[0_0_20px_rgba(255,255,255,0.2)]" />

          <div className="card flex-1 p-5">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h3 className="text-lg font-semibold">{memory.title}</h3>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.18em] text-neutral-400">
                {memory.memory_type || "memory"}
              </span>
            </div>

            {memory.memory_date ? (
              <p className="mt-2 text-sm text-neutral-500">{memory.memory_date}</p>
            ) : null}

            {memory.description ? (
              <p className="mt-4 text-neutral-300">{memory.description}</p>
            ) : null}

            {memory.file_url ? (
              <div className="mt-4">
                <a
                  href={memory.file_url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-white underline transition-colors hover:text-neutral-300"
                >
                  Open attachment
                </a>
              </div>
            ) : null}
          </div>
        </div>
      ))}
    </div>
  );
}
