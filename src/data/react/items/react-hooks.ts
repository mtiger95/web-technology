import { KnowledgeItem } from '@/types/knowledge';

export const react_hooks: KnowledgeItem = {
      id: 'react-hooks',
      title: 'React Hooks 深度解析',
      category: 'react',
      difficulty: 'medium',
      tags: ['React', 'Hooks', 'useState', 'useEffect'],
      content: `## React Hooks 深度解析

React Hooks 是 React 16.8 引入的革命性特性，它彻底改变了 React 组件的编写方式，让函数组件也能拥有状态和生命周期特性，同时解决了 class 组件中 this 指向混乱、生命周期方法逻辑分散等问题。

### 常用 Hooks 详解

**useState - 状态管理基础：**
useState 是最基础的 Hook，用于在函数组件中添加状态管理能力。它接收一个初始值或初始化函数，返回一个包含当前状态值和更新函数的数组。useState 支持函数式更新，可以在更新函数中接收前一个状态值，这在处理异步更新或基于前值计算新值时特别有用。惰性初始化允许传入一个函数作为初始值，该函数只在首次渲染时执行，适合需要复杂计算的初始状态。

**useEffect - 副作用处理核心：**
useEffect 是处理副作用的核心 Hook，包括数据获取、订阅、DOM 操作、定时器等。它接收一个回调函数和一个可选的依赖数组，当依赖数组中的值发生变化时执行回调。空依赖数组表示只在组件挂载和卸载时执行，不传依赖数组则每次渲染都执行。useEffect 的清理函数在组件卸载或下一次 effect 执行前调用，用于取消订阅、清除定时器等资源释放操作。

**useRef - 可变引用与 DOM 访问：**
useRef 返回一个可变的 ref 对象，其 current 属性可以保存任意值，且在整个组件生命周期内保持不变。useRef 的主要用途包括：访问 DOM 元素（通过将 ref 传递给 JSX 元素）、保存可变值而不触发重新渲染、存储前一次渲染的值。与 useState 不同，修改 useRef.current 不会触发组件重新渲染，这使得它非常适合存储不影响渲染的数据。

**useMemo - 计算结果缓存：**
useMemo 用于缓存昂贵的计算结果，避免在每次渲染时重复计算。它接收一个计算函数和依赖数组，只有当依赖项变化时才重新计算。useMemo 特别适合处理复杂的数据转换、过滤、排序等操作，可以有效减少不必要的计算开销。但需要注意，useMemo 本身也有开销，对于简单的计算可能得不偿失。

**useCallback - 函数引用缓存：**
useCallback 用于缓存函数引用，避免在每次渲染时创建新的函数实例。它接收一个回调函数和依赖数组，返回一个记忆化的回调函数。useCallback 主要用于优化子组件的渲染性能，特别是当子组件使用 React.memo 或依赖函数引用相等性时。与 useMemo 不同，useCallback 缓存的是函数本身，而不是函数的返回值。

### 代码示例

\`\`\`javascript
// useState 基础用法
function Counter() {
  const [count, setCount] = useState(0);
  const [items, setItems] = useState([]);
  
  // 函数式更新
  const increment = () => setCount(prev => prev + 1);
  
  // 惰性初始化
  const [data, setData] = useState(() => {
    const saved = localStorage.getItem('data');
    return saved ? JSON.parse(saved) : [];
  });
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>+1</button>
    </div>
  );
}

// useEffect 数据获取与清理
function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  
  useEffect(() => {
    let cancelled = false;
    
    async function fetchUser() {
      const response = await fetch(\`/api/users/\${userId}\`);
      const data = await response.json();
      if (!cancelled) {
        setUser(data);
      }
    }
    
    fetchUser();
    
    return () => {
      cancelled = true;
    };
  }, [userId]);
  
  if (!user) return <div>Loading...</div>;
  return <div>{user.name}</div>;
}

// useRef 访问 DOM
function TextInput() {
  const inputRef = useRef(null);
  
  const focusInput = () => {
    inputRef.current?.focus();
  };
  
  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}

// useMemo 和 useCallback 优化
function ExpensiveComponent({ items, onItemClick }) {
  // 缓存排序结果
  const sortedItems = useMemo(() => {
    console.log('Sorting items...');
    return [...items].sort((a, b) => a.name.localeCompare(b.name));
  }, [items]);
  
  // 缓存事件处理函数
  const handleClick = useCallback((id) => {
    console.log('Item clicked:', id);
    onItemClick?.(id);
  }, [onItemClick]);
  
  return (
    <ul>
      {sortedItems.map(item => (
        <li key={item.id} onClick={() => handleClick(item.id)}>
          {item.name}
        </li>
      ))}
    </ul>
  );
}

// 自定义 Hook 示例
function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });
  
  const setValue = useCallback((value) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error(error);
    }
  }, [key, storedValue]);
  
  return [storedValue, setValue];
}

// 使用自定义 Hook
function ThemeToggle() {
  const [theme, setTheme] = useLocalStorage('theme', 'light');
  
  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };
  
  return (
    <button onClick={toggleTheme}>
      Current theme: {theme}
    </button>
  );
}
\`\`\`

### 自定义 Hooks 设计原则

自定义 Hooks 是复用状态逻辑的强大工具，以 "use" 开头命名是 React 的约定。设计良好的自定义 Hooks 应该遵循以下原则：单一职责，每个 Hook 只处理一个特定的逻辑；清晰的参数和返回值；合理的依赖管理；良好的类型定义。常见的自定义 Hooks 包括：useFetch（数据获取）、useDebounce（防抖）、useThrottle（节流）、useWindowSize（窗口尺寸）、useMediaQuery（媒体查询）等。

### 最佳实践

- **只在最顶层调用 Hooks**：不要在循环、条件或嵌套函数中调用 Hooks，确保 Hooks 的调用顺序在每次渲染中保持一致
- **只在 React 函数中调用 Hooks**：在函数组件或自定义 Hook 中调用，不要在普通 JavaScript 函数中调用
- **合理使用依赖数组**：确保依赖数组包含所有在 effect 中使用的外部变量，避免遗漏依赖导致的 bug
- **避免在渲染中创建函数和对象**：使用 useCallback 和 useMemo 缓存，避免不必要的子组件重新渲染
- **使用 React.memo 配合 useCallback**：当子组件接收函数 props 时，配合使用可以优化性能
- **正确处理清理逻辑**：在 useEffect 中返回清理函数，防止内存泄漏`,
      createdAt: '2026-03-14',
      updatedAt: '2026-03-14'
    };
