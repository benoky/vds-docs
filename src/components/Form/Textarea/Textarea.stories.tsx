import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Textarea } from 'voyage-design-system';

const meta: Meta<typeof Textarea> = {
  title: 'Components/Form/Textarea',
  component: Textarea,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
## 📝 Textarea 컴포넌트

여러 줄의 텍스트를 입력할 수 있는 텍스트 영역 컴포넌트입니다.

### 주요 특징:
- **다양한 변형**: default, error, success
- **여러 크기**: sm, default, lg
- **라벨 및 도움말**: 라벨, 헬퍼 텍스트, 에러 메시지 지원
- **문자 수 카운트**: 최대 길이 및 현재 문자 수 표시
- **자동 크기 조정**: 내용에 따른 자동 높이 조정
- **완전한 접근성**: 스크린 리더 및 키보드 탐색 지원

### 사용 예시:
\`\`\`tsx
import { Textarea } from 'voyage-design-system';

<Textarea
  label="자기소개"
  placeholder="자기소개를 입력하세요"
  helperText="최대 500자까지 입력 가능합니다"
  maxLength={500}
  showCharCount={true}
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
    placeholder: '내용을 입력하세요',
  },
};

export const WithLabel: Story = {
  name: '라벨과 함께',
  args: {
    label: '자기소개',
    placeholder: '자기소개를 입력하세요',
  },
};

export const Variants: Story = {
  name: '다양한 스타일',
  render: () => (
    <div className='space-y-4 w-80'>
      <Textarea variant='default' label='기본 스타일' placeholder='기본 스타일' />
      <Textarea
        variant='success'
        label='성공 스타일'
        placeholder='성공 스타일'
        helperText='성공적으로 완료되었습니다'
      />
      <Textarea variant='error' label='에러 스타일' placeholder='에러 스타일' error='에러가 발생했습니다' />
    </div>
  ),
};

export const Sizes: Story = {
  name: '다양한 크기',
  render: () => (
    <div className='space-y-4 w-80'>
      <Textarea size='sm' label='작은 크기' placeholder='작은 크기' />
      <Textarea size='default' label='기본 크기' placeholder='기본 크기' />
      <Textarea size='lg' label='큰 크기' placeholder='큰 크기' />
    </div>
  ),
};

export const WithHelperText: Story = {
  name: '도움말 텍스트',
  args: {
    label: '프로젝트 설명',
    placeholder: '프로젝트에 대한 설명을 입력하세요',
    helperText: '프로젝트의 목적과 주요 기능을 설명해주세요',
  },
};

export const WithError: Story = {
  name: '에러 상태',
  args: {
    label: '필수 입력 항목',
    placeholder: '내용을 입력하세요',
    error: '이 항목은 필수로 입력해야 합니다',
  },
};

export const WithCharCount: Story = {
  name: '문자 수 카운트',
  args: {
    label: '자기소개',
    placeholder: '자기소개를 입력하세요',
    maxLength: 200,
    showCharCount: true,
    helperText: '최대 200자까지 입력 가능합니다',
  },
};

export const AutoResize: Story = {
  name: '자동 크기 조정',
  args: {
    label: '동적 높이',
    placeholder: '내용을 입력하면 높이가 자동으로 조정됩니다',
    autoResize: true,
    helperText: '내용에 따라 높이가 자동으로 조정됩니다',
  },
};

export const Disabled: Story = {
  name: '비활성 상태',
  args: {
    label: '비활성화된 텍스트 영역',
    placeholder: '편집할 수 없습니다',
    disabled: true,
    value: '이 텍스트 영역은 비활성화되어 있습니다',
  },
};

const InteractiveExample = () => {
  const [text, setText] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setText(value);

    // 간단한 유효성 검사
    if (value.length < 10) {
      setError('최소 10자 이상 입력해주세요');
    } else if (value.length > 500) {
      setError('최대 500자까지 입력 가능합니다');
    } else {
      setError('');
    }
  };

  return (
    <div className='w-80'>
      <Textarea
        label='자기소개'
        placeholder='자기소개를 입력하세요 (최소 10자, 최대 500자)'
        value={text}
        onChange={handleChange}
        maxLength={500}
        showCharCount={true}
        error={error}
        helperText={!error ? '자기소개를 입력해주세요' : undefined}
        variant={error ? 'error' : text && !error ? 'success' : 'default'}
      />

      <div className='mt-4 p-3 bg-gray-50 rounded-lg text-sm'>
        <p>
          <strong>입력된 텍스트:</strong>
        </p>
        <p className='mt-2 text-gray-600'>{text || '(입력된 내용이 없습니다)'}</p>
      </div>
    </div>
  );
};
