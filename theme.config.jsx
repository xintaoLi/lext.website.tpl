import Logo from './components/Logo'

export default {
  logo: (
    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
      <Logo size={36} />
      <strong style={{ fontSize: '1.15em', fontWeight: 700 }}>Leeext的杂货铺</strong>
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
      <div style={{ width: '100%' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', marginBottom: '0.5rem' }}>
          <span>© {new Date().getFullYear()} Leeext的杂货铺. MIT License.</span>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <a href="/docs/intro" style={{ color: 'inherit', textDecoration: 'none' }}>文档</a>
            <a href="/blog" style={{ color: 'inherit', textDecoration: 'none' }}>博客</a>
            <a href="https://github.com/lixintao/lext.website" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>GitHub</a>
          </div>
        </div>
        <div style={{ fontSize: '0.875rem', opacity: 0.8, textAlign: 'center' }}>
          <a 
            href="https://beian.miit.gov.cn/" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ color: 'inherit', textDecoration: 'none' }}
          >
            粤ICP备2024279260号
          </a>
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
        titleTemplate: '%s – Leeext的杂货铺'
    }
  },
  
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="Leeext的杂货铺" />
      <meta property="og:description" content="知识、工具与灵感的收藏地" />
      <meta name="description" content="一个记录学习笔记、分享技术文章、收藏实用工具的个人站点" />
      <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      <link rel="icon" href="/logo.svg" type="image/svg+xml" />
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

