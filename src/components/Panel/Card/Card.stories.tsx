import type { Meta, StoryObj } from '@storybook/react';
import { Card, Button, Badge, Avatar } from 'voyage-design-system';

const meta: Meta<typeof Card> = {
  title: 'Components/Panel/Card',
  component: Card,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
## 🃏 Card 컴포넌트

콘텐츠를 그룹화하고 시각적으로 구분하는 카드 컴포넌트입니다.

### 주요 특징:
- **다양한 변형**: default, outline, ghost
- **여러 크기**: sm, default, lg (패딩 크기)
- **구조화된 레이아웃**: title, description, header, footer 지원
- **유연한 사용**: 커스텀 헤더/푸터 콘텐츠 가능
- **접근성**: 시맨틱 마크업과 키보드 탐색 지원

### 사용 예시:
\`\`\`tsx
import { Card } from 'voyage-design-system';

<Card 
  title="카드 제목"
  description="카드 설명"
  variant="outline"
  size="lg"
>
  카드 내용
</Card>
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
    children: '기본 카드 내용입니다.',
  },
};

export const WithTitleAndDescription: Story = {
  name: '제목과 설명',
  args: {
    title: '카드 제목',
    description: '이것은 카드에 대한 설명입니다.',
    children: '카드의 주요 내용이 여기에 표시됩니다.',
  },
};

export const Variants: Story = {
  name: '다양한 스타일',
  render: () => (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-4xl'>
      <Card variant='default' title='Default' description='기본 카드 스타일'>
        기본 스타일의 카드입니다.
      </Card>

      <Card variant='outline' title='Outline' description='아웃라인 카드 스타일'>
        아웃라인 스타일의 카드입니다.
      </Card>

      <Card variant='ghost' title='Ghost' description='고스트 카드 스타일'>
        고스트 스타일의 카드입니다.
      </Card>
    </div>
  ),
};

export const Sizes: Story = {
  name: '다양한 크기',
  render: () => (
    <div className='space-y-4 w-full max-w-md'>
      <Card size='sm' title='작은 크기' description='작은 패딩의 카드'>
        작은 크기의 카드입니다.
      </Card>

      <Card size='default' title='기본 크기' description='기본 패딩의 카드'>
        기본 크기의 카드입니다.
      </Card>

      <Card size='lg' title='큰 크기' description='큰 패딩의 카드'>
        큰 크기의 카드입니다.
      </Card>
    </div>
  ),
};

export const WithCustomHeader: Story = {
  name: '커스텀 헤더',
  args: {
    header: (
      <div className='flex items-center justify-between'>
        <div className='flex items-center gap-3'>
          <Avatar
            src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face'
            fallback='JD'
            size='sm'
          />
          <div>
            <h3 className='font-semibold'>John Doe</h3>
            <p className='text-sm text-gray-500'>2시간 전</p>
          </div>
        </div>
        <Badge variant='success'>활성</Badge>
      </div>
    ),
    children: '커스텀 헤더가 있는 카드의 내용입니다.',
  },
};

export const WithCustomFooter: Story = {
  name: '커스텀 푸터',
  args: {
    title: '작업 완료',
    description: '프로젝트 설정이 완료되었습니다.',
    children: '모든 설정이 정상적으로 적용되었습니다. 이제 개발을 시작할 수 있습니다.',
    footer: (
      <div className='flex gap-2'>
        <Button variant='outline' size='sm'>
          취소
        </Button>
        <Button variant='default' size='sm'>
          확인
        </Button>
      </div>
    ),
  },
};

export const ProductCard: Story = {
  name: '상품 카드',
  render: () => (
    <Card variant='outline' className='w-80'>
      <div className='space-y-4'>
        <img
          src='https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=200&fit=crop'
          alt='헤드폰'
          className='w-full h-48 object-cover rounded-lg'
        />

        <div className='space-y-2'>
          <div className='flex items-center justify-between'>
            <h3 className='text-lg font-semibold'>무선 헤드폰</h3>
            <Badge variant='success'>신상품</Badge>
          </div>

          <p className='text-gray-600 text-sm'>고음질 무선 헤드폰으로 최대 30시간 연속 재생이 가능합니다.</p>

          <div className='flex items-center justify-between'>
            <span className='text-2xl font-bold text-blue-600'>₩199,000</span>
            <div className='flex items-center gap-1'>
              <span className='text-yellow-400'>⭐⭐⭐⭐⭐</span>
              <span className='text-sm text-gray-500'>(128)</span>
            </div>
          </div>
        </div>

        <div className='flex gap-2'>
          <Button variant='outline' size='default' className='flex-1'>
            장바구니
          </Button>
          <Button variant='default' size='default' className='flex-1'>
            구매하기
          </Button>
        </div>
      </div>
    </Card>
  ),
};

export const ProfileCard: Story = {
  name: '프로필 카드',
  render: () => (
    <Card variant='default' className='w-80'>
      <div className='text-center space-y-4'>
        <Avatar
          src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face'
          fallback='JD'
          size='xl'
          className='mx-auto'
        />

        <div>
          <h3 className='text-xl font-semibold'>John Doe</h3>
          <p className='text-gray-600'>Frontend Developer</p>
        </div>

        <div className='flex justify-center gap-4 text-sm'>
          <div className='text-center'>
            <div className='font-semibold'>1.2K</div>
            <div className='text-gray-500'>팔로워</div>
          </div>
          <div className='text-center'>
            <div className='font-semibold'>342</div>
            <div className='text-gray-500'>팔로잉</div>
          </div>
          <div className='text-center'>
            <div className='font-semibold'>89</div>
            <div className='text-gray-500'>게시물</div>
          </div>
        </div>

        <div className='flex gap-2'>
          <Button variant='outline' size='sm' className='flex-1'>
            메시지
          </Button>
          <Button variant='default' size='sm' className='flex-1'>
            팔로우
          </Button>
        </div>
      </div>
    </Card>
  ),
};

export const StatisticsCard: Story = {
  name: '통계 카드',
  render: () => (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-4xl'>
      <Card variant='default' size='lg'>
        <div className='flex items-center justify-between'>
          <div>
            <p className='text-sm text-gray-600'>총 방문자</p>
            <p className='text-3xl font-bold text-blue-600'>12,345</p>
            <p className='text-sm text-green-600'>+12% 지난 달 대비</p>
          </div>
          <div className='text-3xl'>👥</div>
        </div>
      </Card>

      <Card variant='default' size='lg'>
        <div className='flex items-center justify-between'>
          <div>
            <p className='text-sm text-gray-600'>매출</p>
            <p className='text-3xl font-bold text-green-600'>₩2,890,000</p>
            <p className='text-sm text-green-600'>+8% 지난 달 대비</p>
          </div>
          <div className='text-3xl'>💰</div>
        </div>
      </Card>

      <Card variant='default' size='lg'>
        <div className='flex items-center justify-between'>
          <div>
            <p className='text-sm text-gray-600'>주문 수</p>
            <p className='text-3xl font-bold text-purple-600'>567</p>
            <p className='text-sm text-red-600'>-3% 지난 달 대비</p>
          </div>
          <div className='text-3xl'>📦</div>
        </div>
      </Card>
    </div>
  ),
};

export const ArticleCard: Story = {
  name: '기사 카드',
  render: () => (
    <Card variant='outline' className='w-96'>
      <div className='space-y-4'>
        <img
          src='https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=200&fit=crop'
          alt='기사 이미지'
          className='w-full h-48 object-cover rounded-lg'
        />

        <div className='space-y-3'>
          <div className='flex items-center gap-2'>
            <Badge variant='info' size='sm'>
              기술
            </Badge>
            <span className='text-sm text-gray-500'>2024.01.15</span>
          </div>

          <h3 className='text-xl font-semibold'>React 19의 새로운 기능들</h3>

          <p className='text-gray-600'>
            React 19에서 도입된 useActionState, useOptimistic 등의 새로운 Hook들과 Server Components의 향상된 기능들을
            살펴봅니다.
          </p>

          <div className='flex items-center justify-between'>
            <div className='flex items-center gap-2'>
              <Avatar fallback='KH' size='xs' />
              <span className='text-sm text-gray-600'>김개발</span>
            </div>

            <div className='flex items-center gap-4 text-sm text-gray-500'>
              <span>👍 24</span>
              <span>💬 8</span>
              <span>📖 5분 읽기</span>
            </div>
          </div>
        </div>
      </div>
    </Card>
  ),
};
