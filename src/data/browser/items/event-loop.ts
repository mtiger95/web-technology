import { KnowledgeItem } from '@/types/knowledge';

export const event_loop: KnowledgeItem = {
      id: 'event-loop',
      title: '浏览器事件循环与异步编程',
      category: 'browser',
      difficulty: 'medium',
      tags: ['浏览器原理', '事件循环', '异步编程', 'JavaScript'],
      content: `## 浏览器事件循环与异步编程

事件循环是 JavaScript 异步编程的核心机制，理解它对于掌握异步编程至关重要。

### 事件循环概念

**定义：**
- JavaScript 运行时的机制
- 处理异步操作
- 协调事件、用户交互、脚本执行、UI 渲染
- 确保单线程 JavaScript 的非阻塞执行

**单线程特性：**
- JavaScript 是单线程的
- 避免了多线程的复杂性
- 通过事件循环实现异步
- 防止 UI 渲染阻塞

### 任务队列

**宏任务 (Macro Task)：**
- 脚本执行
- setTimeout
- setInterval
- setImmediate (Node.js)
- I/O 操作
- 网络请求
- 事件回调

**微任务 (Micro Task)：**
- Promise.then()
- Promise.catch()
- Promise.finally()
- async/await
- MutationObserver
- process.nextTick (Node.js)

**任务执行顺序：**
1. 执行同步代码
2. 执行微任务队列中的所有任务
3. 执行宏任务队列中的一个任务
4. 重复步骤 2-3

### 事件循环工作流程

**执行栈：**
- 存放正在执行的代码
- 函数调用时入栈
- 函数执行完毕后出栈
- 执行栈为空时处理任务队列

**任务队列：**
- 存放异步任务
- 分为宏任务队列和微任务队列
- 事件循环不断检查队列
- 按顺序执行任务

**渲染时机：**
- 每次事件循环结束后可能进行渲染
- 浏览器决定何时渲染
- 避免频繁渲染影响性能
- 渲染时机与任务队列相关

### 异步编程模式

**回调函数：**
- 最早的异步编程模式
- 容易导致回调地狱
- 代码可读性差
- 错误处理复杂

**Promise：**
- 解决回调地狱
- 链式调用
- 更好的错误处理
- 支持并行操作

**async/await：**
- 基于 Promise
- 同步代码风格
- 更好的错误处理
- 代码可读性高

**事件发布/订阅：**
- 基于事件的异步模式
- 解耦组件
- 适合复杂应用
- 可能导致内存泄漏

### 常见异步场景

**定时器：**
- setTimeout：延迟执行
- setInterval：重复执行
- requestAnimationFrame：动画
- requestIdleCallback：空闲时执行

**网络请求：**
- XMLHttpRequest
- fetch API
- axios
- WebSocket

**文件操作：**
- FileReader
- File API
- Blob
- FormData

**用户交互：**
- 点击事件
- 键盘事件
- 鼠标事件
- 触摸事件

### 事件循环与性能

**性能优化：**
- 避免长任务阻塞主线程
- 使用 Web Workers 处理耗时操作
- 合理使用 setTimeout 分解任务
- 优化事件处理函数

**任务优先级：**
- 微任务优先级高于宏任务
- requestAnimationFrame 优先级高于 setTimeout
- 合理安排任务顺序
- 避免任务饥饿

**内存管理：**
- 及时清理事件监听器
- 避免闭包导致的内存泄漏
- 合理使用 WeakMap 和 WeakSet
- 监控内存使用

### 浏览器与 Node.js 事件循环

**差异：**
- 浏览器事件循环：处理 UI 渲染
- Node.js 事件循环：处理 I/O 操作
- 微任务执行时机不同
- 任务队列数量不同

**Node.js 事件循环阶段：**
1. timers：处理 setTimeout/setInterval
2. I/O callbacks：处理 I/O 回调
3. idle, prepare：内部使用
4. poll：轮询 I/O 事件
5. check：处理 setImmediate
6. close callbacks：处理关闭事件

### 最佳实践

**异步编程：**
- 优先使用 async/await
- 合理使用 Promise
- 避免回调地狱
- 正确处理错误

**性能优化：**
- 避免长任务
- 合理使用 Web Workers
- 优化事件处理
- 监控异步操作

**代码组织：**
- 模块化异步代码
- 合理使用 Promise.all 和 Promise.race
- 避免过度使用 async/await
- 保持代码可读性

### 工具与资源

**调试工具：**
- Chrome DevTools Sources 面板
- Chrome DevTools Performance 面板
- Node.js 调试器
- VS Code 调试器

**学习资源：**
- MDN 事件循环文档
- JavaScript 高级程序设计
- You Don't Know JS: Async & Performance
- Google Web Fundamentals

### 案例分析

**异步编程模式：**
- Promise 链式调用
- async/await 同步风格
- 事件发布/订阅模式
- 混合使用多种模式

**性能优化案例：**
- 长任务分解
- Web Workers 应用
- 事件处理优化
- 内存泄漏修复`,
      createdAt: '2026-03-14',
      updatedAt: '2026-03-14'
    };
