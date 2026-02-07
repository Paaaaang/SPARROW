import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Harbor & Voyage | 하루에 두 번 시작되는 곳',
  description: '낮과 밤, 두 개의 세계를 품은 시간대 전환형 카페 & 펍',
  keywords: ['카페', '펍', 'Harbor', 'Voyage', '브랜딩', '랜딩페이지'],
  openGraph: {
    title: 'Harbor & Voyage',
    description: '하루에 두 번 시작되는 곳, 당신의 항해가 시작됩니다',
    url: 'https://sparrow-cafe.surge.sh',
    siteName: 'Harbor & Voyage',
    locale: 'ko_KR',
    type: 'website',
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
