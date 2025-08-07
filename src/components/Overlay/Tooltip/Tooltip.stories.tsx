import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Tooltip, Button } from 'voyage-design-system';

const meta: Meta<typeof Tooltip> = {
  title: 'Components/Overlay/Tooltip',
  component: Tooltip,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
## 💡 Tooltip 컴포넌트

요소에 대한 추가 정보를 표시하는 팝업 컴포넌트입니다.

### 주요 특징:
- **다양한 변형**: default, secondary, error, success, warning
- **여러 크기**: sm, default, lg
- **위치 설정**: top, bottom, left, right
- **트리거 방식**: hover, click, focus
- **애니메이션**: 부드러운 표시/숨김 애니메이션
- **완전한 접근성**: 키보드 탐색 및 스크린 리더 지원

### 사용 예시:
\`\`\`tsx
import { Tooltip } from 'voyage-design-system';

<Tooltip content="도움말 텍스트" position="top">
  <button>호버하세요</button>
</Tooltip>
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
    content: '기본 툴팁',
    children: <Button variant='default'>호버하세요</Button>,
  },
};

export const Positions: Story = {
  name: '다양한 위치',
  render: () => (
    <div className='space-y-8 w-80'>
      <div className='flex justify-center'>
        <Tooltip content='위쪽 툴팁' position='top' showArrow={true}>
          <Button variant='default'>위쪽</Button>
        </Tooltip>
      </div>

      <div className='flex justify-center space-x-4'>
        <Tooltip content='왼쪽 툴팁' position='left'>
          <Button variant='secondary'>왼쪽</Button>
        </Tooltip>

        <Tooltip content='오른쪽 툴팁' position='right'>
          <Button variant='secondary'>오른쪽</Button>
        </Tooltip>
      </div>

      <div className='flex justify-center'>
        <Tooltip content='아래쪽 툴팁' position='bottom'>
          <Button variant='default'>아래쪽</Button>
        </Tooltip>
      </div>
    </div>
  ),
};

export const Variants: Story = {
  name: '다양한 스타일',
  render: () => (
    <div className='space-y-4 w-80'>
      <div className='flex justify-center'>
        <Tooltip content='기본 스타일' variant='default'>
          <Button variant='default'>기본</Button>
        </Tooltip>
      </div>

      <div className='flex justify-center'>
        <Tooltip content='보조 스타일' variant='secondary'>
          <Button variant='secondary'>보조</Button>
        </Tooltip>
      </div>

      <div className='flex justify-center'>
        <Tooltip content='성공 스타일' variant='success'>
          <Button variant='outline'>성공</Button>
        </Tooltip>
      </div>

      <div className='flex justify-center'>
        <Tooltip content='경고 스타일' variant='warning'>
          <Button variant='destructive'>경고</Button>
        </Tooltip>
      </div>

      <div className='flex justify-center'>
        <Tooltip content='에러 스타일' variant='error'>
          <Button variant='destructive'>에러</Button>
        </Tooltip>
      </div>
    </div>
  ),
};

export const Sizes: Story = {
  name: '다양한 크기',
  render: () => (
    <div className='space-y-4 w-80'>
      <div className='flex justify-center'>
        <Tooltip content='작은 크기 툴팁' size='sm'>
          <Button variant='default' size='sm'>
            작은 크기
          </Button>
        </Tooltip>
      </div>

      <div className='flex justify-center'>
        <Tooltip content='기본 크기 툴팁' size='default'>
          <Button variant='default'>기본 크기</Button>
        </Tooltip>
      </div>

      <div className='flex justify-center'>
        <Tooltip content='큰 크기 툴팁' size='lg'>
          <Button variant='default' size='lg'>
            큰 크기
          </Button>
        </Tooltip>
      </div>
    </div>
  ),
};

export const Triggers: Story = {
  name: '트리거 방식',
  render: () => (
    <div className='space-y-4 w-80'>
      <div className='flex justify-center'>
        <Tooltip content='호버로 표시' trigger='hover'>
          <Button variant='default'>호버</Button>
        </Tooltip>
      </div>

      <div className='flex justify-center'>
        <Tooltip content='클릭으로 표시' trigger='click'>
          <Button variant='default'>클릭</Button>
        </Tooltip>
      </div>

      <div className='flex justify-center'>
        <Tooltip content='포커스로 표시' trigger='focus'>
          <Button variant='default'>포커스</Button>
        </Tooltip>
      </div>
    </div>
  ),
};

export const WithArrow: Story = {
  name: '화살표 포함',
  render: () => (
    <div className='space-y-4 w-80'>
      <div className='flex justify-center'>
        <Tooltip content='화살표가 있는 툴팁' showArrow>
          <Button variant='default'>화살표 있음</Button>
        </Tooltip>
      </div>

      <div className='flex justify-center'>
        <Tooltip content='화살표가 없는 툴팁' showArrow={false}>
          <Button variant='outline'>화살표 없음</Button>
        </Tooltip>
      </div>
    </div>
  ),
};

export const ComplexContent: Story = {
  name: '복잡한 콘텐츠',
  render: () => (
    <div className='space-y-4 w-80'>
      <div className='flex justify-center'>
        <Tooltip
          content={
            <div className='text-sm text-gray-900'>
              <div className='font-semibold mb-1'>상세 정보</div>
              <div>이것은 복잡한 툴팁 콘텐츠입니다.</div>
              <div className='text-xs text-gray-600 mt-1'>추가 설명</div>
            </div>
          }
        >
          <Button variant='default'>복잡한 콘텐츠</Button>
        </Tooltip>
      </div>

      <div className='flex justify-center'>
        <Tooltip
          content={
            <div className='text-sm text-gray-900'>
              <div className='font-semibold mb-1'>📊 통계</div>
              <div>• 총 사용자: 1,234명</div>
              <div>• 활성 사용자: 567명</div>
              <div>• 평균 세션: 15분</div>
            </div>
          }
        >
          <Button variant='outline'>통계 정보</Button>
        </Tooltip>
      </div>
    </div>
  ),
};

export const Interactive: Story = {
  name: '상호작용 예제',
  render: function Interactive() {
    const [open, setOpen] = useState(false);

    return (
      <div className='space-y-4 w-80'>
        <div className='flex justify-center'>
          <Tooltip content='제어된 툴팁' open={open} onOpenChange={setOpen}>
            <Button variant='default' onClick={() => setOpen(!open)}>
              {open ? '툴팁 닫기' : '툴팁 열기'}
            </Button>
          </Tooltip>
        </div>

        <div className='text-center text-sm text-gray-900'>툴팁 상태: {open ? '열림' : '닫힘'}</div>
      </div>
    );
  },
};

export const DelayExample: Story = {
  name: '지연 시간 예제',
  render: () => (
    <div className='space-y-4 w-80'>
      <div className='flex justify-center'>
        <Tooltip content='즉시 표시' delayDuration={0}>
          <Button variant='default'>즉시</Button>
        </Tooltip>
      </div>

      <div className='flex justify-center'>
        <Tooltip content='1초 후 표시' delayDuration={1000}>
          <Button variant='default'>1초 지연</Button>
        </Tooltip>
      </div>

      <div className='flex justify-center'>
        <Tooltip content='2초 후 표시' delayDuration={2000}>
          <Button variant='outline'>2초 지연</Button>
        </Tooltip>
      </div>
    </div>
  ),
};

export const FormElements: Story = {
  name: '폼 요소 툴팁',
  render: () => (
    <div className='space-y-4 w-80'>
      <div>
        <label className='block text-sm font-medium mb-2 text-gray-900'>
          이메일
          <Tooltip content='유효한 이메일 주소를 입력하세요' position='right'>
            <span className='ml-1 text-blue-600 cursor-help'>ⓘ</span>
          </Tooltip>
        </label>
        <input
          type='email'
          placeholder='이메일을 입력하세요'
          className='w-full px-3 py-2 border rounded text-gray-900'
        />
      </div>

      <div>
        <label className='block text-sm font-medium mb-2 text-gray-900'>
          비밀번호
          <Tooltip content='8자 이상, 영문, 숫자, 특수문자 포함' position='right'>
            <span className='ml-1 text-blue-600 cursor-help'>ⓘ</span>
          </Tooltip>
        </label>
        <input
          type='password'
          placeholder='비밀번호를 입력하세요'
          className='w-full px-3 py-2 border rounded text-gray-900'
        />
      </div>

      <div>
        <Tooltip content='이 버튼을 클릭하면 폼이 제출됩니다' position='top'>
          <Button variant='default' className='w-full'>
            제출
          </Button>
        </Tooltip>
      </div>
    </div>
  ),
};

export const IconTooltips: Story = {
  name: '아이콘 툴팁',
  render: () => (
    <div className='space-y-4 w-80'>
      <div className='flex justify-center space-x-4'>
        <Tooltip content='홈으로 이동'>
          <button className='p-2 text-gray-700 hover:text-blue-600'>🏠</button>
        </Tooltip>

        <Tooltip content='설정'>
          <button className='p-2 text-gray-700 hover:text-blue-600'>⚙️</button>
        </Tooltip>

        <Tooltip content='알림'>
          <button className='p-2 text-gray-700 hover:text-blue-600'>🔔</button>
        </Tooltip>

        <Tooltip content='도움말'>
          <button className='p-2 text-gray-700 hover:text-blue-600'>❓</button>
        </Tooltip>
      </div>

      <div className='flex justify-center space-x-4'>
        <Tooltip content='편집' variant='success'>
          <button className='p-2 text-gray-700 hover:text-green-600'>✏️</button>
        </Tooltip>

        <Tooltip content='삭제' variant='error'>
          <button className='p-2 text-gray-700 hover:text-red-600'>🗑️</button>
        </Tooltip>

        <Tooltip content='새로고침' variant='warning'>
          <button className='p-2 text-gray-700 hover:text-yellow-600'>🔄</button>
        </Tooltip>

        <Tooltip content='다운로드' variant='secondary'>
          <button className='p-2 text-gray-700 hover:text-purple-600'>⬇️</button>
        </Tooltip>
      </div>
    </div>
  ),
};
