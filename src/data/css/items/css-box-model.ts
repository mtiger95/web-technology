import { KnowledgeItem } from '@/types/knowledge';

export const css_box_model: KnowledgeItem = {
      id: 'css-box-model',
      title: 'CSS 盒模型深度解析',
      category: 'css',
      difficulty: 'easy',
      tags: ['CSS', '盒模型', '布局基础'],
      content: `## CSS 盒模型深度解析

CSS 盒模型是网页布局的基础，理解盒模型对于掌握 CSS 布局至关重要。

### 📦 盒模型的组成

**标准盒模型：**
- **content**：内容区域，显示文本和图像
- **padding**：内边距，内容与边框之间的空间
- **border**：边框，围绕内边距的线
- **margin**：外边距，边框外部的空间

**盒模型的计算：**
- **标准盒模型：width = content width**
- **IE 盒模型：width = content + padding + border**
- **box-sizing 属性控制盒模型类型**

**box-sizing 属性：**
- **content-box**：标准盒模型（默认值）
- **border-box**：IE 盒模型，更直观的尺寸计算
- **inherit**：继承父元素的值

### 💻 代码示例：盒模型对比

\`\`\`css
/* 标准盒模型（默认） */
.box-standard {
  box-sizing: content-box;
  width: 300px;
  padding: 20px;
  border: 5px solid #000;
  /* 实际占用宽度 = 300 + 20*2 + 5*2 = 350px */
}

/* IE 盒模型 */
.box-border {
  box-sizing: border-box;
  width: 300px;
  padding: 20px;
  border: 5px solid #000;
  /* 实际占用宽度 = 300px（包含 padding 和 border） */
  /* 内容宽度 = 300 - 20*2 - 5*2 = 250px */
}
\`\`\`

#### 全局设置 border-box

\`\`\`css
/* 推荐的全局设置 */
*,
*::before,
*::after {
  box-sizing: border-box;
}

/* 这样所有元素都使用 border-box，计算更直观 */
.container {
  width: 100%;
  padding: 20px;
  border: 1px solid #ccc;
  /* 实际宽度就是 100%，padding 和 border 包含在内 */
}
\`\`\`

#### 外边距折叠示例

\`\`\`css
/* 相邻兄弟元素的外边距折叠 */
.box1 {
  margin-bottom: 20px;
}

.box2 {
  margin-top: 30px;
  /* 实际间距 = max(20px, 30px) = 30px，不是 50px */
}

/* 防止外边距折叠的方法 */
.parent {
  margin-top: 20px;
  padding-top: 1px; /* 方法1：添加 padding */
  border-top: 1px solid transparent; /* 方法2：添加 border */
  overflow: hidden; /* 方法3：创建 BFC */
  display: flex; /* 方法4：使用 flex 布局 */
}

.child {
  margin-top: 30px;
  /* 现在不会折叠，总间距 = 20px + 30px = 50px */
}
\`\`\`

### 最佳实践

- 统一使用 border-box 盒模型
- 理解 margin 的折叠行为
- 合理使用 padding 和 margin
- 注意百分比值的计算基准
- 使用开发者工具调试盒模型`,
      createdAt: '2026-03-14',
      updatedAt: '2026-03-14'
    };
