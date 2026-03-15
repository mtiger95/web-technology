import { KnowledgeItem } from '@/types/knowledge';

export const react_architecture: KnowledgeItem = {
      id: 'react-architecture',
      title: 'React 应用架构设计最佳实践',
      category: 'react',
      difficulty: 'hard',
      tags: ['React', '架构', '设计模式', ' scalability'],
      content: `## React 应用架构设计最佳实践

良好的架构是 React 应用可维护性和可扩展性的关键。一个优秀的 React 应用架构应该遵循关注点分离、单一职责、高内聚低耦合等原则，同时考虑团队协作、代码可维护性和长期演进能力。

### 文件夹结构

**按功能组织（Feature-based）：**
- 按业务功能划分文件夹，每个功能模块独立管理
- 每个功能包含相关的组件、hooks、utils、types、styles
- 提高代码的内聚性，便于功能开发和维护
- 适合中大型应用，支持团队并行开发

\`\`\`
src/
├── features/
│   ├── auth/
│   │   ├── components/
│   │   │   ├── LoginForm.tsx
│   │   │   └── RegisterForm.tsx
│   │   ├── hooks/
│   │   │   └── useAuth.ts
│   │   ├── api/
│   │   │   └── authApi.ts
│   │   ├── types/
│   │   │   └── auth.types.ts
│   │   └── index.ts
│   ├── dashboard/
│   └── profile/
├── shared/
│   ├── components/
│   ├── hooks/
│   └── utils/
└── App.tsx
\`\`\`

**按类型组织（Type-based）：**
- 按组件、hooks、utils 等类型划分
- 适合小型应用和快速原型开发
- 易于找到特定类型的文件
- 缺点是功能模块分散，不利于维护

\`\`\`
src/
├── components/
│   ├── Button.tsx
│   ├── Modal.tsx
│   └── Header.tsx
├── hooks/
│   ├── useAuth.ts
│   └── useApi.ts
├── utils/
│   └── helpers.ts
└── App.tsx
\`\`\`

**混合组织（Hybrid）：**
- 结合功能和类型组织，取两者之长
- 核心业务功能按功能组织，提高内聚性
- 通用功能按类型组织，便于复用
- 是大多数中大型项目的最佳选择

### 组件设计

**组件拆分原则：**
- 遵循单一职责原则，每个组件只做一件事
- 拆分为原子组件（Atoms）、分子组件（Molecules）、组织组件（Organisms）、模板组件（Templates）、页面组件（Pages）
- 原子组件是最基础的UI元素，如Button、Input、Icon
- 分子组件由原子组件组合而成，如SearchForm、Card
- 组织组件是复杂的UI区块，如Header、Sidebar
- 合理使用组合而非继承，React推荐组合模式

\`\`\`typescript
// 原子组件：Button
interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  size = 'md', 
  children, 
  onClick 
}) => {
  return (
    <button 
      className={\`btn btn-\${variant} btn-\${size}\`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

// 分子组件：SearchForm
const SearchForm: React.FC<{ onSearch: (query: string) => void }> = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  
  return (
    <form onSubmit={(e) => { e.preventDefault(); onSearch(query); }}>
      <Input 
        value={query} 
        onChange={(e) => setQuery(e.target.value)} 
        placeholder="Search..."
      />
      <Button type="submit">Search</Button>
    </form>
  );
};

// 组织组件：Header
const Header: React.FC = () => {
  return (
    <header className="header">
      <Logo />
      <Navigation />
      <SearchForm onSearch={handleSearch} />
      <UserMenu />
    </header>
  );
};
\`\`\`

**组件通信策略：**
- 父子组件：props 和回调函数，这是最基本也是最推荐的通信方式
- 跨组件：Context API 或状态管理库，避免props drilling问题
- 全局通信：事件总线或全局状态管理，谨慎使用避免过度复杂化

\`\`\`typescript
// 父子组件通信
interface ChildProps {
  data: string;
  onUpdate: (newValue: string) => void;
}

const Child: React.FC<ChildProps> = ({ data, onUpdate }) => {
  return (
    <div>
      <span>{data}</span>
      <button onClick={() => onUpdate('new value')}>Update</button>
    </div>
  );
};

const Parent: React.FC = () => {
  const [value, setValue] = useState('initial');
  return <Child data={value} onUpdate={setValue} />;
};

// Context 跨组件通信
const ThemeContext = createContext<{ theme: string; setTheme: (t: string) => void }>({
  theme: 'light',
  setTheme: () => {},
});

const ThemedButton: React.FC = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <button 
      className={\`btn btn-\${theme}\`}
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
    >
      Toggle Theme
    </button>
  );
};
\`\`\`

**组件复用模式：**
- 创建可复用的 UI 组件库，统一设计语言
- 使用 props 控制组件行为，提供灵活的配置能力
- 提供合理的默认值，降低使用门槛
- 使用 render props 和 HOC 模式实现高级复用

\`\`\`typescript
// Render Props 模式
interface DataFetcherProps {
  url: string;
  children: (data: any, loading: boolean, error: Error | null) => React.ReactNode;
}

const DataFetcher: React.FC<DataFetcherProps> = ({ url, children }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false));
  }, [url]);

  return <>{children(data, loading, error)}</>;
};

// 使用示例
<DataFetcher url="/api/users">
  {(users, loading, error) => {
    if (loading) return <Spinner />;
    if (error) return <Error message={error.message} />;
    return <UserList users={users} />;
  }}
</DataFetcher>

// HOC 模式
function withLoading<P>(WrappedComponent: React.ComponentType<P>) {
  return function WithLoadingComponent({ isLoading, ...props }: P & { isLoading: boolean }) {
    if (isLoading) return <Spinner />;
    return <WrappedComponent {...(props as P)} />;
  };
}
\`\`\`

### 状态管理

**状态分层策略：**
- 组件内部状态（Local State）：使用 useState 管理，适用于组件私有的UI状态
- 跨组件状态（Shared State）：使用 Context API，适用于简单的跨组件共享
- 全局状态（Global State）：使用 Redux Toolkit、Zustand 等状态管理库
- 服务器状态（Server State）：使用 React Query 或 SWR，自动处理缓存和同步

\`\`\`typescript
// 组件内部状态
const Counter: React.FC = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <span>{count}</span>
      <button onClick={() => setCount(c => c + 1)}>+1</button>
    </div>
  );
};

// Context 跨组件状态
interface User {
  id: string;
  name: string;
  email: string;
}

interface UserContextType {
  user: User | null;
  login: (user: User) => void;
  logout: () => void;
}

const UserContext = createContext<UserContextType | null>(null);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  
  const login = (user: User) => setUser(user);
  const logout = () => setUser(null);
  
  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) throw new Error('useUser must be used within UserProvider');
  return context;
};

// Zustand 全局状态
import { create } from 'zustand';

interface AppState {
  count: number;
  increment: () => void;
  decrement: () => void;
}

const useStore = create<AppState>((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
}));

// React Query 服务器状态
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

const fetchUsers = async (): Promise<User[]> => {
  const res = await fetch('/api/users');
  return res.json();
};

const UserList: React.FC = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['users'],
    queryFn: fetchUsers,
  });

  if (isLoading) return <Spinner />;
  if (error) return <Error />;
  return <ul>{data?.map(user => <li key={user.id}>{user.name}</li>)}</ul>;
};
\`\`\`

**状态设计原则：**
- 保持状态最小化，避免冗余和派生状态
- 状态就近原则，能放在局部就不放在全局
- 避免状态冗余，使用 useMemo 计算派生状态
- 状态更新逻辑清晰，使用不可变数据

\`\`\`typescript
// ❌ 错误：冗余状态
const [firstName, setFirstName] = useState('');
const [lastName, setLastName] = useState('');
const [fullName, setFullName] = useState(''); // 冗余！

// ✅ 正确：最小化状态 + 派生值
const [firstName, setFirstName] = useState('');
const [lastName, setLastName] = useState('');
const fullName = \`\${firstName} \${lastName}\`; // 派生值

// ✅ 使用 useMemo 优化派生状态
const expensiveValue = useMemo(() => {
  return heavyCalculation(rawData);
}, [rawData]);
\`\`\`

### 数据流

**单向数据流原则：**
- 数据从父组件流向子组件，形成清晰的数据流向
- 状态更新通过回调函数向上传递，保持数据流可预测
- 避免双向绑定带来的复杂性，调试更加容易

\`\`\`typescript
// 单向数据流示例
interface TodoListProps {
  todos: Todo[];
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, onToggle, onDelete }) => {
  return (
    <ul>
      {todos.map(todo => (
        <TodoItem 
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
};

// 父组件管理状态，子组件通过回调通知变化
const TodoApp: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  
  const handleToggle = (id: string) => {
    setTodos(todos.map(t => 
      t.id === id ? { ...t, completed: !t.completed } : t
    ));
  };
  
  return <TodoList todos={todos} onToggle={handleToggle} />;
};
\`\`\`

**数据获取策略：**
- 使用 React Query 或 SWR 管理异步数据，自动处理缓存、重试、失效
- 处理加载和错误状态，提供良好的用户体验
- 支持缓存和失效策略，减少不必要的网络请求

\`\`\`typescript
// React Query 数据获取
const useUserPosts = (userId: string) => {
  return useQuery({
    queryKey: ['posts', userId],
    queryFn: () => fetchUserPosts(userId),
    staleTime: 5 * 60 * 1000, // 5分钟内数据视为新鲜
    gcTime: 10 * 60 * 1000, // 10分钟后清除缓存
    refetchOnWindowFocus: true, // 窗口聚焦时重新获取
  });
};

// 乐观更新
const useUpdatePost = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: updatePost,
    onMutate: async (newPost) => {
      // 取消正在进行的查询
      await queryClient.cancelQueries({ queryKey: ['posts'] });
      
      // 保存旧数据
      const previousPosts = queryClient.getQueryData(['posts']);
      
      // 乐观更新
      queryClient.setQueryData(['posts'], (old: Post[]) => 
        old.map(p => p.id === newPost.id ? newPost : p)
      );
      
      return { previousPosts };
    },
    onError: (err, newPost, context) => {
      // 回滚
      queryClient.setQueryData(['posts'], context.previousPosts);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['posts'] });
    },
  });
};
\`\`\`

### 最佳实践

**代码规范与质量：**
- 使用 ESLint 和 Prettier 保持代码风格一致
- 遵循一致的命名规范：组件用 PascalCase，hooks 用 use 前缀
- 编写清晰的注释和文档，使用 JSDoc 标注复杂逻辑
- 使用 TypeScript 增强类型安全

\`\`\`typescript
// ESLint 配置示例
// .eslintrc.js
module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
  },
};

// Prettier 配置示例
// .prettierrc
{
  "semi": true,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "es5",
  "printWidth": 100
}
\`\`\`

**文档与知识共享：**
- 组件 API 文档：使用 Storybook 展示组件用法
- 架构设计文档：记录技术决策和设计思路
- 开发指南：包含编码规范、Git 工作流、发布流程

\`\`\`typescript
// 组件文档示例
/**
 * Button 组件 - 基础按钮组件
 * 
 * @example
 * // 基础用法
 * <Button onClick={handleClick}>Click me</Button>
 * 
 * // 不同变体
 * <Button variant="primary">Primary</Button>
 * <Button variant="secondary">Secondary</Button>
 * <Button variant="danger">Danger</Button>
 * 
 * // 不同尺寸
 * <Button size="sm">Small</Button>
 * <Button size="md">Medium</Button>
 * <Button size="lg">Large</Button>
 */
interface ButtonProps {
  /** 按钮变体样式 */
  variant?: 'primary' | 'secondary' | 'danger';
  /** 按钮尺寸 */
  size?: 'sm' | 'md' | 'lg';
  /** 点击事件处理 */
  onClick?: () => void;
  /** 子元素 */
  children: React.ReactNode;
}
\`\`\`

**测试策略：**
- 单元测试：测试独立组件和工具函数
- 集成测试：测试组件交互和数据流
- 端到端测试：测试完整用户流程

\`\`\`typescript
// 组件单元测试示例
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { LoginForm } from './LoginForm';

describe('LoginForm', () => {
  it('renders email and password inputs', () => {
    render(<LoginForm onSubmit={jest.fn()} />);
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
  });

  it('calls onSubmit with form data', async () => {
    const handleSubmit = jest.fn();
    render(<LoginForm onSubmit={handleSubmit} />);
    
    await userEvent.type(screen.getByLabelText(/email/i), 'test@example.com');
    await userEvent.type(screen.getByLabelText(/password/i), 'password123');
    await userEvent.click(screen.getByRole('button', { name: /submit/i }));
    
    expect(handleSubmit).toHaveBeenCalledWith({
      email: 'test@example.com',
      password: 'password123',
    });
  });

  it('shows validation error for invalid email', async () => {
    render(<LoginForm onSubmit={jest.fn()} />);
    
    await userEvent.type(screen.getByLabelText(/email/i), 'invalid-email');
    await userEvent.click(screen.getByRole('button', { name: /submit/i }));
    
    expect(screen.getByText(/invalid email/i)).toBeInTheDocument();
  });
});
\`\`\`

**部署与运维：**
- CI/CD 流程：自动化构建、测试、部署
- 环境配置管理：使用环境变量管理不同环境配置
- 监控和日志：集成错误追踪和性能监控

\`\`\`yaml
# GitHub Actions CI/CD 示例
name: CI/CD Pipeline

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  build-and-test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Lint
        run: npm run lint
      
      - name: Type check
        run: npm run typecheck
      
      - name: Test
        run: npm run test:coverage
      
      - name: Build
        run: npm run build
      
      - name: Deploy to Vercel
        if: github.ref == 'refs/heads/main'
        run: npx vercel --prod --token=\${{ secrets.VERCEL_TOKEN }}
\`\`\``,
      createdAt: '2026-03-14',
      updatedAt: '2026-03-14'
    };
