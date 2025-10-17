export default {
  logo: (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      <strong style={{ fontSize: '1.2em' }}>Lext</strong>
    </div>
  ),
  project: {
    link: 'https://github.com/lixintao/lext.website'
  },
  docsRepositoryBase: 'https://github.com/lixintao/lext.website/tree/main',
  
  // 导航栏链接
  navbar: {
    extraContent: () => {
      return null
    }
  },
  
  // 页脚配置
  footer: {
    text: (
      <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', flexWrap: 'wrap', gap: '1rem' }}>
        <span>© {new Date().getFullYear()} Lext. MIT License.</span>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <a href="/docs/intro" style={{ color: 'inherit', textDecoration: 'none' }}>文档</a>
          <a href="/blog" style={{ color: 'inherit', textDecoration: 'none' }}>博客</a>
          <a href="https://github.com/lixintao/lext.website" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>GitHub</a>
        </div>
      </div>
    )
  },
  
  // 主题色
  primaryHue: 200,
  
  // 侧边栏配置
  sidebar: {
    defaultMenuCollapseLevel: 1,
    toggleButton: true
  },
  
  // 目录配置
  toc: {
    float: true,
    title: '本页目录',
    backToTop: true
  },
  
  // 编辑链接
  editLink: {
    text: '在 GitHub 上编辑此页 →'
  },
  
  // 反馈链接
  feedback: {
    content: '有问题？给我们反馈 →',
    labels: 'feedback'
  },
  
  // SEO 配置
  useNextSeoProps() {
    return {
      titleTemplate: '%s – Lext'
    }
  },
  
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="Lext" />
      <meta property="og:description" content="使用 Nextra 构建精美的知识库网站" />
      <meta name="description" content="简单、强大且灵活的站点生成框架，基于 Next.js 的强大能力" />
      <link rel="icon" href="/favicon.ico" />
    </>
  ),
  
  // 横幅（可选）
  // banner: {
  //   key: '2025-launch',
  //   text: '🎉 Lext 正式发布！查看我们的文档了解更多。'
  // },
  
  // 导航
  navigation: true,
  
  // 暗色模式
  darkMode: true,
  
  // Git 时间戳
  gitTimestamp: ({ timestamp }) => (
    <>最后更新于 {timestamp.toLocaleDateString('zh-CN')}</>
  ),
  
  // 主题切换
  nextThemes: {
    defaultTheme: 'system'
  }
}

