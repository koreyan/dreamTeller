"use client";

import React from 'react';
import { useParams } from 'next/navigation';
import { Sparkles, Moon, Brain, Search, Info, Share2, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

const FeedDetailPage = () => {
  const params = useParams();
  const id = params?.id;

  // 더미 데이터 (실제로는 id에 따라 API에서 불러와야 함)
  const dreamData = {
    title: "하늘을 나는 고래",
    date: "2026.05.10",
    author: "익명의 탐험가",
    dreamContent: "거대한 혹등고래가 삭막한 도시의 빌딩 숲 사이를 유유히 헤엄치고 있었습니다. 고래의 울음소리가 온 도시에 울려 퍼졌고, 사람들은 두려움보다는 경이로움에 차서 그 광경을 지켜보고 있었죠. 저는 그 고래의 등에 올라타 시원한 바람을 맞으며 도시를 내려다보았습니다.",
    interpretations: [
      {
        type: "프로이트",
        icon: <Brain className="text-red-400" size={20} />,
        content: "거대한 고래는 억눌린 무의식적 욕망이나 거대한 모성적 상징일 수 있습니다. 도시라는 질서 정연한 공간에 나타난 고래는 일상의 제약에서 벗어나 자유를 갈망하는 본능적 에너지를 의미합니다."
      },
      {
        type: "칼 융",
        icon: <Moon className="text-purple-400" size={20} />,
        content: "고래는 집단 무의식에서의 '거대한 어머니' 혹은 '심연의 지혜'를 상징합니다. 하늘을 나는 고래는 영적 고양과 자아 실현의 과정을 나타내며, 고래 등에 올라탄 행위는 자신의 무의식적 힘과 통합되고 있음을 암시합니다."
      },
      {
        type: "신경과학",
        icon: <Sparkles className="text-blue-400" size={20} />,
        content: "렘(REM) 수면 단계에서 뇌의 감정 조절 센터인 편도체가 활성화되면서 평소 경험한 도시의 이미지와 압도적인 자연의 이미지가 결합된 형태입니다. 비행 감각은 전정기관의 무작위 신호를 뇌가 해석하는 과정에서 발생합니다."
      },
      {
        type: "게슈탈트",
        icon: <Search className="text-green-400" size={20} />,
        content: "지금 당신은 삶의 압박(도시) 속에서 자신만의 거대한 가능성(고래)을 발견하고 그 흐름에 몸을 맡기고 싶어 합니다. 고래의 울음소리는 당신이 세상에 전하고 싶은 내면의 목소리일지 모릅니다."
      }
    ]
  };

  return (
    <div className="flex flex-col w-full max-w-4xl mx-auto px-6 py-12">
      {/* Back Button */}
      <Link href="/" className="flex items-center gap-2 text-slate-500 hover:text-slate-900 transition-colors mb-8 group w-fit">
        <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
        <span className="font-medium">돌아가기</span>
      </Link>

      {/* Header Section */}
      <div className="mb-12">
        <div className="flex items-center gap-2 mb-4">
          <span className="px-3 py-1 bg-purple-100 text-purple-700 text-xs font-bold rounded-full uppercase tracking-wider">Shared Dream</span>
          <span className="text-slate-400 text-sm">{dreamData.date}</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">{dreamData.title}</h1>
        <p className="text-slate-500 font-medium">분석가: {dreamData.author}</p>
      </div>

      {/* Main Image Placeholder */}
      <div className="w-full aspect-video bg-gradient-to-br from-slate-100 to-slate-200 rounded-3xl mb-12 flex items-center justify-center border border-slate-200 shadow-inner relative overflow-hidden">
        <div className="flex flex-col items-center gap-4 z-10">
          <Sparkles className="text-slate-300" size={48} />
          <span className="text-slate-400 font-medium italic">AI Generated Scene for "{dreamData.title}"</span>
        </div>
        {/* Decorative elements */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-purple-300/20 blur-3xl rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-blue-300/20 blur-3xl rounded-full"></div>
      </div>

      {/* Dream Content Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
          <Info className="text-slate-400" /> 기록된 꿈 내용
        </h2>
        <div className="bg-white/60 border border-slate-200 p-8 rounded-3xl shadow-sm backdrop-blur-sm leading-relaxed text-slate-700 text-lg italic">
          "{dreamData.dreamContent}"
        </div>
      </section>

      {/* Interpretation Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-2">
          <Sparkles className="text-purple-500" /> AI 심층 해몽 분석
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {dreamData.interpretations.map((item, idx) => (
            <div key={idx} className="bg-white/60 border border-slate-200 p-6 rounded-3xl shadow-sm hover:border-purple-300 transition-colors group">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-slate-50 rounded-xl group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="font-bold text-slate-900">{item.type}의 관점</h3>
              </div>
              <p className="text-slate-600 leading-relaxed text-sm">
                {item.content}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Social Share Section */}
      <section className="flex flex-col items-center py-12 border-t border-slate-200">
        <p className="text-slate-500 mb-6 font-medium">이 꿈 해몽 결과가 마음에 드셨나요?</p>
        <button className="flex items-center gap-2 px-8 py-4 bg-slate-900 text-white font-bold rounded-full hover:bg-slate-800 transition-all shadow-lg hover:scale-105">
          <Share2 size={20} /> 결과 공유하기
        </button>
      </section>
    </div>
  );
};

export default FeedDetailPage;
