import { KnowledgeItem } from '@/types/knowledge';

export const css_animation: KnowledgeItem = {
      id: 'css-animation',
      title: 'CSS 动画与过渡效果',
      category: 'css',
      difficulty: 'medium',
      tags: ['CSS', '动画', 'transition', 'animation'],
      content: `## CSS 动画与过渡效果

CSS 动画和过渡为网页增添交互性和视觉吸引力，提升用户体验。

### 过渡效果（Transition）

**基本属性：**
- transition-property：指定过渡的 CSS 属性
- transition-duration：过渡持续时间
- transition-timing-function：时间函数
- transition-delay：延迟时间
- transition：简写属性

**时间函数：**
- ease：默认值，慢-快-慢
- linear：匀速
- ease-in：慢开始
- ease-out：慢结束
- ease-in-out：慢-快-慢
- cubic-bezier()：自定义贝塞尔曲线

**可过渡属性：**
- 尺寸属性：width、height、top、left
- 外观属性：color、background、opacity
- 变换属性：transform
- 注意：display、visibility 不能直接过渡

### 关键帧动画（Animation）

**基本属性：**
- animation-name：关键帧名称
- animation-duration：动画持续时间
- animation-timing-function：时间函数
- animation-delay：延迟时间
- animation-iteration-count：播放次数
- animation-direction：播放方向
- animation-fill-mode：填充模式
- animation-play-state：播放状态
- animation：简写属性

**@keyframes 规则：**
- 定义动画的关键帧
- from/to 或百分比
- 可以定义多个关键帧

**动画控制：**
- infinite：无限循环
- alternate：往返播放
- forwards：保持结束状态
- paused：暂停动画

### 代码示例

#### 按钮过渡效果

\`\`\`css
.button {
  padding: 12px 24px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.button:hover {
  background-color: #0056b3;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);
}

.button:active {
  transform: translateY(0);
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}
\`\`\`

#### 加载动画

\`\`\`css
/* 旋转加载器 */
.spinner {
  width: 40px;
  height: 40px;
  border: 4px solid #f3f3f3;
  border-top: 4px solid #007bff;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

/* 脉冲加载器 */
.pulse {
  width: 40px;
  height: 40px;
  background-color: #007bff;
  border-radius: 50%;
  animation: pulse 1.5s ease-in-out infinite;
}

@keyframes pulse {
  0% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(0, 123, 255, 0.7);
  }
  70% {
    transform: scale(1);
    box-shadow: 0 0 0 10px rgba(0, 123, 255, 0);
  }
  100% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(0, 123, 255, 0);
  }
}
\`\`\`

#### 动画性能优化

\`\`\`css
/* 使用 GPU 加速的属性 */
.gpu-accelerated {
  transform: translate3d(0, 0, 0);
  opacity: 1;
}

/* will-change 提示浏览器优化 */
.animated-element {
  will-change: transform, opacity;
  animation: move 2s ease-in-out;
}

@keyframes move {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(100px);
  }
}

/* 动画完成后移除 will-change */
.animated-element.finished {
  will-change: auto;
}

/* 避免动画的属性（会触发重排） */
.bad-performance {
  /* 避免动画这些属性 */
  /* width, height, padding, margin */
  /* top, left, right, bottom */
  /* border-width */
}

/* 好的性能（只触发重绘和合成） */
.good-performance {
  /* 动画这些属性 */
  transform: translateX(100px);
  opacity: 0.5;
  filter: blur(5px);
}
\`\`\`

#### 减少动画偏好

\`\`\`css
/* 尊重用户的动画偏好 */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

/* 或者完全禁用动画 */
@media (prefers-reduced-motion: reduce) {
  .animated-element {
    animation: none;
    transition: none;
  }
}
\`\`\`

### 最佳实践

- 优先使用 transform 和 opacity
- 合理使用 will-change
- 提供减少动画选项（prefers-reduced-motion）
- 测试性能影响
- 保持动画简洁有意义
- 注意可访问性
- 使用硬件加速`,
      createdAt: '2026-03-14',
      updatedAt: '2026-03-14'
    };
