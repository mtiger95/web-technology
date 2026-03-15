import { KnowledgeItem } from '@/types/knowledge';

export const secure_storage: KnowledgeItem = {
      id: 'secure-storage',
      title: '前端安全存储方案',
      category: 'security',
      difficulty: 'medium',
      tags: ['前端安全', '安全存储', 'localStorage', 'SessionStorage', '加密'],
      content: `## 前端安全存储方案

前端需要存储各种数据，如用户偏好、会话信息等，但如何安全地存储这些数据是一个重要的安全考虑。

### 存储方案比较

**localStorage：**
- 持久存储
- 容量约 5MB
- 同步 API
- 同源策略
- 易受 XSS 攻击

**sessionStorage：**
- 会话存储
- 容量约 5MB
- 同步 API
- 同源策略
- 会话结束后清除

**IndexedDB：**
- 大型存储
- 容量较大（视浏览器而定）
- 异步 API
- 同源策略
- 适合复杂数据

**Cookie：**
- 小型数据
- 容量约 4KB
- 随请求发送
- 可设置 HttpOnly 和 Secure
- 适合会话管理

### 安全存储策略

**数据分类：**
- 敏感数据：避免在前端存储
- 非敏感数据：可以使用 localStorage
- 会话数据：使用 sessionStorage 或 HttpOnly Cookie
- 大型数据：使用 IndexedDB

**加密存储：**
- 敏感数据加密后存储
- 使用 Web Crypto API
- 加密密钥管理
- 定期轮换密钥

**访问控制：**
- 限制存储访问权限
- 验证数据完整性
- 防止未授权访问
- 实施最小权限原则

**数据清理：**
- 定期清理过期数据
- 用户登出时清除敏感数据
- 浏览器退出时清理会话数据
- 数据删除安全

### 安全风险与防护

**XSS 攻击风险：**
- localStorage 易受 XSS 攻击
- 攻击者可以窃取存储的数据
- 防护：实施 XSS 防护措施

**CSRF 攻击风险：**
- Cookie 易受 CSRF 攻击
- 防护：实施 CSRF 防护措施

**信息泄露风险：**
- 存储的敏感信息可能泄露
- 防护：加密存储、限制存储内容

**数据篡改风险：**
- 存储的数据可能被篡改
- 防护：数据验证、加密存储

### 最佳实践

**localStorage 使用：**
- 存储非敏感数据
- 避免存储用户凭证
- 定期清理数据
- 实施数据验证

**sessionStorage 使用：**
- 存储会话相关数据
- 避免存储敏感信息
- 会话结束后自动清理
- 适合临时数据

**IndexedDB 使用：**
- 存储大型数据
- 适合复杂数据结构
- 实施访问控制
- 定期备份和清理

**Cookie 使用：**
- 使用 HttpOnly 防止 XSS
- 使用 Secure 确保 HTTPS
- 使用 SameSite 防止 CSRF
- 合理设置过期时间

### 加密技术

**Web Crypto API：**
- 浏览器内置加密功能
- 支持对称加密和非对称加密
- 安全随机数生成
- 适合前端加密需求

**加密算法选择：**
- 对称加密：AES-GCM
- 非对称加密：RSA-OAEP
- 哈希函数：SHA-256
- 签名算法：ECDSA

**密钥管理：**
- 安全生成密钥
- 密钥存储安全
- 定期轮换密钥
- 密钥备份和恢复

### 工具与库

**加密库：**
- crypto-js
- jsencrypt
- forge
- webcrypto-liner

**存储库：**
- localforage
- dexie.js
- idb
- pouchdb

**安全库：**
- helmet.js
- crypto-browserify
- secure-ls
- js-cookie

### 案例分析

**安全存储方案：**
- 金融应用的存储策略
- 医疗应用的存储策略
- 企业应用的存储策略
- 个人应用的存储策略

**安全事件分析：**
- localStorage 数据泄露事件
- Cookie 会话劫持事件
- 存储数据篡改事件
- 安全存储最佳实践效果`,
      createdAt: '2026-03-14',
      updatedAt: '2026-03-14'
    };
