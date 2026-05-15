import Link from 'next/link'
import { HOSPITAL } from '@/lib/constants'

export default function ConsultationSection() {
  return (
    <section
      className="relative py-20 overflow-hidden bg-primary"
      aria-label="온라인 예약 및 상담"
    >
      {/* 배경 장식 */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-white/5" />
        <div className="absolute -bottom-20 -left-20 w-96 h-96 rounded-full bg-white/5" />
        <div className="absolute top-1/2 left-1/4 w-40 h-40 rounded-full bg-white/3" />
      </div>

      <div className="relative container max-w-[1280px] mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* 좌측: 문구 */}
          <div className="text-white text-center lg:text-left">
            <span className="inline-block text-xs font-bold tracking-widest uppercase text-accent mb-4">
              RESERVATION & CONSULTATION
            </span>
            <h2 className="text-3xl md:text-4xl font-black leading-tight mb-4">
              지금 바로 예약·상담하세요
            </h2>
            <p className="text-white/80 text-base leading-relaxed mb-8">
              전화 또는 온라인으로 편리하게 예약하세요.<br className="hidden md:block" />
              전문 의료진이 빠르게 답변드립니다.
            </p>

            {/* 진료시간 */}
            <div className="inline-flex flex-col gap-2 text-sm text-white/70 text-left">
              {[
                { label: '평   일', time: '09:00 ~ 18:00' },
                { label: '토요일', time: '09:00 ~ 13:00' },
                { label: '점심시간', time: '13:00 ~ 14:00' },
              ].map((h) => (
                <div key={h.label} className="flex items-center gap-3">
                  <span className="font-medium text-white/50 w-16">{h.label}</span>
                  <span className="font-semibold text-white">{h.time}</span>
                </div>
              ))}
              <p className="text-xs text-white/40 mt-1">일요일·공휴일 휴진</p>
            </div>
          </div>

          {/* 우측: 행동 버튼들 */}
          <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-4 justify-center lg:justify-start">

            {/* 전화 예약 */}
            <a
              href={`tel:${HOSPITAL.phone.replace(/-/g, '')}`}
              className="flex-1 flex items-center gap-4 bg-white/10 hover:bg-white/20 border border-white/20
                         rounded-sm p-6 text-white transition-colors duration-200 group"
              aria-label={`전화 예약 ${HOSPITAL.phone}`}
            >
              <div className="w-12 h-12 rounded-full bg-white/15 flex items-center justify-center shrink-0
                              group-hover:bg-accent group-hover:text-white transition-colors duration-200">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-white/60 mb-0.5">전화 예약</p>
                <p className="text-xl font-black tracking-wide">{HOSPITAL.phone}</p>
                <p className="text-xs text-white/50 mt-0.5">바로 연결됩니다</p>
              </div>
            </a>

            {/* 온라인 예약 */}
            <Link
              href="/community/consult"
              className="flex-1 flex items-center gap-4 bg-accent hover:bg-accent-dark
                         rounded-sm p-6 text-white transition-colors duration-200 group"
            >
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-white/80 mb-0.5">온라인 예약·상담</p>
                <p className="text-lg font-black">지금 신청하기</p>
                <p className="text-xs text-white/70 mt-0.5">24시간 접수 가능</p>
              </div>
            </Link>

          </div>
        </div>
      </div>
    </section>
  )
}
