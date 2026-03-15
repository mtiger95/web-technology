import { KnowledgeItem } from '@/types/knowledge';

export const react_styling: KnowledgeItem = {
      id: 'react-styling',
      title: 'React 样式方案',
      category: 'react',
      difficulty: 'medium',
      tags: ['React', 'CSS', '样式', 'Tailwind', 'CSS-in-JS'],
      content: `## React 样式方案

React 应用有多种样式方案可选，每种方案都有其优缺点。选择合适的样式方案对于构建可维护、高性能的 React 应用至关重要。本文将介绍主流的 React 样式方案及其最佳实践。

### CSS Modules

**概念：**
CSS Modules 是一种 CSS 文件模块化方案，默认情况下所有类名和动画名称都是局部作用域的。

\`\`\`typescript
// Button.module.css
.button {
  padding: 8px 16px;
  border-radius: 4px;
  font-size: 14px;
}

.primary {
  background-color: #007bff;
  color: white;
}

.secondary {
  background-color: #6c757d;
  color: white;
}

// Button.tsx
import styles from './Button.module.css';

interface ButtonProps {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
}

export function Button({ variant = 'primary', children }: ButtonProps) {
  return (
    <button className={\`\${styles.button} \${styles[variant]}\`}>
      {children}
    </button>
  );
}

// 使用 classnames 库简化
import classNames from 'classnames';

export function Button({ variant = 'primary', children }: ButtonProps) {
  return (
    <button className={classNames(styles.button, styles[variant])}>
      {children}
    </button>
  );
}
\`\`\`

### CSS-in-JS

**Styled Components：**
Styled Components 是最流行的 CSS-in-JS 库之一，使用标签模板字面量创建样式组件。

\`\`\`typescript
import styled, { css } from 'styled-components';

// 基础样式组件
const Button = styled.button\`
  padding: 8px 16px;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s ease;

  \${props => props.$variant === 'primary' && css\`
    background-color: #007bff;
    color: white;
    &:hover {
      background-color: #0056b3;
    }
  \`}

  \${props => props.$variant === 'secondary' && css\`
    background-color: #6c757d;
    color: white;
    &:hover {
      background-color: #545b62;
    }
  \`}

  \${props => props.$disabled && css\`
    opacity: 0.6;
    cursor: not-allowed;
  \`}
\`;

// 使用
function App() {
  return (
    <div>
      <Button $variant="primary">Primary</Button>
      <Button $variant="secondary">Secondary</Button>
      <Button $variant="primary" $disabled>Disabled</Button>
    </div>
  );
}

// 继承样式
const LargeButton = styled(Button)\`
  padding: 16px 32px;
  font-size: 18px;
\`;
\`\`\`

**Emotion：**
Emotion 是另一个流行的 CSS-in-JS 库，提供更好的性能和更灵活的 API。

\`\`\`typescript
import { css } from '@emotion/react';
import styled from '@emotion/styled';

// css prop
const style = css\`
  padding: 8px 16px;
  background-color: #007bff;
  color: white;
\`;

// styled API
const Button = styled.button\`
  padding: 8px 16px;
  border-radius: 4px;
  background-color: \${props => props.theme.colors.primary};
  color: white;
\`;

// 使用
function App() {
  return (
    <div>
      <button css={style}>Click me</button>
      <Button>Styled Button</Button>
    </div>
  );
}
\`\`\`

### Tailwind CSS

**概念：**
Tailwind CSS 是一个实用优先的 CSS 框架，提供大量预定义的工具类，可以快速构建自定义设计。

\`\`\`typescript
// 基础使用
function Button({ variant = 'primary', children }: ButtonProps) {
  const baseClasses = 'px-4 py-2 rounded font-medium transition-colors';
  
  const variantClasses = {
    primary: 'bg-blue-500 text-white hover:bg-blue-600',
    secondary: 'bg-gray-500 text-white hover:bg-gray-600',
    outline: 'border-2 border-blue-500 text-blue-500 hover:bg-blue-50',
  };

  return (
    <button className={\`\${baseClasses} \${variantClasses[variant]}\`}>
      {children}
    </button>
  );
}

// 使用 @tailwindcss/forms 插件
function Form() {
  return (
    <form className="space-y-4">
      <input
        type="text"
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Enter your name"
      />
      <button
        type="submit"
        className="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
      >
        Submit
      </button>
    </form>
  );
}

// 响应式设计
function ResponsiveLayout() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div className="p-4 bg-white rounded shadow">Card 1</div>
      <div className="p-4 bg-white rounded shadow">Card 2</div>
      <div className="p-4 bg-white rounded shadow">Card 3</div>
    </div>
  );
}
\`\`\`

**Tailwind 组件抽象：**
使用 cva (class-variance-authority) 创建可复用的组件变体。

\`\`\`typescript
import { cva, type VariantProps } from 'class-variance-authority';

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-md font-medium transition-colors',
  {
    variants: {
      variant: {
        primary: 'bg-blue-500 text-white hover:bg-blue-600',
        secondary: 'bg-gray-500 text-white hover:bg-gray-600',
        outline: 'border-2 border-blue-500 text-blue-500 hover:bg-blue-50',
        ghost: 'text-gray-500 hover:bg-gray-100',
      },
      size: {
        sm: 'h-8 px-3 text-sm',
        md: 'h-10 px-4 text-base',
        lg: 'h-12 px-6 text-lg',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
);

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

function Button({ className, variant, size, ...props }: ButtonProps) {
  return (
    <button
      className={buttonVariants({ variant, size, className })}
      {...props}
    />
  );
}
\`\`\`

### 样式方案对比

| 方案 | 优点 | 缺点 | 适用场景 |
|------|------|------|----------|
| CSS Modules | 零运行时开销、CSS 完整功能、学习成本低 | 需要构建配置、动态样式有限 | 传统项目、需要完整 CSS 功能 |
| Styled Components | 动态样式强大、组件化思维、主题支持好 | 运行时开销、调试复杂 | 需要动态样式的项目 |
| Tailwind CSS | 开发速度快、一致性好、文件体积小 | 类名冗长、需要学习工具类 | 快速开发、设计系统 |
| Emotion | 性能好、API 灵活、SSR 支持好 | 配置复杂 | 需要高性能 CSS-in-JS |

### 样式最佳实践

**1. 使用 CSS 变量实现主题：**
\`\`\`typescript
// globals.css
:root {
  --color-primary: #007bff;
  --color-secondary: #6c757d;
  --spacing-sm: 4px;
  --spacing-md: 8px;
  --spacing-lg: 16px;
}

[data-theme='dark'] {
  --color-primary: #3b82f6;
  --color-secondary: #9ca3af;
}

// 组件中使用
const Button = styled.button\`
  background-color: var(--color-primary);
  padding: var(--spacing-md);
\`;
\`\`\`

**2. 避免内联样式：**
\`\`\`typescript
// ❌ 避免：内联样式
<div style={{ padding: '16px', backgroundColor: 'red' }}>

// ✅ 推荐：使用 CSS 类
<div className="p-4 bg-red-500">
\`\`\``,
      createdAt: '2026-03-15',
      updatedAt: '2026-03-15'
    };
