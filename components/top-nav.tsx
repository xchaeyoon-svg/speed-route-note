import { Gauge } from "lucide-react";

export function TopNav({ onReset }: { onReset?: () => void }) {
  return (
    <header className="mx-auto flex w-full max-w-5xl items-center justify-between px-5 pt-6 pb-2 sm:px-8">
      <button
        onClick={onReset}
        className="group flex items-center gap-2.5 text-left"
      >
        <span className="relative inline-flex h-7 w-7 items-center justify-center rounded-lg bg-velocity/15 ring-1 ring-velocity/30">
          <Gauge className="h-4 w-4 text-velocity" strokeWidth={2.25} />
          <span className="absolute inset-0 rounded-lg bg-velocity/10 blur-md" />
        </span>
        <span className="flex flex-col leading-none">
          <span className="font-display text-[15px] font-semibold tracking-tight">
            Speed Route Note
          </span>
          <span className="mt-0.5 font-mono text-[10px] tracking-[0.22em] text-white/40">
            v0.1 · 2x VIEWER
          </span>
        </span>
      </button>

      <div className="hidden items-center gap-3 sm:flex">
        <span className="font-mono text-[10px] tracking-[0.22em] text-white/35">
          WATCH LESS · GET THE ROUTE
        </span>
      </div>
    </header>
  );
}
