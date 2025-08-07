import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Checkbox } from 'voyage-design-system';

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Form/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
## ☑️ Checkbox 컴포넌트

사용자가 하나 이상의 옵션을 선택할 수 있는 체크박스 컴포넌트입니다.

### 주요 특징:
- **다양한 변형**: default, error, success, warning, primary
- **여러 크기**: sm, default, lg
- **라벨 위치**: left, right
- **상태 관리**: checked, indeterminate, disabled
- **완전한 접근성**: 키보드 탐색 및 스크린 리더 지원
- **헬퍼 텍스트**: 도움말 및 에러 메시지 지원

### 사용 예시:
\`\`\`tsx
import { Checkbox } from 'voyage-design-system';

<Checkbox
  label="이용약관에 동의합니다"
  checked={isChecked}
  onChange={handleChange}
  helperText="서비스 이용을 위해 필수 동의 항목입니다"
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
    label: '기본 체크박스',
  },
};

export const WithLabel: Story = {
  name: '라벨과 함께',
  args: {
    label: '이용약관에 동의합니다',
    helperText: '서비스 이용을 위해 필수 동의 항목입니다',
  },
};

export const Variants: Story = {
  name: '다양한 스타일',
  render: () => (
    <div className='space-y-4 w-80'>
      <Checkbox label='기본 스타일' variant='default' />
      <Checkbox label='에러 스타일' variant='error' helperText='에러가 발생했습니다' />
      <Checkbox label='성공 스타일' variant='success' helperText='성공적으로 완료되었습니다' />
      <Checkbox label='경고 스타일' variant='warning' helperText='주의가 필요합니다' />
      <Checkbox label='주요 스타일' variant='primary' helperText='주요 동의 항목입니다' />
    </div>
  ),
};

export const Sizes: Story = {
  name: '다양한 크기',
  render: () => (
    <div className='space-y-4 w-80'>
      <Checkbox size='sm' label='작은 크기' />
      <Checkbox size='default' label='기본 크기' />
      <Checkbox size='lg' label='큰 크기' />
    </div>
  ),
};

export const LabelPositions: Story = {
  name: '라벨 위치',
  render: () => (
    <div className='space-y-4 w-80'>
      <Checkbox labelPosition='left' label='좌측 라벨' />
      <Checkbox labelPosition='right' label='우측 라벨' />
    </div>
  ),
};

export const WithHelperText: Story = {
  name: '도움말 텍스트',
  args: {
    label: '마케팅 정보 수신 동의',
    helperText: '새로운 상품과 이벤트 정보를 이메일로 받아보실 수 있습니다',
  },
};

export const WithError: Story = {
  name: '에러 상태',
  args: {
    label: '필수 동의 항목',
    error: true,
    helperText: '이 항목은 필수로 동의해야 합니다',
  },
};

export const Indeterminate: Story = {
  name: '부분 선택 상태',
  render: function Indeterminate() {
    const [checked, setChecked] = useState(false);
    const [indeterminate, setIndeterminate] = useState(true);

    return (
      <div className='space-y-4 w-80'>
        <Checkbox
          label='전체 선택'
          checked={checked}
          indeterminate={indeterminate}
          onChange={e => {
            setChecked(e.target.checked);
            setIndeterminate(false);
          }}
          helperText='일부 항목이 선택된 상태입니다'
        />
      </div>
    );
  },
};

export const Disabled: Story = {
  name: '비활성 상태',
  render: () => (
    <div className='space-y-4 w-80'>
      <Checkbox label='비활성 체크박스' disabled />
      <Checkbox label='비활성 체크된 체크박스' disabled checked />
    </div>
  ),
};
