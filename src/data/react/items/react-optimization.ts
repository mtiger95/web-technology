import { KnowledgeItem } from '@/types/knowledge';

export const react_optimization: KnowledgeItem = {
      id: 'react-optimization',
      title: 'React 性能优化最佳实践',
      category: 'react',
      difficulty: 'medium',
      tags: ['React', '性能优化', '渲染', '内存'],
      content: `## React 性能优化最佳实践

React 应用的性能直接影响用户体验，性能优化是前端开发中不可忽视的重要环节。React 提供了多种优化手段，从渲染优化、状态管理到代码分割，合理运用这些技术可以显著提升应用的响应速度和流畅度。

### 渲染优化核心策略

**React.memo - 组件级缓存：**
React.memo 是一个高阶组件，用于缓存函数组件的渲染结果。当组件接收相同的 props 时，React.memo 会跳过渲染，直接复用上次的结果。React.memo 接受一个可选的比较函数作为第二个参数，可以自定义 props 比较逻辑。需要注意的是，React.memo 只进行浅比较，如果 props 包含对象或数组，需要确保引用稳定性。React.memo 适用于纯展示组件、接收复杂 props 的组件、以及渲染开销较大的组件。

**useMemo 和 useCallback - 值和函数缓存：**
useMemo 用于缓存计算结果，避免在每次渲染时重复执行昂贵的计算。useCallback 用于缓存函数引用，避免在每次渲染时创建新的函数实例。两者都接受依赖数组，只有当依赖项变化时才重新计算。useMemo 和 useCallback 本身也有开销，应该根据实际场景权衡使用。对于简单的计算或不需要传递给子组件的函数，可能不需要缓存。

**避免渲染中的对象和函数创建：**
在组件渲染中直接创建对象或函数会导致每次渲染都创建新的引用，这会破坏 React.memo 和 useEffect 的依赖检查。解决方案包括：将静态对象和函数移到组件外部、使用 useMemo 缓存对象、使用 useCallback 缓存函数、使用状态管理库管理复杂状态。

### 代码示例

\`\`\`javascript
// React.memo 基础用法
const MemoizedComponent = React.memo(function UserCard({ user, onSelect }) {
  return (
    <div className="user-card" onClick={() => onSelect(user.id)}>
      <img src={user.avatar} alt={user.name} />
      <h3>{user.name}</h3>
      <p>{user.email}</p>
    </div>
  );
});

// 自定义比较函数
const UserCard = React.memo(
  function UserCard({ user, onSelect }) {
    return <div>{user.name}</div>;
  },
  (prevProps, nextProps) => {
    // 返回 true 表示不需要重新渲染
    return prevProps.user.id === nextProps.user.id &&
           prevProps.user.name === nextProps.user.name;
  }
);

// useMemo 缓存计算结果
function UserList({ users, filterText }) {
  // 只有当 users 或 filterText 变化时才重新过滤
  const filteredUsers = useMemo(() => {
    console.log('Filtering users...');
    return users.filter(user =>
      user.name.toLowerCase().includes(filterText.toLowerCase())
    );
  }, [users, filterText]);
  
  // 缓存排序结果
  const sortedUsers = useMemo(() => {
    return [...filteredUsers].sort((a, b) => a.name.localeCompare(b.name));
  }, [filteredUsers]);
  
  return (
    <ul>
      {sortedUsers.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}

// useCallback 缓存函数
function ParentComponent() {
  const [count, setCount] = useState(0);
  const [items, setItems] = useState([]);
  
  // 缓存事件处理函数
  const handleClick = useCallback(() => {
    setCount(prev => prev + 1);
  }, []);
  
  // 缓存带参数的回调
  const handleItemDelete = useCallback((id) => {
    setItems(prev => prev.filter(item => item.id !== id));
  }, []);
  
  // 缓存复杂对象
  const config = useMemo(() => ({
    theme: 'dark',
    locale: 'zh-CN',
    onAction: handleItemClick
  }), [handleItemClick]);
  
  return (
    <div>
      <ChildComponent onClick={handleClick} config={config} />
      <ItemList items={items} onDelete={handleItemDelete} />
    </div>
  );
}

// 避免内联对象和函数
// ❌ 不好的做法
function BadExample({ users }) {
  return (
    <div>
      {users.map(user => (
        <UserCard
          key={user.id}
          user={user}
          // 每次渲染都创建新的对象和函数
          config={{ theme: 'dark' }}
          onClick={() => console.log(user.id)}
        />
      ))}
    </div>
  );
}

// ✅ 好的做法
function GoodExample({ users }) {
  const config = useMemo(() => ({ theme: 'dark' }), []);
  
  const handleClick = useCallback((userId) => {
    console.log(userId);
  }, []);
  
  return (
    <div>
      {users.map(user => (
        <UserCard
          key={user.id}
          user={user}
          config={config}
          onClick={handleClick}
        />
      ))}
    </div>
  );
}

// 代码分割 - React.lazy
const Dashboard = React.lazy(() => import('./Dashboard'));
const Settings = React.lazy(() => import('./Settings'));

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Suspense>
  );
}

// 虚拟列表优化
import { FixedSizeList } from 'react-window';

function VirtualizedList({ items }) {
  const Row = ({ index, style }) => (
    <div style={style}>
      {items[index].name}
    </div>
  );
  
  return (
    <FixedSizeList
      height={400}
      width="100%"
      itemCount={items.length}
      itemSize={50}
    >
      {Row}
    </FixedSizeList>
  );
}

// 状态更新优化
function OptimizedUpdates() {
  const [items, setItems] = useState([]);
  
  // 使用函数式更新避免依赖 items
  const addItem = useCallback((item) => {
    setItems(prev => [...prev, item]);
  }, []);
  
  // 批量更新
  const addMultipleItems = useCallback((newItems) => {
    setItems(prev => [...prev, ...newItems]);
  }, []);
  
  // 使用 immer 进行不可变更新
  const updateItem = useCallback((id, updates) => {
    setItems(produce(draft => {
      const item = draft.find(i => i.id === id);
      if (item) Object.assign(item, updates);
    }));
  }, []);
  
  return <ItemList items={items} onAdd={addItem} />;
}

// 清理副作用防止内存泄漏
function DataFetcher({ url }) {
  const [data, setData] = useState(null);
  
  useEffect(() => {
    const controller = new AbortController();
    
    async function fetchData() {
      try {
        const response = await fetch(url, {
          signal: controller.signal
        });
        const json = await response.json();
        setData(json);
      } catch (error) {
        if (error.name !== 'AbortError') {
          console.error(error);
        }
      }
    }
    
    fetchData();
    
    return () => {
      controller.abort();
    };
  }, [url]);
  
  return data ? <DataDisplay data={data} /> : <Loading />;
}
\`\`\`

### 状态管理优化

**状态提升与下沉：**
状态提升是指将状态移动到最近的共同父组件，状态下沉是指将状态移动到使用它的组件中。合理的状态位置可以减少不必要的渲染，简化数据流。对于多个组件共享的状态，应该提升到最近的共同父组件；对于只有一个组件使用的状态，应该下沉到该组件中。

**不可变数据更新：**
React 依赖引用比较来检测状态变化，直接修改状态会导致 React 无法检测到变化。使用展开运算符、Object.assign 或 immer 库进行不可变更新，确保每次更新都创建新的引用。immer 库提供了更直观的 API，可以在修改草稿的同时保持不可变性。

**批量更新机制：**
React 18 引入了自动批处理，将多个状态更新合并为一次渲染。在事件处理器、setTimeout、Promise、原生事件处理器中的更新都会自动批处理。对于需要立即更新的场景，可以使用 flushSync 强制同步更新。

### 其他优化策略

**代码分割：**
使用 React.lazy 和 Suspense 实现组件级别的代码分割，按路由或功能模块分割代码，减少初始加载体积。对于大型组件库，可以使用命名导出进行更细粒度的分割。

**虚拟列表：**
对于长列表渲染，使用 react-window 或 react-virtualized 实现虚拟列表，只渲染可视区域的项目，大幅减少 DOM 节点数量。虚拟列表适用于数据量大于 100 条的场景。

**内存管理：**
及时清理定时器、事件监听器、订阅等资源，避免内存泄漏。使用 useEffect 的清理函数处理副作用清理。对于大型数据缓存，考虑使用 WeakMap 和 WeakSet，允许垃圾回收器自动清理不再使用的引用。`,
      createdAt: '2026-03-14',
      updatedAt: '2026-03-14'
    };
