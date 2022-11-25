module.exports = {
  // base: '/',
  base: '/technology-combing/',
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
    docsDir: 'docs',
    nav: [
      { text: "博客", link: "/react/useEffect和useLayoutEffect" },
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
            {
              text: "React - 云音乐项目简介",
              link: "/react/React - 云音乐项目简介"
            },
          ],
        },
      ],
    }
  }
}