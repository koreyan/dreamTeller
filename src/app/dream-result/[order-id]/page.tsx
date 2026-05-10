import React from 'react';

interface DreamResultPageProps {
  params: {
    'order-id': string;
  };
}

// TODO: 해석 확인 페이지 구현
// - 결제한 유저의 꿈 해석 및 AI 이미지 확인
// - 유저가 입력한 꿈 내용 함께 확인
// - 링크 카피, 소셜 공유 버튼 섹션 추가
// - (회원) 캘린더 연동 하이라이트 표시
const DreamResultPage = ({ params }: DreamResultPageProps) => {
  return (
    <main>
      <h1>Dream Result</h1>
      <p>주문 번호: {params['order-id']}</p>
    </main>
  );
};

export default DreamResultPage;
