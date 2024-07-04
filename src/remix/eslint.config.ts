import { Linter } from 'eslint';

const remixEslintConfig: Linter.Config = {
    extends: ['@remix-run/eslint-config'],
    overrides: [
        // React
        {
            files: ['**/*.{mjs,js,jsx,ts,tsx}'],
            rules: {
                // Inherit general indentation rules for JSX and TSX files
                'react/jsx-indent': ['error', 4],
                'react/jsx-indent-props': ['error', 4],
                // Using single quotes in JSX and TSX
                quotes: ['error', 'single'],
                // No trailing commas in JSX and TSX
                'comma-dangle': ['error', 'never'],
            },
        },

        // Typescript
        {
            files: ['**/*.{ts,tsx}'],
            rules: {
                // Inherit general indentation rules for TypeScript files
                '@typescript-eslint/indent': ['error', 4],
                // Using single quotes in TypeScript
                quotes: ['error', 'single'],
                // No trailing commas in TypeScript
                'comma-dangle': ['error', 'never'],
            },
        },
    ],
};

export { remixEslintConfig };
