import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { useState } from 'react';
import { Input } from './Input';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
## 📝 Input 컴포넌트

다양한 스타일과 크기를 지원하는 React 19 호환 입력 필드 컴포넌트입니다.

### 주요 특징:
- **다양한 변형**: default, outline, filled
- **여러 크기**: sm, md, lg
- **상태 관리**: error, disabled 상태 지원
- **접근성**: 라벨 연결 및 스크린 리더 지원
- **React 19**: forwardRef와 최신 TypeScript 타입 지원

### 사용 예시:
\`\`\`tsx
import { Input } from './Input';

<Input
  label="이메일"
  type="email"
  placeholder="이메일을 입력하세요"
  required
/>
\`\`\`
        `,
      },
    },
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'outline', 'filled'],
      description: '입력 필드의 시각적 스타일을 설정합니다.',
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: '입력 필드의 크기를 설정합니다.',
    },
    label: {
      control: { type: 'text' },
      description: '라벨 텍스트입니다.',
    },
    error: {
      control: { type: 'text' },
      description: '에러 메시지입니다.',
    },
    helpText: {
      control: { type: 'text' },
      description: '도움말 텍스트입니다.',
    },
    required: {
      control: { type: 'boolean' },
      description: '필수 입력 필드 여부입니다.',
    },
    disabled: {
      control: { type: 'boolean' },
      description: '입력 필드를 비활성화합니다.',
    },
    placeholder: {
      control: { type: 'text' },
      description: '플레이스홀더 텍스트입니다.',
    },
  },
  args: {
    onChange: fn(),
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: '기본 입력',
    placeholder: '텍스트를 입력하세요',
  },
};

export const Variants: Story = {
  name: '다양한 스타일',
  render: () => (
    <div className='space-y-4 w-80'>
      <Input variant='default' placeholder='기본 스타일' label='기본' />
      <Input variant='outline' placeholder='아웃라인 스타일' label='아웃라인' />
      <Input variant='filled' placeholder='채워진 스타일' label='채워진 스타일' />
    </div>
  ),
};

export const Sizes: Story = {
  name: '다양한 크기',
  render: () => (
    <div className='space-y-4 w-80'>
      <Input size='sm' placeholder='작은 크기' label='작은 크기' />
      <Input size='md' placeholder='보통 크기' label='보통 크기' />
      <Input size='lg' placeholder='큰 크기' label='큰 크기' />
    </div>
  ),
};

export const WithLabel: Story = {
  name: '라벨과 함께',
  args: {
    label: '이메일 주소',
    type: 'email',
    placeholder: 'example@email.com',
    required: true,
  },
};

export const WithError: Story = {
  name: '에러 상태',
  args: {
    label: '비밀번호',
    type: 'password',
    error: '비밀번호는 8자 이상이어야 합니다.',
    value: '123',
  },
};

export const WithHelpText: Story = {
  name: '도움말 텍스트',
  args: {
    label: '사용자명',
    placeholder: '사용자명을 입력하세요',
    helpText: '영문, 숫자, 언더스코어(_)만 사용 가능합니다.',
  },
};

export const Disabled: Story = {
  name: '비활성 상태',
  args: {
    label: '비활성 입력',
    placeholder: '입력할 수 없습니다',
    disabled: true,
    value: '읽기 전용 값',
  },
};

const InteractiveExample = () => {
  const [value, setValue] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);

    if (newValue.length < 3) {
      setError('최소 3자 이상 입력해주세요.');
    } else {
      setError('');
    }
  };

  return (
    <div className='w-80'>
      <Input
        label='실시간 검증'
        value={value}
        onChange={handleChange}
        error={error}
        placeholder='실시간으로 검증됩니다'
        helpText='입력하면서 실시간으로 검증이 이루어집니다.'
      />
      <p className='mt-2 text-sm text-gray-600'>입력된 값: {value || '(없음)'}</p>
    </div>
  );
};

export const Interactive: Story = {
  name: '상호작용 예시',
  render: () => <InteractiveExample />,
};
