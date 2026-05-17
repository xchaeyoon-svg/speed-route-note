import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Speed Route Note · 2x 시청자를 위한 영상 루트",
  description:
    "유튜브 링크를 붙여넣으면 2배속 기준으로 꼭 볼 구간, 건너뛸 구간, 저장할 인사이트를 정리해드립니다.",
  openGraph: {
    title: "Speed Route Note",
    description: "Watch less. Get the route.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#06070D",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className="relative min-h-screen antialiased">
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
