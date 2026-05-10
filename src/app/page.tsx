import Link from 'next/link';
import React from 'react';
import { Sparkles, Brain, Zap, Palette, CalendarDays, Share2, Star, ArrowRight, ChevronRight } from 'lucide-react';

/**
 * 메인 랜딩 페이지
 *
 * 구매 퍼널 설계:
 * Hero(FOMO + 호기심) → Feature Bento Grid(신뢰 + 속도 + 차별화 + 리텐션)
 * → 과거 풀이 예시(기대감) → CTA(행동)
 */
export default function HomePage() {
  return (
    <div className="flex flex-col w-full">
      {/* ──────────────────────────────────────────────
          1. Hero 섹션
          의도: FOMO 자극 + 심리학적 전제 + 행동 유도
      ────────────────────────────────────────────── */}
      <section className="relative w-full min-h-[92vh] flex flex-col items-center justify-center px-6 text-center overflow-hidden">
        {/* 몽환적 오로라 배경 */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-[10%] left-[15%] w-[40vw] h-[40vw] rounded-full bg-purple-200/50 blur-[100px] animate-pulse" style={{ animationDuration: '6s' }} />
          <div className="absolute top-[30%] right-[10%] w-[35vw] h-[35vw] rounded-full bg-blue-200/40 blur-[120px] animate-pulse" style={{ animationDuration: '8s' }} />
          <div className="absolute bottom-[5%] left-[30%] w-[30vw] h-[30vw] rounded-full bg-pink-200/30 blur-[100px] animate-pulse" style={{ animationDuration: '7s' }} />
        </div>

        <div className="relative z-10 flex flex-col items-center max-w-4xl mx-auto">
          {/* 상단 뱃지 — 신뢰감 키워드 */}
          <div className="flex items-center gap-2 text-xs md:text-sm tracking-widest uppercase text-slate-500 mb-8 font-medium">
            <Sparkles size={14} className="text-purple-500" />
            <span>AI 기반 심층 꿈 분석</span>
            <span className="text-slate-300">|</span>
            <span>심리학 4대 관점</span>
          </div>

          {/* 한 줄 문구 — FOMO 자극 */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 mb-6 leading-[1.1]">
            어젯밤 꿈,
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500">
              그냥 흘려보내지 마세요
            </span>
          </h1>

          {/* 상세 소개 — 심리학적 전제 + 전문성 + 호기심 */}
          <p className="text-base md:text-lg text-slate-600 mb-12 max-w-2xl leading-relaxed font-medium">
            꿈은 무의식이 보내는 신호입니다.
            <br className="hidden md:block" />
            프로이트, 칼 융, 신경과학, 게슈탈트 —
            <br className="hidden md:block" />
            <span className="text-slate-800 font-semibold">AI가 4가지 전문 관점</span>으로 당신의 꿈에 숨겨진 의미를 풀어드립니다.
          </p>

          {/* CTA 버튼 — 진입 장벽 최소화 */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <Link
              href="/dream-teller"
              className="group w-full sm:w-auto px-10 py-4 bg-slate-900 text-white font-semibold rounded-full hover:bg-slate-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
            >
              지금 꿈 풀어보기
              <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              href="/feeds"
              className="w-full sm:w-auto px-10 py-4 bg-white/60 border border-slate-200 text-slate-700 font-semibold rounded-full hover:bg-white hover:border-slate-300 transition-all duration-300 shadow-sm backdrop-blur-sm"
            >
              다른 사람의 꿈 구경하기
            </Link>
          </div>

          {/* 소셜 프루프 — 신뢰감 + 실사용 후기 */}
          <div className="mt-20 flex flex-col items-center gap-3">
            <div className="flex gap-1 text-amber-400">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} size={16} fill="currentColor" />
              ))}
            </div>
            <p className="text-sm text-slate-600 italic font-medium">
              &quot;프로이트 관점으로 분석받았는데, 제 상황이랑 너무 잘 맞아서 소름 돋았어요&quot;
            </p>
            <p className="text-xs text-slate-400">이** – 2026.05 사용자</p>
          </div>
        </div>

        {/* 하단 스크롤 유도 */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 text-slate-400 animate-bounce" style={{ animationDuration: '2s' }}>
          <span className="text-xs font-medium tracking-widest">SCROLL</span>
          <ChevronRight size={16} className="rotate-90" />
        </div>
      </section>

      {/* ──────────────────────────────────────────────
          2. Feature 소개 (Bento Grid, 4개 카드)
          구매 심리 순서: 전문성 → 속도 → 차별화(업셀링) → 리텐션
      ────────────────────────────────────────────── */}
      <section className="relative w-full max-w-7xl mx-auto px-6 py-28 z-10">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-5 text-slate-900">
            왜 Dream Teller일까요?
          </h2>
          <p className="text-slate-500 font-medium text-base md:text-lg max-w-xl mx-auto">
            단순한 꿈 풀이가 아닌, 심리학 기반의 깊이 있는 분석을 경험하세요.
          </p>
        </div>

        {/* Bento Grid 레이아웃 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 auto-rows-[260px]">

          {/* Feature 1: 하나의 꿈, 네 가지 시선 (대형 카드) */}
          <div className="md:col-span-2 md:row-span-2 relative overflow-hidden rounded-3xl bg-white/60 border border-slate-200/60 shadow-sm backdrop-blur-md p-8 md:p-10 group hover:border-purple-300/80 transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-100/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10 flex flex-col h-full">
              <Brain className="text-purple-500 mb-5" size={40} />
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                하나의 꿈, 네 가지 시선
              </h3>
              <p className="text-slate-600 leading-relaxed text-base md:text-lg flex-1">
                프로이트의 정신분석, 칼 융의 원형 이론, 신경과학적 접근, 게슈탈트 심리학.
                <br className="hidden lg:block" />
                같은 꿈도 관점에 따라 전혀 다른 이야기가 펼쳐집니다.
              </p>
              {/* 4가지 관점 태그 */}
              <div className="flex flex-wrap gap-2 mt-6">
                {['프로이트', '칼 융', '신경과학', '게슈탈트'].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 bg-purple-50 text-purple-700 text-xs font-semibold rounded-full border border-purple-100"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            {/* 데코 블러 */}
            <div className="absolute -bottom-12 -right-12 w-72 h-72 bg-purple-300/30 blur-[90px] rounded-full pointer-events-none" />
          </div>

          {/* Feature 2: 3분 안에 완성되는 해석 */}
          <div className="md:col-span-1 md:row-span-1 relative overflow-hidden rounded-3xl bg-white/60 border border-slate-200/60 shadow-sm backdrop-blur-md p-8 group hover:border-amber-300/80 transition-all duration-500 flex flex-col justify-between">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-50/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <Zap className="text-amber-500 relative z-10" size={32} />
            <div className="relative z-10">
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                3분 안에 완성되는 해석
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                복잡한 예약이나 대기 없이, 꿈을 입력하는 순간 AI가 즉시 분석을 시작합니다.
                커피 한 잔 사이에 결과를 받아보세요.
              </p>
            </div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-amber-200/30 blur-[50px] rounded-full pointer-events-none" />
          </div>

          {/* Feature 3: 당신의 꿈을 이미지로 */}
          <div className="md:col-span-1 md:row-span-1 relative overflow-hidden rounded-3xl bg-white/60 border border-slate-200/60 shadow-sm backdrop-blur-md p-8 group hover:border-pink-300/80 transition-all duration-500 flex flex-col justify-between">
            <div className="absolute inset-0 bg-gradient-to-br from-pink-50/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <Palette className="text-pink-500 relative z-10" size={32} />
            <div className="relative z-10">
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                당신의 꿈을 이미지로
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                AI가 꿈의 핵심 장면을 한 장의 이미지로 시각화합니다.
                기억 속 흐릿한 장면이 선명하게 되살아납니다.
              </p>
            </div>
            {/* 업셀링 뱃지 */}
            <span className="relative z-10 mt-3 self-start px-3 py-1 bg-pink-100 text-pink-600 text-[11px] font-bold rounded-full">
              +500원 옵션
            </span>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-pink-200/30 blur-[50px] rounded-full pointer-events-none" />
          </div>
        </div>

        {/* Feature 4: 꿈 기록이 쌓이는 캘린더 (전체 너비 배너) */}
        <div className="mt-5 relative overflow-hidden rounded-3xl bg-white/60 border border-slate-200/60 shadow-sm backdrop-blur-md p-8 md:p-10 group hover:border-blue-300/80 transition-all duration-500">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-50/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-6">
            <CalendarDays className="text-blue-500 shrink-0" size={40} />
            <div className="flex-1">
              <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-2">
                꿈 기록이 쌓이는 캘린더
              </h3>
              <p className="text-slate-600 leading-relaxed">
                회원이라면 해석받은 꿈이 캘린더에 자동으로 기록됩니다.
                시간이 지나도 다시 꺼내볼 수 있는 나만의 꿈 아카이브를 만들어보세요.
              </p>
            </div>
            <Link
              href="/auth"
              className="shrink-0 px-6 py-3 bg-blue-50 text-blue-600 font-semibold rounded-full text-sm hover:bg-blue-100 transition-colors border border-blue-100"
            >
              회원가입하고 시작하기
            </Link>
          </div>
          <div className="absolute -bottom-12 -right-12 w-60 h-60 bg-blue-200/20 blur-[80px] rounded-full pointer-events-none" />
        </div>
      </section>

      {/* ──────────────────────────────────────────────
          3. 과거 풀이 예시 섹션
          의도: 실제 결과물을 미리 보여줌 → "나도 이런 결과를 받고 싶다"
      ────────────────────────────────────────────── */}
      <section className="relative w-full bg-white/40 py-28 border-t border-slate-200/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-14">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
                다른 사람들은
                <br />
                어떤 꿈을 꿀까요?
              </h2>
              <p className="text-slate-500 font-medium">
                실제 사용자들의 꿈 해석 결과를 미리 만나보세요
              </p>
            </div>
            <Link
              href="/feeds"
              className="mt-6 md:mt-0 flex items-center gap-2 text-purple-600 hover:text-purple-700 font-semibold transition-colors group"
            >
              전체 피드 보기
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* 예시 카드 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                id: 'whale',
                title: '하늘을 나는 고래',
                tag: '칼 융',
                tagColor: 'bg-indigo-50 text-indigo-700 border-indigo-100',
                desc: '거대한 고래가 도시 위를 유유히 날아가는 꿈을 꿨어요. 고래는 제 눈앞을 스쳐 지나갔는데...',
                gradient: 'from-indigo-100 to-purple-100',
              },
              {
                id: 'key',
                title: '잃어버린 열쇠',
                tag: '프로이트',
                tagColor: 'bg-rose-50 text-rose-700 border-rose-100',
                desc: '오래된 저택에서 계속해서 열쇠를 찾으러 다니는 꿈이었습니다. 문을 열어야 하는데...',
                gradient: 'from-rose-100 to-pink-100',
              },
              {
                id: 'stairs',
                title: '끝없이 이어지는 계단',
                tag: '신경과학',
                tagColor: 'bg-emerald-50 text-emerald-700 border-emerald-100',
                desc: '올라가도 올라가도 끝이 없는 계단을 헉헉거리며 오르는 꿈을 꿨습니다...',
                gradient: 'from-emerald-100 to-teal-100',
              },
            ].map((item) => (
              <Link
                key={item.id}
                href={`/feeds/${item.id}`}
                className="bg-white/80 border border-slate-200/60 shadow-sm rounded-2xl p-6 hover:-translate-y-2 hover:shadow-lg transition-all duration-300 cursor-pointer group block backdrop-blur-sm"
              >
                {/* 이미지 영역 */}
                <div className={`w-full h-48 bg-gradient-to-br ${item.gradient} rounded-xl mb-5 flex items-center justify-center border border-slate-100 relative overflow-hidden`}>
                  <div className="text-center">
                    <span className="text-4xl mb-2 block">
                      {item.id === 'whale' ? '🐋' : item.id === 'key' ? '🔑' : '🪜'}
                    </span>
                    <span className="text-slate-400 text-xs font-medium">AI 생성 이미지</span>
                  </div>
                  <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                {/* 태그 */}
                <div className="flex items-center gap-2 mb-3">
                  <span className={`px-2.5 py-1 ${item.tagColor} text-xs font-semibold rounded-full border`}>
                    {item.tag}
                  </span>
                </div>
                {/* 텍스트 */}
                <h4 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-purple-700 transition-colors">
                  {item.title}
                </h4>
                <p className="text-slate-500 text-sm line-clamp-2 leading-relaxed">
                  {item.desc}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────
          4. 하단 CTA 섹션
          의도: 페이지 끝까지 스크롤한 고관여 유저 → 최종 행동 유도
      ────────────────────────────────────────────── */}
      <section className="relative w-full py-28 px-6 text-center overflow-hidden">
        {/* 배경 블러 */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50vw] h-[50vw] rounded-full bg-purple-200/40 blur-[120px]" />
        </div>

        <div className="relative z-10 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
            오늘 아침의 꿈,
            <br />
            지금 풀어보세요
          </h2>
          <p className="text-slate-500 font-medium mb-10 text-base md:text-lg">
            커피 한 잔 값으로 시작하는 AI 꿈 해석.
            <br />
            잊혀지기 전에, 지금 바로.
          </p>
          <Link
            href="/dream-teller"
            className="group inline-flex items-center gap-2 px-12 py-5 bg-slate-900 text-white font-semibold rounded-full hover:bg-slate-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-lg"
          >
            지금 꿈 풀어보기
            <ArrowRight size={20} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
          <p className="mt-6 text-xs text-slate-400">
            텍스트 해석 1,500원 · AI 이미지 추가 +500원
          </p>
        </div>
      </section>
    </div>
  );
}
