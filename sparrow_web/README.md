# Harbor & Voyage - Web Application

> Next.js 기반의 시간대 전환형 카페 & 펍 랜딩 페이지

## 빠른 시작

```bash
# 의존성 설치
npm install

# 개발 서버 실행 (http://localhost:3000)
npm run dev

# 프로덕션 빌드
npm run build

# 프로덕션 서버 실행
npm start
```

## 프로젝트 구조

```
src/
├── app/
│   ├── layout.tsx          # 루트 레이아웃
│   ├── page.tsx            # 메인 페이지
│   └── globals.css         # 글로벌 스타일
└── components/
    ├── ThemeProvider.tsx   # 테마 컨텍스트 (다크/라이트 모드)
    ├── layout/
    │   ├── Header.tsx      # 헤더 + 테마 토글 버튼
    │   └── Footer.tsx      # 푸터
    └── sections/
        ├── Hero.tsx        # 히어로 섹션
        ├── About.tsx       # 소개 섹션
        ├── Menu.tsx        # 메뉴 섹션 (탭 전환)
        ├── Events.tsx      # 이벤트 섹션
        ├── Gallery.tsx     # 갤러리 섹션 (Swiper)
        └── Contact.tsx     # 연락처 섹션
```

## 기술 스택

- **Framework**: Next.js 14.2.31 (App Router)
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 3
- **Animation**: Framer Motion
- **Slider**: Swiper.js
- **Icons**: Lucide React

## 주요 기능

### 다크/라이트 모드

- 자동 감지: `prefers-color-scheme`
- 수동 전환: 헤더 토글 버튼
- LocalStorage 저장

### 반응형 디자인

- Mobile: 320px~767px
- Tablet: 768px~1023px
- Desktop: 1024px+

### 섹션 구성

1. **Hero**: 메인 비주얼 + CTA
2. **About**: 브랜드 스토리
3. **Menu**: 낮/밤 메뉴 탭 전환
4. **Events**: 이벤트/프로모션
5. **Gallery**: 낮/밤 비교 슬라이더
6. **Contact**: 지도, 운영시간, SNS

## 배포

### Surge 배포

```bash
# 1. 정적 빌드
npm run build

# 2. 200.html 생성 (SPA 라우팅)
cp out/index.html out/200.html

# 3. Surge 배포
npx surge ./out sparrow-cafe.surge.sh
```

### Vercel 배포 (권장)

```bash
# Vercel CLI 설치
npm i -g vercel

# 배포
vercel --prod
```

## 환경 변수

`.env.local` 파일 생성:

```bash
# Google Maps API (선택)
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_api_key_here
```

## 개발 가이드

### 컴포넌트 추가

```typescript
// src/components/sections/NewSection.tsx
'use client'

export default function NewSection() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        {/* 컨텐츠 */}
      </div>
    </section>
  )
}
```

### 테마 사용

```typescript
'use client'
import { useTheme } from '@/components/ThemeProvider'

export default function Component() {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className={theme === 'dark' ? 'dark-style' : 'light-style'}>
      {/* 컨텐츠 */}
    </div>
  )
}
```

### Tailwind 다크 모드

```tsx
<div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
  다크 모드 지원 텍스트
</div>
```

## 트러블 슈팅

자세한 내용은 [트러블슈팅 문서](../트러블슈팅.md)를 참고하세요.

### 빠른 해결책

**Hot Reload 안 됨**

```bash
rm -rf .next
npm run dev
```

**빌드 에러**

```bash
rm -rf .next node_modules
npm install
npm run build
```

## 참고 문서

- [프로젝트 메인 README](../README.md)
- [요구사항 정의서](../요구사항정의서.md)
- [트러블 슈팅](../트러블슈팅.md)
- [기획서](../기획.txt)

## 라이선스

개인 포트폴리오 프로젝트
