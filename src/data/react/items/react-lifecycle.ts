import { KnowledgeItem } from '@/types/knowledge';

export const react_lifecycle: KnowledgeItem = {
      id: 'react-lifecycle',
      title: 'React 组件生命周期',
      category: 'react',
      difficulty: 'medium',
      tags: ['React', '生命周期', 'Hooks', 'useEffect'],
      content: `## React 组件生命周期

React 组件生命周期是理解 React 工作原理的关键。在类组件中，生命周期方法提供了在组件不同阶段执行代码的机会；在函数组件中，useEffect Hook 实现了类似的功能。理解生命周期对于正确处理副作用、优化性能、避免内存泄漏至关重要。

### 类组件生命周期

**挂载阶段 (Mounting)：**
组件被创建并插入到 DOM 中时触发。

\`\`\`typescript
class MyComponent extends React.Component {
  // 1. 构造函数：初始化 state，绑定方法
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  // 2. getDerivedStateFromProps：从 props 派生 state（很少使用）
  static getDerivedStateFromProps(props, state) {
    if (props.initialCount !== state.prevCount) {
      return { count: props.initialCount, prevCount: props.initialCount };
    }
    return null;
  }

  // 3. render：渲染组件（必须实现）
  render() {
    return <div>{this.state.count}</div>;
  }

  // 4. componentDidMount：组件挂载后调用
  componentDidMount() {
    // 发送网络请求
    this.fetchData();
    // 添加事件监听
    window.addEventListener('resize', this.handleResize);
    // 设置定时器
    this.timer = setInterval(this.tick, 1000);
  }
}
\`\`\`

**更新阶段 (Updating)：**
组件的 props 或 state 发生变化时触发。

\`\`\`typescript
class MyComponent extends React.Component {
  // 1. getDerivedStateFromProps：更新时也会调用
  static getDerivedStateFromProps(props, state) {
    return null;
  }

  // 2. shouldComponentUpdate：决定是否重新渲染
  shouldComponentUpdate(nextProps, nextState) {
    // 性能优化：只在 count 变化时重新渲染
    return nextState.count !== this.state.count;
  }

  // 3. render：重新渲染
  render() {
    return <div>{this.state.count}</div>;
  }

  // 4. getSnapshotBeforeUpdate：在 DOM 更新前获取快照
  getSnapshotBeforeUpdate(prevProps, prevState) {
    // 例如：保存滚动位置
    if (prevProps.list.length < this.props.list.length) {
      return this.listRef.current.scrollHeight;
    }
    return null;
  }

  // 5. componentDidUpdate：组件更新后调用
  componentDidUpdate(prevProps, prevState, snapshot) {
    // 使用快照
    if (snapshot !== null) {
      this.listRef.current.scrollTop += 
        this.listRef.current.scrollHeight - snapshot;
    }
    
    // 根据 props 变化执行操作
    if (this.props.userId !== prevProps.userId) {
      this.fetchData();
    }
  }
}
\`\`\`

**卸载阶段 (Unmounting)：**
组件从 DOM 中移除时触发。

\`\`\`typescript
class MyComponent extends React.Component {
  componentWillUnmount() {
    // 清除定时器
    clearInterval(this.timer);
    // 移除事件监听
    window.removeEventListener('resize', this.handleResize);
    // 取消网络请求
    this.abortController?.abort();
  }
}
\`\`\`

**错误处理阶段：**
子组件抛出错误时触发。

\`\`\`typescript
class ErrorBoundary extends React.Component {
  // 捕获错误并更新 state
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  // 记录错误信息
  componentDidCatch(error, errorInfo) {
    logErrorToService(error, errorInfo);
  }
}
\`\`\`

### 函数组件生命周期

**useEffect Hook：**
useEffect Hook 是函数组件中处理副作用的主要方式，相当于类组件中 componentDidMount、componentDidUpdate 和 componentWillUnmount 的组合。

\`\`\`typescript
import { useEffect, useState } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(null);

  // componentDidMount：组件挂载后执行
  useEffect(() => {
    console.log('Component mounted');
    
    // 发送网络请求
    fetchData().then(setData);
    
    // 添加事件监听
    const handleResize = () => console.log('Resized');
    window.addEventListener('resize', handleResize);
    
    // componentWillUnmount：组件卸载时执行清理
    return () => {
      console.log('Component will unmount');
      window.removeEventListener('resize', handleResize);
    };
  }, []); // 空依赖数组：只在挂载时执行

  // componentDidMount + componentDidUpdate：count 变化时执行
  useEffect(() => {
    console.log('Count changed:', count);
    document.title = \`Count: \${count}\`;
  }, [count]); // 依赖数组：count 变化时执行

  // 每次渲染都执行（不推荐，除非必要）
  useEffect(() => {
    console.log('Component rendered');
  }); // 无依赖数组：每次渲染都执行

  return <div>{count}</div>;
}
\`\`\`

**useLayoutEffect Hook：**
useLayoutEffect 与 useEffect 类似，但它在所有 DOM 变更后同步触发，在浏览器绘制之前执行。适合需要读取 DOM 布局并同步重新渲染的场景。

\`\`\`typescript
import { useLayoutEffect, useRef } from 'react';

function Tooltip({ children }) {
  const tooltipRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useLayoutEffect(() => {
    // 在浏览器绘制前读取 DOM 布局
    const tooltip = tooltipRef.current;
    if (!tooltip) return;

    const { width, height } = tooltip.getBoundingClientRect();
    
    // 根据布局计算位置
    setPosition({
      x: -width / 2,
      y: -height - 10,
    });
  }, [children]); // children 变化时重新计算

  return (
    <div
      ref={tooltipRef}
      style={{ transform: \`translate(\${position.x}px, \${position.y}px)\` }}
    >
      {children}
    </div>
  );
}
\`\`\`

**useInsertionEffect Hook：**
useInsertionEffect 是 React 18 新增的 Hook，在 DOM 变更之前触发，主要用于 CSS-in-JS 库注入样式。

\`\`\`typescript
import { useInsertionEffect } from 'react';

function useStyle(rule: string) {
  useInsertionEffect(() => {
    // 在 DOM 变更前注入样式
    const style = document.createElement('style');
    style.textContent = rule;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, [rule]);
}
\`\`\`

### 生命周期与 useEffect 对照表

| 类组件生命周期 | 函数组件 useEffect |
|--------------|------------------|
| constructor | useState 初始化 |
| getDerivedStateFromProps | render 中计算或 useState 更新函数 |
| shouldComponentUpdate | React.memo 或 useMemo |
| render | 函数组件本身 |
| componentDidMount | useEffect(() => {}, []) |
| componentDidUpdate | useEffect(() => {}, [deps]) |
| componentWillUnmount | useEffect return 清理函数 |
| getSnapshotBeforeUpdate | useLayoutEffect |
| componentDidCatch | Error Boundary 组件 |

### 生命周期最佳实践

**1. 正确清理副作用：**
在 useEffect 的清理函数中清理副作用，避免内存泄漏。

\`\`\`typescript
useEffect(() => {
  const controller = new AbortController();
  
  fetchData({ signal: controller.signal })
    .then(setData)
    .catch(error => {
      if (error.name !== 'AbortError') {
        setError(error);
      }
    });
  
  return () => {
    controller.abort();
  };
}, []);
\`\`\`

**2. 避免在 useEffect 中直接使用 async：**
useEffect 不能直接使用 async 函数，需要在内部定义异步函数。

\`\`\`typescript
// ❌ 错误
useEffect(async () => {
  const data = await fetchData();
  setData(data);
}, []);

// ✅ 正确
useEffect(() => {
  async function loadData() {
    const data = await fetchData();
    setData(data);
  }
  loadData();
}, []);
\`\`\`

**3. 正确设置依赖数组：**
依赖数组应该包含所有在 effect 中使用的外部变量。

\`\`\`typescript
// ❌ 缺少依赖
useEffect(() => {
  fetchData(userId); // userId 应该在依赖数组中
}, []);

// ✅ 正确设置依赖
useEffect(() => {
  fetchData(userId);
}, [userId]);
\`\`\``,
      createdAt: '2026-03-15',
      updatedAt: '2026-03-15'
    };
