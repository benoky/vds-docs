import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Popup, Button } from 'voyage-design-system';

const meta: Meta<typeof Popup> = {
  title: 'Components/Overlay/Popup',
  component: Popup,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
## 🪟 Popup 컴포넌트

드래그 가능하고 크기 조절이 가능한 팝업 창 컴포넌트입니다.

### 주요 특징:
- **드래그 가능**: 마우스로 팝업을 드래그하여 이동 가능
- **크기 조절**: 팝업의 크기를 조절할 수 있음
- **다양한 위치**: fixed, absolute, inline 위치 설정
- **닫기 옵션**: 외부 클릭, ESC 키, 닫기 버튼으로 닫기 가능
- **최소 크기**: 리사이징 시 최소 크기 설정 가능

### 사용 예시:
\`\`\`tsx
import { Popup } from 'voyage-design-system';

<Popup 
  open={isOpen} 
  onClose={() => setIsOpen(false)}
  title="팝업 제목"
  draggable
  resizable
>
  팝업 내용
</Popup>
\`\`\`
        `,
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

const PopupExample = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className='min-h-[400px] flex items-center justify-center p-8'>
      <Button variant='default' onClick={() => setOpen(true)}>
        팝업 열기
      </Button>

      <Popup
        open={open}
        onClose={() => setOpen(false)}
        title='기본 팝업'
        draggable
        resizable
        minDimensions={{ width: 300, height: 200 }}
        initialPosition={{ x: 100, y: 100 }}
      >
        <div className='p-4'>
          <p className='text-gray-900 mb-4'>이것은 기본 팝업입니다.</p>
          <p className='text-gray-600 text-sm'>드래그하여 이동하고, 모서리를 드래그하여 크기를 조절할 수 있습니다.</p>
        </div>
      </Popup>
    </div>
  );
};

export const Default: Story = {
  render: () => <PopupExample />,
};

export const WithTitle: Story = {
  name: '제목과 함께',
  render: function WithTitle() {
    const [open, setOpen] = useState(false);

    return (
      <div className='min-h-[400px] flex items-center justify-center p-8'>
        <Button variant='default' onClick={() => setOpen(true)}>
          제목이 있는 팝업 열기
        </Button>

        <Popup
          open={open}
          onClose={() => setOpen(false)}
          title='정보 팝업'
          showCloseButton
          closeOnOutsideClick
          closeOnEscape
          draggable
          resizable
          minDimensions={{ width: 400, height: 250 }}
          initialPosition={{ x: 150, y: 150 }}
        >
          <div className='p-6'>
            <h3 className='text-lg font-semibold text-gray-900 mb-3'>팝업 제목</h3>
            <p className='text-gray-700 mb-4'>이것은 제목이 있는 팝업입니다. 다양한 옵션을 설정할 수 있습니다.</p>
            <div className='space-y-2 text-sm text-gray-600'>
              <p>• 드래그하여 이동 가능</p>
              <p>• 모서리를 드래그하여 크기 조절 가능</p>
              <p>• 외부 클릭으로 닫기 가능</p>
              <p>• ESC 키로 닫기 가능</p>
            </div>
          </div>
        </Popup>
      </div>
    );
  },
};

export const DraggableOnly: Story = {
  name: '드래그만 가능',
  render: function DraggableOnly() {
    const [open, setOpen] = useState(false);

    return (
      <div className='min-h-[400px] flex items-center justify-center p-8'>
        <Button variant='default' onClick={() => setOpen(true)}>
          드래그만 가능한 팝업
        </Button>

        <Popup
          open={open}
          onClose={() => setOpen(false)}
          title='드래그 전용'
          draggable
          resizable={false}
          minDimensions={{ width: 350, height: 200 }}
          initialPosition={{ x: 200, y: 200 }}
        >
          <div className='p-4'>
            <p className='text-gray-900 mb-3'>이 팝업은 드래그만 가능합니다.</p>
            <p className='text-gray-600 text-sm'>크기 조절은 불가능하지만 이동은 자유롭게 할 수 있습니다.</p>
          </div>
        </Popup>
      </div>
    );
  },
};

export const ResizableOnly: Story = {
  name: '크기 조절만 가능',
  render: function ResizableOnly() {
    const [open, setOpen] = useState(false);

    return (
      <div className='min-h-[400px] flex items-center justify-center p-8'>
        <Button variant='default' onClick={() => setOpen(true)}>
          크기 조절만 가능한 팝업
        </Button>

        <Popup
          open={open}
          onClose={() => setOpen(false)}
          title='크기 조절 전용'
          draggable={false}
          resizable
          minDimensions={{ width: 300, height: 150 }}
          initialPosition={{ x: 250, y: 250 }}
        >
          <div className='p-4'>
            <p className='text-gray-900 mb-3'>이 팝업은 크기 조절만 가능합니다.</p>
            <p className='text-gray-600 text-sm'>이동은 불가능하지만 크기는 자유롭게 조절할 수 있습니다.</p>
          </div>
        </Popup>
      </div>
    );
  },
};

export const FixedPosition: Story = {
  name: '고정 위치',
  render: function FixedPosition() {
    const [open, setOpen] = useState(false);

    return (
      <div className='min-h-[400px] flex items-center justify-center p-8'>
        <Button variant='default' onClick={() => setOpen(true)}>
          고정 위치 팝업
        </Button>

        <Popup
          open={open}
          onClose={() => setOpen(false)}
          title='고정 위치'
          positioning='fixed'
          draggable={false}
          resizable={false}
          initialPosition={{ x: 100, y: 100 }}
        >
          <div className='p-4'>
            <p className='text-gray-900 mb-3'>이 팝업은 고정 위치에 표시됩니다.</p>
            <p className='text-gray-600 text-sm'>드래그나 크기 조절이 불가능한 고정 팝업입니다.</p>
          </div>
        </Popup>
      </div>
    );
  },
};

export const WithCustomStyling: Story = {
  name: '커스텀 스타일링',
  render: function WithCustomStyling() {
    const [open, setOpen] = useState(false);

    return (
      <div className='min-h-[400px] flex items-center justify-center p-8'>
        <Button variant='default' onClick={() => setOpen(true)}>
          커스텀 스타일 팝업
        </Button>

        <Popup
          open={open}
          onClose={() => setOpen(false)}
          title='커스텀 스타일'
          draggable
          resizable
          minDimensions={{ width: 400, height: 300 }}
          initialPosition={{ x: 150, y: 150 }}
          headerClassName='bg-blue-600 text-white'
          contentClassName='bg-gray-50'
        >
          <div className='p-6'>
            <h3 className='text-xl font-bold text-gray-900 mb-4'>커스텀 스타일링</h3>
            <div className='space-y-3'>
              <div className='p-3 bg-white rounded border'>
                <h4 className='font-semibold text-gray-900'>헤더 스타일</h4>
                <p className='text-gray-600 text-sm'>파란색 배경의 헤더</p>
              </div>
              <div className='p-3 bg-white rounded border'>
                <h4 className='font-semibold text-gray-900'>콘텐츠 스타일</h4>
                <p className='text-gray-600 text-sm'>회색 배경의 콘텐츠 영역</p>
              </div>
            </div>
          </div>
        </Popup>
      </div>
    );
  },
};
