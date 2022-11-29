# React - 云音乐项目简介

## [线上预览](http://constj.cn:7001/home)

## ✨ 特性

- ✅ 使用 React 开发
- 🔴 网易云账号登录（扫码/手机/邮箱登录）(已完成)
- 📻 支持私人 FM / 每日推荐歌曲 (开发中)
- 📺 支持 MV 播放 (计划开发)
- 📃 支持歌词显示 (计划开发)
- ✔ 每日自动签到（手机端和电脑端同时签到）(计划开发)
- 🛠 更多特性开发中

[//]: # (- 🚫🤝 无任何社交功能)

[//]: # (- 🌎️ 海外用户可直接播放（需要登录网易云账号）)

[//]: # (- 🔐 支持 [UnblockNeteaseMusic]&#40;https://github.com/UnblockNeteaseMusic/server#音源清单&#41;，自动使用[各类音源]&#40;https://github.com/UnblockNeteaseMusic/server#音源清单&#41;替换变灰歌曲链接 （网页版不支持）)

[//]: # (    - 「各类音源」指默认启用的音源。)

[//]: # (    - YouTube 音源需自行安装 `yt-dlp`。)

[//]: # (- 🌚 Light/Dark Mode 自动切换)

[//]: # (- 👆 支持 Touch Bar)

[//]: # (- 🖥️ 支持 PWA，可在 Chrome/Edge 里点击地址栏右边的 ➕ 安装到电脑)

[//]: # (- 🟥 支持 Last.fm Scrobble)

[//]: # (- ☁️ 支持音乐云盘)

[//]: # (- ⌨️ 自定义快捷键和全局快捷键)

[//]: # (- 🎧 支持 Mpris)

## 做此项目的原因

我个人是从内部转岗时才接触的 React 框架，在此之前主要是使用 Vue 相关技术栈。
我认为学习一门新技术最好的办法就是多多使用它，因此便有了此项目。

## 详细技术栈

1. [React](https://reactjs.org/) - 用于构建用户界面的 JavaScript 库
2. [react-router-dom](https://reactrouter.com/en/main) - React 路由
3. [Vite](https://vitejs.dev/) - 下一代的前端工具链
4. [TypeScript](https://www.typescriptlang.org/) - JavaScript的超集
5. [Semi-UI](https://semi.design/zh-CN/) - 抖音前端与 UED 团队维护，易于定制的现代化设计系统
6. [Axios](https://axios-http.com/) - 基于 promise 网络请求库
7. [eslint](https://eslint.org/) - 保证代码的一致性和避免错误

## ⚙️ 部署到自己的服务器

1. 部署网易云 API，详情参见 [DevilC0822/jia-music-react-pc](https://github.com/DevilC0822/jia-music-react-pc)

2. 克隆本仓库

```sh
git clone git@github.com:DevilC0822/jia-music-react-pc.git
```

3. 安装依赖

```sh
npm i
```

4. （可选）使用 Nginx 反向代理 API，将 API 路径映射为 `/api`，如果 API 和网页不在同一个域名下的话（跨域），会有一些 bug。

5. 编译打包

```sh
yarn run build
```

6. 将 `/dist` 目录下的文件上传到你的 Web 服务器

## ☑️ Todo

查看 Todo 请访问本项目的 [Projects](https://github.com/DevilC0822/jia-music-react-pc/issues)

欢迎提 Issue 和 Pull request。

## 📜 开源许可

本项目仅供个人学习研究使用，禁止用于商业及非法用途。

基于 [MIT license](https://opensource.org/licenses/MIT) 许可进行开源。

## 灵感来源

API 源代码来自 [Binaryify/NeteaseCloudMusicApi](https://github.com/Binaryify/NeteaseCloudMusicApi)

- [网易云音乐](https://music.163.com)
- [YesPlayMusic](https://github.com/qier222/YesPlayMusic)

[//]: # (## 🖼️ 截图)

[//]: # (![lyrics][lyrics-screenshot])
