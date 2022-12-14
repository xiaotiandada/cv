---
title: 玩转webpack
order: 1
---

## 《玩转 webpack》

《玩转 webpack》极客时间课程源码和课件

- https://github.com/cpselvis/geektime-webpack-course

---

## 笔记

- [webpack 系列一：最佳配置指北 #68](https://github.com/sisterAn/blog/issues/68)
- [玩转 webpack5（上）](https://heapdump.cn/article/3551616)
- [学习 Webpack5 之路（优化篇）- 近 7k 字](https://juejin.cn/post/6996816316875161637)
- [webpack5](https://github.com/HolyZheng/holyZheng-blog/issues/46)
- [面试官：webpack 原理都不会？](https://github.com/Cosen95/blog/issues/48#top)
- [从零实现一个迷你 Webpack](https://mp.weixin.qq.com/s/KiADtB1-VBpnajKvQllIMg)

下面是自己在学习的过程中产生的一些笔记, 后续可能考虑加入 PDF 在线阅读功能 方便理解。

教程的相关信息

```
webpack4
version: 4.31.0
```

当前的本地信息

```
webpack5
```

- nvm
- nodejs
- npm

```bash
yarn init
yarn add webpack webpack-cli -D

./node_modules/.bin/webpack -v
webpack: 5.74.0
webpack-cli: 4.10.0
webpack-dev-server not installed
```

#### 05 丨为什么选择 webpack

- https://webpack.js.org/loaders/
- https://webpack.js.org/plugins/

#### 06 丨初识 webpack

只设定了 entry output

```js
{
  entry: './src/index.js', // 默认
  output: './dist/main.js', // 默认
}
```

#### 08 丨 webpack 初体验：一个最简单的例子

```js
'use strict';

const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  mode: 'production',
};
```

```js
import { helloworld } from './helloworld';

document.write(helloworld());
```

```js
export function helloworld() {
  return 'Hello webpack';
}
```

#### 10 丨 webpack 核心概念之 entry 用法

Entry 用来指定 webpack 的打包入口

#### 11 丨 webpack 核心概念之 output

Output 用来告诉 webpack 如何将编译后的文件输出到磁盘

#### 15 丨解析 ES6 和 React JSX

```js | pure
import React from 'react';
import ReactDOM from 'react-dom';

class Hello extends React.Component {
  render() {
    return <div>Hello {this.props.toWhat}</div>;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Hello toWhat="World" />);
```

```js
'use strict';

const path = require('path');

module.exports = {
  entry: {
    index: './src/index.js',
    search: './src/search.js',
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
};
```

```json
{
  "presets": ["@babel/preset-env", "@babel/preset-react"],
  "plugins": ["@babel/plugin-proposal-class-properties"]
}
```

```json
{
  "devDependencies": {
    "@babel/core": "^7.19.6",
    "@babel/plugin-proposal-class-properties": "^7.18.6",
    "@babel/preset-env": "^7.19.4",
    "@babel/preset-react": "^7.18.6",
    "babel-loader": "^8.2.5",
    "webpack": "^5.74.0",
    "webpack-cli": "^4.10.0"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  }
}
```

#### 16 丨解析 CSS、Less 和 Sass

```js
'use strict';

const path = require('path');

module.exports = {
  entry: {
    index: './src/index.js',
    search: './src/search.js',
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.less$/i,
        use: [
          // compiles Less to CSS
          'style-loader',
          'css-loader',
          'less-loader',
        ],
      },
    ],
  },
};
```

#### 17 丨解析图片和字体

```js
import img from './file.png';

module.exports = {
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  },
};
```

file-loader 导入了，换了好几种字体都没成功...

```less
@font-face {
  font-family: 'SourceHanSerifSC-Heavy';
  src: url('./fonts/SourceHanSerifSC-Heavy.otf') format('tryetype');
}

body {
  font-family: 'SourceHanSerifSC-Heavy';
}
```

```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: true,
            },
          },
        ],
      },
    ],
  },
};
```

```html
<img src="data:image/jpeg;base64....." />
```

#### 19 丨 webpack 中的热更新及原理分析

- https://www.npmjs.com/package/webpack-dev-server
- https://github.com/webpack/webpack-dev-middleware

#### 20 丨文件指纹策略：chunkhash、contenthash 和 hash

JS 的文件指纹设置

设置 output 的 filename，使用[chunnkhash] `[name][chunkhash:8].js`

CSS 的文件指纹设置

设置 MiniCssExtractPlugin 的 filename， 使用 [contenthash] `[name][commtenthash:8].css`

图片的文件指纹设置

`[name][hash:8].[ext]`

#### 21 丨 HTML 、CSS 和 JS 代码压缩

HTML CSS JS 压缩

JS

内置了

- https://www.npmjs.com/package/uglifyjs-webpack-plugin

CSS

- https://www.npmjs.com/package/optimize-css-assets-webpack-plugin
- https://github.com/webpack-contrib/css-minimizer-webpack-plugin

HTML

- https://www.npmjs.com/package/html-webpack-plugin

#### 22 丨自动清理构建目录产物

每次构建的时候不会清理目录，造成构建的输出目录 ouput 文件越来越多

```bash
rm -rf ./dist && webpack
rimraf ./dist && webpack
```

- https://www.npmjs.com/package/clean-webpack-plugin 一个用于删除/清理构建文件夹的 webpack 插件。 默认会删除 output

#### 23 丨 PostCSS 插件 autoprefixer 自动补齐 CSS3 前缀

- https://github.com/postcss/postcss
- https://github.com/postcss/autoprefixer
- https://github.com/webpack-contrib/postcss-loader

```json
// package.json
"browserslist": {
    "production": [
      "last 2 version",
      ">0.2%"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version",
      "last 1 ie version"
    ]
  }
```

```js
// postcss.config.js
module.exports = {
  plugins: [require('autoprefixer')],
};
```

#### 24 丨移动端 CSS px 自动转换成 rem

- https://www.npmjs.com/package/px2rem-loader
- https://github.com/amfe/lib-flexible

#### 25 丨静态资源内联

- https://www.npmjs.com/package/html-inline-css-webpack-plugin
- https://www.npmjs.com/package/raw-loader
- https://webpack.js.org/guides/asset-modules/ webpack 5

#### 26 丨多页面应用打包通用方案

**多页面应用（MPA）概念**

每一次页面跳转的时候，后台服务器都会给返回一个新的 html 文档，这种类型的网站也就是多页网站，也叫做多页应用。

**多页面打包基本思路**

每个页面对应一个 entry，一个 html- webpack- plugin

缺点：每次新增或删除页面需要改 webpack 配置

**多页面打包通用方案**

动态获取 entry 和设置 html- webpack- plugin 数量 利用 glob.sync

entry: glob.sync (path.join (\_dirname, './src/\*/index.js'),

- https://www.npmjs.com/package/glob

```js
'use strict';

const glob = require('glob');
const path = require('path');
// const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const setMPA = () => {
  const entry = {};
  const htmlWebpackPlugins = [];

  //  '/Users/x/Code/Case/webpack/learn2/src/index/index.js',
  //  '/Users/x/Code/Case/webpack/learn2/src/search/index.js'
  const entryFiles = glob.sync(path.join(__dirname, './src/*/index.js'));

  Object.keys(entryFiles).map((index) => {
    const entryFile = entryFiles[index];

    const match = entryFile.match('/src/(.*)/index.js');
    const pageName = match && match[1];

    entry[pageName] = entryFile;

    htmlWebpackPlugins.push(
      new HtmlWebpackPlugin({
        template: path.join(__dirname, `src/${pageName}/index.html`),
        filename: `${pageName}.html`,
        chunks: [pageName],
      }),
    );
  });

  return {
    entry,
    htmlWebpackPlugins,
  };
};

const { entry, htmlWebpackPlugins } = setMPA();

module.exports = {
  entry: entry,
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name]_[chunkhash:8].js',
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.less$/i,
        sideEffects: true,
        use: [
          // compiles Less to CSS
          MiniCssExtractPlugin.loader,
          'css-loader',
          'less-loader',
          {
            loader: 'postcss-loader',
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name]_[hash:8].[ext]',
            },
          },
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name]_[hash:8].[ext]',
            },
          },
        ],
      },
    ],
  },
  optimization: {
    minimizer: [new CssMinimizerPlugin()],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name]_[contenthash:8].css',
    }),
    // new webpack.HotModuleReplacementPlugin()
    new CleanWebpackPlugin(),
  ].concat(htmlWebpackPlugins),
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    hot: true,
  },
};
```

#### 27 丨使用 sourcemap

- https://juejin.cn/post/6960941899616092167

- https://webpack.js.org/configuration/devtool/#devtool

作用：通过 source map 定位到源代码

- source map 科普文：
- [JavaScript Source Map 详解](https://www.ruanyifeng.com/blog/2013/01/javascript_source_map.html)

开发环境开启，线上环境关闭

- 线上排查问题的时候可以将 sourcemap 上传到错误监控系统

**Source map 关键字**

- eval：使用 eval 包裹模块代码

- source map：产生 .Map 文件
- cheap：不包含列信息

- inline：将.Map 作为 DataURI 嵌入，不单独生成.Map 文件
- module：包含 loader 的 sourcemap

![image-20221028151453409](https://i.imgur.com/A1fyYt8.png)

**default**

![image-20221028153252920](https://i.imgur.com/BgFCWnM.png)

**devtool: 'source-map'**

![image-20221028152920605](https://i.imgur.com/df110u0.png)

**devtool: 'cheap-source-map',**

![image-20221028153142936](https://i.imgur.com/w3t7r6K.png)

#### 28 丨提取页面公共资源

- https://www.npmjs.com/package/html-webpack-externals-plugin
- https://webpack.js.org/configuration/optimization/
- https://webpack.js.org/plugins/split-chunks-plugin/#splitchunksminsize

**基础库分离**

- 思路：将 react、react-dom 基础包通过 cdn 引入，不打入 bundle 中

- 方法：使用 html- webpack- externals-plugin

**利用 SplitChunksPlugin 进行公共脚本分离**

Webpack4 内置的，替代 CommonsChunkPlugin：插件 chunks 参数说明：

- async 异步引入的库进行分离（默认）

- initial 同步引入的库进行分离
- all 所有引入的库进行分离（推荐)

**利用 SplitChunksPlugin 分离基础包**

test：匹配出需要分离的包

**利用 SplitChunksPlugin 分离页面公共文件**

minChunks：设置最小引用次数为 2 次

minuSize：分离的包体积的大小 name: 'commons',

```js
{
  plugins: [
       new HtmlWebpackPlugin({
        template: path.join(__dirname, `src/${pageName}/index.html`),
        filename: `${pageName}.html`,
        // chunks 不配置 'vendors', 'commons' 也讷讷个工作
        chunks: ['vendors', 'commons', pageName],
      })
  ],
  optimization: {
    // minSize: 0 不生效，在 common 里面导入了 lodash 体积变大才功能打包出来
    minimizer: [new CssMinimizerPlugin()],
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
        commons: {
          name: 'commons',
          chunks: 'all',
          minChunks: 2,
        },
      },
    },
  },
}
```

```bash | pure
assets by info 753 KiB [immutable]
  assets by path *.js 689 KiB
    asset commons_b8135d34.js 528 KiB [emitted] [immutable] [big] (name: commons) (id hint: commons)
    asset vendors_dcd4109b.js 137 KiB [emitted] [immutable] (name: vendors) (id hint: vendor)
    asset search_b218e1ce.js 17.2 KiB [emitted] [immutable] (name: search)
    asset index_e3aea713.js 7.62 KiB [emitted] [immutable] (name: index)
  asset img_f48f97d1.jpeg 64 KiB [emitted] [immutable] [from: src/images/img.jpeg] (auxiliary name: search)
  asset search_6e9cebe1.css 123 bytes [emitted] [immutable] [minimized] (name: search)
assets by path *.html 844 bytes
  asset search.html 476 bytes [emitted]
  asset index.html 368 bytes [emitted]
Entrypoint index [big] 535 KiB = commons_b8135d34.js 528 KiB index_e3aea713.js 7.62 KiB
Entrypoint search [big] 682 KiB (64 KiB) = commons_b8135d34.js 528 KiB vendors_dcd4109b.js 137 KiB search_b218e1ce.js 17.2 KiB search_6e9cebe1.css 123 bytes 1 auxiliary asset
```

> 当 webpack 处理文件路径时，它们总是包含`/`在 Unix 系统和`\`Windows 上。这就是为什么必须使用`[\\/]`in`{cacheGroup}.test`字段来表示路径分隔符。`/`或`\`在`{cacheGroup}.test`跨平台使用时会导致问题。

#### 29 丨 treeshaking 的使用和原理分析

- https://webpack.js.org/guides/tree-shaking/

**Tree shaking（摇树优化）**

概念：1 个模块可能有多个方法，只要其中的某个方法使用到了，则整个文件都会被打到 bundle 里面去，tree shaking 就是只把用到的方法打入 bundle，没用到的方法会在 uglify 阶段被擦除掉。

使用：webpack 默认支持，在。Babelrc 里设置 modules: false 即可

· production model 的情况下默认开启

要求：必须是 ES6 的语法，CJS 的方式不支持

> 摇树，顾名思义，就是将枯黄的落叶摇下来，只留下树上活的叶子。枯黄的落叶代表项目中未引用的无用代码，活的树叶代表项目中实际用到的源码。https://juejin.cn/post/6996816316875161637#heading-40

**DCE (Elimination)**

代码不会被执行，不可到达代码执行的结果不会被用到代码只会影响死变量（只写不读）

```js
if (false) {
  console.log('这段代码永远不会执行');
}
```

**Tree- shaking 原理**

利用 ES6 模块的特点：

- 只能作为模块顶层的语句出现

- import 的模块名只能是字符串常量
- import binding 是 immutablel 的

代码擦除：uglify 阶段删除无用代码

#### 30 丨 ScopeHoisting 使用和原理分析

**会导致什么问题？**

大量函数闭包包裹代码，导致体积增大（模块越多越明显）

运行代码时创建的函数作用域变多，内存开销变大

结论：

- 被 webpack 转换后的模块会带上一层包裹
- import 会被转换成* webpack* require

**进一步分析 webpack 的模块机制**

分析：

- 打包出来的是一个 IFE（匿名闭包）

- modules 是一个数组，每一项是一个模块初始化函数

- \_ webpack. Require 用来加载模块，返回 module. Exports
- 通过 WEBPACK* REQUIRE* METHOD (O）启动程序

**Scope hoisting 原理**

原理：将所有模块的代码按照引用顺序放在一个函数作用域里，然后适当的重命名一些变量以防止变量名冲突

对比：通过 scope hoisting 可以减少函数声明代码和内存开销

**Scope hoisting 使用**

webpack mode 为 production 默认开启必须是 ES6 语法，CJS 不支持

- https://webpack.js.org/plugins/module-concatenation-plugin/

```
// 历史版本 3 可能需要手动配置
new webpack.optimize.ModuleConcatenationPlugin();
```

#### 31 丨代码分割和动态 import

- https://zhuanlan.zhihu.com/p/73325163

**代码分割的意义**

对于大的 Web 应用来讲，将所有的代码都放在一个文件中显然是不够有效的，特别是当你的某些代码块是在某些特殊的时候才会被使用到。webpack 有一个功能就是将你的代码库分割成 chunks（语块），当代码运行到需要它们的时候再进行加载。

适用的场景：

- 抽离相同代码到一个共享块

- 脚本懒加载，使得初始下载的代码更小

![image-20221031234314107](https://i.imgur.com/xN0KtZQ.png)

**懒加载 JS 脚本的方式**

CommonJS: require.ensure ES6:动态 import (目 前还没有原生支持，需要 babel 转换)

**如何使用动态 import?**

- 安装 babel 插件
- ES6:动态 import ( 目前还没有原生支持，需要 babel 转换)
- https://babeljs.io/docs/en/babel-plugin-syntax-dynamic-import

**代码分割的效果**

![image-20221101003950592](https://i.imgur.com/cr9iRLz.png)

```jsx | pure
import React from 'react';
import ReactDOM from 'react-dom';
import img from '../images/img.jpeg';
import '../../common/index';

import './index.css';
import './style.less';

class Hello extends React.Component {
  constructor() {
    super(...arguments);
    this.state = {
      Text: null,
    };
  }

  loadComponent() {
    import('./text.js').then((Text) => {
      this.setState({
        Text: Text.default,
      });
    });
  }

  render() {
    const { Text } = this.state;
    return (
      <div>
        {Text ? <Text /> : null}
        Hello {this.props.toWhat}
        <p>汉字 watch devServer 12345678</p>
        <img src={img} onClick={this.loadComponent.bind(this)} />
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Hello toWhat="World" />);
```

发送一个 Jsonp 请求，`window[webpackJsonp]` 异步加载逻辑

新版本 webpack5 是 `(self["webpackChunkwebpack_learn"] = self["webpackChunkwebpack_learn"] || [])`

根据我的 package name 来的，`"name": "webpack-learn"`

![image-20221101004234265](https://i.imgur.com/W5QQCoz.png)

#### 32 丨 webpack 和 ESLint 结合

- https://www.npmjs.com/package/eslint-config-airbnb
- https://www.npmjs.com/package/eslint-config-airbnb-base

**ESL \_int 如何执行落地?** 和 CI/CD 系统集成和 webpack 集成

本地开发阶段增加 precommit 钩子

- husky https://www.npmjs.com/package/husky

**方案二: webpack 与 ESLint 集成**

- https://www.npmjs.com/package/eslint-loader been deprecated
- https://www.npmjs.com/package/eslint-webpack-plugin
- https://esprima.org/
- https://www.npmjs.com/package/babel-eslint been deprecated
- https://www.npmjs.com/package/@babel/eslint-parser
- https://www.robinwieruch.de/webpack-eslint/
- https://webpack.js.org/plugins/eslint-webpack-plugin/

#### 33 丨 webpack 打包组件和基础库

- https://www.npmjs.com/package/terser-webpack-plugin
- https://webpack.js.org/configuration/output/#outputlibrary

**webpack 打包库和组件**

webpack 除了可以用来打包应用，也可以用来打包 js 库

实现一个大整数加法库的打包

- 需要打包压缩版和非压缩版本
- 支持 AMD/CJS/ESM 模块引入

**如何将库暴露出去?**

library:指定库的全局变量

libraryTarget:支持库引入的方式

```js
  {
    entry: {
      'large-number': './src/index.ts',
      'large-number.min': './src/index.ts',
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].js',
      library: {
        name: 'largeNumber',
        type: 'umd',
        export: 'default',
      },
    },
      optimization: {
      minimize: true,
      minimizer: [
        new TerserPlugin({
          include: /\.min\.js$/,
        }),
      ],
    },
  }
```

```js
{
  "main": "index.js",
  "script": {
     "prepublish": "yarn run build:prod"
  }
}
```

#### 34 丨 webpack 实现 SSR 打包（上）

**服务端渲染(SSR)是什么?**

渲染:HTML+csS+JS+Data-->渲染后的 HTML

服务端:

- 所有模板等资源都存储在服务端
- 内网机器拉取数据更快
- 一个 HTML 返回所有数据

**SSR 的优势**

减少白屏时间

对于 SEO 友好

#### 35 丨 webpack 实现 SSR 打包（下）

**如何解决样式不显示的问题?**

- 使用打包出来的浏览器端 htm|为模板
- 设置占位符，动态插入组件

**首屏数据如何处理?**

- 服务端获取数据
- 替换占位符

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title><%= htmlWebpackPlugin.options.title %></title>
  </head>
  <body>
    <div id="root"><!--HTML_PLACEHOLDER--></div>
    <!--INSTALL_DATA_PLACEHOLDER-->
  </body>
</html>
```

```js
const express = require('express');
const fs = require('fs');
const path = require('path');
const { renderToString } = require('react-dom/server');

const template = fs.readFileSync(path.join(__dirname, '../dist/search.html'), 'utf-8');
const data = require('./data.json');
const SSR = require('../dist/search-server');

if (typeof self === 'undefined') {
  global.self = {};
}

const renderMarkUp = (str) => {
  const dataStr = JSON.stringify(data);
  return template
    .replace('<!--HTML_PLACEHOLDER-->', str)
    .replace(
      '<!--INSTALL_DATA_PLACEHOLDER-->',
      `<script>window.__install_data=${dataStr}</script>`,
    );
};

const server = (port) => {
  const app = express();

  app.use(express.static('dist'));
  app.get('/search', (req, res) => {
    const html = renderToString(SSR);
    res.status(200).send(renderMarkUp(html));
  });

  app.listen(port, () => {
    console.log('Server is running on port: ', `http://localhost:${port}`);
  });
};

server(process.env.port || 3000);
```

```js
'use strict';
const glob = require('glob');
const path = require('path');
// const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

const setMPA = () => {
  const entry = {};
  const htmlWebpackPlugins = [];

  //  '/Users/xiaotian/Code/Case/webpack/learn2/src/index/index.js',
  //  '/Users/xiaotian/Code/Case/webpack/learn2/src/search/index.js'
  const entryFiles = glob.sync(path.join(__dirname, './src/*/index-server.js'));

  // eslint-disable-next-line array-callback-return
  Object.keys(entryFiles).map((index) => {
    const entryFile = entryFiles[index];

    const match = entryFile.match('/src/(.*)/index-server.js');
    const pageName = match && match[1];

    if (pageName) {
      entry[pageName] = entryFile;

      htmlWebpackPlugins.push(
        new HtmlWebpackPlugin({
          template: path.join(__dirname, `src/${pageName}/index.html`),
          filename: `${pageName}.html`,
          chunks: ['vendors', 'commons', pageName],
          minify: {
            removeComments: false,
          },
        }),
      );
    }
  });

  return {
    entry,
    htmlWebpackPlugins,
  };
};

const { entry, htmlWebpackPlugins } = setMPA();

module.exports = {
  entry,
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name]-server.js',
    library: {
      type: 'umd',
    },
    globalObject: "typeof self !== 'undefined' ? self : this",
    publicPath: '',
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '',
            },
          },
          'css-loader',
        ],
      },
      {
        test: /\.less$/i,
        sideEffects: true,
        use: [
          // compiles Less to CSS
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '',
            },
          },
          'css-loader',
          'less-loader',
          {
            loader: 'postcss-loader',
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name]_[hash:8].[ext]',
            },
          },
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name]_[hash:8].[ext]',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name]_[contenthash:8].css',
    }),
    // new webpack.HotModuleReplacementPlugin()
    new CleanWebpackPlugin(),
    new ESLintPlugin(),
  ].concat(htmlWebpackPlugins),
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    hot: true,
  },
  optimization: {
    minimizer: [new CssMinimizerPlugin()],
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
        commons: {
          name: 'commons',
          chunks: 'all',
          minChunks: 2,
        },
      },
    },
  },
};
```

- https://www.npmjs.com/package/ignore-loader

#### 36 丨优化构建时命令行的显示日志

- https://www.npmjs.com/package/friendly-errors-webpack-plugin
- https://webpack.js.org/configuration/stats/

**当前构建时的日志显示.**

展示一大堆日志，很多并不需要开发者关注

**Stats Presets**

Webpack comes with certain presets available for the stats output:

| Preset | Alternative | Description |
| :-- | :-- | :-- |
| `'errors-only'` | _none_ | Only output when errors happen |
| `'errors-warnings'` | _none_ | Only output errors and warnings happen |
| `'minimal'` | _none_ | Only output when errors or new compilation happen |
| `'none'` | `false` | Output nothing |
| `'normal'` | `true` | Standard output |
| `'verbose'` | _none_ | Output everything |
| `'detailed'` | _none_ | Output everything except `chunkModules` and `chunkRootModules` |
| `'summary'` | _none_ | Output webpack version, warnings count and errors count |

**如何优化命令行的构建日志**

使用 friendly-errors-webpack-plugin

- success:构建成功的日志提示
- warning:构建警告的日志提示
- error:构建报错的日志提示
- stats 设置成 errors- only

#### 37 丨构建异常和中断处理

**如何判断构建是否成功?**

在 CI/CD 的 pipline 或者发布系统需要知道当前构建状态

每次构建完成后输入 echo $?获取错误码

**构建异常和中断处理**

webpack4 之前的版本构建失败不会抛出错误码(error code)

Node.js 中的 process.exit 规范

- 0 表示成功完成，回调函数中，err 为 null
- 非 0 表示执行失败，回调函数中，err 不为 null, err.code 就是传给 exit 的数字

**如何主动捕获并处理构建错误?**

compiler 在每次构建结束后会触发 done 这个 hook

process.exit 主动处理构建报错

```js
function () {
  this.hooks.done.tap('done', (stats) => {
    console.log(stats.errors)
    // process.exit(0)
  })
}
```

- https://stackoverflow.com/questions/43147330/what-is-difference-between-method-process-exit1-and-process-exit0-in-node-js
- https://nodejs.org/api/process.html#processexitcode
- https://nodejs.org/api/process.html#process_exit_codes

#### 38 丨构建配置包设计

**构建配置抽离成 npm 包的意义**

**通用性**

- 业务开发者无需关注构建配置
- 统一团队构建脚本

**可维护性**

- 构建配置合理的拆分
- README 文档、ChangeLog 文档等

**质量**

- 冒烟测试、单元测试、测试覆盖率
- 持续集成

**构建配置管理的可选方案**

通过多个配置文件管理不同环境的构建，webpack -- config 参数进行控制

将构建配置设计成一个库，比如: hjs- -webpack、 Neutrino、 webpack- -blocks

抽成一个工具进行管理，比如: create-react- -app, kyt, nwb

将所有的配置放在一个文件，通过-- env 参数控制分支选择

- https://www.npmjs.com/package/hjs-webpack
- https://www.npmjs.com/package/neutrino
- https://www.npmjs.com/package/webpack-blocks
- https://www.npmjs.com/package/react-scripts
- https://www.npmjs.com/package/kyt
- https://www.npmjs.com/package/nwb

**构建配置包设计**

通过多个配置文件管理不同环境的 webpack 配置

- 基础配置: webpack.base.js
- 开发环境: webpack.dev.js
- 生产环境: webpack.prod.js
- SSR 环境: webpack.ssr.js
- ...

**抽离成一个 npm 包统一管理**

- 规范: Git commit 日志、README、ESLint 规范、Semver 规范
- 质量:冒烟测试、单元测试、测试覆盖率和 CI

**通过 webpack-merge 组合配置**

https://www.npmjs.com/package/webpack-merge

#### 39 丨功能模块设计和目录结构

**功能模块设计**

**目录结构**

lib 放置源代码

test 放置测试代码

拆分不同环境的配置，通过 merge 合并

#### 40 丨使用 ESLint 规范构建脚本

**使用 ESL int 规范构建脚本**

使用 eslint-config- -airbnb- base

eslint -- fix 可以自动处理空格

```json
module.exports = {
  env: {
    browser: true,
    node: true,
    commonjs: true,
    es2021: true,
  },
  extends: 'airbnb-base',
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
  },
};
```

#### 41 丨冒烟测试介绍和实际运用

- https://www.npmjs.com/package/rimraf
- https://www.npmjs.com/package/glob-all
- https://www.npmjs.com/package/mocha

**冒烟测试(smoke testing)**

冒烟测试是指对提交测试的软件在进行详细深入的测试之前而进行的预测试，这种预测试的主要目的是暴露导致软件需重新发布的基本功能失效等严重问题。

**冒烟测试执行**

构建是否成功

每次构建完成 build 目录是否有内容输出

- 是否有 JS、CSS 等静态资源文件
- 是否有 HTML 文件

**判断构建是否成功**

在示例项目里面运行构建，看看是否有报错

```js
const path = require('path');
const webpack = require('webpack');
const rimraf = require('rimraf');
const Mocha = require('mocha');

const mocha = new Mocha({
  timeout: 10000,
});

process.chdir(path.join(__dirname, 'template'));

rimraf('./dist', () => {
  // eslint-disable-next-line global-require
  const prodConfig = require('../../lib/webpack.pord');

  webpack(prodConfig, (err, stats) => {
    if (err) {
      console.error(err);
      process.exit(2);
    }

    console.log(
      stats.toString({
        color: true,
        modules: false,
        children: false,
        chunks: false,
        chunkModules: false,
      }),
    );
  });

  console.log('Webpack Build Success, begin run test.');

  // 不知道为什么 先执行了，延迟执行一下
  setTimeout(() => {
    mocha.addFile(path.join(__dirname, 'html-test.js'));
    mocha.addFile(path.join(__dirname, 'css-js-test.js'));

    mocha.run();
  }, 3000);
});
```

**判断基本功能是否正常**

编写 mocha 测试用例

- 是否有 JS、CSS 等静态资源文件
- 是否有 HTML 文件

```js
const glob = require('glob-all');

// eslint-disable-next-line no-undef
describe('Checking generated html files', () => {
  // eslint-disable-next-line no-undef
  it('should generate html files', (done) => {
    const files = glob.sync(['./dist/index.html', './dist/search.html']);
    console.log('object', files);

    if (files.length > 0) {
      done();
    } else {
      throw new Error('no html files generated');
    }
  });
});
```

```js
const glob = require('glob-all');

describe('Checking generated css js files', () => {
  it('should generate css js files', (done) => {
    const files = glob.sync([
      './dist/index_*.js',
      './dist/index_*.css',
      './dist/search_*.js',
      './dist/search_*.css',
    ]);

    if (files.length > 0) {
      done();
    } else {
      throw new Error('no css js files generated');
    }
  });
});
```

#### 42 丨单元测试和测试覆盖率

- https://github.com/gotwarlost/istanbul
- https://github.com/gotwarlost/istanbul

#### 43 丨持续集成和 TravisCI

- https://www.travis-ci.com/

接入 Travis CI

1. https:/ /travis- -ci.org/ 使用 GitHub 账号登录
2. 在 https:/ /travis- -ci.org/ account/ repositories 为项目开启
3. 项目根目录下新增.travis.ymI

#### 44 丨发布到 npm

发布到 npm

添加用户: npm adduser

升级版本

​ 升级补丁版本号: npm version patch ​ 升级小版本号: npm version minor ​ 升级大版本号: npm version major

发布版本: npm publish

#### 47 丨初级分析：使用 webpack 内置的 stats

stats:构建的统计信息

package.json 中使用 stats

```bash
"build:stats": "webpack --config webpack.prod.js --json > stats.json",
```

#### 48 丨速度分析：使用 speed-measure-webpack-plugin

- https://www.npmjs.com/package/speed-measure-webpack-plugin

**速度分析插件作用**

分析整个打包总耗时

每个插件和 loader 的耗时情况

#### 49 丨体积分析：使用 webpack-bundle-analyzer

**可以分析哪些问题?**

依赖的第三方模块文件大小

业务里面的组件代码大小

#### 52 丨多进程多实例并行压缩

推荐 terser-webpack-plugin

#### 53 丨进一步分包：预编译资源模块

**进一步分包:预编译资源模块**

思路:将 react、react- dom、redux、 react- redux 基础包和业务基础包打包成一个文件

方法:使用 DLLPlugin 进行分包，DllReferencePlugin 对 manifest.json 弓|用

```js | pure
const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    library: ['react', 'react-dom'],
  },
  output: {
    filename: '[name]_[hash].ddl.js',
    path: path.join(__dirname, 'build/library'),
    library: '[name]',
  },
  plugins: [
    new webpack.DllPlugin({
      name: '[name]_[hash]',
      path: path.join(__dirname, 'build/library/[name].json'),
    }),
  ],
};
```

#### 54 丨充分利用缓存提升二次构建速度

**缓存**

目的:提升二次构建速度

缓存思路:

- babel-loader 开启缓存
- terser- -webpack- -plugin 开启缓存
- 使用 cache-loader 或者 hard- source-webpack-plugin

#### 55 丨缩小构建目标

缩小构建目标

目的:尽可能的少构建模块

比如 babel-loader 不解析 node\_ modules

**减少文件搜索范围**

优化 resolve.modules 配置(减少模块搜索层级)

优化 resolve.mainFields 配置

优化 resolve.extensions 配置

合理使用 alias

![image-20221113024036424](https://i.imgur.com/TidgZvO.png)

#### 56 丨使用 webpack 进行图片压缩

图片压缩要求:基于 Node 库的 imagemin 或者 tinypng API 使用:配置 image- -webpack-loader

- https://www.npmjs.com/package/image-webpack-loader

```json
rules: [{
  test: /\.(gif|png|jpe?g|svg)$/i,
  use: [
    'file-loader',
    {
      loader: 'image-webpack-loader',
      options: {
        mozjpeg: {
          progressive: true,
        },
        // optipng.enabled: false will disable optipng
        optipng: {
          enabled: false,
        },
        pngquant: {
          quality: [0.65, 0.90],
          speed: 4
        },
        gifsicle: {
          interlaced: false,
        },
        // the webp option will enable WEBP
        webp: {
          quality: 75
        }
      }
    },
  ],
}]
```

![image-20221121142259358](https://i.imgur.com/9dYRwRt.png)

#### 57 丨使用 TreeShaking 擦除无用的 CSS

**tree shaking(摇树优化)复习**

概念: 1 个模块可能有多个方法，只要其中的某个方法使用到了，则整个文件都会被打到 bundle 里面去，tree shaking 就是只把用到的方法打入 bundle，没用到的方法会在 uglify 阶段被擦除掉。

使用: webpack 默认支持，在.babelrc 里设置 modules: false 即可

- production mode 的情况下默认开启

要求:必须是 ES6 的语法，CJS 的方式不支持

**无用的 CSS 如何删除掉?**

PurifyCSS:遍历代码，识别已经用到的 CSS class

uncss: HTML 需要通过 jsdom 加载，所有的样式通过 PostCSS 解析，通过 document.querySelector 来识别在 html 文件里面不存在的选择器

- https://www.npmjs.com/package/purifycss-webpack-plugin
- https://www.npmjs.com/package/mini-css-extract-plugin

![image-20221130014349452](https://i.imgur.com/MvoSRKo.png)

#### 58 丨使用动态 Polyfill 服务

- https://caniuse.com/?search=promise
- https://github.com/paulmillr/es6-shim

![image-20221130015209644](https://i.imgur.com/o70zcvf.png)

- https://polyfill.io/v3/
- https://polyfill.io/v3/polyfill.min.js?features=Promise

#### 59 丨 webpack 启动过程分析

**查找 webpack 入口文件**

在命令行运行以上命令后，npm 会让命令行工具进入 node\_ modules\.bin 目录查找是否存在 webpack.sh 或者 webpack.cmd 文件，如果存在，就执行，不存在，就抛出错误。

实际的入口文件是: node\_ modules \webpack \bin\webpack.js

```json
"bin": {
  "webpack": "bin/webpack.js"
},
```

"version": "5.75.0",

```js | pure
const cli = {
	name: "webpack-cli",
	package: "webpack-cli",
	binName: "webpack-cli",
	installed: isInstalled("webpack-cli"),
	url: "https://github.com/webpack/webpack-cli"
};

if (!cli.installed) {
		//...
		process.exitCode = 0;

		//...

		runCommand(packageManager, installOptions.concat(cli.package))
			.then(() => {
				runCli(cli);
			})
			.catch(error => {
				console.error(error);
				process.exitCode = 1;
			});
	});
} else {
	runCli(cli);
}
```

**启动后的结果**

webpack 最终找到 webpack- -cli (webpack- -command) 这个 npm 包，并且执行 CLI

#### 60 丨 webpack-cli 源码阅读

**webpack- -cli 做的事情**

引入 yargs,对命令行进行定制

分析命令行参数，对各个参数进行转换，组成编译配置项

引用 webpack,根据配置项进行编译和构建

**从 NON* COMPIL ATION* \_CMD 分析出不需要编译的命令**

webpack-cli 处理不需要经过编译的命令

![image-20221130021319443](https://i.imgur.com/Fgr81ia.png)

![image-20221130021657625](https://i.imgur.com/rXutr4v.png)

- https://www.npmjs.com/package/yargs

![image-20221130021744065](https://i.imgur.com/7xX7YVd.png)

![image-20221130022025149](https://i.imgur.com/MmBYFaW.png)

**webpack-cli 执行的结果**

webpack--cli 对配置文件和命令行参数进行转换最终生成配置选项参数 options

最终会根据配置参数实例化 webpack 对象，然后执行构建流程

#### 61 丨 Tapable 插件架构与 Hooks 设计

**Webpack 的本质**

Webpack 可以将其理解是一种基于事件流的编程范例，一 系列的插件运行。

核心对象 Compiler 继承 Tapable

核心対象 Compilation 継承 Tapable

```js
class Compiler extends Tapable {}

class Compilation extends Tapable {}
```

**Tapable 是什么?**

- https://www.npmjs.com/package/tapable

Tapable 是一个类似于 Node.js 的 EventEmitter 的库,主要是控制钩子函数的发布与订阅，控制着 webpack 的插件系统。

Tapable 库暴露了很多 Hook (钩子)类，为插件提供挂载的钩子

```js
const {
	SyncHook, //同步钩子
	SyncBailHook, //同步熔断钩子
	SyncWaterfallHook, //同步流水钩子
	SyncLoopHook, //同步循环钩子
	AsyncParallelHook, 从异步并发钩子
	AsyncParallelBailHook, 4异步并发熔断钩子
	AsyncSeriesHook, //异步串行钩子
	AsyncSeriesBailHook, //异步串行熔断钩子
	AsyncSeriesWaterfallHook //异步串行流水钩子
} = require("tapable'");
```

Tapable hooks 类型

![image-20221130123803677](https://i.imgur.com/2MhC4fG.png)

**Tapable 的使用-new Hook 新建钩子**

Tapable 暴露出来的都是类方法，new 一个类方法获得我们需要的钩子

class 接受数组参数 options，非必传。类方法会根据传参，接受同样数量的参数。 `const hook1 = new SyncHook(["arg1", "arg2", "arg3"]);`

**Tapable 的使用-钩子的绑定与执行**

Tabpack 提供了同步&异步绑定钩子的方法，并且他们都有绑定事件和执行事件对应的方法。

| Async\*                       | Sync\*     |
| ----------------------------- | ---------- |
| 绑定: tapAsync/tapPromise/tap | 绑定: tap  |
| 执行: callAsync/promise       | 执行: call |

**Tapable 的使用-hook 基本用法示例**

`const hook1 = new SyncHook(["arg1", "arg2", "arg3"]);`

//绑定事件到 webapck 事件流 `hook1.tap('hook1', (arg1, arg2, arg3) => console.log(arg1, arg2, arg3)) //1,2,3`

//执行绑定的事件 `hook1.call(1,2,3)`

**Tapable 的使用-实际例子演示**

定义一个 Car 方法，在内部 hooks.上新建钩子。分别是同步钩子 accelerate、brake (accelerate 接受一个参数)、 异步 钩子 calculateRoutes

使用钩子对应的绑定和执行方法

calculateRoutes 使用 tapPromise 可以返回一个 promise 对象。

```js
const { SyncHook } = require('tapable');

const hook = new SyncHook(['arg1', 'arg2', 'arg3']);

hook.tap('hook1', (arg1, arg2, arg3) => {
  console.log(arg1, arg2, arg3);
});

hook.call(1, 2, 3);
```

```js
const {
  SyncHook,
  SyncBailHook,
  SyncWaterfallHook,
  SyncLoopHook,
  AsyncParallelHook,
  AsyncParallelBailHook,
  AsyncSeriesHook,
  AsyncSeriesBailHook,
  AsyncSeriesWaterfallHook,
} = require('tapable');

class Car {
  constructor() {
    this.hooks = {
      accelerate: new SyncHook(['newSpeed']),
      brake: new SyncHook(),
      calculateRoutes: new AsyncParallelHook(['source', 'target', 'routesList']),
    };
  }
}

const myCar = new Car();

// 绑定同步钩子
// Use the tap method to add a consument
myCar.hooks.brake.tap('WarningLampPlugin', () => console.log('WarningLampPlugin'));

// 绑定同步钩子
myCar.hooks.accelerate.tap('LoggerPlugin', (newSpeed) =>
  console.log(`Accelerating to ${newSpeed}`),
);

// 绑定一个异步 Promise 钩子
myCar.hooks.calculateRoutes.tapPromise(
  'calculateRoutes tapPromise',
  (source, target, routesList, callback) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log(`tapPromise too ${source} ${target} ${routesList}`);
        resolve();
        console.log('end');
      }, 1000);
    });
  },
);

myCar.hooks.brake.call();
myCar.hooks.accelerate.call(10);

console.time('coost');

// 执行异步钩子
myCar.hooks.calculateRoutes.promise('Async', 'hook', 'demo').then(
  () => {
    console.log('resolve');
    console.timeEnd('coost');
  },
  (err) => {
    console.error(err);
    console.timeEnd('coost');
  },
);
```

```bash
WarningLampPlugin
Accelerating to 10
tapPromise too Async hook demo
end
resolve
coost: 1.005s
```

#### 62 丨 Tapable 是如何和 Webpack 进行关联起来的？

![image-20221130145802648](https://i.imgur.com/zEGp4qx.png)

模拟 Compiler.js

```js
const { SyncHook, AsyncParallelHook } = require('tapable');

module.exports = class Compiler {
  constructor() {
    this.hooks = {
      accelerate: new SyncHook(['newSpeed']),
      brake: new SyncHook(),
      calculateRoutes: new AsyncParallelHook(['source', 'target', 'routesList']),
    };
  }

  run() {
    this.accelerate(10);
    this.brake();
    this.calculateRoutes('Async', 'hook', 'demo');
  }

  accelerate(speed) {
    this.hooks.accelerate.call(speed);
  }

  brake() {
    this.hooks.brake.call();
  }

  calculateRoutes() {
    this.hooks.calculateRoutes.promise('Async', 'hook', 'demo').then(
      () => {
        console.log('resolve');
        console.timeEnd('coost');
      },
      (err) => {
        console.error(err);
        console.timeEnd('coost');
      },
    );
  }
};
```

插件 my-plugin.js

```js
const Compiler = require('./compiler');

class MyPlugin {
  constructor() {}

  apply(compiler) {
    // 绑定同步钩子
    // Use the tap method to add a consument
    compiler.hooks.brake.tap('WarningLampPlugin', () => console.log('WarningLampPlugin'));

    // 绑定同步钩子
    compiler.hooks.accelerate.tap('LoggerPlugin', (newSpeed) =>
      console.log(`Accelerating to ${newSpeed}`),
    );

    // 绑定一个异步 Promise 钩子
    compiler.hooks.calculateRoutes.tapPromise(
      'calculateRoutes tapPromise',
      (source, target, routesList, callback) => {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            console.log(`tapPromise too ${source} ${target} ${routesList}`);
            resolve();
            console.log('end');
          }, 1000);
        });
      },
    );
  }
}
```

模拟插件执行

```js
const myPlugin = new MyPlugin();

const options = {
  plugins: [myPlugin],
};

const compiler = new Compiler();

for (const plugin of options.plugins) {
  if (typeof plugin === 'function') {
    plugin.call(compiler, compiler);
  } else {
    plugin.apply(compiler);
  }
}

compiler.run();
```

```bash
Accelerating to 10
WarningLampPlugin
tapPromise too Async hook demo
end
resolve
```

#### 63 丨 webpack 流程篇：准备阶段

![image-20221130160916966](https://i.imgur.com/HBdTdG5.png)

**WebpackOptionsApply**

将所有的配置 options 参数转换成 webpack 内部插件

使用默认插件列表

举例:

- output.library -> LibraryTemplatePlugin
- externals -> ExternalsPlugin
- devtool -> EvalDevtoolModulePlugin, SourceMapDev ToolPlugin
- AMDPlugin, CommonJsPlugin
- RemoveEmptyChunksPlugin

#### 64 丨 webpack 流程篇：模块构建和 chunk 生成阶段

**Compiler hooks**

流程相关:

- (before-)run
- (before-/ after-)compile
- make
- (after- -)emit
- done

监听相关:

- watch-run
- watch-close

**Compilation**

Compiler 调用 Compilation 生命周期方法

- addEntry - -> addModuleChain
- finish (上报模块错误)
- seal

![image-20221130181843918](https://i.imgur.com/f1r6VIK.png)

![image-20221130182026306](https://i.imgur.com/BQ6EwWX.png)

**NormalModule**

Build

- 使用 loader-runner 运行 loaders
- 通过 Parser 解析(内部是 acron)
- ParserPlugins 添加依赖

![image-20221130183433506](https://i.imgur.com/sIUMr4l.png)

**Chunk 生成算法**

1. webpack 先将 entry 中对应的 module 都生成一个 新的 chunk
2. 遍历 module 的依赖列表，将依赖的 module 也加入到 chunk 中
3. 如果一个依赖 module 是动态引入的模块，那么就会根据这个 module 创建一个新的 chunk，继续遍历依赖
4. 重复.上面的过程，直至得到所有的 chunks

#### 65 丨 webpack 流程篇：文件生成

```js | pure
this.hooks.emit.callAsync(compilation, (err) => {
  if (err) return callback(err);
  outputPath = compilation.getPath(this.outputPath, {});
  mkdirp(this.outputFileSystem, outputPath, emitFiles);
});
```

#### 66 丨动手编写一个简易的 webpack(上)

- [面试官：webpack 原理都不会？](https://github.com/Cosen95/blog/issues/48#top)
- [从零实现一个迷你 Webpack](https://mp.weixin.qq.com/s/KiADtB1-VBpnajKvQllIMg)

**模块化:增强代码可读性和维护性**

传统的网页开发转变成 Web Apps 开发

代码复杂度在逐步增高

分离的 JS 文件/模块，便于后续代码的维护性

部署时希望把代码优化成几个 HTTP 请求

**常见的几种模块化方式**

ES module

```js
import * as largeNumber from 'large-number';
// ...
largeNumber.add('999', '1');
```

CJS

```js
const largeNumbers = require('large-number');
// ...
largeNumber.add('999', '1');
```

AMD

```js
require(['large-number'], function (large-number){
  // ...
  largeNumber.add('999','1');
}
```

**AST 基础知识**

在计算机科学中，抽象语法树（Abstract Syntax Tree，AST），或简称语法树（Syntax tree），是源代码语法结构的一种抽象表示。 它以树状的形式表现编程语言的语法结构，树上的每个节点都表示源代码中的一种结构。 之所以说语法是“抽象”的，是因为这里的语法并不会表示出真实语法中出现的每个细节。

DEMO: https://esprima.org/demo/parse.html

![image-20221130185124373](https://i.imgur.com/Z4C5YDy.png)

![image-20221130185450729](https://i.imgur.com/vevPTOv.png)

**动手实现一个简易的 webpack**

可以将 ES6 语法转换成 ES5 的语法

- 通过 babylon 生成 AST
- 通过 babel-core 将 AST 重新生成源码

可以分析模块之间的依赖关系

- 通过 babel-traverse 的 ImportDeclaration 方法获取依赖属性

生成的 JS 文件可以在浏览器中运行

#### 67 丨动手编写一个简易的 webpack(下)

```js
const Compiler = require('./compiler');
const options = require('../simplepack.config');

new Compiler(options).run();
```

```js
const { getAST, getDependencies, transform } = require('./parser');
const path = require('path');
const fs = require('fs');

module.exports = class Compiler {
  // 接收通过lib/index.js new Compiler(options).run()传入的参数，对应`forestpack.config.js`的配置
  // 接收forestpack.config.js配置参数，并初始化entry、output
  constructor(options) {
    const { entry, output } = options;

    this.entry = entry;
    this.output = output;
    this.modules = [];
  }

  // 开启编译
  // 开启编译run方法。处理构建模块、收集依赖、输出文件等。
  run() {
    const entryModule = this.buildMModule(this.entry, true);

    console.log('entryModule', entryModule);

    this.modules.push(entryModule);

    this.modules.map((_module) => {
      _module.dependencies.map((dependency) => {
        this.modules.push(this.buildMModule(dependency));
      });
    });

    console.log(this.modules);

    this.emitFiles();
  }

  // 构建模块相关
  // filename: 文件名称
  // isEntry: 是否是入口文件
  // buildModule方法。主要用于构建模块（被run方法调用）
  buildMModule(filename, isEntry) {
    let ast;

    if (isEntry) {
      ast = getAST(filename);
    } else {
      const absolutePath = path.join(process.cwd(), './src', filename);

      console.log('buildMModule absolutePath', absolutePath, isEntry);

      ast = getAST(absolutePath);
    }

    return {
      filename, // 文件名称
      dependencies: getDependencies(ast), // 依赖列表
      source: transform(ast), // 转化后的代码
    };
  }

  // 输出文件
  // emitFiles方法。输出文件（同样被run方法调用）
  emitFiles() {
    const outputPath = path.join(this.output.path, this.output.filename);

    let modules = '';

    this.modules.map((_module) => {
      modules += `'${_module.filename}': function(__webpack_require__, module, exports) { ${_module.source} },`;
    });

    const bundle = `(function(modules) {
      // 模块加载函数
      function __webpack_require__(filename) {
        let fn = modules[filename];
        let module = { exports: {} }

        fn(__webpack_require__, module, module.exports)

        return module.exports
      }

      __webpack_require__('${this.entry}')
    })({${modules}})`;

    console.log('bundle.js', bundle);

    fs.writeFileSync(outputPath, bundle, 'utf-8');
  }
};
```

```js
const fs = require('fs');
// const babylon = require("babylon");
const { parse } = require('@babel/parser');
const traverse = require('@babel/traverse').default;
const { transformFromAst } = require('@babel/core');

module.exports = {
  // 解析我们的代码生成AST抽象语法树
  getAST: (path) => {
    const source = fs.readFileSync(path, 'utf8');

    return parse(source, {
      // parse in strict mode and allow module declarations
      sourceType: 'module', //表示我们要解析的是ES模块
    });
  },

  // 对AST节点进行递归遍历
  getDependencies: (ast) => {
    const dependencies = [];

    traverse(ast, {
      ImportDeclaration: ({ node }) => {
        dependencies.push(node.source.value);
      },
    });

    return dependencies;
  },

  // 将获得的ES6的AST转化成ES5
  transform: (ast) => {
    const { code } = transformFromAst(ast, null, { presets: ['@babel/preset-env'] });
    // console.log('result', result);
    return code;
  },
};
```

```js
(function (modules) {
  // 模块加载函数
  function __webpack_require__(filename) {
    let fn = modules[filename];
    let module = { exports: {} };

    fn(__webpack_require__, module, module.exports);

    return module.exports;
  }

  __webpack_require__('/Users/xiaotian/Code/Case/webpack/simplepack/src/index.js');
})({
  '/Users/xiaotian/Code/Case/webpack/simplepack/src/index.js': function (
    __webpack_require__,
    module,
    exports,
  ) {
    'use strict';

    var _greeting = require('./greeting.js');
    document.write((0, _greeting.greeting)('Jane'));
  },
  './greeting.js': function (__webpack_require__, module, exports) {
    'use strict';

    Object.defineProperty(exports, '__esModule', {
      value: true,
    });
    exports.greeting = void 0;
    var greeting = function greeting(name) {
      return 'hello ' + name;
    };
    exports.greeting = greeting;
  },
});
```

#### 68 丨 loader 的链式调用与执行顺序

从右到左

**一个最简单的 loader 代码结构**

定义：loader 只是一个导出为函数的 JavaScript 模块

```js
module.exports = function (source) {
  return source;
};
```

**多 Loader 时的执行顺序**

多个 Loader 串行执行

顺序从后到前

```js
{
  use: ['style-loader', 'css-loader', 'less-loader'];
}
```

**函数组合的两种情况**

Unix 中的 pipline

Compose (webpack 采取的是这种）

```js
compose =
  (f, g) =>
  (...args) =>
    f(g(args));
```

**通过一个例子验证 loader 的执行顺序**

a-loader.js:

```js
module.exports = function (source) {
  console.log('loader a is executed');
  return source;
};
```

b-loader. Js:

```js
module.exports = function (source) {
  console.log('loader b is executed');
  return source;
};
```

#### 69 丨使用 loader-runner 高效进行 loader 的调试

**Loader-- runner 介绍**

- https://github.com/webpack/loader-runner#readme

定义：loader-- runner 允许你在不安装 webpack 的情况下运行 loaders

作用：

- 作为 webpack 的依赖，webpack 中使用它执行 loader
- 进行 loader 的开发和调试

#### 70 丨更复杂的 loader 的开发场

**Loader 的参数获取**

- https://github.com/webpack/loader-utils#readme

通过 loader- utils 的 getOptions 方法获取

```js
const loaderUtils require ("loader-utils");

module.exports = function(content) {
	const { name } = loaderUtils.getOptions(this);
}
```

**Loader 异常处理**

loader 内直接通过 throw 抛出

通过 this. Callback 传递错误

```JS
this.callback(
  err: Error | null,
	content: string | Buffer,
	sourceMap?: SourceMap,
	meta?: any
 );
```

**Loader 的异步处理**

通过 this. Async 来返回一个异步函数

- 第一个参数是 Error
- 第二个参数是处理的结果

示意代码：

```js
module.exports = function(input) {
  const callback this. Async ();
  // No callback-> return synchronous results
  // if  (callback) (... }
  callback (null, inputinput);
};
```

**在 loader 中使用缓存**

webpack 中默认开启 loader 缓存

- 可以使用 this.cacheable(false）关掉缓存

缓存条件：loader 的结果在相同的输入下有确定的输出

- 有依赖的 loader 无法使用缓存

**Loader 如何进行文件输出？**

通过 this. EmitFile 进行文件写入

```js | pure
const loaderUtils require ("loader-utils");

module.exports = function(content) {
	const url = loaderUtils.interpolateName(this, "[hash].[ext]", { content });

  this.emitFile(url, content);

	const path = `__webpack_public_path__ + ${JSON.stringify(url)};`;

	return `export default ${path}`;
};
```

- https://github.com/webpack/webpack-sources#readme
- https://github.com/Stuk/jszip
