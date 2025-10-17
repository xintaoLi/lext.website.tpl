项目：lext.website - Nextra静态站点本地构建指南
目标：在 lext.website 目录中，使用 Nextra 搭建一个功能与官网相似的静态站点，并在本地完成开发和内容建设。

第一阶段：项目初始化与依赖安装
执行位置：在 lext.website 项目根目录下。

安装核心依赖

npm install next react react-dom nextra
bash
配置构建脚本 编辑 package.json 文件，在 "scripts" 部分添加或更新以下命令：

{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "export": "next export"
  }
}
json
创建 Next.js 与 Nextra 配置文件 在项目根目录创建 next.config.js 文件，内容如下：

// next.config.js
const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.jsx'
});

module.exports = withNextra({
  output: 'export', // 关键：启用静态导出
  images: {
    unoptimized: true // 静态导出所必需
  },
  trailingSlash: true, // 确保路径正确
  // 如果你的项目使用其他静态资源路径，可以在这里配置
  // assetPrefix: './',
});
java
创建主题配置文件 在项目根目录创建 theme.config.jsx 文件，这是自定义站点外观的核心：

// theme.config.jsx
export default {
  logo: <strong>Lext.website</strong>,
  project: {
    link: 'https://github.com/your-username/lext.website'
  },
  // 在这里可以配置导航栏、页脚、颜色模式等
  // 更多配置请参考 Nextra 官方文档
}
javascript
第二阶段：页面结构与内容建设
目标：创建基本的页面结构（首页、文档、博客），并开始填充内容。

创建基础页面目录与文件 在项目根目录下，创建以下目录和文件。这是 Next.js 约定的 App Router 结构（pages 目录）。

lext.website/
├── pages/
│   ├── _meta.js      # 定义主导航结构
│   ├── index.md (或 index.jsx) # 首页
│   ├── docs/
│   │   ├── _meta.js  # 定义文档侧边栏
│   │   └── intro.md
│   └── blog/
│       ├── _meta.js  # 定义博客列表
│       └── first-post.md
├── next.config.js
├── theme.config.jsx
└── package.json
python
配置主导航 (pages/_meta.js)

// pages/_meta.js
export default {
  index: '首页',
  docs: {
    title: '文档',
    type: 'page'
  },
  blog: {
    title: '博客',
    type: 'page'
  }
}
bash
配置文档侧边栏 (pages/docs/_meta.js)

// pages/docs/_meta.js
export default {
  intro: '介绍',
  // 'api': 'API 参考', // 你可以继续添加更多文档页
}
javascript
配置博客列表 (pages/blog/_meta.js)

// pages/blog/_meta.js
export default {
  'first-post': '我的第一篇文章',
}
javascript
开始创作内容

首页 (pages/index.md 或 pages/index.jsx)： 如果你想快速开始，用 Markdown：

# 欢迎来到 Lext

这是一个使用 Nextra 构建的知识库和博客站点。
markdown
如果你想实现像 Nextra 官网一样的复杂布局（Hero区域、特性列表等），请使用 React 组件：

# 将首页重命名为 React 组件文件
mv pages/index.md pages/index.jsx
bash
然后在 pages/index.jsx 中自由发挥。

文档页 (pages/docs/intro.md)：

# 介绍页

这是文档的介绍部分。Nextra 让写文档变得简单。
bash
博客文章 (pages/blog/first-post.md)：

# 我的第一篇文章

*发布日期：2024-05 年 1 月 27 日*

这是我的第一篇博客文章，使用 Nextra 和 Markdown 编写。