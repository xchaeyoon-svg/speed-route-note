"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import type { RouteNote, Speed } from "@/lib/types";
import { applySpeed, formatDuration } from "@/lib/utils";

export function MustWatchList({
  note,
  speed,
}: {
  note: RouteNote;
  speed: Speed;
}) {
  return (
    <section className="glass rounded-3xl p-5 sm:p-7">
      <header className="mb-5 flex items-start justify-between gap-3">
        <div>
          <div className="font-mono text-[10px] tracking-[0.22em] text-velocity">
            MUST WATCH
          </div>
          <h2 className="mt-2 font-display text-[20px] font-semibold tracking-tight text-white sm:text-[22px]">
            꼭 볼 구간
          </h2>
          <p className="mt-1 text-[12px] text-white/45 sm:text-[13px]">
            {speed} 기준 실제 소요 시간으로 계산했어요.
          </p>
        </div>
        <CheckCircle2 className="h-5 w-5 shrink-0 text-velocity/80" strokeWidth={1.75} />
      </header>

      <ul className="grid gap-3">
        {note.mustWatch.map((item, i) => {
          const adjusted = formatDuration(applySpeed(item.rawSeconds, speed));
          return (
            <motion.li
              key={item.id}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.05 * i }}
              className="rounded-2xl border border-velocity/20 bg-velocity/[0.04] p-4 sm:p-5"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-3">
                <div className="font-mono text-[14px] font-semibold tracking-tight text-velocity sm:text-[16px]">
                  {item.start} – {item.end}
                </div>
                <div className="flex items-baseline gap-1.5 font-mono text-[10px] tracking-[0.18em] text-white/55">
                  <span className="text-white/35">{speed.toUpperCase()}</span>
                  <span className="text-velocity">{adjusted}</span>
                </div>
              </div>
              <p className="mt-2 text-[13px] leading-relaxed text-white/75 sm:text-[14px]">
                {item.why}
              </p>
            </motion.li>
          );
        })}
      </ul>
    </section>
  );
}
