以下是整个项目的文件结构和内容：

项目结构
lext.website/
├── package.json
├── next.config.js
├── theme.config.jsx
└── pages/
    ├── _meta.js
    ├── index.jsx
    ├── docs/
    │   ├── _meta.js
    │   └── intro.md
    └── blog/
        ├── _meta.js
        └── first-post.md
lua
文件内容
1. package.json
{
  "name": "lext.website",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "export": "next export",
    "start": "next start"
  },
  "dependencies": {
    "next": "14.0.0",
    "nextra": "2.10.0",
    "nextra-theme-docs": "2.10.0",
    "react": "18.2.0",
    "react-dom": "18.2.0"
  }
}
json
2. next.config.js
const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.jsx'
})

module.exports = withNextra({
  output: 'export',
  images: {
    unoptimized: true
  },
  trailingSlash: true,
  basePath: '',
})
php
3. theme.config.jsx
export default {
  logo: (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      <strong style={{ fontSize: '1.2em' }}>Lext.website</strong>
    </div>
  ),
  project: {
    link: 'https://github.com/your-username/lext.website'
  },
  docsRepositoryBase: 'https://github.com/your-username/lext.website',
  footer: {
    text: `Lext.website © ${new Date().getFullYear()}`
  },
  primaryHue: 200,
  sidebar: {
    defaultMenuCollapseLevel: -1
  }
}
javascript
4. pages/_meta.js
export default {
  index: {
    title: '首页',
    type: 'page'
  },
  docs: {
    title: '文档',
    type: 'page'
  },
  blog: {
    title: '博客',
    type: 'page'
  }
}
css
5. pages/index.jsx
export default function Home() {
  return (
    <div style={{ 
      maxWidth: '90rem', 
      margin: '0 auto', 
      padding: '2rem 1rem',
      textAlign: 'center'
    }}>
      <div style={{ marginBottom: '3rem' }}>
        <h1 style={{ 
          fontSize: '3rem', 
          fontWeight: '700', 
          marginBottom: '1rem',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          color: 'transparent'
        }}>
          欢迎来到 Lext
        </h1>
        <p style={{ 
          fontSize: '1.25rem', 
          color: '#666',
          maxWidth: '600px',
          margin: '0 auto'
        }}>
          一个使用 Nextra 构建的知识库和博客站点
        </p>
      </div>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '2rem',
        marginTop: '3rem'
      }}>
        <div style={{ 
          padding: '2rem', 
          border: '1px solid #e5e7eb', 
          borderRadius: '12px',
          textAlign: 'left'
        }}>
          <h3 style={{ marginBottom: '1rem' }}>📚 文档</h3>
        <p>查看我们的详细文档，了解如何使用和配置。</p>
        </div>

        <div style={{ 
          padding: '2rem', 
          border: '1px solid #e5e7eb', 
          borderRadius: '12px',
          textAlign: 'left'
        }}>
          <h3 style={{ marginBottom: '1rem' }}>📝 博客</h3>
        <p>阅读最新的技术文章和项目更新。</p>
        </div>
      </div>
    </div>
  )
}
javascript
6. pages/docs/_meta.js
export default {
  intro: '介绍',
  'getting-started': '快速开始',
  configuration: '配置',
  api: 'API 参考'
}
javascript
7. pages/docs/intro.md
# 介绍

欢迎使用 Lext.website 文档！

这是一个基于 Nextra 构建的现代化文档站点。

## 特性

- 📖 **Markdown 支持** - 使用熟悉的 Markdown 语法写作
- 🎨 **美观的界面** - 现代化的设计风格
- ⚡ **快速加载** - 基于 Next.js 的出色性能
- 🌙 **深色模式** - 自动适应系统主题
- 🔍 **搜索功能** - 内置全文搜索
- 📱 **响应式设计** - 在手机和桌面设备上都有良好体验

## 开始使用

请查看 [快速开始](/docs/getting-started) 指南来搭建你自己的站点。
mark
8. pages/blog/_meta.js
export default {
  'first-post': '我的第一篇文章',
  'nextra-tips': 'Nextra 使用技巧'
}
javascript
9. pages/blog/first-post.md
# 我的第一篇文章

*发布日期：2024年1月27日*

欢迎来到我的博客！这是我的第一篇使用 Nextra 构建的博客文章。

## 为什么选择 Nextra？

Nextra 提供了：

1. **零配置** - 开箱即用
2. **TypeScript 支持** - 完整的类型安全
3. **灵活的配置** - 高度可定制
4. **SEO 友好** - 自动生成 meta 标签

## 下一步

我计划在这个博客上分享更多关于：

- Web 开发技术
- 工具使用心得  
- 项目经验总结

感谢阅读！
markdown
使用步骤
创建项目目录并进入：

mkdir lext.website && cd lext.website
bash
创建所有上述文件（你可以直接复制粘贴内容）

安装依赖：

npm install
启动开发服务器：

npm run dev
bash
访问站点： 打开 http://localhost:3000 查看你的 Nextra 站点

这个项目包含了首页、文档和博客的基本结构，你可以在此基础上继续添加更多内容和自定义样式