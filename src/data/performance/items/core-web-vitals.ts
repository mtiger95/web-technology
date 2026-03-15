import { KnowledgeItem } from '@/types/knowledge';

export const core_web_vitals: KnowledgeItem = {
      id: 'core-web-vitals',
      title: 'Core Web Vitals 核心指标优化',
      category: 'performance',
      difficulty: 'medium',
      tags: ['性能优化', 'Core Web Vitals', 'LCP', 'FID', 'CLS'],
      content: `## Core Web Vitals 核心指标优化

Core Web Vitals 是 Google 推出的用户体验核心指标，包括 LCP、FID 和 CLS，对网站的 SEO 和用户体验至关重要。

### ⚡ LCP (Largest Contentful Paint)

**定义：**
- **最大内容绘制时间**
- **衡量页面主要内容加载完成的时间**
- **目标值：< 2.5秒**：LCP的目标是确保用户能够在2.5秒内看到页面的主要内容，这个阈值基于大量用户体验研究得出，2.5秒以内的LCP被认为是良好的用户体验，超过2.5秒需要改进，超过4秒则被认为较差的体验，LCP是Core Web Vitals中最重要的指标，直接影响用户对页面加载速度的感知

**优化策略：**
- **优化服务器响应时间**
- **使用 CDN 分发静态资源**
- **预加载关键资源**
- **优化图片大小和格式**
- **减少第三方脚本阻塞**

**监控工具：**
- **Google PageSpeed Insights**
- **Lighthouse**
- **Web Vitals Chrome 扩展**

### 💻 代码示例：LCP 优化

\`\`\`html
<!-- 预加载关键资源 -->
<link rel="preload" as="image" href="/hero-image.webp">
<link rel="preload" as="font" href="/fonts/main.woff2" crossorigin>
<link rel="preload" as="style" href="/styles/main.css">

<!-- 预连接到重要域名 -->
<link rel="preconnect" href="https://cdn.example.com">
<link rel="dns-prefetch" href="https://api.example.com">

<!-- 优化图片 -->
<picture>
  <source srcset="/hero-image.avif" type="image/avif">
  <source srcset="/hero-image.webp" type="image/webp">
  <img src="/hero-image.jpg" alt="Hero Image" loading="eager" width="1200" height="600">
</picture>
\`\`\`

#### LCP 监控示例

\`\`\`javascript
// 使用 Web Vitals 库监控 LCP
import { onLCP } from 'web-vitals';

onLCP((metric) => {
  console.log('LCP:', metric);
  
  // 发送到分析服务
  if (navigator.sendBeacon) {
    const data = new URLSearchParams();
    data.set('name', metric.name);
    data.set('value', metric.value.toString());
    data.set('id', metric.id);
    
    navigator.sendBeacon('/analytics', data);
  }
  
  // 判断是否达标
  if (metric.rating === 'good') {
    console.log('LCP is good!');
  } else if (metric.rating === 'needs-improvement') {
    console.warn('LCP needs improvement');
  } else {
    console.error('LCP is poor!');
  }
});
\`\`\`

### FID (First Input Delay)

**定义：**
- 首次输入延迟
- 衡量用户首次与页面交互到浏览器响应的时间
- 目标值：< 100ms：FID用于衡量用户首次与页面交互（如点击按钮、输入文字）时，浏览器能够多快地响应，这个指标关注的是页面的可交互性而非加载速度，100ms以内的延迟被认为是良好的用户体验，超过300ms则被认为较差的体验，FID主要受JavaScript执行时间和主线程阻塞程度影响，优化FID的关键是减少主线程的工作量

**优化策略：**
- 减少 JavaScript 执行时间
- 代码分割和懒加载
- 使用 Web Workers 处理耗时任务
- 优化第三方脚本
- 避免长任务阻塞主线程

**监控工具：**
- Chrome DevTools Performance 面板
- Web Vitals 库
- Google Search Console

### 代码示例

#### FID 优化示例

\`\`\`javascript
// 代码分割和懒加载
// 使用动态 import
const loadHeavyComponent = async () => {
  const module = await import('./HeavyComponent');
  return module.default;
};

// 使用 React.lazy
import React, { Suspense } from 'react';

const HeavyComponent = React.lazy(() => import('./HeavyComponent'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HeavyComponent />
    </Suspense>
  );
}

// 使用 Web Workers
// worker.js
self.onmessage = function(e) {
  const result = heavyComputation(e.data);
  self.postMessage(result);
};

// main.js
const worker = new Worker('worker.js');

worker.onmessage = function(e) {
  console.log('Result:', e.data);
};

worker.postMessage(data);

// 避免长任务
function processLargeArray(array, chunkSize = 1000) {
  let index = 0;
  
  function processChunk() {
    const chunk = array.slice(index, index + chunkSize);
    // 处理数据块
    chunk.forEach(item => {
      // 处理逻辑
    });
    
    index += chunkSize;
    
    if (index < array.length) {
      // 使用 requestIdleCallback 或 setTimeout 避免阻塞主线程
      requestIdleCallback(processChunk, { timeout: 50 });
    }
  }
  
  processChunk();
}
\`\`\`

#### FID 监控示例

\`\`\`javascript
// 使用 Web Vitals 库监控 FID
import { onFID } from 'web-vitals';

onFID((metric) => {
  console.log('FID:', metric);
  
  // 发送到分析服务
  if (navigator.sendBeacon) {
    const data = new URLSearchParams();
    data.set('name', metric.name);
    data.set('value', metric.value.toString());
    data.set('id', metric.id);
    
    navigator.sendBeacon('/analytics', data);
  }
  
  // 判断是否达标
  if (metric.rating === 'good') {
    console.log('FID is good!');
  } else if (metric.rating === 'needs-improvement') {
    console.warn('FID needs improvement');
  } else {
    console.error('FID is poor!');
  }
});
\`\`\`

### CLS (Cumulative Layout Shift)

**定义：**
- 累积布局偏移
- 衡量页面元素意外移动的程度
- 目标值：< 0.1：CLS用于衡量页面视觉稳定性，即页面在加载过程中视觉元素意外移动的程度，0.1以下的CLS被认为是良好的用户体验，超过0.25被认为较差，CLS主要由动态加载的内容（如图片、字体、动态广告等）导致布局偏移引起，优化CLS的关键是为图片和视频指定明确的尺寸、使用CSS transform而非改变元素位置、确保广告或动态内容有预留空间

**优化策略：**
- 为图片和视频设置明确的宽高
- 为广告和动态内容预留空间
- 避免在页面加载后插入内容
- 使用 CSS aspect-ratio 属性
- 优化字体加载策略

**监控工具：**
- Lighthouse
- Web Vitals Chrome 扩展
- Google Search Console

### 代码示例

#### CLS 优化示例

\`\`\`html
<!-- 为图片设置明确的宽高 -->
<img src="/image.jpg" alt="Image" width="800" height="600">

<!-- 使用 aspect-ratio 属性 -->
<style>
.image-container {
  aspect-ratio: 16 / 9;
  background-color: #f0f0f0;
}
</style>

<div class="image-container">
  <img src="/image.jpg" alt="Image" loading="lazy">
</div>

<!-- 为动态内容预留空间 -->
<div class="ad-container" style="min-height: 250px;">
  <!-- 广告内容 -->
</div>

<!-- 使用 font-display 优化字体加载 -->
<style>
@font-face {
  font-family: 'Custom Font';
  src: url('/fonts/custom.woff2') format('woff2');
  font-display: swap; /* 或 optional, fallback */
}
</style>

<!-- 避免在页面加载后插入内容 -->
<!-- 不推荐 -->
<script>
document.body.appendChild(createDynamicContent());
</script>

<!-- 推荐 -->
<div id="dynamic-content" style="min-height: 200px;">
  <!-- 动态内容将在这里加载 -->
</div>
\`\`\`

#### CLS 监控示例

\`\`\`javascript
// 使用 Web Vitals 库监控 CLS
import { onCLS } from 'web-vitals';

onCLS((metric) => {
  console.log('CLS:', metric);
  
  // 发送到分析服务
  if (navigator.sendBeacon) {
    const data = new URLSearchParams();
    data.set('name', metric.name);
    data.set('value', metric.value.toString());
    data.set('id', metric.id);
    
    navigator.sendBeacon('/analytics', data);
  }
  
  // 判断是否达标
  if (metric.rating === 'good') {
    console.log('CLS is good!');
  } else if (metric.rating === 'needs-improvement') {
    console.warn('CLS needs improvement');
  } else {
    console.error('CLS is poor!');
  }
});
\`\`\`

### 整体优化策略

**资源优化：**
- 压缩 CSS、JavaScript 和 HTML
- 使用现代图片格式（WebP、AVIF）
- 启用 GZIP 或 Brotli 压缩
- 合理使用缓存策略

**加载策略：**
- 预加载关键资源
- 延迟加载非关键资源
- 预连接到重要域名
- 资源提示（dns-prefetch、preconnect、preload）

**代码优化：**
- 减少 JavaScript 包大小
- 避免内存泄漏
- 优化 DOM 操作
- 使用 requestAnimationFrame 处理动画

**服务器优化：**
- 启用 HTTP/2 或 HTTP/3

### 代码示例

#### 资源优化示例

\`\`\`javascript
// Webpack 配置优化
module.exports = {
  optimization: {
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    },
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          compress: {
            drop_console: true
          }
        }
      })
    ]
  },
  performance: {
    hints: 'warning',
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
  }
};

// 图片优化
// 使用 next/image (Next.js)
import Image from 'next/image';

function MyComponent() {
  return (
    <Image
      src="/hero-image.jpg"
      alt="Hero Image"
      width={1200}
      height={600}
      priority
      placeholder="blur"
    />
  );
}

// 使用响应式图片
<picture>
  <source media="(max-width: 600px)" srcset="/image-small.webp">
  <source media="(max-width: 1200px)" srcset="/image-medium.webp">
  <source srcset="/image-large.webp">
  <img src="/image-fallback.jpg" alt="Responsive Image">
</picture>
\`\`\`

#### 加载策略示例

\`\`\`html
<!-- 资源提示 -->
<head>
  <!-- DNS 预解析 -->
  <link rel="dns-prefetch" href="https://api.example.com">
  
  <!-- 预连接 -->
  <link rel="preconnect" href="https://cdn.example.com">
  
  <!-- 预加载 -->
  <link rel="preload" as="script" href="/scripts/main.js">
  <link rel="preload" as="style" href="/styles/main.css">
  <link rel="preload" as="image" href="/images/hero.webp">
  
  <!-- 预获取 -->
  <link rel="prefetch" href="/next-page.html">
</head>

<!-- 懒加载图片 -->
<img src="/image.jpg" alt="Image" loading="lazy">

<!-- 懒加载 iframe -->
<iframe src="/video.html" loading="lazy"></iframe>
\`\`\`

#### 代码优化示例

\`\`\`javascript
// 减少 DOM 操作
// 不推荐
function updateList(items) {
  const list = document.getElementById('list');
  list.innerHTML = '';
  
  items.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    list.appendChild(li);
  });
}

// 推荐：使用文档片段
function updateList(items) {
  const list = document.getElementById('list');
  const fragment = document.createDocumentFragment();
  
  items.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    fragment.appendChild(li);
  });
  
  list.innerHTML = '';
  list.appendChild(fragment);
}

// 使用 requestAnimationFrame 处理动画
function animate() {
  // 更新动画状态
  updateAnimation();
  
  requestAnimationFrame(animate);
}

requestAnimationFrame(animate);

// 避免内存泄漏
// 不推荐
function setupEventListeners() {
  const button = document.getElementById('button');
  button.addEventListener('click', handleClick);
  // 如果不移除监听器，会导致内存泄漏
}

// 推荐
function setupEventListeners() {
  const button = document.getElementById('button');
  const handleClick = () => {
    // 处理点击
  };
  
  button.addEventListener('click', handleClick);
  
  // 清理函数
  return () => {
    button.removeEventListener('click', handleClick);
  };
}

const cleanup = setupEventListeners();

// 在组件卸载时调用
// cleanup();
\`\`\`

### 最佳实践

- 定期监控 Core Web Vitals 指标
- 优先优化 LCP，因为它对用户体验影响最大
- 使用现代图片格式和压缩技术
- 合理使用代码分割和懒加载
- 避免长任务阻塞主线程
- 为图片和动态内容预留空间
- 优化字体加载策略
- 使用 CDN 加速静态资源
- 启用 HTTP/2 或 HTTP/3
- 定期进行性能审计

`,
      createdAt: '2026-03-14',
      updatedAt: '2026-03-14'
    };
