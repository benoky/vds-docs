import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from 'voyage-design-system';

const meta: Meta<typeof Badge> = {
  title: 'Components/Display/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
## 🏷️ Badge 컴포넌트

상태, 카테고리, 수량 등을 표시하는 배지 컴포넌트입니다.

### 주요 특징:
- **다양한 변형**: default, secondary, success, warning, error, info, outline
- **여러 크기**: sm, default, lg
- **아이콘 지원**: 앞/뒤 아이콘 삽입 가능
- **카운트 표시**: 수량 정보 표시 기능
- **닷 스타일**: 간단한 상태 표시용 dot 모드

### 사용 예시:
\`\`\`tsx
import { Badge } from 'voyage-design-system';

<Badge variant="success" size="lg">
  활성 상태
</Badge>
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
    children: '기본 배지',
  },
};

export const Variants: Story = {
  name: '다양한 스타일',
  render: () => (
    <div className='flex flex-wrap gap-3'>
      <Badge variant='default'>Default</Badge>
      <Badge variant='secondary'>Secondary</Badge>
      <Badge variant='success'>Success</Badge>
      <Badge variant='warning'>Warning</Badge>
      <Badge variant='error'>Error</Badge>
      <Badge variant='info'>Info</Badge>
      <Badge variant='outline'>Outline</Badge>
    </div>
  ),
};

export const Sizes: Story = {
  name: '다양한 크기',
  render: () => (
    <div className='flex items-center gap-4'>
      <Badge size='sm'>작은 크기</Badge>
      <Badge size='default'>기본 크기</Badge>
      <Badge size='lg'>큰 크기</Badge>
    </div>
  ),
};

export const WithIcons: Story = {
  name: '아이콘과 함께',
  render: () => (
    <div className='flex flex-wrap gap-3'>
      <Badge variant='success' icon='✅'>
        완료됨
      </Badge>
      <Badge variant='warning' icon='⚠️'>
        주의 필요
      </Badge>
      <Badge variant='error' icon='❌'>
        실패
      </Badge>
      <Badge variant='info' endIcon='📄'>
        문서
      </Badge>
    </div>
  ),
};

export const DotStyle: Story = {
  name: '닷 스타일',
  render: () => (
    <div className='flex flex-wrap gap-6'>
      <div className='flex items-center gap-2'>
        <Badge dot variant='success' />
        <span>온라인</span>
      </div>
      <div className='flex items-center gap-2'>
        <Badge dot variant='warning' />
        <span>대기 중</span>
      </div>
      <div className='flex items-center gap-2'>
        <Badge dot variant='error' />
        <span>오프라인</span>
      </div>
      <div className='flex items-center gap-2'>
        <Badge dot variant='info' />
        <span>알림</span>
      </div>
    </div>
  ),
};

export const CategoryTags: Story = {
  name: '카테고리 태그',
  render: () => (
    <div className='space-y-4'>
      <div>
        <h3 className='text-lg font-semibold mb-2'>블로그 게시물</h3>
        <div className='flex flex-wrap gap-2 mb-4'>
          <Badge variant='info'>React</Badge>
          <Badge variant='success'>TypeScript</Badge>
          <Badge variant='warning'>JavaScript</Badge>
          <Badge variant='outline'>프론트엔드</Badge>
        </div>
      </div>
      <div>
        <h3 className='text-lg font-semibold mb-2'>프로젝트 상태</h3>
        <div className='flex flex-wrap gap-2'>
          <Badge variant='success'>완료</Badge>
          <Badge variant='warning'>진행 중</Badge>
          <Badge variant='error'>지연</Badge>
          <Badge variant='secondary'>대기</Badge>
        </div>
      </div>
    </div>
  ),
};
