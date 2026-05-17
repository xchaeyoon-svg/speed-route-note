"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const STEPS = [
  "영상의 루트를 확인하는 중…",
  "꼭 봐야 할 구간을 찾는 중…",
  "2배속 기준 실제 소요 시간을 계산하는 중…",
];

export function LoadingAnalysis() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setStep((s) => (s + 1) % STEPS.length), 700);
    return () => clearInterval(id);
  }, []);

  return (
    <main className="mx-auto flex min-h-[70vh] w-full max-w-2xl flex-col items-center justify-center px-6 py-20">
      {/* Animated route line preview */}
      <div className="relative mb-10 w-full max-w-sm">
        <svg
          viewBox="0 0 320 60"
          fill="none"
          className="h-14 w-full"
          aria-hidden
        >
          {/* Track */}
          <line
            x1="10"
            y1="30"
            x2="310"
            y2="30"
            stroke="rgba(255,255,255,0.10)"
            strokeWidth="1.5"
            strokeDasharray="4 6"
          />
          {[10, 80, 160, 240, 310].map((cx, i) => (
            <motion.circle
              key={i}
              cx={cx}
              cy={30}
              r={6}
              initial={{ opacity: 0.2, scale: 0.8 }}
              animate={{ opacity: [0.2, 1, 0.2], scale: [0.8, 1.15, 0.8] }}
              transition={{
                duration: 1.6,
                delay: i * 0.18,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              fill="#C7F23E"
            />
          ))}
        </svg>
      </div>

      {/* Rotating copy */}
      <div className="relative h-7 w-full overflow-hidden text-center">
        <AnimatePresence mode="wait">
          <motion.p
            key={step}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="text-[15px] text-white/85"
          >
            {STEPS[step]}
          </motion.p>
        </AnimatePresence>
      </div>

      <p className="mt-3 font-mono text-[10px] tracking-[0.22em] text-white/35">
        PLOTTING ROUTE · 2× MODE
      </p>
    </main>
  );
}
