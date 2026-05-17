"use client";

import { ArrowLeft, Settings2, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import type { AvailableTime, Purpose, Speed } from "@/lib/types";
import { cn } from "@/lib/utils";

const TIME_LABEL: Record<AvailableTime, string> = {
  "3min": "3분",
  "5min": "5분",
  "10min": "10분",
  full: "전체",
};
const PURPOSE_LABEL: Record<Purpose, string> = {
  quick: "빠른 판단",
  learning: "학습 정리",
  work: "업무 공유",
};

function ChipMenu<T extends string>({
  value,
  options,
  onChange,
  display,
}: {
  value: T;
  options: { value: T; label: string }[];
  onChange: (v: T) => void;
  display: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className={cn(
          "inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-[12px] font-medium transition-colors",
          open
            ? "border-velocity/50 bg-velocity/10 text-velocity"
            : "border-line bg-white/[0.03] text-white/85 hover:border-line-strong hover:bg-white/[0.06]",
        )}
      >
        {display}
        <span className="text-white/40">▾</span>
      </button>
      <AnimatePresence>
        {open && (
          <>
            <div
              className="fixed inset-0 z-40"
              onClick={() => setOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.12 }}
              className="absolute left-0 top-full z-50 mt-2 min-w-[140px] overflow-hidden rounded-xl border border-line-strong bg-ink-900/95 p-1 shadow-card backdrop-blur"
            >
              {options.map((opt) => {
                const active = opt.value === value;
                return (
                  <button
                    key={opt.value}
                    onClick={() => {
                      onChange(opt.value);
                      setOpen(false);
                    }}
                    className={cn(
                      "flex w-full items-center justify-between gap-2 rounded-lg px-3 py-2 text-left text-[13px] transition-colors",
                      active
                        ? "bg-velocity/10 text-velocity"
                        : "text-white/85 hover:bg-white/[0.06]",
                    )}
                  >
                    {opt.label}
                    {active && <Check className="h-3.5 w-3.5" />}
                  </button>
                );
              })}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

export function ResultToolbar({
  url,
  time,
  purpose,
  speed,
  setTime,
  setPurpose,
  setSpeed,
  onReset,
}: {
  url: string;
  time: AvailableTime;
  purpose: Purpose;
  speed: Speed;
  setTime: (v: AvailableTime) => void;
  setPurpose: (v: Purpose) => void;
  setSpeed: (v: Speed) => void;
  onReset: () => void;
}) {
  const host = (() => {
    try {
      return new URL(url).hostname.replace("www.", "");
    } catch {
      return "youtube";
    }
  })();

  return (
    <div className="sticky top-0 z-30 mx-auto w-full max-w-2xl px-5 pt-3 sm:px-8">
      <div className="glass-strong rounded-2xl px-3 py-2.5 sm:px-4">
        <div className="flex items-center justify-between gap-2">
          <button
            type="button"
            onClick={onReset}
            className="inline-flex shrink-0 items-center gap-1.5 rounded-lg px-2 py-1.5 text-[12px] font-medium text-white/75 transition-colors hover:bg-white/[0.06] hover:text-white"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            새 영상
          </button>
          <div className="hidden flex-1 truncate font-mono text-[11px] tracking-wider text-white/35 sm:block">
            {host}
          </div>
          <Settings2 className="hidden h-3.5 w-3.5 shrink-0 text-white/35 sm:block" />
        </div>

        <div className="-mx-1 mt-2 flex gap-2 overflow-x-auto pb-0.5 pl-1">
          <ChipMenu
            value={time}
            onChange={setTime}
            display={`⏱ ${TIME_LABEL[time]}`}
            options={[
              { value: "3min", label: "3분" },
              { value: "5min", label: "5분" },
              { value: "10min", label: "10분" },
              { value: "full", label: "전체" },
            ]}
          />
          <ChipMenu
            value={purpose}
            onChange={setPurpose}
            display={`🧭 ${PURPOSE_LABEL[purpose]}`}
            options={[
              { value: "quick", label: "빠른 판단" },
              { value: "learning", label: "학습 정리" },
              { value: "work", label: "업무 공유" },
            ]}
          />
          <ChipMenu
            value={speed}
            onChange={setSpeed}
            display={`⚡ ${speed}`}
            options={[
              { value: "1.5x", label: "1.5×" },
              { value: "2x", label: "2×" },
              { value: "3x", label: "3×" },
            ]}
          />
        </div>
      </div>
    </div>
  );
}
