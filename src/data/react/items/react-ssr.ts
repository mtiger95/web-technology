import { KnowledgeItem } from '@/types/knowledge';

export const react_ssr: KnowledgeItem = {
      id: 'react-ssr',
      title: 'React 服务端渲染 (SSR) 深度解析',
      category: 'react',
      difficulty: 'hard',
      tags: ['React', 'SSR', 'Next.js', '性能'],
      content: `## React 服务端渲染 (SSR) 深度解析

服务端渲染 (SSR) 是提高 React 应用首屏性能和 SEO 的重要技术。与客户端渲染 (CSR) 不同，SSR 在服务器端生成完整的 HTML，然后发送给客户端，用户可以更快地看到页面内容。SSR 对于内容驱动的网站、电商、博客等需要良好 SEO 的应用尤为重要。

### SSR 核心概念

**SSR 工作原理：**
服务端渲染的工作流程包括：服务器接收请求、执行 React 组件渲染、生成完整 HTML、发送给客户端、客户端进行 hydration（激活交互）。Hydration 是 SSR 的关键步骤，React 在客户端重新执行组件，绑定事件处理器，使页面变得可交互。Hydration 过程中，React 会对比服务端渲染的 HTML 和客户端渲染的结果，确保一致性。

**SSR 的优势：**
更快的首屏加载，用户可以更快看到页面内容；更好的 SEO，搜索引擎可以抓取完整的页面内容；支持社交媒体分享，Open Graph 和 Twitter Card 标签可以正确显示；更好的可访问性，屏幕阅读器可以读取完整的页面内容。

**SSR 的挑战：**
服务器负载增加，每次请求都需要渲染；开发复杂度提高，需要处理服务器和客户端环境的差异；某些浏览器 API 不可用，如 window、document；hydration 错误需要特别注意，服务端和客户端渲染结果必须一致。

### 代码示例

\`\`\`javascript
// Next.js App Router - 服务器组件
// app/users/page.tsx
async function UsersPage() {
  // 直接在服务器组件中获取数据
  const users = await fetch('https://api.example.com/users', {
    cache: 'no-store' // 每次请求都重新获取
  }).then(res => res.json());
  
  return (
    <main>
      <h1>Users</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </main>
  );
}

// 静态生成 (SSG)
// app/blog/[slug]/page.tsx
export async function generateStaticParams() {
  const posts = await fetch('https://api.example.com/posts').then(res => res.json());
  
  return posts.map(post => ({
    slug: post.slug
  }));
}

async function BlogPost({ params }) {
  const post = await fetch(\`https://api.example.com/posts/\${params.slug}\`, {
    next: { revalidate: 3600 } // ISR: 每小时重新验证
  }).then(res => res.json());
  
  return (
    <article>
      <h1>{post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </article>
  );
}

// Pages Router - getServerSideProps
export async function getServerSideProps(context) {
  const { params, req, res } = context;
  
  // 设置缓存头
  res.setHeader('Cache-Control', 'public, s-maxage=10, stale-while-revalidate=59');
  
  const data = await fetch(\`https://api.example.com/data/\${params.id}\`);
  const item = await data.json();
  
  return {
    props: { item }
  };
}

function ServerPage({ item }) {
  return <div>{item.name}</div>;
}

// Pages Router - getStaticProps
export async function getStaticProps() {
  const data = await fetch('https://api.example.com/posts');
  const posts = await data.json();
  
  return {
    props: { posts },
    revalidate: 60 // ISR: 60秒后重新生成
  };
}

// Pages Router - getStaticPaths
export async function getStaticPaths() {
  const data = await fetch('https://api.example.com/posts');
  const posts = await data.json();
  
  const paths = posts.map(post => ({
    params: { id: post.id.toString() }
  }));
  
  return {
    paths,
    fallback: 'blocking' // 或 true, false
  };
}

// 自定义 SSR 服务器
import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import App from './App';

const app = express();

app.get('*', (req, res) => {
  const context = {};
  
  const html = renderToString(
    <StaticRouter location={req.url} context={context}>
      <App />
    </StaticRouter>
  );
  
  if (context.url) {
    res.redirect(context.url);
    return;
  }
  
  res.send(\`
    <!DOCTYPE html>
    <html>
      <head>
        <title>SSR App</title>
      </head>
      <body>
        <div id="root">\${html}</div>
        <script src="/client.js"></script>
      </body>
    </html>
  \`);
});

// Hydration
import { hydrateRoot } from 'react-dom/client';
import App from './App';

hydrateRoot(document.getElementById('root'), <App />);

// 流式 SSR
import { renderToPipeableStream } from 'react-dom/server';

app.get('*', (req, res) => {
  const { pipe } = renderToPipeableStream(
    <App />,
    {
      bootstrapScripts: ['/client.js'],
      onShellReady() {
        res.setHeader('Content-Type', 'text/html');
        pipe(res);
      },
      onShellError(error) {
        res.status(500).send('Error');
      }
    }
  );
});

// 客户端组件与 SSR 配合
'use client';

import { useState, useEffect } from 'react';

function ClientComponent() {
  const [data, setData] = useState(null);
  
  useEffect(() => {
    // 只在客户端执行
    fetch('/api/data')
      .then(res => res.json())
      .then(setData);
  }, []);
  
  if (!data) return <div>Loading...</div>;
  
  return <div>{data.message}</div>;
}

// 服务器组件中嵌入客户端组件
async function ServerComponent() {
  const initialData = await fetchInitialData();
  
  return (
    <div>
      <h1>Server Rendered</h1>
      <ClientComponent initialData={initialData} />
    </div>
  );
}

// 处理 SSR 中的环境差异
function SafeComponent() {
  const [isClient, setIsClient] = useState(false);
  
  useEffect(() => {
    setIsClient(true);
  }, []);
  
  return (
    <div>
      {isClient ? (
        <ClientOnlyFeature />
      ) : (
        <ServerFallback />
      )}
    </div>
  );
}

// 动态导入避免 SSR
const DynamicComponent = dynamic(() => import('./ClientOnlyComponent'), {
  ssr: false,
  loading: () => <p>Loading...</p>
});
\`\`\`

### Next.js 渲染模式详解

**静态生成 (SSG)：**
静态生成在构建时生成 HTML 文件，适合内容不经常变化的页面。SSG 提供了最佳的性能，因为 HTML 文件可以直接由 CDN 分发。使用 getStaticProps 获取数据，使用 getStaticPaths 生成动态路由。SSG 适合博客、文档、产品列表等场景。

**服务端渲染 (SSR)：**
服务端渲染在每次请求时生成 HTML，适合内容经常变化的页面。SSR 提供了良好的 SEO 和首屏性能，但会增加服务器负载。使用 getServerSideProps 获取数据。SSR 适合新闻、电商、社交媒体等场景。

**增量静态再生 (ISR)：**
ISR 结合了 SSG 和 SSR 的优点，初始时使用静态页面，当数据变化时重新生成特定页面。ISR 通过 revalidate 属性设置重新生成的时间间隔。ISR 适合内容定期更新的场景，如博客、新闻、电商等。

### 性能优化策略

**代码分割：**
使用动态导入 (dynamic import) 按需加载组件，减少初始加载体积。Next.js 自动按路由分割代码，也可以手动分割大型组件。

**缓存策略：**
合理设置 HTTP 缓存头，使用 CDN 缓存静态资源。对于 ISR 页面，设置合适的 revalidate 时间。使用 Cache-Control 头控制浏览器缓存行为。

**流式渲染：**
使用 renderToPipeableStream 或 renderToReadableStream 实现流式 SSR，逐步发送 HTML 到客户端，用户可以更快看到内容。配合 Suspense 实现组件级别的流式渲染。

**预加载和预取：**
使用 <link rel="preload"> 预加载关键资源。Next.js 的 <Link> 组件自动预取链接页面。使用 router.prefetch() 手动预取页面。`,
      createdAt: '2026-03-14',
      updatedAt: '2026-03-14'
    };
