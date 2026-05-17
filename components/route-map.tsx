"use client";

import { motion } from "framer-motion";
import type { RouteNote, StopKind } from "@/lib/types";
import { Badge } from "./badge";

function Node({ kind }: { kind: StopKind }) {
  if (kind === "save") {
    return (
      <span className="relative inline-block h-2.5 w-2.5 rotate-45 bg-save shadow-[0_0_14px_-2px_rgba(245,194,73,0.65)]" />
    );
  }
  if (kind === "skip") {
    return (
      <span className="relative inline-block h-2.5 w-2.5 rounded-full bg-ink-900 ring-1 ring-white/30" />
    );
  }
  return (
    <span className="relative inline-block h-2.5 w-2.5 rounded-full bg-velocity shadow-[0_0_14px_-2px_rgba(199,242,62,0.75)]" />
  );
}

export function RouteMap({ note }: { note: RouteNote }) {
  return (
    <section className="glass rounded-3xl p-5 sm:p-7">
      <header className="mb-6">
        <div className="font-mono text-[10px] tracking-[0.22em] text-white/35">
          WATCH ROUTE
        </div>
        <h2 className="mt-2 font-display text-[20px] font-semibold tracking-tight text-white sm:text-[22px]">
          시청 루트
        </h2>
        <p className="mt-1 text-[12px] text-white/45 sm:text-[13px]">
          영상 전체 대신, 이 정거장만 따라가세요.
        </p>
      </header>

      <ol>
        {note.stops.map((stop, i) => {
          const last = i === note.stops.length - 1;
          const dim = stop.kind === "skip";
          return (
            <motion.li
              key={stop.id}
              initial={{ opacity: 0, x: 6 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.04 * i, ease: "easeOut" }}
              className="relative flex gap-4 pb-5 last:pb-0"
            >
              {/* Track segment (skips for last) */}
              {!last && (
                <span
                  aria-hidden
                  className="absolute left-[7px] top-4 h-full w-px bg-white/10"
                />
              )}

              {/* Node column */}
              <span className="relative z-10 mt-1.5 inline-flex h-4 w-4 shrink-0 items-center justify-center">
                <Node kind={stop.kind} />
              </span>

              {/* Content */}
              <div
                className={
                  dim
                    ? "flex-1 rounded-2xl border border-line/60 bg-white/[0.012] p-4 opacity-70"
                    : "flex-1 rounded-2xl border border-line bg-white/[0.025] p-4 transition-colors hover:bg-white/[0.04]"
                }
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                      <span className="text-[14px] font-medium tracking-tight text-white sm:text-[15px]">
                        {stop.label}
                      </span>
                      <span className="text-[11px] text-white/40 sm:text-[12px]">
                        {stop.korean}
                      </span>
                    </div>
                    <div className="mt-0.5 font-mono text-[11px] tracking-wider text-white/55 sm:text-[12px]">
                      {stop.start} – {stop.end}
                    </div>
                  </div>
                  <Badge kind={stop.kind} />
                </div>
                <p className="mt-2 text-[12.5px] leading-relaxed text-white/60 sm:text-[13.5px]">
                  {stop.reason}
                </p>
              </div>
            </motion.li>
          );
        })}
      </ol>
    </section>
  );
}
