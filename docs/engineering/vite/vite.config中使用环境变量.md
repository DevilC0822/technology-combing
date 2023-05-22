# vite.config中使用环境变量

## 环境变量和模式

Vite 在一个特殊的 import.meta.env 对象上暴露环境变量。
使用 Vite 时，你可以在你的代码中使用 import.meta.env.VITE_* 变量，这些变量将会在构建时被相应的值替换。

但是在vite.config.ts 文件中使用 import.meta.env.VITE_* 变量时，并不会如你所愿的那样被替换。这是因为这些文件需要在执行完 Vite 配置后才能确定加载哪一个，不过当你的确需要时，你可以使用 Vite 导出的 loadEnv 函数来加载指定的 .env 文件。

```ts
import { defineConfig, loadEnv } from 'vite'

export default defineConfig(({ mode }) => {
  // 根据当前工作目录中的 `mode` 加载 .env 文件
  // 设置第三个参数为 '' 来加载所有环境变量，而不管是否有 `VITE_` 前缀。
  const env = loadEnv(mode, process.cwd(), '')
  return {
    // vite 配置
    server: {
      host: '0.0.0.0',
      port: 5173,
      open: true,
      https: false,
      proxy: {
        // 正则表达式写法
        '^/api/v1': {
          target: env.VITE_BASE_URL, // 后端服务实际地址
          changeOrigin: true, // 开启代理
          rewrite: path => path.replace(/^\/api\/v1/, '/api/v1'),
        },
      },
    },
  }
})
```