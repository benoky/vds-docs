import type { Meta, StoryObj } from '@storybook/react';
import { useState, useEffect } from 'react';
import { Progress } from 'voyage-design-system';

const meta: Meta<typeof Progress> = {
  title: 'Components/Feedback/Progress',
  component: Progress,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
## 📊 Progress 컴포넌트

작업 진행률이나 로딩 상태를 시각적으로 표시하는 컴포넌트입니다.

### 주요 특징:
- **다양한 변형**: default, secondary, error, success, warning
- **여러 크기**: sm, default, lg
- **진행률 표시**: 0-100% 값 기반 진행률
- **라벨 표시**: 진행률 퍼센트 표시 옵션
- **무한 로딩**: indeterminate 모드로 로딩 애니메이션
- **커스텀 라벨**: 사용자 정의 라벨 포맷 함수
- **완전한 접근성**: 스크린 리더 지원

### 사용 예시:
\`\`\`tsx
import { Progress } from 'voyage-design-system';

<Progress
  value={75}
  max={100}
  showLabel={true}
  variant="success"
  size="lg"
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
    value: 60,
    max: 100,
    width: '10%',
    variant: 'default',
  },

  render: function Default(args) {
    const { value, max, width, variant } = args;
    return (
      <div className='space-y-4 w-80'>
        <div>
          <h3 className='text-sm font-medium mb-2'>기본 스타일</h3>
          <Progress value={60} max={100} variant='default' />
        </div>
      </div>
    );
  },
};

export const WithLabel: Story = {
  name: '라벨과 함께',
  render: () => (
    <div className='space-y-4 w-80'>
      <div>
        <h3 className='text-sm font-medium mb-2'>라벨</h3>
        <Progress value={60} max={100} variant='default' showLabel />
      </div>
    </div>
  ),
};

export const Variants: Story = {
  name: '다양한 스타일',
  render: () => (
    <div className='space-y-4 w-80'>
      <div>
        <h3 className='text-sm font-medium mb-2'>기본 스타일</h3>
        <Progress value={60} max={100} variant='default' showLabel />
      </div>

      <div>
        <h3 className='text-sm font-medium mb-2'>보조 스타일</h3>
        <Progress value={40} max={100} variant='secondary' showLabel />
      </div>

      <div>
        <h3 className='text-sm font-medium mb-2'>성공 스타일</h3>
        <Progress value={80} max={100} variant='success' showLabel />
      </div>

      <div>
        <h3 className='text-sm font-medium mb-2'>경고 스타일</h3>
        <Progress value={65} max={100} variant='warning' showLabel />
      </div>

      <div>
        <h3 className='text-sm font-medium mb-2'>에러 스타일</h3>
        <Progress value={90} max={100} variant='error' showLabel />
      </div>
    </div>
  ),
};

export const Sizes: Story = {
  name: '다양한 크기',
  render: () => (
    <div className='space-y-4 w-80'>
      <div>
        <h3 className='text-sm font-medium mb-2'>작은 크기</h3>
        <Progress value={50} max={100} size='sm' showLabel />
      </div>

      <div>
        <h3 className='text-sm font-medium mb-2'>기본 크기</h3>
        <Progress value={50} max={100} size='default' showLabel />
      </div>

      <div>
        <h3 className='text-sm font-medium mb-2'>큰 크기</h3>
        <Progress value={50} max={100} size='lg' showLabel />
      </div>
    </div>
  ),
};

export const BarVariants: Story = {
  name: '바 색상 변형',
  render: () => (
    <div className='space-y-4 w-80'>
      <div>
        <h3 className='text-sm font-medium mb-2'>기본 바</h3>
        <Progress value={70} max={100} barVariant='default' showLabel />
      </div>

      <div>
        <h3 className='text-sm font-medium mb-2'>성공 바</h3>
        <Progress value={70} max={100} barVariant='success' showLabel />
      </div>

      <div>
        <h3 className='text-sm font-medium mb-2'>경고 바</h3>
        <Progress value={70} max={100} barVariant='warning' showLabel />
      </div>

      <div>
        <h3 className='text-sm font-medium mb-2'>에러 바</h3>
        <Progress value={70} max={100} barVariant='error' showLabel />
      </div>
    </div>
  ),
};

export const Indeterminate: Story = {
  name: '무한 로딩',
  render: () => (
    <div className='space-y-4 w-80'>
      <div>
        <h3 className='text-sm font-medium mb-2'>기본 무한 로딩</h3>
        <Progress indeterminate />
      </div>

      <div>
        <h3 className='text-sm font-medium mb-2'>성공 스타일 무한 로딩</h3>
        <Progress indeterminate variant='success' />
      </div>

      <div>
        <h3 className='text-sm font-medium mb-2'>큰 크기 무한 로딩</h3>
        <Progress indeterminate size='lg' />
      </div>
    </div>
  ),
};

export const CustomLabel: Story = {
  name: '커스텀 라벨',
  render: () => {
    const customLabelFormat = (value: number, max: number) => {
      const percentage = Math.round((value / max) * 100);
      if (percentage < 30) return `${percentage}% - 시작됨`;
      if (percentage < 70) return `${percentage}% - 진행 중`;
      if (percentage < 100) return `${percentage}% - 거의 완료`;
      return `${percentage}% - 완료!`;
    };

    return (
      <div className='space-y-4 w-80'>
        <div>
          <h3 className='text-sm font-medium mb-2'>기본 라벨</h3>
          <Progress value={25} max={100} showLabel />
        </div>

        <div>
          <h3 className='text-sm font-medium mb-2'>커스텀 라벨</h3>
          <Progress value={25} max={100} showLabel labelFormat={customLabelFormat} />
        </div>

        <div>
          <h3 className='text-sm font-medium mb-2'>진행 중</h3>
          <Progress value={60} max={100} showLabel labelFormat={customLabelFormat} />
        </div>

        <div>
          <h3 className='text-sm font-medium mb-2'>거의 완료</h3>
          <Progress value={85} max={100} showLabel labelFormat={customLabelFormat} />
        </div>

        <div>
          <h3 className='text-sm font-medium mb-2'>완료</h3>
          <Progress value={100} max={100} showLabel labelFormat={customLabelFormat} />
        </div>
      </div>
    );
  },
};

const AnimatedProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + 10;
      });
    }, 500);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className='w-80'>
      <h3 className='text-sm font-medium mb-2'>애니메이션 진행률</h3>
      <Progress value={progress} max={100} showLabel variant={progress >= 100 ? 'success' : 'default'} />
      <p className='text-xs text-gray-500 mt-2'>{progress >= 100 ? '완료되었습니다!' : '진행 중...'}</p>
    </div>
  );
};

export const Animated: Story = {
  name: '애니메이션 예제',
  render: () => <AnimatedProgress />,
};
