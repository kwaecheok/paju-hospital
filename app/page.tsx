import Header from '@/components/Header'
import Hero from '@/components/Hero'
import QuickMenu from '@/components/QuickMenu'
import TreatmentSection from '@/components/TreatmentSection'
import AboutSection from '@/components/AboutSection'
import DoctorSection from '@/components/DoctorSection'
import NoticeSection from '@/components/NoticeSection'
import ConsultationSection from '@/components/ConsultationSection'
import LocationSection from '@/components/LocationSection'
import Footer from '@/components/Footer'

export default function HomePage() {
  return (
    <>
      {/* 접근성 — 키보드 사용자를 위한 본문 바로가기 */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100]
                   focus:bg-primary focus:text-white focus:px-4 focus:py-2 focus:rounded"
      >
        본문 바로가기
      </a>

      <Header />

      <main id="main-content">
        {/* 1. 메인 비주얼 슬라이더 */}
        <Hero />

        {/* 2. 빠른 메뉴 */}
        <QuickMenu />

        {/* 3. 주요 치료분야 */}
        <TreatmentSection />

        {/* 4. 병원 소개 */}
        <AboutSection />

        {/* 5. 의료진 소개 */}
        <DoctorSection />

        {/* 6. 공지사항 & 치료후기 */}
        <NoticeSection />

        {/* 7. 예약·상담 CTA */}
        <ConsultationSection />

        {/* 8. 오시는 길 */}
        <LocationSection />
      </main>

      <Footer />
    </>
  )
}
