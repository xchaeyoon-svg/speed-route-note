"use client";

import { useState, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type {
  AvailableTime,
  Purpose,
  Speed,
  RouteNote,
  AnalyzeRequest,
} from "@/lib/types";
import { TopNav } from "@/components/top-nav";
import { HeroIntro } from "@/components/hero-intro";
import { LoadingAnalysis } from "@/components/loading-analysis";
import { ResultView } from "@/components/result-view";

type View = "intro" | "loading" | "result";

export default function Page() {
  const [view, setView] = useState<View>("intro");
  const [url, setUrl] = useState("");
  const [time, setTime] = useState<AvailableTime>("3min");
  const [purpose, setPurpose] = useState<Purpose>("work");
  const [speed, setSpeed] = useState<Speed>("2x");
  const [note, setNote] = useState<RouteNote | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleGenerate = useCallback(async () => {
    setError(null);
    if (!url.trim() || !/youtu\.?be/.test(url)) {
      setError("유효한 YouTube 링크를 입력해주세요.");
      return;
    }
    setView("loading");
    try {
      const body: AnalyzeRequest = { url, availableTime: time, purpose, speed };
      const res = await fetch("/api/analyze", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data?.error || "분석에 실패했어요. 잠시 후 다시 시도해주세요.");
      }
      const data = (await res.json()) as { note: RouteNote };
      setNote(data.note);
      setView("result");
    } catch (e) {
      setError(e instanceof Error ? e.message : "알 수 없는 오류가 발생했어요.");
      setView("intro");
    }
  }, [url, time, purpose, speed]);

  const handleReset = useCallback(() => {
    setView("intro");
    setNote(null);
    setError(null);
  }, []);

  // When purpose changes after result, reflect into note's bestMode (locally; no refetch needed for prototype)
  const liveNote: RouteNote | null = note
    ? { ...note, bestMode: purpose }
    : null;

  return (
    <>
      {view !== "result" && <TopNav onReset={handleReset} />}

      <AnimatePresence mode="wait">
        {view === "intro" && (
          <motion.div
            key="intro"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <HeroIntro
              url={url}
              setUrl={setUrl}
              time={time}
              purpose={purpose}
              speed={speed}
              setTime={setTime}
              setPurpose={setPurpose}
              setSpeed={setSpeed}
              onGenerate={handleGenerate}
              isLoading={false}
              error={error}
            />
          </motion.div>
        )}
        {view === "loading" && (
          <motion.div
            key="loading"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <LoadingAnalysis />
          </motion.div>
        )}
        {view === "result" && liveNote && (
          <motion.div
            key="result"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
          >
            <ResultView
              note={liveNote}
              url={url}
              time={time}
              purpose={purpose}
              speed={speed}
              setTime={setTime}
              setPurpose={setPurpose}
              setSpeed={setSpeed}
              onReset={handleReset}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
