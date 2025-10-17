const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.jsx'
});

module.exports = withNextra({
  output: 'export', // 启用静态导出
  images: {
    unoptimized: true // 静态导出所必需
  },
  trailingSlash: true, // 确保路径正确
  // 如果需要部署到子路径，取消下面的注释
  // basePath: '/your-repo-name',
  // assetPrefix: '/your-repo-name/',
});

