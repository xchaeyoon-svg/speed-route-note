"use client";

import { motion } from "framer-motion";
import { Bookmark } from "lucide-react";
import type { RouteNote } from "@/lib/types";

export function SaveInsights({ note }: { note: RouteNote }) {
  return (
    <section className="glass rounded-3xl p-5 sm:p-7">
      <header className="mb-5 flex items-start justify-between gap-3">
        <div>
          <div className="font-mono text-[10px] tracking-[0.22em] text-save">
            SAVE POINTS
          </div>
          <h2 className="mt-2 font-display text-[20px] font-semibold tracking-tight text-white sm:text-[22px]">
            저장할 인사이트
          </h2>
          <p className="mt-1 text-[12px] text-white/45 sm:text-[13px]">
            노트나 메모 앱에 그대로 복사해 두세요.
          </p>
        </div>
        <Bookmark className="h-5 w-5 shrink-0 text-save" strokeWidth={1.75} />
      </header>

      <ul className="grid gap-2.5">
        {note.saves.map((insight, i) => (
          <motion.li
            key={i}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.04 * i }}
            className="flex gap-3 rounded-2xl border border-save/20 bg-save/[0.04] px-4 py-3"
          >
            <span className="mt-0.5 inline-block font-mono text-[11px] tracking-wider text-save/85">
              {(i + 1).toString().padStart(2, "0")}
            </span>
            <p className="text-[13.5px] leading-relaxed text-white/85 sm:text-[14.5px]">
              {insight}
            </p>
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
