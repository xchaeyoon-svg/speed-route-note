# Speed Route Note

**Watch less. Get the route.**

2배속 시청자를 위한 YouTube 영상 시청 루트 플래너. 영상을 끝까지 보지 않아도, 지금 내 시간(3분 / 5분 / 10분)에 맞춰 꼭 볼 구간 · 건너뛸 구간 · 저장할 인사이트를 한 화면에서 보여줍니다.

> 일반 AI 요약 서비스가 아닙니다. **시청 루트 플래너**입니다.

---

## ✦ 무엇을 만들었나

- **상단 Verdict Dashboard** — 시간 통계(원본 / 추천 루트 / 2× 실제 시간 / 추천 모드)와 한 줄 결론
- **3-Minute Hero Card** — "3분만 있다면 이 구간만 보세요" 를 시각적으로 가장 강조한 카드. YouTube의 해당 시간으로 직접 점프
- **Watch Route (지하철 노선식 루트맵)** — Intro Skip → Core Idea → Example → Actionable Insight → Save Point. 라임/회색/앰버 노드로 Watch/Skip/Save를 한눈에 구분
- **Must-Watch / Skip Zone / Save Points** — 배속 기준 실제 소요 시간이 자동 계산되어 표시
- **모드별 결과 차별화**
  - `업무 공유` → Team Share 요약 강조 + 클립보드 복사
  - `학습 정리` → 핵심 개념 · 개념 관계 · 복습 질문 3개
  - `빠른 판단` → 볼 가치 · 건너뛸 부분 · 3분 루트 · 한 줄 결론
- **결과 화면에서 설정 즉시 변경** — 상단 sticky 툴바에서 시간 · 목적 · 배속을 바꾸면 2× 계산이 즉시 갱신
- **모바일 우선 디자인** — 한 손으로 출근길에 읽기 좋게 설계

## ✦ 기술 스택

- Next.js 14 App Router · TypeScript
- Tailwind CSS (커스텀 디자인 토큰 포함)
- framer-motion (서브틀한 모션)
- lucide-react (아이콘)
- 외부 transcript API 불필요 — `/app/api/analyze/route.ts` 가 mock 데이터를 반환

## ✦ 로컬 실행

```bash
npm install
npm run dev
```

[http://localhost:3000](http://localhost:3000) 에서 확인하세요. 환경 변수는 필요 없습니다.

## ✦ Vercel 배포

1. 이 디렉터리를 GitHub 리포지토리로 푸시
   ```bash
   git init
   git add .
   git commit -m "Speed Route Note v0.1"
   git branch -M main
   git remote add origin <YOUR_REPO_URL>
   git push -u origin main
   ```
2. [vercel.com/new](https://vercel.com/new) 에서 해당 리포지토리 임포트
3. 프레임워크 자동 감지 (Next.js) → **Deploy** 클릭
4. 배포 완료 후 도메인 연결 (선택)

환경 변수 설정은 없습니다. 빌드 명령 / 출력 디렉터리도 모두 기본값입니다.

또는 CLI로:
```bash
npm i -g vercel
vercel
```

## ✦ 실제 YouTube API 연결 시

`/app/api/analyze/route.ts` 의 mock 응답 부분을 실제 transcript 분석 결과로 교체하세요. 요청 body 스키마는 `lib/types.ts` 의 `AnalyzeRequest`, 응답 스키마는 `RouteNote` 입니다. 프론트엔드는 어떤 변경도 필요 없습니다.

## ✦ 디자인 노트

- 컬러: deep ink navy(#06070D → #0A0C16) 베이스 + electric lime(#C7F23E) 액센트 + warm amber(#F5C249) Save 포인트
- 보라색 AI 그라데이션은 의도적으로 피했습니다.
- 타이포: Bricolage Grotesque (display), JetBrains Mono (타임스탬프), Pretendard (한글)
- 모션은 페이지 진입 · 단계 전환 · 컨트롤 상태 변경에만 사용. 과도한 트랜지션 없음

## ✦ 디렉터리

```
app/
  api/analyze/route.ts   # mock 분석 API
  layout.tsx
  page.tsx               # 상태 holder
  globals.css
components/              # 모든 UI 컴포넌트
lib/
  mock-data.ts           # 현실감 있는 분석 결과 mock
  types.ts
  utils.ts
```
