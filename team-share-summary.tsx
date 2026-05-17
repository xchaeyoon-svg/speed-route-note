"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Copy, Users } from "lucide-react";
import type { RouteNote } from "@/lib/types";

export function TeamShareSummary({
  note,
  emphasized = false,
}: {
  note: RouteNote;
  emphasized?: boolean;
}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(note.teamShare);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // no-op
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className={
        emphasized
          ? "relative overflow-hidden rounded-3xl border border-velocity/25 bg-gradient-to-br from-velocity/[0.05] to-transparent p-5 sm:p-7"
          : "glass rounded-3xl p-5 sm:p-7"
      }
    >
      <header className="mb-5 flex items-start justify-between gap-3">
        <div>
          <div
            className={`font-mono text-[10px] tracking-[0.22em] ${
              emphasized ? "text-velocity" : "text-white/40"
            }`}
          >
            TEAM SHARE
          </div>
          <h2 className="mt-2 font-display text-[20px] font-semibold tracking-tight text-white sm:text-[22px]">
            팀 공유용 요약
          </h2>
          <p className="mt-1 text-[12px] text-white/45 sm:text-[13px]">
            Slack · Notion · Email에 그대로 붙여넣을 수 있어요.
          </p>
        </div>
        <Users
          className={`h-5 w-5 shrink-0 ${
            emphasized ? "text-velocity" : "text-white/55"
          }`}
          strokeWidth={1.75}
        />
      </header>

      <div className="relative rounded-2xl border border-line bg-ink-900/40 p-4 sm:p-5">
        <pre className="whitespace-pre-wrap break-words font-sans text-[13.5px] leading-relaxed text-white/85 sm:text-[14.5px]">
{note.teamShare}
        </pre>
      </div>

      <button
        type="button"
        onClick={handleCopy}
        className={`group mt-4 inline-flex items-center gap-2 rounded-xl border px-4 py-2.5 text-[13px] font-medium transition-all active:scale-[0.98] ${
          copied
            ? "border-velocity/40 bg-velocity/10 text-velocity"
            : "border-line bg-white/[0.03] text-white/85 hover:border-line-strong hover:bg-white/[0.06]"
        }`}
      >
        {copied ? (
          <>
            <Check className="h-3.5 w-3.5" /> 복사됨
          </>
        ) : (
          <>
            <Copy className="h-3.5 w-3.5" /> 요약 복사
          </>
        )}
        <span className="font-mono text-[10px] tracking-[0.18em] text-white/35">
          ⌘C READY
        </span>
      </button>
    </motion.section>
  );
}
