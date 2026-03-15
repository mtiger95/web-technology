import { KnowledgeItem } from '@/types/knowledge';

export const react_typescript: KnowledgeItem = {
      id: 'react-typescript',
      title: 'React TypeScript 集成',
      category: 'react',
      difficulty: 'medium',
      tags: ['React', 'TypeScript', '类型安全', '最佳实践'],
      content: `## React TypeScript 集成

TypeScript 为 React 应用提供了强大的类型检查和智能提示，可以显著提高代码质量和开发效率。理解 React 与 TypeScript 的集成方式，对于构建大型、可维护的 React 应用至关重要。

### 组件类型定义

**函数组件类型：**
使用 React.FC 或直接定义函数类型，推荐直接定义函数类型以获得更好的类型推断。

\`\`\`typescript
import { ReactNode } from 'react';

// 方式1：使用 React.FC（不推荐，因为 children 类型不明确）
const Button: React.FC<{ text: string }> = ({ text }) => {
  return <button>{text}</button>;
};

// 方式2：直接定义函数类型（推荐）
interface ButtonProps {
  text: string;
  onClick?: () => void;
  disabled?: boolean;
}

function Button({ text, onClick, disabled }: ButtonProps) {
  return (
    <button onClick={onClick} disabled={disabled}>
      {text}
    </button>
  );
}

// 带有 children 的组件
interface CardProps {
  title: string;
  children: ReactNode;
}

function Card({ title, children }: CardProps) {
  return (
    <div className="card">
      <h2>{title}</h2>
      <div className="card-content">{children}</div>
    </div>
  );
}
\`\`\`

**泛型组件：**
创建可复用的泛型组件，支持不同的数据类型。

\`\`\`typescript
// 泛型列表组件
interface ListProps<T> {
  items: T[];
  renderItem: (item: T, index: number) => ReactNode;
  keyExtractor: (item: T) => string | number;
}

function List<T>({ items, renderItem, keyExtractor }: ListProps<T>) {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={keyExtractor(item)}>{renderItem(item, index)}</li>
      ))}
    </ul>
  );
}

// 使用
interface User {
  id: number;
  name: string;
  email: string;
}

function UserList({ users }: { users: User[] }) {
  return (
    <List
      items={users}
      keyExtractor={(user) => user.id}
      renderItem={(user) => (
        <div>
          <span>{user.name}</span>
          <span>{user.email}</span>
        </div>
      )}
    />
  );
}
\`\`\`

### Hooks 类型定义

**useState 类型：**
useState 可以通过泛型或类型推断来指定状态类型。

\`\`\`typescript
// 类型推断
const [count, setCount] = useState(0); // number 类型

// 显式类型
const [user, setUser] = useState<User | null>(null);

// 复杂类型
interface FormState {
  username: string;
  email: string;
  age: number;
  preferences: {
    theme: 'light' | 'dark';
    notifications: boolean;
  };
}

const [form, setForm] = useState<FormState>({
  username: '',
  email: '',
  age: 0,
  preferences: {
    theme: 'light',
    notifications: true,
  },
});
\`\`\`

**useRef 类型：**
useRef 可以用于引用 DOM 元素或任意可变值。

\`\`\`typescript
// 引用 DOM 元素
const inputRef = useRef<HTMLInputElement>(null);

// 引用任意值
const timerRef = useRef<NodeJS.Timeout | null>(null);

// 使用
function InputComponent() {
  const inputRef = useRef<HTMLInputElement>(null);

  const focusInput = () => {
    inputRef.current?.focus();
  };

  return (
    <>
      <input ref={inputRef} type="text" />
      <button onClick={focusInput}>Focus</button>
    </>
  );
}
\`\`\`

**useContext 类型：**
为 Context 提供正确的类型定义。

\`\`\`typescript
import { createContext, useContext, useState, ReactNode } from 'react';

// 定义 Context 类型
interface ThemeContextType {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

// 创建 Context，默认值为 undefined
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Provider 组件
function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// 自定义 Hook，提供类型安全
function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
\`\`\`

**自定义 Hook 类型：**
为自定义 Hook 提供清晰的类型定义。

\`\`\`typescript
// useFetch Hook 类型
interface UseFetchResult<T> {
  data: T | null;
  loading: boolean;
  error: Error | null;
  refetch: () => Promise<void>;
}

function useFetch<T>(url: string): UseFetchResult<T> {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error('Network response was not ok');
      const json = await response.json();
      setData(json);
    } catch (e) {
      setError(e instanceof Error ? e : new Error('Unknown error'));
    } finally {
      setLoading(false);
    }
  }, [url]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, loading, error, refetch: fetchData };
}
\`\`\`

### 事件处理类型

**表单事件：**
正确处理表单相关的事件类型。

\`\`\`typescript
import { FormEvent, ChangeEvent, MouseEvent } from 'react';

function Form() {
  const [value, setValue] = useState('');

  // 表单提交
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Submitted:', value);
  };

  // 输入变化
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  // 按钮点击
  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    console.log('Button clicked');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={value} onChange={handleChange} />
      <button type="submit" onClick={handleClick}>
        Submit
      </button>
    </form>
  );
}
\`\`\`

**事件委托：**
处理事件委托时的类型断言。

\`\`\`typescript
function List({ items }: { items: { id: string; name: string }[] }) {
  const handleClick = (e: MouseEvent<HTMLUListElement>) => {
    const target = e.target as HTMLElement;
    if (target.matches('button')) {
      const id = target.dataset.id;
      console.log('Clicked item:', id);
    }
  };

  return (
    <ul onClick={handleClick}>
      {items.map((item) => (
        <li key={item.id}>
          <span>{item.name}</span>
          <button data-id={item.id}>Delete</button>
        </li>
      ))}
    </ul>
  );
}
\`\`\`

### 类型工具和技巧

**Partial 和 Required：**
使用 TypeScript 工具类型简化类型定义。

\`\`\`typescript
interface User {
  id: number;
  name: string;
  email: string;
  age: number;
}

// 更新用户，所有字段可选
function updateUser(id: number, updates: Partial<User>) {
  // ...
}

// 创建用户，所有字段必需
function createUser(user: Required<User>) {
  // ...
}

// 使用
updateUser(1, { name: 'New Name' }); // 只更新 name
\`\`\`

**Pick 和 Omit：**
选择或排除特定字段。

\`\`\`typescript
// 只选择某些字段
type UserPreview = Pick<User, 'id' | 'name'>;

// 排除某些字段
type UserWithoutId = Omit<User, 'id'>;

// 使用
function UserCard({ user }: { user: UserPreview }) {
  return <div>{user.name}</div>;
}
\`\`\``,
      createdAt: '2026-03-15',
      updatedAt: '2026-03-15'
    };
