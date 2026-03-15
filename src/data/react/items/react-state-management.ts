import { KnowledgeItem } from '@/types/knowledge';

export const react_state_management: KnowledgeItem = {
      id: 'react-state-management',
      title: 'React 状态管理方案对比',
      category: 'react',
      difficulty: 'medium',
      tags: ['React', '状态管理', 'Redux', 'Context'],
      content: `## React 状态管理方案对比

状态管理是 React 应用的核心问题之一，随着应用复杂度的增加，选择合适的状态管理方案变得至关重要。React 提供了从简单的 useState 到复杂的状态管理库等多种方案，开发者需要根据应用规模、团队熟悉度、性能需求等因素选择合适的方案。

### 内置状态管理方案

**useState - 组件内部状态：**
useState 是 React 最基础的状态管理 Hook，适用于组件内部的状态管理。useState 返回状态值和更新函数，支持惰性初始化和函数式更新。useState 的优势在于简单直观，与 React 组件生命周期紧密集成。useState 适用于表单输入、UI 状态（如模态框显示隐藏）、组件内部的计数器等场景。对于复杂的状态逻辑，可以考虑使用 useReducer 替代。

**useContext - 跨组件状态共享：**
useContext 提供了一种在组件树中共享数据的方式，避免了 props 层层传递的问题。useContext 与 createContext 配合使用，Provider 提供数据，Consumer 或 useContext 消费数据。useContext 适用于主题、用户信息、语言设置等全局配置数据。需要注意的是，Context 的值变化会导致所有消费者组件重新渲染，对于频繁更新的状态可能需要优化。

**useReducer - 复杂状态逻辑：**
useReducer 是 useState 的替代方案，适用于复杂的状态逻辑。useReducer 接收一个 reducer 函数和初始状态，返回当前状态和 dispatch 函数。useReducer 的优势在于将状态更新逻辑集中管理，便于测试和调试。useReducer 适用于表单状态、多步骤流程、复杂的数据转换等场景。

### 代码示例

\`\`\`javascript
// useState 基础用法
function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(c => c + 1)}>Increment</button>
    </div>
  );
}

// useContext 跨组件状态共享
const ThemeContext = createContext('light');

function App() {
  const [theme, setTheme] = useState('dark');
  
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Layout />
    </ThemeContext.Provider>
  );
}

function Layout() {
  return (
    <div>
      <Header />
      <Main />
    </div>
  );
}

function Header() {
  const { theme, setTheme } = useContext(ThemeContext);
  
  return (
    <header className={\`header-\${theme}\`}>
      <button onClick={() => setTheme(t => t === 'light' ? 'dark' : 'light')}>
        Toggle Theme
      </button>
    </header>
  );
}

// useReducer 复杂状态管理
const formReducer = (state, action) => {
  switch (action.type) {
    case 'SET_FIELD':
      return { ...state, [action.field]: action.value };
    case 'SET_ERROR':
      return { ...state, errors: { ...state.errors, [action.field]: action.error } };
    case 'RESET':
      return action.initialState;
    default:
      return state;
  }
};

function Form() {
  const initialState = { username: '', email: '', errors: {} };
  const [state, dispatch] = useReducer(formReducer, initialState);
  
  const handleChange = (field) => (e) => {
    dispatch({ type: 'SET_FIELD', field, value: e.target.value });
  };
  
  return (
    <form>
      <input 
        value={state.username}
        onChange={handleChange('username')}
      />
      {state.errors.username && <span>{state.errors.username}</span>}
    </form>
  );
}

// Redux Toolkit 示例
import { createSlice, configureStore } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    increment: (state) => { state.value += 1; },
    decrement: (state) => { state.value -= 1; },
    incrementByAmount: (state, action) => { state.value += action.payload; }
  }
});

const store = configureStore({
  reducer: { counter: counterSlice.reducer }
});

// React 组件中使用 Redux
import { useSelector, useDispatch } from 'react-redux';

function CounterWithRedux() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
}

// Zustand 示例
import { create } from 'zustand';

const useStore = create((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
  reset: () => set({ count: 0 })
}));

function CounterWithZustand() {
  const { count, increment, decrement, reset } = useStore();
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

// Zustand 选择器优化
function OptimizedCounter() {
  // 只订阅 count 变化
  const count = useStore((state) => state.count);
  const increment = useStore((state) => state.increment);
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>+</button>
    </div>
  );
}

// Jotai 原子化状态
import { atom, useAtom } from 'jotai';

const countAtom = atom(0);
const doubleCountAtom = atom((get) => get(countAtom) * 2);

function CounterWithJotai() {
  const [count, setCount] = useAtom(countAtom);
  const [doubleCount] = useAtom(doubleCountAtom);
  
  return (
    <div>
      <p>Count: {count}</p>
      <p>Double: {doubleCount}</p>
      <button onClick={() => setCount((c) => c + 1)}>+</button>
    </div>
  );
}

// React Query 服务器状态管理
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

function UserList() {
  const queryClient = useQueryClient();
  
  const { data: users, isLoading, error } = useQuery({
    queryKey: ['users'],
    queryFn: () => fetch('/api/users').then((res) => res.json())
  });
  
  const mutation = useMutation({
    mutationFn: (newUser) => 
      fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify(newUser)
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users'] });
    }
  });
  
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  
  return (
    <div>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
      <button onClick={() => mutation.mutate({ name: 'New User' })}>
        Add User
      </button>
    </div>
  );
}

// 状态管理最佳实践：状态分层
function StateManagementExample() {
  // 组件内部状态：UI 状态
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // 全局状态：用户信息
  const user = useUserStore((state) => state.user);
  
  // 服务器状态：数据获取
  const { data: posts } = useQuery({
    queryKey: ['posts', user.id],
    queryFn: () => fetchPosts(user.id)
  });
  
  return (
    <div>
      <button onClick={() => setIsModalOpen(true)}>Open Modal</button>
      {isModalOpen && <Modal onClose={() => setIsModalOpen(false)} />}
      <PostList posts={posts} />
    </div>
  );
}
\`\`\`

### 第三方状态管理库对比

**Redux Toolkit - 企业级状态管理：**
Redux Toolkit 是 Redux 的官方推荐工具集，简化了 Redux 的配置和使用。Redux Toolkit 提供了 createSlice（同时定义 reducer 和 actions）、createAsyncThunk（处理异步操作）、configureStore（配置 store）等工具。Redux Toolkit 内置 Immer，支持不可变数据更新。Redux Toolkit 适合大型应用、需要时间旅行调试、需要中间件扩展的场景。

**Zustand - 轻量级状态管理：**
Zustand 是一个极简的状态管理库，API 设计简洁，学习曲线平缓。Zustand 基于 Hooks，不需要 Provider 包裹，支持选择器优化渲染。Zustand 支持中间件（如 persist、devtools）、TypeScript 类型推断。Zustand 适合中小型应用、需要快速上手的团队。

**Jotai - 原子化状态管理：**
Jotai 采用原子化状态管理，状态可以按需订阅和更新，实现细粒度的渲染优化。Jotai 的 atom 可以派生出新的 atom，支持异步 atom。Jotai 的 API 非常简洁，适合需要精确控制渲染的场景。

**React Query - 服务器状态管理：**
React Query 专门用于管理服务器状态，提供了数据获取、缓存、轮询、乐观更新等功能。React Query 自动管理请求状态和缓存，支持后台刷新、预取、并行请求等高级特性。React Query 大大简化了 React 中的数据请求逻辑，推荐用于所有需要从服务器获取数据的场景。

### 选择建议

- **小型应用**：useState + useContext，简单直接，无需额外依赖
- **中型应用**：Zustand 或 Jotai，轻量级，学习成本低
- **大型应用**：Redux Toolkit，功能完整，生态成熟
- **服务器状态**：React Query 或 SWR，专门优化的数据获取方案
- **混合使用**：可以根据状态类型选择不同的方案，如 UI 状态用 Zustand，服务器状态用 React Query`,
      createdAt: '2026-03-14',
      updatedAt: '2026-03-14'
    };
