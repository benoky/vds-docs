import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import prettierPlugin from 'eslint-plugin-prettier';
import reactPlugin from 'eslint-plugin-react';
import prettierEslint from 'eslint-config-prettier';
import storybookPlugin from 'eslint-plugin-storybook';

// Prettier 플러그인 설정
const prettierConfig = {
  files: ['**/*.{js,jsx,ts,tsx}'],
  plugins: {
    prettier: prettierPlugin,
  },
  rules: {
    'prettier/prettier': ['error'],
    'arrow-body-style': 'off',
    'prefer-arrow-callback': 'off',
  },
};

// React 관련 규칙 설정
const reactConfig = {
  files: ['**/*.{jsx,tsx}'],
  plugins: {
    react: reactPlugin,
  },
  settings: {
    react: {
      version: '19.0',
    },
  },
  rules: {
    // React 19에서는 React import가 필요 없음
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'react/jsx-key': 'error',
  },
};

export default tseslint.config(
  // 무시할 파일 및 디렉토리 설정
  {
    ignores: [
      'dist',
      'node_modules',
      'build',
      'storybook-static',
      '**/*.json',
      '**/*.md',
      '**/*.css',
      'eslint.config.js',
    ],
  },

  // Prettier와 충돌하는 모든 ESLint 규칙 비활성화
  prettierEslint,

  // React 설정 적용
  reactConfig,

  // Prettier 설정 적용
  prettierConfig,

  {
    // 기본 권장 설정과 TypeScript 권장 설정 확장
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2022,
      globals: globals.browser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/no-explicit-any': 'warn',
    },
  },

  // Storybook 파일에 대한 특별 규칙
  {
    files: ['**/*.stories.{ts,tsx}'],
    plugins: {
      storybook: storybookPlugin,
    },
    rules: {
      ...storybookPlugin.configs.recommended.rules,
      'react-refresh/only-export-components': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      'react-hooks/rules-of-hooks': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
    },
  }
);
