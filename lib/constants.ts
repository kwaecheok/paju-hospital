/**
 * 병원 정보 설정 파일
 * 병원명, 전화번호, 주소 등을 여기서 변경하면 전체 사이트에 반영됩니다.
 * 의정부쾌척한방병원 등 다른 지점으로 확장 시 새 HospitalConfig 객체를 추가하세요.
 */

export interface OperatingHour {
  label: string
  time: string
}

export interface HospitalConfig {
  name: string
  shortName: string
  phone: string
  fax?: string
  address: string
  addressDetail?: string
  email?: string
  operatingHours: OperatingHour[]
  closedDays: string
  naverMapUrl: string
  kakaoChannelUrl?: string
  naverBlogUrl?: string
  youtubeUrl?: string
  description: string
  keywords: string[]
}

/** ─── 파주쾌척한방병원 ─────────────────────────────────── */
export const PAJU_HOSPITAL: HospitalConfig = {
  name: '파주쾌척한방병원',
  shortName: '파주쾌척',
  phone: '031-939-5737',
  address: '경기 파주시 해올2길 12',
  operatingHours: [
    { label: '평   일', time: '09:00 ~ 18:00' },
    { label: '토요일', time: '09:00 ~ 13:00' },
    { label: '점심시간', time: '13:00 ~ 14:00' },
  ],
  closedDays: '일요일·공휴일 휴진',
  /* TODO: 실제 네이버 지도 embed URL로 교체하세요 */
  naverMapUrl: 'https://map.naver.com/v5/search/%ED%8C%8C%EC%A3%BC%EC%BE%8C%EC%B2%99%ED%95%9C%EB%B0%A9%EB%B3%91%EC%9B%90',
  description:
    '파주쾌척한방병원은 척추·관절 전문 한방병원으로, 체계적인 진료와 따뜻한 마음으로 환자 여러분의 건강을 책임집니다.',
  keywords: [
    '파주한방병원', '파주척추전문', '파주쾌척', '허리디스크', '목디스크', '척추관협착증',
    '무릎관절', '교통사고한방치료', '추나요법 파주', '침치료 파주',
  ],
}

/** ─── 의정부쾌척한방병원 (확장 예시) ───────────────────── */
export const UIJEONGBU_HOSPITAL: HospitalConfig = {
  name: '의정부쾌척한방병원',
  shortName: '의정부쾌척',
  phone: '031-000-0000', /* TODO: 실제 전화번호로 교체 */
  address: '경기 의정부시 OO동 OO번지', /* TODO: 실제 주소로 교체 */
  operatingHours: [
    { label: '평   일', time: '09:00 ~ 18:00' },
    { label: '토요일', time: '09:00 ~ 13:00' },
    { label: '점심시간', time: '13:00 ~ 14:00' },
  ],
  closedDays: '일요일·공휴일 휴진',
  naverMapUrl: '', /* TODO: 실제 네이버 지도 URL로 교체 */
  description: '의정부쾌척한방병원은 척추·관절 전문 한방병원입니다.',
  keywords: ['의정부한방병원', '의정부척추전문', '의정부쾌척'],
}

/* 현재 활성화할 병원 설정 */
export const HOSPITAL = PAJU_HOSPITAL

/* ──────────────────────────────────────────────────────── */

export const NAV_ITEMS = [
  {
    label: '병원소개',
    href: '/about',
    children: [
      { label: '병원소개', href: '/about' },
      { label: '의료진현황', href: '/about/doctors' },
      { label: '시설안내', href: '/about/facilities' },
      { label: '오시는길', href: '/about/location' },
    ],
  },
  {
    label: '척추질환',
    href: '/spine',
    children: [
      { label: '허리디스크', href: '/spine/lumbar-disc' },
      { label: '목디스크', href: '/spine/cervical-disc' },
      { label: '척추관협착증', href: '/spine/stenosis' },
      { label: '척추측만증', href: '/spine/scoliosis' },
      { label: '좌골신경통', href: '/spine/sciatica' },
    ],
  },
  {
    label: '관절질환',
    href: '/joint',
    children: [
      { label: '무릎관절', href: '/joint/knee' },
      { label: '어깨관절', href: '/joint/shoulder' },
      { label: '고관절', href: '/joint/hip' },
      { label: '류마티스관절염', href: '/joint/rheumatoid' },
    ],
  },
  {
    label: '한방치료',
    href: '/treatment',
    children: [
      { label: '침치료', href: '/treatment/acupuncture' },
      { label: '한약치료', href: '/treatment/herbal' },
      { label: '추나요법', href: '/treatment/chuna' },
      { label: '봉침치료', href: '/treatment/bee-venom' },
      { label: '약침치료', href: '/treatment/pharmacopuncture' },
    ],
  },
  {
    label: '특수클리닉',
    href: '/clinic',
    children: [
      { label: '교통사고클리닉', href: '/clinic/traffic' },
      { label: '산후풍클리닉', href: '/clinic/postpartum' },
      { label: '두통·어지럼증', href: '/clinic/headache' },
    ],
  },
  {
    label: '커뮤니티',
    href: '/community',
    children: [
      { label: '공지사항', href: '/community/notice' },
      { label: '자주묻는질문', href: '/community/faq' },
      { label: '치료후기', href: '/community/review' },
      { label: '온라인상담', href: '/community/consult' },
    ],
  },
]

export const QUICK_MENU = [
  { label: '진료시간', subLabel: '운영 안내', href: '#location', icon: 'clock' },
  { label: '예약·상담', subLabel: '온라인 예약', href: '/community/consult', icon: 'calendar' },
  { label: '오시는길', subLabel: '교통 안내', href: '#location', icon: 'map' },
  { label: '의료진 소개', subLabel: '전문 의료진', href: '/about/doctors', icon: 'doctor' },
  { label: '치료 안내', subLabel: '주요 치료법', href: '/treatment', icon: 'medical' },
  { label: '치료 후기', subLabel: '환자 리뷰', href: '/community/review', icon: 'review' },
]

export const TREATMENTS = [
  {
    id: 'lumbar-disc',
    title: '허리디스크',
    description: '추간판탈출증으로 인한 요통과 하지방사통을 한방 복합치료로 빠르게 개선합니다.',
    icon: 'spine',
    href: '/spine/lumbar-disc',
    tag: '척추',
  },
  {
    id: 'cervical-disc',
    title: '목디스크',
    description: '경추부 신경 압박으로 생기는 목통증과 어깨 방사통을 근본적으로 치료합니다.',
    icon: 'neck',
    href: '/spine/cervical-disc',
    tag: '척추',
  },
  {
    id: 'stenosis',
    title: '척추관협착증',
    description: '좁아진 척추관으로 인한 보행 장애와 하지 통증을 비수술적으로 치료합니다.',
    icon: 'canal',
    href: '/spine/stenosis',
    tag: '척추',
  },
  {
    id: 'knee',
    title: '무릎관절',
    description: '퇴행성 관절염, 반월판 손상 등 무릎 통증을 한방 치료로 회복시킵니다.',
    icon: 'knee',
    href: '/joint/knee',
    tag: '관절',
  },
  {
    id: 'shoulder',
    title: '어깨질환',
    description: '오십견, 회전근개 파열 등 어깨 통증을 침치료·추나요법으로 회복합니다.',
    icon: 'shoulder',
    href: '/joint/shoulder',
    tag: '관절',
  },
  {
    id: 'traffic',
    title: '교통사고 후유증',
    description: '사고 후 남은 통증과 근골격계 손상을 한방 집중 치료로 빠르게 회복시킵니다.',
    icon: 'car',
    href: '/clinic/traffic',
    tag: '클리닉',
  },
]

export const DOCTORS = [
  {
    id: 1,
    name: '○○○ 원장',
    title: '한의학 박사 · 대표원장',
    specialty: '척추·관절 전문',
    credentials: ['○○대학교 한의학과 졸업', '한의학 박사 학위 취득', '대한한방내과학회 정회원'],
    /* TODO: 실제 의료진 사진으로 교체 — public/images/doctors/doctor1.jpg */
    imageSrc: '/images/placeholder-doctor.jpg',
  },
  {
    id: 2,
    name: '○○○ 원장',
    title: '한의학 석사 · 부원장',
    specialty: '침구·추나 전문',
    credentials: ['○○대학교 한의학과 졸업', '한의학 석사 학위 취득', '대한침구의학회 정회원'],
    imageSrc: '/images/placeholder-doctor.jpg',
  },
  {
    id: 3,
    name: '○○○ 원장',
    title: '한의사',
    specialty: '교통사고·통증 클리닉',
    credentials: ['○○대학교 한의학과 졸업', '통증의학 전문 수료', '대한한방재활의학회 정회원'],
    imageSrc: '/images/placeholder-doctor.jpg',
  },
]

export const NOTICES = [
  { id: 1, title: '2025년 설 연휴 진료시간 안내', date: '2025.01.15', isNew: true },
  { id: 2, title: '파주쾌척한방병원 진료 안내 변경 공지', date: '2025.01.10', isNew: false },
  { id: 3, title: '건강보험 적용 추나요법 안내', date: '2024.12.20', isNew: false },
  { id: 4, title: '겨울철 척추 건강 관리 방법 안내', date: '2024.12.05', isNew: false },
  { id: 5, title: '병원 주차 안내', date: '2024.11.20', isNew: false },
]

export const REVIEWS = [
  { id: 1, title: '허리디스크 치료 후 일상으로 돌아왔어요!', date: '2025.01.18', views: 120 },
  { id: 2, title: '6개월째 다니는데 목디스크가 많이 나아졌습니다', date: '2025.01.12', views: 98 },
  { id: 3, title: '교통사고 후유증 치료 덕분에 회복했어요', date: '2025.01.05', views: 87 },
  { id: 4, title: '추나요법 받고 허리가 한결 가벼워졌어요', date: '2024.12.28', views: 76 },
  { id: 5, title: '무릎 관절염 한방 치료 경험 공유합니다', date: '2024.12.15', views: 65 },
]
