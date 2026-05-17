"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface SegmentOption<T extends string> {
  value: T;
  label: string;
  sub?: string;
}

export function Segmented<T extends string>({
  options,
  value,
  onChange,
  ariaLabel,
}: {
  options: SegmentOption<T>[];
  value: T;
  onChange: (v: T) => void;
  ariaLabel: string;
}) {
  return (
    <div
      role="radiogroup"
      aria-label={ariaLabel}
      className="relative grid w-full grid-flow-col auto-cols-fr gap-1 rounded-2xl border border-line bg-white/[0.02] p-1"
    >
      {options.map((opt) => {
        const active = opt.value === value;
        return (
          <button
            key={opt.value}
            role="radio"
            aria-checked={active}
            onClick={() => onChange(opt.value)}
            className={cn(
              "relative z-10 flex flex-col items-center justify-center gap-0.5 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors",
              active
                ? "text-ink-950"
                : "text-white/65 hover:text-white",
            )}
          >
            {active && (
              <motion.span
                layoutId={`seg-${ariaLabel}`}
                className="absolute inset-0 -z-10 rounded-xl bg-velocity shadow-[0_0_24px_-6px_rgba(199,242,62,0.55)]"
                transition={{ type: "spring", stiffness: 380, damping: 32 }}
              />
            )}
            <span className="leading-tight">{opt.label}</span>
            {opt.sub && (
              <span
                className={cn(
                  "text-[10px] font-mono tracking-wider",
                  active ? "text-ink-950/70" : "text-white/35",
                )}
              >
                {opt.sub}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}
