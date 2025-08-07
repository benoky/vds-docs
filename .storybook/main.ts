import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: [
    '../src/**/*.stories.@(js|jsx|mjs|ts|tsx|mdx)',
    '../src/**/*.@(js|jsx|mjs|ts|tsx|mdx)',
    '../src/*.stories.@(js|jsx|mjs|ts|tsx|mdx)',
    '../src/*.@(js|jsx|mjs|ts|tsx|mdx)',
  ],

  addons: ['@storybook/addon-essentials'],

  framework: {
    name: '@storybook/react-vite',
    options: {},
  },

  core: {
    builder: '@storybook/builder-vite',
  },

  features: {
    experimentalRSC: false, // React Server Components 지원
  },

  typescript: {
    check: false,
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: prop => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
    },
  },

  viteFinal: async config => {
    // 수정: define 값은 문자열 치환이므로 반드시 JSON.stringify 사용
    config.define = {
      ...config.define,
      __REACT_DEVTOOLS_GLOBAL_HOOK__: JSON.stringify({ isDisabled: true }),
    };

    return config;
  },

  docs: {
    autodocs: 'tag',
  },
};

export default config;
