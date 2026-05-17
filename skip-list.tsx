"use client";

import { motion } from "framer-motion";
import { FastForward } from "lucide-react";
import type { RouteNote } from "@/lib/types";

export function SkipList({ note }: { note: RouteNote }) {
  return (
    <section className="glass rounded-3xl p-5 sm:p-7">
      <header className="mb-5 flex items-start justify-between gap-3">
        <div>
          <div className="font-mono text-[10px] tracking-[0.22em] text-skip">
            SKIP ZONE
          </div>
          <h2 className="mt-2 font-display text-[20px] font-semibold tracking-tight text-white sm:text-[22px]">
            건너뛰어도 되는 구간
          </h2>
          <p className="mt-1 text-[12px] text-white/45 sm:text-[13px]">
            여기는 마음 편히 넘기세요.
          </p>
        </div>
        <FastForward className="h-5 w-5 shrink-0 text-skip" strokeWidth={1.75} />
      </header>

      <ul className="grid gap-2">
        {note.skip.map((item, i) => (
          <motion.li
            key={item.id}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.05 * i }}
            className="flex items-start gap-4 rounded-2xl border border-line/60 bg-white/[0.012] px-4 py-3"
          >
            <div className="shrink-0 font-mono text-[12px] tracking-wider text-white/45 sm:text-[13px]">
              {item.start} – {item.end}
            </div>
            <p className="text-[13px] leading-relaxed text-white/55 sm:text-[14px]">
              {item.reason}
            </p>
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
