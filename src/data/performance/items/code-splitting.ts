import { KnowledgeItem } from '@/types/knowledge';

export const code_splitting: KnowledgeItem = {
      id: 'code-splitting',
      title: '代码分割与懒加载',
      category: 'performance',
      difficulty: 'medium',
      tags: ['性能优化', '代码分割', '懒加载', 'webpack'],
      content: `## 代码分割与懒加载

代码分割和懒加载是减少初始加载时间、提高应用性能的重要策略。

### 代码分割的概念

**定义：**
- 将代码分割成多个小块
- 按需加载这些代码块
- 减少初始加载体积
- 提高首次内容绘制速度

**分割策略：**
- 按路由分割
- 按组件分割
- 按功能分割
- 按第三方库分割

### 懒加载技术

**动态导入：**
- ES 模块动态导入语法
- import() 函数
- 返回 Promise
- 支持 webpack 代码分割

**React 中的实现：**
- React.lazy()
- Suspense 组件
- 路由级别的代码分割
- 组件级别的代码分割

**Vue 中的实现：**
- 路由懒加载
- 动态导入组件
- defineAsyncComponent
- webpackChunkName 注释

### Webpack 配置

**SplitChunks 配置：**
- chunks 选项：async、initial、all：chunks选项用于指定代码分割的模式，async表示只分割异步导入的模块（动态import），这些模块会在需要时异步加载；initial表示只分割入口模块的同步依赖；all表示同时处理异步和同步模块，这个选项决定了哪些模块会被分割成独立的chunk文件，合理设置可以优化首屏加载时间和后续模块的按需加载
- minSize：最小 chunk 大小：minSize选项指定生成chunk的最小字节数，默认值为20000（20KB），当一个模块或模块组的大小小于这个值时，不会生成独立的chunk，这个值可以根据项目需求调整，较大的值会生成更少但更大的chunk，有利于减少HTTP请求数，但可能会影响首屏加载速度
- maxSize：最大 chunk 大小：maxSize选项指定生成chunk的最大字节数，默认值为0（无限制），当chunk大小超过这个值时，webpack会尝试将其分割成更小的chunk，这个选项主要用于控制浏览器缓存效率和网络请求数量，设置合适的值可以在缓存命中率和请求数量之间取得平衡，通常设置为大于等于minSize的值
- minChunks：最小引用次数：minChunks选项指定一个模块必须被多少个入口chunk引用才会被分割，默认值为1，意味着只要被引用一次就可能分割，如果设置为更大的值，只有被多个入口共同引用的模块才会被分割出来作为共享模块，这在多个入口共享某些库（如React、Lodash）时很有用，可以避免重复打包
- maxAsyncRequests：最大异步请求数：maxAsyncRequests选项指定按需加载时的最大并行请求数，默认值为6，当异步加载的chunk数量超过这个值时，会等待之前的chunk加载完成后再请求下一个，这个值影响按需加载的性能，设置太大会增加并发请求数，设置太小会延长加载时间，通常保持默认即可
- maxInitialRequests：最大初始请求数：maxInitialRequests选项指定初始加载（入口点）时的最大并行请求数，默认值为4，这个值影响首屏加载性能，因为浏览器对并行请求数有限制（通常为6个），设置合理的值可以平衡首屏加载速度和HTTP请求数，在HTTP/2环境下可以设置更大的值以充分利用多路复用优势

**代码分割策略：**
- 提取公共代码
- 提取第三方库
- 提取运行时代码
- 自定义分割策略

### 预加载与预缓存

**预加载：**
- preload：预加载关键资源：preload是一种资源提示（Resource Hint），用于提前告诉浏览器当前页面需要的关键资源，让浏览器提前开始加载，通过<link rel="preload">标签指定，as属性告诉浏览器资源的类型（script、style、image、font等），这样浏览器可以设置正确的优先级和预获取资源，preload适合预加载首屏渲染所需的关键资源，如关键CSS、字体、首屏图片等
- prefetch：预加载未来可能需要的资源：prefetch是一种资源提示，用于告诉浏览器在当前页面加载完成后，预测用户可能访问的下一个页面或需要的资源，让浏览器在空闲时预加载这些资源，通过<link rel="prefetch">标签指定，prefetch适合预加载下一个路由的代码、非首屏图片等资源，可以显著提升用户后续操作的加载速度，但不应过度使用以免浪费带宽
- preconnect：预连接到域名：preconnect是一种资源提示，用于提前与目标服务器建立网络连接，包括DNS解析、TCP握手、TLS握手等，通过<link rel="preconnect">标签指定href属性为目标域名，preconnect可以显著减少后续请求的延迟，特别适合连接CDN服务器、API服务器、第三方资源服务器等，使用时需要注意只预连接真正需要的域名，过度使用会浪费DNS缓存资源
- dns-prefetch：预解析 DNS：dns-prefetch是一种资源提示，用于提前解析目标域名的DNS，将域名解析为IP地址，通过<link rel="dns-prefetch">标签指定href属性为目标域名，dns-prefetch适合提前解析第三方域名（如CDN、分析服务、广告服务等）的DNS，可以减少后续请求的DNS解析时间，注意dns-prefetch和preconnect可以一起使用，preconnect会包含DNS预解析

**Service Worker：**
- 缓存静态资源
- 离线访问
- 预缓存关键资源
- 背景同步

### 性能影响

**优势：**
- 减少初始加载时间
- 提高首屏渲染速度
- 节省带宽
- 改善用户体验

**注意事项：**
- 避免过度分割
- 合理设置分割策略
- 监控分割效果
- 考虑缓存策略

### 最佳实践

- 按路由分割代码
- 懒加载非关键组件
- 预加载关键资源
- 合理使用预缓存
- 监控代码分割效果
- 优化分割策略
- 考虑用户网络环境
- 平衡分割粒度`,
      createdAt: '2026-03-14',
      updatedAt: '2026-03-14'
    };
