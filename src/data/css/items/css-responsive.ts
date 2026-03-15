import { KnowledgeItem } from '@/types/knowledge';

export const css_responsive: KnowledgeItem = {
      id: 'css-responsive',
      title: '响应式设计与媒体查询',
      category: 'css',
      difficulty: 'medium',
      tags: ['CSS', '响应式', '媒体查询', '移动端'],
      content: `## 响应式设计与媒体查询

响应式设计是现代网页开发的标准实践，确保网站在不同设备和屏幕尺寸上都能良好显示。

### 媒体查询基础

**基本语法：**
- @media media-type and (media-feature) { ... }
- 媒体类型：screen、print、speech、all
- 媒体特性：width、height、orientation 等

**常用媒体特性：**
- min-width：最小宽度
- max-width：最大宽度
- min-height：最小高度
- max-height：最大高度
- orientation：方向（portrait/landscape）
- aspect-ratio：宽高比

**逻辑运算符：**
- and：同时满足多个条件
- not：否定媒体查询
- only：仅适用于特定媒体类型
- ,（逗号）：或关系

### 代码示例

#### 移动优先策略

\`\`\`css
/* 移动优先：从小屏幕开始，逐步增强 */
.container {
  width: 100%;
  padding: 10px;
}

/* 平板 */
@media (min-width: 768px) {
  .container {
    width: 750px;
    margin: 0 auto;
    padding: 20px;
  }
}

/* 桌面 */
@media (min-width: 1024px) {
  .container {
    width: 970px;
  }
}

/* 大屏桌面 */
@media (min-width: 1200px) {
  .container {
    width: 1170px;
  }
}
\`\`\`

#### 响应式导航栏

\`\`\`css
/* 基础样式 */
.navbar {
  background-color: #333;
  color: white;
  padding: 1rem 2rem;
}

.nav-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
}

.nav-brand {
  font-size: 1.5rem;
  font-weight: bold;
}

.nav-menu {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 2rem;
}

.nav-menu li a {
  color: white;
  text-decoration: none;
  transition: color 0.3s;
}

.nav-menu li a:hover {
  color: #007bff;
}

/* 汉堡菜单按钮（默认隐藏） */
.nav-toggle {
  display: none;
  background: none;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
}

/* 平板和手机 */
@media (max-width: 768px) {
  .nav-toggle {
    display: block;
  }

  .nav-menu {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background-color: #333;
    flex-direction: column;
    padding: 1rem 2rem;
    gap: 1rem;
    display: none;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  }

  .nav-menu.active {
    display: flex;
  }

  .nav-menu li {
    width: 100%;
  }

  .nav-menu li a {
    display: block;
    padding: 0.5rem 0;
  }
}
\`\`\`

### 最佳实践

- 采用移动优先策略
- 使用相对单位
- 测试真实设备
- 优化图片加载
- 考虑触摸交互
- 保持内容可读性
- 性能优化（避免过多媒体查询）`,
      createdAt: '2026-03-14',
      updatedAt: '2026-03-14'
    };
