import { KnowledgeItem } from '@/types/knowledge';

export const javascript_web_apis: KnowledgeItem = {
      id: 'javascript-web-apis',
      title: 'JavaScript Web APIs 深度解析',
      category: 'javascript',
      difficulty: 'medium',
      tags: ['JavaScript', 'Web APIs', 'DOM', 'Fetch'],
      content: `## JavaScript Web APIs 深度解析

Web APIs 是浏览器提供的一组接口，使 JavaScript 能够与浏览器和操作系统交互。

### DOM API

**DOM 操作：**
- 选择元素：querySelector、querySelectorAll
- 创建元素：createElement、createTextNode
- 修改元素：appendChild、removeChild、replaceChild
- 属性操作：setAttribute、getAttribute、removeAttribute

**事件处理：**
- 事件监听：addEventListener、removeEventListener
- 事件类型：click、input、scroll、resize
- 事件对象：event.target、event.preventDefault、event.stopPropagation
- 事件委托：利用事件冒泡

**DOM 遍历：**
- 父节点：parentNode、parentElement
- 子节点：childNodes、children
- 兄弟节点：nextSibling、previousSibling、nextElementSibling、previousElementSibling

**DOM 样式：**
- style 属性：element.style.property
- classList：add、remove、toggle、contains
- getComputedStyle：获取计算后的样式

### Fetch API

**基本用法：**
- fetch() 函数：返回 Promise
- 请求配置：method、headers、body、mode
- 响应处理：response.json()、response.text()、response.blob()

**请求类型：**
- GET：获取资源
- POST：提交数据
- PUT：更新资源
- DELETE：删除资源
- PATCH：部分更新

**错误处理：**
- 网络错误：Promise 拒绝
- HTTP 错误：需要手动检查 status
- 超时处理：AbortController

**高级特性：**
- 跨域请求：CORS
- 认证：headers、credentials
- 缓存：cache 选项
- 重定向：redirect 选项

### 存储 API

**localStorage：**
- 持久存储
- 最大容量约 5MB
- 字符串键值对
- 同源策略

**sessionStorage：**
- 会话存储
- 标签页关闭后清除
- 最大容量约 5MB
- 字符串键值对

**IndexedDB：**
- 结构化存储
- 较大容量
- 异步 API
- 支持索引

**Cookie：**
- 小型文本文件
- 自动发送到服务器
- 最大容量约 4KB
- 过期时间控制

### 其他常用 Web APIs

**地理位置 API：**
- navigator.geolocation
- getCurrentPosition：获取当前位置
- watchPosition：监视位置变化

**通知 API：**
- Notification 构造函数
- requestPermission：请求权限
- 发送桌面通知

**媒体 API：**
- MediaDevices：访问摄像头和麦克风
- MediaRecorder：录制媒体
- AudioContext：音频处理

**Web Workers：**
- 后台线程
- 避免阻塞主线程
- 消息传递
- 适合计算密集型任务

**Service Workers：**
- 网络代理
- 离线缓存
- 推送通知
- 后台同步

**Web Sockets：**
- 双向通信
- 实时数据
- 低延迟
- 适合聊天、游戏等

### 最佳实践

**性能优化：**
- 减少 DOM 操作
- 使用事件委托
- 合理使用存储
- 优化网络请求

**兼容性：**
- 检测 API 支持
- 提供降级方案
- 使用 polyfill

**安全性：**
- 验证用户输入
- 防止 XSS
- 保护存储数据
- 使用 HTTPS

**代码组织：**
- 模块化 API 调用
- 错误处理
- 响应式设计
- 可访问性

### 实际应用

**前端应用：**
- 表单处理
- 数据可视化
- 实时通信
- 离线功能

**交互体验：**
- 拖拽功能
- 键盘导航
- 触摸事件
- 动画效果

**工具开发：**
- 浏览器扩展
- 开发工具
- 性能分析工具

**PWA (渐进式 Web 应用)：**
- 离线访问
- 安装到主屏幕
- 推送通知
- 后台同步`,
      createdAt: '2026-03-14',
      updatedAt: '2026-03-14'
    };
