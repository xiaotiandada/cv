# Fiber

当我们谈到 React Fiber 时，我们实际上是在谈论 React 的新的协调引擎。React Fiber 是 React 在内部实现中的一个重大更新，它旨在使 React 更加可扩展，更加快速和更加灵活。

与 React 早期的协调引擎相比，React Fiber 采用了一种更为高效的算法来更新组件树。在早期版本的 React 中，当应用程序状态更改时，React 会暂停整个应用程序，并重新计算整个组件树，这会导致性能问题。

React Fiber 通过实现一个优先级调度算法来解决这个问题，该算法可以在应用程序更新期间识别和处理优先级最高的任务，从而使 React 能够更快地响应用户输入，并在后台执行其余的任务。React Fiber 还引入了一些新的概念，例如协程和堆栈重用，以提高更新性能。

下面是 React Fiber 与 React 早期协调引擎的简单对比：

React Fiber 使用优先级调度算法，而早期版本的 React 没有。优先级调度算法使得 React Fiber 能够更加智能地选择何时处理哪些任务。

React Fiber 实现了协程和堆栈重用，以提高更新性能。早期版本的 React 没有这些特性。

React Fiber 的调度器使用链表来跟踪需要处理的工作单元，而早期版本的 React 使用递归来处理工作单元。

React Fiber 支持 Suspense 和 Error Boundaries，这些功能可以使应用程序更加可靠和可维护。早期版本的 React 没有这些功能。

总体而言，React Fiber 是 React 内部的一个重大更新，它使得 React 更加灵活、可扩展和高效。通过使用优先级调度算法、协程和堆栈重用等技术，React Fiber 可以更快地响应用户输入，并提高应用程序的性能和可靠性。
