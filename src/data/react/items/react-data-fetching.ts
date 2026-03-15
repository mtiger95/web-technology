import { KnowledgeItem } from '@/types/knowledge';

export const react_data_fetching: KnowledgeItem = {
      id: 'react-data-fetching',
      title: 'React 数据获取策略',
      category: 'react',
      difficulty: 'medium',
      tags: ['React', '数据获取', 'API', 'SWR', 'React Query'],
      content: `## React 数据获取策略

数据获取是 React 应用中最常见的需求之一。选择合适的数据获取策略对于构建高性能、用户体验良好的应用至关重要。本文将介绍 React 中常用的数据获取方式和最佳实践。

### 基础数据获取

**useEffect + fetch：**
最基础的数据获取方式，使用 useEffect 和 fetch API。

\`\`\`typescript
import { useState, useEffect } from 'react';

interface User {
  id: number;
  name: string;
  email: string;
}

function UserProfile({ userId }: { userId: string }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    
    async function fetchUser() {
      try {
        setLoading(true);
        const response = await fetch(\`/api/users/\${userId}\`, {
          signal: controller.signal,
        });
        
        if (!response.ok) {
          throw new Error('Failed to fetch user');
        }
        
        const data = await response.json();
        setUser(data);
        setError(null);
      } catch (e) {
        if (e instanceof Error && e.name !== 'AbortError') {
          setError(e);
        }
      } finally {
        setLoading(false);
      }
    }
    
    fetchUser();
    
    return () => {
      controller.abort();
    };
  }, [userId]);

  if (loading) return <Spinner />;
  if (error) return <Error message={error.message} />;
  if (!user) return null;

  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
    </div>
  );
}
\`\`\`

### React Query

**基础使用：**
React Query 是最流行的数据获取库之一，提供了强大的缓存、状态管理和后台更新功能。

\`\`\`typescript
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

// 获取数据
function UserProfile({ userId }: { userId: string }) {
  const { data: user, isLoading, error, refetch } = useQuery({
    queryKey: ['user', userId],
    queryFn: () => fetchUser(userId),
    staleTime: 5 * 60 * 1000, // 5 分钟内数据被认为是新鲜的
    gcTime: 10 * 60 * 1000, // 10 分钟后清除缓存
    refetchOnWindowFocus: true, // 窗口聚焦时重新获取
    retry: 2, // 失败重试次数
  });

  if (isLoading) return <Spinner />;
  if (error) return <Error message={error.message} />;
  
  return (
    <div>
      <h1>{user.name}</h1>
      <button onClick={() => refetch()}>Refresh</button>
    </div>
  );
}

// 修改数据
function UpdateUser({ userId }: { userId: string }) {
  const queryClient = useQueryClient();
  
  const mutation = useMutation({
    mutationFn: (newName: string) => updateUser(userId, { name: newName }),
    onMutate: async (newName) => {
      // 取消正在进行的查询
      await queryClient.cancelQueries({ queryKey: ['user', userId] });
      
      // 保存旧数据
      const previousUser = queryClient.getQueryData(['user', userId]);
      
      // 乐观更新
      queryClient.setQueryData(['user', userId], (old: User) => ({
        ...old,
        name: newName,
      }));
      
      return { previousUser };
    },
    onError: (err, newName, context) => {
      // 回滚
      queryClient.setQueryData(['user', userId], context.previousUser);
    },
    onSettled: () => {
      // 重新获取最新数据
      queryClient.invalidateQueries({ queryKey: ['user', userId] });
    },
  });

  return (
    <button onClick={() => mutation.mutate('New Name')}>
      Update Name
    </button>
  );
}
\`\`\`

**并行查询：**
使用 useQueries 进行并行数据获取。

\`\`\`typescript
import { useQueries } from '@tanstack/react-query';

function UserList({ userIds }: { userIds: string[] }) {
  const queries = useQueries({
    queries: userIds.map(id => ({
      queryKey: ['user', id],
      queryFn: () => fetchUser(id),
    })),
  });

  const isLoading = queries.some(q => q.isLoading);
  const errors = queries.filter(q => q.error);

  if (isLoading) return <Spinner />;
  if (errors.length > 0) return <Error />;

  return (
    <ul>
      {queries.map((query, index) => (
        <li key={userIds[index]}>{query.data?.name}</li>
      ))}
    </ul>
  );
}
\`\`\`

### SWR

**基础使用：**
SWR (stale-while-revalidate) 是 Vercel 开发的数据获取库，以简单和轻量著称。

\`\`\`typescript
import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then(res => res.json());

function UserProfile({ userId }: { userId: string }) {
  const { data: user, error, isLoading, mutate } = useSWR(
    \`/api/users/\${userId}\`,
    fetcher,
    {
      revalidateOnFocus: true,
      revalidateOnReconnect: true,
      refreshInterval: 0,
    }
  );

  if (isLoading) return <Spinner />;
  if (error) return <Error message={error.message} />;

  return (
    <div>
      <h1>{user.name}</h1>
      <button onClick={() => mutate()}>Refresh</button>
    </div>
  );
}

// 条件获取
function ConditionalFetch({ userId }: { userId: string | null }) {
  const { data } = useSWR(userId ? \`/api/users/\${userId}\` : null, fetcher);
  // 只有 userId 存在时才会发起请求
  return <div>{data?.name}</div>;
}

// 依赖获取
function UserPosts({ userId }: { userId: string }) {
  const { data: user } = useSWR(\`/api/users/\${userId}\`, fetcher);
  const { data: posts } = useSWR(
    () => user ? \`/api/users/\${user.id}/posts\` : null,
    fetcher
  );
  // 只有 user 获取成功后才会获取 posts
  return <div>{/* ... */}</div>;
}
\`\`\`

### 数据获取最佳实践

**1. 使用 AbortController 取消请求：**
\`\`\`typescript
function useFetch<T>(url: string) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    
    fetch(url, { signal: controller.signal })
      .then(res => res.json())
      .then(setData)
      .catch(err => {
        if (err.name !== 'AbortError') {
          setError(err);
        }
      })
      .finally(() => setLoading(false));
    
    return () => controller.abort();
  }, [url]);

  return { data, loading, error };
}
\`\`\`

**2. 实现请求重试：**
\`\`\`typescript
async function fetchWithRetry(
  url: string,
  options: RequestInit = {},
  retries: number = 3
): Promise<Response> {
  for (let i = 0; i < retries; i++) {
    try {
      const response = await fetch(url, options);
      if (response.ok) return response;
      throw new Error(\`HTTP \${response.status}\`);
    } catch (error) {
      if (i === retries - 1) throw error;
      await new Promise(resolve => 
        setTimeout(resolve, 1000 * Math.pow(2, i))
      );
    }
  }
  throw new Error('Max retries reached');
}
\`\`\`

**3. 实现请求缓存：**
\`\`\`typescript
const cache = new Map<string, { data: any; timestamp: number }>();

async function fetchWithCache<T>(
  url: string,
  maxAge: number = 5 * 60 * 1000
): Promise<T> {
  const cached = cache.get(url);
  
  if (cached && Date.now() - cached.timestamp < maxAge) {
    return cached.data;
  }
  
  const response = await fetch(url);
  const data = await response.json();
  
  cache.set(url, { data, timestamp: Date.now() });
  
  return data;
}
\`\`\``,
      createdAt: '2026-03-15',
      updatedAt: '2026-03-15'
    };
