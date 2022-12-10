import { defineConfig } from 'dumi';
// import { hooks, ui, utils } from './config/hooks';

export default defineConfig({
  title: 'CV',
  favicon:
    'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  logo: 'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
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
      { title: '脚手架', path: '/scaffold' },
      { title: '课程学习', path: '/course' },
      {
        title: 'GitHub',
        path: 'https://github.com/xiaotiandada/cv',
      },
    ],
  },
  mfsu: {},
});
