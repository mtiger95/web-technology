import { KnowledgeItem } from '@/types/knowledge';

export const react_custom_hooks: KnowledgeItem = {
      id: 'react-custom-hooks',
      title: 'React 自定义 Hooks 最佳实践',
      category: 'react',
      difficulty: 'medium',
      tags: ['React', 'Hooks', '自定义Hooks', '代码复用'],
      content: `## React 自定义 Hooks 最佳实践

自定义 Hooks 是 React 中复用状态逻辑的重要方式。通过自定义 Hooks，可以将组件逻辑提取到可重用的函数中，使代码更加简洁、可维护。自定义 Hooks 是函数组件时代代码复用的核心模式，理解其设计原则和最佳实践对于构建高质量的 React 应用至关重要。

### 自定义 Hooks 基础

**什么是自定义 Hook：**
自定义 Hook 是一个以 "use" 开头的函数，可以调用其他 Hook。自定义 Hook 允许你将组件逻辑提取到可重用的函数中，每次使用自定义 Hook 时，其中的 state 和 effect 都是独立的。

\`\`\`typescript
import { useState, useEffect } from 'react';

// 自定义 Hook：窗口大小
function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
}

// 使用自定义 Hook
function ResponsiveComponent() {
  const { width, height } = useWindowSize();
  
  return (
    <div>
      <p>Window size: {width} x {height}</p>
      {width < 768 ? <MobileLayout /> : <DesktopLayout />}
    </div>
  );
}
\`\`\`

**自定义 Hook 的命名约定：**
自定义 Hook 必须以 "use" 开头，这是 React 的约定，也是 React 能够自动检查 Hook 规则的原因。这个命名约定让 React 能够识别哪些是 Hook，从而应用 Hook 的规则。

\`\`\`typescript
// ✅ 正确：以 use 开头
function useLocalStorage(key: string, initialValue: any) { /* ... */ }
function useFetch(url: string) { /* ... */ }
function useDebounce(value: string, delay: number) { /* ... */ }

// ❌ 错误：不以 use 开头
function getLocalStorage(key: string) { /* ... */ }
function fetchData(url: string) { /* ... */ }
\`\`\`

### 常用自定义 Hooks

**useLocalStorage - 本地存储 Hook：**
封装 localStorage 操作，提供响应式的存储状态。

\`\`\`typescript
function useLocalStorage<T>(key: string, initialValue: T): [T, (value: T | ((val: T) => T)) => void] {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  const setValue = (value: T | ((val: T) => T)) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error(error);
    }
  };

  return [storedValue, setValue];
}

// 使用示例
function App() {
  const [name, setName] = useLocalStorage('name', 'Guest');
  const [theme, setTheme] = useLocalStorage<'light' | 'dark'>('theme', 'light');

  return (
    <div>
      <input value={name} onChange={e => setName(e.target.value)} />
      <button onClick={() => setTheme(t => t === 'light' ? 'dark' : 'light')}>
        Toggle Theme
      </button>
    </div>
  );
}
\`\`\`

**useDebounce - 防抖 Hook：**
实现值的防抖功能，常用于搜索输入、窗口大小调整等场景。

\`\`\`typescript
function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}

// 使用示例
function SearchComponent() {
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  useEffect(() => {
    if (debouncedSearchTerm) {
      searchAPI(debouncedSearchTerm);
    }
  }, [debouncedSearchTerm]);

  return (
    <input
      value={searchTerm}
      onChange={e => setSearchTerm(e.target.value)}
      placeholder="Search..."
    />
  );
}
\`\`\`

**useFetch - 数据获取 Hook：**
封装数据获取逻辑，处理加载状态和错误状态。

\`\`\`typescript
interface FetchState<T> {
  data: T | null;
  loading: boolean;
  error: Error | null;
}

function useFetch<T>(url: string): FetchState<T> & { refetch: () => void } {
  const [state, setState] = useState<FetchState<T>>({
    data: null,
    loading: true,
    error: null,
  });

  const fetchData = useCallback(async () => {
    setState(prev => ({ ...prev, loading: true, error: null }));
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error('Network response was not ok');
      const data = await response.json();
      setState({ data, loading: false, error: null });
    } catch (error) {
      setState({ data: null, loading: false, error: error as Error });
    }
  }, [url]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { ...state, refetch: fetchData };
}

// 使用示例
function UserProfile({ userId }: { userId: string }) {
  const { data: user, loading, error, refetch } = useFetch<User>(
    \`/api/users/\${userId}\`
  );

  if (loading) return <Spinner />;
  if (error) return <Error message={error.message} onRetry={refetch} />;
  
  return (
    <div>
      <h1>{user?.name}</h1>
      <button onClick={refetch}>Refresh</button>
    </div>
  );
}
\`\`\`

**useToggle - 切换状态 Hook：**
封装布尔状态的切换逻辑。

\`\`\`typescript
function useToggle(initialValue: boolean = false): [boolean, () => void] {
  const [value, setValue] = useState(initialValue);
  
  const toggle = useCallback(() => {
    setValue(v => !v);
  }, []);
  
  return [value, toggle];
}

// 使用示例
function Modal() {
  const [isOpen, toggleOpen] = useToggle(false);
  
  return (
    <>
      <button onClick={toggleOpen}>Open Modal</button>
      {isOpen && (
        <div className="modal">
          <button onClick={toggleOpen}>Close</button>
          <p>Modal Content</p>
        </div>
      )}
    </>
  );
}
\`\`\`

**useClickOutside - 点击外部 Hook：**
检测点击元素外部的事件，常用于关闭下拉菜单、模态框等。

\`\`\`typescript
function useClickOutside(
  ref: React.RefObject<HTMLElement>,
  handler: () => void
) {
  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return;
      }
      handler();
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler]);
}

// 使用示例
function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  
  useClickOutside(ref, () => setIsOpen(false));
  
  return (
    <div ref={ref}>
      <button onClick={() => setIsOpen(!isOpen)}>Toggle</button>
      {isOpen && <ul>...</ul>}
    </div>
  );
}
\`\`\`

### 自定义 Hooks 设计原则

**1. 单一职责原则：**
每个自定义 Hook 应该只负责一个功能，保持简单和可复用。

\`\`\`typescript
// ✅ 好：单一职责
function useWindowSize() { /* ... */ }
function useScrollPosition() { /* ... */ }
function useMousePosition() { /* ... */ }

// ❌ 不好：职责过多
function useWindowInfo() {
  // 同时处理窗口大小、滚动位置、鼠标位置
}
\`\`\`

**2. 返回值设计：**
返回值应该简洁明了，可以是值、对象或数组。根据使用场景选择合适的返回类型。

\`\`\`typescript
// 返回数组（类似 useState）
function useToggle(initial: boolean): [boolean, () => void] { /* ... */ }

// 返回对象（多个相关值）
function useFetch<T>(url: string): { data: T | null; loading: boolean; error: Error | null } { /* ... */ }

// 返回函数（操作型 Hook）
function useTimeout(callback: () => void, delay: number): () => void { /* ... */ }
\`\`\`

**3. 参数设计：**
参数应该有合理的默认值，支持灵活的配置。

\`\`\`typescript
interface UseIntersectionObserverOptions {
  threshold?: number | number[];
  root?: Element | null;
  rootMargin?: string;
  enabled?: boolean;
}

function useIntersectionObserver(
  ref: RefObject<Element>,
  options: UseIntersectionObserverOptions = {}
) {
  const { threshold = 0, root = null, rootMargin = '0px', enabled = true } = options;
  // ...
}
\`\`\`

**4. 性能优化：**
使用 useCallback 和 useMemo 优化性能，避免不必要的重新渲染。

\`\`\`typescript
function useAsync<T>(asyncFunction: () => Promise<T>, deps: any[] = []) {
  const [state, setState] = useState<{
    loading: boolean;
    error: Error | null;
    data: T | null;
  }>({
    loading: true,
    error: null,
    data: null,
  });

  // 使用 useCallback 缓存函数
  const execute = useCallback(async () => {
    setState({ loading: true, error: null, data: null });
    try {
      const data = await asyncFunction();
      setState({ loading: false, error: null, data });
    } catch (error) {
      setState({ loading: false, error: error as Error, data: null });
    }
  }, deps);

  useEffect(() => {
    execute();
  }, [execute]);

  return { ...state, execute };
}
\`\`\``,
      createdAt: '2026-03-15',
      updatedAt: '2026-03-15'
    };
