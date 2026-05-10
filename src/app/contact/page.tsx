import React from 'react';

// TODO: 문의하기 폼 또는 이메일 안내 채우기
const ContactPage = () => {
  return (
    <div className="max-w-4xl mx-auto w-full px-6 py-12">
      <h1 className="text-2xl font-bold mb-6 text-pink-300">문의하기</h1>
      <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10">
        <p className="text-gray-300">문의하기 폼 혹은 연락처 정보가 들어갈 자리입니다.</p>
      </div>
    </div>
  );
};

export default ContactPage;
