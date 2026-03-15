import { KnowledgeItem } from '@/types/knowledge';

export const react_patterns: KnowledgeItem = {
      id: 'react-patterns',
      title: 'React 设计模式',
      category: 'react',
      difficulty: 'medium',
      tags: ['React', '设计模式', '最佳实践', '组件设计'],
      content: `## React 设计模式

React 设计模式是解决常见问题的可复用解决方案。掌握这些模式可以帮助你编写更清晰、更可维护、更高效的 React 代码。以下是 React 开发中常用的设计模式。

### 容器/展示模式 (Container/Presentational Pattern)

**概念：**
将组件分为两类：容器组件（处理逻辑和状态）和展示组件（只负责渲染 UI）。这种分离使得组件更易于理解和测试。

\`\`\`typescript
// 展示组件：只负责渲染 UI
interface UserListProps {
  users: User[];
  onSelect: (user: User) => void;
  isLoading: boolean;
}

function UserList({ users, onSelect, isLoading }: UserListProps) {
  if (isLoading) return <Spinner />;
  
  return (
    <ul>
      {users.map(user => (
        <li key={user.id} onClick={() => onSelect(user)}>
          {user.name}
        </li>
      ))}
    </ul>
  );
}

// 容器组件：处理逻辑和状态
function UserListContainer() {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  useEffect(() => {
    fetchUsers().then(data => {
      setUsers(data);
      setIsLoading(false);
    });
  }, []);

  const handleSelect = (user: User) => {
    setSelectedUser(user);
  };

  return (
    <div>
      <UserList users={users} onSelect={handleSelect} isLoading={isLoading} />
      {selectedUser && <UserDetails user={selectedUser} />}
    </div>
  );
}
\`\`\`

### 高阶组件模式 (Higher-Order Components)

**概念：**
高阶组件（HOC）是一个函数，接收一个组件并返回一个新组件。HOC 用于复用组件逻辑，是 React 中常用的代码复用模式。

\`\`\`typescript
// withLoading HOC：添加加载状态
function withLoading<P extends object>(
  WrappedComponent: React.ComponentType<P>
) {
  return function WithLoadingComponent({
    isLoading,
    ...props
  }: P & { isLoading: boolean }) {
    if (isLoading) {
      return <Spinner />;
    }
    return <WrappedComponent {...(props as P)} />;
  };
}

// withError HOC：添加错误处理
function withError<P extends object>(
  WrappedComponent: React.ComponentType<P>
) {
  return function WithErrorComponent({
    error,
    ...props
  }: P & { error: Error | null }) {
    if (error) {
      return <ErrorMessage error={error} />;
    }
    return <WrappedComponent {...(props as P)} />;
  };
}

// 组合使用
const EnhancedComponent = withError(withLoading(UserList));

// 使用
function App() {
  const { users, isLoading, error } = useUsers();
  
  return (
    <EnhancedComponent
      users={users}
      isLoading={isLoading}
      error={error}
    />
  );
}
\`\`\`

### Render Props 模式

**概念：**
Render Props 是一种在 React 组件之间共享代码的技术，使用一个值为函数的 prop 来动态决定渲染内容。

\`\`\`typescript
// Mouse 组件：跟踪鼠标位置
interface MouseProps {
  render: (state: { x: number; y: number }) => React.ReactNode;
}

class Mouse extends React.Component<MouseProps, { x: number; y: number }> {
  state = { x: 0, y: 0 };

  handleMouseMove = (e: React.MouseEvent) => {
    this.setState({ x: e.clientX, y: e.clientY });
  };

  render() {
    return (
      <div onMouseMove={this.handleMouseMove}>
        {this.props.render(this.state)}
      </div>
    );
  }
}

// 使用 render prop
function App() {
  return (
    <Mouse
      render={({ x, y }) => (
        <h1>Mouse position: {x}, {y}</h1>
      )}
    />
  );
}

// 使用 children 作为 render prop
interface MouseChildrenProps {
  children: (state: { x: number; y: number }) => React.ReactNode;
}

function MouseTracker({ children }: MouseChildrenProps) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <div onMouseMove={handleMouseMove}>
      {children(position)}
    </div>
  );
}

// 使用
<MouseTracker>
  {({ x, y }) => <p>Position: {x}, {y}</p>}
</MouseTracker>
\`\`\`

### 复合组件模式 (Compound Components)

**概念：**
复合组件是一组协同工作的组件，通过共享状态和逻辑提供更好的 API。用户可以通过组合这些组件来自定义布局和行为。

\`\`\`typescript
// Tabs 复合组件
const TabsContext = createContext<{
  activeTab: string;
  setActiveTab: (tab: string) => void;
} | null>(null);

function Tabs({ children, defaultTab }: { children: React.ReactNode; defaultTab: string }) {
  const [activeTab, setActiveTab] = useState(defaultTab);
  
  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab }}>
      {children}
    </TabsContext.Provider>
  );
}

function TabList({ children }: { children: React.ReactNode }) {
  return <div className="tab-list">{children}</div>;
}

function Tab({ children, id }: { children: React.ReactNode; id: string }) {
  const context = useContext(TabsContext);
  if (!context) throw new Error('Tab must be used within Tabs');
  
  const { activeTab, setActiveTab } = context;
  const isActive = activeTab === id;
  
  return (
    <button
      className={isActive ? 'active' : ''}
      onClick={() => setActiveTab(id)}
    >
      {children}
    </button>
  );
}

function TabPanel({ children, id }: { children: React.ReactNode; id: string }) {
  const context = useContext(TabsContext);
  if (!context) throw new Error('TabPanel must be used within Tabs');
  
  const { activeTab } = context;
  
  if (activeTab !== id) return null;
  
  return <div className="tab-panel">{children}</div>;
}

// 组合使用
function App() {
  return (
    <Tabs defaultTab="overview">
      <TabList>
        <Tab id="overview">Overview</Tab>
        <Tab id="details">Details</Tab>
        <Tab id="settings">Settings</Tab>
      </TabList>
      <TabPanel id="overview">
        <Overview />
      </TabPanel>
      <TabPanel id="details">
        <Details />
      </TabPanel>
      <TabPanel id="settings">
        <Settings />
      </TabPanel>
    </Tabs>
  );
}
\`\`\`

### 自定义 Hooks 模式

**概念：**
将组件逻辑提取到可重用的函数中，是 React 函数组件时代最推荐的代码复用方式。

\`\`\`typescript
// useToggle Hook
function useToggle(initialValue: boolean = false): [boolean, () => void] {
  const [value, setValue] = useState(initialValue);
  const toggle = useCallback(() => setValue(v => !v), []);
  return [value, toggle];
}

// useLocalStorage Hook
function useLocalStorage<T>(
  key: string,
  initialValue: T
): [T, (value: T | ((val: T) => T)) => void] {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch {
      return initialValue;
    }
  });

  const setValue = (value: T | ((val: T) => T)) => {
    const valueToStore = value instanceof Function ? value(storedValue) : value;
    setStoredValue(valueToStore);
    window.localStorage.setItem(key, JSON.stringify(valueToStore));
  };

  return [storedValue, setValue];
}

// 使用
function App() {
  const [isDark, toggleDark] = useToggle(false);
  const [name, setName] = useLocalStorage('name', 'Guest');
  
  return (
    <div className={isDark ? 'dark' : 'light'}>
      <input value={name} onChange={e => setName(e.target.value)} />
      <button onClick={toggleDark}>Toggle Theme</button>
    </div>
  );
}
\`\`\`

### Provider 模式

**概念：**
使用 Context Provider 在组件树中共享状态，避免 prop drilling。

\`\`\`typescript
// Theme Provider
const ThemeContext = createContext<{
  theme: 'light' | 'dark';
  toggleTheme: () => void;
} | null>(null);

function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  
  const toggleTheme = useCallback(() => {
    setTheme(t => t === 'light' ? 'dark' : 'light');
  }, []);
  
  const value = useMemo(() => ({ theme, toggleTheme }), [theme, toggleTheme]);
  
  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within ThemeProvider');
  return context;
}

// 使用
function App() {
  return (
    <ThemeProvider>
      <Layout />
    </ThemeProvider>
  );
}

function ThemedButton() {
  const { theme, toggleTheme } = useTheme();
  return (
    <button
      className={theme === 'dark' ? 'dark-button' : 'light-button'}
      onClick={toggleTheme}
    >
      Toggle Theme
    </button>
  );
}
\`\`\``,
      createdAt: '2026-03-15',
      updatedAt: '2026-03-15'
    };
