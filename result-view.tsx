"use client";

import { motion } from "framer-motion";
import type { RouteNote, AvailableTime, Purpose, Speed } from "@/lib/types";
import { SummaryDashboard } from "./summary-dashboard";
import { QuickRouteHero } from "./quick-route-hero";
import { RouteMap } from "./route-map";
import { MustWatchList } from "./must-watch-list";
import { SkipList } from "./skip-list";
import { SaveInsights } from "./save-insights";
import { TeamShareSummary } from "./team-share-summary";
import { LearningNotes } from "./learning-notes";
import { QuickScanResult } from "./quick-scan-result";
import { ResultToolbar } from "./result-toolbar";

export function ResultView({
  note,
  url,
  time,
  purpose,
  speed,
  setTime,
  setPurpose,
  setSpeed,
  onReset,
}: {
  note: RouteNote;
  url: string;
  time: AvailableTime;
  purpose: Purpose;
  speed: Speed;
  setTime: (v: AvailableTime) => void;
  setPurpose: (v: Purpose) => void;
  setSpeed: (v: Speed) => void;
  onReset: () => void;
}) {
  // Mode-specific section ordering: the emphasized section follows the hero cards,
  // BEFORE the must-watch list, so it never gets buried.
  const ModeSection = () => {
    if (purpose === "work") return <TeamShareSummary note={note} emphasized />;
    if (purpose === "learning") return <LearningNotes note={note} emphasized />;
    return <QuickScanResult note={note} emphasized />;
  };

  return (
    <>
      <ResultToolbar
        url={url}
        time={time}
        purpose={purpose}
        speed={speed}
        setTime={setTime}
        setPurpose={setPurpose}
        setSpeed={setSpeed}
        onReset={onReset}
      />

      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="mx-auto w-full max-w-2xl space-y-4 px-5 pb-24 pt-4 sm:px-8 sm:space-y-5"
      >
        <SummaryDashboard note={note} speed={speed} purpose={purpose} />
        <QuickRouteHero note={note} speed={speed} youtubeUrl={url} />
        <RouteMap note={note} />
        <ModeSection />
        <MustWatchList note={note} speed={speed} />
        <SkipList note={note} />
        <SaveInsights note={note} />

        {/* Secondary mode-specific blocks - keep the alternates available but de-emphasized */}
        {purpose !== "work" && <TeamShareSummary note={note} />}
        {purpose !== "learning" && <LearningNotes note={note} />}

        {/* Footer */}
        <div className="pt-6 text-center font-mono text-[10px] tracking-[0.22em] text-white/25">
          PLOTTED AT {speed.toUpperCase()} · ROUTE NOTE v0.1
        </div>
      </motion.main>
    </>
  );
}
