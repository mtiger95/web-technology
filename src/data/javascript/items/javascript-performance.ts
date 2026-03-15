import { KnowledgeItem } from '@/types/knowledge';

export const javascript_performance: KnowledgeItem = {
      id: 'javascript-performance',
      title: 'JavaScript 性能优化最佳实践',
      category: 'javascript',
      difficulty: 'medium',
      tags: ['JavaScript', '性能优化', '内存', '执行速度'],
      content: `## JavaScript 性能优化最佳实践

JavaScript 性能直接影响应用的用户体验。一个高性能的 JavaScript 应用应该具备快速响应、流畅动画、低内存占用等特点。性能优化是一个持续的过程，需要在开发的各个阶段关注。以下是一些关键的性能优化策略，涵盖代码优化、内存管理、异步处理、DOM 操作等多个方面。

### 代码优化

**变量声明与作用域：**
- 使用 let 和 const 代替 var，利用块级作用域避免变量提升问题
- 减少全局变量的使用，全局变量会污染全局命名空间，增加查找时间
- 合理使用闭包，闭包会保持对外部变量的引用，可能导致内存泄漏

\`\`\`javascript
// ❌ 避免：全局变量污染
var globalVar = 'global';

// ✅ 推荐：使用模块作用域
const Module = (() => {
  const privateVar = 'private';
  return {
    getPrivate: () => privateVar,
  };
})();

// ❌ 避免：闭包导致的内存问题
function createHandlers() {
  const handlers = [];
  for (var i = 0; i < 10; i++) {
    handlers.push(function() {
      console.log(i); // 所有函数都输出 10
    });
  }
  return handlers;
}

// ✅ 推荐：使用 let 或 IIFE
function createHandlers() {
  const handlers = [];
  for (let i = 0; i < 10; i++) {
    handlers.push(() => console.log(i)); // 输出 0-9
  }
  return handlers;
}
\`\`\`

**函数优化：**
- 避免在循环中定义函数，每次迭代都会创建新的函数对象
- 使用箭头函数简化代码，但注意 this 绑定问题
- 合理使用函数柯里化，实现函数复用和延迟计算

\`\`\`javascript
// ❌ 避免：循环中创建函数
const handlers = [];
for (let i = 0; i < 1000; i++) {
  handlers.push(function() {
    return i * 2;
  });
}

// ✅ 推荐：提取函数
const double = (i) => i * 2;
const handlers = [];
for (let i = 0; i < 1000; i++) {
  handlers.push(() => double(i));
}

// 函数柯里化优化
const curry = (fn) => {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    }
    return (...moreArgs) => curried.apply(this, args.concat(moreArgs));
  };
};

const add = (a, b, c) => a + b + c;
const curriedAdd = curry(add);
const add5 = curriedAdd(5); // 部分应用，复用函数
\`\`\`

**循环优化：**
- 使用 for 循环代替 forEach，for 循环性能更好
- 缓存数组长度，避免每次迭代都计算
- 避免在循环中进行 DOM 操作，使用 DocumentFragment 批量操作

\`\`\`javascript
// ❌ 避免：每次迭代都计算长度
for (let i = 0; i < array.length; i++) {
  // ...
}

// ✅ 推荐：缓存数组长度
for (let i = 0, len = array.length; i < len; i++) {
  // ...
}

// ❌ 避免：循环中进行 DOM 操作
for (let i = 0; i < items.length; i++) {
  const li = document.createElement('li');
  li.textContent = items[i];
  list.appendChild(li); // 每次都触发重排
}

// ✅ 推荐：使用 DocumentFragment
const fragment = document.createDocumentFragment();
for (let i = 0; i < items.length; i++) {
  const li = document.createElement('li');
  li.textContent = items[i];
  fragment.appendChild(li);
}
list.appendChild(fragment); // 只触发一次重排
\`\`\`

**条件优化：**
- 使用 switch 代替多个 if-else，switch 使用跳转表优化
- 将最常见的条件放在前面，减少判断次数
- 使用对象字面量代替条件判断，提高可读性和性能

\`\`\`javascript
// ❌ 避免：多个 if-else
function getStatus(status) {
  if (status === 'pending') return '等待中';
  else if (status === 'processing') return '处理中';
  else if (status === 'completed') return '已完成';
  else if (status === 'failed') return '失败';
  else return '未知';
}

// ✅ 推荐：使用对象字面量
const statusMap = {
  pending: '等待中',
  processing: '处理中',
  completed: '已完成',
  failed: '失败',
};

function getStatus(status) {
  return statusMap[status] || '未知';
}

// ✅ 推荐：使用 Map（更高效）
const statusMap = new Map([
  ['pending', '等待中'],
  ['processing', '处理中'],
  ['completed', '已完成'],
  ['failed', '失败'],
]);
\`\`\`

### 内存管理

**内存泄漏常见原因与预防：**
- 避免循环引用，特别是 DOM 元素与 JavaScript 对象之间的引用
- 清理定时器和事件监听器，组件销毁时必须清理
- 释放不再使用的对象引用，帮助垃圾回收器回收内存

\`\`\`javascript
// ❌ 避免：未清理的定时器
class Component {
  constructor() {
    this.timer = setInterval(() => {
      this.updateData();
    }, 1000);
  }
  // 缺少清理逻辑
}

// ✅ 推荐：正确清理
class Component {
  constructor() {
    this.timer = setInterval(() => {
      this.updateData();
    }, 1000);
  }
  
  destroy() {
    clearInterval(this.timer);
  }
}

// ❌ 避免：未移除的事件监听器
class Modal {
  constructor() {
    document.addEventListener('keydown', this.handleKeydown);
  }
}

// ✅ 推荐：正确移除监听器
class Modal {
  constructor() {
    this.handleKeydown = this.handleKeydown.bind(this);
    document.addEventListener('keydown', this.handleKeydown);
  }
  
  destroy() {
    document.removeEventListener('keydown', this.handleKeydown);
  }
}

// ❌ 避免：闭包持有大对象引用
function createProcessor(largeData) {
  return function process() {
    // 即使只用一部分数据，整个 largeData 都被引用
    return largeData[0];
  };
}

// ✅ 推荐：只保留需要的数据
function createProcessor(largeData) {
  const neededData = largeData[0];
  return function process() {
    return neededData;
  };
}
\`\`\`

**垃圾回收机制理解：**
- JavaScript 使用标记清除算法进行垃圾回收
- 避免创建过多的临时对象，减少 GC 压力
- 使用 WeakMap 和 WeakSet 存储对象引用，不阻止垃圾回收

\`\`\`javascript
// WeakMap 示例：不阻止垃圾回收
const privateData = new WeakMap();

class MyClass {
  constructor() {
    privateData.set(this, { secret: 'value' });
  }
  
  getSecret() {
    return privateData.get(this)?.secret;
  }
}

// 当 MyClass 实例被销毁时，WeakMap 中的数据也会被回收

// WeakSet 示例：跟踪对象而不阻止回收
const visitedObjects = new WeakSet();

function processObject(obj) {
  if (visitedObjects.has(obj)) {
    return; // 已处理过
  }
  visitedObjects.add(obj);
  // 处理对象
}
\`\`\`

**内存优化技巧：**
- 使用对象池复用对象，减少对象创建和销毁的开销
- 合理使用缓存，但要注意缓存大小和过期策略
- 减少内存分配，重用数组和对象

\`\`\`javascript
// 对象池模式
class ObjectPool {
  constructor(factory, initialSize = 10) {
    this.factory = factory;
    this.pool = [];
    for (let i = 0; i < initialSize; i++) {
      this.pool.push(factory());
    }
  }
  
  acquire() {
    return this.pool.length > 0 ? this.pool.pop() : this.factory();
  }
  
  release(obj) {
    // 重置对象状态
    Object.keys(obj).forEach(key => delete obj[key]);
    this.pool.push(obj);
  }
}

// 使用示例
const vectorPool = new ObjectPool(() => ({ x: 0, y: 0, z: 0 }));

function calculate() {
  const v = vectorPool.acquire();
  // 使用 v 进行计算
  vectorPool.release(v);
}

// 数组复用
const tempArray = [];
function processItems(items) {
  tempArray.length = 0; // 清空但保留内存
  for (const item of items) {
    if (item.active) {
      tempArray.push(item);
    }
  }
  return tempArray;
}
\`\`\`

### 异步优化

**异步操作：**
- 使用 Promise 和 async/await
- 避免回调地狱
- 合理控制并发数量

**网络请求：**
- 合并请求
- 使用缓存
- 实现请求节流

**资源加载：**
- 延迟加载非关键资源
- 预加载关键资源
- 使用 CDN

### 浏览器优化

**DOM 操作：**
- 减少 DOM 操作次数
- 使用 DocumentFragment
- 批量更新 DOM

**事件处理：**
- 使用事件委托
- 避免过多的事件监听器
- 清理事件监听器

**渲染优化：**
- 避免重排和重绘
- 使用 CSS 动画代替 JavaScript 动画
- 合理使用 requestAnimationFrame

### 工具和监控

**性能分析：**
- 使用 Chrome DevTools
- 分析执行时间
- 识别性能瓶颈

**监控工具：**
- Lighthouse
- Web Vitals
- 自定义性能监控

**构建优化：**
- 代码压缩
- 代码分割
-  tree-shaking

### 最佳实践

- 编写高效的算法
- 合理使用数据结构
- 避免不必要的计算
- 优化关键路径
- 定期性能测试
- 持续优化
- 学习性能优化技巧
- 关注性能最佳实践`,
      createdAt: '2026-03-14',
      updatedAt: '2026-03-14'
    };
