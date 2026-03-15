import { KnowledgeItem } from '@/types/knowledge';

export const image_optimization: KnowledgeItem = {
      id: 'image-optimization',
      title: '图片优化策略',
      category: 'performance',
      difficulty: 'medium',
      tags: ['性能优化', '图片优化', 'WebP', '响应式图片'],
      content: `## 图片优化策略

图片是网页中最常见的资源，也是影响页面加载速度的主要因素，合理的图片优化策略可以显著提升性能。

### 图片格式选择

**WebP：**
- 由 Google 开发的现代图片格式
- 比 JPEG 小 25-35%
- 支持透明和动画
- 浏览器支持良好

**AVIF：**
- 基于 AV1 视频编码
- 比 WebP 小 20-30%
- 支持 HDR 和宽色域
- 浏览器支持正在增加

**JPEG：**
- 适合照片和复杂图像
- 有损压缩
- 广泛支持
- 可调节压缩质量

**PNG：**
- 支持透明
- 无损压缩
- 适合图标和简单图形
- 文件体积较大

**SVG：**
- 矢量图形
- 无限缩放
- 适合图标和简单图形
- 可通过 CSS 和 JavaScript 操作

### 图片压缩

**有损压缩：**
- 减少文件大小
- 适当降低质量
- 肉眼难以察觉差异
- 适合照片

**无损压缩：**
- 移除元数据
- 优化压缩算法
- 保持原始质量
- 适合图标和图形

**工具：**
- ImageOptim
- TinyPNG
- Squoosh
- Sharp (Node.js)
- ImageMagick

### 响应式图片

**srcset 属性：**
- 提供多个图片源
- 浏览器根据设备选择合适的图片
- 支持不同分辨率
- 语法：srcset="image-1x.jpg 1x, image-2x.jpg 2x"：srcset属性允许在不同像素密度的屏幕上提供不同分辨率的图片，语法格式是"图片URL 像素密度"，如1x表示标准像素密度、2x表示Retina屏幕的高像素密度，浏览器会根据设备的像素比自动选择合适的图片，这个属性可以避免在低分辨率设备上加载过大的图片，节省带宽并提高加载速度

**sizes 属性：**
- 定义图片在不同视口中的尺寸
- 与 srcset 配合使用
- 帮助浏览器选择合适的图片
- 语法：sizes="(max-width: 600px) 100vw, 50vw"：sizes属性与srcset配合使用，用于告诉浏览器在不同视口宽度下图片的显示尺寸，语法是媒体条件加上对应的宽度值，如"(max-width: 600px) 100vw"表示视口宽度不超过600px时图片宽度为100%视口宽度，", 50vw"表示其他情况下图片宽度为50%视口宽度，这个属性帮助浏览器选择最合适的图片分辨率，避免加载过大的图片

**picture 元素：**
- 提供多个图片源
- 基于媒体查询选择
- 支持不同格式
- 语法：<picture><source media="..." srcset="..."><img src="..."></picture>：picture元素允许通过多个source元素为不同场景提供不同的图片源，source元素的media属性指定媒体查询条件，srcset属性指定图片URL，当浏览器匹配到某个source的媒体条件时就会使用该source的图片，如果都不匹配则使用img元素的src作为后备，picture元素常用于艺术方向（不同屏幕宽度显示不同裁剪的图片）或提供不同格式的图片（如WebP、AVIF）

### 图片加载策略

**懒加载：**
- 延迟加载视口外的图片
- 减少初始加载时间
- 节省带宽
- 实现方式：Intersection Observer API：Intersection Observer API是浏览器提供的异步观察元素可见性的API，可以高效地检测元素是否进入或离开视口，相比于传统的scroll事件监听，Intersection Observer不会导致主线程阻塞，性能更好，使用时创建Observer实例并配置rootMargin（视口外延）和threshold（触发阈值），当元素可见性变化时调用回调函数，是实现图片懒加载的首选方案

**预加载：**
- 预加载关键图片
- 提高首屏渲染速度
- 使用 preload 指令
- 语法：<link rel="preload" as="image" href="image.jpg">：preload可以用于预加载首屏图片，让浏览器提前开始下载图片资源，as属性指定资源类型为image，href指定图片URL，这样在图片需要显示时可以立即使用缓存或已完成下载的图片，避免加载延迟，preload适合首屏关键图片如hero图片，但不应预加载过多图片以免与关键资源争抢带宽

**渐进式加载：**
- 先加载低质量占位图
- 再加载完整图片
- 改善用户体验
- 实现方式：BlurHash、Lqip：BlurHash（模糊哈希）是一种紧凑的占位符编码算法，将图片编码为一个短字符串，在图片加载完成前先显示模糊的占位图，然后平滑过渡到完整图片，提供良好的用户体验，Lqip（Low Quality Image Placeholder）是低质量图片占位符技术，生成非常小的缩略图作为占位图，这两种技术都可以在保证用户体验的同时减少带宽消耗

### CDN 与缓存

**CDN：**
- 内容分发网络
- 就近访问图片
- 提高加载速度
- 减轻源服务器负担

**缓存策略：**
- 设置合理的缓存头
- 使用 ETag 和 Last-Modified
- 版本化文件名
- 利用浏览器缓存

### 最佳实践

- 使用现代图片格式（WebP、AVIF）
- 适当压缩图片
- 实现响应式图片
- 懒加载非关键图片
- 预加载关键图片
- 使用 CDN 分发图片
- 合理设置缓存策略
- 监控图片加载性能
- 定期优化图片资源`,
      createdAt: '2026-03-14',
      updatedAt: '2026-03-14'
    };
