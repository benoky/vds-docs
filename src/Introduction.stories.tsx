import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './components/Button/Button';
import { Input } from './components/Input/Input';
import { Card } from './components/Card/Card';
import { Counter } from './components/Counter/Counter';
import { ActionButton, createUserAction } from './components/ActionButton/ActionButton';
import { OptimisticCounter } from './components/OptimisticCounter/OptimisticCounter';

const IntroductionComponent = () => {
  return (
    <div className='max-w-6xl mx-auto p-8 space-y-12'>
      {/* 헤더 */}
      <div className='text-center space-y-4'>
        <h1 className='text-4xl font-bold text-gray-900'>🚀 React 19 Storybook Project</h1>
        <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
          React 19의 최신 기능들을 활용한 모던 컴포넌트 라이브러리입니다. 새로운 Hook들과 향상된 성능을 경험해보세요.
        </p>
        <div className='flex justify-center space-x-4 text-sm text-gray-500'>
          <span>✨ React 19.0.0</span>
          <span>📚 Storybook 8.4.6</span>
          <span>⚡ Vite 6.0.1</span>
          <span>🔧 TypeScript 5.8.3</span>
        </div>
      </div>

      {/* React 19 주요 특징 */}
      <Card title='🆕 React 19 주요 새로운 기능들' variant='elevated'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          <div className='space-y-3'>
            <h4 className='font-semibold text-gray-800'>새로운 Hook들</h4>
            <ul className='space-y-2 text-sm text-gray-600'>
              <li>
                • <code className='bg-gray-100 px-2 py-1 rounded'>useActionState</code> - 서버 액션 상태 관리
              </li>
              <li>
                • <code className='bg-gray-100 px-2 py-1 rounded'>useOptimistic</code> - 낙관적 업데이트
              </li>
              <li>
                • <code className='bg-gray-100 px-2 py-1 rounded'>use</code> - Promise와 Context 읽기
              </li>
            </ul>
          </div>
          <div className='space-y-3'>
            <h4 className='font-semibold text-gray-800'>성능 향상</h4>
            <ul className='space-y-2 text-sm text-gray-600'>
              <li>• React Compiler - 자동 최적화</li>
              <li>• 향상된 Hydration 성능</li>
              <li>• 개선된 Server Components</li>
            </ul>
          </div>
        </div>
      </Card>

      {/* 기본 컴포넌트들 */}
      <Card title='🧩 기본 컴포넌트들' variant='outlined'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          <div className='space-y-3'>
            <h4 className='font-medium'>Button</h4>
            <div className='space-y-2'>
              <Button size='sm'>Small</Button>
              <Button>Medium</Button>
              <Button size='lg'>Large</Button>
            </div>
          </div>

          <div className='space-y-3'>
            <h4 className='font-medium'>Input</h4>
            <div className='space-y-2'>
              <Input placeholder='기본 입력' size='sm' />
              <Input placeholder='보통 크기' />
              <Input placeholder='큰 크기' size='lg' />
            </div>
          </div>

          <div className='space-y-3'>
            <h4 className='font-medium'>Counter</h4>
            <div className='space-y-4'>
              <Counter initialValue={5} />
              <Counter initialValue={0} min={0} max={10} />
              <Counter initialValue={-5} step={2} />
            </div>
          </div>
        </div>
      </Card>

      {/* React 19 고급 컴포넌트들 */}
      <Card title='⚡ React 19 고급 컴포넌트들' variant='elevated'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
          <div className='space-y-4'>
            <h4 className='font-semibold text-gray-800'>ActionButton (useActionState)</h4>
            <p className='text-sm text-gray-600'>
              서버 액션과의 상호작용을 관리하는 컴포넌트입니다. 자동으로 로딩, 성공, 실패 상태를 처리합니다.
            </p>
            <div className='space-y-3'>
              <Input name='name' placeholder='사용자 이름' size='sm' />
              <ActionButton action={createUserAction} size='sm'>
                사용자 생성
              </ActionButton>
            </div>
          </div>

          <div className='space-y-4'>
            <h4 className='font-semibold text-gray-800'>OptimisticCounter (useOptimistic)</h4>
            <p className='text-sm text-gray-600'>
              낙관적 업데이트로 즉각적인 UI 반응을 제공하는 카운터입니다. 서버 응답을 기다리지 않고 즉시 UI가
              업데이트됩니다.
            </p>
            <OptimisticCounter initialValue={10} min={0} max={20} serverDelay={800} errorRate={0.2} />
          </div>
        </div>
      </Card>

      {/* 기술 스택 */}
      <Card title='🛠️ 기술 스택 및 도구들' variant='outlined'>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-6'>
          <div className='text-center space-y-2'>
            <div className='text-2xl'>⚛️</div>
            <h4 className='font-medium'>React 19</h4>
            <p className='text-xs text-gray-500'>최신 기능과 성능 향상</p>
          </div>

          <div className='text-center space-y-2'>
            <div className='text-2xl'>📚</div>
            <h4 className='font-medium'>Storybook</h4>
            <p className='text-xs text-gray-500'>컴포넌트 개발 환경</p>
          </div>

          <div className='text-center space-y-2'>
            <div className='text-2xl'>🔷</div>
            <h4 className='font-medium'>TypeScript</h4>
            <p className='text-xs text-gray-500'>타입 안정성</p>
          </div>

          <div className='text-center space-y-2'>
            <div className='text-2xl'>⚡</div>
            <h4 className='font-medium'>Vite</h4>
            <p className='text-xs text-gray-500'>빠른 빌드 도구</p>
          </div>

          <div className='text-center space-y-2'>
            <div className='text-2xl'>🎨</div>
            <h4 className='font-medium'>Tailwind CSS</h4>
            <p className='text-xs text-gray-500'>유틸리티 기반 스타일링</p>
          </div>

          <div className='text-center space-y-2'>
            <div className='text-2xl'>🔍</div>
            <h4 className='font-medium'>ESLint</h4>
            <p className='text-xs text-gray-500'>코드 품질 관리</p>
          </div>

          <div className='text-center space-y-2'>
            <div className='text-2xl'>💅</div>
            <h4 className='font-medium'>Prettier</h4>
            <p className='text-xs text-gray-500'>코드 포맷팅</p>
          </div>

          <div className='text-center space-y-2'>
            <div className='text-2xl'>🚀</div>
            <h4 className='font-medium'>Modern Setup</h4>
            <p className='text-xs text-gray-500'>최신 개발 환경</p>
          </div>
        </div>
      </Card>

      {/* 시작하기 가이드 */}
      <Card
        title='🚀 시작하기'
        variant='elevated'
        footer={
          <div className='flex space-x-3'>
            <Button variant='primary'>컴포넌트 둘러보기</Button>
            <Button variant='outline'>GitHub 저장소</Button>
          </div>
        }
      >
        <div className='space-y-4'>
          <div className='bg-gray-50 p-4 rounded-lg'>
            <h4 className='font-medium mb-2'>설치 및 실행</h4>
            <pre className='text-sm text-gray-700'>
              {`npm install
npm run storybook`}
            </pre>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <div>
              <h4 className='font-medium mb-2'>주요 명령어</h4>
              <ul className='text-sm space-y-1 text-gray-600'>
                <li>
                  • <code>npm run storybook</code> - Storybook 실행
                </li>
                <li>
                  • <code>npm run build</code> - 프로덕션 빌드
                </li>
                <li>
                  • <code>npm run lint</code> - 코드 검사
                </li>
                <li>
                  • <code>npm run format</code> - 코드 포맷팅
                </li>
              </ul>
            </div>

            <div>
              <h4 className='font-medium mb-2'>둘러볼 곳</h4>
              <ul className='text-sm space-y-1 text-gray-600'>
                <li>• Components - 기본 UI 컴포넌트들</li>
                <li>• React 19 - 새로운 기능 데모</li>
                <li>• Docs - 상세한 사용법과 예시</li>
                <li>• Controls - 실시간 속성 변경</li>
              </ul>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

const meta: Meta<typeof IntroductionComponent> = {
  title: 'Introduction',
  component: IntroductionComponent,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: '🚀 React 19 Storybook 프로젝트에 오신 것을 환영합니다!',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Welcome: Story = {
  name: '👋 환영합니다!',
};
