import { cn } from "@/lib/utils";
import type { StopKind } from "@/lib/types";

const styles: Record<StopKind | "neutral", string> = {
  watch:
    "bg-velocity/10 text-velocity border-velocity/30 [text-shadow:0_0_12px_rgba(199,242,62,0.45)]",
  skip: "bg-white/[0.03] text-skip border-white/10",
  save: "bg-save/10 text-save border-save/30",
  neutral: "bg-white/[0.04] text-white/70 border-white/10",
};

const labels: Record<StopKind, string> = {
  watch: "WATCH",
  skip: "SKIP",
  save: "SAVE",
};

export function Badge({
  kind,
  children,
  className,
}: {
  kind: StopKind | "neutral";
  children?: React.ReactNode;
  className?: string;
}) {
  const content = children ?? (kind !== "neutral" ? labels[kind] : null);
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full border px-2 py-0.5 font-mono text-[10px] tracking-[0.18em] uppercase",
        styles[kind],
        className,
      )}
    >
      {content}
    </span>
  );
}
