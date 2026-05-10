# Product Requirement Document
(PRD)

## 1. 프로젝트 개요 (Project Overview)

- **프로젝트 명**: AI DREAM TELLER (AI 꿈 해몽 서비스)
- **목표**: 사용자가 입력한 꿈 내용을 AI가 분석하여 심층적인 해몽과 조언을 제공하는 수익형 웹 서비스
- **핵심 가치1**: 신비롭고 직관적인 UI 경험과 정확도 높은 AI 분석을 통해서 사용자에게 인사이트와 재미 제공.
- **핵심 가치2**: 프로이트, 칼 융, 신경과학, 게슈탈트 등 해몽을 맡기고 싶은 전문 분야를 선택해서 해몽 요청 가능.

## 2. 타겟 유저(Target Audience)

- 꿈의 의미를 검색해보는 습관이 있는 20-40대 남녀.
- 모바일 환경에서 간편하게 결과를 확인하고 공유하고 싶어하는 유저.

## 3. 기술 스택(Tech Stack)

- **Web Framework**: Next.js 16.2.6(App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS, Shadcn/ui
- **Backend & DB**: Next.js API Routes, Supabase
- **Payments**: Toss Payments
- **AI**: Gemini with gemini sdk

## 4. 디자인 가이드(Design Guide)

- **Theme**: Mystical, Vibrant, Fluid (Bright Version)
- **Colors**: Ivory, Soft Peach, Baby Blue, Light Lavender (Light Aurora Gradients)
- **Interactions**: 부드러운 스크롤, 호버 시 빛나는 효과, 로딩 시 몽환적인 애니메이션
    

## 5. 프론트엔드 요구사항 및 UX 플로우 (Frontend Requirements & UX Flow)

### 5.1. 전체 레이아웃 (Global Layout)
1. **상단 네비게이션 바 (Header/GNB)**
   - (공통) 홈 로고
   - (비회원) 로그인, 비회원 주문 조회
   - (회원) 마이페이지
   - **반응형 대응**: 모바일/태블릿 환경에서는 우측 메뉴를 햄버거 메뉴(드롭다운) 형태로 전환. 데스크탑에서는 로고와 메뉴 간격을 넓게 배치한 와이드 레이아웃 적용.
2. **본문 (Body)**
   - 각 페이지 별 주요 내용 렌더링
3. **하단 바 (Footer)**
   - 사업자 정보, 이용약관 링크, 개인정보처리 방침 링크, 문의하기
   - **디자인 정책**: 상단 네비게이션 바와 대칭을 이루는 와이드 레이아웃 및 여백 적용. 이용약관, 개인정보처리방침, 문의하기 전용 페이지 구성 완료.
4. **Head & Meta**
   - SEO, Open Graph, GA4 등 Analytics 설정

### 5.2. UX 플로우 페이지 구성 (UX Flow Pages Configuration)

1. **메인 랜딩 페이지 (/)**
   - **Hero 섹션**
     - 한 줄 문구: **"어젯밤 꿈, 그냥 흘려보내지 마세요"**
       - 의도: 꿈을 꾼 직후(아침) 검색하는 유저 심리에 맞춘 FOMO(놓침에 대한 불안) 자극. 꿈에 의미가 있다는 전제를 자연스럽게 심어줌.
     - 상세 소개: **"꿈은 무의식이 보내는 신호입니다. 프로이트, 칼 융, 신경과학, 게슈탈트 — AI가 4가지 전문 관점으로 당신의 꿈에 숨겨진 의미를 풀어드립니다."**
       - 의도: 1문장은 심리학적 전제로 서비스의 존재 이유를 확립. 2문장은 4가지 전문 분야 나열로 신뢰감 확보 + "숨겨진 의미"로 호기심 극대화.
     - CTA 버튼 문구: **"지금 꿈 풀어보기"** (→ 프로덕트 상세 페이지 `/dream-teller` 이동)
       - 의도: "지금"으로 긴급성, "풀어보기"로 진입 장벽 최소화 및 해몽 서비스와 일관된 톤 유지.
   - **Feature 소개 섹션 (Bento Grid, 4개 카드)**
     - Feature 1 — **"하나의 꿈, 네 가지 시선"**
       - 설명: "프로이트의 정신분석, 칼 융의 원형 이론, 신경과학적 접근, 게슈탈트 심리학. 같은 꿈도 관점에 따라 전혀 다른 이야기가 펼쳐집니다."
       - 구매 심리: 전문성/신뢰 → "이건 제대로 된 서비스다"
     - Feature 2 — **"3분 안에 완성되는 해석"**
       - 설명: "복잡한 예약이나 대기 시간 없이, 꿈을 입력하는 순간 AI가 즉시 분석을 시작합니다. 커피 한 잔 사이에 결과를 받아보세요."
       - 구매 심리: 편의성/속도 → "쉽고 빠르니까 한번 해볼까"
     - Feature 3 — **"당신의 꿈을 이미지로"**
       - 설명: "텍스트 해석에 더해, AI가 당신이 꾼 꿈의 핵심 장면을 한 장의 이미지로 시각화합니다. 기억 속 흐릿한 장면이 선명하게 되살아납니다."
       - 구매 심리: 차별화/놀라움 → "이미지까지? 써봐야 해" (AI 이미지 옵션 업셀링 유도)
     - Feature 4 — **"꿈 기록이 쌓이는 캘린더"**
       - 설명: "회원이라면 해석받은 꿈이 캘린더에 자동으로 기록됩니다. 시간이 지나도 다시 꺼내볼 수 있는 나만의 꿈 아카이브를 만들어보세요."
       - 구매 심리: 지속성/가치 → "한 번이 아니라 계속 쓸 수 있네" (회원가입 + 재방문 유도)
   - **과거 풀이 예시 섹션**
     - 이미 풀이된 이전 유저들의 꿈 해몽 텍스트 및 AI 이미지 예시 카드 배치 (개별 카드 클릭 시 상세 페이지로 이동, 더보기 → 예시 리스트 피드 `/feeds`로 이동)
     - 의도: 실제 결과물을 미리 보여줌으로써 "나도 이런 결과를 받고 싶다"는 기대감 형성 → 구매 결정 가속화

2. **프로덕트 상세 페이지 (/dream-teller)**
   - 간략한 서비스 사용 소개
   - 프로이트, 칼 융, 신경과학, 게슈탈트 등 해몽을 맡기고 싶은 전문 분야 선택
   - 유저의 꿈 입력란
   - 꿈 풀이 요청 버튼
   - 안내 및 주의 사항
     - 보통 3분 이내에 생성이 완료됩니다.
     - 꿈 해석은 AI를 통해 정신분석, 신화, 상징학 데이터를 기반으로 생성됩니다.
     - 이 해석은 자기 이해를 돕기 위한 참고 자료이며, 의학적/심리학적 진단을 대체하지 않습니다. 
   - 구매 옵션 선택 섹션
     - (기본) 단순 텍스트 해석: 1,500원
     - (추가 옵션) AI 생성 이미지 추가: + 500원

3. **결제 페이지 (/payments)**
   - 영수증 디자인을 참고한 디자인의 결제 페이지
   - 토스페이먼츠 위젯이 들어갈 섹션
   - 회원 결제와 비회원 결제 모두 지원
   - 결제가 성공적으로 완료된 후 회원은 마이페이지, 비회원은 비회원 주문 조회 페이지로 이동
   - 결제에 실패했을 경우 입력한 꿈 정보가 사라지지 않고 결제 페이지에 그대로 머물러 있음

4. **해석 확인 페이지 (/dream-result/[order-id])**
   - 결제한 유저가 자신의 꿈 해석 및 AI 이미지(옵션)를 확인할 수 있는 페이지
   - 해몽과 이미지 뿐 아니라 자신이 입력한 꿈 내용도 함께 확인할 수 있어야 함
   - 다른 사람에게 공유할 수 있도록 링크 카피, 소셜 공유 버튼 섹션 하단 배치
   - 회원의 경우 캘린더 라이브러리를 활용해 해몽이 이뤄진 날짜에 하이라이트 표시 및 해당 일자를 누를 경우 해당 해몽 결과 페이지로 넘어감

5. **유저의 마이페이지 (/my-page)**
   - 회원 가입된 유저만 자신의 마이페이지 접근 가능
   - 캘린더 라이브러리를 활용해 해몽이 이뤄진 날짜에 하이라이트 표시 및 해당 일자를 누를 경우 해당 해몽 결과 페이지로 넘어감
   - 구매 내역 리스트가 캘린더 하단에 배치 및 해당 리스트 아이템을 누를 경우 해당 해몽 결과 확인 페이지로 넘어감
   - 닉네임(수정 가능 기능), 로그인 한 소셜 서비스(구글 or 카카오) 로고, 이메일 주소, 로그아웃 버튼

6. **비회원 로그인 (/guest-login)**
   - 간단한 페이지 소개
   - 전화번호 및 비밀번호 입력 폼
   - 비회원 주문 조회 버튼

7. **비회원 주문 조회 페이지 (/guest-check)**
   - 6번에서 로그인 한 비회원이 자신의 구매 내역을 조회하는 페이지
   - 구매내역 리스트가 배치되어 있고 해당 리스트 아이템을 눌렀을 때 해당 해몽 결과 확인 페이지로 이동

8. **과거 풀이 내역 리스트 피드 페이지 (/feeds)**
   - 이전 유저들의 과거 풀이 내역 리스트 피드 페이지
   - 페이스북 형태의 피드
   - 이미지가 있는 해몽 결과는 이미지와 텍스트가 함께 보여지고, 텍스트만 있는 해몽 결과는 텍스트만 보여짐
   - 개별 피드 아이템 클릭 시 해당 해몽 상세 페이지(/feeds/[id])로 이동

9. **해몽 상세 페이지 (/feeds/[id])**
   - 개별 꿈 해몽 결과의 상세 내용을 확인할 수 있는 페이지
   - 꿈 내용, AI 해석(4가지 관점), AI 생성 이미지 포함
   - 소셜 공유 기능 제공

10. **회원 로그인 페이지 (/auth)**
    - 구글 및 카카오 소셜 로그인만 존재
    - 각 소셜 서비스로 성공적으로 로그인 후 리다이렉트는 2번 프로덕트 상세 페이지로 이동

### 5.3. 관리자 UX 플로우 페이지 구성 (Admin UX Flow Configuration)

0. **관리자 페이지 기본 공통 레이아웃**
   - 좌측 네비게이션 패널
     - 매출 조회
     - 주문 내역 리스트
   - 네비게이션 패널을 제외하고는 각 관리자 메뉴 페이지별 내용 본문(Body) 영역

1. **관리자 메인 페이지 (/admin)**
   - 기간별 매출 조회 대시보드 (기본 화면)

2. **주문 내역 리스트 (/admin/order-list)**
   - 결제가 완료된 주문 건 확인을 위한 리스트 표
   - 각 리스트 아이템을 누르면 각 주문의 상세 내역(3번)으로 이동

3. **상세 주문 내역 (/admin/order-list/[order-id])**
   - 주문 내역 리스트(2번)에 종속된 상세 페이지
   - 해당 주문의 회원/비회원 여부, 구매자 정보, 결제 완료 여부
   - 유저의 꿈 Input, LLM이 생성한 해몽 텍스트, AI가 생성한 꿈 이미지(존재한다면)
   - LLM 해몽 재생성 요청 버튼

4. **유저 리스트 (/admin/user-list)**
   - 회원 및 비회원 유저 리스트 표 페이지
   - 회원과 비회원을 필터링해서 볼 수 있는 기능
   - 각 회원의 결제 여부를 확인할 수 있음

## 6. 백엔드 API 아키텍처 (Backend API Architecture)
Next.js 14+ App Router의 `Route Handlers`(`app/api/.../route.ts`)와 `Supabase`를 기반으로 한 RESTful API 구조입니다. 각 도메인별로 MECE(상호 배제 및 전체 포괄) 원칙에 따라 분리되었습니다.

### 6.1. Auth & Users (인증 및 유저 관리)
사용자 식별 및 인증 처리, 프로필 관리를 담당합니다.
- `GET /api/auth/callback`: 구글/카카오 OAuth 로그인 성공 후 Supabase 세션 설정을 위한 콜백
- `POST /api/auth/guest`: 비회원 인증 (전화번호 및 비밀번호 입력값 검증 후 세션 쿠키 발급)
- `POST /api/auth/logout`: 현재 세션 로그아웃
- `GET /api/users/me`: 현재 인증된 사용자(회원/비회원)의 프로필 및 식별 정보 조회
- `PATCH /api/users/me`: 회원 닉네임 등 프로필 정보 수정

### 6.2. Orders & Payments (주문 및 결제)
토스페이먼츠 연동 및 주문서(결제 내역) 생성/조회를 담당합니다.
- `POST /api/orders`: 결제 전 임시 주문서 생성 (금액 및 옵션 무결성 검증용)
- `POST /api/orders/confirm`: 토스페이먼츠 결제 최종 승인 확인 및 DB 주문 상태 업데이트
- `GET /api/orders/me`: 내 구매 내역 리스트 조회 (마이페이지/비회원 주문 조회용, 캘린더 매핑 데이터 포함)
- `GET /api/orders/[order-id]`: 특정 주문 상세 정보 조회 (결제 상태, 금액, 관련 꿈 해몽 ID 등)

### 6.3. Dreams & AI (꿈 해몽 및 생성)
사용자의 꿈 입력 데이터를 바탕으로 Gemini API를 호출하여 해몽 텍스트와 이미지를 생성합니다.
- `POST /api/dreams`: 결제 확인 후, 사용자의 꿈 데이터를 바탕으로 AI 해몽 텍스트 생성 및 DB 저장
- `POST /api/dreams/[dream-id]/image`: 추가 결제 옵션인 'AI 생성 이미지' 요청 및 결과 저장
- `GET /api/dreams/[dream-id]`: 특정 해몽 결과(텍스트, 이미지) 상세 조회 (UX 4번 플로우)

### 6.4. Feeds (공개 피드)
다른 사용자들이 볼 수 있도록 허용된(또는 익명화된) 이전 해몽 결과들을 제공합니다.
- `GET /api/feeds`: 과거 풀이 내역 피드 리스트 조회 (최신순, 무한 스크롤 및 페이지네이션 지원)

### 6.5. Admin (관리자 전용)
관리자 권한을 가진 유저만 접근 가능한 API입니다.
- `GET /api/admin/metrics`: 대시보드용 기간별 매출, 방문자, 생성 건수 등 통계 데이터 조회
- `GET /api/admin/orders`: 전체 주문 내역 리스트 조회 및 필터링
- `GET /api/admin/orders/[order-id]`: 관리자 권한으로 특정 개별 주문의 상세 내역(결제 정보, 구매자 정보, 꿈 입력 내용 등) 조회
- `GET /api/admin/users`: 전체 유저 리스트 조회 (회원/비회원 구분 필터 적용)
- `POST /api/admin/dreams/[dream-id]/regenerate`: 관리자 권한으로 특정 꿈 해몽 AI 텍스트 또는 이미지 재생성 (품질 관리용)

## 7. 데이터베이스 스키마 설계 (Database Schema Design)
Supabase (PostgreSQL) 기반의 관계형 데이터베이스 스키마 설계입니다. 데이터는 MECE 원칙에 따라 크게 사용자(Users/Guests), 결제(Orders), 해몽(Dreams)으로 명확히 분리됩니다.

### 7.1. `users` 테이블 (회원 정보)
Supabase의 `auth.users`와 1:1 매핑되어 애플리케이션 내의 회원 프로필을 관리합니다.
| 컬럼명 | 데이터 타입 | 제약 조건 (Null 여부) | 설명 |
|---|---|---|---|
| `id` | uuid | PK, Not Null | Supabase auth.users의 id와 동일 |
| `email` | text | Not Null | 소셜 로그인 이메일 |
| `nickname` | text | Not Null | 사용자 닉네임 |
| `provider` | text | Not Null | 가입 제공자 (ex. 'google', 'kakao') |
| `role` | text | Not Null | 권한 등급 (ex. 'admin', 'user') / Default: 'user' |
| `created_at` | timestamp | Not Null | 계정 생성 일시 |
| `updated_at` | timestamp | Not Null | 계정 수정 일시 |

### 7.2. `guests` 테이블 (비회원 정보)
소셜 로그인 없이 전화번호와 비밀번호로 이용하는 비회원 고객을 식별합니다.
| 컬럼명 | 데이터 타입 | 제약 조건 (Null 여부) | 설명 |
|---|---|---|---|
| `id` | uuid | PK, Not Null | 고유 식별자 |
| `phone` | text | Not Null, Unique | 비회원 전화번호 (로그인 아이디 역할) |
| `password_hash` | text | Not Null | 암호화된 비밀번호 |
| `created_at` | timestamp | Not Null | 비회원 정보 최초 생성 일시 |
| `updated_at` | timestamp | Not Null | 정보 수정 일시 |

### 7.3. `orders` 테이블 (결제 및 주문 내역)
토스페이먼츠 연동을 위한 결제 상태와 내역을 통합 관리합니다. 회원(`user_id`)이거나 비회원(`guest_id`) 둘 중 하나의 식별자를 가집니다.
| 컬럼명 | 데이터 타입 | 제약 조건 (Null 여부) | 설명 |
|---|---|---|---|
| `id` | uuid | PK, Not Null | 주문 고유 식별자 |
| `user_id` | uuid | Nullable (FK) | `users.id` 참조 (회원인 경우) |
| `guest_id` | uuid | Nullable (FK) | `guests.id` 참조 (비회원인 경우) |
| `order_name` | text | Not Null | 주문명 (ex. "프로이트 해몽 + 이미지 추가") |
| `amount` | integer | Not Null | 총 결제 금액 |
| `has_image_option`| boolean | Not Null | AI 이미지 생성 옵션 구매 여부 |
| `status` | text | Not Null | 결제 상태 ('pending', 'paid', 'failed', 'refunded') |
| `toss_order_id` | text | Not Null, Unique | 토스페이먼츠 연동용 고유 주문번호 |
| `toss_payment_key`| text | Nullable | 결제 최종 승인 후 발급받는 고유 키 |
| `created_at` | timestamp | Not Null | 주문서 생성 일시 |
| `updated_at` | timestamp | Not Null | 주문 상태 수정 일시 |

### 7.4. `dreams` 테이블 (사용자 꿈 및 AI 해몽 결과)
1개의 주문당 1개의 꿈 해몽이 생성되며(`order_id`와 1:1 관계), 유저의 입력값과 AI가 생성한 결과물을 보관합니다.
| 컬럼명 | 데이터 타입 | 제약 조건 (Null 여부) | 설명 |
|---|---|---|---|
| `id` | uuid | PK, Not Null | 해몽 결과 고유 식별자 |
| `order_id` | uuid | Not Null, Unique(FK) | `orders.id` 참조 |
| `category` | text | Not Null | 선택한 해몽 분야 (ex. 'freud', 'jung' 등) |
| `user_input` | text | Not Null | 유저가 직접 입력한 꿈의 내용 |
| `interpretation` | text | Nullable | AI가 분석하여 생성한 텍스트 결과물 (생성 중일 땐 Null) |
| `image_url` | text | Nullable | AI가 생성한 이미지 URL (옵션 미구매 시 또는 생성 중엔 Null) |
| `is_public` | boolean | Not Null | 피드 공개 여부 플래그 (Default: true) |
| `created_at` | timestamp | Not Null | 해몽 요청 생성 일시 |
| `updated_at` | timestamp | Not Null | 해몽 결과물 저장 및 수정 일시 |