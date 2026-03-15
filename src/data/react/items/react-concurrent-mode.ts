import { KnowledgeItem } from '@/types/knowledge';

export const react_concurrent_mode: KnowledgeItem = {
      id: 'react-concurrent-mode',
      title: 'React 并发模式',
      category: 'react',
      difficulty: 'hard',
      tags: ['React', '并发模式', 'Concurrent', 'React 18'],
      content: `## React 并发模式

并发模式（Concurrent Mode）是 React 18 引入的重要特性，它允许 React 同时准备多个版本的 UI，使应用能够更快地响应用户交互。并发模式是 React 架构的重大升级，理解其工作原理对于构建高性能的 React 应用至关重要。

### 并发模式基础

**什么是并发模式：**
并发模式是 React 的一种新的渲染机制，它允许 React 在渲染过程中中断、暂停、恢复或放弃渲染。这使得 React 可以在处理大型任务时保持应用的响应性，优先处理更紧急的用户交互。

\`\`\`typescript
import { createRoot } from 'react-dom/client';
import App from './App';

// 启用并发模式
const root = createRoot(document.getElementById('root')!);
root.render(<App />);

// 旧版 ReactDOM.render（不支持并发）
// ReactDOM.render(<App />, document.getElementById('root'));
\`\`\`

**并发模式的核心特性：**
- 可中断渲染：React 可以中断正在进行的渲染，处理更高优先级的任务
- 优先级调度：不同类型的更新有不同的优先级
- 批量更新：自动将多个状态更新合并为一次渲染
- 过渡更新：标记非紧急更新，保持 UI 响应性

### 自动批处理

**什么是自动批处理：**
React 18 之前，批处理只在 React 事件处理器中生效。React 18 引入自动批处理，在所有情况下都会批处理状态更新，包括 Promise、setTimeout、原生事件处理器等。

\`\`\`typescript
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [flag, setFlag] = useState(false);

  // React 18：自动批处理
  function handleClick() {
    // 即使在异步代码中，也会自动批处理
    setTimeout(() => {
      setCount(c => c + 1);
      setFlag(f => !f);
      // React 只会重新渲染一次
    }, 0);
  }

  // React 18 之前：不会批处理
  // setTimeout 中的更新会导致两次渲染

  return (
    <div>
      <p>Count: {count}</p>
      <p>Flag: {flag.toString()}</p>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}
\`\`\`

**退出自动批处理：**
使用 flushSync 强制同步执行更新，退出自动批处理。

\`\`\`typescript
import { flushSync } from 'react-dom';

function handleClick() {
  flushSync(() => {
    setCounter(c => c + 1);
  });
  // React 已经更新了 DOM
  flushSync(() => {
    setFlag(f => !f);
  });
  // React 已经更新了 DOM
}
\`\`\`

### 过渡更新 (Transitions)

**useTransition Hook：**
useTransition 用于标记非紧急更新，让 React 知道这些更新可以延迟处理，保持 UI 响应性。

\`\`\`typescript
import { useState, useTransition } from 'react';

function SearchComponent() {
  const [isPending, startTransition] = useTransition();
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    
    // 紧急更新：立即更新输入框
    setSearchTerm(value);
    
    // 过渡更新：可以延迟处理搜索结果
    startTransition(() => {
      const filtered = filterLargeList(value);
      setResults(filtered);
    });
  }

  return (
    <div>
      <input value={searchTerm} onChange={handleChange} />
      {isPending && <Spinner />}
      <ResultList results={results} />
    </div>
  );
}
\`\`\`

**startTransition API：**
startTransition 用于标记非紧急更新，与 useTransition 类似，但不提供 isPending 状态。

\`\`\`typescript
import { startTransition } from 'react';

function TabContainer() {
  const [tab, setTab] = useState('home');

  function selectTab(nextTab: string) {
    // 紧急更新：立即更新选中状态
    setTab(nextTab);
    
    // 过渡更新：延迟渲染新标签内容
    startTransition(() => {
      // 这个更新可以被中断
      setTabContent(loadTabContent(nextTab));
    });
  }

  return (
    <div>
      <TabBar activeTab={tab} onSelect={selectTab} />
      <TabContent tab={tab} />
    </div>
  );
}
\`\`\`

### useDeferredValue

**useDeferredValue Hook：**
useDeferredValue 用于延迟更新某个值，类似于防抖，但更智能。它会在紧急更新完成后再处理延迟更新。

\`\`\`typescript
import { useState, useDeferredValue, useMemo } from 'react';

function SearchComponent() {
  const [searchTerm, setSearchTerm] = useState('');
  
  // 延迟搜索词
  const deferredSearchTerm = useDeferredValue(searchTerm);
  
  // 使用延迟值进行计算
  const searchResults = useMemo(() => {
    return filterLargeList(deferredSearchTerm);
  }, [deferredSearchTerm]);

  const isStale = searchTerm !== deferredSearchTerm;

  return (
    <div>
      <input
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />
      {isStale && <Spinner />}
      <ResultList results={searchResults} />
    </div>
  );
}
\`\`\`

**useDeferredValue vs useTransition：**
- useTransition：标记更新为非紧急，适用于事件处理器
- useDeferredValue：延迟某个值的更新，适用于接收 props 或派生状态

\`\`\`typescript
// useTransition：主动标记更新
function handleClick() {
  startTransition(() => {
    setState(newValue);
  });
}

// useDeferredValue：被动延迟值
function Component({ value }) {
  const deferredValue = useDeferredValue(value);
  // deferredValue 会在 value 更新后延迟更新
}
\`\`\`

### Suspense 与并发渲染

**Suspense for Data Fetching：**
并发模式下的 Suspense 可以更好地处理数据加载状态，避免加载状态闪烁。

\`\`\`typescript
import { Suspense } from 'react';

function App() {
  return (
    <Suspense fallback={<Spinner />}>
      <DataComponent />
    </Suspense>
  );
}

function DataComponent() {
  // 这个组件会在数据加载时挂起
  const data = use(fetchData());
  return <div>{data}</div>;
}

// 简单的 use 实现
function use<T>(promise: Promise<T>): T {
  if (promise.status === 'fulfilled') {
    return promise.value;
  }
  if (promise.status === 'rejected') {
    throw promise.reason;
  }
  throw promise.then(
    (value) => {
      promise.status = 'fulfilled';
      promise.value = value;
    },
    (reason) => {
      promise.status = 'rejected';
      promise.reason = reason;
    }
  );
}
\`\`\`

**Suspense 与 Transitions 结合：**
使用 useTransition 可以避免 Suspense 的加载状态闪烁。

\`\`\`typescript
import { useState, useTransition, Suspense } from 'react';

function App() {
  const [isPending, startTransition] = useTransition();
  const [tab, setTab] = useState('home');

  function selectTab(nextTab: string) {
    startTransition(() => {
      setTab(nextTab);
    });
  }

  return (
    <div>
      <TabBar activeTab={tab} onSelect={selectTab} />
      {isPending && <Spinner />}
      <Suspense fallback={<Spinner />}>
        <TabContent tab={tab} />
      </Suspense>
    </div>
  );
}
\`\`\`

### 并发模式最佳实践

**1. 正确使用优先级：**
将用户可见的交互标记为紧急更新，后台任务标记为过渡更新。

\`\`\`typescript
function InputWithSearch() {
  const [text, setText] = useState('');
  const [results, setResults] = useState([]);

  function handleChange(e) {
    const value = e.target.value;
    
    // 紧急：输入框响应
    setText(value);
    
    // 过渡：搜索结果
    startTransition(() => {
      setResults(search(value));
    });
  }

  return (
    <>
      <input value={text} onChange={handleChange} />
      <Results data={results} />
    </>
  );
}
\`\`\`

**2. 避免过度使用 flushSync：**
flushSync 会强制同步渲染，影响性能，只在必要时使用。

\`\`\`typescript
// ❌ 避免：不必要地使用 flushSync
function handleClick() {
  flushSync(() => {
    setCount(c => c + 1);
  });
}

// ✅ 正确：需要同步读取 DOM 时使用
function handleScroll() {
  flushSync(() => {
    setScrollPosition(window.scrollY);
  });
  // 现在可以安全地读取 DOM
  const element = document.getElementById('target');
}
\`\`\``,
      createdAt: '2026-03-15',
      updatedAt: '2026-03-15'
    };
