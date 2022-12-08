# React云音乐项目 - 项目初始化

## 使用vite初始化项目

[vite官网](https://cn.vitejs.dev/)

如果你未安装 pnpm，请先安装

```sh
npm i pnpm -g
```

```sh
pnpm create vite my-app-name --template react-ts

cd my-app-name

pnpm install

pnpm run dev
```

## 路径别名

安装 path

```sh
pnpm add @types/node -D 
```

vite.config.js 中新增 resolve.alias

```javascript
import path from 'path'

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // 添加 @ 别名
    },
  },
  plugins: [react()],
})
```

## css 预处理器

由于 Vite 的目标仅为现代浏览器，因此建议使用原生 CSS 变量和实现 CSSWG 草案的 PostCSS 插件（例如 postcss-nesting）来编写简单的、符合未来标准的 CSS。

话虽如此，但 Vite 也同时提供了对 .scss, .sass, .less, .styl 和 .stylus 文件的内置支持。没有必要为它们安装特定的 Vite 插件，但必须安装相应的预处理器依赖：

```sh
# .scss and .sass
pnpm add -D sass

# .less
pnpm add -D less

# .styl and .stylus
pnpm add -D stylus
```

详情请见：[vite配置css](https://cn.vitejs.dev/guide/features.html#css)


## react-router

使用 react-router-dom，无需安装react-router，因react-router-dom依赖了react-router。

```sh
pnpm add react-router-dom --save
```

## axios

```sh
pnpm add react-router-dom --save
```

## Semi 组件

[Semi 官网](https://semi.design/zh-CN/)

```sh
pnpm add @douyinfe/semi-ui
```

## 安装 eslint 

### eslint 及相关插件安装

```sh
pnpm add eslint -D
```

**安装 ts 解析器以及 ts 规则补充**

```sh
# eslint 默认使用 Espree 进行解析，无法识别 ts 的一些语法，所以需要安装一个 ts 的解析器 @typescript-eslint/parser，用它来代替默认的解析器
pnpm install @typescript-eslint/parser

# 作为 eslint 默认规则的补充，提供了一些额外的适用于 ts 语法的规则。
pnpm add @typescript-eslint/eslint-plugin -D

# 提供了一些额外的适用于 react hooks 语法的规则。
pnpm add eslint-plugin-react-hooks -D
```

**由于是 react 项目，所以还需要插件 eslint-plugin-react 来支持 .tsx**

```sh
pnpm add eslint-plugin-react -D
```

**你也可以使用 eslint --init 命令初始化 eslint**

如果进行了如上配置则无需使用

```sh
eslint --init
```

### eslint 配置

如果使用 eslint --init 命令初始化 则会自动生成 .eslintrc.js 文件，如果未使用此命令，则手动创建此文件。

```javascript
module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  parser: "@typescript-eslint/parser", // 解析器
  extends: [], // 扩展
  plugins: [
    "react",
    "react-hooks",
    "@typescript-eslint/eslint-plugin"
  ], // 插件
  rules: {
    /**
     * 常规配置
     */
    // 0:关闭 1:警告 2:报错
    quotes: [2, 'single'], // 强制使用一致的单引号
    semi: [2, 'never'], // 强制是否使用分号
    'no-shadow': 0, // 关闭:函数参数名与全局作用域名重复
    'no-console': 0, // 允许使用console
    'prefer-const': 1, // 关闭建议使用const
    'max-len': 0, // 关闭最大长度校验
    'no-useless-escape': 0, // 关闭正则表达式中不规则数据校验
    'implicit-arrow-linebreak': 0, // 关闭在箭头函数体之前不允许换行
    'object-curly-newline': 0, // 关闭在对象文字或解构赋值的大括号内强制执行一致的换行符
    'arrow-parens': 0, // 关闭箭头函数只有一个参数时要带括号
    'max-classes-per-file': 0, // 关闭只能暴露一个类
    'no-plusplus': 0, // 关闭i++报错
    'prefer-destructuring': 0, // 关闭强制执行解构
    'no-param-reassign': 0, // 关闭不能修改函数参数 setCount(state: State, count: number) state.count = count
    'no-use-before-define': [1, 'nofunc'], // 未定义前不能使用
    'vue/no-unused-components': 'off', // 当存在定义而未使用的组件时，关闭报错
    'no-lonely-if': 'off', // if过多
    'no-else-return': 'off', // 取消最后一个else
    'jsx-a11y/anchor-is-valid': 0,
    'import/no-anonymous-default-export': 0,
  }
};

```

如果使用 Webstorm 遇到 如下错误

```sh
Error [ERR_REQUIRE_ESM]: Cannot read config file: C:\Users\86181\Desktop\React\my-app-name\.eslintrc.js
```

这是因为在package.json文件中指定type: module，js文件默认使用ESM处理。

将 .eslintrc.js 改为 .eslintrc.cjs 即可。

## 安装 prettier

```sh
pnpm add prettier -D
```

安装 eslint-plugin-prettier

eslint-plugin-prettier 插件会调用prettier对你的代码风格进行检查，其原理是先使用 prettier 对你的代码进行格式化，然后与格式化之前的代码进行对比，如果出现了不一致，这个地方就会被 prettier 进行标记。

```sh
pnpm add eslint-plugin-prettier -D
```

修改 .eslintrc.js，修改 plugins 字段，增加一项：

```sh
  plugins: [
    "react",
    "react-hooks",
    "@typescript-eslint/eslint-plugin",
    "prettier" // 增加项
  ], // 插件
```

修改 rules 字段，增加一项：表示被 prettier 标记的地方抛出错误信息

```sh
  rules: {
    "prettier/prettier": "error" // 增加项
#    ...其余配置项
  }
```

在项目根目录创建 .prettierrc.js

```javascript
module.exports = {
  printWidth: 120, // 每行代码长度（默认80）
  tabWidth: 2, // 每个tab相当于多少个空格（默认2）
  useTabs: false, // 是否使用tab进行缩进（默认false）
  singleQuote: true, // 使用单引号（默认false）
  semi: false, // 声明结尾使用分号(默认true)
  trailingComma: 'all', // 多行使用拖尾逗号（默认none）
  bracketSpacing: true, // 对象字面量的大括号间使用空格（默认true）
  jsxBracketSameLine: false, // 多行JSX中的>放置在最后一行的结尾，而不是另起一行（默认false）
  arrowParens: 'avoid', // 只有一个参数的箭头函数的参数是否带圆括号（默认avoid）
}
```


