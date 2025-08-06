import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Select } from 'voyage-design-system';

const meta: Meta<typeof Select> = {
  title: 'Components/Form/Select',
  component: Select,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
## 📋 Select 컴포넌트

다양한 옵션 중에서 선택할 수 있는 드롭다운 선택 컴포넌트입니다.

### 주요 특징:
- **다양한 변형**: default, error
- **여러 크기**: sm, default, lg, auto
- **라벨 위치**: top, left
- **상태 관리**: disabled, error 상태 지원
- **완전한 접근성**: 스크린 리더 및 키보드 탐색 지원
- **헬퍼 텍스트**: 도움말 및 에러 메시지 지원

### 사용 예시:
\`\`\`tsx
import { Select } from 'voyage-design-system';

const options = [
  { label: '옵션 1', value: 'option1' },
  { label: '옵션 2', value: 'option2' },
  { label: '옵션 3', value: 'option3' },
];

<Select
  label="선택하세요"
  options={options}
  placeholder="옵션을 선택하세요"
  helperText="원하는 옵션을 선택해주세요"
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

const defaultOptions = [
  { label: '옵션 1', value: 'option1' },
  { label: '옵션 2', value: 'option2' },
  { label: '옵션 3', value: 'option3' },
  { label: '옵션 4', value: 'option4' },
  { label: '옵션 5', value: 'option5' },
];

export const Default: Story = {
  args: {
    options: defaultOptions,
    placeholder: '옵션을 선택하세요',
  },
};

export const WithLabel: Story = {
  name: '라벨과 함께',
  args: {
    label: '선택하세요',
    options: defaultOptions,
    placeholder: '옵션을 선택하세요',
  },
};

export const Variants: Story = {
  name: '다양한 스타일',
  render: () => (
    <div className='space-y-4 w-80'>
      <Select variant='default' label='기본 스타일' options={defaultOptions} placeholder='기본 스타일' />
      <Select
        variant='error'
        label='에러 스타일'
        options={defaultOptions}
        placeholder='에러 스타일'
        helperText='에러가 발생했습니다'
      />
    </div>
  ),
};

export const Sizes: Story = {
  name: '다양한 크기',
  render: () => (
    <div className='space-y-4 w-80'>
      <Select size='sm' label='작은 크기' options={defaultOptions} placeholder='작은 크기' />
      <Select size='default' label='기본 크기' options={defaultOptions} placeholder='기본 크기' />
      <Select size='lg' label='큰 크기' options={defaultOptions} placeholder='큰 크기' />
      <Select size='auto' label='자동 크기' options={defaultOptions} placeholder='자동 크기' />
    </div>
  ),
};

export const LabelPositions: Story = {
  name: '라벨 위치',
  render: () => (
    <div className='space-y-4 w-80'>
      <Select labelPosition='top' label='상단 라벨' options={defaultOptions} placeholder='상단 라벨' />
      <Select labelPosition='left' label='좌측 라벨' options={defaultOptions} placeholder='좌측 라벨' />
    </div>
  ),
};

export const WithHelperText: Story = {
  name: '도움말 텍스트',
  args: {
    label: '카테고리',
    options: [
      { label: '개발', value: 'development' },
      { label: '디자인', value: 'design' },
      { label: '마케팅', value: 'marketing' },
      { label: '운영', value: 'operations' },
    ],
    placeholder: '카테고리를 선택하세요',
    helperText: '프로젝트의 카테고리를 선택해주세요',
  },
};

export const WithDisabledOptions: Story = {
  name: '비활성화된 옵션',
  render: () => (
    <div className='space-y-4 w-80'>
      <Select
        label='옵션 상태'
        options={[
          { label: '활성 옵션 1', value: 'active1' },
          { label: '활성 옵션 2', value: 'active2' },
          { label: '비활성 옵션', value: 'disabled', disabled: true },
          { label: '활성 옵션 3', value: 'active3' },
        ]}
        placeholder='옵션을 선택하세요'
        helperText='일부 옵션은 비활성화되어 있습니다'
      />
    </div>
  ),
};

export const Disabled: Story = {
  name: '비활성 상태',
  args: {
    label: '비활성화된 선택',
    options: defaultOptions,
    placeholder: '선택할 수 없음',
    disabled: true,
    helperText: '이 선택은 비활성화되어 있습니다',
  },
};

const InteractiveExample = () => {
  const [selectedValue, setSelectedValue] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setSelectedValue(value);

    // 간단한 유효성 검사
    if (!value) {
      setError('카테고리를 선택해주세요');
    } else {
      setError('');
    }
  };

  return (
    <div className='space-y-4 w-80'>
      <Select
        label='프로젝트 카테고리'
        options={[
          { label: '웹 개발', value: 'web' },
          { label: '모바일 앱', value: 'mobile' },
          { label: '데이터 분석', value: 'data' },
          { label: 'AI/ML', value: 'ai' },
          { label: '클라우드', value: 'cloud' },
        ]}
        placeholder='카테고리를 선택하세요'
        value={selectedValue}
        onChange={handleChange}
        variant={error ? 'error' : 'default'}
        helperText={error || '프로젝트의 카테고리를 선택해주세요'}
      />

      <div className='mt-6 p-3 bg-gray-50 rounded-lg text-sm'>
        <p>
          <strong>선택된 값:</strong> {selectedValue || '(없음)'}
        </p>
        <p>
          <strong>상태:</strong> {error ? '에러' : selectedValue ? '성공' : '기본'}
        </p>
      </div>
    </div>
  );
};
