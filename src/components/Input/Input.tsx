import { forwardRef, type InputHTMLAttributes } from 'react';

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /**
   * 입력 필드의 시각적 스타일을 설정합니다.
   */
  variant?: 'default' | 'outline' | 'filled';

  /**
   * 입력 필드의 크기를 설정합니다.
   */
  size?: 'sm' | 'md' | 'lg';

  /**
   * 라벨 텍스트입니다.
   */
  label?: string;

  /**
   * 에러 메시지입니다.
   */
  error?: string;

  /**
   * 도움말 텍스트입니다.
   */
  helpText?: string;

  /**
   * 필수 입력 필드 여부입니다.
   */
  required?: boolean;
}

const variantStyles = {
  default: 'border border-gray-300 focus:border-blue-500 focus:ring-blue-500',
  outline: 'border-2 border-gray-300 focus:border-blue-500 focus:ring-blue-500',
  filled: 'border-0 bg-gray-100 focus:bg-white focus:ring-2 focus:ring-blue-500',
};

const sizeStyles = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2 text-base',
  lg: 'px-5 py-3 text-lg',
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ variant = 'default', size = 'md', label, error, helpText, required, className, id, ...props }, ref) => {
    const baseStyles =
      'w-full rounded-md transition-colors focus:outline-none focus:ring-1 disabled:cursor-not-allowed disabled:opacity-50';

    const combinedClassName = [
      baseStyles,
      variantStyles[variant],
      sizeStyles[size],
      error ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : '',
      className,
    ]
      .filter(Boolean)
      .join(' ');

    const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;

    return (
      <div className='w-full'>
        {label && (
          <label htmlFor={inputId} className='block text-sm font-medium text-gray-700 mb-1'>
            {label}
            {required && <span className='text-red-500 ml-1'>*</span>}
          </label>
        )}

        <input ref={ref} id={inputId} className={combinedClassName} {...props} />

        {error && (
          <p className='mt-1 text-sm text-red-600' role='alert'>
            {error}
          </p>
        )}

        {helpText && !error && <p className='mt-1 text-sm text-gray-500'>{helpText}</p>}
      </div>
    );
  }
);

Input.displayName = 'Input';
