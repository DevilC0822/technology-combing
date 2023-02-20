# React云音乐项目 - axios封装

## 什么是 axios

首先需要知道：axios 不是一种新的技术。axios 是一个基于 Promise 用于浏览器和 nodejs 的 HTTP 客户端，本质上也是对原生XHR的封装，只不过它是 Promise 的实现版本，符合最新的ES规范。

## 开始使用

```sh
pnpm add axios
```

## 基本配置项封装

在 src 目录下新建 service 文件夹，新建 index.ts 文件。

```typescript
// 设置请求头和请求路径
axios.defaults.timeout = 10000 // 设置超时时间
axios.defaults.withCredentials = true // 请求携带凭证
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8' // 设置post请求头
```

### baseURL

不同环境设置不同的baseURL

```typescript
axios.defaults.baseURL = import.meta.env.VITE_AXIOS_BASE_URL
```

创建 .env.development 和 .env.production 文件，文件中分别指定当前环境下的 baseURL 地址以 VITE_AXIOS_BASE_URL 变量接收。

**.env.development**

```text
VITE_AXIOS_BASE_URL=/api/
```

**.env.production**

```text
VITE_AXIOS_BASE_URL=http://productionApiURL.com/
```

为了防止意外地将一些环境变量泄漏到客户端，只有以 VITE_ 为前缀的变量才会暴露给经过 vite 处理的代码。

详情请见：[环境变量和模式](https://cn.vitejs.dev/guide/env-and-mode.html)

## 请求拦截器

请求之前做某些操作，比如请求入参添加时间戳或者添加 header

```typescript
axios.interceptors.request.use(
  (config): AxiosRequestConfig<any> => {
    config.params = {
      timerstamp: Date.parse(new Date().toString()) / 1000,
      ...config.params,
    }
    return config
  },
  error => {
    return error
  },
)
```

## 响应拦截器

请求成功后做某些操作，比如解构出 data 

```typescript
axios.interceptors.response.use(res => {
  return res.data
})
```

## api管理

### index

在 service 文件夹下新建 login 文件夹，在新建 index.ts 和 types.ts 文件。内容如下：

index.ts 里面存放 login 相关的接口及自定义配置项。

```typescript
import service from '@/service'
import type * as T from './types'
import {ICheckQRCode, IGetQRCode, IVerifyCaptcha} from './types'

// 获取登录状态
const getLoginStatus = () => {
  return service.post('/login/status')
}

const loginByPhone = (params: T.ILoginByPhone) => {
  return service.post('/login/cellphone', params)
}
const loginByEmail = (params: T.ILoginByEmail) => {
  return service.post('/login', params)
}

const getQRKey = () => {
  return service.post('/login/qr/key')
}
const getQRCode = (params: T.IGetQRCode) => {
  return service.post('/login/qr/create', params)
}
const QRCodeCheck = (params: T.ICheckQRCode) => {
  return service.post('/login/qr/check', params)
}

// 验证码
const sentCaptcha = (params: T.ISentCaptcha) => {
  return service.post('/captcha/sent', params)
}
const verifyCaptcha = (params: T.IVerifyCaptcha) => {
  return service.post('/captcha/verify', params)
}

const logout = () => {
  return service.post('/logout')
}

export default {
  getLoginStatus,
  loginByPhone,
  loginByEmail,
  getQRKey,
  getQRCode,
  QRCodeCheck,
  sentCaptcha,
  verifyCaptcha,
  logout,
}

```

### types
types.ts 里面存放 login/index.ts 中接口所需要的参数的类型。

```typescript
export interface ILoginByPhone {
  phone: number
  countrycode?: number // 国家码，用于国外手机号登录，例如美国传入：1
  password?: string
  md5_password?: string // md5 加密后的密码,传入后 password 参数将失效
  captcha?: number // 验证码,使用 /captcha/sent接口传入手机号获取验证码,调用此接口传入验证码,可使用验证码登录,传入后 password 参数将失效
}

export interface ILoginByEmail {
  email: string
  password?: string
  md5_password?: string
}
export interface IGetQRCode {
  key: number
  qrimg?: boolean
}
// 说明: 轮询此接口可获取二维码扫码状态,800 为二维码过期,801 为等待扫码,802 为待确认,803 为授权登录成功(803 状态码下会返回 cookies)
export interface ICheckQRCode {
  key: string
}
export interface ISentCaptcha {
  phone: number
}
export interface IVerifyCaptcha {
  phone: number
  captcha: number
}
```

### 为什么要这么费劲定义这些 types

首先定义好接口的入参以及它们的类型，得益于 typescript 的类型检测，在使用接口时如果入参传入错误时会提前通过编译器提示给开发者。如下图：

**入参少传入时**

![入参少传入时](/img/axios封装/入参少传入时.png)

**传入未定义的入参**

![传入未定义的入参](/img/axios封装/传入未定义的入参.png)

**提示入参类型**

![提示入参类型](/img/axios封装/提示入参类型.png)


## nprogress

### nprogress 简介

nprogress 是一个类似 youtube、Medium 等网站上的小进度条插件。纳米级的进度条，涓涓细流动画告诉你的用户，一些事情正在发生！ 非常适合Turbolinks、PJax或其他Ajax密集型应用程序。

### nprogress 开始使用

安装 nprogress

```sh
pnpm add nprogress 
```

安装 @types/nprogress 

```sh
pnpm add @types/nprogress
```

### nprogress 配置

我这里是通过给需要的请求接口添加自定义配置项控制 nprogress 使用。在请求拦截器中展示 nprogress 进度条，响应拦截器中关闭进度条。

比如给 search 接口 添加自定义配置项：

src/search/index.ts 接口定义

```typescript
// 搜索歌曲接口
export const search = (params: T.ISearch) => {
  return service.post('/cloudsearch', params, {
    needLoadingBar: true // 传入自定义配置
  })
}
```

src/index.ts 中配置

```typescript
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

// 请求拦截器
axios.interceptors.request.use(
  (config): AxiosRequestConfig<any> => {
    const { needLoadingBar = false } = config
    if (needLoadingBar) {
      NProgress.start()
    }
    return config
  },
  error => {
    return error
  },
)
// 响应拦截器
axios.interceptors.response.use(res => {
  NProgress.done()
  return res
})

// 封装的 AXios 类型
interface Service {
  post<T>(url: string, params?: unknown, options?: AxiosRequestConfig<string> | undefined): Promise<ResType<T>>
}
// 实现 Axios
const service: Service = {
  post(url, params, options) {
    return new Promise((resolve, reject) => {
      axios
        .post(url, JSON.stringify(params), options)
        .then(res => {
          resolve(res.data)
        })
        .catch(err => {
          reject(err.data)
        })
    })
  },
}
```

此时，从 config 中解构 needLoadingBar 时会出现以下错误。

![未添加自定义属性](/img/axios封装/未添加自定义属性.png)

**解决方案**

在 src 目录下 新建 shims.axios.d.ts 文件，内容如下：

```typescript
import { AxiosRequestConfig } from 'axios'

declare module 'axios' {
  export interface AxiosRequestConfig {
    needLoadingBar?: boolean
  }
}
```

## 最终配置

tips: upload 与 download 请求方式暂未使用过，未知可用性。

```typescript
import axios, { AxiosRequestConfig } from 'axios'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

// 设置请求头和请求路径
axios.defaults.baseURL = import.meta.env.VITE_AXIOS_BASE_URL
axios.defaults.timeout = 10000
axios.defaults.withCredentials = true
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8'
// 请求拦截器
axios.interceptors.request.use(
  (config): AxiosRequestConfig<any> => {
    const { needLoadingBar = false } = config
    if (needLoadingBar) {
      NProgress.start()
    }
    config.params = {
      // realIP: '116.25.146.177',
      timerstamp: Date.parse(new Date().toString()) / 1000,
      ...config.params,
    }
    return config
  },
  error => {
    return error
  },
)
// 响应拦截器
axios.interceptors.response.use(res => {
  NProgress.done()
  return res
})

interface ResType<T> {
  [propsName: string]: any
  code: number
  data?: any
  msg?: string
  err?: string
}
interface Service {
  get<T>(url: string, params?: unknown, options?: AxiosRequestConfig<string> | undefined): Promise<ResType<T>>
  post<T>(url: string, params?: unknown, options?: AxiosRequestConfig<string> | undefined): Promise<ResType<T>>
  upload<T>(url: string, params: unknown, options?: AxiosRequestConfig<string> | undefined): Promise<ResType<T>>
  download(url: string, options?: AxiosRequestConfig<string> | undefined): void
}

const service: Service = {
  get(url, params, options) {
    return new Promise((resolve, reject) => {
      axios
        .get(url, { params,  ...options})
        .then(res => {
          resolve(res.data)
        })
        .catch(err => {
          reject(err.data)
        })
    })
  },
  post(url, params, options) {
    return new Promise((resolve, reject) => {
      axios
        .post(url, JSON.stringify(params), options)
        .then(res => {
          resolve(res.data)
        })
        .catch(err => {
          reject(err.data)
        })
    })
  },
  upload(url, file) {
    return new Promise((resolve, reject) => {
      axios
        .post(url, file, {
          headers: { 'Content-Type': 'multipart/form-data' },
        })
        .then(res => {
          resolve(res.data)
        })
        .catch(err => {
          reject(err.data)
        })
    })
  },
  download(url) {
    const iframe = document.createElement('iframe')
    iframe.style.display = 'none'
    iframe.src = url
    iframe.onload = function () {
      document.body.removeChild(iframe)
    }
    document.body.appendChild(iframe)
  },
}
export default service
```