import postcss from 'rollup-plugin-postcss'
import copy from 'rollup-plugin-copy'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import path from 'path'

const production = process.env.NODE_ENV === 'production'

export default {
  input: 'packages/index.css',
  output: {
    file: 'dist/crispypix.css',
    format: 'es',
  },
  plugins: [
    nodeResolve(),
    postcss({
      extract: true,
      minimize: production,
      sourceMap: !production,
      modules: false,
    }),
    copy({
      targets: [
        { src: 'packages/fonts/*', dest: 'dist' },
        { src: 'packages/styles/*.css', dest: 'dist' },
        { src: 'packages/components/*.css', dest: 'dist' },
      ],
      flatten: false,
    }),
  ],
}
