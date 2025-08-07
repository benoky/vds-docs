import type { Meta, StoryObj } from '@storybook/react';
import { Skeleton } from 'voyage-design-system';

const meta: Meta<typeof Skeleton> = {
  title: 'Components/Feedback/Skeleton',
  component: Skeleton,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
## 💀 Skeleton 컴포넌트

데이터 로딩 중에 표시되는 플레이스홀더 컴포넌트입니다.

### 주요 특징:
- **다양한 변형**: default, circle, rect
- **크기 조정**: width, height 속성으로 크기 설정
- **애니메이션**: 로딩 애니메이션 효과
- **반응형**: 다양한 화면 크기에 대응
- **접근성**: 스크린 리더 지원

### 사용 예시:
\`\`\`tsx
import { Skeleton } from 'voyage-design-system';

<Skeleton width={200} height={20} />
<Skeleton variant="circle" width={50} height={50} />
<Skeleton variant="rect" width="100%" height={100} />
\`\`\`
        `,
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    width: 200,
    height: 20,
  },
};

export const Variants: Story = {
  name: '다양한 모양',
  render: () => (
    <div className='space-y-4 w-80'>
      <div>
        <h3 className='text-sm font-medium mb-2'>기본 모양</h3>
        <Skeleton variant='default' width={200} height={20} />
      </div>

      <div>
        <h3 className='text-sm font-medium mb-2'>원형</h3>
        <Skeleton variant='circle' width={50} height={50} />
      </div>

      <div>
        <h3 className='text-sm font-medium mb-2'>사각형</h3>
        <Skeleton variant='rect' width={200} height={100} />
      </div>
    </div>
  ),
};

export const Sizes: Story = {
  name: '다양한 크기',
  render: () => (
    <div className='space-y-4 w-80'>
      <div>
        <h3 className='text-sm font-medium mb-2'>작은 크기</h3>
        <Skeleton width={100} height={12} />
      </div>

      <div>
        <h3 className='text-sm font-medium mb-2'>기본 크기</h3>
        <Skeleton width={200} height={20} />
      </div>

      <div>
        <h3 className='text-sm font-medium mb-2'>큰 크기</h3>
        <Skeleton width={300} height={32} />
      </div>
    </div>
  ),
};

export const TextSkeleton: Story = {
  name: '텍스트 스켈레톤',
  render: () => (
    <div className='space-y-3 w-80'>
      <h3 className='text-sm font-medium mb-2'>텍스트 로딩</h3>

      <div className='space-y-2'>
        <Skeleton width='80%' height={16} />
        <Skeleton width='60%' height={16} />
        <Skeleton width='90%' height={16} />
        <Skeleton width='40%' height={16} />
      </div>
    </div>
  ),
};

export const CardSkeleton: Story = {
  name: '카드 스켈레톤',
  render: () => (
    <div className='w-80'>
      <h3 className='text-sm font-medium mb-2'>카드 로딩</h3>

      <div className='border rounded-lg p-4 space-y-3'>
        <div className='flex items-center space-x-3'>
          <Skeleton variant='circle' width={40} height={40} />
          <div className='flex-1 space-y-2'>
            <Skeleton width='60%' height={16} />
            <Skeleton width='40%' height={12} />
          </div>
        </div>

        <Skeleton width='100%' height={80} />

        <div className='flex justify-between'>
          <Skeleton width={60} height={20} />
          <Skeleton width={80} height={20} />
        </div>
      </div>
    </div>
  ),
};

export const AvatarSkeleton: Story = {
  name: '아바타 스켈레톤',
  render: () => (
    <div className='space-y-4 w-80'>
      <h3 className='text-sm font-medium mb-2'>아바타 로딩</h3>

      <div className='flex space-x-4'>
        <Skeleton variant='circle' width={32} height={32} />
        <Skeleton variant='circle' width={40} height={40} />
        <Skeleton variant='circle' width={48} height={48} />
        <Skeleton variant='circle' width={64} height={64} />
      </div>
    </div>
  ),
};
