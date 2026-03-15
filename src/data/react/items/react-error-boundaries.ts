import { KnowledgeItem } from '@/types/knowledge';

export const react_error_boundaries: KnowledgeItem = {
      id: 'react-error-boundaries',
      title: 'React 错误边界',
      category: 'react',
      difficulty: 'medium',
      tags: ['React', '错误处理', '错误边界', 'Error Boundary'],
      content: `## React 错误边界

错误边界（Error Boundaries）是 React 组件，用于捕获子组件树中任何位置的 JavaScript 错误，记录错误，并显示备用 UI，而不是崩溃整个应用。错误边界是 React 错误处理机制的核心，对于构建健壮的应用至关重要。

### 错误边界基础

**什么是错误边界：**
错误边界是一种 React 组件，它可以捕获子组件树中任何位置的 JavaScript 错误，并显示备用 UI。错误边界在渲染期间、生命周期方法和子组件树的构造函数中捕获错误。错误边界无法捕获事件处理器、异步代码、服务端渲染、错误边界自身抛出的错误。

\`\`\`typescript
import { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  // 捕获错误并更新状态
  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  // 记录错误信息
  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Error caught by boundary:', error);
    console.error('Component stack:', errorInfo.componentStack);
    
    // 可以将错误发送到错误监控服务
    logErrorToService(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback || (
        <div className="error-fallback">
          <h2>Something went wrong.</h2>
          <button onClick={() => this.setState({ hasError: false })}>
            Try again
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
\`\`\`

**错误边界使用场景：**
错误边界适合用于处理渲染期间的错误，如组件渲染错误、生命周期方法错误、子组件构造函数错误。对于事件处理器中的错误，应该使用 try-catch 处理。

\`\`\`typescript
// 使用错误边界包裹可能出错的组件
function App() {
  return (
    <ErrorBoundary fallback={<ErrorFallback />}>
      <Header />
      <ErrorBoundary>
        <MainContent />
      </ErrorBoundary>
      <Footer />
    </ErrorBoundary>
  );
}

// 细粒度的错误边界
function Dashboard() {
  return (
    <div className="dashboard">
      <ErrorBoundary fallback={<WidgetError />}>
        <WidgetA />
      </ErrorBoundary>
      <ErrorBoundary fallback={<WidgetError />}>
        <WidgetB />
      </ErrorBoundary>
      <ErrorBoundary fallback={<WidgetError />}>
        <WidgetC />
      </ErrorBoundary>
    </div>
  );
}
\`\`\`

### 错误边界生命周期

**getDerivedStateFromError：**
静态方法 getDerivedStateFromError 在子组件抛出错误后被调用，接收错误对象作为参数，返回一个对象来更新 state。这个方法主要用于更新状态以显示备用 UI，不应该有副作用。

\`\`\`typescript
class ErrorBoundary extends Component<Props, State> {
  static getDerivedStateFromError(error: Error): State {
    // 更新 state，下一次渲染显示备用 UI
    return { hasError: true, error };
  }
}
\`\`\`

**componentDidCatch：**
componentDidCatch 在子组件抛出错误后被调用，接收错误对象和错误信息对象作为参数。这个方法主要用于记录错误信息，可以包含副作用。

\`\`\`typescript
interface ErrorInfo {
  componentStack: string;
}

class ErrorBoundary extends Component<Props, State> {
  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // 记录错误
    console.error('Error:', error);
    console.error('Component Stack:', errorInfo.componentStack);
    
    // 发送错误到监控服务
    if (process.env.NODE_ENV === 'production') {
      logErrorToService(error, errorInfo);
    }
  }
}
\`\`\`

### 高级错误边界模式

**可重置的错误边界：**
提供重置错误边界的能力，让用户可以尝试恢复应用。

\`\`\`typescript
interface ErrorBoundaryProps {
  children: ReactNode;
  fallback: ReactNode | ((props: { error: Error; resetErrorBoundary: () => void }) => ReactNode);
  onReset?: () => void;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, State> {
  state = { hasError: false, error: null };

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.props.onError?.(error, errorInfo);
  }

  resetErrorBoundary = () => {
    this.props.onReset?.();
    this.setState({ hasError: false, error: null });
  };

  render() {
    if (this.state.hasError) {
      const { fallback } = this.props;
      
      if (typeof fallback === 'function') {
        return fallback({
          error: this.state.error!,
          resetErrorBoundary: this.resetErrorBoundary,
        });
      }
      
      return fallback;
    }

    return this.props.children;
  }
}

// 使用示例
function App() {
  return (
    <ErrorBoundary
      fallback={({ error, resetErrorBoundary }) => (
        <div role="alert">
          <p>Something went wrong:</p>
          <pre>{error.message}</pre>
          <button onClick={resetErrorBoundary}>Try again</button>
        </div>
      )}
      onReset={() => {
        // 重置应用状态
        queryClient.clear();
      }}
    >
      <MyComponent />
    </ErrorBoundary>
  );
}
\`\`\`

**错误边界组合模式：**
组合多个错误边界处理不同类型的错误。

\`\`\`typescript
// API 错误边界
class ApiErrorBoundary extends Component<Props, State> {
  static getDerivedStateFromError(error: Error) {
    if (error instanceof ApiError) {
      return { hasError: true, error };
    }
    throw error; // 重新抛出非 API 错误
  }

  render() {
    if (this.state.hasError) {
      return <ApiErrorFallback error={this.state.error} />;
    }
    return this.props.children;
  }
}

// 权限错误边界
class PermissionErrorBoundary extends Component<Props, State> {
  static getDerivedStateFromError(error: Error) {
    if (error instanceof PermissionError) {
      return { hasError: true, error };
    }
    throw error;
  }

  render() {
    if (this.state.hasError) {
      return <PermissionErrorFallback />;
    }
    return this.props.children;
  }
}

// 组合使用
function App() {
  return (
    <ErrorBoundary fallback={<GenericError />}>
      <ApiErrorBoundary>
        <PermissionErrorBoundary>
          <MainContent />
        </PermissionErrorBoundary>
      </ApiErrorBoundary>
    </ErrorBoundary>
  );
}
\`\`\`

### 错误边界最佳实践

**1. 在关键位置放置错误边界：**
在应用的关键位置放置错误边界，防止整个应用崩溃。

\`\`\`typescript
function App() {
  return (
    <ErrorBoundary fallback={<AppError />}>
      <Header />
      <ErrorBoundary fallback={<ContentError />}>
        <MainContent />
      </ErrorBoundary>
      <ErrorBoundary fallback={<FooterError />}>
        <Footer />
      </ErrorBoundary>
    </ErrorBoundary>
  );
}
\`\`\`

**2. 提供有意义的错误信息：**
错误边界应该提供有意义的错误信息和恢复选项。

\`\`\`typescript
function ErrorFallback({ error, resetErrorBoundary }: { error: Error; resetErrorBoundary: () => void }) {
  return (
    <div className="error-container">
      <h2>Oops! Something went wrong</h2>
      <p>We're sorry, but something unexpected happened.</p>
      <details>
        <summary>Error details</summary>
        <pre>{error.message}</pre>
      </details>
      <div className="error-actions">
        <button onClick={resetErrorBoundary}>Try again</button>
        <button onClick={() => window.location.reload()}>Reload page</button>
        <a href="/">Go home</a>
      </div>
    </div>
  );
}
\`\`\`

**3. 结合错误监控服务：**
将错误信息发送到错误监控服务，便于追踪和修复问题。

\`\`\`typescript
class ErrorBoundary extends Component<Props, State> {
  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // 发送到 Sentry
    Sentry.captureException(error, { extra: errorInfo });
    
    // 发送到自定义监控服务
    fetch('/api/errors', {
      method: 'POST',
      body: JSON.stringify({
        error: error.message,
        stack: error.stack,
        componentStack: errorInfo.componentStack,
        timestamp: new Date().toISOString(),
        url: window.location.href,
        userAgent: navigator.userAgent,
      }),
    });
  }
}
\`\`\`

**4. 处理异步错误：**
错误边界无法捕获异步错误，需要使用其他方式处理。

\`\`\`typescript
// 使用 Error Boundary 处理渲染错误
function AsyncComponent() {
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    fetchData()
      .then(setData)
      .catch(setError);
  }, []);

  if (error) {
    // 手动抛出错误，让 Error Boundary 捕获
    throw error;
  }

  return <div>{data}</div>;
}

// 或者使用 react-error-boundary 库的 useErrorBoundary
import { useErrorBoundary } from 'react-error-boundary';

function AsyncComponent() {
  const { showBoundary } = useErrorBoundary();

  useEffect(() => {
    fetchData()
      .then(setData)
      .catch(showBoundary);
  }, []);

  return <div>{data}</div>;
}
\`\`\``,
      createdAt: '2026-03-15',
      updatedAt: '2026-03-15'
    };
