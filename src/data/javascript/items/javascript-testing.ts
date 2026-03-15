import { KnowledgeItem } from '@/types/knowledge';

export const javascript_testing: KnowledgeItem = {
      id: 'javascript-testing',
      title: 'JavaScript 测试策略与最佳实践',
      category: 'javascript',
      difficulty: 'medium',
      tags: ['JavaScript', '测试', 'Jest', '单元测试'],
      content: `## JavaScript 测试策略与最佳实践

测试是保证代码质量的重要手段，JavaScript 有丰富的测试工具和框架。

### 测试类型

**单元测试：**
- 测试单个函数或组件
- 隔离测试
- 快速反馈

**集成测试：**
- 测试多个组件或模块的交互
- 模拟真实场景
- 验证功能完整性

**端到端测试：**
- 测试整个应用流程
- 模拟用户操作
- 验证用户体验

**性能测试：**
- 测试代码性能
- 识别性能瓶颈
- 确保性能符合要求

**安全测试：**
- 测试代码安全性
- 识别安全漏洞
- 确保代码安全

### 测试工具

**测试框架：**
- Jest：Facebook 开发，功能丰富：Jest是Facebook开发的JavaScript测试框架，与React项目完美集成，提供零配置、快照测试、模拟功能等特性，Jest支持并行测试、代码覆盖率报告，是前端单元测试的行业标准，支持TypeScript、Babel、Webpack等工具链
- Mocha：灵活，可定制性强
- Jasmine：BDD 风格
- Vitest：Vite 生态，快速：Vitest是基于Vite的测试框架，提供与Jest兼容的API，利用Vite的ES模块支持实现极快的测试启动速度，Vitest支持TypeScript、JSX、快照测试、模拟功能，是Vite生态中的测试工具，适合现代前端项目

**断言库：**
- Chai：支持多种断言风格
- Jest 内置断言
- Node.js 内置 assert

**测试工具：**
- React Testing Library：React 组件测试
- Testing Library：通用组件测试
- Cypress：端到端测试
- Playwright：端到端测试，支持多浏览器：Playwright是Microsoft开发的端到端测试框架，支持Chrome、Firefox、Safari、Edge等所有现代浏览器，提供跨浏览器测试能力，Playwright支持自动等待、网络拦截、截图、视频录制等高级功能，API设计简洁，支持TypeScript，是现代E2E测试的首选工具

**模拟工具：**
- Sinon：函数模拟和间谍
- Jest 内置模拟
- MSW：API 模拟

### 测试策略

**测试覆盖率：**
- 语句覆盖率：执行了多少语句
- 分支覆盖率：执行了多少分支
- 函数覆盖率：执行了多少函数
- 行覆盖率：执行了多少行

**测试组织：**
- 按模块组织测试
- 按功能组织测试
- 测试文件名与被测试文件对应

**测试编写：**
- 描述清晰的测试用例
- 测试边界情况
- 测试错误处理
- 保持测试独立

**测试执行：**
- 本地执行测试
- CI/CD 执行测试
- 并行执行测试
- 缓存测试结果

### 最佳实践

**测试设计：**
- 测试行为而非实现
- 保持测试简洁
- 避免测试依赖
- 模拟外部依赖

**测试维护：**
- 定期运行测试
- 修复失败的测试
- 更新测试以适应代码变化
- 移除过时的测试

**测试与开发：**
- 测试驱动开发 (TDD)
- 行为驱动开发 (BDD)
- 持续集成
- 持续部署

**性能考虑：**
- 避免缓慢的测试
- 合理使用测试超时
- 并行执行测试
- 缓存测试结果

### 实际应用

**前端测试：**
- 组件测试
- 状态管理测试
- 工具函数测试
- API 调用测试

**Node.js 测试：**
- 服务端测试
- API 测试
- 中间件测试
- 数据库操作测试

**测试示例：**

// 单元测试示例
const { sum } = require('./math');

test('sum adds two numbers', () => {
  expect(sum(1, 2)).toBe(3);
});

test('sum handles negative numbers', () => {
  expect(sum(-1, -2)).toBe(-3);
});

test('sum handles zero', () => {
  expect(sum(0, 0)).toBe(0);
});

// React 组件测试示例
import { render, screen, fireEvent } from '@testing-library/react';
import Button from './Button';

test('Button renders with text', () => {
  render(<Button>Click me</Button>);
  expect(screen.getByText('Click me')).toBeInTheDocument();
});

test('Button calls onClick when clicked', () => {
  const handleClick = jest.fn();
  render(<Button onClick={handleClick}>Click me</Button>);
  fireEvent.click(screen.getByText('Click me'));
  expect(handleClick).toHaveBeenCalledTimes(1);
});

### 学习资源

- Jest 文档
- Testing Library 文档
- Cypress 文档
- 测试驱动开发书籍
- 前端测试实践博客`,
      createdAt: '2026-03-14',
      updatedAt: '2026-03-14'
    };
