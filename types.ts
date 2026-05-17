export type AvailableTime = "3min" | "5min" | "10min" | "full";
export type Purpose = "quick" | "learning" | "work";
export type Speed = "1.5x" | "2x" | "3x";
export type StopKind = "skip" | "watch" | "save";

export interface RouteStop {
  id: string;
  label: string;
  korean: string;
  start: string; // mm:ss
  end: string;
  reason: string;
  kind: StopKind;
}

export interface MustWatch {
  id: string;
  start: string;
  end: string;
  why: string;
  rawSeconds: number; // duration in seconds, for 2x calc
}

export interface SkipItem {
  id: string;
  start: string;
  end: string;
  reason: string;
}

export interface RouteNote {
  videoTitle: string;
  channelName: string;
  originalLength: string; // 28m 40s
  originalSeconds: number;

  verdict: "core-only" | "worth-full" | "skip";
  verdictHeadline: string;
  oneLine: string;

  recommendedRoute: string; // 8m 20s
  recommendedSeconds: number;

  bestMode: Purpose;

  threeMinHero: {
    start: string;
    end: string;
    label: string;
    why: string;
    seconds: number;
  };

  stops: RouteStop[];
  mustWatch: MustWatch[];
  skip: SkipItem[];
  saves: string[];
  teamShare: string;

  learning: {
    concepts: { term: string; definition: string }[];
    relationship: string;
    questions: string[];
  };

  quickScan: {
    shouldWatch: string;
    canSkip: string;
    bestThreeMin: string;
    oneLineTakeaway: string;
  };
}

export interface AnalyzeRequest {
  url: string;
  availableTime: AvailableTime;
  purpose: Purpose;
  speed: Speed;
}
