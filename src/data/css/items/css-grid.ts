import { KnowledgeItem } from '@/types/knowledge';

export const css_grid: KnowledgeItem = {
      id: 'css-grid',
      title: 'CSS Grid 网格布局详解',
      category: 'css',
      difficulty: 'medium',
      tags: ['CSS', 'Grid', '网格布局'],
      content: `## CSS Grid 网格布局详解

CSS Grid（网格布局）是 CSS 最强大的二维布局系统，可以同时处理行和列，创建复杂的网页布局。

### Grid 基础概念

**Grid 容器和项目：**
- display: grid 创建 Grid 容器
- 容器的直接子元素成为 Grid 项目
- 网格线（grid line）、网格轨道（grid track）、网格单元（grid cell）

**定义网格：**
- grid-template-columns：定义列
- grid-template-rows：定义行
- 可以使用长度、百分比、fr 单位、repeat() 函数

**fr 单位：**
- 分数单位，表示剩余空间的比例
- 1fr 占据一份剩余空间
- 可以与其他单位混合使用

### 代码示例

#### 圣杯布局

\`\`\`css
.container {
  display: grid;
  min-height: 100vh;
  grid-template-areas:
    "header header header"
    "sidebar main aside"
    "footer footer footer";
  grid-template-columns: 200px 1fr 200px;
  grid-template-rows: auto 1fr auto;
  gap: 20px;
}

.header {
  grid-area: header;
  background-color: #333;
  color: white;
  padding: 20px;
}

.sidebar {
  grid-area: sidebar;
  background-color: #f5f5f5;
  padding: 20px;
}

.main {
  grid-area: main;
  background-color: #fff;
  padding: 20px;
}

.aside {
  grid-area: aside;
  background-color: #f5f5f5;
  padding: 20px;
}

.footer {
  grid-area: footer;
  background-color: #333;
  color: white;
  padding: 20px;
}

/* 响应式：小屏幕时改为单列 */
@media (max-width: 768px) {
  .container {
    grid-template-areas:
      "header"
      "main"
      "sidebar"
      "aside"
      "footer";
    grid-template-columns: 1fr;
    grid-template-rows: auto;
  }
}
\`\`\`

#### 响应式卡片网格

\`\`\`css
.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  padding: 20px;
}

.card {
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  padding: 20px;
  transition: transform 0.3s, box-shadow 0.3s;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 8px rgba(0,0,0,0.15);
}

/* auto-fit 会自动根据容器宽度调整列数 */
/* minmax(300px, 1fr) 确保每列最小 300px，最大平分剩余空间 */
\`\`\`

### 最佳实践

- 二维布局优先使用 Grid
- 一维布局使用 Flexbox
- 结合两者使用（Grid 布局，Flexbox 对齐）
- 使用 grid-template-areas 提高可读性
- 注意浏览器兼容性（现代浏览器支持良好）
- 使用 fr 单位实现弹性布局
- 使用 minmax() 实现响应式
- 使用 gap 属性设置间距`,
      createdAt: '2026-03-14',
      updatedAt: '2026-03-14'
    };
