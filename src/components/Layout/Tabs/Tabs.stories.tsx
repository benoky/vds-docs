import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Tabs } from 'voyage-design-system';

const meta: Meta<typeof Tabs> = {
  title: 'Components/Layout/Tabs',
  component: Tabs,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
## 📑 Tabs 컴포넌트

여러 패널의 콘텐츠를 탭 네비게이션으로 구성하는 컴포넌트입니다.

### 주요 특징:
- **다양한 변형**: default, card
- **여러 크기**: sm, default, lg
- **탭 리스트 스타일**: default, underline, card, pills
- **정렬 옵션**: start, center, end, between, around
- **상태 관리**: disabled 탭 지원
- **완전한 접근성**: 키보드 탐색 및 스크린 리더 지원
- **아이콘 및 배지**: 탭에 아이콘과 배지 추가 가능

### 사용 예시:
\`\`\`tsx
import { Tabs } from 'voyage-design-system';

const items = [
  { key: 'tab1', label: '첫 번째 탭', content: '첫 번째 탭 내용' },
  { key: 'tab2', label: '두 번째 탭', content: '두 번째 탭 내용' },
  { key: 'tab3', label: '세 번째 탭', content: '세 번째 탭 내용' },
];

<Tabs items={items} defaultActiveKey="tab1" />
\`\`\`
        `,
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

const defaultItems = [
  {
    key: 'overview',
    label: '개요',
    content: (
      <div className='p-4'>
        <h3 className='text-lg font-semibold mb-2'>개요</h3>
        <p className='text-gray-600'>
          이 섹션에서는 프로젝트의 전체적인 개요를 확인할 수 있습니다. 주요 지표와 현황을 한눈에 볼 수 있어요.
        </p>
      </div>
    ),
  },
  {
    key: 'analytics',
    label: '분석',
    content: (
      <div className='p-4'>
        <h3 className='text-lg font-semibold mb-2'>분석</h3>
        <p className='text-gray-600'>
          상세한 데이터 분석 결과를 확인할 수 있습니다. 차트와 그래프를 통해 인사이트를 얻어보세요.
        </p>
      </div>
    ),
  },
  {
    key: 'reports',
    label: '보고서',
    content: (
      <div className='p-4'>
        <h3 className='text-lg font-semibold mb-2'>보고서</h3>
        <p className='text-gray-600'>정기 보고서와 특별 보고서를 확인할 수 있습니다. PDF 다운로드도 가능합니다.</p>
      </div>
    ),
  },
];

export const Default: Story = {
  args: {
    items: defaultItems,
    defaultActiveKey: 'overview',
  },
};

export const Variants: Story = {
  name: '다양한 스타일',
  render: () => (
    <div className='space-y-8 w-full max-w-4xl'>
      <div>
        <h3 className='text-lg font-semibold mb-4'>기본 스타일</h3>
        <Tabs items={defaultItems} variant='default' defaultActiveKey='overview' />
      </div>

      <div>
        <h3 className='text-lg font-semibold mb-4'>카드 스타일</h3>
        <Tabs items={defaultItems} variant='card' defaultActiveKey='overview' />
      </div>
    </div>
  ),
};

export const Sizes: Story = {
  name: '다양한 크기',
  render: () => (
    <div className='space-y-8 w-full max-w-4xl'>
      <div>
        <h3 className='text-lg font-semibold mb-4'>작은 크기</h3>
        <Tabs items={defaultItems} size='sm' defaultActiveKey='overview' />
      </div>

      <div>
        <h3 className='text-lg font-semibold mb-4'>기본 크기</h3>
        <Tabs items={defaultItems} size='default' defaultActiveKey='overview' />
      </div>

      <div>
        <h3 className='text-lg font-semibold mb-4'>큰 크기</h3>
        <Tabs items={defaultItems} size='lg' defaultActiveKey='overview' />
      </div>
    </div>
  ),
};

export const JustifyOptions: Story = {
  name: '정렬 옵션',
  render: () => (
    <div className='space-y-8 w-full max-w-4xl'>
      <div>
        <h3 className='text-lg font-semibold mb-4'>시작 정렬</h3>
        <Tabs items={defaultItems} tabListJustify='start' defaultActiveKey='overview' />
      </div>

      <div>
        <h3 className='text-lg font-semibold mb-4'>중앙 정렬</h3>
        <Tabs items={defaultItems} tabListJustify='center' defaultActiveKey='overview' />
      </div>

      <div>
        <h3 className='text-lg font-semibold mb-4'>끝 정렬</h3>
        <Tabs items={defaultItems} tabListJustify='end' defaultActiveKey='overview' />
      </div>

      <div>
        <h3 className='text-lg font-semibold mb-4'>사이 정렬</h3>
        <Tabs items={defaultItems} tabListJustify='between' defaultActiveKey='overview' />
      </div>

      <div>
        <h3 className='text-lg font-semibold mb-4'>주변 정렬</h3>
        <Tabs items={defaultItems} tabListJustify='around' defaultActiveKey='overview' />
      </div>
    </div>
  ),
};

export const WithIcons: Story = {
  name: '아이콘이 있는 탭',
  render: () => {
    const itemsWithIcons = [
      {
        key: 'dashboard',
        label: '대시보드',
        icon: '📊',
        content: (
          <div className='p-4'>
            <h3 className='text-lg font-semibold mb-2'>대시보드</h3>
            <p className='text-gray-600'>주요 지표와 현황을 한눈에 확인할 수 있는 대시보드입니다.</p>
          </div>
        ),
      },
      {
        key: 'analytics',
        label: '분석',
        icon: '📈',
        content: (
          <div className='p-4'>
            <h3 className='text-lg font-semibold mb-2'>분석</h3>
            <p className='text-gray-600'>상세한 데이터 분석 결과를 확인할 수 있습니다.</p>
          </div>
        ),
      },
      {
        key: 'settings',
        label: '설정',
        icon: '⚙️',
        content: (
          <div className='p-4'>
            <h3 className='text-lg font-semibold mb-2'>설정</h3>
            <p className='text-gray-600'>시스템 설정과 사용자 환경을 관리할 수 있습니다.</p>
          </div>
        ),
      },
    ];

    return (
      <div className='w-full max-w-4xl'>
        <Tabs items={itemsWithIcons} defaultActiveKey='dashboard' />
      </div>
    );
  },
};

export const WithBadges: Story = {
  name: '배지가 있는 탭',
  render: () => {
    const itemsWithBadges = [
      {
        key: 'inbox',
        label: '받은 편지함',
        badge: '12',
        content: (
          <div className='p-4'>
            <h3 className='text-lg font-semibold mb-2'>받은 편지함</h3>
            <p className='text-gray-600'>새로운 메시지 12개가 있습니다.</p>
          </div>
        ),
      },
      {
        key: 'sent',
        label: '보낸 편지함',
        badge: '5',
        content: (
          <div className='p-4'>
            <h3 className='text-lg font-semibold mb-2'>보낸 편지함</h3>
            <p className='text-gray-600'>보낸 메시지 5개가 있습니다.</p>
          </div>
        ),
      },
      {
        key: 'drafts',
        label: '임시 보관함',
        badge: '3',
        content: (
          <div className='p-4'>
            <h3 className='text-lg font-semibold mb-2'>임시 보관함</h3>
            <p className='text-gray-600'>저장된 초안 3개가 있습니다.</p>
          </div>
        ),
      },
    ];

    return (
      <div className='w-full max-w-4xl'>
        <Tabs items={itemsWithBadges} defaultActiveKey='inbox' />
      </div>
    );
  },
};

export const WithDisabledTabs: Story = {
  name: '비활성화된 탭',
  render: () => {
    const itemsWithDisabled = [
      {
        key: 'active',
        label: '활성 탭',
        content: (
          <div className='p-4'>
            <h3 className='text-lg font-semibold mb-2'>활성 탭</h3>
            <p className='text-gray-600'>이 탭은 활성화되어 있습니다.</p>
          </div>
        ),
      },
      {
        key: 'disabled',
        label: '비활성 탭',
        disabled: true,
        content: (
          <div className='p-4'>
            <h3 className='text-lg font-semibold mb-2'>비활성 탭</h3>
            <p className='text-gray-600'>이 탭은 비활성화되어 있습니다.</p>
          </div>
        ),
      },
      {
        key: 'another',
        label: '다른 탭',
        content: (
          <div className='p-4'>
            <h3 className='text-lg font-semibold mb-2'>다른 탭</h3>
            <p className='text-gray-600'>또 다른 활성 탭입니다.</p>
          </div>
        ),
      },
    ];

    return (
      <div className='w-full max-w-4xl'>
        <Tabs items={itemsWithDisabled} defaultActiveKey='active' />
      </div>
    );
  },
};

const InteractiveExample = () => {
  const [activeKey, setActiveKey] = useState('overview');

  const handleTabChange = (key: string) => {
    setActiveKey(key);
    console.log('탭 변경:', key);
  };

  return (
    <div className='w-full max-w-4xl'>
      <div className='mb-4 p-3 bg-gray-50 rounded-lg text-sm'>
        <p>
          <strong>현재 활성 탭:</strong> {activeKey}
        </p>
      </div>

      <Tabs items={defaultItems} activeKey={activeKey} onChange={handleTabChange} />
    </div>
  );
};

export const Interactive: Story = {
  name: '상호작용 예제',
  render: () => <InteractiveExample />,
};

export const ComplexExample: Story = {
  name: '복합 예제',
  render: () => {
    const complexItems = [
      {
        key: 'overview',
        label: '개요',
        icon: '📋',
        content: (
          <div className='p-6'>
            <h3 className='text-xl font-semibold mb-4'>프로젝트 개요</h3>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              <div className='p-4 bg-blue-50 rounded-lg'>
                <h4 className='font-semibold text-blue-800'>진행률</h4>
                <p className='text-2xl font-bold text-blue-600'>75%</p>
              </div>
              <div className='p-4 bg-green-50 rounded-lg'>
                <h4 className='font-semibold text-green-800'>완료된 작업</h4>
                <p className='text-2xl font-bold text-green-600'>15/20</p>
              </div>
            </div>
          </div>
        ),
      },
      {
        key: 'analytics',
        label: '분석',
        icon: '📊',
        badge: 'New',
        content: (
          <div className='p-6'>
            <h3 className='text-xl font-semibold mb-4'>데이터 분석</h3>
            <div className='space-y-4'>
              <div className='p-4 bg-gray-50 rounded-lg'>
                <h4 className='font-semibold mb-2'>사용자 활동</h4>
                <p className='text-gray-600'>지난 30일간의 사용자 활동 데이터를 분석한 결과입니다.</p>
              </div>
              <div className='p-4 bg-gray-50 rounded-lg'>
                <h4 className='font-semibold mb-2'>성능 지표</h4>
                <p className='text-gray-600'>시스템 성능과 응답 시간을 모니터링합니다.</p>
              </div>
            </div>
          </div>
        ),
      },
      {
        key: 'settings',
        label: '설정',
        icon: '⚙️',
        content: (
          <div className='p-6'>
            <h3 className='text-xl font-semibold mb-4'>시스템 설정</h3>
            <div className='space-y-4'>
              <div className='flex items-center justify-between p-4 border rounded-lg'>
                <div>
                  <h4 className='font-semibold'>알림 설정</h4>
                  <p className='text-sm text-gray-600'>이메일 및 푸시 알림을 관리합니다</p>
                </div>
                <button className='px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600'>설정</button>
              </div>
              <div className='flex items-center justify-between p-4 border rounded-lg'>
                <div>
                  <h4 className='font-semibold'>보안 설정</h4>
                  <p className='text-sm text-gray-600'>계정 보안 및 인증을 관리합니다</p>
                </div>
                <button className='px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600'>설정</button>
              </div>
            </div>
          </div>
        ),
      },
    ];

    return (
      <div className='w-full max-w-4xl'>
        <Tabs
          items={complexItems}
          defaultActiveKey='overview'
          variant='card'
          tabListVariant='card'
          tabListJustify='start'
        />
      </div>
    );
  },
};
