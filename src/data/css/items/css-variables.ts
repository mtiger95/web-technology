import { KnowledgeItem } from '@/types/knowledge';

export const css_variables: KnowledgeItem = {
      id: 'css-variables',
      title: 'CSS 自定义属性（变量）',
      category: 'css',
      difficulty: 'easy',
      tags: ['CSS', '变量', '自定义属性', '主题'],
      content: `## CSS 自定义属性（变量）

CSS 自定义属性（CSS Variables）允许定义可复用的值，提高代码的可维护性和灵活性。

### 基本语法

**定义变量：**
- --variable-name: value;
- 必须在规则集内定义
- 通常定义在 :root 中作为全局变量

**使用变量：**
- var(--variable-name)
- var(--variable-name, fallback)
- 支持回退值

**示例：**
\`\`\`css
:root {
  --primary-color: #007bff;
  --font-size: 16px;
}

.button {
  background-color: var(--primary-color);
  font-size: var(--font-size);
}
\`\`\`

### 作用域和继承

**全局变量：**
- 定义在 :root 中
- 整个文档可用
- 如：--primary-color

**局部变量：**
- 定义在特定选择器中
- 仅在该选择器及其后代中可用
- 可以覆盖全局变量

**继承：**
- 变量遵循 CSS 继承规则
- 子元素继承父元素的变量值
- 可以重新定义覆盖

### 代码示例

#### 定义和使用变量

\`\`\`css
/* 全局变量 */
:root {
  /* 颜色 */
  --primary-color: #007bff;
  --secondary-color: #6c757d;
  --success-color: #28a745;
  --danger-color: #dc3545;
  --warning-color: #ffc107;
  
  /* 字体 */
  --font-family-base: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  --font-size-base: 16px;
  --font-size-large: 1.25rem;
  --font-size-small: 0.875rem;
  
  /* 间距 */
  --spacing-unit: 8px;
  --spacing-sm: var(--spacing-unit);
  --spacing-md: calc(var(--spacing-unit) * 2);
  --spacing-lg: calc(var(--spacing-unit) * 3);
  
  /* 边框 */
  --border-radius: 4px;
  --border-width: 1px;
  --border-color: #dee2e6;
  
  /* 阴影 */
  --box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  --box-shadow-lg: 0 4px 8px rgba(0,0,0,0.15);
}

/* 使用变量 */
.button {
  padding: var(--spacing-md) var(--spacing-lg);
  background-color: var(--primary-color);
  color: white;
  border: none;
  border-radius: var(--border-radius);
  font-family: var(--font-family-base);
  font-size: var(--font-size-base);
  box-shadow: var(--box-shadow);
  cursor: pointer;
  transition: all 0.3s ease;
}

.button:hover {
  background-color: var(--primary-color);
  box-shadow: var(--box-shadow-lg);
}

.button--secondary {
  background-color: var(--secondary-color);
}

.button--success {
  background-color: var(--success-color);
}

.button--danger {
  background-color: var(--danger-color);
}
\`\`\`

#### 主题切换

\`\`\`css
/* 浅色主题（默认） */
:root {
  --bg-primary: #ffffff;
  --bg-secondary: #f8f9fa;
  --text-primary: #212529;
  --text-secondary: #6c757d;
  --border-color: #dee2e6;
  --shadow-color: rgba(0, 0, 0, 0.1);
}

/* 深色主题 */
[data-theme="dark"] {
  --bg-primary: #1a1a1a;
  --bg-secondary: #2d2d2d;
  --text-primary: #ffffff;
  --text-secondary: #b0b0b0;
  --border-color: #404040;
  --shadow-color: rgba(0, 0, 0, 0.3);
}

/* 使用变量 */
body {
  background-color: var(--bg-primary);
  color: var(--text-primary);
  transition: background-color 0.3s, color 0.3s;
}

.card {
  background-color: var(--bg-secondary);
  border: 1px solid var(--border-color);
  box-shadow: 0 2px 4px var(--shadow-color);
  color: var(--text-primary);
}

.text-secondary {
  color: var(--text-secondary);
}

/* JavaScript 切换主题 */
function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
}

// 初始化主题
const savedTheme = localStorage.getItem('theme') || 'light';
document.documentElement.setAttribute('data-theme', savedTheme);
\`\`\`

#### 与 calc() 结合使用

\`\`\`css
:root {
  --spacing-unit: 8px;
  --border-width: 2px;
  --font-size: 16px;
}

.card {
  /* 使用 calc() 计算值 */
  padding: calc(var(--spacing-unit) * 2);
  margin: calc(var(--spacing-unit) * 1.5);
  border: var(--border-width) solid #ddd;
  font-size: calc(var(--font-size) * 1.125);
}

/* 复杂计算 */
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: calc(var(--spacing-unit) * 2);
}

@media (max-width: 768px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
    gap: calc(var(--spacing-unit) * 1.5);
  }
}
\`\`\`

### 与预处理器变量的区别

**CSS 变量：**
- 运行时生效
- 可以动态修改
- 遵循级联和继承
- 需要浏览器支持

**Sass/Less 变量：**
- 编译时确定
- 不能运行时修改
- 无继承概念
- 编译为静态值

### 浏览器支持

**支持情况：**
- 现代浏览器完全支持
- IE 不支持
- 可以使用 PostCSS 插件回退

**回退策略：**
- 提供静态回退值
- 使用 PostCSS 插件
- 渐进增强

### 最佳实践

- 使用语义化的变量名
- 建立变量命名规范
- 合理组织全局和局部变量
- 使用回退值
- 结合 calc() 进行计算
- 文档化变量用途
- 定期审查和优化`,
      createdAt: '2026-03-14',
      updatedAt: '2026-03-14'
    };
