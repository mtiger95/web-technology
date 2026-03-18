import { KnowledgeItem } from '@/types/knowledge';

export const css_figma_restoration: KnowledgeItem = {
  id: 'css-figma-restoration',
  title: 'Figma UI 稿 100% 还原',
  category: 'css',
  difficulty: 'medium',
  tags: ['Figma', 'UI 还原', '设计协作', '像素级还原', 'DevMode'],
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  content: `## Figma UI 稿 100% 还原最佳实践

实现 Figma 设计稿的像素级还原需要设计阶段协作、开发实现技巧和自动化验收流程的配合。

### 设计阶段协作

#### 建立设计系统 (Design System)

在 Figma 中建立完整的设计系统是保证还原度的基础：

**颜色变量 (Color Variables)**
- 定义主色、辅助色、中性色
- 建立语义化命名：\`primary\`, \`success\`, \`warning\`, \`error\`
- 使用 Figma Variables 功能实现主题切换

**字体系统 (Typography)**
- 定义字体家族、字重、字号、行高
- 创建 Text Styles：\`Heading/H1\`, \`Body/Regular\`, \`Caption/Small\`
- 确保与 Web 字体加载策略一致

**间距系统 (Spacing)**
- 使用 4px 或 8px 基准网格
- 定义间距变量：\`spacing-xs: 4px\`, \`spacing-sm: 8px\`, \`spacing-md: 16px\`

**组件库 (Component Library)**
- 创建可复用的 UI 组件 Variants
- 定义组件的 States：Default, Hover, Active, Disabled, Focus
- 使用 Auto Layout 确保组件响应式行为

#### 设计标注规范

要求设计师在 Figma 中提供完整标注：

- [ ] 组件尺寸（宽×高）
- [ ] 内外边距数值
- [ ] 颜色值（HEX/RGB）
- [ ] 字体属性（family/size/weight/line-height/letter-spacing）
- [ ] 阴影参数（x/y/blur/spread/color）
- [ ] 圆角半径
- [ ] 渐变参数（角度/色标）
- [ ] 断点定义（Desktop/Tablet/Mobile）
- [ ] 交互状态说明
- [ ] 动画曲线和时长

#### 推荐 Figma 插件

| 插件名称 | 功能 |
|---------|------|
| **Figma to Code** | 一键生成 CSS/Tailwind 代码 |
| **Measure** | 快速测量间距和尺寸 |
| **Style Organizer** | 整理和管理设计样式 |
| **Token Studio** | 设计令牌管理 |
| **Annotate** | 添加开发注释 |
| **CSS Gen** | 生成 CSS 代码片段 |

### 设计稿审查流程

#### 设计 - 开发对齐会议 (Design-Dev Handoff)

在开发前召开对齐会议，确认以下内容：

1. **交互逻辑确认**
   - 所有 Hover/Focus/Active 状态
   - 加载状态 (Loading States)
   - 空状态 (Empty States)
   - 错误状态 (Error States)

2. **响应式行为**
   - 各断点下的布局变化
   - 元素的显示/隐藏规则
   - 字体大小的响应式缩放

3. **动画细节**
   - 入场/出场动画
   - 过渡效果 (transition)
   - 缓动函数 (easing function)

4. **边界情况**
   - 文本溢出处理
   - 图片加载失败处理
   - 极端数据量展示

### 开发实现技巧

#### 使用 Figma Dev Mode

Figma Dev Mode 提供开发者专用视图：

- **Inspect 面板**：查看精确的 CSS 属性
- **Box Model 视图**：可视化查看 padding/margin
- **Code 片段**：复制 CSS/JSX 代码
- **Assets 面板**：导出图片和图标

#### 像素级测量技巧

\`\`\`css
/* 使用 Figma 测量的精确值 */
.element {
  /* 从 Figma 直接复制样式 */
  width: 320px;
  height: 240px;
  padding: 24px;
  margin: 16px;
  
  /* 字体属性完整复制 */
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: -0.02em;
  
  /* 颜色使用设计系统变量 */
  color: var(--color-text-primary);
  background-color: var(--color-bg-secondary);
  
  /* 阴影参数精确匹配 */
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  
  /* 圆角 */
  border-radius: 8px;
}
\`\`\`

#### 使用 Tailwind CSS 实现快速还原

配置 design token：

\`\`\`js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          500: '#3b82f6',
          600: '#2563eb',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'figma': '0 4px 12px rgba(0, 0, 0, 0.08)',
      }
    }
  }
}
\`\`\`

#### 截图对比法

使用浏览器开发者工具进行对比：

1. 在 Figma 中导出设计稿截图
2. 在浏览器中打开开发中的页面
3. 使用工具进行叠加对比：
   - **PerfectPixel** (Chrome 扩展)
   - **Pixel Perfect** (Firefox 扩展)
   - **Figma Mirror** (移动端预览)

#### 自动化视觉回归测试

使用工具自动检测视觉差异：

\`\`\`bash
# 使用 Chromatic (Storybook)
npm install -D chromatic
npx chromatic --project-token=YOUR_TOKEN

# 使用 Percy
npm install -D @percy/cli @percy/playwright
npx percy snapshot
\`\`\`

\`\`\`javascript
// 使用 Playwright 视觉回归
import { test, expect } from '@playwright/test';

test('visual regression', async ({ page }) => {
  await page.goto('/component');
  await expect(page).toHaveScreenshot();
});
\`\`\`

### 验收标准与流程

#### 视觉验收清单

**精度要求**
- 间距误差：≤ 1px
- 颜色误差：ΔE < 2 (使用颜色差异公式)
- 字体大小：完全一致
- 圆角半径：完全一致

**验收步骤**
1. 使用 PerfectPixel 叠加对比
2. 使用取色器验证关键颜色
3. 使用浏览器测量工具验证间距
4. 检查所有交互状态
5. 测试所有响应式断点
6. 验证动画曲线和时长

#### 颜色验证代码示例

\`\`\`javascript
// 使用 color-difference 库验证颜色
import deltaE from 'delta-e';

const figmaColor = { l: 50, a: 20, b: 30 };
const implementedColor = { l: 50.5, a: 19.8, b: 30.2 };

const difference = deltaE.getDeltaE00(figmaColor, implementedColor);
console.log(\`颜色差异：\${difference}\`); // 应 < 2
\`\`\`

#### 尺寸验证代码示例

\`\`\`javascript
// 使用 Playwright 验证元素尺寸
import { test, expect } from '@playwright/test';

test('verify element dimensions', async ({ page }) => {
  const element = page.locator('.button');
  const box = await element.boundingBox();
  
  expect(box.width).toBe(120); // Figma 中的宽度
  expect(box.height).toBe(40); // Figma 中的高度
});
\`\`\`

### 常见问题与解决方案

#### Q1: 字体渲染不一致

**问题**：Figma 中的字体与浏览器渲染效果有差异

**解决方案**：

\`\`\`css
/* 1. 使用相同的字体文件 */
@font-face {
  font-family: 'Inter';
  src: url('/fonts/Inter-Regular.woff2') format('woff2');
  font-weight: 400;
  font-display: swap;
}

/* 2. 禁用字体平滑（macOS） */
body {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* 3. 确保行高一致 */
.text {
  line-height: 1.5; /* 与 Figma 中的 line-height 一致 */
}
\`\`\`

#### Q2: 颜色显示差异

**问题**：导出的颜色值在不同设备上显示不一致

**解决方案**：
- 使用 sRGB 色彩空间
- 在 Figma 中使用 HEX 或 RGB，避免使用 CMYK
- 在 CSS 中使用相同的颜色格式

#### Q3: 响应式断点不匹配

**问题**：Figma 中的多尺寸设计与 CSS 断点不对应

**解决方案**：

\`\`\`css
/* 与 Figma 中的 Artboard 宽度对应 */
@media (min-width: 1920px) { /* Figma Desktop */ }
@media (min-width: 1440px) { /* Figma Laptop */ }
@media (min-width: 768px) {  /* Figma Tablet */ }
@media (min-width: 375px) {  /* Figma Mobile */ }
\`\`\`

#### Q4: 阴影效果不一致

**问题**：Figma 阴影与 CSS box-shadow 效果不同

**解决方案**：

\`\`\`css
/* Figma 阴影参数转换 */
/* Figma: X=0, Y=4, Blur=12, Spread=0, Color=#000000, Opacity=8% */

.element {
  box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.08);
  
  /* 对于复杂阴影，使用多层阴影叠加 */
  box-shadow: 
    0 1px 2px rgba(0, 0, 0, 0.04),
    0 4px 12px rgba(0, 0, 0, 0.08),
    0 8px 24px rgba(0, 0, 0, 0.12);
}
\`\`\`

### 总结

实现 Figma UI 稿 100% 还原度的关键在于：

1. **前期协作**：建立设计系统，明确标注规范
2. **流程保障**：设计 - 开发对齐会议，检查清单
3. **工具辅助**：Dev Mode, PerfectPixel, 视觉回归测试
4. **验收标准**：明确的精度要求和验收流程
5. **持续迭代**：发现问题及时修复，建立反馈机制

通过遵循以上最佳实践，可以将 UI 还原度提升到 95% 以上，在严格验收流程下达到 99%+ 的还原度。`
};
