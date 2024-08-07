import typescript from '@rollup/plugin-typescript';
import { dts } from 'rollup-plugin-dts';
import del from 'rollup-plugin-delete';
import { createRequire } from 'module';
const pkg = createRequire(import.meta.url)('./package.json');

const isDts = process.env.BUILD === 'dts';
const sourceFile = 'src/index.ts';

// CommonJS build configuration
const cjsConfig = {
    input: sourceFile,
    output: [
        {
            file: pkg.main,
            format: 'cjs',
            sourcemap: false
        }
    ],
    plugins: [
        typescript()
    ]
};

// ESM build configuration
const esmConfig = {
    input: sourceFile,
    output: [
        {
            file: pkg.module,
            format: 'es',
            sourcemap: false
        }
    ],
    plugins: [
        typescript()
    ]
};

// TypeScript type definition configuration
const dtsConfig = {
    input: sourceFile,
    output: {
        file: pkg.types,
        format: 'es'
    },
    plugins: [
        dts(),
        del({ hook: 'buildEnd', targets: ['dist/*.js', '!dist/index.js', 'dist/dts'] })
    ]
};

export default isDts ? dtsConfig : [esmConfig, cjsConfig];
