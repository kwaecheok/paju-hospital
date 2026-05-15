# 쾌척한방병원 홈페이지

Next.js 14 + Tailwind CSS로 제작된 쾌척한방병원 공식 홈페이지입니다.

---

## 실행 방법 (초보자용)

### 1단계 — Node.js 설치 확인

터미널(명령 프롬프트)을 열고 아래 명령어를 입력하세요:

```bash
node -v
```

버전 번호가 나오면 이미 설치된 것입니다. 나오지 않으면 https://nodejs.org 에서 LTS 버전을 설치하세요.

---

### 2단계 — 프로젝트 폴더로 이동

```bash
cd "D:\쾌척\claude-practice\paju-hospital"
```

---

### 3단계 — 패키지 설치

```bash
npm install
```

약 1~2분 정도 소요됩니다. `node_modules` 폴더가 생성되면 완료입니다.

---

### 4단계 — 개발 서버 실행

```bash
npm run dev
```

브라우저에서 **http://localhost:3000** 을 열면 홈페이지가 보입니다.

---

### 5단계 — 배포용 빌드 (서버 업로드 전)

```bash
npm run build
npm run start
```

---

## 파일 구조

```
paju-hospital/
├── app/
│   ├── globals.css        ← 전역 스타일 (색상, 폰트, 공통 클래스)
│   ├── layout.tsx         ← HTML 기본 틀, SEO 메타태그
│   └── page.tsx           ← 메인 페이지 (컴포넌트 조립)
│
├── components/
│   ├── Header.tsx          ← 상단바 + 네비게이션 + 모바일 메뉴
│   ├── Hero.tsx            ← 메인 비주얼 슬라이더
│   ├── QuickMenu.tsx       ← 빠른 메뉴 6개 아이콘
│   ├── TreatmentSection.tsx ← 주요 치료분야 카드
│   ├── AboutSection.tsx    ← 병원 소개 + 통계
│   ├── DoctorSection.tsx   ← 의료진 소개
│   ├── NoticeSection.tsx   ← 공지사항 + 치료후기
│   ├── ConsultationSection.tsx ← 예약·상담 CTA
│   ├── LocationSection.tsx ← 오시는 길 + 지도
│   └── Footer.tsx          ← 하단 정보
│
├── lib/
│   └── constants.ts        ← ★ 병원 정보, 메뉴, 콘텐츠 설정
│
└── public/
    └── images/             ← 실제 병원 사진을 여기에 넣으세요
        └── README.md       ← 이미지 교체 가이드
```

---

## 병원 정보 수정 방법

**`lib/constants.ts`** 파일만 수정하면 전체 사이트에 반영됩니다.

```typescript
export const PAJU_HOSPITAL: HospitalConfig = {
  name: '쾌척한방병원',
  phone: '031-939-5737',          // ← 전화번호
  address: '경기 파주시 해올2길 12', // ← 주소
  // ...
}
```

---

## 의정부쾌척한방병원으로 확장하는 방법

1. `lib/constants.ts`의 `UIJEONGBU_HOSPITAL` 객체에 실제 정보를 채우세요.
2. 파일 맨 아래의 `HOSPITAL` 변수를 변경하세요:

```typescript
// 파주 버전:
export const HOSPITAL = PAJU_HOSPITAL

// 의정부 버전으로 전환:
export const HOSPITAL = UIJEONGBU_HOSPITAL
```

---

## 자주 수정하는 항목

| 항목 | 파일 |
|------|------|
| 전화번호, 주소 | `lib/constants.ts` → `PAJU_HOSPITAL` |
| 메뉴 구성 | `lib/constants.ts` → `NAV_ITEMS` |
| 치료분야 카드 | `lib/constants.ts` → `TREATMENTS` |
| 의료진 정보 | `lib/constants.ts` → `DOCTORS` |
| 공지사항 | `lib/constants.ts` → `NOTICES` |
| 슬라이더 문구 | `components/Hero.tsx` → `SLIDES` 배열 |
| 색상 변경 | `tailwind.config.ts` → `colors.primary`, `colors.accent` |
| 네이버 지도 | `components/LocationSection.tsx` → iframe 교체 |
| 실제 사진 | `public/images/README.md` 참고 |

---

## 색상 시스템

| 이름 | 색상 | 용도 |
|------|------|------|
| `primary` | `#1B5E52` (딥 테알 그린) | 메인 색상, 헤더, 버튼 |
| `primary-dark` | `#0f3d35` | 호버, 상단바 배경 |
| `accent` | `#D4860A` (웜 골드) | CTA 버튼, 강조 |
| `primary-muted` | `#e8f4f1` | 배경 연한 색 |

---

## 기술 스택

- **Next.js 14** — App Router 방식
- **TypeScript** — 타입 안전성
- **Tailwind CSS** — 유틸리티 CSS
- **반응형** — 모바일 / 태블릿 / PC 모두 지원
- **SEO** — title, description, h1~h3 구조, og:tags

---

## 문의

코드 수정이 필요하면 Claude Code 또는 담당 개발자에게 문의하세요.
