import Link from 'next/link'
import { TREATMENTS } from '@/lib/constants'

/* 치료 분야별 SVG 아이콘 */
const ICONS: Record<string, React.ReactNode> = {
  spine: (
    <svg viewBox="0 0 48 48" className="w-12 h-12" fill="none" aria-hidden="true">
      <circle cx="24" cy="8" r="5" stroke="currentColor" strokeWidth="2.5" />
      <rect x="20" y="15" width="8" height="6" rx="2" stroke="currentColor" strokeWidth="2.5" />
      <rect x="20" y="23" width="8" height="6" rx="2" stroke="currentColor" strokeWidth="2.5" />
      <rect x="20" y="31" width="8" height="6" rx="2" stroke="currentColor" strokeWidth="2.5" />
      <path d="M24 39 v5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  ),
  neck: (
    <svg viewBox="0 0 48 48" className="w-12 h-12" fill="none" aria-hidden="true">
      <circle cx="24" cy="10" r="6" stroke="currentColor" strokeWidth="2.5" />
      <path d="M18 18 C16 24 16 30 18 36" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M30 18 C32 24 32 30 30 36" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <rect x="19" y="18" width="10" height="18" rx="2" stroke="currentColor" strokeWidth="2.5" />
    </svg>
  ),
  canal: (
    <svg viewBox="0 0 48 48" className="w-12 h-12" fill="none" aria-hidden="true">
      <rect x="16" y="8" width="16" height="8" rx="3" stroke="currentColor" strokeWidth="2.5" />
      <rect x="16" y="20" width="16" height="8" rx="3" stroke="currentColor" strokeWidth="2.5" />
      <rect x="16" y="32" width="16" height="8" rx="3" stroke="currentColor" strokeWidth="2.5" />
      <circle cx="24" cy="12" r="2" fill="currentColor" opacity="0.5" />
      <circle cx="24" cy="24" r="2" fill="currentColor" opacity="0.5" />
      <circle cx="24" cy="36" r="2" fill="currentColor" opacity="0.5" />
    </svg>
  ),
  knee: (
    <svg viewBox="0 0 48 48" className="w-12 h-12" fill="none" aria-hidden="true">
      <path d="M20 6 L20 20" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M28 6 L28 20" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <ellipse cx="24" cy="24" rx="8" ry="6" stroke="currentColor" strokeWidth="2.5" />
      <path d="M20 28 L20 44" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M28 28 L28 44" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  ),
  shoulder: (
    <svg viewBox="0 0 48 48" className="w-12 h-12" fill="none" aria-hidden="true">
      <circle cx="24" cy="16" r="7" stroke="currentColor" strokeWidth="2.5" />
      <path d="M8 16 C12 14 18 13 24 16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M40 16 C36 14 30 13 24 16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M8 16 L4 28" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M40 16 L44 28" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M24 23 L24 42" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  ),
  car: (
    <svg viewBox="0 0 48 48" className="w-12 h-12" fill="none" aria-hidden="true">
      <path d="M8 28 L10 18 C10.5 16 12 15 14 15 H34 C36 15 37.5 16 38 18 L40 28" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="6" y="28" width="36" height="10" rx="3" stroke="currentColor" strokeWidth="2.5" />
      <circle cx="15" cy="40" r="4" stroke="currentColor" strokeWidth="2.5" />
      <circle cx="33" cy="40" r="4" stroke="currentColor" strokeWidth="2.5" />
      <path d="M19 40 H29" stroke="currentColor" strokeWidth="2.5" />
      <path d="M14 22 H34" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),
}

const TAG_COLORS: Record<string, string> = {
  척추: 'bg-blue-50 text-blue-700',
  관절: 'bg-green-50 text-green-700',
  클리닉: 'bg-orange-50 text-orange-700',
}

export default function TreatmentSection() {
  return (
    <section className="section-padding bg-gray-50" id="treatment" aria-labelledby="treatment-title">
      <div className="container max-w-[1280px] mx-auto px-4">

        {/* 섹션 헤더 */}
        <div className="section-title">
          <span className="badge">TREATMENT AREAS</span>
          <h2 id="treatment-title">주요 치료분야</h2>
          <p>척추·관절 전문 한방치료로 통증의 근본 원인을 해결합니다</p>
          <div className="section-divider" />
        </div>

        {/* 치료 카드 그리드 */}
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {TREATMENTS.map((item) => (
            <li key={item.id}>
              <Link
                href={item.href}
                className="card flex flex-col h-full p-7 group hover:-translate-y-1 transition-transform duration-300"
                aria-label={`${item.title} 자세히 보기`}
              >
                {/* 아이콘 영역 */}
                <div className="w-16 h-16 rounded-full bg-primary-muted flex items-center justify-center
                                text-primary mb-5 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  {ICONS[item.icon]}
                </div>

                {/* 태그 */}
                <span className={`inline-block self-start text-[11px] font-semibold px-2.5 py-0.5 rounded-full mb-3 ${TAG_COLORS[item.tag]}`}>
                  {item.tag}
                </span>

                {/* 제목 */}
                <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-primary transition-colors duration-200">
                  {item.title}
                </h3>

                {/* 설명 */}
                <p className="text-sm text-gray-500 leading-relaxed flex-1">
                  {item.description}
                </p>

                {/* 더보기 링크 */}
                <div className="mt-5 flex items-center gap-1 text-xs font-semibold text-primary
                                group-hover:gap-2 transition-all duration-200">
                  자세히 보기
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            </li>
          ))}
        </ul>

        {/* 전체 보기 */}
        <div className="text-center mt-10">
          <Link href="/treatment" className="btn-outline-primary">
            치료분야 전체 보기
          </Link>
        </div>
      </div>
    </section>
  )
}
