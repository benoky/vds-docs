import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
## 🔘 Button 컴포넌트

다양한 스타일과 크기를 지원하는 React 19 호환 버튼 컴포넌트입니다.

### 주요 특징:
- **다양한 변형**: primary, secondary, outline, ghost, destructive
- **여러 크기**: sm, md, lg
- **상태 관리**: loading, disabled 상태 지원
- **접근성**: 키보드 탐색 및 스크린 리더 지원
- **React 19**: forwardRef와 최신 TypeScript 타입 지원

### 사용 예시:
\`\`\`tsx
import { Button } from './Button';

<Button variant="primary" size="lg" onClick={handleClick}>
  클릭하세요
</Button>
\`\`\`
        `,
      },
    },
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'outline', 'ghost', 'destructive'],
      description: '버튼의 시각적 스타일을 설정합니다.',
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: '버튼의 크기를 설정합니다.',
    },
    loading: {
      control: { type: 'boolean' },
      description: '로딩 상태를 표시합니다.',
    },
    disabled: {
      control: { type: 'boolean' },
      description: '버튼을 비활성화합니다.',
    },
    iconOnly: {
      control: { type: 'boolean' },
      description: '아이콘만 표시하는 버튼입니다.',
    },
    children: {
      control: { type: 'text' },
      description: '버튼 내부에 표시될 내용입니다.',
    },
  },
  args: {
    onClick: fn(),
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: '기본 버튼',
  },
};

export const Variants: Story = {
  name: '다양한 스타일',
  render: () => (
    <div className='flex flex-wrap gap-4'>
      <Button variant='primary'>Primary</Button>
      <Button variant='secondary'>Secondary</Button>
      <Button variant='outline'>Outline</Button>
      <Button variant='ghost'>Ghost</Button>
      <Button variant='destructive'>Destructive</Button>
    </div>
  ),
};

export const Sizes: Story = {
  name: '다양한 크기',
  render: () => (
    <div className='flex items-center gap-4'>
      <Button size='sm'>작은 크기</Button>
      <Button size='md'>보통 크기</Button>
      <Button size='lg'>큰 크기</Button>
    </div>
  ),
};

export const Loading: Story = {
  name: '로딩 상태',
  render: () => (
    <div className='flex gap-4'>
      <Button loading>로딩 중...</Button>
      <Button variant='outline' loading>
        처리 중
      </Button>
    </div>
  ),
};

export const Disabled: Story = {
  name: '비활성 상태',
  render: () => (
    <div className='flex gap-4'>
      <Button disabled>비활성 버튼</Button>
      <Button variant='outline' disabled>
        비활성 아웃라인
      </Button>
    </div>
  ),
};

export const IconOnly: Story = {
  name: '아이콘 전용',
  render: () => (
    <div className='flex gap-4'>
      <Button iconOnly size='sm' aria-label='작은 아이콘 버튼'>
        ✓
      </Button>
      <Button iconOnly size='md' aria-label='보통 아이콘 버튼'>
        ⚙️
      </Button>
      <Button iconOnly size='lg' aria-label='큰 아이콘 버튼'>
        ❤️
      </Button>
    </div>
  ),
};
