'use strict';
/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   쾌척한방병원 공통 컴포넌트 JS
   모든 페이지에서 로드 — 헤더/푸터/유틸리티
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

/* ── 병원 정보 ───────────────────────────────── */
const HOSPITAL = {
  name:      '쾌척한방병원',
  phone:     '031-939-5737',
  phoneRaw:  '03193950737',
  address:   '경기 파주시 해올2길 12',
  mapUrl:    'https://map.naver.com/v5/search/%ED%8C%8C%EC%A3%BC%EC%BE%8C%EC%B2%99%ED%95%9C%EB%B0%A9%EB%B3%91%EC%9B%90',
  hours: [
    { label:'평   일', time:'09:00 ~ 18:00' },
    { label:'토요일', time:'09:00 ~ 13:00' },
    { label:'점심시간', time:'13:00 ~ 14:00' },
  ],
  closed: '일요일·공휴일 휴진',
};

/* ── 네비게이션 구조 ─────────────────────────── */
const NAV = [
  {
    label: '쾌척소개', href: 'about.html', key: 'about',
    children: [
      { label: '병원소개',   href: 'about.html' },
      { label: '의료진현황', href: 'doctors.html' },
      { label: '오시는 길', href: 'location.html' },
    ],
  },
  {
    label: '진료안내', href: 'diseases.html', key: 'treatment',
    children: [
      { label: '진료과목',      href: 'diseases.html' },
      { label: '입원치료',      href: 'diseases.html#inpatient' },
      { label: '교통사고 치료', href: 'diseases.html#traffic' },
    ],
  },
  {
    label: '질환소개', href: 'diseases.html', key: 'diseases',
    children: [
      { label: '허리디스크',   href: 'diseases.html#lumbar' },
      { label: '목디스크',     href: 'diseases.html#cervical' },
      { label: '척추관협착증', href: 'diseases.html#stenosis' },
      { label: '관절통증',     href: 'diseases.html#joint' },
      { label: '안면마비',     href: 'diseases.html#facial' },
    ],
  },
  {
    label: '오시는 길', href: 'location.html', key: 'location',
    children: [],
  },
];

/* ── SVG 아이콘 ─────────────────────────────── */
const IC = {
  phone:  `<svg fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/></svg>`,
  clock:  `<svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path stroke-linecap="round" d="M12 6v6l4 2"/></svg>`,
  chevD:  `<svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" d="M19 9l-7 7-7-7"/></svg>`,
  chevR:  `<svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" d="M9 5l7 7-7 7"/></svg>`,
  menu:   `<svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" d="M4 6h16M4 12h16M4 18h16"/></svg>`,
  close:  `<svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" d="M6 18L18 6M6 6l12 12"/></svg>`,
  map:    `<svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>`,
  cal:    `<svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2"/><path stroke-linecap="round" d="M16 2v4M8 2v4M3 10h18"/></svg>`,
  doc:    `<svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>`,
  med:    `<svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>`,
  chat:   `<svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/></svg>`,
};

/* ── 헤더 HTML 빌드 ─────────────────────────── */
function buildHeader(currentPage) {
  /* PC 네비게이션 */
  const navHTML = NAV.map(item => {
    const isActive = currentPage === item.key
      || item.children.some(c => c.href.startsWith(currentPage + '.html'));
    const drop = item.children.length
      ? `<div class="nav-dropdown">${item.children.map(c =>
          `<a href="${c.href}">${c.label}</a>`).join('')}</div>`
      : '';
    return `<div class="nav-item">
      <a href="${item.href}" class="nav-link${isActive ? ' is-active' : ''}">
        ${item.label}${item.children.length ? `<span style="width:14px;height:14px;display:inline-flex">${IC.chevD}</span>` : ''}
      </a>${drop}</div>`;
  }).join('');

  /* 모바일 네비게이션 */
  const mobHTML = NAV.map((item, i) => {
    const subs = item.children.length
      ? `<div class="mob-sub" id="mob-sub-${i}">${item.children.map(c =>
          `<a href="${c.href}" class="mob-sub-link">${c.label}</a>`).join('')}</div>`
      : '';
    const arrow = item.children.length
      ? `<span class="mob-chevron" id="mob-ch-${i}" style="width:14px;height:14px;display:inline-flex">${IC.chevD}</span>` : '';
    return `<div class="mob-item">
      <button class="mob-btn" onclick="toggleMobSub(${i})">${item.label}${arrow}</button>
      ${subs}</div>`;
  }).join('');

  return `
  <!-- 상단 정보바 -->
  <div class="top-bar" style="display:none" id="top-bar">
    <div class="container" style="display:flex;align-items:center;justify-content:space-between;height:36px;font-size:.75rem">
      <div style="display:flex;align-items:center;gap:1.5rem">
        <span style="display:flex;align-items:center;gap:6px;font-weight:600;letter-spacing:.04em">
          <span style="width:14px;height:14px">${IC.phone}</span>${HOSPITAL.phone}
        </span>
        <span style="color:rgba(255,255,255,.6);display:flex;align-items:center;gap:6px">
          <span style="width:14px;height:14px">${IC.clock}</span>
          평일 09:00~18:00 &nbsp;|&nbsp; 토 09:00~13:00 &nbsp;|&nbsp; 점심 13:00~14:00
        </span>
      </div>
      <div style="display:flex;align-items:center;gap:1rem;color:rgba(255,255,255,.7)">
        <a href="index.html" style="color:rgba(255,255,255,.7)">홈</a>
        <a href="location.html" style="color:rgba(255,255,255,.7)">오시는길</a>
      </div>
    </div>
  </div>

  <!-- 메인 헤더 -->
  <header class="site-header" id="main-header">
    <div class="container">
      <div class="hd-inner">
        <a href="index.html" class="hd-logo">
          <div class="logo-icon">쾌</div>
          <div style="line-height:1.2">
            <span class="logo-sub">ORIENTAL MEDICINE HOSPITAL</span>
            <span class="logo-name">쾌척한방병원</span>
          </div>
        </a>
        <nav class="hd-nav">${navHTML}</nav>
        <div class="hd-right">
          <a href="tel:${HOSPITAL.phoneRaw}" class="hd-phone">
            <span style="width:16px;height:16px">${IC.phone}</span>${HOSPITAL.phone}
          </a>
          <a href="location.html" class="btn-accent" style="padding:.5rem 1rem;font-size:.8125rem">예약·상담</a>
        </div>
        <div class="hd-mobile-right">
          <a href="tel:${HOSPITAL.phoneRaw}" class="hd-phone-sm" style="width:20px;height:20px">${IC.phone}</a>
          <button id="mob-toggle" onclick="toggleMobile()" aria-label="메뉴">
            <span id="mob-open" style="display:flex">${IC.menu}</span>
            <span id="mob-close" style="display:none">${IC.close}</span>
          </button>
        </div>
      </div>
    </div>
  </header>

  <!-- 모바일 오버레이 & 패널 -->
  <div class="mob-overlay" id="mob-overlay" onclick="closeMobile()"></div>
  <div class="mob-panel" id="mob-panel">
    <div class="mob-panel-hd">
      <span>쾌척한방병원</span>
      <button onclick="closeMobile()" style="width:24px;height:24px">${IC.close}</button>
    </div>
    <a href="tel:${HOSPITAL.phoneRaw}" class="mob-phone-row">
      <span style="width:20px;height:20px;color:#1B5E52">${IC.phone}</span>
      <div><p class="mob-phone-label">대표전화</p><p class="mob-phone-num">${HOSPITAL.phone}</p></div>
    </a>
    <nav>${mobHTML}</nav>
    <div class="mob-panel-ft">
      <a href="location.html" class="btn-accent" style="width:100%;justify-content:center" onclick="closeMobile()">온라인 예약·상담</a>
    </div>
  </div>`;
}

/* ── 푸터 HTML 빌드 ─────────────────────────── */
function buildFooter() {
  const year = new Date().getFullYear();
  const groups = [
    { title:'쾌척소개', links:[['병원소개','about.html'],['의료진현황','doctors.html'],['오시는 길','location.html']] },
    { title:'진료안내', links:[['진료과목','diseases.html'],['입원치료','diseases.html#inpatient'],['교통사고 치료','diseases.html#traffic']] },
    { title:'질환소개', links:[['허리디스크','diseases.html#lumbar'],['목디스크','diseases.html#cervical'],['척추관협착증','diseases.html#stenosis'],['관절통증','diseases.html#joint'],['안면마비','diseases.html#facial']] },
    { title:'커뮤니티', links:[['오시는 길','location.html'],['온라인 상담','location.html']] },
  ];

  const navGrid = groups.map(g => `
    <div class="footer-nav-group">
      <h3>${g.title}</h3>
      ${g.links.map(([l,h]) => `<a href="${h}">${l}</a>`).join('')}
    </div>`).join('');

  return `
  <footer class="site-footer">
    <div class="footer-links">
      <div class="container">
        <div class="footer-nav-grid">${navGrid}</div>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="container">
        <div class="footer-info-row">
          <div>
            <div class="footer-logo">
              <div class="footer-logo-icon">쾌</div>
              <div>
                <div class="footer-logo-sub">ORIENTAL MEDICINE HOSPITAL</div>
                <div class="footer-logo-name">쾌척한방병원</div>
              </div>
            </div>
            <address class="footer-address">
              <div><strong>주   소</strong> ${HOSPITAL.address}</div>
              <div><strong>대표전화</strong> <a href="tel:${HOSPITAL.phoneRaw}">${HOSPITAL.phone}</a></div>
              <div><strong>대 표 자</strong> ○○○ (한의사 면허 제○○○○○호) <!-- TODO: 실제 대표자 입력 --></div>
              <div><strong>사업자등록번호</strong> ○○○-○○-○○○○○ <!-- TODO: 실제 사업자번호 입력 --></div>
            </address>
          </div>
          <div class="footer-btns">
            <a href="tel:${HOSPITAL.phoneRaw}" class="btn-primary" style="font-size:.8125rem;padding:.6rem 1.25rem;gap:.375rem">
              <span style="width:16px;height:16px">${IC.phone}</span>${HOSPITAL.phone}
            </a>
            <a href="location.html" class="btn-accent" style="font-size:.8125rem;padding:.6rem 1.25rem">온라인 예약·상담</a>
            <a href="${HOSPITAL.mapUrl}" target="_blank" rel="noopener noreferrer"
               style="display:flex;align-items:center;justify-content:center;gap:.375rem;padding:.6rem 1.25rem;background:rgba(255,255,255,.1);color:rgba(255,255,255,.8);font-size:.8125rem">
              <span style="width:16px;height:16px">${IC.map}</span>오시는 길 보기
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-copy">
      <div class="container" style="display:flex;flex-wrap:wrap;justify-content:space-between;gap:.5rem">
        <span>Copyright © ${year} 쾌척한방병원. All rights reserved.</span>
        <div style="display:flex;gap:1rem">
          <a href="#">개인정보처리방침</a>
          <a href="#">이용약관</a>
        </div>
      </div>
    </div>
  </footer>`;
}

/* ── 서브페이지 히어로 빌드 ─────────────────── */
function buildSubHero(title, subtitle, breadcrumbs) {
  const crumbs = [['홈','index.html'], ...breadcrumbs]
    .map((c,i,arr) => i < arr.length-1
      ? `<a href="${c[1]}">${c[0]}</a><span>/</span>`
      : `<span style="color:rgba(255,255,255,.9)">${c[0]}</span>`)
    .join('');
  return `
  <div class="sub-hero">
    <div class="sub-hero-inner">
      <nav class="sub-breadcrumb" aria-label="경로">${crumbs}</nav>
      <h1>${title}</h1>
      <p>${subtitle}</p>
    </div>
  </div>`;
}

/* ── 초기화 ─────────────────────────────────── */
document.addEventListener('DOMContentLoaded', function () {
  const page = document.body.dataset.page || 'home';

  /* 헤더/푸터 주입 */
  const hRoot = document.getElementById('header-root');
  const fRoot = document.getElementById('footer-root');
  if (hRoot) hRoot.innerHTML = buildHeader(page);
  if (fRoot) fRoot.innerHTML = buildFooter();

  /* 서브 히어로 주입 */
  const shRoot = document.getElementById('sub-hero-root');
  if (shRoot) {
    const t  = shRoot.dataset.title    || '';
    const s  = shRoot.dataset.subtitle || '';
    const bc = JSON.parse(shRoot.dataset.breadcrumbs || '[]');
    shRoot.outerHTML = buildSubHero(t, s, bc);
  }

  /* 상단 정보바 (md 이상에서만) */
  const topBar = document.getElementById('top-bar');
  if (topBar) {
    function checkTopBar() {
      topBar.style.display = window.innerWidth >= 768 ? 'block' : 'none';
    }
    checkTopBar();
    window.addEventListener('resize', checkTopBar, { passive: true });
  }

  /* 스크롤 헤더 그림자 */
  const hdr = document.getElementById('main-header');
  if (hdr) {
    window.addEventListener('scroll', () =>
      hdr.classList.toggle('scrolled', window.scrollY > 60), { passive: true });
  }
});

/* ── 모바일 메뉴 컨트롤 ─────────────────────── */
function toggleMobile() {
  const panel   = document.getElementById('mob-panel');
  const overlay = document.getElementById('mob-overlay');
  const o = document.getElementById('mob-open');
  const c = document.getElementById('mob-close');
  const isOpen = panel.classList.contains('open');
  if (isOpen) {
    panel.classList.remove('open');
    overlay.classList.remove('show');
    document.body.style.overflow = '';
    if (o) o.style.display = 'flex';
    if (c) c.style.display = 'none';
  } else {
    panel.classList.add('open');
    overlay.classList.add('show');
    document.body.style.overflow = 'hidden';
    if (o) o.style.display = 'none';
    if (c) c.style.display = 'flex';
  }
}

function closeMobile() {
  const panel   = document.getElementById('mob-panel');
  const overlay = document.getElementById('mob-overlay');
  if (!panel) return;
  panel.classList.remove('open');
  overlay.classList.remove('show');
  document.body.style.overflow = '';
  const o = document.getElementById('mob-open');
  const c = document.getElementById('mob-close');
  if (o) o.style.display = 'flex';
  if (c) c.style.display = 'none';
}

function toggleMobSub(idx) {
  const sub = document.getElementById('mob-sub-' + idx);
  const ch  = document.getElementById('mob-ch-' + idx);
  if (!sub) return;
  const open = sub.classList.toggle('open');
  if (ch) ch.classList.toggle('open', open);
}
