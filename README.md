# Leeext的杂货铺

一个使用 Nextra 构建的个人知识库和博客站点，记录学习、分享经验、探索技术。

## 杂货铺特色

- 📚 系统化的技术学习笔记
- ✍️ 原创技术博客文章
- 🛠️ 实用工具和资源收藏
- 💡 灵感和最佳实践
- 🎨 美观现代的界面设计
- 🌙 支持明暗主题切换
- 🔍 内置全文搜索功能
- 📱 响应式设计，适配各种设备

## 技术栈

- [Next.js](https://nextjs.org/) - React 框架
- [Nextra](https://nextra.site/) - 文档站点生成器
- [React](https://react.dev/) - UI 库

## 快速开始

### 安装依赖

```bash
npm install
```

### 本地开发

启动开发服务器：

```bash
npm run dev
```

在浏览器中打开 [http://localhost:3000](http://localhost:3000) 查看效果。

### 构建部署

生成静态站点：

```bash
npm run build
```

构建完成后，静态文件将输出到 `out` 目录，可以部署到 GitHub Pages、Vercel、Netlify 等任何静态托管服务。

## 项目结构

```
lext.website/
├── pages/                    # 页面文件
│   ├── _app.jsx             # 应用入口
│   ├── _meta.js             # 主导航配置
│   ├── index.jsx            # 首页（React组件）
│   ├── docs/                # 文档目录
│   │   ├── _meta.js         # 文档侧边栏配置
│   │   ├── intro.mdx        # 介绍
│   │   ├── getting-started.mdx  # 快速开始
│   │   ├── configuration.mdx    # 配置指南
│   │   └── api.mdx          # API 参考
│   └── blog/                # 博客目录
│       ├── _meta.js         # 博客导航配置
│       ├── welcome.mdx      # 欢迎文章
│       ├── first-post.mdx   # 第一篇文章
│       └── nextra-tips.mdx  # Nextra 使用技巧
├── styles/                  # 样式文件
│   └── globals.css          # 全局样式
├── next.config.js           # Next.js 配置
├── theme.config.jsx         # Nextra 主题配置
└── package.json             # 项目依赖
```

## 添加内容

### 创建新页面

1. 在 `pages` 目录下创建新的 `.mdx` 文件
2. 编辑对应目录的 `_meta.js` 文件，添加页面配置

### 编写文档

使用 Markdown/MDX 语法编写内容，支持：

- 标准 Markdown 语法
- React 组件
- 代码高亮
- Callout 组件
- 更多 Nextra 特性

参考 [Nextra 文档](https://nextra.site/docs) 了解更多功能。

## 许可证

MIT

## 贡献

欢迎提交 Issue 和 Pull Request！
