import type { Metadata } from 'next'
import './globals.css'
import { HOSPITAL } from '@/lib/constants'

export const metadata: Metadata = {
  title: {
    default: `${HOSPITAL.name} | 척추·관절 전문 한방병원`,
    template: `%s | ${HOSPITAL.name}`,
  },
  description: HOSPITAL.description,
  keywords: HOSPITAL.keywords,
  openGraph: {
    title: `${HOSPITAL.name} | 척추·관절 전문 한방병원`,
    description: HOSPITAL.description,
    locale: 'ko_KR',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  )
}
