import { KnowledgeItem } from '@/types/knowledge';

export const css_modern_features: KnowledgeItem = {
      id: 'css-modern-features',
      title: 'CSS 现代特性与前沿技术',
      category: 'css',
      difficulty: 'hard',
      tags: ['CSS', '新特性', 'Houdini', '容器查询'],
      content: `## CSS 现代特性与前沿技术

CSS 不断发展，引入了许多强大的新特性，为开发者提供了更多的可能性。

### 容器查询（Container Queries）

**概念：**
- 基于容器尺寸而非视口尺寸
- 组件级响应式
- 更灵活的布局控制

**语法：**
- container-type：定义容器类型
- @container：容器查询规则
- container-name：命名容器

**示例：**
\`\`\`css
.card-container {
  container-type: inline-size;
}

@container (min-width: 400px) {
  .card {
    display: flex;
  }
}
\`\`\`

**应用场景：**
- 组件库
- 侧边栏内容
- 嵌套布局

### CSS Houdini

**概念：**
- 暴露 CSS 引擎的 API
- 扩展 CSS 能力
- JavaScript 与 CSS 的桥梁

**API 类型：**
- Paint API：自定义绘制
- Layout API：自定义布局
- Animation API：自定义动画
- Properties API：自定义属性

**Paint API 示例：**
\`\`\`javascript
// paint-worklet.js
registerPaint('circle', class {
  static get inputProperties() {
    return ['--circle-color'];
  }

  paint(ctx, size, styleMap) {
    const color = styleMap.get('--circle-color').toString();
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(size.width / 2, size.height / 2, size.width / 2, 0, 2 * Math.PI);
    ctx.fill();
  }
});

// CSS
CSS.paintWorklet.addModule('paint-worklet.js');

.background {
  background-image: paint(circle);
  --circle-color: #007bff;
}
\`\`\`

### 级联层（Cascade Layers）

**概念：**
- 控制样式的优先级层级
- 解决特异性问题
- 更清晰的样式组织

**语法：**
- @layer 定义层
- @layer layer-name { ... }
- 层顺序决定优先级

**示例：**
\`\`\`css
@layer reset, base, components, utilities;

@layer base {
  body { font-size: 16px; }
}

@layer components {
  .button { padding: 10px; }
}
\`\`\`

### :has() 选择器

**概念：**
- 父元素选择器
- 选择包含特定子元素的父元素
- 强大的组合能力

**示例：**
- article:has(img)：包含图片的文章
- .card:has(.badge)：包含徽章的卡片
- form:has(:invalid)：包含无效输入的表单

**应用场景：**
- 条件样式
- 表单验证样式
- 复杂布局

### 其他现代特性

**:is() 和 :where()：**
- 简化复杂选择器
- :is() 保持特异性
- :where() 特异性为 0

**accent-color：**
- 自定义表单控件颜色
- 统一主题色

**aspect-ratio：**
- 保持元素宽高比
- 无需 padding hack

**gap：**
- Flexbox 和 Grid 的间距
- 替代 margin

**subgrid：**
- Grid 嵌套继承轨道
- 复杂布局对齐

**@supports：**
- 特性查询
- 渐进增强

### 代码示例

#### 容器查询

\`\`\`css
/* 定义容器 */
.card-wrapper {
  container-type: inline-size;
  container-name: card;
}

/* 容器查询 */
@container card (min-width: 300px) {
  .card {
    flex-direction: row;
  }
}

@container card (min-width: 500px) {
  .card {
    padding: 30px;
  }
}

@container card (min-width: 700px) {
  .card {
    gap: 40px;
  }
}

/* 响应式卡片组件 */
.card {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.card__image {
  width: 100%;
  aspect-ratio: 16/9;
  object-fit: cover;
  border-radius: 4px;
}

.card__content {
  flex: 1;
}

.card__title {
  margin: 0 0 10px 0;
  font-size: 1.25rem;
}

.card__text {
  margin: 0;
  line-height: 1.6;
  color: #666;
}
\`\`\`

#### 级联层

\`\`\`css
/* 定义层顺序 */
@layer reset, base, components, utilities;

/* 重置层 */
@layer reset {
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
}

/* 基础层 */
@layer base {
  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    line-height: 1.6;
    color: #333;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 700;
    line-height: 1.2;
  }
}

/* 组件层 */
@layer components {
  .button {
    padding: 10px 20px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .button:hover {
    background-color: #0056b3;
  }
}

/* 工具层 */
@layer utilities {
  .text-center { text-align: center; }
  .text-left { text-align: left; }
  .text-right { text-align: right; }

  .flex { display: flex; }
  .flex-col { flex-direction: column; }
  .items-center { align-items: center; }
  .justify-center { justify-content: center; }
}

/* 未命名层 */
@layer {
  .custom-style {
    /* 这个层在所有命名层之后 */
  }
}
\`\`\`

#### :has() 选择器

\`\`\`css
/* 包含图片的文章 */
article:has(img) {
  padding: 20px;
  border: 1px solid #ddd;
}

/* 包含徽章的卡片 */
.card:has(.badge) {
  border-color: #007bff;
}

/* 包含无效输入的表单 */
form:has(:invalid) {
  border: 2px solid #dc3545;
}

/* 组合使用：包含图片和视频的文章 */
article:has(img):has(video) {
  background-color: #f8f9fa;
}

/* 嵌套选择器 */
.card:has(.header .badge) {
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}

/* 与其他伪类组合 */
article:has(img):hover {
  transform: translateY(-2px);
}
\`\`\`

#### 其他现代特性

\`\`\`css
/* :is() 简化选择器 */
/* 之前 */
h1 .title, h2 .title, h3 .title {
  font-weight: 700;
}

/* 之后 */
:is(h1, h2, h3) .title {
  font-weight: 700;
}

/* :where() 零特异性 */
:where(h1, h2, h3) .title {
  /* 特异性为 0 */
  font-weight: 700;
}

/* accent-color 自定义表单控件 */
input[type="checkbox"],
input[type="radio"] {
  accent-color: #007bff;
}

/* aspect-ratio 保持宽高比 */
.image-container {
  aspect-ratio: 16/9;
  background-color: #f0f0f0;
}

/* gap 在 Flexbox 中 */
.flex-container {
  display: flex;
  gap: 20px;
}

/* @supports 特性查询 */
@supports (backdrop-filter: blur(10px)) {
  .glass-effect {
    backdrop-filter: blur(10px);
  }
}

@supports not (backdrop-filter: blur(10px)) {
  .glass-effect {
    background-color: rgba(255, 255, 255, 0.9);
  }
}
\`\`\`

### 最佳实践

- 使用容器查询实现组件级响应式
- 理解级联层的优先级规则
- 合理使用 :has() 选择器
- 关注浏览器支持情况
- 使用 @supports 提供回退方案
- 渐进增强策略
- 性能优化（避免过度使用复杂选择器）`,
      createdAt: '2026-03-14',
      updatedAt: '2026-03-14'
    };
