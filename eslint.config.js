import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import json from '@eslint/json';
import markdown from '@eslint/markdown';
import react from 'eslint-plugin-react';
import noLoops from 'eslint-plugin-no-loops';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import importPlugin from 'eslint-plugin-import';
import typescript from '@typescript-eslint/eslint-plugin';

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommendedTypeChecked,
      {
        languageOptions: {
          parserOptions: {
            projectService: {
              allowDefaultProject: ['vitest.config.ts'],
            },
            tsconfigRootDir: import.meta.dirname,
          },
        },
      },
    ],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    settings: {
      react: { version: '18.3' },
      'import/parsers': {
        '@typescript-eslint/parser': ['.ts', '.tsx'],
      },
      'import/resolver': {
        typescript: {
          alwaysTryTypes: true,
          project: './tsconfig.json',
        },
      },
    },
    plugins: {
      import: importPlugin,
      'no-loops': noLoops,
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...typescript.configs.recommended.rules,
      'no-loops/no-loops': 'error',
      ...importPlugin.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,
      ...reactHooks.configs.recommended.rules,
      'import/no-unresolved': ['error', { ignore: ['\\.svg'] }],
      'import/default': 'off',
      'import/no-named-as-default': 'off',
      'import/no-named-as-default-member': 'off',
      'import/order': [
        'error',
        {
          groups: [
            'builtin',
            'external',
            'internal',
            'parent',
            'sibling',
            'index',
          ],
          'newlines-between': 'always',
          alphabetize: { order: 'asc', caseInsensitive: true },
        },
      ],
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  },
  {
    files: ['*.config.ts', 'vite.config.ts'],
    rules: {
      'import/no-extraneous-dependencies': 'off',
    },
  },
  {
    files: ['**/*.json'],
    ignores: ['*package-lock.json'],
    language: 'json/json',
    ...json.configs.recommended,
  },
  {
    files: ['**/*.jsonc', '**/tsconfig?(*).json', '.vscode/*.json'],
    language: 'json/jsonc',
    ...json.configs.recommended,
  },
  {
    files: ['**/*.json5'],
    language: 'json/json5',
    ...json.configs.recommended,
  },
  jsxA11y.flatConfigs.recommended,
  ...markdown.configs.recommended,
  eslintPluginPrettierRecommended,
);
