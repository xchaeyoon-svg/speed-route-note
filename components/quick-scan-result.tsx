"use client";

import { motion } from "framer-motion";
import { ScanLine } from "lucide-react";
import type { RouteNote } from "@/lib/types";

function Row({
  label,
  ko,
  value,
}: {
  label: string;
  ko: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl border border-line bg-white/[0.02] p-4">
      <div className="mb-1.5 flex items-center gap-2">
        <span className="font-mono text-[10px] tracking-[0.22em] text-velocity/85">
          {label}
        </span>
        <span className="text-[11px] text-white/30">{ko}</span>
      </div>
      <p className="text-[14px] leading-relaxed text-white/85 sm:text-[15px]">
        {value}
      </p>
    </div>
  );
}

export function QuickScanResult({
  note,
  emphasized = false,
}: {
  note: RouteNote;
  emphasized?: boolean;
}) {
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
            QUICK SCAN
          </div>
          <h2 className="mt-2 font-display text-[20px] font-semibold tracking-tight text-white sm:text-[22px]">
            빠른 판단 카드
          </h2>
          <p className="mt-1 text-[12px] text-white/45 sm:text-[13px]">
            한 화면에서 결정 가능하도록 추려두었어요.
          </p>
        </div>
        <ScanLine
          className={`h-5 w-5 shrink-0 ${
            emphasized ? "text-velocity" : "text-white/55"
          }`}
          strokeWidth={1.75}
        />
      </header>

      <div className="grid gap-2.5">
        <Row
          label="WORTH WATCHING?"
          ko="볼 가치가 있나요?"
          value={note.quickScan.shouldWatch}
        />
        <Row
          label="SAFE TO SKIP"
          ko="건너뛰어도 되는 부분"
          value={note.quickScan.canSkip}
        />
        <Row
          label="BEST 3-MIN ROUTE"
          ko="3분 루트"
          value={note.quickScan.bestThreeMin}
        />
        <Row
          label="ONE-LINE TAKEAWAY"
          ko="한 줄 결론"
          value={note.quickScan.oneLineTakeaway}
        />
      </div>
    </motion.section>
  );
}
