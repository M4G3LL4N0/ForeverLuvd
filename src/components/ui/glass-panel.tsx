import { cn } from "@/lib/utils";

interface GlassPanelProps extends React.HTMLAttributes<HTMLDivElement> {
  glowPosition?: "top" | "center" | "bottom";
}

export function GlassPanel({
  className,
  glowPosition = "center",
  children,
  ...props
}: GlassPanelProps) {
  return (
    <div
      className={cn(
        "relative isolate overflow-hidden rounded-[1.75rem] border border-white/15 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl",
        "before:absolute before:inset-0 before:-z-10 before:bg-[radial-gradient(700px_at_50%_50%,rgba(124,58,237,0.15),transparent_65%)]",
        "after:absolute after:inset-0 after:-z-10 after:bg-[linear-gradient(145deg,transparent_65%,rgba(255,255,255,0.02)_100%)]",
        "shadow-[0_8px_48px_-8px_rgba(0,0,0,0.25)] hover:shadow-[0_12px_64px_-16px_rgba(124,58,237,0.3)]",
        "hover:border-white/25 hover:backdrop-blur-xl transition-all duration-200 ease-out",
        "hover:-translate-y-[4px] transform-gpu",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
