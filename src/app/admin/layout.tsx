import React, { ReactNode } from 'react';

interface AdminLayoutProps {
  children: ReactNode;
}

// TODO: 관리자 페이지 공통 레이아웃 구현
// - 좌측 네비게이션 패널 (매출 조회, 주문 내역 리스트, 유저 리스트)
// - 우측 본문 영역(children)
const AdminLayout = ({ children }: AdminLayoutProps) => {
  return (
    <div className="flex min-h-screen">
      <aside className="w-64 bg-gray-100 p-4">
        <h2>Admin Menu</h2>
        {/* 네비게이션 메뉴 작성 */}
      </aside>
      <main className="flex-1 p-4">
        {children}
      </main>
    </div>
  );
};

export default AdminLayout;
