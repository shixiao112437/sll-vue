// rollup.config.mjs
// ---cut-start---
/** @type {import('rollup').RollupOptions} */

import babel from '@rollup/plugin-babel';

// ---cut-end---
export default {
    input: './src/index.js',
    output: {
        file: './dist/bundle.js',
        format: 'umd',
        name: "Vue",
        sourcemap: true
    },

    plugins: [babel({
        exclude:"node_modules/**",
        babelHelpers: 'bundled'
    })]
};