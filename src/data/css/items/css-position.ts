import { KnowledgeItem } from '@/types/knowledge';

export const css_position: KnowledgeItem = {
      id: 'css-position',
      title: 'CSS 定位机制详解',
      category: 'css',
      difficulty: 'medium',
      tags: ['CSS', '定位', 'position'],
      content: `## CSS 定位机制详解

CSS 定位允许你控制元素在页面上的位置，是布局的重要工具。理解定位机制对于创建复杂的布局至关重要。

### 定位类型

**static（默认值）：**
- 正常文档流定位
- 不受 top、right、bottom、left 影响
- 元素按照 HTML 顺序排列

**relative：**
- 相对定位，相对于元素在正常文档流中的位置
- 不脱离文档流，保留原位置空间
- 使用 top、right、bottom、left 进行偏移

**absolute：**
- 绝对定位，相对于最近的定位祖先元素
- 脱离文档流，不保留原位置空间
- 如果没有定位祖先，相对于初始包含块（通常是视口）

**fixed：**
- 固定定位，相对于视口
- 脱离文档流
- 滚动时保持位置不变

**sticky：**
- 粘性定位，相对和固定的混合
- 在阈值之前是相对定位，之后是固定定位
- 需要指定 top、right、bottom 或 left

### 代码示例

#### 模态框实现

\`\`\`css
/* 模态框遮罩 */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s, visibility 0.3s;
}

.modal-overlay.active {
  opacity: 1;
  visibility: visible;
}

/* 模态框内容 */
.modal {
  position: relative;
  width: 90%;
  max-width: 600px;
  max-height: 90vh;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.2);
  overflow-y: auto;
  transform: translateY(-20px);
  transition: transform 0.3s;
}

.modal-overlay.active .modal {
  transform: translateY(0);
}

.modal-header {
  padding: 20px;
  border-bottom: 1px solid #eee;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.modal-title {
  margin: 0;
  font-size: 20px;
  font-weight: 600;
}

.modal-close {
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #999;
  transition: color 0.3s;
}

.modal-close:hover {
  color: #333;
}

.modal-body {
  padding: 20px;
}

.modal-footer {
  padding: 20px;
  border-top: 1px solid #eee;
  display: flex;
  justify-content: flex-end;
  gap: 10px;
}
\`\`\`

#### 固定导航栏

\`\`\`css
/* 固定定位：固定导航栏 */
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 60px;
  background-color: #333;
  color: white;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
}

/* 需要为 body 添加 padding-top，避免内容被遮挡 */
body {
  padding-top: 60px;
}

/* 返回顶部按钮 */
.back-to-top {
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 50px;
  height: 50px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 8px rgba(0,0,0,0.2);
  z-index: 1000;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s, visibility 0.3s;
}

.back-to-top.visible {
  opacity: 1;
  visibility: visible;
}
\`\`\`

### 最佳实践

- 优先使用 Flexbox 和 Grid 布局
- 定位用于特殊场景（弹出层、固定元素）
- 合理使用 z-index，避免过大值
- 注意定位对文档流的影响
- 测试不同屏幕尺寸下的表现
- 使用语义化的 HTML 结构
- 为固定元素预留空间（padding-top）`,
      createdAt: '2026-03-14',
      updatedAt: '2026-03-14'
    };
