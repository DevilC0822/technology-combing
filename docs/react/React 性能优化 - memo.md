# React 性能优化 - memo 

在React项目中，在含有父子组件的页面中，我们会遇到，父组件的属性修改了，子组件的属性并没有修改，但是还是会被重新Render。这时我们需要缓存一些内容，以避免在需渲染过程中因大量不必要的耗时计算而导致的性能问题。

``` js
const Child = () => {
  console.log('child render');
  return <div />;
};

const Parent = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <Child />
      <button onClick={() => setCount((v) => v + 1)}>Add Count</button>
    </>
  );
};
```

如上每次点击 Add Count 按钮时控制台每次打印 `child render`, 子组件并无任何依赖却仍然被**重新渲染**。

React 提供了 memo 来解决这样的场景。将子组件放在 React.memo 里，子组件就不会随这父组件的影响了，只有在依赖的Props发生变化时才执行。但React.memo有一个情况，还是会被执行。那就Props里传入的是一个函数，当父组件被重新执行的时候，函数地址也会发生变化，这样刚好触发了子组件依赖的Props发生变化，从而导致执行。

如下 Child 组件只依赖父组件传入的count 并使用 memo 包裹，这时点击 Add Value 按钮 Child 组件并**不会重新渲染**。

```jsx
const Child = memo((props) => {
  console.log('child render');
  return <div>{props.count}</div>;
});

const Parent = () => {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState(0);

  return (
    <>
      <div>count: {count}</div>
      <div>value: {value}</div>
      <Child count={count} />
      <button onClick={() => setCount((v) => v + 1)}>Add Count</button>
      <button onClick={() => setValue((v) => v + 1)}>Add Value</button>
    </>
  );
};
```

如下子组件比上面多依赖了一个函数，但是这时点击 Add Value 按钮 Child 组件将**重新渲染**。

```jsx
const Child = memo((props) => {
  console.log('render Con');
  return <div>{props.count}</div>;
});

const Parent = () => {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState(0);
  const handleClick = () => {};

  return (
    <>
      <div>count: {count}</div>
      <div>value: {value}</div>
      <Child count={count} handleClick={handleClick} />
      <button onClick={() => setCount((v) => v + 1)}>Add Count</button>
      <button onClick={() => setValue((v) => v + 1)}>Add Value</button>
    </>
  );
};
```



