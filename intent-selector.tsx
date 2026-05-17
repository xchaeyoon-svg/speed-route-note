"use client";

import { Clock, Compass, Zap } from "lucide-react";
import type { AvailableTime, Purpose, Speed } from "@/lib/types";
import { Segmented } from "./segmented";

const TIME_OPTS: { value: AvailableTime; label: string; sub: string }[] = [
  { value: "3min", label: "3분", sub: "QUICK" },
  { value: "5min", label: "5분", sub: "SCAN" },
  { value: "10min", label: "10분", sub: "FOCUS" },
  { value: "full", label: "전체", sub: "FULL" },
];

const PURPOSE_OPTS: { value: Purpose; label: string; sub: string }[] = [
  { value: "quick", label: "빠른 판단", sub: "DECIDE" },
  { value: "learning", label: "학습 정리", sub: "LEARN" },
  { value: "work", label: "업무 공유", sub: "SHARE" },
];

const SPEED_OPTS: { value: Speed; label: string; sub: string }[] = [
  { value: "1.5x", label: "1.5×", sub: "EASY" },
  { value: "2x", label: "2×", sub: "DEFAULT" },
  { value: "3x", label: "3×", sub: "TURBO" },
];

function FieldLabel({
  icon,
  ko,
  en,
}: {
  icon: React.ReactNode;
  ko: string;
  en: string;
}) {
  return (
    <div className="mb-2 flex items-center gap-2 px-1">
      <span className="text-white/40">{icon}</span>
      <span className="text-[13px] font-medium text-white/85">{ko}</span>
      <span className="font-mono text-[10px] tracking-[0.22em] text-white/30">
        {en}
      </span>
    </div>
  );
}

export function IntentSelector({
  time,
  purpose,
  speed,
  onTime,
  onPurpose,
  onSpeed,
}: {
  time: AvailableTime;
  purpose: Purpose;
  speed: Speed;
  onTime: (v: AvailableTime) => void;
  onPurpose: (v: Purpose) => void;
  onSpeed: (v: Speed) => void;
}) {
  return (
    <div className="grid gap-5">
      <div>
        <FieldLabel
          icon={<Clock className="h-3.5 w-3.5" />}
          ko="가용 시간"
          en="AVAILABLE TIME"
        />
        <Segmented
          options={TIME_OPTS}
          value={time}
          onChange={onTime}
          ariaLabel="available-time"
        />
      </div>
      <div>
        <FieldLabel
          icon={<Compass className="h-3.5 w-3.5" />}
          ko="목적"
          en="PURPOSE"
        />
        <Segmented
          options={PURPOSE_OPTS}
          value={purpose}
          onChange={onPurpose}
          ariaLabel="purpose"
        />
      </div>
      <div>
        <FieldLabel
          icon={<Zap className="h-3.5 w-3.5" />}
          ko="배속"
          en="PLAYBACK SPEED"
        />
        <Segmented
          options={SPEED_OPTS}
          value={speed}
          onChange={onSpeed}
          ariaLabel="speed"
        />
      </div>
    </div>
  );
}
