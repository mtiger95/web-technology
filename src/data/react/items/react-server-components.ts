import { KnowledgeItem } from '@/types/knowledge';

export const react_server_components: KnowledgeItem = {
      id: 'react-server-components',
      title: 'React Server Components 深度解析',
      category: 'react',
      difficulty: 'hard',
      tags: ['React', 'Server Components', 'RSC', 'Next.js'],
      content: `## React Server Components 深度解析

React Server Components (RSC) 是 React 18 引入的革命性特性，它允许组件在服务器端渲染，并将渲染结果流式传输到客户端。RSC 代表了 React 架构的重大演进，它重新定义了前端和后端的边界，为构建高性能 Web 应用提供了新的范式。

### 核心概念详解

**服务器组件 (Server Components)：**
服务器组件是在服务器端执行的 React 组件，其代码不会发送到客户端。服务器组件可以直接访问数据库、文件系统、内部 API 等服务器资源，无需通过 API 层。服务器组件的渲染结果是序列化的 JSX，流式传输到客户端后由 React 恢复。服务器组件不支持状态（useState）和副作用（useEffect），因为它们不会在客户端执行。服务器组件的优势包括：零客户端 JavaScript 体积、直接访问后端资源、更快的首屏渲染、更好的 SEO。

**客户端组件 (Client Components)：**
客户端组件是传统的 React 组件，在浏览器中执行。客户端组件支持所有 React 特性：状态管理、副作用、事件处理、浏览器 API 等。在 Next.js App Router 中，需要使用 'use client' 指令标记客户端组件。客户端组件会增加 JavaScript 包大小，但提供了丰富的交互能力。合理划分服务器组件和客户端组件是 RSC 架构的关键。

**组件边界与组合：**
服务器组件和客户端组件可以组合使用，形成组件树。服务器组件可以导入和渲染客户端组件，但客户端组件不能导入服务器组件。服务器组件可以通过 props 向客户端组件传递数据，包括序列化的 JSON 数据和 React 元素（作为 children）。理解组件边界对于正确使用 RSC 至关重要。

### 代码示例

\`\`\`javascript
// 服务器组件示例 (默认)
// app/users/page.tsx
async function UsersPage() {
  // 直接访问数据库，无需 API
  const users = await db.users.findMany({
    select: { id: true, name: true, email: true }
  });
  
  return (
    <div>
      <h1>Users List</h1>
      <UserList users={users} />
    </div>
  );
}

// 服务器组件中的数据获取
async function UserProfile({ userId }) {
  // 并行获取多个数据源
  const [user, posts, followers] = await Promise.all([
    fetchUser(userId),
    fetchPosts(userId),
    fetchFollowers(userId)
  ]);
  
  return (
    <div>
      <UserHeader user={user} />
      <Suspense fallback={<PostsSkeleton />}>
        <PostsList posts={posts} />
      </Suspense>
      <FollowersList followers={followers} />
    </div>
  );
}

// 客户端组件
'use client';

import { useState } from 'react';

function LikeButton({ postId, initialLikes }) {
  const [likes, setLikes] = useState(initialLikes);
  const [isLiked, setIsLiked] = useState(false);
  
  const handleLike = async () => {
    const newLikedState = !isLiked;
    setIsLiked(newLikedState);
    setLikes(prev => newLikedState ? prev + 1 : prev - 1);
    
    // 调用 API 更新服务器状态
    await fetch(\`/api/posts/\${postId}/like\`, {
      method: newLikedState ? 'POST' : 'DELETE'
    });
  };
  
  return (
    <button onClick={handleLike}>
      {isLiked ? '❤️' : '🤍'} {likes}
    </button>
  );
}

// 服务器组件传递 props 给客户端组件
async function PostCard({ postId }) {
  const post = await fetchPost(postId);
  
  return (
    <article>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      {/* 传递序列化数据给客户端组件 */}
      <LikeButton postId={post.id} initialLikes={post.likes} />
    </article>
  );
}

// 服务器组件传递 children 给客户端组件
// components/ClientWrapper.tsx
'use client';

import { useState } from 'react';

export function ExpandableSection({ children, title }) {
  const [isExpanded, setIsExpanded] = useState(false);
  
  return (
    <div className="expandable-section">
      <button onClick={() => setIsExpanded(!isExpanded)}>
        {title} {isExpanded ? '−' : '+'}
      </button>
      {isExpanded && <div className="content">{children}</div>}
    </div>
  );
}

// app/page.tsx (服务器组件)
import { ExpandableSection } from '@/components/ClientWrapper';

async function Page() {
  const data = await fetchData();
  
  return (
    <div>
      {/* 服务器组件内容作为 children 传递给客户端组件 */}
      <ExpandableSection title="Details">
        <ServerRenderedContent data={data} />
      </ExpandableSection>
    </div>
  );
}

// 流式渲染与 Suspense
async function StreamingPage() {
  return (
    <div>
      <h1>Dashboard</h1>
      
      {/* 快速加载的内容 */}
      <QuickStats />
      
      {/* 流式加载的内容 */}
      <Suspense fallback={<ChartSkeleton />}>
        <SlowChart />
      </Suspense>
      
      <Suspense fallback={<TableSkeleton />}>
        <DataTable />
      </Suspense>
    </div>
  );
}

// 服务器组件中的错误处理
async function SafeDataFetch({ userId }) {
  try {
    const user = await fetchUser(userId);
    return <UserProfile user={user} />;
  } catch (error) {
    // 错误会冒泡到最近的 Error Boundary
    throw new Error('Failed to load user');
  }
}

// 错误边界组件
'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);
  
  return (
    <div>
      <h2>Something went wrong!</h2>
      <button onClick={reset}>Try again</button>
    </div>
  );
}

// 服务器操作 (Server Actions)
async function updateProfile(formData) {
  'use server';
  
  const userId = formData.get('userId');
  const name = formData.get('name');
  
  await db.users.update({
    where: { id: userId },
    data: { name }
  });
  
  revalidatePath('/profile');
}

// 在服务器组件中使用 Server Action
async function ProfileForm({ user }) {
  return (
    <form action={updateProfile}>
      <input type="hidden" name="userId" value={user.id} />
      <input type="text" name="name" defaultValue={user.name} />
      <button type="submit">Update</button>
    </form>
  );
}

// 混合使用服务器和客户端组件的最佳实践
// app/layout.tsx
import { Navbar } from '@/components/Navbar';
import { Sidebar } from '@/components/Sidebar';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {/* 静态布局 - 服务器组件 */}
        <Navbar />
        <div className="flex">
          <Sidebar />
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}

// components/Navbar.tsx
'use client';

import { useState } from 'react';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <nav>
      <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
        Menu
      </button>
      {isMenuOpen && <MobileMenu />}
    </nav>
  );
}
\`\`\`

### 使用场景划分

**服务器组件适用场景：**
- 数据获取和展示：直接访问数据库或 API，无需额外的数据层
- 静态内容：博客文章、产品描述、文档等不经常变化的内容
- SEO 关键页面：需要搜索引擎索引的页面
- 大型数据列表：减少客户端 JavaScript 体积
- 布局和页面结构：导航、侧边栏、页脚等

**客户端组件适用场景：**
- 交互式 UI：表单、按钮、滑块等需要响应用户输入的组件
- 状态管理：需要 useState、useReducer 等状态 Hook 的组件
- 生命周期操作：需要 useEffect 的副作用处理
- 浏览器 API：使用 window、localStorage、Web API 等
- 动画和过渡：使用 CSS 动画或动画库的组件

### 最佳实践

- **合理划分组件边界**：将交互逻辑封装在客户端组件中，数据获取和静态内容放在服务器组件
- **减少客户端 JavaScript**：尽可能使用服务器组件，减少发送到客户端的代码量
- **利用流式渲染**：使用 Suspense 实现渐进式加载，提升用户体验
- **正确处理错误**：使用 Error Boundary 捕获和处理服务器组件错误
- **遵循 Next.js 约定**：理解 App Router 的文件约定，正确使用 'use client' 指令`,
      createdAt: '2026-03-14',
      updatedAt: '2026-03-14'
    };
