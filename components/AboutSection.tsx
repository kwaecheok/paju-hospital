import Link from 'next/link'

const STATS = [
  { value: '20+', label: '년 임상 경력' },
  { value: '50,000+', label: '누적 진료 환자' },
  { value: '3명', label: '전문 의료진' },
  { value: '건강보험', label: '추나요법 적용' },
]

const FEATURES = [
  {
    title: '정확한 진단',
    desc: '첨단 장비와 풍부한 임상경험을 바탕으로 통증의 근본 원인을 정확하게 진단합니다.',
    icon: '🔍',
  },
  {
    title: '맞춤형 치료',
    desc: '환자 개인의 체질과 증상에 맞는 1:1 맞춤 한방 치료 계획을 수립합니다.',
    icon: '💊',
  },
  {
    title: '비수술 치료',
    desc: '가능하면 수술 없이 침·추나·한약 등 자연치유 방식으로 회복을 돕습니다.',
    icon: '✨',
  },
  {
    title: '지속적 관리',
    desc: '치료 후에도 재발 방지를 위한 생활습관 교정과 운동 지도를 지속합니다.',
    icon: '♻️',
  },
]

export default function AboutSection() {
  return (
    <section className="section-padding bg-white" id="about" aria-labelledby="about-title">
      <div className="container max-w-[1280px] mx-auto px-4">

        {/* 상단: 이미지 + 소개 텍스트 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">

          {/* 좌측: 이미지 placeholder */}
          <div className="relative order-2 lg:order-1">
            {/* TODO: 실제 병원 내부·외관 사진으로 교체 — public/images/about/hospital-main.jpg */}
            <div className="aspect-[4/3] bg-gradient-to-br from-primary-muted to-primary/20
                            rounded-sm flex items-center justify-center overflow-hidden">
              <div className="text-center text-primary/40 p-8">
                <svg className="w-20 h-20 mx-auto mb-4" fill="none" stroke="currentColor" strokeWidth={1} viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                <p className="text-sm font-medium">병원 내부 사진</p>
                <p className="text-xs mt-1">실제 사진으로 교체 예정</p>
              </div>
            </div>

            {/* 장식 배지 */}
            <div className="absolute -bottom-5 -right-5 w-28 h-28 bg-primary rounded-full flex flex-col items-center justify-center text-white shadow-lg hidden md:flex">
              <span className="text-2xl font-black leading-none">20<span className="text-sm font-medium">년+</span></span>
              <span className="text-xs text-white/80 mt-1 text-center leading-tight">풍부한<br/>임상경험</span>
            </div>
          </div>

          {/* 우측: 텍스트 */}
          <div className="order-1 lg:order-2">
            <span className="badge">ABOUT US</span>
            <h2 id="about-title" className="text-3xl md:text-4xl font-black text-gray-800 leading-tight mb-5">
              척추·관절 전문<br />
              <span className="text-primary">파주쾌척한방병원</span>입니다
            </h2>
            {/* TODO: 실제 병원 소개 문구로 교체 */}
            <p className="text-gray-600 leading-relaxed mb-4">
              파주쾌척한방병원은 2000년대 초부터 경기 파주 지역에서 척추·관절 전문 한방병원으로
              지역민의 건강을 책임져 왔습니다. 오랜 임상경험과 지속적인 연구를 통해 검증된
              한방 치료법으로 수많은 환자분들이 통증에서 회복하셨습니다.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              단순한 증상 완화에 그치지 않고, 근본 원인을 찾아 치료하는 것을 원칙으로 합니다.
              환자 한 분 한 분의 체질과 생활 환경을 면밀히 파악하여 최적의 치료 방향을 제시합니다.
            </p>

            <div className="flex flex-wrap gap-3">
              <Link href="/about" className="btn-primary">병원소개 자세히 보기</Link>
              <a href="tel:03193950737" className="btn-outline-primary">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                031-939-5737
              </a>
            </div>
          </div>
        </div>

        {/* 통계 */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-gray-200 rounded-sm overflow-hidden mb-20">
          {STATS.map((stat) => (
            <div key={stat.label} className="bg-white flex flex-col items-center justify-center py-10 px-4">
              <span className="text-3xl md:text-4xl font-black text-primary leading-none mb-2">
                {stat.value}
              </span>
              <span className="text-sm text-gray-500 text-center">{stat.label}</span>
            </div>
          ))}
        </div>

        {/* 특징 4가지 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURES.map((f) => (
            <div key={f.title} className="text-center p-6 rounded-sm border border-gray-100 hover:border-primary/30 hover:shadow-sm transition-all duration-300">
              <div className="text-4xl mb-4" aria-hidden="true">{f.icon}</div>
              <h3 className="text-base font-bold text-gray-800 mb-2">{f.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
