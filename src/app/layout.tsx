import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "yukyan | Webアプリケーションエンジニア",
  description:
    "yukyanのポートフォリオサイト。Webアプリケーション開発に特化したエンジニアとして活動しています。",
  keywords: ["Web開発", "フロントエンド", "React", "Next.js", "TypeScript"],
  authors: [{ name: "yukyan", url: "https://twitter.com/yukyan_p" }],
  creator: "yukyan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
