"use client";

import { motion } from "framer-motion";
import { Play, ArrowUpRight } from "lucide-react";
import type { RouteNote, Speed } from "@/lib/types";
import { applySpeed, formatDuration } from "@/lib/utils";

export function QuickRouteHero({
  note,
  speed,
  youtubeUrl,
}: {
  note: RouteNote;
  speed: Speed;
  youtubeUrl: string;
}) {
  const adjusted = formatDuration(applySpeed(note.threeMinHero.seconds, speed));

  // Convert "12:40" to seconds for YouTube ?t= param
  const [mm, ss] = note.threeMinHero.start.split(":").map(Number);
  const startSec = mm * 60 + ss;
  const ytLink = `${youtubeUrl}${youtubeUrl.includes("?") ? "&" : "?"}t=${startSec}s`;

  return (
    <motion.section
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.08 }}
      className="relative overflow-hidden rounded-3xl border border-velocity/30 bg-gradient-to-br from-velocity/[0.08] via-velocity/[0.02] to-transparent p-5 sm:p-7"
    >
      {/* Glow accents */}
      <div className="pointer-events-none absolute -left-24 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-velocity/10 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-0 h-32 w-32 rounded-full bg-velocity/10 blur-2xl" />

      <div className="relative">
        {/* Eyebrow */}
        <div className="flex items-center gap-2">
          <span className="relative inline-flex h-2 w-2 items-center justify-center">
            <span className="absolute inset-0 animate-pulseDot rounded-full bg-velocity" />
            <span className="relative inline-block h-1.5 w-1.5 rounded-full bg-velocity" />
          </span>
          <span className="font-mono text-[10px] tracking-[0.22em] text-velocity">
            3-MINUTE ROUTE · HERO PICK
          </span>
        </div>

        {/* Title */}
        <h2 className="mt-3 font-display text-[24px] font-semibold leading-[1.15] tracking-tight text-white sm:text-[30px]">
          3분만 있다면 이 구간만 보세요
        </h2>
        <p className="mt-1 text-[12px] text-white/45 sm:text-[13px]">
          내릴 역 전까지, 이 한 구간이면 충분합니다.
        </p>

        {/* Timestamp display */}
        <div className="mt-6 flex items-baseline gap-3">
          <span className="font-mono text-[34px] font-semibold tracking-tight text-velocity sm:text-[44px]">
            {note.threeMinHero.start}
          </span>
          <span className="font-mono text-[20px] text-white/30 sm:text-[26px]">
            →
          </span>
          <span className="font-mono text-[34px] font-semibold tracking-tight text-white sm:text-[44px]">
            {note.threeMinHero.end}
          </span>
        </div>

        <div className="mt-2 font-mono text-[10px] tracking-[0.22em] text-white/40">
          AT {speed.toUpperCase()} · {adjusted}
        </div>

        {/* Label + why */}
        <div className="mt-6 rounded-2xl border border-line bg-ink-900/40 p-4 backdrop-blur-sm sm:p-5">
          <div className="text-[15px] font-medium text-white sm:text-base">
            {note.threeMinHero.label}
          </div>
          <p className="mt-2 text-[13px] leading-relaxed text-white/70 sm:text-[14px]">
            {note.threeMinHero.why}
          </p>
        </div>

        {/* CTA */}
        <a
          href={ytLink}
          target="_blank"
          rel="noopener noreferrer"
          className="group mt-5 inline-flex items-center justify-center gap-2 rounded-2xl bg-velocity px-5 py-3 text-[14px] font-semibold tracking-tight text-ink-950 transition-all hover:brightness-110 active:scale-[0.99]"
        >
          <Play className="h-3.5 w-3.5 fill-current" />
          {note.threeMinHero.start}에서 바로 보기
          <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </div>
    </motion.section>
  );
}
