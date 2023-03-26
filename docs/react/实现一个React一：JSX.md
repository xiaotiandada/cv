# 实现一个简易 React（一）：JSX 和虚拟 DOM。

## JSX

首先我们来了解一下 JSX 是什么。JSX 是一种 JavaScript 语法扩展，它允许我们在 JavaScript 中编写类似于 HTML 的代码，使得我们能够更加方便地构建复杂的 UI 界面。在 React 中，我们通常使用 JSX 来描述组件的结构和行为。

但是在浏览器中，浏览器只能理解纯 HTML、CSS 和 JavaScript 代码，而无法直接处理 JSX 代码。因此，我们需要将 JSX 代码转换成 JavaScript 代码，以便浏览器能够正确地渲染页面。

```jsx | pure
const app = () => {
  return <h1>Hello World!</h1>;
};
```

## 虚拟 DOM

接下来，我们来介绍一下虚拟 DOM。虚拟 DOM 是 React 中的重要概念之一，它是一个轻量级的 JavaScript 对象树，用于表示真实 DOM 的结构和属性，并且可以高效地进行比较和更新。

React 提供了一个名为 ReactDOM 的库，可以将虚拟 DOM 渲染到真实 DOM 中。它通过比较新旧虚拟 DOM 来确定哪些部分需要更新，并仅对需要更新的部分进行操作，从而提高了性能。

那么如何创建虚拟 DOM 呢？在 React 中，我们可以使用 createElement 函数来创建虚拟 DOM。该函数接受三个参数：标签名、属性对象和子元素（可选）。例如：

```jsx | pure
const virtualDOM = React.createElement('div', { className: 'container' }, 'Hello World!');
```

上述代码将创建一个包含文本内容 "Hello World!" 的 div 元素，并设置了它的 className 属性为 "container"。

最后，需要注意的是，在使用 React 开发应用时，我们通常会使用 JSX 和虚拟 DOM 配合来构建 UI 界面，从而提高开发效率和性能。

当我们使用 JSX 来构建组件时，实际上是在创建一个虚拟 DOM 树。这棵树与浏览器中的真实 DOM 树类似，但是它是由 JavaScript 对象组成的，而不是由浏览器生成的 HTML 元素。

为了将虚拟 DOM 渲染到页面上，我们需要使用 ReactDOM.render() 函数。该函数接收两个参数：要渲染的虚拟 DOM 树和要渲染到哪个元素上。例如：

```jsx | pure
const app = (
  <div>
    <h1>Hello World!</h1>
  </div>
);

ReactDOM.render(app, document.getElementById('root'));
```

上述代码创建了一个包含标题 "Hello World!" 的 div 元素，并将其渲染到 id 为 "root" 的元素上。

在 React 中，我们通常会将组件分解成更小的可重用部分。每个组件都有自己的状态和属性，并且通过传递 props 来更新组件的状态。例如：

```jsx | pure
function App(props) {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <h1>{props.title}</h1>
      <p>You clicked {count} times.</p>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}

ReactDOM.render(<App title="My App" />, document.getElementById('root'));
```

上述代码创建了一个名为 App 的组件，该组件包含一个标题、一个计数器和一个按钮。当用户点击按钮时，计数器的数值会增加。这里我们使用了 useState 钩子来管理组件的状态。

当我们使用 React 和 JSX 来创建 UI 界面时，我们通常会根据界面的不同部分来定义不同的组件。下面是一个简单示例，展示了如何创建包含多个组件的应用。

```jsx | pure
function Header(props) {
  return (
    <header>
      <h1>{props.title}</h1>
    </header>
  );
}

function PeopleList(props) {
  const people = props.people.map((person) => <li key={person.id}>{person.name}</li>);

  return <ul>{people}</ul>;
}

function App(props) {
  const people = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' },
  ];

  return (
    <div>
      <Header title={props.title} />
      <main>
        <PeopleList people={people} />
      </main>
    </div>
  );
}

ReactDOM.render(<App title="My App" />, document.getElementById('root'));
```

上述代码创建了三个组件：Header、PeopleList 和 App。Header 组件渲染页面的标题，PeopleList 组件渲染人员列表，而 App 组件则将这两个组件组合在一起，形成最终的应用。

在实际开发中，我们可以通过拆分组件和重用代码来提高开发效率。同时，React 还提供了许多有用的功能，如生命周期方法、钩子函数、Redux 状态管理等，可以帮助我们更好地构建复杂的应用程序。

## 在线转换

用 babel 在线查看转换后的代码 https://babeljs.io/repl

```ts | pure
<div>hello</div>;

import { jsx as _jsx } from 'react/jsx-runtime';
/*#__PURE__*/ _jsx('div', {
  children: 'hello',
});
```

## createElement

```tsx | pure
const RESERVED_PROPS = {
  key: true,
  ref: true,
  __self: true,
  __source: true,
};

// 使用 textNode 而不是设置 innerText 将允许我们稍后以相同的方式处理所有元素
// 还要注意我们如何设置 nodeValue 就像我们对 h1 标题所做的那样，它几乎就像字符串有 props: {nodeValue: "hello"} 一样。
// children 数组还可以包含原始值，如字符串或数字。所以我们将所有不是对象的东西都包装在它自己的元素中，并为它们创建一个特殊类型： TEXT_ELEMENT 。
// 当没有 children 时，React 不会包装原始值或创建空数组，但我们这样做是因为它会简化我们的代码，并且对于我们的库，我们更喜欢简单的代码而不是高性能的代码。
function createTextElement(text: string) {
  return {
    type: 'TEXT_ELEMENT',
    props: {
      nodeValue: text,
      children: [],
    },
  };
}

// 我们对 props 使用扩展运算符，对 children 使用剩余参数语法，这样 children prop 将始终是一个数组。
export function createElement(
  type: string | FunctionComponent,
  config: Props | null,
  ...children: any[]
) {
  let propName: any;

  // Reserved names are extracted
  const props: Props = {};

  if (config != null) {
    for (propName in config) {
      if (config.hasOwnProperty(propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        props[propName] = config[propName];
      }
    }
  }

  props.children = children.map((child) =>
    typeof child === 'object' ? child : createTextElement(child),
  );

  return {
    type,
    props,
  };
}
```

## Render

```tsx | pure
// Render 渲染
// 将 nextUnitOfWork 设置为 root fiber
function render(element: any, container: HTMLElement) {
  const dom =
    element.type == 'TEXT_ELEMENT'
      ? document.createTextNode('')
      : document.createElement(element.type);
  const isProperty = (key) => key !== 'children';
  Object.keys(element.props)
    .filter(isProperty)
    .forEach((name) => {
      dom[name] = element.props[name];
    });
  element.props.children.forEach((child) => render(child, dom));
  container.appendChild(dom);
}
```

## Demo

https://codesandbox.io/s/didact-2-k6rbj?file=/src/index.js
