---
order: 1
---

# Next

https://nextjs.org/docs/getting-started

```
next
├─ components                           # 组件
│    └─ Card                            # 组件名称首字母大写
│           └─ index.tsx
├─ context                              # React context
├─ contracts                            # 合约相关
├─ data                                 # 数据相关
├─ hooks                                # React hooks
├─ next-i18next.config.js               # i18n config
├─ next-seo.config.js                   # SEO config
├─ next-sitemap.js                      # Sitemap config
├─ pages                                # 页面
│    ├─ _app.tsx
│    ├─ _document.tsx
│    └─ api                             # API serverless
│           └─ index.ts
│    ├─ getting-started                 # 路由命名推荐 a-b 格式
│    │    └─ index.tsx
│    └─ server-sitemap.xml              # sitemap 目录，根据 next-sitemap 需求所定义
│           └─ index.tsx
├─ public                               # 静态资源
│    └─ locales                         # i18n 文件，根据 next-i18next 需求所定义。locales: [...any] 语言会被当作一个 serverless。免费版有 12 limit，超出报错。
├─ services                             # 后台接口服务，不使用 api 目录。在 vercel api 目录会被认为 serverless 函数，免费版有 12 limit，超出报错。
├─ store                                # 存储 redux
├─ styles                               # 样式
├─ theme                                # 主题
├─ types                                # 类型
└─ utils                                # 工具
       ├─ index.ts
       └─ url
              ├─ __tests__              # Jest Test 目录
              │    └─ index.test.ts
              └─ index.ts
```

build directory: http://dir.yardtea.cc/
