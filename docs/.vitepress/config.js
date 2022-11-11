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
            }
          ],
        },
      ]
    }
  }
}