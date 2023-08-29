import { defineConfig } from 'dumi';
// import { hooks, ui, utils } from './config/hooks';

export default defineConfig({
  title: 'CV',
  favicon: 'https://i.imgur.com/MbQPDTX.png',
  logo: 'https://i.imgur.com/MbQPDTX.png',
  outputPath: 'docs-dist',
  // locales: [
  //   ['en-US', 'English'],
  //   ['zh-CN', '中文'],
  // ],
  // more config: https://d.umijs.org/config
  mode: 'site',
  menus: {
    // '/ui': ui,
    // '/hooks': hooks,
    // '/utils': utils,
  },
  navs: {
    'en-US': [
      { title: 'Guide', path: '/guide' },
      { title: 'UI', path: '/ui' },
      { title: 'Hooks', path: '/hooks' },
      { title: 'Utils', path: '/utils' },
      { title: 'Chain', path: '/chain' },
      { title: '课程学习', path: '/course' },
      { title: 'React', path: '/react' },
      { title: 'Preact', path: '/preact' },
      { title: '数据结构与算法', path: '/algorithms' },
      {
        title: 'GitHub',
        path: 'https://github.com/xiaotiandada/cv',
      },
    ],
  },
  mfsu: {},
  plugins: ['./src/plugin/codeMD.ts'],
});
