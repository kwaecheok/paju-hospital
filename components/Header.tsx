'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { HOSPITAL, NAV_ITEMS } from '@/lib/constants'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<number | null>(null)
  const menuRef = useRef<HTMLDivElement>(null)

  /* 스크롤 감지 */
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  /* 외부 클릭 시 모바일 메뉴 닫기 */
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMobileOpen(false)
      }
    }
    if (mobileOpen) document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [mobileOpen])

  /* 모바일 메뉴 열릴 때 body 스크롤 잠금 */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <>
      {/* ── 상단 정보 바 ─────────────────────────────── */}
      <div className="bg-primary-dark text-white text-xs hidden md:block">
        <div className="container max-w-[1280px] mx-auto px-4 flex items-center justify-between h-9">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              <PhoneIcon />
              <strong className="font-semibold tracking-wide">{HOSPITAL.phone}</strong>
            </span>
            <span className="text-white/70 flex items-center gap-1.5">
              <ClockIcon />
              평일 09:00~18:00 &nbsp;|&nbsp; 토 09:00~13:00 &nbsp;|&nbsp; 점심 13:00~14:00
            </span>
          </div>
          <div className="flex items-center gap-4 text-white/80">
            <Link href="/" className="hover:text-white transition-colors">홈</Link>
            <Link href="#location" className="hover:text-white transition-colors">오시는길</Link>
            <Link href="/community/consult" className="hover:text-white transition-colors">온라인상담</Link>
          </div>
        </div>
      </div>

      {/* ── 메인 헤더 ────────────────────────────────── */}
      <header
        className={`sticky top-0 z-50 bg-white transition-shadow duration-300 ${
          scrolled ? 'shadow-md' : 'shadow-sm'
        }`}
      >
        <div className="container max-w-[1280px] mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">

            {/* 로고 */}
            <Link href="/" className="flex items-center gap-3 shrink-0" aria-label={`${HOSPITAL.name} 홈으로`}>
              <div className="w-10 h-10 md:w-12 md:h-12 bg-primary rounded-sm flex items-center justify-center shrink-0">
                <span className="text-white font-black text-lg leading-none">쾌</span>
              </div>
              <div className="leading-tight">
                <span className="block text-[10px] text-gray-400 tracking-widest uppercase">ORIENTAL MEDICINE HOSPITAL</span>
                <span className="block text-base md:text-lg font-black text-gray-800 leading-none mt-0.5">
                  {HOSPITAL.shortName}한방병원
                </span>
              </div>
            </Link>

            {/* PC 네비게이션 */}
            <nav className="hidden lg:flex items-center gap-0" aria-label="주요 메뉴">
              {NAV_ITEMS.map((item, idx) => (
                <div key={idx} className="nav-item relative group">
                  <Link
                    href={item.href}
                    className="flex items-center gap-1 px-4 xl:px-5 py-6 text-sm font-semibold text-gray-700
                               hover:text-primary transition-colors duration-150 whitespace-nowrap"
                  >
                    {item.label}
                    <ChevronDownIcon />
                  </Link>

                  {/* 드롭다운 */}
                  {item.children && (
                    <div className="dropdown-menu">
                      <ul>
                        {item.children.map((child, cidx) => (
                          <li key={cidx}>
                            <Link
                              href={child.href}
                              className="block px-5 py-3 text-sm text-gray-600 hover:bg-primary-muted hover:text-primary
                                         transition-colors duration-150 whitespace-nowrap border-b border-gray-50 last:border-0"
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* 전화 + 예약 버튼 (PC) */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href={`tel:${HOSPITAL.phone.replace(/-/g, '')}`}
                className="flex items-center gap-2 text-primary font-bold text-sm hover:text-primary-dark transition-colors"
              >
                <PhoneIcon className="w-4 h-4" />
                {HOSPITAL.phone}
              </a>
              <Link
                href="/community/consult"
                className="btn-accent text-xs px-4 py-2.5 ml-1"
              >
                예약·상담
              </Link>
            </div>

            {/* 모바일 — 전화 + 햄버거 */}
            <div className="flex lg:hidden items-center gap-2">
              <a
                href={`tel:${HOSPITAL.phone.replace(/-/g, '')}`}
                className="flex items-center gap-1 text-primary font-bold text-xs"
                aria-label={`전화 ${HOSPITAL.phone}`}
              >
                <PhoneIcon className="w-4 h-4" />
                <span className="hidden xs:inline">{HOSPITAL.phone}</span>
              </a>
              <button
                onClick={() => setMobileOpen((v) => !v)}
                className="ml-2 p-2 text-gray-600 hover:text-primary transition-colors"
                aria-label={mobileOpen ? '메뉴 닫기' : '메뉴 열기'}
                aria-expanded={mobileOpen}
              >
                {mobileOpen ? <XIcon /> : <MenuIcon />}
              </button>
            </div>

          </div>
        </div>

        {/* ── 모바일 메뉴 패널 ──────────────────────── */}
        <div
          className={`lg:hidden fixed top-0 right-0 h-full w-[300px] bg-white z-50 shadow-2xl
                      transform transition-transform duration-300 ease-in-out overflow-y-auto
                      ${mobileOpen ? 'translate-x-0' : 'translate-x-full'}`}
          ref={menuRef}
          aria-hidden={!mobileOpen}
        >
          {/* 패널 상단 */}
          <div className="flex items-center justify-between px-5 h-16 border-b border-gray-100 bg-primary">
            <span className="text-white font-bold text-sm">{HOSPITAL.name}</span>
            <button
              onClick={() => setMobileOpen(false)}
              className="text-white/80 hover:text-white p-1"
              aria-label="메뉴 닫기"
            >
              <XIcon />
            </button>
          </div>

          {/* 전화번호 */}
          <a
            href={`tel:${HOSPITAL.phone.replace(/-/g, '')}`}
            className="flex items-center gap-3 px-5 py-4 bg-primary-muted border-b border-gray-100"
          >
            <PhoneIcon className="w-5 h-5 text-primary" />
            <div>
              <p className="text-xs text-gray-500">대표전화</p>
              <p className="text-base font-bold text-primary">{HOSPITAL.phone}</p>
            </div>
          </a>

          {/* 메뉴 목록 */}
          <nav className="divide-y divide-gray-100">
            {NAV_ITEMS.map((item, idx) => (
              <div key={idx}>
                <button
                  onClick={() => setOpenDropdown(openDropdown === idx ? null : idx)}
                  className="w-full flex items-center justify-between px-5 py-4 text-sm font-semibold
                             text-gray-700 hover:text-primary hover:bg-gray-50 transition-colors"
                >
                  {item.label}
                  <ChevronDownIcon className={`transition-transform duration-200 ${openDropdown === idx ? 'rotate-180' : ''}`} />
                </button>
                {item.children && openDropdown === idx && (
                  <ul className="bg-gray-50 px-4 pb-2">
                    {item.children.map((child, cidx) => (
                      <li key={cidx}>
                        <Link
                          href={child.href}
                          className="block py-2.5 pl-4 text-sm text-gray-600 hover:text-primary
                                     border-b border-gray-100 last:border-0 transition-colors"
                          onClick={() => setMobileOpen(false)}
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </nav>

          {/* 하단 CTA */}
          <div className="p-5 border-t border-gray-100">
            <Link
              href="/community/consult"
              className="btn-accent w-full text-center"
              onClick={() => setMobileOpen(false)}
            >
              온라인 예약·상담
            </Link>
          </div>
        </div>
      </header>

      {/* 모바일 메뉴 오버레이 */}
      {mobileOpen && (
        <div
          className="mobile-menu-overlay lg:hidden"
          onClick={() => setMobileOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  )
}

/* ── 인라인 SVG 아이콘들 ─────────────────────────────────── */
function PhoneIcon({ className = 'w-3.5 h-3.5' }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
    </svg>
  )
}

function ClockIcon() {
  return (
    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <path strokeLinecap="round" d="M12 6v6l4 2" />
    </svg>
  )
}

function ChevronDownIcon({ className = 'w-3.5 h-3.5' }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  )
}

function MenuIcon() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  )
}

function XIcon() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  )
}
