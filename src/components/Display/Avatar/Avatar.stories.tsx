import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from 'voyage-design-system';

const meta: Meta<typeof Avatar> = {
  title: 'Components/Display/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
## 👤 Avatar 컴포넌트

사용자 프로필 이미지나 이니셜을 표시하는 아바타 컴포넌트입니다.

### 주요 특징:
- **다양한 크기**: xs, sm, default, lg, xl, 2xl
- **다양한 모양**: circle, square
- **폴백 지원**: 이미지 로딩 실패 시 이니셜 표시
- **접근성**: alt 텍스트 지원
- **커스터마이징**: 다양한 스타일링 옵션

### 사용 예시:
\`\`\`tsx
import { Avatar } from 'voyage-design-system';

<Avatar 
  src="https://example.com/profile.jpg" 
  alt="사용자 이름" 
  fallback="홍길동"
  size="lg"
/>
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
    fallback: 'VD',
  },
};

export const WithImage: Story = {
  name: '이미지가 있는 아바타',
  args: {
    src: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
    alt: '사용자 프로필',
    fallback: 'JD',
  },
};

export const Sizes: Story = {
  name: '다양한 크기',
  render: () => (
    <div className='flex items-center gap-4'>
      <Avatar size='xs' fallback='XS' />
      <Avatar size='sm' fallback='SM' />
      <Avatar size='default' fallback='MD' />
      <Avatar size='lg' fallback='LG' />
      <Avatar size='xl' fallback='XL' />
      <Avatar size='2xl' fallback='2XL' />
    </div>
  ),
};

export const Shapes: Story = {
  name: '다양한 모양',
  render: () => (
    <div className='flex items-center gap-4'>
      <Avatar shape='circle' fallback='원형' />
      <Avatar shape='square' fallback='사각형' />
    </div>
  ),
};

export const Fallbacks: Story = {
  name: '폴백 텍스트',
  render: () => (
    <div className='flex items-center gap-4'>
      <Avatar fallback='홍길동' />
      <Avatar fallback='김철수' />
      <Avatar fallback='이영희' />
      <Avatar fallback='박민수' />
    </div>
  ),
};

export const UserList: Story = {
  name: '사용자 목록',
  render: () => (
    <div className='space-y-3 w-80'>
      <div className='flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg'>
        <Avatar
          src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face'
          alt='김철수'
          fallback='김철수'
        />
        <div>
          <p className='font-medium'>김철수</p>
          <p className='text-sm text-gray-500'>kim@example.com</p>
        </div>
      </div>

      <div className='flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg'>
        <Avatar fallback='박영희' alt='박영희' />
        <div>
          <p className='font-medium'>박영희</p>
          <p className='text-sm text-gray-500'>park@example.com</p>
        </div>
      </div>

      <div className='flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg'>
        <Avatar
          src='https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face'
          alt='이민수'
          fallback='이민수'
        />
        <div>
          <p className='font-medium'>이민수</p>
          <p className='text-sm text-gray-500'>lee@example.com</p>
        </div>
      </div>
    </div>
  ),
};

export const AvatarGroup: Story = {
  name: '아바타 그룹',
  render: () => (
    <div className='flex -space-x-2'>
      <Avatar
        src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face'
        alt='사용자 1'
        className='border-2 border-white'
      />
      <Avatar
        src='https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face'
        alt='사용자 2'
        className='border-2 border-white'
      />
      <Avatar
        src='https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face'
        alt='사용자 3'
        className='border-2 border-white'
      />
      <div className='w-10 h-10 bg-gray-200 border-2 border-white rounded-full flex items-center justify-center text-xs font-medium text-gray-600'>
        +3
      </div>
    </div>
  ),
};
