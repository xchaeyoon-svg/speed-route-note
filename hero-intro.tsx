"use client";

import { motion } from "framer-motion";
import { ArrowRight, Loader2 } from "lucide-react";
import type { AvailableTime, Purpose, Speed } from "@/lib/types";
import { UrlInput } from "./url-input";
import { IntentSelector } from "./intent-selector";

export function HeroIntro({
  url,
  setUrl,
  time,
  purpose,
  speed,
  setTime,
  setPurpose,
  setSpeed,
  onGenerate,
  isLoading,
  error,
}: {
  url: string;
  setUrl: (v: string) => void;
  time: AvailableTime;
  purpose: Purpose;
  speed: Speed;
  setTime: (v: AvailableTime) => void;
  setPurpose: (v: Purpose) => void;
  setSpeed: (v: Speed) => void;
  onGenerate: () => void;
  isLoading: boolean;
  error?: string | null;
}) {
  const canSubmit =
    !isLoading && url.trim().length > 0 && /youtu\.?be/.test(url);

  return (
    <main className="mx-auto w-full max-w-2xl px-5 pb-24 pt-6 sm:px-8 sm:pt-10">
      {/* Eyebrow */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="mb-4 inline-flex items-center gap-2 rounded-full border border-line bg-white/[0.03] px-3 py-1"
      >
        <span className="relative inline-block h-1.5 w-1.5 rounded-full bg-velocity">
          <span className="absolute inset-0 animate-pulseDot rounded-full bg-velocity" />
        </span>
        <span className="font-mono text-[10px] tracking-[0.22em] text-white/55">
          ROUTE PLANNER · NOT A SUMMARIZER
        </span>
      </motion.div>

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.05 }}
        className="font-display text-[40px] leading-[1.02] font-semibold tracking-[-0.025em] text-white sm:text-[56px]"
      >
        Watch less.
        <br />
        <span className="bg-gradient-to-r from-velocity via-velocity to-velocity/70 bg-clip-text text-transparent">
          Get the route.
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.12 }}
        className="mt-4 max-w-xl text-[15px] leading-relaxed text-white/60 sm:text-base"
      >
        유튜브 링크를 붙여넣으면 <span className="text-white/90">2배속 기준 시청 루트</span>를
        만들어드립니다. 꼭 볼 구간, 건너뛸 구간, 저장할 인사이트를 한 화면에서.
        <br />
        <span className="mt-2 inline-block text-[13px] text-white/40">
          영상을 끝까지 보기 전에, 지금 내 시간에 맞는 핵심 구간부터 확인하세요.
        </span>
      </motion.p>

      {/* Input card */}
      <motion.section
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-10"
      >
        <UrlInput value={url} onChange={setUrl} disabled={isLoading} />
      </motion.section>

      {/* Intent */}
      <motion.section
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.28 }}
        className="mt-8"
      >
        <IntentSelector
          time={time}
          purpose={purpose}
          speed={speed}
          onTime={setTime}
          onPurpose={setPurpose}
          onSpeed={setSpeed}
        />
      </motion.section>

      {/* CTA */}
      <motion.section
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.36 }}
        className="mt-8"
      >
        <button
          type="button"
          onClick={onGenerate}
          disabled={!canSubmit}
          className="group relative flex w-full items-center justify-center gap-2.5 overflow-hidden rounded-2xl bg-velocity px-6 py-4 text-[15px] font-semibold tracking-tight text-ink-950 transition-all hover:brightness-110 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:brightness-100"
        >
          {isLoading ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              루트 분석 중…
            </>
          ) : (
            <>
              Generate Route Note
              <ArrowRight className="h-4 w-4 transition-transform group-enabled:group-hover:translate-x-0.5" />
            </>
          )}
          <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-enabled:group-hover:translate-x-full" />
        </button>
        {error && (
          <p className="mt-3 text-center text-sm text-red-300/80">{error}</p>
        )}
        <p className="mt-4 text-center font-mono text-[10px] tracking-[0.22em] text-white/30">
          정속으로 볼 필요 없는 영상인지, 먼저 판단하세요.
        </p>
      </motion.section>

      {/* Tiny feature row */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="mt-14 grid grid-cols-3 gap-3 sm:gap-4"
      >
        {[
          { ko: "꼭 볼 구간", en: "MUST WATCH" },
          { ko: "건너뛸 구간", en: "SKIP ZONE" },
          { ko: "저장할 인사이트", en: "SAVE POINTS" },
        ].map((f, i) => (
          <div
            key={i}
            className="hairline rounded-xl bg-white/[0.015] px-3 py-3 text-center"
          >
            <div className="text-[12px] font-medium text-white/80 sm:text-sm">
              {f.ko}
            </div>
            <div className="mt-1 font-mono text-[9px] tracking-[0.22em] text-white/30">
              {f.en}
            </div>
          </div>
        ))}
      </motion.section>
    </main>
  );
}
