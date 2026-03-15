import { KnowledgeItem } from '@/types/knowledge';

export const javascript_async: KnowledgeItem = {
      id: 'javascript-async',
      title: 'JavaScript 异步编程模式',
      category: 'javascript',
      difficulty: 'medium',
      tags: ['JavaScript', '异步', 'Promise', 'async/await'],
      content: `## JavaScript 异步编程模式

JavaScript 是一门单线程语言，异步编程是其核心特性之一，掌握各种异步编程模式对于编写高性能的应用至关重要。

### 回调函数

**回调函数的概念：**
- 作为参数传递给其他函数的函数
- 在异步操作完成后被调用

**回调地狱：**
- 嵌套的回调函数
- 代码难以阅读和维护
- 错误处理复杂

### 代码示例

#### 回调函数示例

\`\`\`javascript
// 基本回调函数
function fetchData(callback) {
  setTimeout(() => {
    const data = { name: 'Alice', age: 25 };
    callback(null, data);
  }, 1000);
}

fetchData((error, data) => {
  if (error) {
    console.error('Error:', error);
    return;
  }
  console.log('Data:', data);
});

// 回调地狱
fetchData((error, data) => {
  if (error) {
    console.error('Error:', error);
    return;
  }
  
  processData(data, (error, processedData) => {
    if (error) {
      console.error('Error:', error);
      return;
    }
    
    saveData(processedData, (error, result) => {
      if (error) {
        console.error('Error:', error);
        return;
      }
      
      console.log('Result:', result);
    });
  });
});
\`\`\`

### Promise

**Promise 的概念：**
- 表示一个异步操作的最终完成或失败
- 有三种状态：pending、fulfilled、rejected
- 状态一旦改变就不会再变

**Promise 的方法：**
- then()：处理成功的结果
- catch()：处理错误
- finally()：无论成功或失败都会执行
- all()：等待所有 Promise 完成
- race()：等待第一个 Promise 完成
- allSettled()：等待所有 Promise 完成或失败
- any()：等待第一个成功的 Promise

### 代码示例

#### Promise 基础示例

\`\`\`javascript
// 创建 Promise
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const success = Math.random() > 0.5;
    
    if (success) {
      resolve({ name: 'Alice', age: 25 });
    } else {
      reject(new Error('Failed to fetch data'));
    }
  }, 1000);
});

// 使用 Promise
promise
  .then(data => {
    console.log('Data:', data);
    return data;
  })
  .catch(error => {
    console.error('Error:', error);
  })
  .finally(() => {
    console.log('Operation completed');
  });
\`\`\`

#### Promise 链式调用

\`\`\`javascript
function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ name: 'Alice', age: 25 });
    }, 1000);
  });
}

function processData(data) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ ...data, processed: true });
    }, 500);
  });
}

function saveData(data) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ success: true, data });
    }, 300);
  });
}

// 链式调用
fetchData()
  .then(data => {
    console.log('Fetched:', data);
    return processData(data);
  })
  .then(data => {
    console.log('Processed:', data);
    return saveData(data);
  })
  .then(result => {
    console.log('Saved:', result);
  })
  .catch(error => {
    console.error('Error:', error);
  });
\`\`\`

#### Promise.all 并发执行

\`\`\`javascript
function fetchUser(id) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id, name: \`User \${id}\` });
    }, 1000);
  });
}

function fetchPosts(userId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, userId, title: 'Post 1' },
        { id: 2, userId, title: 'Post 2' }
      ]);
    }, 800);
  });
}

function fetchComments(postId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, postId, text: 'Comment 1' },
        { id: 2, postId, text: 'Comment 2' }
      ]);
    }, 600);
  });
}

// 并发执行
Promise.all([
  fetchUser(1),
  fetchPosts(1),
  fetchComments(1)
])
  .then(([user, posts, comments]) => {
    console.log('User:', user);
    console.log('Posts:', posts);
    console.log('Comments:', comments);
  })
  .catch(error => {
    console.error('Error:', error);
  });
\`\`\`

#### Promise.race 超时处理

\`\`\`javascript
function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ data: 'Some data' });
    }, 2000);
  });
}

function timeout(ms) {
  return new Promise((_, reject) => {
    setTimeout(() => {
      reject(new Error('Timeout'));
    }, ms);
  });
}

// 使用 Promise.race 实现超时
Promise.race([
  fetchData(),
  timeout(1000)
])
  .then(data => {
    console.log('Data:', data);
  })
  .catch(error => {
    console.error('Error:', error.message);
  });
\`\`\`

#### Promise.allSettled 等待所有完成

\`\`\`javascript
const promises = [
  Promise.resolve(1),
  Promise.reject(new Error('Failed')),
  Promise.resolve(3)
];

Promise.allSettled(promises)
  .then(results => {
    results.forEach((result, index) => {
      if (result.status === 'fulfilled') {
        console.log(\`Promise \${index}: \${result.value}\`);
      } else {
        console.log(\`Promise \${index}: \${result.reason.message}\`);
      }
    });
  });
\`\`\`

### async/await

**async/await 的概念：**
- 基于 Promise 的语法糖
- 使异步代码看起来像同步代码
- 更易于阅读和维护

**使用方法：**
- async 函数返回一个 Promise
- await 关键字只能在 async 函数中使用
- await 会暂停函数执行，直到 Promise 解决

### 代码示例

#### async/await 基础示例

\`\`\`javascript
async function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ name: 'Alice', age: 25 });
    }, 1000);
  });
}

async function main() {
  try {
    const data = await fetchData();
    console.log('Data:', data);
  } catch (error) {
    console.error('Error:', error);
  }
}

main();
\`\`\`

#### async/await 错误处理

\`\`\`javascript
async function fetchUser(id) {
  const response = await fetch(\`/api/users/\${id}\`);
  
  if (!response.ok) {
    throw new Error(\`HTTP error! status: \${response.status}\`);
  }
  
  return response.json();
}

async function main() {
  try {
    const user = await fetchUser(1);
    console.log('User:', user);
  } catch (error) {
    console.error('Failed to fetch user:', error.message);
  }
}

main();
\`\`\`

#### async/await 并发执行

\`\`\`javascript
async function fetchUser(id) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id, name: \`User \${id}\` });
    }, 1000);
  });
}

async function fetchPosts(userId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, userId, title: 'Post 1' },
        { id: 2, userId, title: 'Post 2' }
      ]);
    }, 800);
  });
}

async function fetchComments(postId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, postId, text: 'Comment 1' },
        { id: 2, postId, text: 'Comment 2' }
      ]);
    }, 600);
  });
}

// 并发执行
async function main() {
  try {
    const [user, posts, comments] = await Promise.all([
      fetchUser(1),
      fetchPosts(1),
      fetchComments(1)
    ]);
    
    console.log('User:', user);
    console.log('Posts:', posts);
    console.log('Comments:', comments);
  } catch (error) {
    console.error('Error:', error);
  }
}

main();
\`\`\`

#### async/await 顺序执行

\`\`\`javascript
async function fetchUser(id) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id, name: \`User \${id}\` });
    }, 1000);
  });
}

async function fetchPosts(userId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, userId, title: 'Post 1' }
      ]);
    }, 800);
  });
}

// 顺序执行
async function main() {
  try {
    const user = await fetchUser(1);
    console.log('User:', user);
    
    const posts = await fetchPosts(user.id);
    console.log('Posts:', posts);
  } catch (error) {
    console.error('Error:', error);
  }
}

main();
\`\`\`

### 异步模式最佳实践

**错误处理：**
- 使用 try/catch 处理 async/await 错误
- 使用 catch() 处理 Promise 错误
- 统一错误处理策略

**并发控制：**
- 使用 Promise.all() 并行处理多个异步操作
- 使用 Promise.race() 处理超时
- 合理控制并发数量

**性能优化：**
- 避免不必要的异步操作
- 使用缓存减少重复请求
- 合理使用防抖和节流

### 代码示例

#### 并发控制

\`\`\`javascript
async function fetchUrl(url) {
  const response = await fetch(url);
  return response.json();
}

async function fetchAll(urls, concurrency = 3) {
  const results = [];
  const executing = [];
  
  for (const url of urls) {
    const promise = fetchUrl(url).then(result => {
      executing.splice(executing.indexOf(promise), 1);
      return result;
    });
    
    executing.push(promise);
    results.push(promise);
    
    if (executing.length >= concurrency) {
      await Promise.race(executing);
    }
  }
  
  return Promise.all(results);
}

const urls = [
  'https://api.example.com/data1',
  'https://api.example.com/data2',
  'https://api.example.com/data3',
  'https://api.example.com/data4',
  'https://api.example.com/data5'
];

fetchAll(urls, 3)
  .then(results => console.log('Results:', results))
  .catch(error => console.error('Error:', error));
\`\`\`

#### 请求重试

\`\`\`javascript
async function fetchWithRetry(url, options = {}, retries = 3) {
  for (let i = 0; i < retries; i++) {
    try {
      const response = await fetch(url, options);
      
      if (!response.ok) {
        throw new Error(\`HTTP error! status: \${response.status}\`);
      }
      
      return response.json();
    } catch (error) {
      if (i === retries - 1) {
        throw error;
      }
      
      // 指数退避
      const delay = Math.pow(2, i) * 1000;
      await new Promise(resolve => setTimeout(resolve, delay));
    }
  }
}

fetchWithRetry('https://api.example.com/data')
  .then(data => console.log('Data:', data))
  .catch(error => console.error('Error:', error));
\`\`\`

### 常见异步场景

**网络请求：**
- 使用 fetch 或 axios 发起请求
- 处理响应和错误
- 实现请求重试和超时

**文件操作：**
- 读取和写入文件
- 处理大文件
- 监控文件变化

**定时器：**
- setTimeout 和 setInterval
- 清除定时器避免内存泄漏
- 使用 requestAnimationFrame 进行动画

**事件处理：**
- 处理 DOM 事件
- 事件委托
- 异步事件处理

### 最佳实践

- 理解 JavaScript 单线程和异步编程
- 优先使用 async/await 而非回调函数
- 合理使用 Promise 方法处理并发
- 统一错误处理策略
- 避免回调地狱
- 控制并发数量
- 实现请求重试和超时

`,
      createdAt: '2026-03-14',
      updatedAt: '2026-03-14'
    };
