import { KnowledgeItem } from '@/types/knowledge';

export const react_security: KnowledgeItem = {
      id: 'react-security',
      title: 'React 应用安全最佳实践',
      category: 'react',
      difficulty: 'medium',
      tags: ['React', '安全', 'XSS', 'CSRF'],
      content: `## React 应用安全最佳实践

安全是 React 应用开发的重要考虑因素，前端安全不仅关乎用户数据保护，也直接影响应用的可靠性和用户信任。React 在设计上已经考虑了许多安全问题，但开发者仍需了解常见的安全威胁和防护措施，构建安全可靠的应用。

### XSS 防护详解

**跨站脚本攻击 (XSS) 原理：**
XSS 攻击是指攻击者将恶意脚本注入到网页中，当其他用户浏览该网页时，恶意脚本会在用户浏览器中执行。XSS 攻击可以窃取用户的 Cookie、Session Token、敏感数据，甚至可以重定向用户到恶意网站、执行未授权操作。XSS 攻击分为反射型（恶意脚本来自 URL 参数）、存储型（恶意脚本存储在服务器数据库）、DOM 型（恶意脚本通过 DOM 操作注入）三种类型。

**React 内置防护机制：**
React 默认会对渲染内容进行转义，将特殊字符转换为 HTML 实体，防止脚本注入。例如，<script> 会被转义为 &lt;script&gt;，从而阻止脚本执行。这是 React 提供的第一道防线，但开发者需要避免绕过这个机制。

**dangerouslySetInnerHTML 的风险：**
dangerouslySetInnerHTML 是 React 提供的用于插入原始 HTML 的 API，它会绕过 React 的转义机制。如果插入的 HTML 包含用户输入，就可能导致 XSS 攻击。使用 dangerouslySetInnerHTML 时必须确保内容来源可信，或使用 DOMPurify 等库进行清理。

### 代码示例

\`\`\`javascript
// ❌ XSS 漏洞示例
function UnsafeComponent({ userInput }) {
  return (
    <div dangerouslySetInnerHTML={{ __html: userInput }} />
  );
}

// ✅ 安全的 HTML 渲染
import DOMPurify from 'dompurify';

function SafeComponent({ userInput }) {
  const sanitizedHTML = DOMPurify.sanitize(userInput, {
    ALLOWED_TAGS: ['p', 'b', 'i', 'em', 'strong', 'a'],
    ALLOWED_ATTR: ['href', 'title']
  });
  
  return (
    <div dangerouslySetInnerHTML={{ __html: sanitizedHTML }} />
  );
}

// ✅ React 默认转义（安全）
function SafeDefault({ userInput }) {
  // React 会自动转义 userInput
  return <div>{userInput}</div>;
}

// URL 安全处理
function SafeLink({ url, children }) {
  // 验证 URL 协议
  const isSafeURL = (url) => {
    try {
      const parsedURL = new URL(url, window.location.origin);
      return ['http:', 'https:', 'mailto:'].includes(parsedURL.protocol);
    } catch {
      return false;
    }
  };
  
  const safeURL = isSafeURL(url) ? url : '#';
  
  return (
    <a 
      href={safeURL} 
      target="_blank" 
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
}

// CSP 配置示例（在 HTML 中）
// <meta http-equiv="Content-Security-Policy" 
//       content="default-src 'self'; 
//                script-src 'self' 'unsafe-inline' https://trusted.cdn.com; 
//                style-src 'self' 'unsafe-inline'; 
//                img-src 'self' data: https:; 
//                connect-src 'self' https://api.example.com;">

// CSRF 防护示例
function SecureForm() {
  const [formData, setFormData] = useState({});
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // 获取 CSRF Token
    const csrfToken = document.querySelector('meta[name="csrf-token"]')?.content;
    
    try {
      const response = await fetch('/api/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRF-Token': csrfToken
        },
        credentials: 'include', // 发送 Cookie
        body: JSON.stringify(formData)
      });
      
      if (!response.ok) throw new Error('Submit failed');
      
      const result = await response.json();
      console.log('Success:', result);
    } catch (error) {
      console.error('Error:', error);
    }
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

// 敏感数据处理
function SecureAuth() {
  // ❌ 不安全：存储敏感数据
  // localStorage.setItem('token', sensitiveToken);
  
  // ✅ 安全：使用 HttpOnly Cookie（服务器设置）
  // 服务器端设置：Set-Cookie: token=xxx; HttpOnly; Secure; SameSite=Strict
  
  // ✅ 安全：使用内存存储（页面刷新后需要重新获取）
  let token = null;
  
  const login = async (credentials) => {
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(credentials),
      credentials: 'include'
    });
    
    if (response.ok) {
      const data = await response.json();
      token = data.token; // 存储在内存中
    }
  };
  
  const logout = () => {
    token = null; // 清除内存中的 token
    fetch('/api/logout', { method: 'POST', credentials: 'include' });
  };
  
  return <LoginForm onLogin={login} onLogout={logout} />;
}

// 环境变量安全使用
// ❌ 不安全：暴露敏感信息
// const API_KEY = process.env.REACT_APP_SECRET_KEY; // 会被打包到客户端代码

// ✅ 安全：敏感操作在服务器端进行
// 客户端调用服务器 API，服务器使用密钥
async function fetchData() {
  const response = await fetch('/api/data', {
    headers: {
      'Authorization': \`Bearer \${getToken()}\`
    }
  });
  return response.json();
}

// 依赖安全检查脚本
// package.json
// {
//   "scripts": {
//     "audit": "npm audit",
//     "audit:fix": "npm audit fix"
//   }
// }

// 输入验证和清理
function validateInput(input, type) {
  const validators = {
    email: (value) => /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(value),
    phone: (value) => /^1[3-9]\\d{9}$/.test(value),
    username: (value) => /^[a-zA-Z0-9_]{3,20}$/.test(value),
    url: (value) => {
      try {
        new URL(value);
        return true;
      } catch {
        return false;
      }
    }
  };
  
  const sanitizer = {
    text: (value) => DOMPurify.sanitize(value),
    number: (value) => parseInt(value, 10) || 0,
    alphanumeric: (value) => value.replace(/[^a-zA-Z0-9]/g, '')
  };
  
  return {
    isValid: validators[type]?.(input) ?? true,
    sanitized: sanitizer[type]?.(input) ?? input
  };
}

// 安全的错误处理
function SecureErrorBoundary({ children }) {
  const [hasError, setHasError] = useState(false);
  
  useEffect(() => {
    const handleError = (event) => {
      // 记录错误到服务器，但不暴露敏感信息
      logError({
        message: event.message,
        stack: event.error?.stack,
        timestamp: new Date().toISOString()
      });
      
      setHasError(true);
      event.preventDefault();
    };
    
    window.addEventListener('error', handleError);
    window.addEventListener('unhandledrejection', handleError);
    
    return () => {
      window.removeEventListener('error', handleError);
      window.removeEventListener('unhandledrejection', handleError);
    };
  }, []);
  
  if (hasError) {
    return <div>Something went wrong. Please try again.</div>;
  }
  
  return children;
}
\`\`\`

### CSRF 防护详解

**跨站请求伪造 (CSRF) 原理：**
CSRF 攻击利用用户已认证的身份，诱导用户在不知情的情况下向目标网站发送恶意请求。攻击者可以伪造转账、修改密码、删除数据等操作。CSRF 攻击成功的关键是浏览器会自动携带目标网站的 Cookie。

**CSRF 防护策略：**
使用 CSRF Token 是最常用的防护方法，服务器生成随机 Token，嵌入到表单或请求头中，服务器验证 Token 有效性。验证 Origin 和 Referer 头可以检测跨站请求。使用 SameSite Cookie 属性可以限制 Cookie 在跨站请求中的发送。实现正确的 CORS 策略可以控制跨域请求的访问权限。

### 其他安全最佳实践

**敏感数据保护：**
不在前端存储敏感数据，如密码、API 密钥、私钥等。使用 HttpOnly、Secure、SameSite 属性的 Cookie 存储认证信息。使用 HTTPS 加密传输数据，防止中间人攻击。对敏感数据进行加密存储，使用 Web Crypto API 进行客户端加密。

**依赖安全管理：**
定期运行 npm audit 检查依赖漏洞，及时更新有漏洞的依赖包。配置 dependabot 或 Renovate 自动更新依赖。使用 Snyk 等工具进行持续的安全监控。锁定依赖版本，使用 package-lock.json 或 yarn.lock 确保依赖一致性。

**安全开发流程：**
建立安全代码审查机制，使用静态代码分析工具（如 ESLint 安全插件）检测潜在问题。进行渗透测试和安全扫描，模拟攻击场景验证防护措施。培训开发团队的安全意识，建立安全漏洞响应机制。`,
      createdAt: '2026-03-14',
      updatedAt: '2026-03-14'
    };
