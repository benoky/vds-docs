import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],

  addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-interactions'],

  framework: {
    name: '@storybook/react-vite',
    options: {},
  },

  core: {
    builder: '@storybook/builder-vite',
  },

  features: {
    experimentalRSC: true, // React Server Components 지원
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
    // React 19 관련 설정 추가
    config.define = {
      ...config.define,
      __REACT_DEVTOOLS_GLOBAL_HOOK__: '({ isDisabled: true })',
    };

    return config;
  },

  docs: {
    autodocs: 'tag',
  },
};

export default config;
