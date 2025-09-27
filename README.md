# 동접Lab 홈페이지

동등한 접근성을 위한 AI 연구를 진행하는 동접Lab의 공식 홈페이지입니다.

## 🎯 프로젝트 소개

**동접Lab**은 이동약자와 비이동약자 모두가 동등한 접근성을 가지길 바라는 마음으로 시작된 AI 연구 프로젝트입니다. 

### 주요 목표
- **P1**: 이동약자 접근성 판단 AI 모델 개발 (정확도 80% 이상)
- **P2**: AI 모델을 활용한 실제 서비스 개발
- **데이터셋**: 한국 실내 이미지 연구용 데이터셋 구축

## 🚀 기술 스택

- **Frontend**: React 19, TypeScript, Vite
- **Styling**: Tailwind CSS, Framer Motion
- **UI Components**: Radix UI, Lucide React
- **Deployment**: GitHub Pages

## 📁 프로젝트 구조

```
src/
├── components/          # React 컴포넌트
│   ├── ui/             # 재사용 가능한 UI 컴포넌트
│   ├── About.tsx       # 소개 섹션
│   ├── ApplyPage.tsx   # 지원 페이지 (모집 마감)
│   ├── Timeline.tsx    # 프로젝트 타임라인
│   ├── ServiceV1Detail.tsx  # Service v1 상세 페이지
│   ├── ServiceV2Detail.tsx  # Service v2 상세 페이지
│   └── ...
├── lib/                # 유틸리티 함수
└── App.tsx            # 메인 애플리케이션

data/                   # 프로젝트 데이터
├── project_timeline.md
├── service_v1_timeline.md
├── service_v2_timeline.md
└── ...

public/                 # 정적 파일
├── team/              # 팀원 이미지
├── logo.png
└── ...
```

## 🛠️ 개발 환경 설정

### 필수 요구사항
- Node.js 18+ 
- npm 또는 yarn

### 설치 및 실행

```bash
# 저장소 클론
git clone https://github.com/Dongjeop-lab/homepage.git
cd homepage

# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 프로덕션 빌드
npm run build

# GitHub Pages 배포
npm run deploy
```

## 📋 주요 기능

### 🏠 홈페이지
- **Hero Section**: 프로젝트 소개 및 주요 지표
- **About Section**: 동접Lab 소개 및 목표
- **Projects Section**: 주요 산출물 소개
- **Team Section**: 팀원 소개

### 📅 타임라인 페이지
- 프로젝트 진행 상황 및 일정
- Service v1, v2 상세 정보
- 마일스톤 및 성과

### 👥 팀 소개
- 랩장, PM, 팀장 및 팀원 소개
- 각 팀별 역할 및 책임

## 🎨 디자인 시스템

- **컬러 팔레트**: Primary Blue (#3B82F6)
- **타이포그래피**: 시스템 폰트 스택
- **애니메이션**: Framer Motion을 활용한 부드러운 전환
- **반응형**: 모바일 우선 디자인

## 📱 반응형 지원

- **Mobile**: 320px+
- **Tablet**: 768px+
- **Desktop**: 1024px+
- **Large Desktop**: 1280px+

## 🚀 배포

이 프로젝트는 GitHub Pages를 통해 자동 배포됩니다.

- **Live URL**: https://dongjeop-lab.github.io/homepage
- **배포 브랜치**: `gh-pages`
- **소스 브랜치**: `main`

## 🤝 기여하기

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 라이선스

이 프로젝트는 MIT 라이선스 하에 배포됩니다. 자세한 내용은 `LICENSE` 파일을 참조하세요.

## 📞 연락처

- **GitHub**: [Dongjeop-lab](https://github.com/Dongjeop-lab)
- **프로젝트 페이지**: [TechForImpact](https://techforimpact.io/lab/project/15)

## 🙏 감사의 말

동등한 접근성을 위한 의미있는 연구에 함께 참여해주신 모든 분들께 감사드립니다.

---

**동접Lab** - 모두가 접근 가능한 세상을 만들어갑니다. 🌟