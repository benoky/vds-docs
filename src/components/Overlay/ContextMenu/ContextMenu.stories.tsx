// ContextMenu.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { ContextMenu, Button } from 'voyage-design-system';

const meta: Meta<typeof ContextMenu> = {
  title: 'Components/Overlay/ContextMenu',
  component: ContextMenu,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
## 📋 ContextMenu 컴포넌트

우클릭 메뉴, 더보기 메뉴 등으로 사용되는 팝업형 메뉴 컴포넌트입니다.

### 주요 특징:
- 다양한 위치 설정 (top, bottom, left, right)
- 메뉴 그룹화 및 구분선 제공
- 아이콘, 비활성화, 클릭 이벤트 지원
- 완전한 접근성 및 포커스 지원
        `,
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

const sampleItems = [
  { key: 'edit', label: '편집', icon: '✏️', onClick: () => alert('편집 클릭') },
  { key: 'delete', label: '삭제', icon: '🗑️', onClick: () => alert('삭제 클릭') },
  { key: 'duplicate', label: '복제', icon: '📄', onClick: () => alert('복제 클릭') },
];

export const Default: Story = {
  name: '기본 컨텍스트 메뉴',
  render: function Default() {
    const [open, setOpen] = useState(false);
    return (
      <ContextMenu open={open} onMouseLeave={() => setOpen(false)} items={sampleItems} position='bottom'>
        <Button onClick={() => setOpen(!open)}>메뉴 열기</Button>
      </ContextMenu>
    );
  },
};

export const WithTitle: Story = {
  name: '타이틀 포함',
  render: function WithTitle() {
    const [open, setOpen] = useState(false);
    return (
      <ContextMenu
        open={open}
        onMouseLeave={() => setOpen(false)}
        title='파일 작업'
        items={sampleItems}
        position='right'
      >
        <Button onClick={() => setOpen(!open)}>작업</Button>
      </ContextMenu>
    );
  },
};

export const SectionedItems: Story = {
  name: '구분된 섹션 메뉴',
  render: function SectionedItems() {
    const [open, setOpen] = useState(false);
    return (
      <ContextMenu
        open={open}
        onMouseLeave={() => setOpen(false)}
        title='문서'
        items={[
          [
            { key: 'new', label: '새로 만들기', icon: '📝' },
            { key: 'open', label: '열기', icon: '📂' },
          ],
          [
            { key: 'save', label: '저장', icon: '💾' },
            { key: 'export', label: '내보내기', icon: '📤' },
          ],
        ]}
        position='left'
      >
        <Button onClick={() => setOpen(!open)}>문서 메뉴</Button>
      </ContextMenu>
    );
  },
};

export const PositionVariants: Story = {
  name: '위치 변경 예제',
  render: function PositionVariants() {
    const [open, setOpen] = useState<string | null>(null);

    return (
      <div className='flex flex-wrap gap-4 justify-center'>
        {(['top', 'right', 'bottom', 'left'] as const).map(pos => (
          <ContextMenu
            key={pos}
            open={open === pos}
            onMouseLeave={() => setOpen(null)}
            position={pos}
            items={sampleItems}
          >
            <Button onClick={() => setOpen(open === pos ? null : pos)}>위치: {pos}</Button>
          </ContextMenu>
        ))}
      </div>
    );
  },
};
