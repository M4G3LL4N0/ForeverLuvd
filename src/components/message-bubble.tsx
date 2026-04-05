import { cn } from "@/lib/utils";

interface MessageBubbleProps {
  message: string;
  type: "user" | "system";
  timestamp: Date;
}

export function MessageBubble({ message, type, timestamp }: MessageBubbleProps) {
  return (
    <div
      className={cn(
        "flex max-w-[80%] flex-col space-y-1 rounded-2xl p-4",
        type === "user"
          ? "ml-auto bg-blue-500/10"
          : "bg-white/5"
      )}
    >
      <p className="text-sm">{message}</p>
      <p className="text-xs text-neutral-400">
        {timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
      </p>
    </div>
  );
}
