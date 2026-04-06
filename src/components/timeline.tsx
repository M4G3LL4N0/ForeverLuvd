import Link from "next/link";

type MemoryItem = {
  id: string;
  title: string;
  description?: string | null;
  memory_type?: string | null;
  memory_date?: string | null;
  file_url?: string | null;
};

function getMemoryLabel(type?: string | null) {
  switch (type) {
    case "photo":
      return "Photo";
    case "video":
      return "Video";
    case "audio":
      return "Audio";
    case "letter":
      return "Letter";
    case "note":
      return "Note";
    default:
      return "Memory";
  }
}

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
        <p className="text-lg font-medium text-white">
          Start building their timeline
        </p>
        <p className="mt-3 max-w-xl">
          This timeline is waiting for its first memory. Add a story, photo,
          voice note, letter, or meaningful moment to begin preserving their
          presence and building a deeper understanding of who they were.
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
    <div className="relative space-y-8">
      <div className="absolute bottom-0 left-[7px] top-0 w-px bg-gradient-to-b from-white/20 via-white/10 to-transparent" />

      {items.map((memory) => (
        <div key={memory.id} className="relative flex gap-5">
          <div className="relative z-10 mt-4 h-4 w-4 rounded-full border border-white/20 bg-white/80 shadow-[0_0_24px_rgba(255,255,255,0.18)]" />

          <div className="card flex-1 p-6">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-neutral-500">
                  {getMemoryLabel(memory.memory_type)}
                </p>
                <h3 className="mt-2 text-xl font-semibold">{memory.title}</h3>
              </div>

              {memory.memory_date ? (
                <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-neutral-400">
                  {memory.memory_date}
                </div>
              ) : null}
            </div>

            {memory.description ? (
              <p className="mt-4 max-w-2xl text-neutral-300">
                {memory.description}
              </p>
            ) : null}

            {memory.file_url ? (
              <div className="mt-5">
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
