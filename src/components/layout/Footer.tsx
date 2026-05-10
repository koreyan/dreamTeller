import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full border-t border-white/10 bg-black/40 backdrop-blur-sm mt-auto">
      <div className="w-full mx-auto px-6 md:px-12 lg:px-24 py-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400">
        <div className="flex flex-col gap-1 text-center md:text-left">
          <p className="font-semibold text-gray-300">AI DREAM TELLER</p>
          <p>사업자등록번호: 000-00-00000 | 대표: 홍길동</p>
          <p>이메일: contact@dreamteller.ai</p>
        </div>

        <nav className="flex items-center gap-4">
          <Link href="/terms" className="hover:text-white transition-colors">
            이용약관
          </Link>
          <Link href="/privacy" className="hover:text-white transition-colors font-medium">
            개인정보처리방침
          </Link>
          <Link href="/contact" className="hover:text-white transition-colors">
            문의하기
          </Link>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
