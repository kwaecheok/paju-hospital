import Link from 'next/link'
import { NOTICES, REVIEWS } from '@/lib/constants'

export default function NoticeSection() {
  return (
    <section className="section-padding bg-white" id="notice" aria-label="공지사항 및 치료후기">
      <div className="container max-w-[1280px] mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* ── 공지사항 ── */}
          <div>
            <div className="flex items-center justify-between mb-6">
              <div>
                <span className="badge block mb-1">NOTICE</span>
                <h2 className="text-2xl font-bold text-gray-800">공지사항</h2>
              </div>
              <Link
                href="/community/notice"
                className="text-xs text-gray-400 hover:text-primary flex items-center gap-1 transition-colors"
                aria-label="공지사항 전체 보기"
              >
                더보기
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            <ul className="divide-y divide-gray-100 border-t-2 border-primary">
              {NOTICES.map((notice) => (
                <li key={notice.id}>
                  <Link
                    href={`/community/notice/${notice.id}`}
                    className="flex items-center justify-between py-4 group"
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      {notice.isNew && (
                        <span className="shrink-0 text-[10px] font-bold bg-accent text-white px-1.5 py-0.5 rounded-sm leading-none">
                          NEW
                        </span>
                      )}
                      <span className="text-sm text-gray-700 truncate group-hover:text-primary transition-colors">
                        {notice.title}
                      </span>
                    </div>
                    <span className="shrink-0 text-xs text-gray-400 ml-4">{notice.date}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── 치료후기 ── */}
          <div>
            <div className="flex items-center justify-between mb-6">
              <div>
                <span className="badge block mb-1">REVIEW</span>
                <h2 className="text-2xl font-bold text-gray-800">치료후기</h2>
              </div>
              <Link
                href="/community/review"
                className="text-xs text-gray-400 hover:text-primary flex items-center gap-1 transition-colors"
                aria-label="치료후기 전체 보기"
              >
                더보기
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            <ul className="divide-y divide-gray-100 border-t-2 border-primary">
              {REVIEWS.map((review) => (
                <li key={review.id}>
                  <Link
                    href={`/community/review/${review.id}`}
                    className="flex items-center justify-between py-4 group"
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      {/* 별점 아이콘 */}
                      <span className="shrink-0 text-accent text-sm" aria-hidden="true">★★★★★</span>
                      <span className="text-sm text-gray-700 truncate group-hover:text-primary transition-colors">
                        {review.title}
                      </span>
                    </div>
                    <div className="shrink-0 ml-4 text-right">
                      <span className="block text-xs text-gray-400">{review.date}</span>
                      <span className="block text-[10px] text-gray-300">조회 {review.views}</span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  )
}
