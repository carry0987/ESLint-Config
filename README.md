# ESLint-Config
[![NPM](https://img.shields.io/npm/v/@carry0987/eslint-config.svg)](https://www.npmjs.com/package/@carry0987/eslint-config)  

### Introduction
**@carry0987/eslint-config** is a customizable ESLint configuration package designed to streamline and standardize linting across multiple JavaScript frameworks such as Remix, NestJS and more. By centralizing common ESLint configurations and extending specific rules per framework, this package helps maintain consistent coding standards and improves developer productivity.

### Features
- **Base Configuration**: A shared base configuration adhering to ESLint's recommended rules.
- **Framework-Specific Configurations**: Tailored configurations for Remix, NestJS and more to address framework-specific linting needs.
- **ESM Support**: Utilizes modern ECMAScript Module syntax for better compatibility.
- **TypeScript Support**: Seamless integration with TypeScript projects.

### Installation
Install the package via `pnpm`:
```bash
pnpm add -D @carry0987/eslint-config
```

### Usage
In your project's root, create an `eslint.config.mjs` file and extend the necessary configuration:

- **Remix**
  ```javascript
  import { remixConfig } from '@carry0987/eslint-config';
  export default {
    extends: remixConfig
  };
  ```

- **NestJS**
  ```javascript
  import { nestConfig } from '@carry0987/eslint-config';
  export default {
    extends: nestConfig
  };
  ```

By using **@carry0987/eslint-config**, you can ensure consistent and efficient linting practices across all your JavaScript projects.
