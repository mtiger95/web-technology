import { KnowledgeItem } from '@/types/knowledge';

export const react_suspense: KnowledgeItem = {
      id: 'react-suspense',
      title: 'React Suspense 深入理解',
      category: 'react',
      difficulty: 'medium',
      tags: ['React', 'Suspense', '懒加载', '数据获取'],
      content: `## React Suspense 深入理解

Suspense 是 React 提供的一种处理异步操作的机制，可以等待代码或数据加载完成，然后显示加载状态。Suspense 是 React 并发模式的核心特性之一，对于构建流畅的用户体验至关重要。

### Suspense 基础

**代码分割与懒加载：**
Suspense 最常见的用途是与 React.lazy 配合实现组件的懒加载。

\`\`\`typescript
import { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// 懒加载组件
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Dashboard = lazy(() => import('./pages/Dashboard'));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

// 加载组件
function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500" />
    </div>
  );
}
\`\`\`

**嵌套 Suspense：**
Suspense 可以嵌套使用，外层 Suspense 作为后备，内层 Suspense 可以显示更细粒度的加载状态。

\`\`\`typescript
function App() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Header />
      <main>
        <Suspense fallback={<ContentLoader />}>
          <Article />
          <Suspense fallback={<CommentsLoader />}>
            <Comments />
          </Suspense>
        </Suspense>
      </main>
      <Footer />
    </Suspense>
  );
}
\`\`\`

### Suspense for Data Fetching

**基本概念：**
Suspense for Data Fetching 允许组件在数据加载时挂起，显示最近的 Suspense fallback。这需要数据获取库的支持，如 React Query、SWR、Relay 等。

\`\`\`typescript
import { Suspense } from 'react';

// 使用 React Query 的 Suspense 模式
import { useQuery, QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Suspense fallback={<Spinner />}>
        <UserProfile userId="1" />
      </Suspense>
    </QueryClientProvider>
  );
}

function UserProfile({ userId }: { userId: string }) {
  // useSuspenseQuery 会在数据加载时挂起组件
  const { data: user } = useSuspenseQuery({
    queryKey: ['user', userId],
    queryFn: () => fetchUser(userId),
  });

  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
    </div>
  );
}
\`\`\`

**自定义 Suspense 数据源：**
可以创建自定义的 Suspense 数据源，实现抛出 Promise 的模式。

\`\`\`typescript
// 创建 Suspense 资源
function createResource<T>(promise: Promise<T>) {
  let status: 'pending' | 'fulfilled' | 'rejected' = 'pending';
  let result: T;
  let error: Error;

  const suspender = promise.then(
    (data) => {
      status = 'fulfilled';
      result = data;
    },
    (e) => {
      status = 'rejected';
      error = e;
    }
  );

  return {
    read(): T {
      if (status === 'pending') {
        throw suspender; // 抛出 Promise，触发 Suspense
      }
      if (status === 'rejected') {
        throw error;
      }
      return result;
    },
  };
}

// 使用自定义资源
function useResource<T>(promise: Promise<T>): T {
  const [resource] = useState(() => createResource(promise));
  return resource.read();
}

// 组件中使用
function UserProfile({ userId }: { userId: string }) {
  const user = useResource(fetchUser(userId));
  
  return (
    <div>
      <h1>{user.name}</h1>
    </div>
  );
}
\`\`\`

### Suspense 与错误处理

**Error Boundary 与 Suspense：**
当 Suspense 中的组件抛出错误时，需要 Error Boundary 来捕获并显示错误 UI。

\`\`\`typescript
import { Component, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fallback: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}

// 使用 Error Boundary 包裹 Suspense
function App() {
  return (
    <ErrorBoundary fallback={<ErrorUI />}>
      <Suspense fallback={<Loading />}>
        <DataComponent />
      </Suspense>
    </ErrorBoundary>
  );
}
\`\`\`

### Suspense 最佳实践

**1. 合理设置 fallback：**
fallback 应该提供良好的用户体验，避免空白或简单的加载文字。

\`\`\`typescript
// ❌ 不好的 fallback
<Suspense fallback={<div>Loading...</div>}>
  <Article />
</Suspense>

// ✅ 好的 fallback：骨架屏
<Suspense fallback={<ArticleSkeleton />}>
  <Article />
</Suspense>

// 骨架屏组件
function ArticleSkeleton() {
  return (
    <div className="animate-pulse">
      <div className="h-8 bg-gray-200 rounded w-3/4 mb-4" />
      <div className="h-4 bg-gray-200 rounded w-full mb-2" />
      <div className="h-4 bg-gray-200 rounded w-5/6 mb-2" />
      <div className="h-4 bg-gray-200 rounded w-4/5" />
    </div>
  );
}
\`\`\`

**2. 细粒度 Suspense：**
将 Suspense 放在合适的位置，避免整个页面加载。

\`\`\`typescript
// ❌ 粗粒度：整个页面加载
<Suspense fallback={<PageLoader />}>
  <Header />
  <MainContent />
  <Sidebar />
  <Footer />
</Suspense>

// ✅ 细粒度：只加载需要的部分
<>
  <Header />
  <main className="flex">
    <Suspense fallback={<ContentSkeleton />}>
      <MainContent />
    </Suspense>
    <Suspense fallback={<SidebarSkeleton />}>
      <Sidebar />
    </Suspense>
  </main>
  <Footer />
</>
\`\`\`

**3. 预加载资源：**
使用 preload 或 prefetch 预加载资源，减少用户等待时间。

\`\`\`typescript
// 预加载组件
const Dashboard = lazy(() => import('./Dashboard'));

// 在用户可能导航到 Dashboard 时预加载
function preloadDashboard() {
  import('./Dashboard');
}

function App() {
  return (
    <nav>
      <Link to="/" onMouseEnter={preloadDashboard}>
        Dashboard
      </Link>
    </nav>
  );
}
\`\`\``,
      createdAt: '2026-03-15',
      updatedAt: '2026-03-15'
    };
