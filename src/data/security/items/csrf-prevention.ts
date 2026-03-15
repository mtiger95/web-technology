import { KnowledgeItem } from '@/types/knowledge';

export const csrf_prevention: KnowledgeItem = {
      id: 'csrf-prevention',
      title: 'CSRF 攻击与防护',
      category: 'security',
      difficulty: 'medium',
      tags: ['前端安全', 'CSRF', '跨站请求伪造', '防护策略'],
      content: `## CSRF 攻击与防护

CSRF (Cross-Site Request Forgery) 是一种常见的网络攻击，攻击者诱导用户在已登录的 web 应用上执行非预期的操作。

### CSRF 攻击原理

**攻击流程：**
- 用户登录目标网站 A，获取会话 cookie
- 攻击者诱导用户访问恶意网站 B
- 恶意网站 B 向网站 A 发送请求
- 浏览器自动携带用户的 cookie
- 网站 A 误认为是用户的合法操作
- 执行攻击者指定的操作

**攻击条件：**
- 用户已登录目标网站
- 目标网站存在 CSRF 漏洞
- 用户被诱导访问恶意网站
- 请求不需要额外的验证

### CSRF 攻击危害

**未授权操作：**
- 修改用户密码
- 转账操作
- 发表恶意内容
- 更改用户设置

**数据泄露：**
- 窃取用户信息
- 访问敏感数据
- 破坏数据完整性
- 影响系统安全

**账户接管：**
- 完全控制用户账户
- 执行任意操作
- 长期访问权限
- 难以检测

**业务影响：**
- 声誉损失
- 用户信任下降
- 法律责任
- 经济损失

### CSRF 防护策略

**CSRF Token：**
- 生成随机 token
- 存储在 session 中
- 在表单中包含 token
- 验证请求中的 token

**SameSite Cookie：**
- 设置 SameSite 属性
- 限制 cookie 跨站发送
- 可选值：Strict、Lax、None
- 现代浏览器支持

**Referer 验证：**
- 检查 HTTP Referer 头
- 验证请求来源
- 防止跨站请求
- 作为辅助防护

**Origin 验证：**
- 检查 HTTP Origin 头
- 更可靠的来源验证
- 不受 Referer 限制
- 现代浏览器支持

**双重提交 Cookie：**
- 将 token 存储在 cookie 中
- 在请求中包含 token
- 验证两者是否匹配
- 适合单页应用

### 防护最佳实践

**前端防护：**
- 包含 CSRF token 在请求中
- 使用框架提供的 CSRF 防护
- 避免使用 GET 请求修改数据
- 验证请求来源

**后端防护：**
- 实现 CSRF token 验证
- 设置 SameSite cookie
- 验证 Referer/Origin 头
- 对敏感操作额外验证

**安全设计：**
- 使用 POST/PUT/DELETE 而非 GET
- 实现请求限速
- 敏感操作二次验证
- 定期安全审计

**监控与响应：**
- 监控异常请求模式
- 及时响应安全事件
- 修复漏洞
- 通知用户

### 工具与资源

**安全扫描工具：**
- OWASP ZAP：OWASP ZAP（Zed Attack Proxy）是OWASP组织开发的开源Web应用安全扫描工具，提供自动扫描器和手动测试功能，可以检测SQL注入、XSS、CSRF等常见Web安全漏洞，支持代理模式、主动扫描、被动扫描等多种测试方式，是Web安全测试的入门首选工具，完全免费且开源
- Burp Suite：Burp Suite是专业的Web安全测试工具，提供代理服务器、漏洞扫描器、 intruder（暴力破解工具）、Repeater（请求重放工具）等功能，是安全工程师的标准工具，分为免费版和专业版，专业版提供更强大的扫描能力和自动化功能，可以检测复杂的安全漏洞，是Web渗透测试的行业标准工具
- CSRF Tester：CSRF Tester是OWASP开发的CSRF漏洞检测工具，通过代理模式拦截用户请求，自动生成CSRF攻击测试用例，帮助测试人员发现Web应用中的CSRF漏洞，该工具可以自动分析表单并生成包含CSRF令牌的测试请求，帮助开发者验证CSRF防护措施的有效性
- Acunetix：Acunetix是一款商业Web应用漏洞扫描器，提供自动化的安全扫描服务，支持检测SQL注入、XSS、CSRF、文件包含、命令注入等数千种安全漏洞，提供详细的漏洞报告和修复建议，集成CI/CD流水线功能，适合企业级Web安全测试，支持自动化定期扫描和实时监控

**学习资源：**
- OWASP CSRF 防护 cheat sheet：OWASP发布的CSRF防护最佳实践指南，详细介绍了CSRF攻击的原理、预防方法、检测技术等，包括使用CSRF Token、同源检测、SameSite Cookie等防护措施，是学习CSRF防护的重要参考资料，提供了多种编程语言的实现示例
- MDN 安全文档：Mozilla Developer Network（MDN）提供的Web安全文档，是学习Web安全的权威参考，涵盖XSS、CSRF、CSP、HTTPS等所有Web安全主题，提供了详细的解释、代码示例和最佳实践，是前端开发者学习安全知识的首选资源
- 框架 CSRF 防护指南
- 安全社区论坛

### 案例分析

**知名 CSRF 攻击事件：**
- GitHub CSRF 漏洞：GitHub曾被发现存在CSRF漏洞，攻击者可以利用该漏洞修改用户的仓库设置、创建删除文件等，这个漏洞的发现推动了业界对CSRF防护的重视，学习这些历史漏洞案例有助于理解CSRF攻击的危害和防护的重要性
- Facebook CSRF 漏洞：Facebook曾被发现存在CSRF漏洞，攻击者可以通过诱导用户点击恶意链接来执行未授权操作，如点赞、关注、发布内容等，这个漏洞影响范围广泛，暴露了社交网络平台在CSRF防护方面的不足，学习此类案例有助于理解CSRF攻击的实际危害
- 银行网站 CSRF 漏洞
- 大型网站的安全事件

**防护措施效果：**
- CSRF token 的有效性
- SameSite cookie 的作用
- 多重防护的重要性
- 安全意识的作用`,
      createdAt: '2026-03-14',
      updatedAt: '2026-03-14'
    };
