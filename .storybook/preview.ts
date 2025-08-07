import type { Preview } from '@storybook/react';
import 'voyage-design-system/dist/voyage-design-system.css'; // 메인 CSS 스타일 임포트
import { inject } from '@vercel/analytics'; // vercel analytics

inject(); // 추적 스크립트를 <head>에 삽입

const preview: Preview = {
  parameters: {
    layout: 'centered',
  },
};

export default preview;
