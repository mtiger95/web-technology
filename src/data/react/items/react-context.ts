import { KnowledgeItem } from '@/types/knowledge';

export const react_context: KnowledgeItem = {
      id: 'react-context',
      title: 'React Context API 深入理解',
      category: 'react',
      difficulty: 'medium',
      tags: ['React', 'Context', '状态管理', '跨组件通信'],
      content: `## React Context API 深入理解

Context API 是 React 提供的一种跨组件层级传递数据的方式，避免了 props 逐层传递的问题。理解 Context 的工作原理、使用场景和性能优化对于构建大型 React 应用至关重要。Context 适合共享那些对于组件树来说全局的数据，比如主题、用户信息、语言设置等。

### Context 基础概念

**创建 Context：**
React.createContext() 用于创建一个 Context 对象，可以传入默认值作为参数。当组件所处的树中没有匹配的 Provider 时，默认值会被使用。默认值只在组件树中没有匹配 Provider 时生效，不会在 Provider 的 value 为 undefined 时生效。

\`\`\`typescript
// 创建 Context
import { createContext } from 'react';

// 定义 Context 类型
interface ThemeContextType {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

// 创建带默认值的 Context
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// 创建不带默认值的 Context（使用 undefined 作为默认值）
const UserContext = createContext<{
  user: User | null;
  setUser: (user: User | null) => void;
} | undefined>(undefined);
\`\`\`

**Provider 组件：**
Context.Provider 用于在组件树中提供 Context 的值。Provider 接收一个 value 属性，传递给消费组件。一个 Provider 可以关联多个消费组件，Provider 组件可以嵌套使用，内层会覆盖外层的数据。

\`\`\`typescript
import { useState, ReactNode } from 'react';

interface ThemeProviderProps {
  children: ReactNode;
}

function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  
  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };
  
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
\`\`\`

**消费 Context：**
消费 Context 有两种方式：useContext Hook 和 Context.Consumer 组件。useContext 是函数组件推荐的方式，更简洁易用；Context.Consumer 主要用于类组件或需要更复杂逻辑的场景。

\`\`\`typescript
import { useContext } from 'react';

// 使用 useContext Hook
function ThemedButton() {
  const context = useContext(ThemeContext);
  
  if (!context) {
    throw new Error('ThemedButton must be used within a ThemeProvider');
  }
  
  const { theme, toggleTheme } = context;
  
  return (
    <button
      onClick={toggleTheme}
      style={{ background: theme === 'light' ? '#fff' : '#333' }}
    >
      Toggle Theme
    </button>
  );
}

// 使用 Context.Consumer（类组件或特殊场景）
class ThemedButtonClass extends React.Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {({ theme, toggleTheme }) => (
          <button
            onClick={toggleTheme}
            style={{ background: theme === 'light' ? '#fff' : '#333' }}
          >
            Toggle Theme
          </button>
        )}
      </ThemeContext.Consumer>
    );
  }
}
\`\`\`

### Context 性能优化

**问题：Context 更新会导致所有消费组件重新渲染**
当 Provider 的 value 发生变化时，所有消费该 Context 的组件都会重新渲染，即使它们只使用了 value 中的一部分数据。这可能导致不必要的性能开销。

\`\`\`typescript
// ❌ 问题：整个对象变化导致所有消费者重新渲染
function App() {
  const [user, setUser] = useState({ name: 'Alice', age: 25 });
  const [theme, setTheme] = useState('light');
  
  return (
    <AppContext.Provider value={{ user, setUser, theme, setTheme }}>
      <UserProfile /> {/* 只使用 user */}
      <ThemeToggle /> {/* 只使用 theme */}
    </AppContext.Provider>
  );
}

// 当 user 或 theme 任一变化时，UserProfile 和 ThemeToggle 都会重新渲染
\`\`\`

**解决方案1：拆分 Context**
将不同类型的数据拆分到不同的 Context 中，避免不必要的重新渲染。

\`\`\`typescript
// ✅ 拆分 Context
const UserContext = createContext<{
  user: User;
  setUser: (user: User) => void;
} | undefined>(undefined);

const ThemeContext = createContext<{
  theme: string;
  setTheme: (theme: string) => void;
} | undefined>(undefined);

function App() {
  const [user, setUser] = useState({ name: 'Alice', age: 25 });
  const [theme, setTheme] = useState('light');
  
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <UserProfile /> {/* 只订阅 UserContext */}
        <ThemeToggle /> {/* 只订阅 ThemeContext */}
      </ThemeContext.Provider>
    </UserContext.Provider>
  );
}
\`\`\`

**解决方案2：使用 useMemo 优化 value**
使用 useMemo 缓存 Provider 的 value，避免每次渲染都创建新的对象引用。

\`\`\`typescript
import { useMemo } from 'react';

function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  
  // ✅ 使用 useMemo 缓存 value
  const value = useMemo(() => ({
    theme,
    setTheme,
  }), [theme]);
  
  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}
\`\`\`

**解决方案3：使用状态选择器模式**
实现类似 Redux 的 selector 模式，让组件只订阅它需要的数据。

\`\`\`typescript
import { createContext, useContext, useMemo, useCallback } from 'react';

interface AppState {
  user: { name: string; age: number };
  theme: 'light' | 'dark';
  notifications: Notification[];
}

const AppContext = createContext<AppState | undefined>(undefined);

// 创建选择器 Hook
function useAppSelector<T>(selector: (state: AppState) => T): T {
  const state = useContext(AppContext);
  if (!state) throw new Error('useAppSelector must be used within AppProvider');
  return selector(state);
}

// 使用选择器
function UserName() {
  // 只订阅 user.name，其他状态变化不会触发重新渲染
  const name = useAppSelector(state => state.user.name);
  return <span>{name}</span>;
}

function ThemeToggle() {
  const theme = useAppSelector(state => state.theme);
  return <button>{theme}</button>;
}
\`\`\`

### Context 最佳实践

**1. 提供自定义 Hook 封装 Context 访问**
创建自定义 Hook 封装 Context 的访问逻辑，提供更好的类型安全和错误处理。

\`\`\`typescript
// 创建自定义 Hook
function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

// 使用自定义 Hook
function ThemedButton() {
  const { theme, toggleTheme } = useTheme();
  return <button onClick={toggleTheme}>{theme}</button>;
}
\`\`\`

**2. 组合多个 Provider**
创建一个组合 Provider 组件，简化应用的 Provider 嵌套。

\`\`\`typescript
function AppProviders({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider>
      <UserProvider>
        <NotificationProvider>
          {children}
        </NotificationProvider>
      </UserProvider>
    </ThemeProvider>
  );
}

// 在应用入口使用
function App() {
  return (
    <AppProviders>
      <Router>
        <Routes />
      </Router>
    </AppProviders>
  );
}
\`\`\`

**3. 避免在 Context 中存储频繁变化的数据**
Context 适合存储相对稳定的全局数据，对于频繁变化的数据（如表单输入），应该使用状态管理库或组件内部状态。

\`\`\`typescript
// ❌ 避免：频繁变化的表单数据
const FormContext = createContext({
  formData: { ... },
  updateField: () => {}
});

// ✅ 推荐：使用组件内部状态或状态管理库
function Form() {
  const [formData, setFormData] = useState({});
  // ...
}
\`\`\`

**4. 使用 Context 做依赖注入**
Context 可以用于依赖注入，方便测试和模块解耦。

\`\`\`typescript
interface ApiService {
  getUser: (id: string) => Promise<User>;
  updateUser: (user: User) => Promise<void>;
}

const ApiContext = createContext<ApiService | undefined>(undefined);

// 生产环境 Provider
function ProductionApiProvider({ children }: { children: ReactNode }) {
  const api = useMemo(() => ({
    getUser: (id) => fetch(\`/api/users/\${id}\`).then(r => r.json()),
    updateUser: (user) => fetch('/api/users', { method: 'PUT', body: JSON.stringify(user) }),
  }), []);
  
  return <ApiContext.Provider value={api}>{children}</ApiContext.Provider>;
}

// 测试环境 Provider
function MockApiProvider({ children, mockApi }: { children: ReactNode; mockApi: ApiService }) {
  return <ApiContext.Provider value={mockApi}>{children}</ApiContext.Provider>;
}
\`\`\``,
      createdAt: '2026-03-15',
      updatedAt: '2026-03-15'
    };
