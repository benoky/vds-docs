import type { Meta, StoryObj } from '@storybook/react';
import { ActionButton, createUserAction, deleteAction, type ActionState } from './ActionButton';
import { Input } from '../Input/Input';

const meta: Meta<typeof ActionButton> = {
  title: 'React 19/ActionButton',
  component: ActionButton,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
## ⚡ ActionButton 컴포넌트

React 19의 새로운 \`useActionState\` Hook을 활용한 액션 버튼 컴포넌트입니다.

### React 19 특징:
- **useActionState**: 서버 액션과의 상호작용을 관리
- **자동 상태 관리**: 로딩, 성공, 실패 상태 자동 처리
- **폼 데이터 처리**: FormData를 통한 자동 데이터 수집
- **오류 처리**: 액션 실행 중 발생하는 오류 자동 처리

### 사용 예시:
\`\`\`tsx
import { ActionButton, createUserAction } from './ActionButton';

<ActionButton action={createUserAction}>
  사용자 생성
</ActionButton>
\`\`\`
        `,
      },
    },
  },
  argTypes: {
    action: {
      description: '실행할 액션 함수입니다.',
    },
    pendingContent: {
      control: { type: 'text' },
      description: '액션 실행 중일 때 표시할 내용입니다.',
    },
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'outline', 'ghost', 'destructive'],
      description: '버튼의 시각적 스타일을 설정합니다.',
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: '버튼의 크기를 설정합니다.',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const CreateUser: Story = {
  name: '사용자 생성 액션',
  render: () => (
    <div className='w-96 space-y-4'>
      <Input name='name' label='사용자 이름' placeholder='이름을 입력하세요' required />
      <ActionButton action={createUserAction} pendingContent='생성 중...'>
        사용자 생성
      </ActionButton>
    </div>
  ),
};

export const DeleteAction: Story = {
  name: '삭제 액션',
  args: {
    action: deleteAction,
    variant: 'destructive',
    pendingContent: '삭제 중...',
    children: '삭제하기',
  },
};

// 즉시 성공하는 액션
const immediateSuccessAction = async (): Promise<ActionState> => {
  return {
    success: true,
    message: '즉시 성공했습니다!',
  };
};

export const ImmediateSuccess: Story = {
  name: '즉시 성공',
  args: {
    action: immediateSuccessAction,
    children: '즉시 성공',
  },
};

// 즉시 실패하는 액션
const immediateFailAction = async (): Promise<ActionState> => {
  return {
    success: false,
    message: '즉시 실패했습니다!',
  };
};

export const ImmediateFail: Story = {
  name: '즉시 실패',
  args: {
    action: immediateFailAction,
    children: '즉시 실패',
  },
};

// 긴 로딩 시간을 가진 액션
const longLoadingAction = async (): Promise<ActionState> => {
  await new Promise(resolve => setTimeout(resolve, 5000));
  return {
    success: true,
    message: '긴 작업이 완료되었습니다!',
  };
};

export const LongLoading: Story = {
  name: '긴 로딩 시간',
  args: {
    action: longLoadingAction,
    pendingContent: '5초 대기 중...',
    children: '긴 작업 시작',
  },
};

// 복잡한 폼 데이터를 처리하는 액션
const complexFormAction = async (prevState: ActionState, formData: FormData): Promise<ActionState> => {
  await new Promise(resolve => setTimeout(resolve, 1500));

  const email = formData.get('email') as string;
  const message = formData.get('message') as string;

  if (!email || !message) {
    return {
      success: false,
      message: '모든 필드를 입력해주세요.',
    };
  }

  return {
    success: true,
    message: '메시지가 성공적으로 전송되었습니다!',
    data: { email, message, timestamp: new Date().toISOString() },
  };
};

export const ComplexForm: Story = {
  name: '복잡한 폼',
  render: () => (
    <div className='w-96 space-y-4'>
      <Input name='email' type='email' label='이메일' placeholder='email@example.com' required />
      <div>
        <label htmlFor='message' className='block text-sm font-medium text-gray-700 mb-1'>
          메시지
        </label>
        <textarea
          name='message'
          id='message'
          rows={4}
          className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500'
          placeholder='메시지를 입력하세요'
          required
        />
      </div>
      <ActionButton action={complexFormAction} pendingContent='전송 중...'>
        메시지 전송
      </ActionButton>
    </div>
  ),
};
