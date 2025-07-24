import { useState } from 'react';
import { Button } from '../Button/Button';

export interface CounterProps {
  /**
   * 초기값입니다.
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
   * 값이 변경될 때 호출되는 콜백입니다.
   */
  onChange?: (value: number) => void;
}

export const Counter = ({
  initialValue = 0,
  min = Number.MIN_SAFE_INTEGER,
  max = Number.MAX_SAFE_INTEGER,
  step = 1,
  onChange,
}: CounterProps) => {
  const [value, setValue] = useState(initialValue);

  const handleIncrement = () => {
    const newValue = Math.min(value + step, max);
    setValue(newValue);
    onChange?.(newValue);
  };

  const handleDecrement = () => {
    const newValue = Math.max(value - step, min);
    setValue(newValue);
    onChange?.(newValue);
  };

  const canIncrement = value < max;
  const canDecrement = value > min;

  return (
    <div className='inline-flex items-center space-x-2'>
      <Button variant='outline' size='sm' onClick={handleDecrement} disabled={!canDecrement} aria-label='감소'>
        -
      </Button>

      <span className='min-w-[3rem] text-center font-medium text-lg'>{value}</span>

      <Button variant='outline' size='sm' onClick={handleIncrement} disabled={!canIncrement} aria-label='증가'>
        +
      </Button>
    </div>
  );
};

Counter.displayName = 'Counter';
