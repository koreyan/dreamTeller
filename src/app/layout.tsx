import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AI DREAM TELLER | 당신의 꿈을 해석해 드립니다",
  description: "프로이트, 칼 융, 신경과학 기반의 AI 꿈 해몽 서비스",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-slate-950 text-white relative selection:bg-pink-500/30">
        {/* Mystical Aurora Background Elements */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
          <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-purple-900/20 blur-[120px]" />
          <div className="absolute top-[30%] -right-[20%] w-[60%] h-[60%] rounded-full bg-blue-900/10 blur-[150px]" />
          <div className="absolute -bottom-[20%] left-[20%] w-[50%] h-[50%] rounded-full bg-pink-900/10 blur-[120px]" />
        </div>

        <Header />
        
        {/* pt-16 is to offset the fixed header */}
        <main className="flex-1 flex flex-col pt-16">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
