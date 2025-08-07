import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Button } from 'voyage-design-system';

const meta: Meta<typeof Button> = {
  title: 'Components/Form/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
## 🔘 Button 컴포넌트

다양한 스타일과 크기를 지원하는 Voyage Design System의 버튼 컴포넌트입니다.

### 주요 특징:
- **다양한 변형**: default, destructive, outline, secondary, ghost, link
- **여러 크기**: default, sm, lg, icon
- **상태 관리**: disabled 상태 지원
- **접근성**: 키보드 탐색 및 스크린 리더 지원
- **Tailwind CSS**: class-variance-authority를 활용한 스타일링

### 사용 예시:
\`\`\`tsx
import { Button } from 'voyage-design-system';

<Button variant="default" size="lg" onClick={handleClick}>
  클릭하세요
</Button>
\`\`\`
        `,
      },
    },
  },
  tags: ['autodocs'],
  args: {
    onClick: fn(),
    children: '기본 버튼',
  },
} as const;

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
      <Button variant='default'>Default</Button>
      <Button variant='secondary'>Secondary</Button>
      <Button variant='outline'>Outline</Button>
      <Button variant='ghost'>Ghost</Button>
      <Button variant='destructive'>Destructive</Button>
      <Button variant='link'>Link</Button>
    </div>
  ),
};

export const Sizes: Story = {
  name: '다양한 크기',
  render: () => (
    <div className='flex items-center gap-4'>
      <Button size='sm'>작은 크기</Button>
      <Button size='default'>기본 크기</Button>
      <Button size='lg'>큰 크기</Button>
    </div>
  ),
};

export const IconButton: Story = {
  name: '아이콘 버튼',
  render: () => (
    <div className='flex gap-4'>
      <Button size='icon' aria-label='설정'>
        ⚙️
      </Button>
      <Button size='icon' variant='outline' aria-label='좋아요'>
        ❤️
      </Button>
      <Button size='icon' variant='ghost' aria-label='확인'>
        ✓
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
      <Button variant='destructive' disabled>
        비활성 삭제
      </Button>
    </div>
  ),
};
