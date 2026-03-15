import { KnowledgeItem } from '@/types/knowledge';

export const react_fiber: KnowledgeItem = {
      id: 'react-fiber',
      title: 'React Fiber 架构与并发模式',
      category: 'react',
      difficulty: 'hard',
      tags: ['React', 'Fiber', '并发', '调度'],
      content: `## React Fiber 架构与并发模式

React Fiber 是 React 16 引入的全新协调引擎，它彻底重构了 React 的核心算法，为 React 带来了并发渲染能力。Fiber 的设计目标是解决大型 React 应用中更新卡顿的问题，实现可中断的渲染过程，让高优先级的用户交互能够快速响应。

### Fiber 核心概念深度解析

**Fiber 节点 - 核心数据结构：**
Fiber 节点是 Fiber 架构的核心数据结构，每个 React 元素对应一个 Fiber 节点。Fiber 节点包含了组件的所有信息：type（组件类型）、key（列表标识）、props（属性）、state（状态）、effectTag（副作用标记）等。Fiber 节点通过 return、child、sibling 三个指针形成链表树结构，return 指向父节点，child 指向第一个子节点，sibling 指向下一个兄弟节点。这种链表结构使得遍历可以在任意节点暂停和恢复，是实现可中断渲染的基础。

**双缓存技术 - 无闪烁更新：**
双缓存技术是 Fiber 架构的关键优化，React 同时维护两棵 Fiber 树：current 树（当前屏幕显示的树）和 workInProgress 树（正在构建的新树）。当 workInProgress 树构建完成后，React 只需要交换 rootFiber 的 current 指针，就能完成更新。这种技术避免了逐个节点更新导致的页面闪烁，同时支持回滚操作。双缓存还使得 React 能够在内存中完成所有计算后再一次性提交到 DOM，提高了渲染效率。

**调度器 - 智能任务管理：**
调度器（Scheduler）负责管理任务的优先级和执行时机。React 将任务分为不同优先级：Immediate（立即执行，如用户输入）、UserBlocking（用户阻塞级别）、Normal（普通级别）、Low（低优先级）、Idle（空闲时执行）。调度器使用时间分片技术，将大任务拆分为小任务，每个任务执行一段时间后检查是否需要让出主线程，避免阻塞用户交互。高优先级任务可以中断正在执行的低优先级任务，确保用户交互的流畅性。

### 代码示例

\`\`\`javascript
// Fiber 节点结构示意
const fiber = {
  type: 'div',           // 元素类型
  key: null,             // 列表 key
  props: {               // 属性
    className: 'container',
    children: []
  },
  stateNode: null,       // DOM 节点或组件实例
  
  // Fiber 树结构
  return: parentFiber,   // 父节点
  child: firstChildFiber, // 第一个子节点
  sibling: nextFiber,    // 下一个兄弟节点
  
  // 状态和副作用
  memoizedState: null,   // Hooks 链表
  memoizedProps: null,   // 上一次的 props
  pendingProps: props,   // 新的 props
  effectTag: 0,          // 副作用标记（Placement, Update, Deletion 等）
  flags: 0,              // 新版 React 使用 flags
  lanes: 0,              // 优先级标记
};

// useTransition 使用示例
function SearchComponent() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [isPending, startTransition] = useTransition();
  
  const handleSearch = (e) => {
    const value = e.target.value;
    
    // 立即更新输入框（高优先级）
    setQuery(value);
    
    // 将搜索结果更新标记为低优先级
    startTransition(() => {
      const filtered = largeDataList.filter(item => 
        item.name.toLowerCase().includes(value.toLowerCase())
      );
      setResults(filtered);
    });
  };
  
  return (
    <div>
      <input 
        type="text" 
        value={query} 
        onChange={handleSearch}
        placeholder="Search..."
      />
      {isPending && <span>Searching...</span>}
      <ResultList results={results} />
    </div>
  );
}

// useDeferredValue 使用示例
function DeferredList({ query }) {
  const deferredQuery = useDeferredValue(query);
  
  const results = useMemo(() => {
    return largeDataList.filter(item =>
      item.name.toLowerCase().includes(deferredQuery.toLowerCase())
    );
  }, [deferredQuery]);
  
  return (
    <div>
      {results.map(item => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  );
}

// Suspense 数据获取示例
function ProfilePage() {
  return (
    <Suspense fallback={<Loading />}>
      <ProfileDetails />
      <Suspense fallback={<PhotosSkeleton />}>
        <ProfilePhotos />
      </Suspense>
    </Suspense>
  );
}

// 使用 Suspense 的数据获取
function fetchProfileData(id) {
  let status = 'pending';
  let result;
  let suspender = fetchUser(id).then(
    (data) => {
      status = 'success';
      result = data;
    },
    (error) => {
      status = 'error';
      result = error;
    }
  );
  
  return {
    read() {
      if (status === 'pending') throw suspender;
      if (status === 'error') throw result;
      return result;
    }
  };
}

// Concurrent Feature 配置
const root = ReactDOM.createRoot(document.getElementById('root'), {
  // 启用并发特性
  concurrent: true,
});

// 自动批处理示例
function Form() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  
  // React 18 自动批处理这些更新
  const handleReset = () => {
    setFirstName('');
    setLastName('');
  };
  
  // 即使在异步操作中也会自动批处理
  const handleAsyncReset = async () => {
    await fetchData();
    setFirstName('');
    setLastName('');
    // 只会触发一次重新渲染
  };
  
  return (
    <form>
      <input value={firstName} onChange={e => setFirstName(e.target.value)} />
      <input value={lastName} onChange={e => setLastName(e.target.value)} />
      <button type="button" onClick={handleReset}>Reset</button>
    </form>
  );
}
\`\`\`

### 并发模式详解

React 18 引入的并发模式是 Fiber 架构的完整实现，它允许 React 同时处理多个更新，根据优先级智能调度。并发模式的核心特性包括：可中断渲染（渲染过程可以被暂停、恢复或放弃）、优先级调度（高优先级更新可以打断低优先级更新）、自动批处理（自动将多个状态更新合并为一次渲染）。并发模式不是一个新的特性，而是一套新的渲染机制，它让 React 应用能够更好地响应用户交互。

### 新特性应用场景

**Suspense - 异步渲染协调：**
Suspense 允许组件在等待异步数据时暂停渲染，显示加载状态，等数据准备好后再继续渲染。Suspense 可以嵌套使用，实现细粒度的加载状态控制。配合 React Server Components，Suspense 可以实现流式 SSR，提升首屏加载体验。

**useTransition - 交互优先级控制：**
useTransition 用于将某些更新标记为低优先级过渡更新，避免阻塞用户输入。适用于搜索过滤、列表排序等场景，让输入框保持流畅响应，同时后台进行计算。isPending 状态可以显示过渡进度，提升用户体验。

**useDeferredValue - 值更新延迟：**
useDeferredValue 用于延迟某个值的更新，先使用旧值渲染，等新值准备好后再更新。适用于大列表渲染、复杂计算等场景，可以避免输入时的卡顿。与 useTransition 不同，useDeferredValue 是基于值的延迟，而不是基于更新函数的延迟。`,
      createdAt: '2026-03-14',
      updatedAt: '2026-03-14'
    };
