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
    algolia: {
      appId: '7ELKSF335Z',
      apiKey: 'c0d810394554293315863bc9acba7124',
      indexName: 'constj'
    },
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
        {
          text: "Vite",
          items: [{
            text: "vite.config中使用环境变量",
            link: "/engineering/vite/vite.config中使用环境变量",
          },
          ],
        },
      ],
    },
    footer: {
      message: '<a href="https://beian.miit.gov.cn/" target="_blank">辽ICP备2022011069号-1</a>',
    },
  }
}