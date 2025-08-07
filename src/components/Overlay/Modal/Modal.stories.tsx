import { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Modal, Button } from 'voyage-design-system';

const meta: Meta<typeof Modal> = {
  title: 'Components/Overlay/Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
## 🪟 Modal 컴포넌트

사용자에게 중요한 정보를 표시하거나 확인을 받기 위한 모달 다이얼로그 컴포넌트입니다.

### 주요 특징:
- **다양한 타입**: alert (단일 버튼), confirm (이중 버튼)
- **완전한 접근성**: 키보드 탐색, 스크린 리더, 포커스 트랩 지원
- **커스터마이징**: 버튼 텍스트, 스타일, 핸들러 완전 커스터마이징 가능
- **배경 클릭 방지**: 실수로 닫히는 것을 방지
- **반응형 디자인**: 다양한 화면 크기에 대응

### 사용 예시:
\`\`\`tsx
import { Modal, Button } from 'voyage-design-system';
import { useState } from 'react';

const [open, setOpen] = useState(false);

<Button onClick={() => setOpen(true)}>모달 열기</Button>

<Modal
  variant="confirm"
  title="정말 삭제하시겠습니까?"
  description="이 작업은 되돌릴 수 없습니다."
  open={open}
  cancelText="취소"
  confirmText="삭제"
  onCancel={() => setOpen(false)}
  onConfirm={() => {
    // 삭제 로직
    setOpen(false);
  }}
/>
\`\`\`

### Props 설명:
- **variant**: 'alert' | 'confirm' - 모달 타입
- **title**: string - 모달 제목
- **description**: string - 모달 설명
- **open**: boolean - 모달 열림 상태
- **cancelText**: string - 취소 버튼 텍스트 (confirm 타입만)
- **confirmText**: string - 확인 버튼 텍스트
- **confirmButtonVariant**: Button variant - 확인 버튼 스타일
- **cancelButtonVariant**: Button variant - 취소 버튼 스타일
- **onCancel**: () => void - 취소 버튼 클릭 핸들러
- **onConfirm**: () => void - 확인 버튼 클릭 핸들러

### 접근성 고려사항:
- ESC 키로 모달 닫기
- Tab 키로 포커스 순환
- 배경 클릭 시 모달 닫기 방지
- 스크린 리더를 위한 적절한 ARIA 속성
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'radio',
      options: ['alert', 'confirm'],
      description: '모달 타입',
    },
    title: {
      control: 'text',
      description: '모달 제목',
    },
    description: {
      control: 'text',
      description: '모달 설명',
    },
    open: {
      control: 'boolean',
      description: '모달 열림 여부',
    },
    cancelText: {
      control: 'text',
      description: '취소 버튼 텍스트 (confirm 타입만)',
    },
    confirmText: {
      control: 'text',
      description: '확인 버튼 텍스트',
    },
    confirmButtonVariant: {
      control: 'select',
      options: ['default', 'outline', 'secondary', 'destructive', 'ghost'],
      description: '확인 버튼의 스타일 variant',
    },
    cancelButtonVariant: {
      control: 'select',
      options: ['default', 'outline', 'secondary', 'destructive', 'ghost'],
      description: '취소 버튼의 스타일 variant',
    },
    onCancel: {
      action: 'onCancel',
      description: '취소 버튼 클릭 핸들러 (confirm 타입만)',
    },
    onConfirm: {
      action: 'onConfirm',
      description: '확인 버튼 클릭 핸들러',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Modal>;

// Alert 모달 예시
export const AlertModal: Story = {
  args: {
    variant: 'alert',
    title: 'Alert Modal',
    description: 'This is an alert modal. It has only one button to confirm the action.',
    open: true,
    confirmText: 'OK',
    confirmButtonVariant: 'default',
    onConfirm: () => console.log('Confirmed'),
  },
};

// Confirm 모달 예시
export const ConfirmModal: Story = {
  args: {
    variant: 'confirm',
    title: 'Are you sure absolutely sure?',
    description:
      'This action cannot be undone. This will permanently delete your account and remove your data from our servers.',
    open: true,
    cancelText: 'Cancel',
    confirmText: 'Delete',
    confirmButtonVariant: 'default',
    cancelButtonVariant: 'outline',
    onCancel: () => console.log('Cancelled'),
    onConfirm: () => console.log('Confirmed'),
  },
};

// 버튼 클릭으로 모달 제어 예시
export const ModalWithTrigger: Story = {
  render: function Render() {
    const [openAlert, setOpenAlert] = useState(false);
    const [openConfirm, setOpenConfirm] = useState(false);

    return (
      <div className='flex flex-col gap-4'>
        <Button onClick={() => setOpenAlert(true)}>Open Alert Modal</Button>
        <Button onClick={() => setOpenConfirm(true)}>Open Confirm Modal</Button>

        <Modal
          variant='alert'
          title='Information'
          description='This is an information alert modal.'
          open={openAlert}
          confirmText='OK'
          confirmButtonVariant='default'
          onConfirm={() => setOpenAlert(false)}
        />

        <Modal
          variant='confirm'
          title='Are you absolutely sure?'
          description='This will permanently delete your account. This action cannot be undone.'
          open={openConfirm}
          cancelText='Cancel'
          confirmText='Delete Account'
          cancelButtonVariant='outline'
          confirmButtonVariant='default'
          onCancel={() => setOpenConfirm(false)}
          onConfirm={() => {
            console.log('Confirmed deletion');
            setOpenConfirm(false);
          }}
        />
      </div>
    );
  },
};
