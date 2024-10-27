import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import json from '@eslint/json'
import markdown from "@eslint/markdown"
import react from 'eslint-plugin-react'
import noLoops from 'eslint-plugin-no-loops'

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [js.configs.recommended,
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
    settings: { react: { version: '18.3' } },
    plugins: {
      'no-loops': noLoops,
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      'no-loops/no-loops': 'error',
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
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
  ...markdown.configs.recommended,
)
