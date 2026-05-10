"use client";

import React from 'react';
import Link from 'next/link';
import { Share2, Sparkles, MessageCircle, Heart } from 'lucide-react';

const FeedsPage = () => {
  // 더미 데이터 리스트
  const feeds = [
    { id: "whale", title: "하늘을 나는 고래", tag: "칼 융", desc: "거대한 고래가 도시 위를 유유히 날아가는 꿈을 꿨어요. 사람들은 경이로움에 차서 그 광경을 지켜보고 있었죠.", date: "2시간 전", author: "DreamExplorer" },
    { id: "key", title: "잃어버린 열쇠", tag: "프로이트", desc: "오래된 저택에서 계속해서 열쇠를 찾으러 다니는 꿈이었습니다. 결국 찾지 못한 채 잠에서 깼네요.", date: "5시간 전", author: "MindSeeker" },
    { id: "stairs", title: "끝없이 이어지는 계단", tag: "신경과학", desc: "올라가도 올라가도 끝이 없는 계단을 헉헉거리며 오르는 꿈. 숨이 막힐 것 같은 기분이었어요.", date: "어제", author: "NightWalker" },
    { id: "forest", title: "빛나는 숲의 사슴", tag: "게슈탈트", desc: "어두운 숲속에서 몸이 은은하게 빛나는 사슴을 만났습니다. 사슴은 저를 보며 무언가 말하려는 듯 했어요.", date: "2일 전", author: "NatureLover" },
  ];

  return (
    <div className="flex flex-col w-full max-w-2xl mx-auto px-6 py-12">
      <div className="mb-10 text-center">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">꿈 해몽 피드</h1>
        <p className="text-slate-500 font-medium">다른 유저들이 공유한 몽환적인 꿈 이야기들</p>
      </div>

      <div className="flex flex-col gap-8">
        {feeds.map((item) => (
          <div key={item.id} className="bg-white border border-slate-200 rounded-3xl shadow-sm overflow-hidden flex flex-col">
            {/* Feed Header */}
            <div className="px-6 py-4 flex items-center justify-between border-b border-slate-50">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-tr from-purple-100 to-pink-100 rounded-full flex items-center justify-center text-purple-500 font-bold">
                  {item.author[0]}
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900">{item.author}</p>
                  <p className="text-xs text-slate-400 font-medium">{item.date}</p>
                </div>
              </div>
              <span className="px-2 py-1 bg-purple-100 text-purple-700 text-[10px] font-bold rounded-md uppercase tracking-tight">{item.tag}</span>
            </div>

            {/* Feed Content */}
            <Link href={`/feeds/${item.id}`} className="p-6 hover:bg-slate-50 transition-colors group">
              <h2 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-purple-600 transition-colors">{item.title}</h2>
              <p className="text-slate-600 leading-relaxed mb-4 line-clamp-3">
                {item.desc}
              </p>
              {/* Image Placeholder */}
              <div className="w-full aspect-video bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl flex items-center justify-center border border-slate-100 relative overflow-hidden">
                <Sparkles className="text-slate-300" size={32} />
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            </Link>

            {/* Feed Footer */}
            <div className="px-6 py-4 flex items-center gap-6 border-t border-slate-50">
              <button className="flex items-center gap-1.5 text-slate-500 hover:text-pink-500 transition-colors text-sm font-medium">
                <Heart size={18} /> 24
              </button>
              <button className="flex items-center gap-1.5 text-slate-500 hover:text-purple-500 transition-colors text-sm font-medium">
                <MessageCircle size={18} /> 8
              </button>
              <button className="flex items-center gap-1.5 text-slate-500 hover:text-blue-500 transition-colors text-sm font-medium ml-auto">
                <Share2 size={18} /> 공유
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <p className="text-slate-400 text-sm italic">꿈의 끝까지 내려왔습니다. 당신의 꿈도 기록해보세요.</p>
        <Link href="/dream-teller" className="inline-block mt-4 text-purple-600 font-bold hover:underline">
          무료 해몽 시작하기 &rarr;
        </Link>
      </div>
    </div>
  );
};

export default FeedsPage;
