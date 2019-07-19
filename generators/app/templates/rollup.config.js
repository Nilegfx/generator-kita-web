import livereload from 'rollup-plugin-livereload';
import serve from 'rollup-plugin-serve';
const isDevelopmentBuild = process.env.BUILD !== 'production';

const devPlugins = [
  isDevelopmentBuild && serve(),
  isDevelopmentBuild && livereload({ watch: 'dist' })
];

export default {
  input: 'src/main.js',
  output: {
    dir: 'dist',
    format: 'iife'
  },
  plugins: [...devPlugins]
};
