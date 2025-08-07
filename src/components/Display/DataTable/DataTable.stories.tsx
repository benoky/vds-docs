import type { Meta, StoryObj } from '@storybook/react';
import { DataTable } from 'voyage-design-system';

const meta: Meta<typeof DataTable> = {
  title: 'Components/Display/DataTable',
  component: DataTable,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
## 📊 DataTable 컴포넌트

구조화된 데이터를 표시하는 테이블 컴포넌트입니다.

### 주요 특징:
- **다양한 변형**: default, bordered, borderless
- **여러 크기**: sm, default, lg
- **컬럼 설정**: 제목, 너비, 정렬, 커스텀 렌더링
- **상태 관리**: 로딩, 빈 데이터, 호버 효과
- **스타일링**: 스트라이프, 헤더 숨김, 최대 높이
- **완전한 접근성**: 키보드 탐색 및 스크린 리더 지원
- **반응형**: 다양한 화면 크기에 대응

### 사용 예시:
\`\`\`tsx
import { DataTable } from 'voyage-design-system';

const columns = [
  { key: 'name', title: '이름', dataIndex: 'name' },
  { key: 'age', title: '나이', dataIndex: 'age' },
  { key: 'email', title: '이메일', dataIndex: 'email' },
];

const data = [
  { name: '홍길동', age: 25, email: 'hong@example.com' },
  { name: '김철수', age: 30, email: 'kim@example.com' },
];

<DataTable columns={columns} data={data} />
\`\`\`
        `,
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

// 기본 사용자 데이터
const userData = [
  {
    id: 1,
    name: '홍길동',
    email: 'hong@example.com',
    age: 25,
    department: '개발팀',
    status: '활성',
  },
  {
    id: 2,
    name: '김철수',
    email: 'kim@example.com',
    age: 30,
    department: '디자인팀',
    status: '활성',
  },
  {
    id: 3,
    name: '이영희',
    email: 'lee@example.com',
    age: 28,
    department: '마케팅팀',
    status: '비활성',
  },
  {
    id: 4,
    name: '박민수',
    email: 'park@example.com',
    age: 32,
    department: '개발팀',
    status: '활성',
  },
  {
    id: 5,
    name: '정수진',
    email: 'jung@example.com',
    age: 27,
    department: '디자인팀',
    status: '활성',
  },
];

// 기본 컬럼 설정
const defaultColumns = [
  {
    key: 'name',
    title: '이름',
    dataIndex: 'name',
    width: '25%',
  },
  {
    key: 'email',
    title: '이메일',
    dataIndex: 'email',
    width: '20%',
  },
  {
    key: 'age',
    title: '나이',
    dataIndex: 'age',
    width: '15%',
    align: 'center' as const,
  },
  {
    key: 'department',
    title: '부서',
    dataIndex: 'department',
    width: '20%',
  },
  {
    key: 'status',
    title: '상태',
    dataIndex: 'status',
    width: '20%',
    align: 'center' as const,
    render: (value: string) => (
      <span
        className={`px-2 py-1 rounded-full text-xs font-medium ${
          value === '활성' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
        }`}
      >
        {value}
      </span>
    ),
  },
];

export const Default: Story = {
  args: {
    columns: defaultColumns,
    data: userData,
  },
};

export const Variants: Story = {
  name: '다양한 스타일',
  render: () => (
    <div className='space-y-8 w-full max-w-6xl'>
      <div>
        <h3 className='text-lg font-semibold mb-4'>기본 스타일</h3>
        <DataTable columns={defaultColumns} data={userData} variant='default' />
      </div>

      <div>
        <h3 className='text-lg font-semibold mb-4'>테두리 스타일</h3>
        <DataTable columns={defaultColumns} data={userData} variant='bordered' />
      </div>

      <div>
        <h3 className='text-lg font-semibold mb-4'>테두리 없는 스타일</h3>
        <DataTable columns={defaultColumns} data={userData} variant='borderless' />
      </div>
    </div>
  ),
};

export const Sizes: Story = {
  name: '다양한 크기',
  render: () => (
    <div className='space-y-8 w-full max-w-6xl'>
      <div>
        <h3 className='text-lg font-semibold mb-4'>작은 크기</h3>
        <DataTable columns={defaultColumns} data={userData} size='sm' />
      </div>

      <div>
        <h3 className='text-lg font-semibold mb-4'>기본 크기</h3>
        <DataTable columns={defaultColumns} data={userData} size='default' />
      </div>

      <div>
        <h3 className='text-lg font-semibold mb-4'>큰 크기</h3>
        <DataTable columns={defaultColumns} data={userData} size='lg' />
      </div>
    </div>
  ),
};

export const WithStripedRows: Story = {
  name: '스트라이프 행',
  args: {
    columns: defaultColumns,
    data: userData,
    striped: true,
  },
};

export const WithHoverEffect: Story = {
  name: '호버 효과',
  args: {
    columns: defaultColumns,
    data: userData,
    hoverable: true,
  },
};

export const WithCustomRender: Story = {
  name: '커스텀 렌더링',
  render: () => {
    const customColumns = [
      {
        key: 'name',
        title: '이름',
        dataIndex: 'name',
        width: '25%',
        render: (value: string, record: any) => (
          <div className='flex items-center space-x-2'>
            <div className='w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-medium'>
              {value.charAt(0)}
            </div>
            <span className='font-medium'>{value}</span>
          </div>
        ),
      },
      {
        key: 'email',
        title: '이메일',
        dataIndex: 'email',
        width: '30%',
        render: (value: string) => (
          <a href={`mailto:${value}`} className='text-blue-600 hover:text-blue-800'>
            {value}
          </a>
        ),
      },
      {
        key: 'age',
        title: '나이',
        dataIndex: 'age',
        width: '15%',
        align: 'center' as const,
        render: (value: number) => (
          <span className={`font-medium ${value > 30 ? 'text-orange-600' : 'text-green-600'}`}>{value}세</span>
        ),
      },
      {
        key: 'department',
        title: '부서',
        dataIndex: 'department',
        width: '20%',
        render: (value: string) => <span className='px-2 py-1 bg-gray-100 rounded text-sm'>{value}</span>,
      },
      {
        key: 'actions',
        title: '작업',
        width: '10%',
        align: 'center' as const,
        render: (value: any, record: any) => (
          <div className='flex space-x-1'>
            <button className='p-1 text-blue-600 hover:text-blue-800'>수정</button>
            <button className='p-1 text-red-600 hover:text-red-800'>삭제</button>
          </div>
        ),
      },
    ];

    return (
      <div className='w-full max-w-6xl'>
        <DataTable columns={customColumns} data={userData} />
      </div>
    );
  },
};

export const WithLoading: Story = {
  name: '로딩 상태',
  args: {
    columns: defaultColumns,
    data: [],
    loading: true,
  },
};

export const WithEmptyData: Story = {
  name: '빈 데이터',
  args: {
    columns: defaultColumns,
    data: [],
    emptyText: '데이터가 없습니다.',
  },
};

export const WithoutHeader: Story = {
  name: '헤더 없음',
  args: {
    columns: defaultColumns,
    data: userData,
    showHeader: false,
  },
};

export const WithMaxHeight: Story = {
  name: '최대 높이',
  args: {
    columns: defaultColumns,
    data: [...userData, ...userData, ...userData], // 더 많은 데이터
    maxHeight: '300px',
    striped: true,
    hoverable: true,
  },
};
