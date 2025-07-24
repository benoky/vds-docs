import { useState, useOptimistic, useTransition } from 'react';
import { Button } from '../Button/Button';

export interface OptimisticCounterProps {
  /**
   * 초기 카운터 값입니다.
   */
  initialValue?: number;

  /**
   * 최소값입니다.
   */
  min?: number;

  /**
   * 최대값입니다.
   */
  max?: number;

  /**
   * 증가/감소 단위입니다.
   */
  step?: number;

  /**
   * 서버 업데이트 지연 시간(ms)입니다.
   */
  serverDelay?: number;

  /**
   * 에러 발생 확률(0-1)입니다.
   */
  errorRate?: number;
}

interface CounterState {
  value: number;
  lastUpdated: string;
  updateCount: number;
}

type CounterAction = { type: 'increment'; step: number } | { type: 'decrement'; step: number } | { type: 'reset' };

// 서버 업데이트 시뮬레이션 함수
const simulateServerUpdate = async (
  currentState: CounterState,
  action: CounterAction,
  delay: number = 1000,
  errorRate: number = 0.1
): Promise<CounterState> => {
  // 지연 시뮬레이션
  await new Promise(resolve => setTimeout(resolve, delay));

  // 에러 시뮬레이션
  if (Math.random() < errorRate) {
    throw new Error('서버 업데이트 실패!');
  }

  let newValue = currentState.value;

  switch (action.type) {
    case 'increment':
      newValue = currentState.value + action.step;
      break;
    case 'decrement':
      newValue = currentState.value - action.step;
      break;
    case 'reset':
      newValue = 0;
      break;
  }

  return {
    value: newValue,
    lastUpdated: new Date().toLocaleTimeString(),
    updateCount: currentState.updateCount + 1,
  };
};

export const OptimisticCounter = ({
  initialValue = 0,
  min = Number.MIN_SAFE_INTEGER,
  max = Number.MAX_SAFE_INTEGER,
  step = 1,
  serverDelay = 1000,
  errorRate = 0.1,
}: OptimisticCounterProps) => {
  const [serverState, setServerState] = useState<CounterState>({
    value: initialValue,
    lastUpdated: new Date().toLocaleTimeString(),
    updateCount: 0,
  });

  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);

  // useOptimistic을 사용하여 낙관적 업데이트 구현
  const [optimisticState, addOptimisticUpdate] = useOptimistic(
    serverState,
    (currentState: CounterState, action: CounterAction) => {
      let newValue = currentState.value;

      switch (action.type) {
        case 'increment':
          newValue = Math.min(currentState.value + action.step, max);
          break;
        case 'decrement':
          newValue = Math.max(currentState.value - action.step, min);
          break;
        case 'reset':
          newValue = initialValue;
          break;
      }

      return {
        ...currentState,
        value: newValue,
        lastUpdated: '업데이트 중...',
      };
    }
  );

  const handleAction = async (action: CounterAction) => {
    setError(null);

    // 즉시 낙관적 업데이트
    addOptimisticUpdate(action);

    // 비동기 서버 업데이트
    startTransition(async () => {
      try {
        const newState = await simulateServerUpdate(serverState, action, serverDelay, errorRate);
        setServerState(newState);
      } catch (err) {
        setError(err instanceof Error ? err.message : '알 수 없는 오류가 발생했습니다.');
        // 에러 발생 시 서버 상태를 다시 설정하여 낙관적 업데이트를 롤백
        setServerState(prevState => ({ ...prevState }));
      }
    });
  };

  const canIncrement = optimisticState.value < max;
  const canDecrement = optimisticState.value > min;

  return (
    <div className='p-6 bg-white border border-gray-200 rounded-lg shadow-sm max-w-md'>
      <div className='text-center mb-6'>
        <h3 className='text-lg font-semibold text-gray-800 mb-2'>Optimistic Counter</h3>
        <p className='text-sm text-gray-600'>React 19의 useOptimistic을 활용한 카운터</p>
      </div>

      {/* 카운터 표시 */}
      <div className='text-center mb-6'>
        <div className='text-4xl font-bold text-blue-600 mb-2'>{optimisticState.value}</div>
        <div className='text-sm text-gray-500'>마지막 업데이트: {optimisticState.lastUpdated}</div>
        <div className='text-xs text-gray-400'>총 업데이트 횟수: {optimisticState.updateCount}</div>
      </div>

      {/* 상태 표시 */}
      <div className='mb-4'>
        {isPending && (
          <div className='text-center text-sm text-blue-600 bg-blue-50 p-2 rounded-md'>⏳ 서버 업데이트 중...</div>
        )}

        {error && (
          <div className='text-center text-sm text-red-600 bg-red-50 p-2 rounded-md border border-red-200'>
            ❌ {error}
          </div>
        )}

        {!isPending && !error && (
          <div className='text-center text-sm text-green-600 bg-green-50 p-2 rounded-md'>✅ 동기화됨</div>
        )}
      </div>

      {/* 컨트롤 버튼들 */}
      <div className='space-y-3'>
        <div className='flex gap-2'>
          <Button
            variant='outline'
            size='sm'
            onClick={() => handleAction({ type: 'decrement', step })}
            disabled={!canDecrement || isPending}
            className='flex-1'
          >
            -{step}
          </Button>

          <Button
            variant='outline'
            size='sm'
            onClick={() => handleAction({ type: 'increment', step })}
            disabled={!canIncrement || isPending}
            className='flex-1'
          >
            +{step}
          </Button>
        </div>

        <div className='flex gap-2'>
          <Button
            variant='outline'
            size='sm'
            onClick={() => handleAction({ type: 'decrement', step: step * 5 })}
            disabled={!canDecrement || isPending}
            className='flex-1'
          >
            -{step * 5}
          </Button>

          <Button
            variant='outline'
            size='sm'
            onClick={() => handleAction({ type: 'increment', step: step * 5 })}
            disabled={!canIncrement || isPending}
            className='flex-1'
          >
            +{step * 5}
          </Button>
        </div>

        <Button
          variant='ghost'
          size='sm'
          onClick={() => handleAction({ type: 'reset' })}
          disabled={isPending}
          className='w-full'
        >
          초기화
        </Button>
      </div>

      {/* 설정 정보 */}
      <div className='mt-4 pt-4 border-t border-gray-200 text-xs text-gray-500'>
        <div>
          범위: {min} ~ {max}
        </div>
        <div>서버 지연: {serverDelay}ms</div>
        <div>에러율: {(errorRate * 100).toFixed(1)}%</div>
      </div>
    </div>
  );
};

OptimisticCounter.displayName = 'OptimisticCounter';
