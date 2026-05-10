import React from 'react';

interface AdminOrderDetailPageProps {
  params: {
    'order-id': string;
  };
}

// TODO: 상세 주문 내역 페이지 구현
// - 회원/비회원 여부, 구매자 정보, 결제 완료 여부 확인
// - 유저 꿈 Input, 해몽 텍스트, 생성 이미지 확인
// - LLM 해몽 재생성 요청 기능 연동
const AdminOrderDetailPage = ({ params }: AdminOrderDetailPageProps) => {
  return (
    <div>
      <h1>Order Detail</h1>
      <p>주문 번호: {params['order-id']}</p>
    </div>
  );
};

export default AdminOrderDetailPage;
