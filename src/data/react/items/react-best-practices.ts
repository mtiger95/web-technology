import { KnowledgeItem } from '@/types/knowledge';

export const react_best_practices: KnowledgeItem = {
      id: 'react-best-practices',
      title: 'React 最佳实践',
      category: 'react',
      difficulty: 'medium',
      tags: ['React', '最佳实践', '代码质量', '性能优化'],
      content: `## React 最佳实践

遵循 React 最佳实践可以帮助你编写更清晰、更高效、更可维护的代码。本文总结了 React 开发中最重要的最佳实践，涵盖组件设计、状态管理、性能优化、代码组织等方面。

### 组件设计原则

**单一职责原则：**
每个组件应该只负责一个功能，保持组件的简单和可复用。

\`\`\`typescript
// ❌ 不好：组件职责过多
function UserDashboard() {
  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState('');
  const [sort, setSort] = useState('name');
  
  useEffect(() => {
    fetchUsers().then(setUsers);
  }, []);
  
  const filteredUsers = users
    .filter(u => u.name.includes(filter))
    .sort((a, b) => a[sort] > b[sort] ? 1 : -1);
  
  return (
    <div>
      <input value={filter} onChange={e => setFilter(e.target.value)} />
      <select value={sort} onChange={e => setSort(e.target.value)}>
        <option value="name">Name</option>
        <option value="email">Email</option>
      </select>
      <ul>
        {filteredUsers.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

// ✅ 好：拆分职责
function UserDashboard() {
  const { users, isLoading } = useUsers();
  
  return (
    <div>
      <UserFilter />
      <UserList users={users} isLoading={isLoading} />
    </div>
  );
}

function UserFilter() {
  const { filter, setFilter, sort, setSort } = useUserFilter();
  
  return (
    <div>
      <input value={filter} onChange={e => setFilter(e.target.value)} />
      <select value={sort} onChange={e => setSort(e.target.value)}>
        <option value="name">Name</option>
        <option value="email">Email</option>
      </select>
    </div>
  );
}

function UserList({ users, isLoading }: UserListProps) {
  if (isLoading) return <Spinner />;
  
  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
\`\`\`

**组件组合优于继承：**
使用组合模式而非继承来复用组件逻辑。

\`\`\`typescript
// ❌ 不好：使用继承
class Button extends BaseButton {
  render() {
    return <button>{this.props.children}</button>;
  }
}

// ✅ 好：使用组合
function Card({ children, header, footer }: CardProps) {
  return (
    <div className="card">
      {header && <div className="card-header">{header}</div>}
      <div className="card-body">{children}</div>
      {footer && <div className="card-footer">{footer}</div>}
    </div>
  );
}

// 使用
<Card
  header={<h2>Title</h2>}
  footer={<Button>Submit</Button>}
>
  <p>Content</p>
</Card>
\`\`\`

### 状态管理最佳实践

**状态最小化：**
只存储必要的状态，能计算得出的状态不要存储。

\`\`\`typescript
// ❌ 不好：存储冗余状态
function TodoList() {
  const [todos, setTodos] = useState([]);
  const [completedCount, setCompletedCount] = useState(0);
  
  const toggleTodo = (id) => {
    setTodos(todos.map(t => 
      t.id === id ? { ...t, completed: !t.completed } : t
    ));
    setCompletedCount(todos.filter(t => t.completed).length);
  };
}

// ✅ 好：派生状态
function TodoList() {
  const [todos, setTodos] = useState([]);
  
  const completedCount = useMemo(
    () => todos.filter(t => t.completed).length,
    [todos]
  );
  
  const toggleTodo = (id) => {
    setTodos(todos.map(t => 
      t.id === id ? { ...t, completed: !t.completed } : t
    ));
  };
}
\`\`\`

**状态提升：**
将共享状态提升到最近的共同父组件。

\`\`\`typescript
// ❌ 不好：重复状态
function Parent() {
  return (
    <>
      <ChildA /> {/* 内部有 selectedUser 状态 */}
      <ChildB /> {/* 内部也有 selectedUser 状态 */}
    </>
  );
}

// ✅ 好：状态提升
function Parent() {
  const [selectedUser, setSelectedUser] = useState(null);
  
  return (
    <>
      <ChildA selectedUser={selectedUser} onSelect={setSelectedUser} />
      <ChildB selectedUser={selectedUser} />
    </>
  );
}
\`\`\`

### 性能优化最佳实践

**避免不必要的重新渲染：**
使用 React.memo、useMemo、useCallback 优化性能。

\`\`\`typescript
import { memo, useMemo, useCallback } from 'react';

// 使用 memo 避免子组件不必要渲染
const ExpensiveComponent = memo(function ExpensiveComponent({ data }) {
  return <div>{/* 复杂渲染 */}</div>;
});

// 使用 useMemo 缓存计算结果
function UserList({ users, filter }) {
  const filteredUsers = useMemo(() => {
    return users.filter(u => u.name.includes(filter));
  }, [users, filter]);
  
  return <List items={filteredUsers} />;
}

// 使用 useCallback 缓存回调函数
function Parent() {
  const [count, setCount] = useState(0);
  
  const handleClick = useCallback(() => {
    console.log('clicked');
  }, []);
  
  return <Child onClick={handleClick} />;
}
\`\`\`

**列表渲染优化：**
使用稳定的 key 和虚拟列表优化长列表渲染。

\`\`\`typescript
// ❌ 不好：使用索引作为 key
{items.map((item, index) => (
  <Item key={index} {...item} />
))}

// ✅ 好：使用稳定的 ID 作为 key
{items.map(item => (
  <Item key={item.id} {...item} />
))}

// 使用虚拟列表
import { FixedSizeList } from 'react-window';

function VirtualList({ items }) {
  const Row = ({ index, style }) => (
    <div style={style}>
      {items[index].name}
    </div>
  );
  
  return (
    <FixedSizeList
      height={400}
      itemCount={items.length}
      itemSize={35}
      width="100%"
    >
      {Row}
    </FixedSizeList>
  );
}
\`\`\`

### 代码组织最佳实践

**按功能组织代码：**
按功能模块组织代码，而不是按文件类型。

\`\`\`
src/
  features/
    auth/
      components/
        LoginForm.tsx
        RegisterForm.tsx
      hooks/
        useAuth.ts
      api/
        authApi.ts
      types.ts
      index.ts
    users/
      components/
        UserList.tsx
        UserDetail.tsx
      hooks/
        useUsers.ts
      api/
        usersApi.ts
      types.ts
      index.ts
  shared/
    components/
      Button.tsx
      Input.tsx
    hooks/
      useLocalStorage.ts
    utils/
      formatDate.ts
\`\`\`

**使用 barrel exports：**
使用 index.ts 统一导出模块。

\`\`\`typescript
// features/auth/index.ts
export { LoginForm } from './components/LoginForm';
export { RegisterForm } from './components/RegisterForm';
export { useAuth } from './hooks/useAuth';
export type { User, AuthState } from './types';

// 使用
import { LoginForm, useAuth, type User } from '@/features/auth';
\`\`\`

### 错误处理最佳实践

**使用 Error Boundary：**
使用 Error Boundary 捕获渲染错误。

\`\`\`typescript
class ErrorBoundary extends React.Component {
  state = { hasError: false };
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    logErrorToService(error, errorInfo);
  }
  
  render() {
    if (this.state.hasError) {
      return <ErrorFallback />;
    }
    return this.props.children;
  }
}

// 使用
<ErrorBoundary>
  <App />
</ErrorBoundary>
\`\`\`

**处理异步错误：**
正确处理异步操作中的错误。

\`\`\`typescript
// ❌ 不好：未处理错误
useEffect(() => {
  fetchData().then(setData);
}, []);

// ✅ 好：处理错误
useEffect(() => {
  async function loadData() {
    try {
      const data = await fetchData();
      setData(data);
    } catch (error) {
      setError(error);
    }
  }
  loadData();
}, []);
\`\`\``,
      createdAt: '2026-03-15',
      updatedAt: '2026-03-15'
    };
