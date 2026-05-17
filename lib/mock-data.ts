import type { RouteNote } from "./types";

export const baseMock: RouteNote = {
  videoTitle: "왜 AI 도구는 '기능'이 아니라 '워크플로우'로 평가해야 하는가",
  channelName: "Founders & Frameworks",

  originalLength: "28m 40s",
  originalSeconds: 28 * 60 + 40, // 1720

  verdict: "core-only",
  verdictHeadline: "핵심 루트만 보면 됩니다",
  oneLine:
    "AI 도구의 가치는 기능 자체가 아니라, 기존 워크플로우의 어느 지점에 자연스럽게 끼워지는가에서 결정됩니다.",

  recommendedRoute: "8m 20s",
  recommendedSeconds: 8 * 60 + 20, // 500

  bestMode: "work",

  threeMinHero: {
    start: "12:40",
    end: "15:20",
    label: "핵심 판단 체크리스트",
    why: "AI 결과물을 신뢰하고 재사용할지 결정하는 4단계 프레임워크. 이 한 구간이 영상 전체의 결론을 압축합니다.",
    seconds: 160, // 2m 40s
  },

  stops: [
    {
      id: "stop-1",
      label: "Intro Skip",
      korean: "도입부",
      start: "00:00",
      end: "02:10",
      reason: "채널 인사, 후원 멘트, 예고. 본론 진입 전 구간.",
      kind: "skip",
    },
    {
      id: "stop-2",
      label: "Core Idea",
      korean: "핵심 개념",
      start: "04:10",
      end: "06:30",
      reason: "AI 도구 평가 기준이 '기능 비교'에서 '워크플로우 적합도'로 이동한 이유.",
      kind: "watch",
    },
    {
      id: "stop-3",
      label: "Example",
      korean: "구체 사례",
      start: "08:50",
      end: "11:40",
      reason: "Notion AI vs 자체 GPT 워크플로우를 두 팀이 비교한 실제 사례.",
      kind: "watch",
    },
    {
      id: "stop-4",
      label: "Actionable Insight",
      korean: "실행 가능한 인사이트",
      start: "12:40",
      end: "15:20",
      reason: "신뢰-재사용 4단계 체크리스트. 영상의 정수.",
      kind: "watch",
    },
    {
      id: "stop-5",
      label: "Save Point",
      korean: "저장 포인트",
      start: "25:00",
      end: "26:30",
      reason: "팀에 그대로 공유할 수 있는 3줄 결론.",
      kind: "save",
    },
  ],

  mustWatch: [
    {
      id: "mw-1",
      start: "04:10",
      end: "06:30",
      why: "AI 도구의 평가축이 왜 기능이 아니라 워크플로우로 이동했는지에 대한 핵심 논거.",
      rawSeconds: 140,
    },
    {
      id: "mw-2",
      start: "12:40",
      end: "15:20",
      why: "AI 결과물을 신뢰하고 재사용할지 결정하는 4단계 체크리스트. 이 영상의 정수.",
      rawSeconds: 160,
    },
    {
      id: "mw-3",
      start: "18:00",
      end: "21:30",
      why: "실제 팀이 도구 도입을 결정해 가는 6주 의사결정 흐름을 시간순으로 따라갑니다.",
      rawSeconds: 210,
    },
  ],

  skip: [
    {
      id: "sk-1",
      start: "00:00",
      end: "02:10",
      reason: "채널 인사 + 후원사 멘트. 본 주제와 무관.",
    },
    {
      id: "sk-2",
      start: "06:30",
      end: "08:50",
      reason: "지난 영상에서 받은 Q&A 사이드 토픽. 본 주제와 연결 약함.",
    },
    {
      id: "sk-3",
      start: "21:30",
      end: "25:00",
      reason: "동일 사례를 다른 각도에서 다시 설명. 한 번 들었다면 반복.",
    },
  ],

  saves: [
    "AI 도구는 단독 기능이 아니라, 기존 워크플로우의 가속기로 작동할 때 ROI가 가장 크다.",
    "도입 판단 기준은 '그대로 쓸 수 있는가'가 아니라 '신뢰하고 재사용할 수 있는가'다.",
    "기능 비교표 대신, 팀의 반복 업무 3가지를 먼저 정의하고 도구를 매칭하라.",
    "도입 저항의 본질은 정확도가 아니라 '검토 비용이 본업보다 크다'는 인식이다.",
    "도구 평가는 첫 2주가 아니라 6주차 기준으로 한다. 학습 곡선이 그 시점에 평탄해진다.",
  ],

  teamShare: `이 영상은 AI 생산성 도구를 '어떤 기능이 있는가'가 아니라 '내 워크플로우의 어느 지점에 끼워지는가'로 평가해야 한다는 관점을 제시합니다.

가장 유용한 구간은 두 곳입니다.
1) 12:40-15:20 — AI 결과물을 신뢰하고 재사용할지 결정하는 4단계 체크리스트.
2) 18:00-21:30 — 실제 팀이 도구 도입을 결정해 간 6주 의사결정 흐름.

팀 내 도구 도입 논의에 그대로 적용 가능한 프레임워크입니다.`,

  learning: {
    concepts: [
      {
        term: "Workflow Insertion",
        definition:
          "AI 도구를 단독 기능으로 보지 않고, 기존 업무 흐름의 어느 단계에 끼워지는지로 평가하는 관점.",
      },
      {
        term: "Trust–Reuse Loop",
        definition:
          "AI 결과물에 대한 검토 → 신뢰 형성 → 재사용으로 이어지는 의사결정 순환.",
      },
      {
        term: "6-Week Evaluation",
        definition:
          "단기 인상이 아닌, 학습 곡선이 평탄해지는 6주차를 기준으로 도구의 가치를 판단하는 평가 시점.",
      },
    ],
    relationship:
      "Workflow Insertion이 선택 기준을 만들고, Trust–Reuse Loop가 도입 후 정착을 결정하며, 6-Week Evaluation이 평가 시점을 정의합니다. 세 개념은 도구 도입의 '전 → 중 → 후'에 정확히 한 개씩 대응됩니다.",
    questions: [
      "내 팀의 반복 업무 3가지를 적었을 때, 각 단계에 AI가 끼워질 지점은 어디인가?",
      "최근 사용한 AI 결과물 중 '신뢰해서 재사용한 것'과 '검토 비용이 더 컸던 것'을 구분할 수 있는가?",
      "지금 평가 중인 도구가 6주차에도 동일하게 쓰일 거라고 확신할 수 있는가?",
    ],
  },

  quickScan: {
    shouldWatch:
      "AI 도구 도입을 검토 중이거나, 팀에 제안할 기준이 필요한 상황이라면 핵심 루트만 보세요.",
    canSkip:
      "기능 데모, 후원 멘트, 동일 사례의 반복 설명은 모두 생략 가능합니다.",
    bestThreeMin:
      "12:40–15:20 한 구간만으로 이 영상의 결론에 도달할 수 있습니다.",
    oneLineTakeaway: "AI 도구는 기능이 아니라 워크플로우의 한 단계로 평가하라.",
  },
};
