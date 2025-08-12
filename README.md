# Harbor & Voyage - 하루가 두 번 시작되는 곳

Harbor & Voyage는 낮에는 편안한 휴식의 카페, 밤에는 몰입감 있는 사교의 펍으로 변화하는 **시간대 전환형 문화공간**의 랜딩 페이지입니다.

## 🌟 프로젝트 개요

- **컨셉**: 도심 속에서 낮과 밤, 두 개의 일상을 경험할 수 있는 공간
- **포지션**: Day & Night Lifestyle, Urban Hideout, Culture & Lounge
- **스토리**: 바다로 나서기 전 선원들이 모이는 항구 카페에서, 해가 지면 모험담을 나누는 펍으로 전환

## 🎨 디자인 시스템

### 컬러 팔레트
- **라이트 모드 (낮)**: 오프화이트, 스카이블루, 올리브그린, 샌드베이지
- **다크 모드 (밤)**: 딥네이비, 미드나잇블루, 골드, 네온블루

### 폰트
- **타이틀/헤드라인**: Playfair Display (Serif)
- **본문/설명**: Pretendard, Noto Sans KR (Sans-serif)

## 🛠 기술 스택

### Frontend
- **Framework**: Next.js 14 (React 18)
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion
- **Icons**: Lucide React
- **Language**: TypeScript

### Features
- ✅ 라이트/다크 테마 자동 및 수동 전환
- ✅ 반응형 디자인 (PC, 태블릿, 모바일)
- ✅ 부드러운 애니메이션 및 인터랙션
- ✅ SEO 최적화
- ✅ 접근성 고려 (WCAG 준수)

## 📱 섹션 구성

1. **Hero**: 메인 비주얼과 시간대별 컨셉 소개
2. **About**: 브랜드 스토리와 공간 철학
3. **Menu**: 낮/밤 메뉴 탭 전환
4. **Events**: 정기 이벤트 및 예약 폼
5. **Gallery**: 낮/밤 비교 갤러리
6. **Contact**: 위치, 연락처, 지도 정보

## 🚀 시작하기

### 필요 조건
- Node.js 18+ 
- npm 또는 yarn

### 설치 및 실행

1. 저장소 클론
```bash
git clone [repository-url]
cd harbor-voyage
```

2. 의존성 설치
```bash
npm install
# 또는
yarn install
```

3. 개발 서버 실행
```bash
npm run dev
# 또는
yarn dev
```

4. 브라우저에서 [http://localhost:3000](http://localhost:3000) 접속

### 빌드

```bash
npm run build
npm start
```

## 📁 프로젝트 구조

```
harbor-voyage/
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   └── components/
│       ├── layout/
│       │   ├── Header.tsx
│       │   └── Footer.tsx
│       ├── sections/
│       │   ├── Hero.tsx
│       │   ├── About.tsx
│       │   ├── Menu.tsx
│       │   ├── Events.tsx
│       │   ├── Gallery.tsx
│       │   └── Contact.tsx
│       └── ThemeProvider.tsx
├── public/
├── tailwind.config.js
├── next.config.js
├── package.json
└── README.md
```

## 🎯 주요 기능

### 테마 전환
- 시스템 테마 자동 감지
- 헤더의 토글 버튼으로 수동 전환
- 로컬스토리지에 설정 저장
- 부드러운 전환 애니메이션

### 반응형 디자인
- 모바일 퍼스트 접근
- 태블릿, 데스크톱 최적화
- 터치 친화적 인터페이스

### 애니메이션
- Framer Motion 기반 스크롤 애니메이션
- 호버 효과 및 마이크로 인터랙션
- 테마 전환 시 부드러운 효과

## 🔧 커스터마이징

### 색상 변경
`tailwind.config.js`에서 컬러 팔레트 수정:

```javascript
colors: {
  light: {
    bg: '#FDFCF7',
    primary: '#A3B18A',
    // ...
  },
  dark: {
    bg: '#0D1B2A',
    primary: '#FFD166',
    // ...
  }
}
```

### 컨텐츠 수정
각 섹션 컴포넌트에서 텍스트, 이미지, 링크 등을 수정할 수 있습니다.

## 📊 성능 최적화

- Next.js 이미지 최적화
- CSS 최적화 (Tailwind CSS Purge)
- 코드 스플리팅
- Lazy Loading
- SEO 메타데이터 설정

## 🌐 배포

### Vercel (권장)
```bash
npm install -g vercel
vercel
```

### 기타 플랫폼
- Netlify
- Cloudflare Pages
- AWS Amplify

## 📄 라이선스

이 프로젝트는 MIT 라이선스 하에 배포됩니다.

## 🤝 기여하기

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 연락처

- 이메일: hello@harborvoyage.kr
- 웹사이트: [harborvoyage.kr](https://harborvoyage.kr)

---

**Harbor & Voyage** - *하루가 두 번 시작되는 곳에서 만나요* 🌅🌙
