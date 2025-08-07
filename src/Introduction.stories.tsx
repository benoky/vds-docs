import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Introduction',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
# Voyage Design System

Voyage Design System은 자주 사용되는 유형의 UI 컴포넌트를 제공하는 React 컴포넌트 라이브러리입니다. 주요 UI를 빠르게 구축할 수 있도록 설계되었으며, 초기 UI 구성에 있어 솔루션을 제공합니다

## 📦 설치 방법

### 1. 패키지 설치

\`\`\`bash
# npm 사용
npm install voyage-design-system

# yarn 사용
yarn add voyage-design-system

# pnpm 사용
pnpm add voyage-design-system
\`\`\`

### 2. 필수 의존성 설치

Voyage Design System을 사용하기 위해서는 다음 의존성들이 필요합니다:

\`\`\`bash
# 핵심 의존성 (React 18+ 필수)
npm install react react-dom

# 스타일링 의존성 (Tailwind CSS 필수)
npm install -D tailwindcss postcss autoprefixer
\`\`\`

### 3. Tailwind CSS 설정

\`tailwind.config.js\` 파일에 다음 설정을 추가하세요:

\`\`\`javascript
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/voyage-design-system/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          500: '#3b82f6',
          900: '#1e3a8a',
        }
      }
    }
  },
  plugins: []
}
\`\`\`

### 4. CSS 임포트

메인 CSS 파일(\`src/index.css\`)에 다음을 추가하세요:

\`\`\`css
@tailwind base;
@tailwind components;
@tailwind utilities;

/* 선택사항: Voyage Design System 커스텀 스타일 */
@import 'voyage-design-system/dist/styles.css';
\`\`\`

### 5. TypeScript 설정 (선택사항)

더 나은 TypeScript 지원을 위해 \`tsconfig.json\`을 업데이트하세요:

\`\`\`json
{
  "compilerOptions": {
    "target": "ES2020",
    "lib": ["DOM", "DOM.Iterable", "ES6"],
    "allowJs": false,
    "skipLibCheck": true,
    "esModuleInterop": false,
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "module": "ESNext",
    "moduleResolution": "Node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx"
  }
}
\`\`\`

## 🎯 사용 예제

### 기본 사용법

\`\`\`jsx
import { Button, Card } from 'voyage-design-system';

function App() {
  return (
    <div className="p-8">
      <Card title="환영합니다!" description="Voyage Design System을 시작해보세요.">
        <p>이것은 Voyage Design System의 Card 컴포넌트입니다.</p>
        <Button className="mt-4">시작하기</Button>
      </Card>
    </div>
  );
}

export default App;
\`\`\`

### 폼 컴포넌트 사용

\`\`\`jsx
import { Input, Button, Switch } from 'voyage-design-system';
import { useState } from 'react';

function ContactForm() {
  const [email, setEmail] = useState('');
  const [notifications, setNotifications] = useState(true);

  return (
    <form className="space-y-4">
      <Input
        type="email"
        placeholder="이메일을 입력하세요"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        helperText="유효한 이메일 주소를 입력해주세요"
      />
      
      <div className="flex items-center gap-3">
        <Switch
          checked={notifications}
          onChange={setNotifications}
        />
        <span>알림 받기</span>
      </div>
      
      <Button type="submit" variant="default">
        제출하기
      </Button>
    </form>
  );
}
\`\`\`

## 📚 컴포넌트 카테고리

### 폼 컴포넌트 (8개)
- **Button**: 다양한 스타일과 크기의 버튼
- **Input**: 텍스트 입력 필드
- **Select**: 드롭다운 선택 컴포넌트
- **Checkbox**: 체크박스 컴포넌트
- **Radio**: 라디오 버튼 컴포넌트
- **Switch**: 토글 스위치 컴포넌트
- **Textarea**: 다중 라인 텍스트 입력
- **Editor**: 리치 텍스트 에디터

### 표시 컴포넌트 (3개)
- **Avatar**: 사용자 프로필 이미지
- **Badge**: 상태 표시 배지
- **DataTable**: 데이터 테이블 컴포넌트

### 레이아웃 컴포넌트 (2개)
- **Card**: 콘텐츠 카드 컨테이너
- **Tabs**: 탭 네비게이션

### 피드백 & 오버레이 (6개)
- **Progress**: 진행률 표시
- **Skeleton**: 로딩 스켈레톤
- **Modal**: 모달 다이얼로그
- **Tooltip**: 툴팁 컴포넌트
- **ContextMenu**: 컨텍스트 메뉴
- **Popup**: 팝업 컴포넌트

## 🛠️ 기술 스택

- **React 18+**: 최신 React 기능 활용
- **TypeScript**: 타입 안정성 보장
- **Tailwind CSS**: 유틸리티 우선 스타일링
- **Storybook**: 컴포넌트 문서화 및 개발 환경

## 🔧 커스터마이징

### 테마 커스터마이징

\`\`\`javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          900: '#1e3a8a',
        },
        secondary: {
          // 커스텀 색상 정의
        }
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
      }
    }
  }
}
\`\`\`

### 컴포넌트 스타일 오버라이드

\`\`\`jsx
import { Button } from 'voyage-design-system';

// Tailwind 클래스를 사용한 스타일 오버라이드
<Button className="bg-red-500 hover:bg-red-600 text-white">
  커스텀 버튼
</Button>
\`\`\`

## 📖 리소스

- **[NPM 패키지](https://www.npmjs.com/package/voyage-design-system)**: 패키지 다운로드 및 버전 정보
- **[GitHub 저장소](https://github.com/benoky/voyage-design-system)**: 소스 코드 및 이슈 트래킹

## 🤝 기여하기

Voyage Design System은 오픈 소스 프로젝트입니다. 기여하고 싶으시다면:

- [GitHub 저장소](https://github.com/benoky/voyage-design-system)를 포크하세요
- 새로운 브랜치를 생성하세요
- 변경사항을 커밋하세요
- Pull Request를 생성하세요

## 📞 지원

문제가 있거나 질문이 있으시다면 [GitHub Issues](https://github.com/benoky/voyage-design-system/issues)를 이용해주세요.
        `,
      },
    },
  },
  tags: ['autodocs'],
} as const;

export default meta;
type Story = StoryObj<typeof meta>;

// 빈 스토리를 추가하여 사이드바에 표시되도록 함
export const Docs: Story = {
  render: () => <div />,
};
