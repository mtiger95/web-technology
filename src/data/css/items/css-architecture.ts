import { KnowledgeItem } from '@/types/knowledge';

export const css_architecture: KnowledgeItem = {
      id: 'css-architecture',
      title: 'CSS 架构与命名规范',
      category: 'css',
      difficulty: 'medium',
      tags: ['CSS', 'BEM', 'OOCSS', '架构'],
      content: `## CSS 架构与命名规范

良好的 CSS 架构和命名规范对于大型项目的可维护性至关重要，可以避免样式冲突和提高代码复用性。

### BEM 命名规范

**概念：**
- Block（块）：独立的组件
- Element（元素）：块的组成部分
- Modifier（修饰符）：块或元素的状态

**命名规则：**
- Block：.block
- Element：.block__element
- Modifier：.block--modifier 或 .block__element--modifier

**示例：**
- .button（块）
- .button__icon（元素）
- .button--primary（修饰符）
- .button__icon--large（元素修饰符）

**优点：**
- 清晰的结构关系
- 避免命名冲突
- 易于理解和维护

### OOCSS（面向对象的 CSS）

**原则：**
- 分离结构和外观
- 分离容器和内容

**结构类：**
- 定义布局结构
- 如：.layout、.grid、.column

**外观类：**
- 定义视觉样式
- 如：.skin、.theme-blue

**示例：**
- 结构：.media { display: flex; }
- 外观：.media--bordered { border: 1px solid; }

### SMACSS（可扩展的模块化 CSS 架构）

**分类：**
- Base：基础样式（重置、元素默认样式）
- Layout：布局样式（网格、容器）
- Module：模块样式（可复用组件）
- State：状态样式（激活、禁用）
- Theme：主题样式（颜色、字体）

**命名约定：**
- Layout：l- 或 layout-
- State：is- 或 has-
- Theme：theme-

### ITCSS（倒三角 CSS）

**层次结构：**
1. Settings：变量和配置
2. Tools：混合和函数
3. Generic：重置和标准化
4. Elements：裸元素样式
5. Objects：布局结构
6. Components：UI 组件
7. Utilities：辅助类

**特点：**
- 从通用到具体
- 低特异性到高特异性
- 易于维护和扩展

### 实用工具类（Utility-First）

**概念：**
- 小而单一用途的类
- 组合构建复杂 UI
- 如 Tailwind CSS

**示例：**
- .p-4 { padding: 1rem; }
- .text-center { text-align: center; }
- .flex { display: flex; }

**优点：**
- 开发速度快
- 文件大小可控（PurgeCSS）
- 设计一致性

### CSS-in-JS

**概念：**
- 在 JavaScript 中编写 CSS
- 组件级样式隔离
- 动态样式支持

**方案：**
- Styled-components
- Emotion
- CSS Modules
- JSS

**优点：**
- 真正的样式隔离
- 动态主题
- 代码组织清晰

### 代码示例

#### BEM 命名示例

\`\`\`css
/* 块 */
.card {
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  padding: 20px;
}

/* 元素 */
.card__header {
  margin-bottom: 15px;
  padding-bottom: 15px;
  border-bottom: 1px solid #eee;
}

.card__title {
  margin: 0;
  font-size: 1.25rem;
  font-weight: 600;
}

.card__body {
  margin-bottom: 15px;
}

.card__text {
  margin: 0 0 10px 0;
  line-height: 1.6;
  color: #666;
}

.card__footer {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
}

/* 修饰符 */
.card--featured {
  border: 2px solid #007bff;
}

.card--compact {
  padding: 10px;
}

.card__title--large {
  font-size: 1.5rem;
}

/* HTML 使用 */
<div class="card card--featured">
  <div class="card__header">
    <h2 class="card__title card__title--large">标题</h2>
  </div>
  <div class="card__body">
    <p class="card__text">内容文本</p>
  </div>
  <div class="card__footer">
    <button class="card__button">按钮</button>
  </div>
</div>
\`\`\`

#### OOCSS 示例

\`\`\`css
/* 结构类 */
.media {
  display: flex;
  align-items: flex-start;
}

.media__object {
  margin-right: 1rem;
}

.media__body {
  flex: 1;
  overflow: hidden;
}

/* 外观类 */
.media--bordered {
  border: 1px solid #ddd;
  padding: 1rem;
  border-radius: 4px;
}

.media--spaced {
  margin-bottom: 1rem;
}

/* 组合使用 */
<div class="media media--bordered media--spaced">
  <img class="media__object" src="avatar.jpg" alt="头像">
  <div class="media__body">
    <h3>标题</h3>
    <p>内容文本</p>
  </div>
</div>
\`\`\`

#### SMACSS 示例

\`\`\`css
/* Base - 基础样式 */
* {
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  line-height: 1.6;
  color: #333;
}

/* Layout - 布局样式 */
.l-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.l-grid {
  display: grid;
  gap: 20px;
}

/* Module - 模块样式 */
.card {
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  padding: 20px;
}

.button {
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
}

/* State - 状态样式 */
.is-active {
  background-color: #007bff;
  color: white;
}

.is-hidden {
  display: none;
}

.is-disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

/* Theme - 主题样式 */
.theme-dark {
  background-color: #1a1a1a;
  color: #fff;
}

.theme-light {
  background-color: #fff;
  color: #333;
}
\`\`\`

#### 实用工具类示例

\`\`\`css
/* 间距工具类 */
.p-1 { padding: 0.25rem; }
.p-2 { padding: 0.5rem; }
.p-3 { padding: 1rem; }
.p-4 { padding: 1.5rem; }

.m-1 { margin: 0.25rem; }
.m-2 { margin: 0.5rem; }
.m-3 { margin: 1rem; }
.m-4 { margin: 1.5rem; }

/* 文本工具类 */
.text-center { text-align: center; }
.text-left { text-align: left; }
.text-right { text-align: right; }

.text-sm { font-size: 0.875rem; }
.text-base { font-size: 1rem; }
.text-lg { font-size: 1.125rem; }
.text-xl { font-size: 1.25rem; }

/* 颜色工具类 */
.text-primary { color: #007bff; }
.text-secondary { color: #6c757d; }
.text-success { color: #28a745; }
.text-danger { color: #dc3545; }

.bg-primary { background-color: #007bff; }
.bg-secondary { background-color: #6c757d; }
.bg-success { background-color: #28a745; }
.bg-danger { background-color: #dc3545; }

/* 布局工具类 */
.flex { display: flex; }
.flex-col { flex-direction: column; }
.items-center { align-items: center; }
.justify-center { justify-content: center; }
.justify-between { justify-content: space-between; }

/* 组合使用 */
<div class="p-4 bg-white rounded shadow">
  <h2 class="text-xl text-primary mb-2">标题</h2>
  <p class="text-base text-secondary mb-4">内容文本</p>
  <div class="flex justify-between">
    <button class="px-4 py-2 bg-primary text-white rounded">确定</button>
    <button class="px-4 py-2 bg-secondary text-white rounded">取消</button>
  </div>
</div>
\`\`\`

### 文件组织

**按功能组织：**
- components/
- layouts/
- pages/
- utilities/

**按类型组织：**
- base/
- components/
- layouts/
- themes/

**ITCSS 组织：**
- settings/
- tools/
- generic/
- elements/
- objects/
- components/
- utilities/

### 最佳实践

- 选择适合的命名规范
- 建立样式指南
- 使用 CSS 变量
- 避免深度选择器
- 定期重构和清理
- 文档化样式系统
- 团队协作规范`,
      createdAt: '2026-03-14',
      updatedAt: '2026-03-14'
    };
