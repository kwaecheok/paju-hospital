'use client'

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import { HOSPITAL } from '@/lib/constants'

const SLIDES = [
  {
    id: 1,
    /* TODO: 실제 병원 메인 이미지로 교체 — public/images/hero/slide1.jpg */
    bgClass: 'bg-gradient-to-br from-[#0a2e26] via-[#1B5E52] to-[#0f3d35]',
    badge: '척추·관절 전문',
    title: ['파주쾌척한방병원과', '함께 건강을 되찾으세요'],
    subtitle: '20년 이상의 임상경험과 체계적인 한방 진료로\n허리·목·관절 통증의 근본 원인을 치료합니다.',
    cta1: { label: '진료 예약하기', href: '/community/consult' },
    cta2: { label: '치료분야 보기', href: '/treatment' },
    accent: '#D4860A',
  },
  {
    id: 2,
    /* TODO: 실제 치료 장면 이미지로 교체 — public/images/hero/slide2.jpg */
    bgClass: 'bg-gradient-to-br from-[#0d2340] via-[#1a3d6e] to-[#0f2a4d]',
    badge: '한방치료 전문',
    title: ['자연치유의 힘,', '한방의학으로 되찾다'],
    subtitle: '침치료·한약·추나요법·봉침 등 다양한 한방 치료로\n부작용 없이 근본적인 원인을 해결합니다.',
    cta1: { label: '한방 치료 알아보기', href: '/treatment' },
    cta2: { label: '온라인 상담', href: '/community/consult' },
    accent: '#4CAF84',
  },
  {
    id: 3,
    /* TODO: 실제 병원 내부·의료진 이미지로 교체 — public/images/hero/slide3.jpg */
    bgClass: 'bg-gradient-to-br from-[#2d1200] via-[#6b3a10] to-[#3a1f00]',
    badge: '교통사고 전문',
    title: ['사고 후 남은 통증,', '더 이상 참지 마세요'],
    subtitle: '교통사고 후유증 한방 집중치료로 빠른 회복을 도와드립니다.\n자동차보험 적용으로 환자 부담 최소화.',
    cta1: { label: '교통사고 클리닉', href: '/clinic/traffic' },
    cta2: { label: '의료진 소개', href: '/about/doctors' },
    accent: '#E87050',
  },
]

const AUTO_PLAY_INTERVAL = 5000

export default function Hero() {
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % SLIDES.length)
  }, [])

  const prev = useCallback(() => {
    setCurrent((c) => (c - 1 + SLIDES.length) % SLIDES.length)
  }, [])

  /* 자동 슬라이드 */
  useEffect(() => {
    if (paused) return
    const timer = setInterval(next, AUTO_PLAY_INTERVAL)
    return () => clearInterval(timer)
  }, [next, paused])

  const slide = SLIDES[current]

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ height: 'clamp(460px, 65vw, 720px)' }}
      aria-label="메인 슬라이더"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* 슬라이드 배경 */}
      {SLIDES.map((s, idx) => (
        <div
          key={s.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${s.bgClass} ${
            idx === current ? 'opacity-100' : 'opacity-0'
          }`}
          aria-hidden={idx !== current}
        >
          {/* 패턴 오버레이 (실제 이미지 대체용) */}
          <div className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `radial-gradient(circle at 25% 50%, rgba(255,255,255,0.15) 0%, transparent 50%),
                                radial-gradient(circle at 75% 30%, rgba(255,255,255,0.08) 0%, transparent 40%)`,
            }}
          />
          {/* 하단 그라데이션 (텍스트 가독성) */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
        </div>
      ))}

      {/* 콘텐츠 */}
      <div className="relative z-10 h-full container max-w-[1280px] mx-auto px-4 flex items-center">
        <div className="max-w-2xl text-white">
          {/* 배지 */}
          <span
            className="inline-block text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-5"
            style={{ backgroundColor: slide.accent, color: '#fff' }}
          >
            {slide.badge}
          </span>

          {/* 제목 */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-black leading-tight mb-5 text-shadow">
            {slide.title.map((line, i) => (
              <span key={i} className="block">
                {i === 0 ? line : <span style={{ color: slide.accent }}>{line}</span>}
              </span>
            ))}
          </h1>

          {/* 부제 */}
          <p className="text-sm sm:text-base md:text-lg text-white/85 leading-relaxed mb-8 whitespace-pre-line text-shadow-sm">
            {slide.subtitle}
          </p>

          {/* CTA 버튼 */}
          <div className="flex flex-wrap gap-3">
            <Link
              href={slide.cta1.href}
              className="inline-flex items-center gap-2 px-6 py-3.5 font-bold text-sm rounded-sm text-white transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5"
              style={{ backgroundColor: slide.accent }}
            >
              {slide.cta1.label}
              <ArrowRightIcon />
            </Link>
            <Link
              href={slide.cta2.href}
              className="btn-outline text-sm px-6 py-3.5 rounded-sm"
            >
              {slide.cta2.label}
            </Link>
          </div>

          {/* 연락처 */}
          <div className="mt-8 flex items-center gap-2 text-white/70 text-sm">
            <PhoneIcon />
            <a href={`tel:${HOSPITAL.phone.replace(/-/g, '')}`} className="hover:text-white transition-colors font-semibold">
              {HOSPITAL.phone}
            </a>
            <span className="text-white/40 mx-1">|</span>
            <span>{HOSPITAL.address}</span>
          </div>
        </div>
      </div>

      {/* 이전/다음 버튼 */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12
                   bg-white/15 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center
                   text-white transition-colors duration-200"
        aria-label="이전 슬라이드"
      >
        <ChevronLeftIcon />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12
                   bg-white/15 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center
                   text-white transition-colors duration-200"
        aria-label="다음 슬라이드"
      >
        <ChevronRightIcon />
      </button>

      {/* 도트 인디케이터 */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2.5">
        {SLIDES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`rounded-full transition-all duration-300 ${
              idx === current
                ? 'w-8 h-2.5 bg-white'
                : 'w-2.5 h-2.5 bg-white/40 hover:bg-white/70'
            }`}
            aria-label={`슬라이드 ${idx + 1}`}
            aria-current={idx === current}
          />
        ))}
      </div>

      {/* 진행 바 */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white/20 z-20">
        <div
          key={`${current}-${paused}`}
          className="h-full bg-white/70"
          style={{
            animation: paused ? 'none' : `slideProgress ${AUTO_PLAY_INTERVAL}ms linear forwards`,
          }}
        />
      </div>

      <style jsx>{`
        @keyframes slideProgress {
          from { width: 0%; }
          to { width: 100%; }
        }
      `}</style>
    </section>
  )
}

function ArrowRightIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
    </svg>
  )
}

function PhoneIcon() {
  return (
    <svg className="w-4 h-4 text-white/60" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
    </svg>
  )
}

function ChevronLeftIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
    </svg>
  )
}

function ChevronRightIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
    </svg>
  )
}
