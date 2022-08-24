import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import external from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import image from '@rollup/plugin-image';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';

import typescript from "@rollup/plugin-typescript";

export default [
    {
        input: 'src/index.tsx',
        output: [
            {
                file: 'dist/index.js',
                format: 'cjs',
            },
            {
                file: 'dist/index.es.js',
                format: 'es',
                exports: 'named',
            }

        ],
        plugins: [
            nodeResolve(),
            commonjs({
                include: 'node_modules/**',
                namedExports: {
                    'node_modules/stylis/dist/umd/stylis.js,': ['peek']
                }
            }),
            image(),
            postcss({
                plugins: [],
                minimize: true,
            }),
            typescript(),
            babel({
                exclude: 'node_modules/**',
                presets: ['@babel/preset-react'],
            }),
            resolve(),
            external(),
            terser(),
        ]
    }
]
