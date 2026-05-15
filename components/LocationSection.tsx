import { HOSPITAL } from '@/lib/constants'

const TRANSPORTS = [
  {
    type: '버스',
    icon: '🚌',
    lines: [
      /* TODO: 실제 버스 노선으로 교체 */
      { label: '정류장', value: '파주시청 방면 ○○정류장 하차' },
      { label: '노선', value: '○○번, ○○번, ○○번 (임시 데이터)' },
    ],
  },
  {
    type: '지하철',
    icon: '🚇',
    lines: [
      /* TODO: 실제 지하철 노선으로 교체 */
      { label: '노선', value: '경의중앙선 ○○역 하차' },
      { label: '이동', value: '도보 약 ○분 또는 택시 이용' },
    ],
  },
  {
    type: '자가용',
    icon: '🚗',
    lines: [
      { label: '주소', value: HOSPITAL.address },
      { label: '주차', value: '건물 내 무료주차 가능 (○대)' /* TODO: 실제 주차 안내로 교체 */ },
    ],
  },
]

export default function LocationSection() {
  return (
    <section
      className="section-padding bg-gray-50"
      id="location"
      aria-labelledby="location-title"
    >
      <div className="container max-w-[1280px] mx-auto px-4">

        {/* 섹션 헤더 */}
        <div className="section-title">
          <span className="badge">DIRECTIONS</span>
          <h2 id="location-title">오시는 길</h2>
          <p>{HOSPITAL.address}</p>
          <div className="section-divider" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">

          {/* 지도 영역 */}
          <div className="lg:col-span-3">
            {/*
              TODO: 아래 div를 실제 네이버 지도 iframe으로 교체하세요.
              예시:
              <iframe
                src="https://map.naver.com/v5/embed?type=place&lat=37.xxx&lng=126.xxx&zoom=15"
                width="100%"
                height="400"
                frameBorder="0"
                title="쾌척한방병원 위치"
              />
            */}
            <div className="w-full aspect-video bg-gradient-to-br from-gray-200 to-gray-300 rounded-sm
                            flex flex-col items-center justify-center text-gray-500 min-h-[300px]">
              <svg className="w-16 h-16 mb-3 text-gray-400" fill="none" stroke="currentColor" strokeWidth={1} viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
              </svg>
              <p className="text-sm font-medium">지도 영역</p>
              <p className="text-xs mt-1 text-gray-400">네이버 지도 iframe으로 교체하세요</p>
              <a
                href={HOSPITAL.naverMapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 text-xs px-4 py-2 bg-[#03C75A] text-white rounded-sm hover:bg-[#02a34d] transition-colors font-medium"
              >
                네이버 지도에서 보기
              </a>
            </div>
          </div>

          {/* 정보 영역 */}
          <div className="lg:col-span-2 flex flex-col gap-6">

            {/* 주소 + 전화 */}
            <div className="bg-white rounded-sm p-6 border border-gray-100">
              <h3 className="text-sm font-bold text-primary mb-4 pb-3 border-b border-gray-100">
                병원 정보
              </h3>
              <dl className="space-y-3 text-sm">
                <div className="flex gap-3">
                  <dt className="shrink-0 font-semibold text-gray-500 w-14">주   소</dt>
                  <dd className="text-gray-700">{HOSPITAL.address}</dd>
                </div>
                <div className="flex gap-3">
                  <dt className="shrink-0 font-semibold text-gray-500 w-14">전   화</dt>
                  <dd>
                    <a href={`tel:${HOSPITAL.phone.replace(/-/g, '')}`}
                       className="text-primary font-bold hover:underline">
                      {HOSPITAL.phone}
                    </a>
                  </dd>
                </div>
              </dl>
            </div>

            {/* 진료시간 */}
            <div className="bg-white rounded-sm p-6 border border-gray-100">
              <h3 className="text-sm font-bold text-primary mb-4 pb-3 border-b border-gray-100">
                진료시간
              </h3>
              <dl className="space-y-2.5 text-sm">
                {HOSPITAL.operatingHours.map((h) => (
                  <div key={h.label} className="flex items-center gap-3">
                    <dt className="shrink-0 font-semibold text-gray-500 w-20">{h.label}</dt>
                    <dd className="font-semibold text-gray-800">{h.time}</dd>
                  </div>
                ))}
                <div className="mt-3 pt-3 border-t border-gray-100">
                  <p className="text-xs text-gray-400">{HOSPITAL.closedDays}</p>
                </div>
              </dl>
            </div>

            {/* 교통편 */}
            <div className="bg-white rounded-sm p-6 border border-gray-100">
              <h3 className="text-sm font-bold text-primary mb-4 pb-3 border-b border-gray-100">
                교통 안내
              </h3>
              <div className="space-y-4">
                {TRANSPORTS.map((t) => (
                  <div key={t.type}>
                    <div className="flex items-center gap-2 mb-1.5">
                      <span aria-hidden="true">{t.icon}</span>
                      <span className="text-xs font-bold text-gray-700">{t.type}</span>
                    </div>
                    <dl className="pl-6 space-y-1">
                      {t.lines.map((l) => (
                        <div key={l.label} className="flex gap-2 text-xs text-gray-500">
                          <dt className="shrink-0 text-gray-400 w-10">{l.label}</dt>
                          <dd>{l.value}</dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
