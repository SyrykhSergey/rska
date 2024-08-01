// eslint.config.mjs

import js from '@eslint/js';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import importPlugin from 'eslint-plugin-import';
import prettier from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';
import babelParser from '@babel/eslint-parser';

export default [
    {
        files: ['**/*.js', '**/*.jsx'],
        languageOptions: {
            parser: babelParser,
            ecmaVersion: 'latest',
            sourceType: 'module',
            globals: {
                window: 'readonly',
                document: 'readonly',
                AudioWorkletGlobalScope: 'readonly',
                SharedWorkerGlobalScope: 'readonly',
                WorkerGlobalScope: 'readonly',
                ServiceWorkerGlobalScope: 'readonly',
            },
            parserOptions: {
                requireConfigFile: false,
                babelOptions: {
                    presets: ['@babel/preset-react'],
                },
                ecmaFeatures: {
                    jsx: true,
                },
            },
        },
        plugins: {
            react,
            'react-hooks': reactHooks,
            import: importPlugin,
            prettier,
        },
        settings: {
            "import/parsers": {
                espree: [".js", ".cjs", ".mjs", ".jsx"],
            },
            react: {
                version: 'detect',
            },
        },
        // Включение правил и конфигураций напрямую вместо использования "extends"
        rules: {
            ...js.configs.recommended.rules,
            ...react.configs.recommended.rules,
            ...importPlugin.configs.recommended.rules,
            'import/namespace': 0,
            'import/default': 0,
            'import/no-named-as-default': 0,
            'import/no-named-as-default-member': 0,
            'no-undef': 0,
            ...prettierConfig.rules,
            'prettier/prettier': 'error',
            'react/react-in-jsx-scope': 'off',
            'react/jsx-filename-extension': [
                1,
                {extensions: ['.js', '.jsx']},
            ],
            'import/no-extraneous-dependencies': [
                'error',
                {devDependencies: true},
            ],
            'react/boolean-prop-naming': [
                'warn',
                {
                    rule: '^(is|has)[A-Z]([A-Za-z0-9]?)+',
                    message:
                        'Boolean prop names should start with "is" or "has"',
                },
            ],
        },
    },
];
