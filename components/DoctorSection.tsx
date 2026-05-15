import Link from 'next/link'
import { DOCTORS } from '@/lib/constants'

export default function DoctorSection() {
  return (
    <section
      className="section-padding bg-gray-50"
      id="doctors"
      aria-labelledby="doctor-title"
    >
      <div className="container max-w-[1280px] mx-auto px-4">

        {/* 섹션 헤더 */}
        <div className="section-title">
          <span className="badge">MEDICAL STAFF</span>
          <h2 id="doctor-title">의료진 소개</h2>
          <p>풍부한 임상경험을 가진 전문 한의사가 진료합니다</p>
          <div className="section-divider" />
        </div>

        {/* 의료진 카드 그리드 */}
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {DOCTORS.map((doctor) => (
            <li key={doctor.id}>
              <div className="card overflow-hidden group">

                {/* 사진 영역 */}
                {/* TODO: 실제 의료진 사진으로 교체 — public/images/doctors/doctor{id}.jpg */}
                <div className="aspect-[3/4] bg-gradient-to-b from-primary-muted to-primary/10
                                flex flex-col items-center justify-center relative overflow-hidden">
                  <svg className="w-24 h-24 text-primary/30" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
                  </svg>
                  <p className="mt-3 text-primary/50 text-xs font-medium">의료진 사진 교체 예정</p>

                  {/* 호버 오버레이 */}
                  <div className="absolute inset-0 bg-primary/80 flex flex-col items-center justify-center
                                  opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6">
                    <ul className="text-white text-sm space-y-2 text-center">
                      {doctor.credentials.map((c, i) => (
                        <li key={i} className="flex items-start gap-2 text-left">
                          <span className="text-accent mt-0.5 shrink-0">✓</span>
                          <span>{c}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* 정보 */}
                <div className="p-5 text-center border-t-2 border-primary">
                  <p className="text-xs text-gray-400 mb-1">{doctor.specialty}</p>
                  <h3 className="text-xl font-black text-gray-800 mb-1">{doctor.name}</h3>
                  <p className="text-sm text-primary font-medium">{doctor.title}</p>

                  {/* 약력 (작은 화면에서는 간략히) */}
                  <ul className="mt-4 text-left space-y-1.5 md:hidden">
                    {doctor.credentials.map((c, i) => (
                      <li key={i} className="flex items-start gap-1.5 text-xs text-gray-500">
                        <span className="text-primary shrink-0">·</span>
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>
          ))}
        </ul>

        {/* 전체 보기 */}
        <div className="text-center mt-10">
          <Link href="/about/doctors" className="btn-outline-primary">
            의료진 전체 소개
          </Link>
        </div>

      </div>
    </section>
  )
}
