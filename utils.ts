import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import type { Speed } from "./types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function speedDivisor(speed: Speed): number {
  if (speed === "1.5x") return 1.5;
  if (speed === "3x") return 3;
  return 2;
}

/** Format seconds like "4m 10s" or "28m 40s". Drops hours into minutes for compactness. */
export function formatDuration(totalSeconds: number): string {
  const s = Math.max(0, Math.round(totalSeconds));
  const m = Math.floor(s / 60);
  const sec = s % 60;
  if (m === 0) return `${sec}s`;
  return `${m}m ${sec.toString().padStart(2, "0")}s`;
}

/** Compact "M:SS" for timestamps */
export function compactStamp(mmss: string): string {
  return mmss.replace(/^0/, "");
}

export function applySpeed(seconds: number, speed: Speed): number {
  return seconds / speedDivisor(speed);
}
