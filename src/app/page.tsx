import Link from 'next/link';
import React from 'react';
import { Sparkles, Moon, Image as ImageIcon, Calendar, Share2, Star } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="flex flex-col w-full">
      {/* 1. Hero Section (Reference Image Style) */}
      <section className="relative w-full min-h-[90vh] flex flex-col items-center justify-center px-6 text-center">
        {/* Background Overlay for depth */}
        <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-100/40 via-[#faf9f6]/50 to-[#faf9f6] pointer-events-none"></div>
        
        <div className="relative z-10 flex flex-col items-center max-w-4xl mx-auto mt-[-10vh]">
          {/* Top Tag */}
          <div className="flex items-center gap-2 text-xs md:text-sm tracking-widest uppercase text-slate-500 mb-6 font-medium">
            <Sparkles size={14} className="text-pink-500" />
            <span>AI 기반 심층 무의식 분석</span>
            <span className="text-slate-400">&rarr;</span>
            <span>프로이트 & 칼 융</span>
          </div>

          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-slate-900 to-slate-500 mb-6 drop-shadow-sm">
            UNLOCK YOUR<br />DREAMS
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl leading-relaxed font-medium">
            당신의 무의식이 보내는 메시지를 해독하세요.<br className="hidden md:block" /> 
            첨단 AI가 심리학적 관점으로 꿈의 의미를 분석하고 몽환적인 이미지로 재현합니다.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <Link 
              href="/dream-teller" 
              className="w-full sm:w-auto px-8 py-4 bg-slate-900 text-white font-semibold rounded-full hover:bg-slate-800 transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(0,0,0,0.1)]"
            >
              무료 해몽 시작하기
            </Link>
            <Link 
              href="/feeds" 
              className="w-full sm:w-auto px-8 py-4 bg-white/50 border border-slate-300 text-slate-700 font-semibold rounded-full hover:bg-white hover:border-slate-400 transition-all shadow-sm"
            >
              다른 사람의 꿈 구경하기
            </Link>
          </div>

          {/* Social Proof / Ratings */}
          <div className="mt-16 flex flex-col items-center gap-2">
            <div className="flex gap-1 text-indigo-500">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} size={16} fill="currentColor" />
              ))}
            </div>
            <p className="text-sm text-slate-600 italic font-medium">
              "태몽을 너무 정확하게 풀이해줘서 소름 돋았어요!"
            </p>
            <p className="text-xs text-slate-500">김** – 2026.05.10 사용자</p>
          </div>
        </div>
      </section>

      {/* 2. Features (Bento Grid Style) */}
      <section className="relative w-full max-w-7xl mx-auto px-6 py-24 z-10">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-slate-900">압도적인 해몽 경험</h2>
          <p className="text-slate-600 font-medium">단순한 미신이 아닌 심리학적 통찰을 제공합니다.</p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px]">
          
          {/* Bento Item 1: Large Span */}
          <div className="md:col-span-2 md:row-span-2 relative overflow-hidden rounded-3xl bg-white/60 border border-slate-200/60 shadow-sm backdrop-blur-md p-8 group hover:border-purple-300/80 transition-colors">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-100/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <Moon className="text-purple-500 mb-6" size={40} />
            <h3 className="text-2xl font-bold text-slate-900 mb-4">4가지 심리학적 관점 지원</h3>
            <p className="text-slate-600 leading-relaxed text-lg">
              프로이트의 정신분석학, 칼 융의 분석심리학, 현대 신경과학, 그리고 게슈탈트 심리학까지. 
              당신이 원하는 관점을 선택하면, 전문적인 지식을 학습한 AI가 다각도로 꿈의 의미를 해석해 드립니다.
            </p>
            {/* 몽환적 데코레이션 */}
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-purple-300/40 blur-[80px] rounded-full pointer-events-none"></div>
          </div>

          {/* Bento Item 2 */}
          <div className="md:col-span-1 md:row-span-1 relative overflow-hidden rounded-3xl bg-white/60 border border-slate-200/60 shadow-sm backdrop-blur-md p-8 group hover:border-pink-300/80 transition-colors flex flex-col justify-end">
            <ImageIcon className="text-pink-500 absolute top-8 left-8" size={32} />
            <h3 className="text-xl font-bold text-slate-900 mb-2 z-10">AI 이미지 생성</h3>
            <p className="text-sm text-slate-600 z-10">
              글로만 보던 해몽은 그만. 꿈 속 장면을 생생한 이미지로 구현합니다.
            </p>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-pink-300/30 blur-[50px] rounded-full pointer-events-none"></div>
          </div>

          {/* Bento Item 3 */}
          <div className="md:col-span-1 md:row-span-1 relative overflow-hidden rounded-3xl bg-white/60 border border-slate-200/60 shadow-sm backdrop-blur-md p-8 group hover:border-blue-300/80 transition-colors flex flex-col justify-end">
            <Calendar className="text-blue-500 absolute top-8 left-8" size={32} />
            <h3 className="text-xl font-bold text-slate-900 mb-2 z-10">개인화된 꿈 달력</h3>
            <p className="text-sm text-slate-600 z-10">
              마이페이지에서 나의 꿈 기록을 캘린더 형태로 한눈에 모아보세요.
            </p>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-300/30 blur-[50px] rounded-full pointer-events-none"></div>
          </div>

        </div>
      </section>

      {/* 3. Examples Section (Feed Preview) */}
      <section className="relative w-full bg-white/40 py-24 border-t border-slate-200/50 mt-12 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">다른 사람들은<br/>어떤 꿈을 꿀까요?</h2>
              <p className="text-slate-600 font-medium">익명으로 공유된 생생한 꿈 이야기들</p>
            </div>
            <Link href="/feeds" className="mt-6 md:mt-0 flex items-center gap-2 text-pink-500 hover:text-pink-600 font-semibold transition-colors">
              전체 피드 보기 <Share2 size={16} />
            </Link>
          </div>

          {/* Dummy Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { id: "whale", title: "하늘을 나는 고래", tag: "칼 융", desc: "거대한 고래가 도시 위를 유유히 날아가는 꿈을 꿨어요..." },
              { id: "key", title: "잃어버린 열쇠", tag: "프로이트", desc: "오래된 저택에서 계속해서 열쇠를 찾으러 다니는 꿈이었습니다..." },
              { id: "stairs", title: "끝없이 이어지는 계단", tag: "신경과학", desc: "올라가도 올라가도 끝이 없는 계단을 헉헉거리며 오르는 꿈..." },
            ].map((item) => (
              <Link 
                key={item.id} 
                href={`/feeds/${item.id}`}
                className="bg-white border border-slate-200/60 shadow-sm rounded-2xl p-6 hover:-translate-y-2 hover:shadow-md transition-all duration-300 cursor-pointer group block"
              >
                <div className="w-full h-48 bg-gradient-to-br from-slate-100 to-slate-200 rounded-xl mb-4 flex items-center justify-center border border-slate-200/50 relative overflow-hidden">
                  <span className="text-slate-400 text-sm font-medium">Image Placeholder</span>
                  <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-2 py-1 bg-purple-100 text-purple-700 text-xs font-semibold rounded-md">{item.tag}</span>
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h4>
                <p className="text-slate-600 text-sm line-clamp-2 leading-relaxed">{item.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
