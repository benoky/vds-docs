import { useActionState, type ReactNode } from 'react';
import { Button, type ButtonProps } from '../Button/Button';

export interface ActionButtonProps extends Omit<ButtonProps, 'onClick' | 'loading'> {
  /**
   * 실행할 액션 함수입니다.
   */
  action: (prevState: ActionState, formData: FormData) => Promise<ActionState>;

  /**
   * 액션 실행 중일 때 표시할 내용입니다.
   */
  pendingContent?: ReactNode;

  /**
   * 초기 상태입니다.
   */
  initialState?: ActionState;
}

export interface ActionState {
  success?: boolean;
  message?: string;
  data?: any;
}

// 예시 액션 함수들
export const createUserAction = async (prevState: ActionState, formData: FormData): Promise<ActionState> => {
  // 인위적인 지연 시뮬레이션
  await new Promise(resolve => setTimeout(resolve, 2000));

  const name = formData.get('name') as string;

  if (!name || name.length < 2) {
    return {
      success: false,
      message: '이름은 2자 이상이어야 합니다.',
    };
  }

  // 랜덤하게 성공/실패 결정
  const isSuccess = Math.random() > 0.3;

  if (isSuccess) {
    return {
      success: true,
      message: `${name}님이 성공적으로 생성되었습니다!`,
      data: { id: Math.random().toString(36).substr(2, 9), name },
    };
  } else {
    return {
      success: false,
      message: '서버 오류가 발생했습니다. 다시 시도해주세요.',
    };
  }
};

export const deleteAction = async (_prevState: ActionState): Promise<ActionState> => {
  await new Promise(resolve => setTimeout(resolve, 1500));

  return {
    success: true,
    message: '성공적으로 삭제되었습니다.',
  };
};

export const ActionButton = ({
  action,
  pendingContent = '처리 중...',
  initialState = {},
  children,
  variant = 'primary',
  ...props
}: ActionButtonProps) => {
  const [state, submitAction, isPending] = useActionState(action, initialState);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    submitAction(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='space-y-4'>
        <Button
          type='submit'
          variant={state.success === false ? 'destructive' : variant}
          loading={isPending}
          disabled={isPending}
          {...props}
        >
          {isPending ? pendingContent : children}
        </Button>

        {state.message && (
          <div
            className={`p-3 rounded-md text-sm ${
              state.success === false
                ? 'bg-red-50 text-red-700 border border-red-200'
                : 'bg-green-50 text-green-700 border border-green-200'
            }`}
            role='alert'
          >
            {state.message}
          </div>
        )}

        {state.data && (
          <div className='p-3 bg-blue-50 text-blue-700 border border-blue-200 rounded-md text-sm'>
            <strong>생성된 데이터:</strong>
            <pre className='mt-1 text-xs'>{JSON.stringify(state.data, null, 2)}</pre>
          </div>
        )}
      </div>
    </form>
  );
};

ActionButton.displayName = 'ActionButton';
