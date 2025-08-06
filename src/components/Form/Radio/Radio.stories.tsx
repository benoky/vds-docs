import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Radio } from 'voyage-design-system';

const meta: Meta<typeof Radio> = {
  title: 'Components/Form/Radio',
  component: Radio,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
## 🔘 Radio 컴포넌트

사용자가 여러 선택지 중 하나만 선택할 수 있는 라디오 버튼 컴포넌트입니다.

### 주요 특징:
- **다양한 변형**: default, error, success, warning, primary
- **여러 크기**: sm, default, lg
- **라벨 위치**: left, right
- **배치 방향**: horizontal, vertical
- **상태 관리**: checked, disabled
- **완전한 접근성**: 키보드 탐색 및 스크린 리더 지원
- **헬퍼 텍스트**: 도움말 및 에러 메시지 지원

### 사용 예시:
\`\`\`tsx
import { Radio } from 'voyage-design-system';

const options = [
  { label: '옵션 1', value: 'option1' },
  { label: '옵션 2', value: 'option2' },
  { label: '옵션 3', value: 'option3' },
];

<Radio
  options={options}
  value={selectedValue}
  onValueChange={handleChange}
  label="선택하세요"
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
];

export const Default: Story = {
  args: {
    options: defaultOptions,
  },
};

export const WithLabel: Story = {
  name: '라벨과 함께',
  args: {
    label: '선택하세요',
    options: defaultOptions,
    helperText: '원하는 옵션을 선택해주세요',
  },
};

export const Variants: Story = {
  name: '다양한 스타일',
  render: () => (
    <div className='space-y-6 w-80'>
      <div>
        <h3 className='text-lg font-semibold mb-3'>기본 스타일</h3>
        <Radio options={defaultOptions} variant='default' />
      </div>

      <div>
        <h3 className='text-lg font-semibold mb-3'>에러 스타일</h3>
        <Radio options={defaultOptions} variant='error' error={true} helperText='에러가 발생했습니다' />
      </div>

      <div>
        <h3 className='text-lg font-semibold mb-3'>성공 스타일</h3>
        <Radio options={defaultOptions} variant='success' helperText='성공적으로 완료되었습니다' />
      </div>

      <div>
        <h3 className='text-lg font-semibold mb-3'>경고 스타일</h3>
        <Radio options={defaultOptions} variant='warning' helperText='주의가 필요합니다' />
      </div>

      <div>
        <h3 className='text-lg font-semibold mb-3'>주요 스타일</h3>
        <Radio options={defaultOptions} variant='primary' helperText='주요 선택 항목입니다' />
      </div>
    </div>
  ),
};

export const Sizes: Story = {
  name: '다양한 크기',
  render: () => (
    <div className='space-y-6 w-80'>
      <div>
        <h3 className='text-lg font-semibold mb-3'>작은 크기</h3>
        <Radio options={defaultOptions} size='sm' />
      </div>

      <div>
        <h3 className='text-lg font-semibold mb-3'>기본 크기</h3>
        <Radio options={defaultOptions} size='default' />
      </div>

      <div>
        <h3 className='text-lg font-semibold mb-3'>큰 크기</h3>
        <Radio options={defaultOptions} size='lg' />
      </div>
    </div>
  ),
};

export const Directions: Story = {
  name: '배치 방향',
  render: () => (
    <div className='space-y-6 w-80'>
      <div>
        <h3 className='text-lg font-semibold mb-3'>수직 배치</h3>
        <Radio options={defaultOptions} direction='vertical' />
      </div>

      <div>
        <h3 className='text-lg font-semibold mb-3'>수평 배치</h3>
        <Radio options={defaultOptions} direction='horizontal' />
      </div>
    </div>
  ),
};

export const WithHelperText: Story = {
  name: '도움말 텍스트',
  render: () => {
    const optionsWithHelper = [
      { label: '개인', value: 'personal', helperText: '개인 사용자용 플랜' },
      { label: '팀', value: 'team', helperText: '소규모 팀을 위한 플랜' },
      { label: '기업', value: 'enterprise', helperText: '대규모 기업을 위한 플랜' },
    ];

    return (
      <div className='w-80'>
        <Radio label='플랜 선택' options={optionsWithHelper} helperText='사용 목적에 맞는 플랜을 선택해주세요' />
      </div>
    );
  },
};

export const WithDisabledOptions: Story = {
  name: '비활성화된 옵션',
  render: () => {
    const optionsWithDisabled = [
      { label: '활성 옵션 1', value: 'active1' },
      { label: '활성 옵션 2', value: 'active2' },
      { label: '비활성 옵션', value: 'disabled', disabled: true },
      { label: '활성 옵션 3', value: 'active3' },
    ];

    return (
      <div className='w-80'>
        <Radio label='옵션 선택' options={optionsWithDisabled} helperText='일부 옵션은 비활성화되어 있습니다' />
      </div>
    );
  },
};

export const Disabled: Story = {
  name: '비활성 상태',
  args: {
    label: '비활성화된 라디오',
    options: defaultOptions,
    disabled: true,
    helperText: '이 라디오는 비활성화되어 있습니다',
  },
};

const InteractiveExample = () => {
  const [selectedValue, setSelectedValue] = useState('');

  const handleValueChange = (value: string) => {
    setSelectedValue(value);
    console.log('선택된 값:', value);
  };

  return (
    <div className='w-80'>
      <Radio
        label='선택하세요'
        options={defaultOptions}
        value={selectedValue}
        onValueChange={handleValueChange}
        helperText='원하는 옵션을 선택해주세요'
      />

      <div className='mt-4 p-3 bg-gray-50 rounded-lg text-sm'>
        <p>
          <strong>선택된 값:</strong> {selectedValue || '(없음)'}
        </p>
      </div>
    </div>
  );
};
