import type { Meta, StoryObj } from '@storybook/react';
import { OptimisticCounter } from './OptimisticCounter';

const meta: Meta<typeof OptimisticCounter> = {
  title: 'React 19/OptimisticCounter',
  component: OptimisticCounter,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
## 🔄 OptimisticCounter 컴포넌트

React 19의 새로운 \`useOptimistic\` Hook을 활용한 낙관적 업데이트 카운터 컴포넌트입니다.

### React 19 특징:
- **useOptimistic**: 낙관적 업데이트로 즉각적인 UI 반응
- **useTransition**: 비동기 상태 업데이트 관리
- **자동 롤백**: 서버 에러 시 자동으로 이전 상태로 복원
- **실시간 동기화**: 서버와 클라이언트 상태 자동 동기화

### 작동 원리:
1. 사용자가 버튼을 클릭하면 즉시 UI가 업데이트됩니다 (낙관적 업데이트)
2. 백그라운드에서 서버 업데이트가 진행됩니다
3. 서버 응답에 따라 최종 상태가 결정됩니다
4. 에러 발생 시 자동으로 이전 상태로 롤백됩니다

### 사용 예시:
\`\`\`tsx
import { OptimisticCounter } from './OptimisticCounter';

<OptimisticCounter
  initialValue={10}
  min={0}
  max={100}
  step={1}
  serverDelay={500}
  errorRate={0.1}
/>
\`\`\`
        `,
      },
    },
  },
  argTypes: {
    initialValue: {
      control: { type: 'number' },
      description: '초기 카운터 값입니다.',
    },
    min: {
      control: { type: 'number' },
      description: '최소값입니다.',
    },
    max: {
      control: { type: 'number' },
      description: '최대값입니다.',
    },
    step: {
      control: { type: 'number', min: 1 },
      description: '증가/감소 단위입니다.',
    },
    serverDelay: {
      control: { type: 'range', min: 100, max: 5000, step: 100 },
      description: '서버 업데이트 지연 시간(ms)입니다.',
    },
    errorRate: {
      control: { type: 'range', min: 0, max: 1, step: 0.1 },
      description: '에러 발생 확률(0-1)입니다.',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    initialValue: 0,
    step: 1,
    serverDelay: 1000,
    errorRate: 0.1,
  },
};

export const FastResponse: Story = {
  name: '빠른 응답',
  args: {
    initialValue: 50,
    step: 1,
    serverDelay: 200,
    errorRate: 0,
  },
};

export const SlowResponse: Story = {
  name: '느린 응답',
  args: {
    initialValue: 0,
    step: 1,
    serverDelay: 3000,
    errorRate: 0.05,
  },
};

export const HighErrorRate: Story = {
  name: '높은 에러율',
  args: {
    initialValue: 10,
    step: 1,
    serverDelay: 1000,
    errorRate: 0.5,
  },
};

export const NoErrors: Story = {
  name: '에러 없음',
  args: {
    initialValue: 25,
    step: 1,
    serverDelay: 800,
    errorRate: 0,
  },
};

export const LimitedRange: Story = {
  name: '제한된 범위',
  args: {
    initialValue: 5,
    min: 0,
    max: 10,
    step: 1,
    serverDelay: 1000,
    errorRate: 0.2,
  },
};

export const LargeSteps: Story = {
  name: '큰 단위',
  args: {
    initialValue: 0,
    min: -100,
    max: 100,
    step: 10,
    serverDelay: 1200,
    errorRate: 0.15,
  },
};

export const Multiple: Story = {
  name: '여러 카운터',
  render: () => (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
      <OptimisticCounter initialValue={0} step={1} serverDelay={500} errorRate={0.1} />
      <OptimisticCounter initialValue={50} min={0} max={100} step={5} serverDelay={1500} errorRate={0.3} />
      <OptimisticCounter initialValue={-10} min={-50} max={50} step={2} serverDelay={800} errorRate={0} />
      <OptimisticCounter initialValue={100} min={0} max={200} step={10} serverDelay={2000} errorRate={0.4} />
    </div>
  ),
};
