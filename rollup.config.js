import resolve from '@rollup/plugin-node-resolve';
import postcss from 'rollup-plugin-postcss';
import copy from 'rollup-plugin-copy';
import htmlTemplate from 'rollup-plugin-generate-html-template';
import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';

const production = process.env.NODE_ENV === 'production';

export default {
  input: 'src/index.js',
  output: {
    dir: 'dist',
    format: 'iife',
    sourcemap: !production,
    entryFileNames: 'index.js'
  },
  plugins: [
    resolve(),
    postcss({
      extract: 'crispypix.css',
      minimize: production,
      sourceMap: !production,
      extensions: ['.css'],
      modules: true,
      namedExports: true,
    }),
    copy({
      targets: [
        { src: 'src/fonts/*', dest: 'dist/fonts' },
        { src: 'src/styles/*.css', dest: 'dist/styles' },
        { src: 'src/components/*', dest: 'dist/components' }
      ]
    }),
    htmlTemplate({
      template: 'src/index.html',
      target: 'dist/index.html',
      attrs: ['type="text/css"', 'rel="stylesheet"'],
      replaceVars: {
        '__CSS__': './crispypix.css'
      }
    }),
    !production && serve({
      contentBase: 'dist',
      open: true,
      port: 3000
    }),
    !production && livereload('dist')
  ]
};