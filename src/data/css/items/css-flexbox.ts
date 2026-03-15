import { KnowledgeItem } from '@/types/knowledge';

export const css_flexbox: KnowledgeItem = {
      id: 'css-flexbox',
      title: 'Flexbox 弹性布局详解',
      category: 'css',
      difficulty: 'medium',
      tags: ['CSS', 'Flexbox', '弹性布局'],
      content: `## Flexbox 弹性布局详解

Flexbox（弹性盒子布局）是 CSS3 引入的一维布局模型，专门用于处理元素在容器中的排列、对齐和分布。

### Flexbox 基础概念

**Flex 容器和项目：**
- display: flex 创建 Flex 容器
- 容器的直接子元素成为 Flex 项目
- 主轴（main axis）和交叉轴（cross axis）

**主轴方向：**
- flex-direction: row（默认值，水平从左到右）
- flex-direction: row-reverse（水平从右到左）
- flex-direction: column（垂直从上到下）
- flex-direction: column-reverse（垂直从下到上）

**换行控制：**
- flex-wrap: nowrap（默认值，不换行）
- flex-wrap: wrap（允许换行）
- flex-wrap: wrap-reverse（反向换行）

### 主轴对齐

**justify-content 属性：**
- flex-start：项目向主轴起点对齐
- flex-end：项目向主轴终点对齐
- center：项目在主轴上居中
- space-between：项目均匀分布，首尾贴边
- space-around：项目均匀分布，周围有空间
- space-evenly：项目均匀分布，间距相等

### 交叉轴对齐

**align-items 属性（单行）：**
- stretch（默认值）：项目拉伸填充容器
- flex-start：项目向交叉轴起点对齐
- flex-end：项目向交叉轴终点对齐
- center：项目在交叉轴上居中
- baseline：项目基线对齐

**align-content 属性（多行）：**
- stretch（默认值）：行拉伸填充容器
- flex-start：行向交叉轴起点对齐
- flex-end：行向交叉轴终点对齐
- center：行在交叉轴上居中
- space-between：行均匀分布
- space-around：行均匀分布，周围有空间

### Flex 项目属性

**flex-grow：**
- 定义项目的放大比例
- 默认值为 0，不放大
- 值为 1 时，项目占据剩余空间

**flex-shrink：**
- 定义项目的缩小比例
- 默认值为 1，空间不足时缩小
- 值为 0 时，项目不缩小

**flex-basis：**
- 定义项目在分配多余空间之前的初始大小
- 可以是长度值或 auto
- 优先级高于 width/height

**flex 简写：**
- flex: flex-grow flex-shrink flex-basis
- flex: 1 表示 flex: 1 1 0%
- flex: auto 表示 flex: 1 1 auto

### 代码示例

#### 水平垂直居中

\`\`\`css
/* 方法1：最常用的居中方式 */
.center-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

/* 方法2：使用 margin: auto */
.center-container {
  display: flex;
  height: 100vh;
}

.center-item {
  margin: auto;
}

/* 方法3：使用 place-items（简写） */
.center-container {
  display: flex;
  place-items: center;
  height: 100vh;
}
\`\`\`

#### 三栏布局（两边固定，中间自适应）

\`\`\`css
.container {
  display: flex;
  height: 100vh;
}

.sidebar-left {
  width: 200px;
  flex-shrink: 0; /* 防止缩小 */
  background-color: #f5f5f5;
}

.main-content {
  flex: 1; /* flex-grow: 1, flex-shrink: 1, flex-basis: 0% */
  background-color: #fff;
}

.sidebar-right {
  width: 250px;
  flex-shrink: 0; /* 防止缩小 */
  background-color: #f5f5f5;
}

/* 响应式：小屏幕时改为单列 */
@media (max-width: 768px) {
  .container {
    flex-direction: column;
  }

  .sidebar-left,
  .sidebar-right {
    width: 100%;
  }
}
\`\`\`

#### 等高布局

\`\`\`css
.card-container {
  display: flex;
  gap: 20px;
}

.card {
  flex: 1;
  /* align-items: stretch 是默认值，所以卡片会自动等高 */
  padding: 20px;
  border: 1px solid #ddd;
}

/* 即使卡片内容高度不同，所有卡片也会等高 */
\`\`\`

### 最佳实践

- 优先使用 Flexbox 进行一维布局
- 合理使用 flex 简写属性
- 注意浏览器兼容性（IE10+）
- 结合媒体查询实现响应式布局
- 避免过度嵌套 Flex 容器
- 使用 flex: 1 实现自适应布局
- 使用 gap 属性设置间距（现代浏览器）`,
      createdAt: '2026-03-14',
      updatedAt: '2026-03-14'
    };
