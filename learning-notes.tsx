"use client";

import { motion } from "framer-motion";
import { GraduationCap, ArrowRightLeft, HelpCircle } from "lucide-react";
import type { RouteNote } from "@/lib/types";

export function LearningNotes({
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
            LEARNING NOTES
          </div>
          <h2 className="mt-2 font-display text-[20px] font-semibold tracking-tight text-white sm:text-[22px]">
            학습 정리
          </h2>
          <p className="mt-1 text-[12px] text-white/45 sm:text-[13px]">
            보고 나서 머릿속에 남는 형태로 정리했어요.
          </p>
        </div>
        <GraduationCap
          className={`h-5 w-5 shrink-0 ${
            emphasized ? "text-velocity" : "text-white/55"
          }`}
          strokeWidth={1.75}
        />
      </header>

      {/* Concepts */}
      <div>
        <div className="mb-2 flex items-center gap-2">
          <span className="font-mono text-[10px] tracking-[0.22em] text-white/40">
            CORE CONCEPTS
          </span>
          <span className="text-[11px] text-white/30">핵심 개념</span>
        </div>
        <ul className="grid gap-2.5">
          {note.learning.concepts.map((c, i) => (
            <li
              key={i}
              className="rounded-2xl border border-line bg-white/[0.02] p-4"
            >
              <div className="font-display text-[15px] font-semibold tracking-tight text-velocity sm:text-base">
                {c.term}
              </div>
              <p className="mt-1.5 text-[13px] leading-relaxed text-white/70 sm:text-[14px]">
                {c.definition}
              </p>
            </li>
          ))}
        </ul>
      </div>

      {/* Relationship */}
      <div className="mt-6">
        <div className="mb-2 flex items-center gap-2">
          <ArrowRightLeft className="h-3 w-3 text-white/40" />
          <span className="font-mono text-[10px] tracking-[0.22em] text-white/40">
            HOW THEY CONNECT
          </span>
          <span className="text-[11px] text-white/30">개념 관계</span>
        </div>
        <div className="rounded-2xl border border-line bg-white/[0.02] p-4 text-[13.5px] leading-relaxed text-white/80 sm:text-[14.5px]">
          {note.learning.relationship}
        </div>
      </div>

      {/* Questions */}
      <div className="mt-6">
        <div className="mb-2 flex items-center gap-2">
          <HelpCircle className="h-3 w-3 text-white/40" />
          <span className="font-mono text-[10px] tracking-[0.22em] text-white/40">
            REVIEW QUESTIONS
          </span>
          <span className="text-[11px] text-white/30">복습 질문</span>
        </div>
        <ol className="grid gap-2">
          {note.learning.questions.map((q, i) => (
            <li
              key={i}
              className="flex gap-3 rounded-2xl border border-line bg-white/[0.02] p-4"
            >
              <span className="mt-0.5 font-mono text-[11px] tracking-wider text-velocity">
                Q{i + 1}
              </span>
              <span className="text-[13.5px] leading-relaxed text-white/85 sm:text-[14.5px]">
                {q}
              </span>
            </li>
          ))}
        </ol>
      </div>
    </motion.section>
  );
}
