module.exports = {
  base: '/',
  title: '知识归纳',
  description: 'vercel page blog',
  lang: 'zh-CN',
  head: [
    ['link', { rel: 'icon', href: '/logo.svg' }]
  ],
  build: {
    cache: false
  },
  themeConfig: {
    logo: "/logo.svg",
    docsDir: 'docs',
    // algolia: {
    //   appId: '...',
    //   apiKey: '...',
    //   indexName: '...'
    // },
    nav: [
      { text: "vue", link: "/vue/vue" },
      { text: "React", link: "/react/useEffect和useLayoutEffect" },
      { text: "工程化", link: "/engineering/eslint/使用 husky + lint-staged + eslint + commintlint 实现自动化工程增量提交检测" },
    ],
    socialLinks: [
      { icon: "github", link: "https://github.com/DevilC0822" },
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
          },
          {
            text: "React中的双向绑定、条件渲染和列表渲染",
            link: "/react/React中的双向绑定、条件渲染和列表渲染"
          },
          ],
        },
        {
          text: "React云音乐项目",
          items: [
            {
              text: "React - 云音乐项目简介",
              link: "/react/cloudMusic/React - 云音乐项目简介"
            },
            {
              text: "React云音乐项目 - 项目初始化",
              link: "/react/cloudMusic/React云音乐项目 - 项目初始化"
            },
            {
              text: "React云音乐项目 - axios封装",
              link: "/react/cloudMusic/React云音乐项目 - axios封装"
            },
            {
              text: "React云音乐项目 - 路由统一管理",
              link: "/react/cloudMusic/React云音乐项目 - 路由统一管理"
            },
          ],
        },
      ],
      "/vue/": [
        {
          text: "Vue",
          items: [
          ],
        },
      ],
      "/engineering/": [
        {
          text: "工程化",
          items: [{
            text: "使用 husky + lint-staged + eslint + commintlint 实现自动化工程增量提交检测",
            link: "/engineering/eslint/使用 husky + lint-staged + eslint + commintlint 实现自动化工程增量提交检测",
          },
          ],
        },
      ],
    }
  }
}