"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import type { RouteNote, Speed, Purpose } from "@/lib/types";
import { applySpeed, formatDuration } from "@/lib/utils";

const MODE_LABEL: Record<Purpose, string> = {
  quick: "Quick Scan",
  learning: "Learning",
  work: "Work Share",
};

const MODE_KO: Record<Purpose, string> = {
  quick: "빠른 판단",
  learning: "학습 정리",
  work: "업무 공유",
};

function Stat({
  label,
  ko,
  value,
  emphasis,
}: {
  label: string;
  ko: string;
  value: string;
  emphasis?: boolean;
}) {
  return (
    <div className="flex flex-col gap-1 py-3">
      <div className="flex items-baseline gap-1.5">
        <span className="font-mono text-[10px] tracking-[0.22em] text-white/35">
          {label}
        </span>
      </div>
      <div
        className={
          emphasis
            ? "tabular font-display text-[28px] font-semibold leading-none text-velocity sm:text-[32px]"
            : "tabular font-display text-[22px] font-semibold leading-none text-white sm:text-[26px]"
        }
      >
        {value}
      </div>
      <div className="text-[11px] text-white/40">{ko}</div>
    </div>
  );
}

export function SummaryDashboard({
  note,
  speed,
  purpose,
}: {
  note: RouteNote;
  speed: Speed;
  purpose: Purpose;
}) {
  const twoXSeconds = applySpeed(note.recommendedSeconds, speed);
  const twoXLabel = formatDuration(twoXSeconds);

  return (
    <motion.section
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="glass-strong relative overflow-hidden rounded-3xl p-5 sm:p-7"
    >
      {/* Decorative glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-velocity/10 blur-3xl"
      />

      <div className="relative">
        {/* Verdict eyebrow */}
        <div className="flex items-center gap-2">
          <Sparkles className="h-3.5 w-3.5 text-velocity" />
          <span className="font-mono text-[10px] tracking-[0.22em] text-velocity/80">
            VERDICT
          </span>
        </div>

        {/* Headline */}
        <h2 className="mt-3 font-display text-[26px] font-semibold leading-[1.1] tracking-tight text-white sm:text-[32px]">
          {note.verdictHeadline}
        </h2>
        <p className="mt-1 text-[12px] tracking-wide text-white/40 sm:text-[13px]">
          전체 영상 대신 핵심 루트만 가져가세요.
        </p>

        {/* One-line */}
        <p className="mt-5 text-[14px] leading-relaxed text-white/75 sm:text-[15px]">
          {note.oneLine}
        </p>

        {/* Video meta */}
        <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-1 text-[12px] text-white/45">
          <span className="text-white/70">{note.videoTitle}</span>
          <span className="text-white/20">·</span>
          <span>{note.channelName}</span>
        </div>

        {/* Divider */}
        <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* Stat grid */}
        <div className="mt-1 grid grid-cols-2 gap-x-4 divide-y divide-line sm:grid-cols-4 sm:divide-y-0 sm:divide-x">
          <Stat label="ORIGINAL" ko="원본 길이" value={note.originalLength} />
          <Stat label="ROUTE" ko="추천 루트" value={note.recommendedRoute} />
          <Stat
            label={`AT ${speed.toUpperCase()}`}
            ko="실제 소요 시간"
            value={twoXLabel}
            emphasis
          />
          <Stat
            label="BEST MODE"
            ko={MODE_KO[purpose]}
            value={MODE_LABEL[purpose]}
          />
        </div>
      </div>
    </motion.section>
  );
}
