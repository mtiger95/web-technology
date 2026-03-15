import { KnowledgeItem } from '@/types/knowledge';

export const browser_storage: KnowledgeItem = {
      id: 'browser-storage',
      title: '浏览器存储机制',
      category: 'browser',
      difficulty: 'medium',
      tags: ['浏览器原理', '浏览器存储', 'localStorage', 'SessionStorage', 'IndexedDB'],
      content: `## 浏览器存储机制

浏览器提供了多种存储机制，用于在客户端存储数据，了解这些存储机制对于前端开发至关重要。

### 存储机制对比

**Cookie：**
- 大小限制：约 4KB
- 生命周期：可设置过期时间
- 作用域：域名
- 随请求发送：是的
- 适合：会话管理、用户偏好

**localStorage：**
- 大小限制：约 5MB
- 生命周期：持久存储
- 作用域：同源
- 随请求发送：否
- 适合：用户偏好、缓存数据

**sessionStorage：**
- 大小限制：约 5MB
- 生命周期：会话期间
- 作用域：同源、同窗口
- 随请求发送：否
- 适合：临时数据、表单数据

**IndexedDB：**
- 大小限制：较大（视浏览器而定）
- 生命周期：持久存储
- 作用域：同源
- 随请求发送：否
- 适合：大型数据、复杂数据结构

**Service Worker Cache：**
- 大小限制：较大
- 生命周期：由 Service Worker 控制
- 作用域：Service Worker 作用域
- 随请求发送：否
- 适合：离线访问、资源缓存

### Cookie

**Cookie 特性：**
- 键值对存储
- 可设置域名和路径
- 可设置安全属性：HttpOnly, Secure, SameSite
- 可设置过期时间

**Cookie 用途：**
- 会话管理：存储会话 ID
- 用户偏好：存储用户设置
- 跟踪：分析用户行为
- 认证：存储认证信息

**Cookie 安全：**
- HttpOnly：防止 JavaScript 访问：HttpOnly是Cookie的一个安全属性，当设置HttpOnly属性时，Cookie无法通过JavaScript的document.cookie API访问，这样可以防止XSS攻击窃取Cookie，HttpOnly属性对于包含会话信息的Cookie非常重要，即使页面存在XSS漏洞，攻击者也无法通过JavaScript获取设置了HttpOnly的Cookie
- Secure：仅通过 HTTPS 传输：Secure是Cookie的一个安全属性，当设置Secure属性时，Cookie只能通过HTTPS协议传输，不能通过HTTP传输，这样可以防止Cookie在传输过程中被窃听或劫持，Secure属性对于包含敏感信息（如会话ID、认证令牌）的Cookie非常重要，现代浏览器在HTTPS环境下会自动为Cookie添加Secure属性
- SameSite：防止 CSRF 攻击：SameSite是Cookie的一个安全属性，用于控制Cookie在跨站请求中的发送行为，SameSite有三个值：Strict（最严格，只在同站请求中发送Cookie）、Lax（默认值，允许在顶级导航请求中发送Cookie）、None（允许跨站发送Cookie，但必须配合Secure属性），SameSite属性可以有效防止CSRF攻击
- 合理设置过期时间：Cookie的过期时间决定了Cookie的有效期，可以通过expires属性设置具体的过期日期和时间，也可以通过max-age属性设置Cookie的有效期（以秒为单位），合理设置Cookie的过期时间可以平衡用户体验和安全性，会话Cookie应该设置较短的过期时间或设置为会话Cookie（关闭浏览器后失效），持久化Cookie应该根据业务需求设置合理的过期时间

**Cookie 操作：**
- 设置：document.cookie = "name=value; expires=date; path=/; domain=example.com; secure; HttpOnly"
- 读取：document.cookie
- 删除：设置过期时间为过去的时间

### localStorage

**localStorage 特性：**
- 键值对存储
- 字符串值
- 持久存储
- 同源限制

**localStorage 操作：**
- 设置：localStorage.setItem('key', 'value')
- 读取：localStorage.getItem('key')
- 删除：localStorage.removeItem('key')
- 清空：localStorage.clear()

**localStorage 限制：**
- 仅存储字符串
- 大小限制约 5MB
- 同步 API
- 易受 XSS 攻击

**localStorage 最佳实践：**
- 存储非敏感数据
- 定期清理过期数据
- 序列化复杂数据：JSON.stringify/JSON.parse
- 错误处理：try/catch

### sessionStorage

**sessionStorage 特性：**
- 键值对存储
- 字符串值
- 会话期间存储
- 同源、同窗口限制

**sessionStorage 操作：**
- 设置：sessionStorage.setItem('key', 'value')
- 读取：sessionStorage.getItem('key')
- 删除：sessionStorage.removeItem('key')
- 清空：sessionStorage.clear()

**sessionStorage 用途：**
- 表单数据：临时存储表单输入
- 会话状态：存储会话期间的状态
- 临时数据：不需要持久化的数据
- 多窗口隔离：不同窗口的 sessionStorage 独立

### IndexedDB

**IndexedDB 特性：**
- 事务性数据库
- 支持复杂数据结构
- 异步 API
- 较大的存储容量

**IndexedDB 操作：**
- 打开数据库：indexedDB.open('name', version)
- 创建对象存储空间：createObjectStore('store', { keyPath: 'id' })
- 添加数据：store.add(data)
- 获取数据：store.get(key)
- 更新数据：store.put(data)
- 删除数据：store.delete(key)

**IndexedDB 用途：**
- 离线应用：存储离线数据
- 大型数据：存储大量数据
- 复杂数据：存储复杂数据结构
- 缓存：缓存 API 响应

**IndexedDB 最佳实践：**
- 使用事务确保数据一致性
- 合理使用索引提高查询性能
- 错误处理：try/catch
- 定期清理过期数据

### Service Worker Cache

**Service Worker Cache 特性：**
- 可编程缓存
- 支持任意资源
- 离线访问
- 由 Service Worker 控制

**Service Worker Cache 操作：**
- 打开缓存：caches.open('name')
- 添加资源：cache.add('url')
- 添加多个资源：cache.addAll(['url1', 'url2'])
- 获取资源：cache.match('url')
- 删除资源：cache.delete('url')

**Service Worker Cache 用途：**
- 离线访问：PWA 应用
- 资源缓存：提高加载速度
- 缓存策略：自定义缓存逻辑
- 网络请求拦截：修改请求和响应

### 存储安全

**安全风险：**
- XSS 攻击：窃取存储数据
- CSRF 攻击：利用 Cookie
- 信息泄露：敏感数据存储
- 数据篡改：存储数据被修改

**防护措施：**
- 加密敏感数据
- 使用 HttpOnly Cookie
- 实施 CSP
- 验证存储数据
- 定期清理数据

### 存储最佳实践

**数据分类：**
- 敏感数据：避免在前端存储
- 非敏感数据：localStorage
- 会话数据：sessionStorage
- 大型数据：IndexedDB
- 离线数据：Service Worker Cache

**存储策略：**
- 合理选择存储机制
- 实施数据验证
- 定期清理过期数据
- 监控存储使用情况

**性能优化：**
- 减少存储操作频率
- 批量存储操作
- 合理使用缓存
- 避免存储大量数据

**跨浏览器兼容性：**
- 检查存储 API 支持
- 提供降级方案
- 测试不同浏览器
- 遵循标准 API

### 工具与资源

**存储库：**
- localforage：简化 IndexedDB 使用
- dexie.js：IndexedDB 封装
- idb：IndexedDB 封装
- pouchdb：客户端数据库

**开发工具：**
- Chrome DevTools Application 面板
- Firefox Storage Inspector
- Edge DevTools Storage 面板
- Safari Web Inspector Storage 面板

**学习资源：**
- MDN Web Storage API 文档
- MDN IndexedDB 文档
- MDN Service Worker 文档
- Google Web Fundamentals

### 案例分析

**存储方案选择：**
- 金融应用：安全存储策略
- 电商应用：用户偏好存储
- 新闻应用：离线阅读
- 社交媒体：会话管理

**实施效果：**
- 离线访问能力提升
- 加载速度提高
- 用户体验改善
- 数据管理优化`,
      createdAt: '2026-03-14',
      updatedAt: '2026-03-14'
    };
