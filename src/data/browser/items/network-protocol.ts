import { KnowledgeItem } from '@/types/knowledge';

export const network_protocol: KnowledgeItem = {
      id: 'network-protocol',
      title: '网络协议与浏览器通信',
      category: 'browser',
      difficulty: 'medium',
      tags: ['浏览器原理', '网络协议', 'HTTP', 'HTTPS', 'WebSocket'],
      content: `## 网络协议与浏览器通信

网络协议是浏览器与服务器通信的基础，理解网络协议对于前端开发和性能优化至关重要。

### HTTP 协议

**HTTP/1.1：**
- 持久连接：减少连接建立时间
- 管道化：并行发送请求
- 分块传输编码：流式传输
- 主机头：支持虚拟主机

**HTTP/2：**
- 多路复用：一个连接处理多个请求
- 服务器推送：主动推送资源
- 头部压缩：减少头部大小
- 二进制分帧：更高效的数据传输

**HTTP/3：**
- 基于 QUIC 协议
- 更快的连接建立
- 更好的拥塞控制
- 更强的可靠性

### HTTPS

**SSL/TLS：**
- 加密传输
- 服务器认证
- 数据完整性
- 防止中间人攻击

**证书：**
- 数字证书
- CA 认证
- 证书链
- 证书验证

**HTTPS 握手：**
1. Client Hello：客户端发送支持的加密算法
2. Server Hello：服务器选择加密算法并发送证书
3. Client Key Exchange：客户端验证证书并发送密钥
4. Server Finish：服务器确认密钥
5. Client Finish：客户端确认连接

### WebSocket

**WebSocket 协议：**
- 全双工通信
- 实时数据传输
- 减少 HTTP 开销
- 适合实时应用

**WebSocket 连接：**
1. 客户端发送 WebSocket 握手请求
2. 服务器响应 WebSocket 握手
3. 建立持久连接
4. 双向数据传输

**WebSocket 应用：**
- 实时聊天
- 在线游戏
- 实时数据仪表盘
- 协作工具

### 网络请求流程

**DNS 解析：**
- 域名 → IP 地址
- DNS 缓存
- DNS 服务器查询
- DNS 记录类型

**TCP 连接：**
- 三次握手：建立连接
- 四次挥手：关闭连接
- 拥塞控制
- 流量控制

**HTTP 请求：**
- 请求方法：GET, POST, PUT, DELETE
- 请求头：Host, User-Agent, Accept
- 请求体：表单数据, JSON
- 请求参数：URL 参数, 表单数据

**HTTP 响应：**
- 状态码：200, 404, 500
- 响应头：Content-Type, Cache-Control
- 响应体：HTML, JSON, 图片
- 重定向：301, 302

### 💾 浏览器缓存

**强缓存：**
- **Cache-Control**：max-age, no-cache, no-store
- **Expires**：过期时间
- **无需向服务器请求**
- **直接使用缓存**

**协商缓存：**
- **ETag**：资源版本标识符
- **Last-Modified**：最后修改时间
- **向服务器验证资源是否过期**
- **未过期则使用缓存**

**缓存位置：**
- **Memory Cache**：内存缓存
- **Disk Cache**：磁盘缓存
- **Service Worker Cache**：Service Worker 缓存
- **Push Cache**：推送缓存

### 🌐 CORS 跨域资源共享

**同源策略：**
- **限制不同源之间的交互**
- **源：协议, 域名, 端口**
- **保护用户数据安全**

**CORS 机制：**
- **预检请求：OPTIONS**
- **响应头：Access-Control-Allow-Origin**
- **凭证处理：withCredentials**
- **暴露头：Access-Control-Expose-Headers**

**CORS 配置：**
- **服务器端设置响应头**
- **支持的请求方法**
- **支持的请求头**
- **预检请求缓存时间**

### 🚀 网络性能优化

**减少请求数量：**
- 资源合并：CSS/JS 合并
- 精灵图：合并小图标
- 内联关键 CSS
- 减少第三方脚本

**减少请求大小：**
- 压缩资源：gzip, brotli
- 最小化 CSS/JS/HTML
- 优化图片：WebP, 压缩
- 移除不必要的代码

**请求优化：**
- 预加载关键资源
- 延迟加载非关键资源
- 预连接到重要域名
- 资源提示：dns-prefetch, preconnect, preload

**CDN：**
- 内容分发网络
- 就近访问资源
- 提高加载速度
- 减轻源服务器负担

### 网络监控与分析

**网络监控：**
- Chrome DevTools Network 面板
- WebPageTest
- Lighthouse
- New Relic

**关键指标：**
- DNS 解析时间
- TCP 连接时间
- TLS 握手时间
- 首字节时间 (TTFB)
- 内容传输时间
- 总加载时间

**网络错误处理：**
- 超时处理
- 重试机制
- 错误提示
- 降级策略

### 最佳实践

**协议选择：**
- 使用 HTTPS
- 升级到 HTTP/2 或 HTTP/3
- 合理使用 WebSocket
- 优化网络配置

**缓存策略：**
- 实施合理的缓存策略
- 静态资源长缓存
- 动态资源协商缓存
- 缓存失效策略

**性能优化：**
- 减少请求数量和大小
- 优化关键渲染路径
- 使用 CDN 分发资源
- 监控网络性能

**安全实践：**
- 实施 HTTPS
- 防止 CSRF 攻击
- 防止 XSS 攻击
- 安全的 CORS 配置

### 学习资源

**网络协议：**
- HTTP 权威指南
- TCP/IP 详解
- MDN Web Docs
- RFC 文档

**性能优化：**
- Web Vitals
- Lighthouse
- Google Web Fundamentals
- 前端性能优化指南

### 案例分析

**大型网站网络优化：**
- Google 的网络优化
- Facebook 的网络优化
- Amazon 的网络优化
- 阿里巴巴的网络优化

**实施效果：**
- 页面加载速度提升
- 用户体验改善
- 服务器负载减少
- 带宽使用优化`,
      createdAt: '2026-03-14',
      updatedAt: '2026-03-14'
    };
