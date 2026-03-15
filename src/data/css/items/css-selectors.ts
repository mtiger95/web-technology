import { KnowledgeItem } from '@/types/knowledge';

export const css_selectors: KnowledgeItem = {
      id: 'css-selectors',
      title: 'CSS 选择器详解',
      category: 'css',
      difficulty: 'easy',
      tags: ['CSS', '选择器', '优先级'],
      content: `## CSS 选择器详解

CSS 选择器用于选择要样式化的 HTML 元素，是 CSS 的核心概念之一。

### 基础选择器

**元素选择器：**
- 选择特定类型的元素
- 如：p、div、h1

**类选择器：**
- 选择具有特定类的元素
- 如：.classname
- 一个元素可以有多个类

**ID 选择器：**
- 选择具有特定 ID 的元素
- 如：#idname
- 一个页面中 ID 应该是唯一的

**通用选择器：**
- 选择所有元素
- 如：*
- 通常用于重置样式

**属性选择器：**
- [attr]：具有 attr 属性的元素
- [attr=value]：attr 属性值为 value
- [attr^=value]：attr 属性值以 value 开头
- [attr$=value]：attr 属性值以 value 结尾
- [attr*=value]：attr 属性值包含 value

### 组合选择器

**后代选择器：**
- 选择后代元素
- 如：div p（div 内的所有 p）

**子选择器：**
- 选择直接子元素
- 如：div > p（div 的直接子 p）

**相邻兄弟选择器：**
- 选择紧接在后的兄弟元素
- 如：h1 + p（紧接 h1 的 p）

**通用兄弟选择器：**
- 选择所有后面的兄弟元素
- 如：h1 ~ p（h1 后的所有 p）

**分组选择器：**
- 同时选择多个选择器
- 如：h1, h2, h3

### 伪类选择器

**链接伪类：**
- :link：未访问的链接
- :visited：已访问的链接
- :hover：鼠标悬停
- :active：激活状态

**表单伪类：**
- :focus：获得焦点
- :checked：选中的复选框/单选框
- :disabled：禁用的元素
- :valid/:invalid：验证状态

**位置伪类：**
- :first-child：第一个子元素
- :last-child：最后一个子元素
- :nth-child(n)：第 n 个子元素
- :nth-of-type(n)：第 n 个同类型元素
- :only-child：唯一的子元素

**其他伪类：**
- :not()：否定选择器
- :is()：匹配列表中的任意选择器
- :where()：与 :is() 类似，但优先级为 0
- :has()：父元素选择器（实验性）

### 伪元素选择器

**::before/::after：**
- 在元素内容前后插入内容
- 需要 content 属性
- 常用于装饰

**::first-letter/::first-line：**
- 第一个字母/第一行
- 用于首字下沉等效果

**::selection：**
- 选中的文本
- 自定义选中文本样式

**::placeholder：**
- 输入框的占位符文本

**::marker：**
- 列表项的标记

### 优先级（特异性）

**计算规则：**
- 行内样式：1000
- ID 选择器：100
- 类/属性/伪类：10
- 元素/伪元素：1
- 通用选择器：0

**示例：**
- #nav：100
- .nav .item：20
- div#nav .item a：112

**重要规则：**
- !important 覆盖一切
- 应谨慎使用
- 相同优先级，后定义的规则生效

### 代码示例

#### 基础选择器

\`\`\`css
/* 元素选择器 */
p {
  color: #333;
  line-height: 1.6;
}

h1 {
  font-size: 2rem;
  font-weight: 700;
}

/* 类选择器 */
.button {
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.button--primary {
  background-color: #007bff;
}

.button--secondary {
  background-color: #6c757d;
}

/* ID 选择器 */
#header {
  background-color: #333;
  color: white;
  padding: 20px;
}

/* 通用选择器 */
* {
  box-sizing: border-box;
}

/* 属性选择器 */
input[type="text"] {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

a[href^="https"] {
  color: #007bff;
}

img[alt*="logo"] {
  border: 2px solid #007bff;
}
\`\`\`

#### 组合选择器

\`\`\`css
/* 后代选择器 */
.container p {
  margin-bottom: 1rem;
}

/* 子选择器 */
.nav > .nav-item {
  padding: 10px;
}

/* 相邻兄弟选择器 */
h1 + p {
  font-size: 1.2rem;
  font-weight: 600;
}

/* 通用兄弟选择器 */
h1 ~ p {
  color: #666;
}

/* 分组选择器 */
h1, h2, h3 {
  font-weight: 700;
  margin-bottom: 0.5rem;
}
\`\`\`

#### 伪类选择器

\`\`\`css
/* 链接伪类 */
a:link {
  color: #007bff;
}

a:visited {
  color: #6c757d;
}

a:hover {
  color: #0056b3;
  text-decoration: underline;
}

a:active {
  color: #004085;
}

/* 表单伪类 */
input:focus {
  outline: 2px solid #007bff;
  outline-offset: 2px;
}

input:checked {
  accent-color: #007bff;
}

input:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

/* 位置伪类 */
li:first-child {
  font-weight: 700;
}

li:last-child {
  margin-bottom: 0;
}

li:nth-child(2n) {
  background-color: #f5f5f5;
}

li:nth-of-type(3) {
  color: #007bff;
}

/* 其他伪类 */
.nav-item:not(.active) {
  opacity: 0.7;
}

:is(h1, h2, h3) {
  font-weight: 700;
}

/* 父元素选择器 */
article:has(img) {
  padding: 20px;
}
\`\`\`

#### 伪元素选择器

\`\`\`css
/* ::before/::after */
.card::before {
  content: '';
  display: block;
  width: 100%;
  height: 4px;
  background-color: #007bff;
}

.button::after {
  content: ' →';
  margin-left: 5px;
}

/* ::first-letter/::first-line */
.article p::first-letter {
  font-size: 2rem;
  font-weight: 700;
  float: left;
  margin-right: 10px;
}

.article p::first-line {
  font-weight: 600;
  color: #333;
}

/* ::selection */
::selection {
  background-color: #007bff;
  color: white;
}

/* ::placeholder */
input::placeholder {
  color: #999;
  font-style: italic;
}

/* ::marker */
li::marker {
  color: #007bff;
  font-weight: 700;
}
\`\`\`

#### 优先级示例

\`\`\`css
/* 优先级：100 */
#header {
  color: red;
}

/* 优先级：20 */
.nav .item {
  color: blue;
}

/* 优先级：112 */
div#nav .item a {
  color: green;
}

/* 相同优先级，后定义的规则生效 */
.button {
  background-color: #007bff;
}

.button {
  background-color: #0056b3;
}

/* !important 覆盖一切 */
.button {
  background-color: #dc3545 !important;
}
\`\`\`

### 最佳实践

- 保持选择器简洁
- 避免过度嵌套（不超过 3 层）
- 合理使用类选择器
- 理解优先级规则
- 避免使用 !important
- 使用 BEM 等命名规范
- 测试选择器性能`,
      createdAt: '2026-03-14',
      updatedAt: '2026-03-14'
    };
