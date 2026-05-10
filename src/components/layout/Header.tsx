"use client";

import Link from 'next/link';
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  // TODO: 실제 인증 상태 연동 필요
  const isLogin = false;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 backdrop-blur-md bg-white/60 border-b border-black/5 transition-all duration-300">
      <div className="w-full mx-auto px-6 md:px-12 lg:px-24 h-16 flex items-center justify-between">
        {/* 공통 로고 */}
        <Link href="/" className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-500 hover:opacity-80 transition-opacity" onClick={() => setIsMobileMenuOpen(false)}>
          AI DREAM TELLER
        </Link>

        {/* 데스크탑 네비게이션 */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-700">
          {isLogin ? (
            // 회원 전용 메뉴
            <>
              <Link href="/my-page" className="hover:text-pink-600 transition-colors">
                마이페이지
              </Link>
            </>
          ) : (
            // 비회원 전용 메뉴
            <>
              <Link href="/guest-check" className="hover:text-pink-600 transition-colors">
                비회원 주문 조회
              </Link>
              <Link href="/auth" className="hover:text-pink-600 transition-colors">
                로그인
              </Link>
            </>
          )}
        </nav>

        {/* 모바일 햄버거 버튼 */}
        <button 
          className="md:hidden text-slate-700 hover:text-pink-600 transition-colors p-1"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* 모바일 네비게이션 메뉴 (드롭다운) */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-64 opacity-100 border-b border-black/5' : 'max-h-0 opacity-0'}`}>
        <nav className="w-full bg-white/90 backdrop-blur-md flex flex-col items-center py-4 gap-6 text-base font-medium text-slate-700 shadow-xl">
          {isLogin ? (
            <>
              <Link href="/my-page" className="hover:text-pink-600 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                마이페이지
              </Link>
            </>
          ) : (
            <>
              <Link href="/guest-check" className="hover:text-pink-600 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                비회원 주문 조회
              </Link>
              <Link href="/auth" className="hover:text-pink-600 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                로그인
              </Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
