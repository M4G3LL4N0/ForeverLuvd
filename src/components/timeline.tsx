import { cn } from "@/lib/utils";

export function Timeline({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative">
      <div className="absolute left-[18px] h-full w-px bg-white/10" />
      <div className="space-y-12">{children}</div>
    </div>
  );
}

type TimelineItemProps = {
  date?: string;
  type: "note" | "photo" | "video" | "audio" | "letter";
  children: React.ReactNode;
};

export function TimelineItem({ date, type, children }: TimelineItemProps) {
  return (
    <div className="flex gap-6">
      <div className="flex flex-col items-center">
        <div className="h-10 w-10 rounded-full border-2 border-white/10 bg-white/5 flex items-center justify-center">
          <span className="text-xs font-medium text-neutral-300">
            {type[0].toUpperCase()}
          </span>
        </div>
        {date && (
          <p className="mt-2 text-xs text-neutral-400">
            {new Date(date).toLocaleDateString()}
          </p>
        )}
      </div>
      <div className="flex-1">{children}</div>
    </div>
  );
}

export function TimelineEmptyState({ lovedOneName }: { lovedOneName: string }) {
  return (
    <div className="rounded-2xl border border-dashed border-white/10 p-8 text-center">
      <p className="text-neutral-400">
        This timeline is waiting for its first memory. Would you like to{" "}
        <a
          href={`/memories/new?lovedOneId=${id}`}
          className="text-white underline hover:text-neutral-300 transition-colors"
        >
          add one
        </a>
        ?
      </p>
    </div>
  );
}
