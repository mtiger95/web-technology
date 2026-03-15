import { KnowledgeItem } from '@/types/knowledge';

export const react_animation: KnowledgeItem = {
      id: 'react-animation',
      title: 'React 动画实现与性能优化',
      category: 'react',
      difficulty: 'medium',
      tags: ['React', '动画', 'CSS', '性能'],
      content: `## React 动画实现与性能优化

动画是提升用户体验的重要手段，精心设计的动画可以引导用户注意力、提供视觉反馈、增强应用的交互感。React 提供了多种动画实现方式，从简单的 CSS 过渡到复杂的物理动画，开发者可以根据需求选择合适的方案。

### 动画实现方式详解

**CSS 动画 - 高性能基础方案：**
CSS 动画是实现动画效果的基础方案，包括 CSS Transitions 和 CSS Animations 两种方式。CSS Transitions 适合简单的状态变化动画，如悬停效果、展开收起等，通过 transition 属性定义过渡效果。CSS Animations 适合复杂的动画序列，通过 @keyframes 定义关键帧动画。CSS 动画的性能优势在于可以利用 GPU 加速，特别是 transform 和 opacity 属性的变化只触发合成层，不会导致重排和重绘。

**React 状态驱动动画：**
使用 useState 和 useEffect 控制动画状态，可以实现复杂的动画逻辑，与业务逻辑紧密结合。通过状态变化触发 CSS 类名切换，实现声明式的动画控制。这种方式适合需要根据数据状态动态变化的动画，如列表项的添加删除、模态框的显示隐藏等。

**第三方动画库：**
Framer Motion 是 React 生态中最流行的动画库，提供了声明式的动画 API，支持布局动画、手势动画、页面过渡等高级功能。React Spring 是基于物理的动画库，使用真实的物理弹簧模拟，动画效果更自然流畅。Lottie 可以将 Adobe After Effects 导出的 JSON 动画在 Web 端渲染，适合复杂的矢量动画。

### 代码示例

\`\`\`javascript
// CSS 过渡动画
import './styles.css';

function FadeInComponent({ isVisible }) {
  return (
    <div className={\`fade-container \${isVisible ? 'visible' : ''}\`}>
      <p>Content fades in and out</p>
    </div>
  );
}

// styles.css
// .fade-container {
//   opacity: 0;
//   transition: opacity 0.3s ease-in-out;
// }
// .fade-container.visible {
//   opacity: 1;
// }

// CSS 关键帧动画
function Spinner() {
  return <div className="spinner" />;
}

// styles.css
// @keyframes spin {
//   from { transform: rotate(0deg); }
//   to { transform: rotate(360deg); }
// }
// .spinner {
//   width: 40px;
//   height: 40px;
//   border: 4px solid #f3f3f3;
//   border-top: 4px solid #3498db;
//   border-radius: 50%;
//   animation: spin 1s linear infinite;
// }

// React 状态驱动动画
function AnimatedList({ items }) {
  const [displayItems, setDisplayItems] = useState(items);
  
  const addItem = (item) => {
    setDisplayItems(prev => [...prev, { ...item, isNew: true }]);
    setTimeout(() => {
      setDisplayItems(prev => 
        prev.map(i => i.id === item.id ? { ...i, isNew: false } : i)
      );
    }, 300);
  };
  
  return (
    <ul className="animated-list">
      {displayItems.map(item => (
        <li 
          key={item.id} 
          className={\`list-item \${item.isNew ? 'item-enter' : ''}\`}
        >
          {item.name}
        </li>
      ))}
    </ul>
  );
}

// Framer Motion 基础用法
import { motion, AnimatePresence } from 'framer-motion';

function MotionComponent() {
  const [isVisible, setIsVisible] = useState(true);
  
  return (
    <div>
      <button onClick={() => setIsVisible(!isVisible)}>
        Toggle
      </button>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            <p>Animated content</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// Framer Motion 列表动画
function MotionList({ items }) {
  return (
    <ul>
      <AnimatePresence>
        {items.map((item, index) => (
          <motion.li
            key={item.id}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ delay: index * 0.1 }}
            layout
          >
            {item.name}
          </motion.li>
        ))}
      </AnimatePresence>
    </ul>
  );
}

// Framer Motion 手势动画
function DraggableCard() {
  return (
    <motion.div
      drag
      dragConstraints={{ left: -100, right: 100, top: -100, bottom: 100 }}
      dragElastic={0.2}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="card"
    >
      Drag me!
    </motion.div>
  );
}

// React Spring 物理动画
import { useSpring, animated } from '@react-spring/web';

function SpringComponent() {
  const [flip, setFlip] = useState(false);
  
  const { transform, opacity } = useSpring({
    opacity: flip ? 1 : 0,
    transform: \`perspective(600px) rotateX(\${flip ? 180 : 0}deg)\`,
    config: { mass: 5, tension: 500, friction: 80 }
  });
  
  return (
    <animated.div
      onClick={() => setFlip(!flip)}
      style={{ opacity: opacity.to(o => 1 - o), transform }}
    >
      Click to flip
    </animated.div>
  );
}

// React Spring 数字动画
function AnimatedNumber({ value }) {
  const { number } = useSpring({
    from: { number: 0 },
    number: value,
    delay: 200,
    config: { mass: 1, tension: 20, friction: 10 }
  });
  
  return <animated.span>{number.to(n => n.toFixed(2))}</animated.span>;
}

// Lottie 动画
import Lottie from 'lottie-react';
import animationData from './animation.json';

function LottieAnimation() {
  const [isPlaying, setIsPlaying] = useState(true);
  
  return (
    <div>
      <Lottie 
        animationData={animationData}
        loop={true}
        autoplay={isPlaying}
        style={{ width: 200, height: 200 }}
      />
      <button onClick={() => setIsPlaying(!isPlaying)}>
        {isPlaying ? 'Pause' : 'Play'}
      </button>
    </div>
  );
}

// 页面过渡动画
import { motion } from 'framer-motion';

const pageVariants = {
  initial: { opacity: 0, x: '-100vw' },
  in: { opacity: 1, x: 0 },
  out: { opacity: 0, x: '100vw' }
};

const pageTransition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.5
};

function PageTransition({ children }) {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      {children}
    </motion.div>
  );
}

// 性能优化：使用 transform 和 opacity
function OptimizedAnimation() {
  const [isExpanded, setIsExpanded] = useState(false);
  
  return (
    <div 
      className="optimized-container"
      style={{
        transform: isExpanded ? 'scale(1.1)' : 'scale(1)',
        opacity: isExpanded ? 0.8 : 1,
        transition: 'transform 0.3s ease, opacity 0.3s ease',
        willChange: 'transform, opacity'
      }}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      Optimized Animation
    </div>
  );
}
\`\`\`

### 性能优化策略

**使用 GPU 加速属性：**
transform 和 opacity 是唯一只触发合成的 CSS 属性，不会导致重排和重绘。优先使用 translate、scale、rotate 代替 top、left、width、height 等属性。使用 will-change 属性提前告知浏览器元素将要变化，让浏览器提前优化，但不要过度使用，因为会占用额外内存。

**避免动画性能陷阱：**
避免在动画中频繁读取布局属性（如 offsetWidth、getBoundingClientRect），这会强制同步布局。使用 requestAnimationFrame 进行动画循环，确保动画帧率与屏幕刷新率同步。对于复杂的动画，考虑使用 Web Animations API 或 CSS Animations，它们比 JavaScript 动画更高效。

**React 动画最佳实践：**
使用 React.memo 避免动画组件的不必要重新渲染。将动画状态与业务状态分离，避免动画触发业务逻辑更新。使用 CSS 变量动态控制动画参数，减少 JavaScript 计算。对于长列表动画，使用虚拟列表减少 DOM 节点数量。

### 可访问性考虑

动画设计需要考虑可访问性，尊重用户的 prefers-reduced-motion 设置。使用 CSS 媒体查询 @media (prefers-reduced-motion: reduce) 禁用或简化动画。提供动画开关选项，让用户可以自主选择。确保动画不会导致内容闪烁或引起光敏性癫痫。`,
      createdAt: '2026-03-14',
      updatedAt: '2026-03-14'
    };
