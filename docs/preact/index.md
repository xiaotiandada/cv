---
title: PReact 学习
---

## v1

### v1.3.0

```tsx | pure
import { render, VNode } from './preact';

render(
  new VNode(
    'div',
    {
      style: 'color: red;',
      'data-test': 'hello world',
      id: 'test',
      className: 'test',
    },
    [new VNode('span', undefined, ['hello world'])],
  ),
  document.getElementById('root'),
);

//...

/** Virtual DOM Node */
export class VNode {
  nodeName: string;
  attributes: { [key: string]: any } | undefined;
  children: VNode[] | undefined;

  constructor(nodeName: string, attributes: { [key: string]: any }, children: VNode[]) {
    /** @type {string|class} */
    this.nodeName = nodeName;

    /** @type {object<string>|undefined} */
    this.attributes = attributes;

    /** @type {array<VNode>|undefined} */
    this.children = children;
  }
}
VNode.prototype.__isVNode = true;

// ...

/** @private */
let memoize =
  (fn: any, mem: { [key: string]: any } = {}) =>
  (k: any) => {
    let result = mem.hasOwnProperty(k) ? mem[k] : (mem[k] = fn(k));
    console.log('memoize result', result, mem);
    return result;
  };

// ...

/** @private DOM node pool, keyed on nodeName. */
let recycler = {
  nodes: {},
  create(nodeName: string) {
    let name = recycler.normalizeName(nodeName);
    let list = recycler.nodes[name];
    return (list && list.pop()) || document.createElement(nodeName);
  },
  normalizeName: memoize((name: string) => name.toUpperCase()),
} as {
  nodes: { [key: string]: HTMLElement[] };
  create: (nodeName: string) => HTMLElement;
  normalizeName: (name: string) => string;
};

// ...

function build(dom: any, vnode: VNode, rootComponent?: unknown) {
  //
  console.log('build', dom, dom?.nodeName, vnode, rootComponent);

  let out = dom;
  let nodeName: string = vnode.nodeName;

  // 创建文本节点
  if (typeof vnode === 'string') {
    return document.createTextNode(vnode);
  }

  // 创建为定义的元素
  if (nodeName === null || nodeName === undefined) {
    console.log('x-undefined-element', nodeName);

    nodeName = 'x-undefined-element';
  }

  // 没有 dom 节点，创建一个新的节点
  if (!dom) {
    console.log('nodeName', nodeName);
    out = recycler.create(nodeName);

    console.log('out', out);
  } else if (false) {
    //
  } else {
    //
  }

  // 循环处理子节点
  let newChildren = [];
  if (vnode.children) {
    for (let i = 0, vlen = vnode.children.length; i < vlen; i++) {
      let vchild = vnode.children[i];
      let attrs = vchild.attributes;
      let key;
      let child;
      if (attrs) {
        //
      }

      /**
       * 这段代码的作用是尝试从现有的子节点中获取与当前虚拟节点相同类型的节点。
       * 如果找到了相同类型的节点，则将其从现有的子节点中删除并返回该节点。如果没有找到相同类型的节点，则返回 undefined。
       */

      // attempt to pluck a node of the same type from the existing children
      if (!child) {
        //
      }

      // 循环处理子节点
      // morph the matched/found/created DOM child to match vchild (deep)
      newChildren.push(build(null, vchild));
    }
  }

  // 循环处理子节点
  // apply the constructed/enhanced ordered list to the parent
  for (let i = 0, len = newChildren.length; i < len; i++) {
    // we're intentionally re-referencing out.childNodes here as it is a live array (akin to live NodeList)
    if (out.childNodes[i] !== newChildren[i]) {
      let child = newChildren[i];
      // let c = child._component
      let next = out.childNodes[i + 1];

      // 有下一个节点，插入到下一个节点之前
      if (next) {
        out.insertBefore(child, next);
      } else {
        // 插入到最后
        out.appendChild(child);
      }
    }
  }

  console.log('out childNodes', out.childNodes);

  return out;
}
```

```html | pure
<div id="root">
  <div><span>hello world</span></div>
</div>
```

这是一个最小化的实现，手动实例化 `VNode` 调用 `render` 挂载到 `root` 节点上。

后续的基于这个改动。
