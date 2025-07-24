import { forwardRef, type HTMLAttributes, type ReactNode } from 'react';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * 카드 제목입니다.
   */
  title?: string;

  /**
   * 카드 설명입니다.
   */
  description?: string;

  /**
   * 카드 헤더 영역 커스텀 내용입니다.
   */
  header?: ReactNode;

  /**
   * 카드 푸터 영역 커스텀 내용입니다.
   */
  footer?: ReactNode;

  /**
   * 카드의 시각적 스타일을 설정합니다.
   */
  variant?: 'default' | 'outlined' | 'elevated';

  /**
   * 호버 효과를 활성화합니다.
   */
  hoverable?: boolean;
}

const variantStyles = {
  default: 'bg-white border border-gray-200',
  outlined: 'bg-white border-2 border-gray-300',
  elevated: 'bg-white shadow-lg border border-gray-100',
};

export const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    { title, description, header, footer, variant = 'default', hoverable = false, className, children, ...props },
    ref
  ) => {
    const baseStyles = 'rounded-lg transition-all duration-200';
    const hoverStyles = hoverable ? 'hover:shadow-lg hover:-translate-y-1' : '';

    const combinedClassName = [baseStyles, variantStyles[variant], hoverStyles, className].filter(Boolean).join(' ');

    return (
      <div ref={ref} className={combinedClassName} {...props}>
        {(header || title || description) && (
          <div className='px-6 py-4 border-b border-gray-200'>
            {header || (
              <>
                {title && <h3 className='text-lg font-semibold text-gray-900'>{title}</h3>}
                {description && <p className='mt-1 text-sm text-gray-600'>{description}</p>}
              </>
            )}
          </div>
        )}

        {children && <div className='px-6 py-4'>{children}</div>}

        {footer && <div className='px-6 py-4 border-t border-gray-200 bg-gray-50 rounded-b-lg'>{footer}</div>}
      </div>
    );
  }
);

Card.displayName = 'Card';
