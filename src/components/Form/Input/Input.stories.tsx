import type { Meta, StoryObj } from '@storybook/react';
import { Input } from 'voyage-design-system';

const meta: Meta<typeof Input> = {
  title: 'Components/Form/Input',
  component: Input,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
## 📝 Input 컴포넌트

사용자 입력을 받는 다양한 스타일의 입력 필드 컴포넌트입니다.

### 주요 특징:
- **다양한 변형**: default, filled, outline
- **여러 크기**: sm, default, lg  
- **상태 관리**: default, error, success, disabled
- **라벨 및 도움말**: 라벨, 헬퍼 텍스트, 에러 메시지 지원
- **완전한 접근성**: 스크린 리더 및 키보드 탐색 지원

### 사용 예시:
\`\`\`tsx
import { Input } from 'voyage-design-system';

<Input
  label="이메일"
  type="email"
  placeholder="이메일을 입력하세요"
  helperText="유효한 이메일 주소를 입력해주세요"
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
    label: '이름',
    placeholder: '이름을 입력하세요',
  },
};

export const Variants: Story = {
  name: '다양한 스타일',
  render: () => (
    <div className='space-y-4 w-80'>
      <Input variant='default' placeholder='기본 스타일' label='기본' />
      <Input variant='filled' placeholder='채워진 스타일' label='채워진 스타일' />
      <Input variant='outline' placeholder='아웃라인 스타일' label='아웃라인' />
    </div>
  ),
};

export const Sizes: Story = {
  name: '다양한 크기',
  render: () => (
    <div className='space-y-4 w-80'>
      <Input size='sm' placeholder='작은 크기' label='작은 크기' />
      <Input size='default' placeholder='기본 크기' label='기본 크기' />
      <Input size='lg' placeholder='큰 크기' label='큰 크기' />
    </div>
  ),
};

export const States: Story = {
  name: '다양한 상태',
  render: () => (
    <div className='space-y-4 w-80'>
      <Input state='default' placeholder='기본 상태' label='기본 상태' />
      <Input state='success' placeholder='성공 상태' label='성공 상태' helperText='올바르게 입력되었습니다' />
      <Input state='error' placeholder='에러 상태' label='에러 상태' error='필수 입력 항목입니다' />
      <Input state='disabled' placeholder='비활성 상태' label='비활성 상태' disabled value='편집할 수 없음' />
    </div>
  ),
};

export const WithHelperText: Story = {
  name: '도움말 텍스트',
  args: {
    label: '비밀번호',
    type: 'password',
    placeholder: '비밀번호를 입력하세요',
    helperText: '8자 이상, 영문/숫자/특수문자 포함',
  },
};

export const WithError: Story = {
  name: '에러 상태',
  args: {
    label: '이메일',
    type: 'email',
    placeholder: 'example@domain.com',
    error: '유효한 이메일 주소를 입력해주세요',
    state: 'error',
  },
};

export const InputTypes: Story = {
  name: '다양한 입력 타입',
  render: () => (
    <div className='space-y-4 w-80'>
      <Input label='텍스트' type='text' placeholder='텍스트 입력' />
      <Input label='이메일' type='email' placeholder='example@domain.com' />
      <Input label='비밀번호' type='password' placeholder='비밀번호 입력' />
      <Input label='숫자' type='number' placeholder='숫자만 입력' />
      <Input label='전화번호' type='tel' placeholder='010-0000-0000' />
      <Input label='웹사이트' type='url' placeholder='https://example.com' />
      <Input label='검색' type='search' placeholder='검색어 입력' />
      <Input label='날짜' type='date' />
      <Input label='시간' type='time' />
    </div>
  ),
};
