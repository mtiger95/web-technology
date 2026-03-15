import { KnowledgeItem } from '@/types/knowledge';

export const react_testing: KnowledgeItem = {
      id: 'react-testing',
      title: 'React 测试策略与最佳实践',
      category: 'react',
      difficulty: 'medium',
      tags: ['React', '测试', 'Jest', 'React Testing Library'],
      content: `## React 测试策略与最佳实践

测试是保证 React 应用质量的重要手段，完善的测试体系可以及早发现 bug、提高代码可维护性、增强重构信心。React 生态提供了丰富的测试工具，从单元测试到端到端测试，开发者可以根据需求构建多层次的测试策略。

### 测试类型详解

**单元测试：**
单元测试是最基础的测试类型，用于测试单个组件或函数的行为。单元测试应该隔离测试，不依赖外部系统，执行快速，反馈及时。在 React 中，单元测试通常测试组件的渲染输出、状态变化、事件处理等。单元测试的覆盖率是衡量代码质量的重要指标，但不应过度追求 100% 覆盖率，而应关注关键逻辑和边界条件。

**集成测试：**
集成测试测试多个组件或模块之间的交互，模拟真实使用场景。集成测试关注组件之间的数据流、状态共享、API 调用等。集成测试比单元测试更接近真实用户行为，但执行速度较慢。在 React 应用中，集成测试通常测试表单提交流程、数据获取和渲染、路由导航等场景。

**端到端测试 (E2E)：**
端到端测试模拟用户在真实浏览器中的操作，测试整个应用的流程。E2E 测试关注用户视角，验证用户体验和业务流程。E2E 测试执行最慢，但最能反映真实使用情况。常用的 E2E 测试工具包括 Playwright 和 Cypress，它们可以在真实浏览器中模拟用户操作。

### 代码示例

\`\`\`javascript
// Jest 配置示例
// jest.config.js
module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy'
  },
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }]
  },
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!src/**/*.d.ts',
    '!src/**/*.stories.{js,jsx,ts,tsx}'
  ]
};

// 组件渲染测试
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Counter from './Counter';

describe('Counter Component', () => {
  test('renders initial count', () => {
    render(<Counter initialCount={0} />);
    expect(screen.getByText('Count: 0')).toBeInTheDocument();
  });
  
  test('increments count when button clicked', async () => {
    const user = userEvent.setup();
    render(<Counter initialCount={0} />);
    
    await user.click(screen.getByRole('button', { name: /increment/i }));
    
    expect(screen.getByText('Count: 1')).toBeInTheDocument();
  });
  
  test('decrements count when button clicked', async () => {
    const user = userEvent.setup();
    render(<Counter initialCount={5} />);
    
    await user.click(screen.getByRole('button', { name: /decrement/i }));
    
    expect(screen.getByText('Count: 4')).toBeInTheDocument();
  });
});

// 表单组件测试
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import LoginForm from './LoginForm';

describe('LoginForm', () => {
  const mockOnSubmit = jest.fn();
  
  beforeEach(() => {
    mockOnSubmit.mockClear();
  });
  
  test('submits form with correct values', async () => {
    const user = userEvent.setup();
    render(<LoginForm onSubmit={mockOnSubmit} />);
    
    await user.type(screen.getByLabelText(/email/i), 'test@example.com');
    await user.type(screen.getByLabelText(/password/i), 'password123');
    await user.click(screen.getByRole('button', { name: /submit/i }));
    
    await waitFor(() => {
      expect(mockOnSubmit).toHaveBeenCalledWith({
        email: 'test@example.com',
        password: 'password123'
      });
    });
  });
  
  test('shows validation error for invalid email', async () => {
    const user = userEvent.setup();
    render(<LoginForm onSubmit={mockOnSubmit} />);
    
    await user.type(screen.getByLabelText(/email/i), 'invalid-email');
    await user.click(screen.getByRole('button', { name: /submit/i }));
    
    expect(await screen.findByText(/invalid email/i)).toBeInTheDocument();
    expect(mockOnSubmit).not.toHaveBeenCalled();
  });
});

// 异步组件测试
import { render, screen, waitFor } from '@testing-library/react';
import UserProfile from './UserProfile';

// Mock fetch
global.fetch = jest.fn();

describe('UserProfile', () => {
  beforeEach(() => {
    fetch.mockClear();
  });
  
  test('shows loading state initially', () => {
    fetch.mockImplementation(() => new Promise(() => {}));
    render(<UserProfile userId="1" />);
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });
  
  test('renders user data after fetch', async () => {
    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({ id: '1', name: 'John Doe', email: 'john@example.com' })
    });
    
    render(<UserProfile userId="1" />);
    
    await waitFor(() => {
      expect(screen.getByText('John Doe')).toBeInTheDocument();
      expect(screen.getByText('john@example.com')).toBeInTheDocument();
    });
  });
  
  test('shows error message on fetch failure', async () => {
    fetch.mockRejectedValueOnce(new Error('Network error'));
    
    render(<UserProfile userId="1" />);
    
    expect(await screen.findByText(/error/i)).toBeInTheDocument();
  });
});

// 自定义 Hook 测试
import { renderHook, act } from '@testing-library/react';
import { useCounter } from './useCounter';

describe('useCounter Hook', () => {
  test('initializes with default value', () => {
    const { result } = renderHook(() => useCounter());
    expect(result.current.count).toBe(0);
  });
  
  test('initializes with custom value', () => {
    const { result } = renderHook(() => useCounter(10));
    expect(result.current.count).toBe(10);
  });
  
  test('increments count', () => {
    const { result } = renderHook(() => useCounter());
    
    act(() => {
      result.current.increment();
    });
    
    expect(result.current.count).toBe(1);
  });
  
  test('decrements count', () => {
    const { result } = renderHook(() => useCounter(5));
    
    act(() => {
      result.current.decrement();
    });
    
    expect(result.current.count).toBe(4);
  });
});

// MSW API Mock 示例
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { render, screen, waitFor } from '@testing-library/react';
import UserList from './UserList';

const server = setupServer(
  rest.get('/api/users', (req, res, ctx) => {
    return res(
      ctx.json([
        { id: 1, name: 'John Doe' },
        { id: 2, name: 'Jane Smith' }
      ])
    );
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('UserList with MSW', () => {
  test('renders users from API', async () => {
    render(<UserList />);
    
    await waitFor(() => {
      expect(screen.getByText('John Doe')).toBeInTheDocument();
      expect(screen.getByText('Jane Smith')).toBeInTheDocument();
    });
  });
  
  test('handles API error', async () => {
    server.use(
      rest.get('/api/users', (req, res, ctx) => {
        return res(ctx.status(500));
      })
    );
    
    render(<UserList />);
    
    expect(await screen.findByText(/error/i)).toBeInTheDocument();
  });
});

// 快照测试
import { render } from '@testing-library/react';
import Card from './Card';

describe('Card Snapshot', () => {
  test('matches snapshot', () => {
    const { asFragment } = render(
      <Card title="Test Card" description="This is a test card" />
    );
    expect(asFragment()).toMatchSnapshot();
  });
  
  test('matches snapshot with custom className', () => {
    const { asFragment } = render(
      <Card 
        title="Test Card" 
        description="This is a test card" 
        className="custom-class"
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
\`\`\`

### 测试工具详解

**Jest - 测试框架核心：**
Jest 是 Facebook 开发的 JavaScript 测试框架，提供了完整的测试解决方案。Jest 内置断言库、Mock 功能、快照测试、代码覆盖率报告等功能。Jest 的零配置理念使得开箱即用，同时支持灵活的自定义配置。Jest 的并行测试执行和智能观察模式可以显著提高测试效率。

**React Testing Library - 组件测试最佳实践：**
React Testing Library 是测试 React 组件的推荐工具，它鼓励测试组件行为而非实现细节。通过 queryBy*、getBy*、findBy* 等方法查询 DOM 元素，通过 userEvent 模拟用户交互。Testing Library 的核心理念是"测试应该像用户使用应用一样"，这使得测试更加健壮，不会因为重构而频繁修改。

**MSW - API Mock 利器：**
Mock Service Worker (MSW) 是现代的 API Mock 工具，通过 Service Worker 拦截网络请求。MSW 可以在浏览器和 Node.js 环境中使用，支持 REST 和 GraphQL API。MSW 的优势在于不需要修改应用代码，Mock 的 API 行为与真实 API 一致，测试更加真实可靠。

### 最佳实践

**测试原则：**
测试用户可见的行为，而不是实现细节。使用语义化的查询方法（如 getByRole、getByText）而不是测试 ID。保持测试独立，每个测试应该能够单独运行。测试边界条件和错误情况，而不仅仅是正常流程。

**测试组织：**
使用 describe 嵌套组织相关测试用例。使用 beforeEach 和 afterEach 处理公共的设置和清理。将测试文件放在与被测试文件相同的目录下，命名为 *.test.js 或 *.spec.js。

**持续集成：**
在 CI 流程中运行所有测试，确保代码质量。配置测试覆盖率阈值，低于阈值时构建失败。使用并行测试加速 CI 执行时间。`,
      createdAt: '2026-03-14',
      updatedAt: '2026-03-14'
    };
