import type { Meta, StoryObj } from '@storybook/react';
import { useState, useRef } from 'react';
import { Editor } from 'voyage-design-system';

const meta: Meta<typeof Editor> = {
  title: 'Components/Form/Editor',
  component: Editor,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
## 📝 Editor 컴포넌트

Toast UI Editor 기반의 리치 텍스트 에디터 컴포넌트입니다.

### 주요 특징:
- **마크다운/WYSIWYG 모드**: 두 가지 편집 모드 지원
- **툴바 커스터마이징**: 필요한 도구만 선택 가능
- **다양한 크기 설정**: 높이와 너비 조절 가능
- **언어 설정**: 한국어 기본 지원
- **콜백 함수**: 내용 변경 시 이벤트 처리
- **프로그래밍적 제어**: ref를 통한 메서드 호출

### 사용 예시:
\`\`\`tsx
import { Editor } from 'voyage-design-system';

<Editor 
  initialValue="# Hello World"
  onChange={(value) => console.log(value)}
  height="400px"
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

const DefaultExample = () => {
  const [content, setContent] = useState('# 안녕하세요!\n\n이것은 **마크다운** 에디터입니다.');

  return (
    <div style={{ width: '100%', maxWidth: '800px' }}>
      <Editor initialValue={content} onChange={setContent} height='400px' placeholder='내용을 입력하세요...' />
    </div>
  );
};

export const Default: Story = {
  render: () => <DefaultExample />,
};

const WYSIWYGExample = () => {
  const [content, setContent] = useState('<h1>WYSIWYG 모드</h1><p>이것은 <strong>WYSIWYG</strong> 에디터입니다.</p>');

  return (
    <div style={{ width: '100%', maxWidth: '800px' }}>
      <Editor
        initialValue={content}
        onChange={setContent}
        height='400px'
        initialEditType='wysiwyg'
        placeholder='WYSIWYG 모드에서 편집하세요...'
      />
    </div>
  );
};

export const WYSIWYG: Story = {
  name: 'WYSIWYG 모드',
  render: () => <WYSIWYGExample />,
};

const CustomHeightExample = () => {
  const [content, setContent] = useState('# 커스텀 높이\n\n에디터의 높이를 조절할 수 있습니다.');

  return (
    <div style={{ width: '100%', maxWidth: '800px' }}>
      <Editor
        initialValue={content}
        onChange={setContent}
        height='300px'
        placeholder='높이가 300px로 설정된 에디터입니다...'
      />
    </div>
  );
};

export const CustomHeight: Story = {
  name: '커스텀 높이',
  render: () => <CustomHeightExample />,
};

const HideModeSwitchExample = () => {
  const [content, setContent] = useState('# 모드 스위치 숨김\n\n모드 전환 버튼이 숨겨진 에디터입니다.');

  return (
    <div style={{ width: '100%', maxWidth: '800px' }}>
      <Editor
        initialValue={content}
        onChange={setContent}
        height='400px'
        hideModeSwitch={true}
        placeholder='모드 전환 버튼이 없습니다...'
      />
    </div>
  );
};

export const HideModeSwitch: Story = {
  name: '모드 스위치 숨김',
  render: () => <HideModeSwitchExample />,
};

const CustomToolbarExample = () => {
  const [content, setContent] = useState('# 커스텀 툴바\n\n필요한 도구만 포함된 에디터입니다.');

  const customToolbar = [
    ['heading', 'bold', 'italic', 'strike'],
    ['hr', 'quote'],
    ['ul', 'ol', 'task', 'indent', 'outdent'],
    ['table', 'image', 'link'],
    ['code', 'codeblock'],
  ];

  return (
    <div style={{ width: '100%', maxWidth: '800px' }}>
      <Editor
        initialValue={content}
        onChange={setContent}
        height='400px'
        toolbarItems={customToolbar}
        placeholder='커스텀 툴바가 적용된 에디터입니다...'
      />
    </div>
  );
};

export const CustomToolbar: Story = {
  name: '커스텀 툴바',
  render: () => <CustomToolbarExample />,
};

const ProgrammaticControlExample = () => {
  const [content, setContent] = useState('# 프로그래밍적 제어\n\nref를 통해 에디터를 제어할 수 있습니다.');
  const editorRef = useRef<any>(null);

  const handleGetMarkdown = () => {
    if (editorRef.current) {
      const markdown = editorRef.current.getMarkdown();
      alert('마크다운 내용:\n' + markdown);
    }
  };

  const handleGetHTML = () => {
    if (editorRef.current) {
      const html = editorRef.current.getHTML();
      alert('HTML 내용:\n' + html);
    }
  };

  const handleInsertText = () => {
    if (editorRef.current) {
      editorRef.current.insertText('\n\n**새로운 텍스트가 삽입되었습니다!**');
    }
  };

  return (
    <div style={{ width: '100%', maxWidth: '800px' }}>
      <div style={{ marginBottom: '10px', display: 'flex', gap: '10px' }}>
        <button onClick={handleGetMarkdown} style={{ padding: '8px 16px', margin: '0' }}>
          마크다운 가져오기
        </button>
        <button onClick={handleGetHTML} style={{ padding: '8px 16px', margin: '0' }}>
          HTML 가져오기
        </button>
        <button onClick={handleInsertText} style={{ padding: '8px 16px', margin: '0' }}>
          텍스트 삽입
        </button>
      </div>
      <Editor
        ref={editorRef}
        initialValue={content}
        onChange={setContent}
        height='400px'
        placeholder='버튼을 클릭하여 에디터를 제어해보세요...'
      />
    </div>
  );
};

export const ProgrammaticControl: Story = {
  name: '프로그래밍적 제어',
  render: () => <ProgrammaticControlExample />,
};

const PreviewStyleExample = () => {
  const [content, setContent] = useState('# 프리뷰 스타일\n\n프리뷰 스타일을 변경할 수 있습니다.');

  return (
    <div style={{ width: '100%', maxWidth: '800px' }}>
      <Editor
        initialValue={content}
        onChange={setContent}
        height='400px'
        previewStyle='tab'
        placeholder='탭 스타일 프리뷰가 적용된 에디터입니다...'
      />
    </div>
  );
};

export const PreviewStyle: Story = {
  name: '프리뷰 스타일',
  render: () => <PreviewStyleExample />,
};
