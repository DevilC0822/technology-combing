# useEffect

## useEffect 简介

`useEffect` 在 React 组件渲染后执行某些操作且在每次重新渲染后执行

它有两个参数，第一个是执行函数，第二个是依赖数组

### 第一个参数：effect

第一个参数是一个函数，必传项。是组件要执行的副作用。可以看做`componentDidMount`，`componentDidUpdate` 和 `componentWillUnmount` 这三个函数的组合。

```javascript
useEffect(() => {
    console.log('执行副作用')  
    // 普通函数，执行副作用，可以实现componentDidMount、componentDidUpdate
    return () => {             
      // return函数, 组件销毁时清除副作用，可以实现 componentWillUnmount
      console.log("清除副作用");
    }
});
```

### 第二个参数：deps

第二个参数可以不传或者是一个数组，非必传项。数组里面依赖改变时候副作用函数才会重新更新。所谓依赖改变就是 [ 之前值 === 之后值 ] ，如果为true不执行`useEffect`，为false重新执行`useEffect`。


## useEffect 应用场景

### 1. 仅首次渲染执行情况

比如 设置浏览器选项卡标题 我们可以将空数组作为依赖

``` tsx
  useEffect(() => {
    document.title = 'useEffect study'
  }, [])
```

### 2. 获取更新后的state值

由于 `setState` 更新不是同步，不容易获取到更新后的值，我们可以利用 `useEffect` 的第二个值`deps`获取最新的 `state`

``` tsx
  useEffect(() => {
    console.log(count) // count的值是更新后的
  }, [count])
```

**Tips**：`deps` 的值为引用数据类型是比较的是引用地址 可能并不能获取到最新的值

**解决方法**：`setState` 函数返回一个新的值 这是两者的引用地址不同 会触发更新

## useLayoutEffect 和 useEffect 的相同点

useLayoutEffect 与 useEffect 内部的实现其实是一样的

## useLayoutEffect 和 useEffect 的差异

- `useEffect` 是异步执行的，而 `useLayoutEffect` 是同步执行的会阻塞浏览器运行。

- `useEffect` 的执行时机是浏览器完成渲染之后，而 `useLayoutEffect` 的执行时机是浏览器把内容真正渲染到界面之前，和 `componentDidMount` 等价。

## 总结

useLayoutEffect 和 useEffect 的函数签名是完全一致的，从代码角度来说，虽然它们是两个不同的函数，但是它们的使用方法是完全一致的，甚至一定程度上这两者是可以相互替换的，唯一的不同点是它们两的执行时机，并且官方给出的建议是在大部分场景下我们都可以使用useEffect来完成副作用的执行，只有当useEffect无法解决时再用useLayoutEffect进行处理，这样就不会产生相关的性能问题。
