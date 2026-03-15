import { KnowledgeItem } from '@/types/knowledge';

export const react_routing: KnowledgeItem = {
      id: 'react-routing',
      title: 'React 路由深入',
      category: 'react',
      difficulty: 'medium',
      tags: ['React', '路由', 'React Router', '导航'],
      content: `## React 路由深入

路由是单页应用（SPA）的核心功能之一，它允许用户在不刷新页面的情况下导航到不同的视图。React Router 是 React 生态系统中最流行的路由库，理解其工作原理和高级用法对于构建复杂的 React 应用至关重要。

### React Router 基础

**路由配置：**
使用 BrowserRouter、Routes 和 Route 配置应用路由。

\`\`\`typescript
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/users" element={<Users />}>
            <Route index element={<UserList />} />
            <Route path=":userId" element={<UserDetail />} />
          </Route>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

// 嵌套路由
function Users() {
  return (
    <div>
      <h1>Users</h1>
      <Outlet /> {/* 子路由渲染位置 */}
    </div>
  );
}
\`\`\`

**导航组件：**
使用 Link 和 NavLink 进行声明式导航。

\`\`\`typescript
import { Link, NavLink, useNavigate } from 'react-router-dom';

function Navigation() {
  return (
    <nav>
      {/* 基础链接 */}
      <Link to="/">Home</Link>
      
      {/* NavLink：支持激活状态样式 */}
      <NavLink
        to="/about"
        className={({ isActive }) => 
          isActive ? 'nav-link active' : 'nav-link'
        }
        style={({ isActive }) => ({
          color: isActive ? 'red' : 'black',
        })}
      >
        About
      </NavLink>
      
      {/* 带查询参数 */}
      <Link to="/users?sort=name">Users</Link>
      
      {/* 相对路径 */}
      <Link to="../settings">Settings</Link>
    </nav>
  );
}

// 编程式导航
function LoginForm() {
  const navigate = useNavigate();
  
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const success = await login();
    if (success) {
      navigate('/dashboard', { replace: true });
    }
  };
  
  return <form onSubmit={handleSubmit}>...</form>;
}
\`\`\`

### 路由参数和查询

**动态路由参数：**
使用 useParams 获取路由参数。

\`\`\`typescript
import { useParams } from 'react-router-dom';

function UserDetail() {
  const { userId } = useParams<{ userId: string }>();
  
  const { data: user, isLoading } = useQuery({
    queryKey: ['user', userId],
    queryFn: () => fetchUser(userId!),
    enabled: !!userId,
  });
  
  if (isLoading) return <Spinner />;
  if (!user) return <NotFound />;
  
  return (
    <div>
      <h1>{user.name}</h1>
      <p>Email: {user.email}</p>
    </div>
  );
}

// 多个参数
function Post() {
  const { userId, postId } = useParams();
  // /users/:userId/posts/:postId
  return <div>Post {postId} by User {userId}</div>;
}
\`\`\`

**查询参数：**
使用 useSearchParams 管理查询参数。

\`\`\`typescript
import { useSearchParams } from 'react-router-dom';

function ProductList() {
  const [searchParams, setSearchParams] = useSearchParams();
  
  const page = searchParams.get('page') || '1';
  const sort = searchParams.get('sort') || 'name';
  const category = searchParams.get('category');
  
  const { data: products } = useQuery({
    queryKey: ['products', { page, sort, category }],
    queryFn: () => fetchProducts({ page, sort, category }),
  });
  
  const handlePageChange = (newPage: number) => {
    setSearchParams(prev => {
      prev.set('page', newPage.toString());
      return prev;
    });
  };
  
  const handleSortChange = (newSort: string) => {
    setSearchParams(prev => {
      prev.set('sort', newSort);
      prev.set('page', '1'); // 重置页码
      return prev;
    });
  };
  
  return (
    <div>
      <SortSelect value={sort} onChange={handleSortChange} />
      <ProductGrid products={products} />
      <Pagination
        current={parseInt(page)}
        onChange={handlePageChange}
      />
    </div>
  );
}
\`\`\`

### 路由守卫

**保护路由：**
实现路由守卫保护需要认证的路由。

\`\`\`typescript
import { Navigate, useLocation } from 'react-router-dom';

interface ProtectedRouteProps {
  children: React.ReactNode;
  redirectTo?: string;
}

function ProtectedRoute({ 
  children, 
  redirectTo = '/login' 
}: ProtectedRouteProps) {
  const { user, isLoading } = useAuth();
  const location = useLocation();
  
  if (isLoading) {
    return <Spinner />;
  }
  
  if (!user) {
    // 保存当前路径，登录后重定向回来
    return <Navigate to={redirectTo} state={{ from: location }} replace />;
  }
  
  return <>{children}</>;
}

// 使用
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

// 登录后重定向
function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const from = (location.state as any)?.from?.pathname || '/';
  
  const handleLogin = async () => {
    await login();
    navigate(from, { replace: true });
  };
  
  return <button onClick={handleLogin}>Login</button>;
}
\`\`\`

**权限路由：**
基于角色权限控制路由访问。

\`\`\`typescript
interface RoleRouteProps {
  children: React.ReactNode;
  allowedRoles: string[];
}

function RoleRoute({ children, allowedRoles }: RoleRouteProps) {
  const { user } = useAuth();
  
  if (!user || !allowedRoles.includes(user.role)) {
    return <Navigate to="/forbidden" replace />;
  }
  
  return <>{children}</>;
}

// 使用
<Route
  path="/admin"
  element={
    <RoleRoute allowedRoles={['admin']}>
      <AdminPanel />
    </RoleRoute>
  }
/>
\`\`\`

### 数据路由 (React Router 6.4+)

**Loader 和 Action：**
使用 loader 预加载数据，使用 action 处理表单提交。

\`\`\`typescript
import { createBrowserRouter, RouterProvider, useLoaderData, Form } from 'react-router-dom';

// Loader：预加载数据
async function userLoader({ params }: { params: { userId: string } }) {
  const user = await fetchUser(params.userId);
  if (!user) {
    throw new Response('Not Found', { status: 404 });
  }
  return user;
}

// Action：处理表单提交
async function userAction({ request, params }: { request: Request; params: { userId: string } }) {
  const formData = await request.formData();
  const updates = Object.fromEntries(formData);
  return updateUser(params.userId, updates);
}

// 路由配置
const router = createBrowserRouter([
  {
    path: '/users/:userId',
    element: <UserDetail />,
    loader: userLoader,
    action: userAction,
    errorElement: <ErrorBoundary />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

// 组件中使用
function UserDetail() {
  const user = useLoaderData() as User;
  
  return (
    <div>
      <h1>{user.name}</h1>
      <Form method="post">
        <input name="name" defaultValue={user.name} />
        <button type="submit">Update</button>
      </Form>
    </div>
  );
}
\`\`\`

### 路由最佳实践

**1. 懒加载路由组件：**
\`\`\`typescript
import { lazy, Suspense } from 'react';

const Dashboard = lazy(() => import('./pages/Dashboard'));
const Settings = lazy(() => import('./pages/Settings'));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
\`\`\`

**2. 使用 404 页面：**
\`\`\`typescript
function NotFound() {
  return (
    <div>
      <h1>404 - Page Not Found</h1>
      <Link to="/">Go Home</Link>
    </div>
  );
}

<Route path="*" element={<NotFound />} />
\`\`\``,
      createdAt: '2026-03-15',
      updatedAt: '2026-03-15'
    };
