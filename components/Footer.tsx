import Link from 'next/link'
import { HOSPITAL, NAV_ITEMS } from '@/lib/constants'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white" aria-label="푸터">

      {/* ── 상단 링크 영역 ─────────────────────────────── */}
      <div className="border-b border-white/10">
        <div className="container max-w-[1280px] mx-auto px-4 py-10">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {NAV_ITEMS.map((item) => (
              <div key={item.label}>
                <h3 className="text-sm font-bold text-white mb-3 pb-2 border-b border-white/10">
                  <Link href={item.href} className="hover:text-accent transition-colors">
                    {item.label}
                  </Link>
                </h3>
                {item.children && (
                  <ul className="space-y-1.5">
                    {item.children.map((child) => (
                      <li key={child.label}>
                        <Link
                          href={child.href}
                          className="text-xs text-white/50 hover:text-white/90 transition-colors leading-relaxed"
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── 하단 병원 정보 ────────────────────────────── */}
      <div className="container max-w-[1280px] mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">

          {/* 로고 + 정보 */}
          <div>
            {/* 로고 */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 bg-primary rounded-sm flex items-center justify-center shrink-0">
                <span className="text-white font-black text-base leading-none">쾌</span>
              </div>
              <div className="leading-tight">
                <span className="block text-[10px] text-white/30 tracking-widest uppercase">ORIENTAL MEDICINE HOSPITAL</span>
                <span className="block text-sm font-black text-white leading-none mt-0.5">{HOSPITAL.name}</span>
              </div>
            </div>

            {/* 병원 정보 텍스트 */}
            <address className="not-italic text-xs text-white/40 leading-relaxed space-y-1">
              <p>
                <span className="text-white/60 font-medium">주   소 </span>
                {HOSPITAL.address}
              </p>
              <p>
                <span className="text-white/60 font-medium">대표전화 </span>
                <a href={`tel:${HOSPITAL.phone.replace(/-/g, '')}`} className="hover:text-white/80 transition-colors">
                  {HOSPITAL.phone}
                </a>
              </p>
              {/* TODO: 대표자명, 사업자등록번호를 실제 정보로 교체하세요 */}
              <p>
                <span className="text-white/60 font-medium">대 표 자 </span>
                ○○○ (한의사 면허 제○○○○○호)
              </p>
              <p>
                <span className="text-white/60 font-medium">사업자등록번호 </span>
                ○○○-○○-○○○○○
              </p>
            </address>
          </div>

          {/* 진료시간 */}
          <div className="text-xs text-white/40">
            <h4 className="text-white/60 font-bold mb-2.5 text-sm">진료시간</h4>
            <dl className="space-y-1.5">
              {HOSPITAL.operatingHours.map((h) => (
                <div key={h.label} className="flex gap-4">
                  <dt className="w-18 text-white/40">{h.label}</dt>
                  <dd className="text-white/70 font-medium">{h.time}</dd>
                </div>
              ))}
              <div className="pt-1 text-white/30">{HOSPITAL.closedDays}</div>
            </dl>
          </div>

          {/* 바로가기 */}
          <div className="flex flex-col gap-2 shrink-0">
            <a
              href={`tel:${HOSPITAL.phone.replace(/-/g, '')}`}
              className="flex items-center gap-2 px-4 py-2.5 bg-primary hover:bg-primary-dark
                         rounded-sm text-white text-sm font-semibold transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              {HOSPITAL.phone}
            </a>
            <Link
              href="/community/consult"
              className="flex items-center gap-2 px-4 py-2.5 bg-accent hover:bg-accent-dark
                         rounded-sm text-white text-sm font-semibold transition-colors text-center justify-center"
            >
              온라인 예약·상담
            </Link>
            <a
              href={HOSPITAL.naverMapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 bg-white/10 hover:bg-white/20
                         rounded-sm text-white/80 text-sm transition-colors justify-center"
            >
              오시는 길 보기
            </a>
          </div>
        </div>
      </div>

      {/* ── 카피라이트 ────────────────────────────────── */}
      <div className="border-t border-white/10">
        <div className="container max-w-[1280px] mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-white/30">
            Copyright © {currentYear} {HOSPITAL.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs text-white/30">
            <Link href="/privacy" className="hover:text-white/60 transition-colors">개인정보처리방침</Link>
            <Link href="/terms" className="hover:text-white/60 transition-colors">이용약관</Link>
          </div>
        </div>
      </div>

    </footer>
  )
}
