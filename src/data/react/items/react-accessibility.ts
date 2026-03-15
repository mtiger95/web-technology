import { KnowledgeItem } from '@/types/knowledge';

export const react_accessibility: KnowledgeItem = {
      id: 'react-accessibility',
      title: 'React 无障碍设计',
      category: 'react',
      difficulty: 'medium',
      tags: ['React', '无障碍', 'a11y', 'WCAG'],
      content: `## React 无障碍设计

无障碍设计（Accessibility，简称 a11y）是让网站和应用对所有用户都可用的实践，包括残障人士。React 支持构建无障碍的应用，理解并应用无障碍原则对于创建包容性的用户体验至关重要。

### 无障碍基础概念

**WCAG 指南：**
Web 内容无障碍指南（WCAG）是国际标准，提供了一系列建议，使 Web 内容更易于访问。WCAG 遵循 POUR 原则：
- 可感知（Perceivable）：信息必须能够被用户感知
- 可操作（Operable）：界面组件必须能够被用户操作
- 可理解（Understandable）：信息和操作必须能够被用户理解
- 健壮（Robust）：内容必须足够健壮，能够被各种用户代理解释

**ARIA 属性：**
可访问的富互联网应用（ARIA）是一组属性，用于增强 HTML 的无障碍性。

\`\`\`typescript
// 常用 ARIA 属性
function Button({ children, onClick, disabled, loading }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      aria-disabled={disabled}
      aria-busy={loading}
      aria-label={typeof children === 'string' ? children : undefined}
    >
      {loading ? <Spinner aria-hidden="true" /> : null}
      {children}
    </button>
  );
}

// 模态框
function Modal({ isOpen, onClose, title, children }: ModalProps) {
  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
      hidden={!isOpen}
    >
      <h2 id="modal-title">{title}</h2>
      <div id="modal-description">{children}</div>
      <button onClick={onClose} aria-label="Close modal">
        <CloseIcon aria-hidden="true" />
      </button>
    </div>
  );
}
\`\`\`

### 键盘导航

**焦点管理：**
确保所有交互元素都可以通过键盘访问，焦点顺序符合逻辑。

\`\`\`typescript
import { useRef, useEffect } from 'react';

function Modal({ isOpen, onClose }: ModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const previousActiveElement = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      // 保存当前焦点元素
      previousActiveElement.current = document.activeElement as HTMLElement;
      
      // 将焦点移到模态框
      modalRef.current?.focus();
      
      // 限制焦点在模态框内
      const handleTab = (e: KeyboardEvent) => {
        if (e.key !== 'Tab') return;
        
        const focusableElements = modalRef.current?.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        
        if (!focusableElements?.length) return;
        
        const firstElement = focusableElements[0] as HTMLElement;
        const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;
        
        if (e.shiftKey && document.activeElement === firstElement) {
          e.preventDefault();
          lastElement.focus();
        } else if (!e.shiftKey && document.activeElement === lastElement) {
          e.preventDefault();
          firstElement.focus();
        }
      };
      
      document.addEventListener('keydown', handleTab);
      return () => {
        document.removeEventListener('keydown', handleTab);
        // 恢复之前的焦点
        previousActiveElement.current?.focus();
      };
    }
  }, [isOpen]);

  return (
    <div
      ref={modalRef}
      role="dialog"
      aria-modal="true"
      tabIndex={-1}
    >
      {/* Modal content */}
    </div>
  );
}
\`\`\`

**键盘事件处理：**
为自定义组件添加键盘支持。

\`\`\`typescript
function Dropdown({ items }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    switch (e.key) {
      case 'Enter':
      case ' ':
        e.preventDefault();
        setIsOpen(!isOpen);
        break;
      case 'ArrowDown':
        e.preventDefault();
        setSelectedIndex((prev) => 
          prev < items.length - 1 ? prev + 1 : prev
        );
        break;
      case 'ArrowUp':
        e.preventDefault();
        setSelectedIndex((prev) => (prev > 0 ? prev - 1 : prev));
        break;
      case 'Escape':
        setIsOpen(false);
        buttonRef.current?.focus();
        break;
      case 'Tab':
        setIsOpen(false);
        break;
    }
  };

  return (
    <div onKeyDown={handleKeyDown}>
      <button
        ref={buttonRef}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
      >
        Select option
      </button>
      {isOpen && (
        <ul ref={listRef} role="listbox">
          {items.map((item, index) => (
            <li
              key={item.id}
              role="option"
              aria-selected={index === selectedIndex}
            >
              {item.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
\`\`\`

### 表单无障碍

**标签和错误提示：**
确保表单元素有正确的标签和错误提示。

\`\`\`typescript
function FormField({ 
  label, 
  error, 
  id, 
  ...inputProps 
}: FormFieldProps) {
  const errorId = \`\${id}-error\`;
  const hasError = Boolean(error);

  return (
    <div className="form-field">
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        aria-invalid={hasError}
        aria-describedby={hasError ? errorId : undefined}
        aria-required={inputProps.required}
        {...inputProps}
      />
      {hasError && (
        <p id={errorId} className="error-message" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

// 使用
function LoginForm() {
  const [errors, setErrors] = useState<Record<string, string>>({});

  return (
    <form onSubmit={handleSubmit}>
      <FormField
        id="email"
        label="Email"
        type="email"
        required
        error={errors.email}
      />
      <FormField
        id="password"
        label="Password"
        type="password"
        required
        error={errors.password}
      />
      <button type="submit">Sign In</button>
    </form>
  );
}
\`\`\`

### 图片和媒体无障碍

**替代文本：**
为图片提供有意义的替代文本。

\`\`\`typescript
interface ImageProps {
  src: string;
  alt: string;
  decorative?: boolean;
}

function Image({ src, alt, decorative }: ImageProps) {
  return (
    <img
      src={src}
      alt={decorative ? '' : alt}
      aria-hidden={decorative}
      role={decorative ? 'presentation' : undefined}
    />
  );
}

// 使用
function Article({ article }: ArticleProps) {
  return (
    <article>
      {/* 装饰性图片 */}
      <Image src="/decorative-bg.jpg" alt="" decorative />
      
      {/* 信息性图片 */}
      <Image 
        src={article.imageUrl} 
        alt={article.imageCaption} 
      />
      
      {/* 复杂图片需要详细描述 */}
      <figure>
        <img src="/chart.png" alt="Sales chart showing 50% increase" />
        <figcaption>
          Detailed description of the chart data...
        </figcaption>
      </figure>
    </article>
  );
}
\`\`\`

### 无障碍测试

**eslint-plugin-jsx-a11y：**
使用 ESLint 插件检查无障碍问题。

\`\`\`javascript
// .eslintrc.js
module.exports = {
  extends: [
    'react-app',
    'plugin:jsx-a11y/recommended',
  ],
  plugins: ['jsx-a11y'],
  rules: {
    'jsx-a11y/alt-text': 'error',
    'jsx-a11y/anchor-has-content': 'error',
    'jsx-a11y/aria-props': 'error',
    'jsx-a11y/aria-role': 'error',
    'jsx-a11y/click-events-have-key-events': 'warn',
    'jsx-a11y/no-static-element-interactions': 'warn',
  },
};
\`\`\`

**测试工具：**
使用 @testing-library/react 测试无障碍性。

\`\`\`typescript
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe, toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);

describe('Modal', () => {
  it('should have no accessibility violations', async () => {
    const { container } = render(<Modal>Content</Modal>);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('should trap focus within the modal', async () => {
    render(<Modal>Content</Modal>);
    
    const closeButton = screen.getByRole('button', { name: /close/i });
    expect(closeButton).toHaveFocus();
    
    await userEvent.tab();
    // 验证焦点在模态框内循环
  });
});
\`\`\``,
      createdAt: '2026-03-15',
      updatedAt: '2026-03-15'
    };
