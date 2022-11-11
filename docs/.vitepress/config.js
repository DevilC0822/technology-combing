module.exports = {
  base: '/',
  title: '知识归纳',
  description: 'github page blog',
  lang: 'zh-CN',
  head: [
    ['link', {
      rel: 'icon',
      type: 'image/svg+xml',
      href: 'logo.jpeg'
    }]
  ],
  themeConfig: {
    logo: "/logo.svg",
    repo: 'wushijiang13/vue3-vite-cli',
    repoLabel: '测试',
    docsDir: 'docs',
    docsBranch: 'master',
    editLinks: true,
    editLinkText: '欢迎帮助我们改善页面!',
    lastUpdated: '最近更新时间',
    nav: [
      { text: "博客", link: "/react/useEffect和useLayoutEffect" },
      { text: "GuideTest", link: "/guide/test" },
      { text: "gitee", link: "https://gitee.com/geeksdidi" },
    ],
    sidebar: {
      "/react/": [
        {
          text: "React",
          items: [{
              text: "useEffect和useLayoutEffect",
              link: "/react/useEffect和useLayoutEffect",
            },
            {
              text: "React 性能优化 - memo",
              link: "/react/React 性能优化 - memo"
            }
          ],
        },
      ]
    }
  }
}