# React云音乐项目 - 路由统一管理

## 安装依赖

使用 react-router-dom，无需安装react-router，因react-router-dom依赖了react-router。

```sh
pnpm add react-router-dom
```

使用 [react-activation](https://github.com/CJY0208/react-activation) 实现 Keep-alive 

```sh
pnpm add react-activation
```

## 开始配置

在 src 目录下新建 router 文件夹，新建 index.tsx 文件。

```ts
import React, { lazy, Suspense } from 'react'
import { Navigate } from 'react-router-dom'
import { KeepAlive } from 'react-activation'

const MainLayout = lazy(() => import('@/layout'))
const Home = lazy(() => import('@/views/Home'))
const Explore = lazy(() => import('@/views/Explore'))
const Search = lazy(() => import('@/views/Search'))
const NotFound = lazy(() => import('@/views/NotFound'))

const routes = [
  {
    path: '/',
    element: <Navigate to="/home" />, // 重定向
  },
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: 'home',
        element: (
          <KeepAlive key={'home'}>
            <Suspense>
              <Home />
            </Suspense>
          </KeepAlive>
        ),
      },
      {
        path: 'explore',
        element: (
          <KeepAlive key={'explore'}>
            <Suspense>
              <Explore />
            </Suspense>
          </KeepAlive>
        ),
      },
      {
        path: 'search/:keywords',
        element: (
          <Suspense>
            <Search />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
]
export { routes }
```

在主入口 main.tsx 使用路由

```tsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import { routes } from './router'
import { BrowserRouter, useRoutes } from 'react-router-dom'
import { AliveScope } from 'react-activation'
import './index.css'

function App() {
  return useRoutes(routes)
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // 取消严格模式 否则导致开发环境组件重复渲染问题
  // <React.StrictMode>
  <AliveScope>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </AliveScope>,
  // </React.StrictMode>,
)
```

## 基本使用

### 路由出口

使用 Outlet，类似 vue 中的 router-view

```tsx
import { Outlet } from 'react-router-dom'

// 在合适的地方使用
<Outlet />
```


### 路由跳转

使用 useNavigate

```ts
import { useNavigate } from 'react-router-dom'

const navigate = useNavigate()

navigate('/home')
```

如果需要传递参数 使用 navigate 的第二个参数，并使用 useLocation 接收参数

```ts
navigate('/home', { state: { id: 1 } })

// 目标页面 
import { useLocation } from 'react-router-dom'

const location = useLocation()
const { state } = location
console.log(state.id) // 1
```

### 动态路由

path 属性定义定义动态路由

```tsx
const routes = [
  {
    path: 'search/:keywords',
    element: (
    <Suspense>
      <Search />
    </Suspense>
    ),
  },
]
```

比如 

```ts
navigate(`/search/海阔天空`)
```

在目标页面使用 useParams 接收动态路由参数

```ts
import { useParams } from "react-router-dom"
const params = useParams()
console.log(params.keywords) // 海阔天空
```
