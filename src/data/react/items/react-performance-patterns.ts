import { KnowledgeItem } from '@/types/knowledge';

export const react_performance_patterns: KnowledgeItem = {
      id: 'react-performance-patterns',
      title: 'React 性能优化模式',
      category: 'react',
      difficulty: 'hard',
      tags: ['React', '性能优化', 'memo', '虚拟列表', '懒加载'],
      content: `## React 性能优化模式

性能优化是 React 应用开发中的重要环节。理解 React 的渲染机制和性能优化模式，可以帮助你构建更快、更流畅的用户界面。本文将介绍 React 中常用的性能优化技术和模式。

### React 渲染机制

**渲染触发条件：**
React 组件在以下情况下会重新渲染：
1. 组件自身的 state 发生变化
2. 父组件重新渲染（子组件会随之重新渲染）
3. Context 值发生变化，消费该 Context 的组件会重新渲染

\`\`\`typescript
function Parent() {
  const [count, setCount] = useState(0);
  
  console.log('Parent renders');
  
  return (
    <div>
      <button onClick={() => setCount(c => c + 1)}>Count: {count}</button>
      <Child /> {/* 每次 Parent 渲染，Child 也会渲染 */}
    </div>
  );
}

function Child() {
  console.log('Child renders');
  return <div>Child</div>;
}
\`\`\`

### React.memo 优化

**基础用法：**
React.memo 是一个高阶组件，用于避免函数组件的不必要重新渲染。

\`\`\`typescript
import { memo } from 'react';

// 使用 React.memo 包裹组件
const Child = memo(function Child({ name }: { name: string }) {
  console.log('Child renders');
  return <div>{name}</div>;
});

// 自定义比较函数
const UserCard = memo(
  function UserCard({ user }: { user: User }) {
    return <div>{user.name}</div>;
  },
  (prevProps, nextProps) => {
    // 返回 true 表示不需要重新渲染
    return prevProps.user.id === nextProps.user.id;
  }
);
\`\`\`

**注意事项：**
React.memo 只进行浅比较，对于对象和函数 props 需要特别注意。

\`\`\`typescript
function Parent() {
  const [count, setCount] = useState(0);
  
  // ❌ 每次渲染都创建新的对象和函数
  const style = { color: 'red' };
  const handleClick = () => console.log('clicked');
  
  return (
    <div>
      <button onClick={() => setCount(c => c + 1)}>{count}</button>
      {/* 即使使用 memo，Child 仍会重新渲染 */}
      <Child style={style} onClick={handleClick} />
    </div>
  );
}

// ✅ 使用 useMemo 和 useCallback
function Parent() {
  const [count, setCount] = useState(0);
  
  const style = useMemo(() => ({ color: 'red' }), []);
  const handleClick = useCallback(() => console.log('clicked'), []);
  
  return (
    <div>
      <button onClick={() => setCount(c => c + 1)}>{count}</button>
      <Child style={style} onClick={handleClick} />
    </div>
  );
}
\`\`\`

### useMemo 和 useCallback

**useMemo：缓存计算结果：**
useMemo 用于缓存计算昂贵的值。

\`\`\`typescript
function UserList({ users, filter, sortBy }) {
  // 缓存过滤和排序结果
  const filteredUsers = useMemo(() => {
    console.log('Computing filtered users');
    return users
      .filter(u => u.name.includes(filter))
      .sort((a, b) => {
        if (sortBy === 'name') return a.name.localeCompare(b.name);
        return a.email.localeCompare(b.email);
      });
  }, [users, filter, sortBy]);
  
  return (
    <ul>
      {filteredUsers.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}

// 缓存复杂对象
function Form() {
  const initialValues = useMemo(() => ({
    name: '',
    email: '',
    preferences: {
      theme: 'light',
      notifications: true,
    },
  }), []);
  
  return <Formik initialValues={initialValues} />;
}
\`\`\`

**useCallback：缓存函数：**
useCallback 用于缓存函数引用。

\`\`\`typescript
function Parent() {
  const [count, setCount] = useState(0);
  const [items, setItems] = useState([]);
  
  // 缓存事件处理函数
  const handleAdd = useCallback(() => {
    setItems(prev => [...prev, \`Item \${prev.length + 1}\`]);
  }, []);
  
  // 带依赖的回调
  const handleRemove = useCallback((id: string) => {
    setItems(prev => prev.filter(item => item.id !== id));
  }, []);
  
  return (
    <div>
      <button onClick={() => setCount(c => c + 1)}>Count: {count}</button>
      <ItemList items={items} onAdd={handleAdd} onRemove={handleRemove} />
    </div>
  );
}

const ItemList = memo(function ItemList({ 
  items, 
  onAdd, 
  onRemove 
}: ItemListProps) {
  return (
    <div>
      <button onClick={onAdd}>Add Item</button>
      {items.map(item => (
        <Item key={item.id} item={item} onRemove={onRemove} />
      ))}
    </div>
  );
});
\`\`\`

### 列表虚拟化

**react-window：**
对于长列表，使用虚拟列表只渲染可见区域的元素。

\`\`\`typescript
import { FixedSizeList, VariableSizeList } from 'react-window';

// 固定高度的虚拟列表
function VirtualUserList({ users }: { users: User[] }) {
  const Row = ({ index, style }: { index: number; style: React.CSSProperties }) => (
    <div style={style} className="user-row">
      <img src={users[index].avatar} alt="" />
      <span>{users[index].name}</span>
    </div>
  );
  
  return (
    <FixedSizeList
      height={400}
      itemCount={users.length}
      itemSize={50}
      width="100%"
    >
      {Row}
    </FixedSizeList>
  );
}

// 可变高度的虚拟列表
function VariableHeightList({ items }: { items: Item[] }) {
  const getItemSize = (index: number) => {
    // 根据内容计算高度
    return Math.max(50, items[index].content.length / 2);
  };
  
  return (
    <VariableSizeList
      height={400}
      itemCount={items.length}
      itemSize={getItemSize}
      width="100%"
    >
      {({ index, style }) => (
        <div style={style}>
          {items[index].content}
        </div>
      )}
    </VariableSizeList>
  );
}
\`\`\`

### 代码分割与懒加载

**路由级别分割：**
使用 React.lazy 和 Suspense 实现路由级别的代码分割。

\`\`\`typescript
import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const Home = lazy(() => import('./pages/Home'));
const Dashboard = lazy(() => import('./pages/Dashboard'));
const Settings = lazy(() => import('./pages/Settings'));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
\`\`\`

**组件级别分割：**
对大型组件进行懒加载。

\`\`\`typescript
import { lazy, Suspense } from 'react';

const HeavyChart = lazy(() => import('./HeavyChart'));
const RichTextEditor = lazy(() => import('./RichTextEditor'));

function Dashboard() {
  const [showChart, setShowChart] = useState(false);
  
  return (
    <div>
      <button onClick={() => setShowChart(true)}>Show Chart</button>
      {showChart && (
        <Suspense fallback={<ChartSkeleton />}>
          <HeavyChart />
        </Suspense>
      )}
    </div>
  );
}
\`\`\`

### 状态更新优化

**批量更新：**
React 18 自动批量处理状态更新。

\`\`\`typescript
function Form() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  
  // React 18 会自动批量处理这些更新
  const handleReset = () => {
    setFirstName('');
    setLastName('');
    setEmail('');
    // 只触发一次重新渲染
  };
  
  return (
    <form>
      <input value={firstName} onChange={e => setFirstName(e.target.value)} />
      <input value={lastName} onChange={e => setLastName(e.target.value)} />
      <input value={email} onChange={e => setEmail(e.target.value)} />
      <button type="button" onClick={handleReset}>Reset</button>
    </form>
  );
}
\`\`\`

**使用函数式更新：**
避免依赖当前状态进行更新。

\`\`\`typescript
// ❌ 不好：依赖当前状态
const increment = () => setCount(count + 1);

// ✅ 好：使用函数式更新
const increment = () => setCount(c => c + 1);

// 批量更新时特别重要
const addMultiple = () => {
  setCount(c => c + 1);
  setCount(c => c + 1);
  setCount(c => c + 1);
  // 结果是 count + 3
};
\`\`\``,
      createdAt: '2026-03-15',
      updatedAt: '2026-03-15'
    };
