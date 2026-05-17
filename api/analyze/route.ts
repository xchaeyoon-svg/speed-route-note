import { NextResponse } from "next/server";
import { baseMock } from "@/lib/mock-data";
import type { AnalyzeRequest, RouteNote, Purpose } from "@/lib/types";

export const runtime = "edge";

function adaptBestMode(purpose: Purpose, base: RouteNote): RouteNote {
  return { ...base, bestMode: purpose };
}

export async function POST(req: Request) {
  let body: AnalyzeRequest;
  try {
    body = (await req.json()) as AnalyzeRequest;
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  if (!body?.url || !/youtu\.?be/.test(body.url)) {
    return NextResponse.json(
      { error: "유효한 YouTube 링크를 입력해주세요." },
      { status: 400 },
    );
  }

  // Simulated analysis delay (1.4s) so the loading state is felt.
  await new Promise((r) => setTimeout(r, 1400));

  const note = adaptBestMode(body.purpose ?? "work", baseMock);
  return NextResponse.json({ note });
}
