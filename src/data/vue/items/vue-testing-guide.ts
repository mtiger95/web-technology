import { KnowledgeItem } from '@/types/knowledge';

export const vue_testing_guide: KnowledgeItem = {
  id: 'vue-testing-guide',
  title: 'Vue 测试完全指南',
  category: 'vue',
  difficulty: 'medium',
  tags: ['Vue', '测试', 'Vitest', 'Vue Test Utils'],
  content: `## Vue 测试完全指南

测试是保证代码质量的重要手段。本文详细介绍 Vue 3 应用的测试方法，包括单元测试、组件测试和端到端测试，使用 Vitest 和 Vue Test Utils 等现代测试工具。

### 一、测试基础

#### 1. 测试工具介绍

**Vitest：**
- Vite 原生的测试框架
- 兼容 Jest API
- 极速的测试运行速度
- 内置覆盖率报告

**Vue Test Utils：**
- Vue 官方组件测试库
- 支持 Vue 3
- 提供丰富的组件测试 API

**Testing Library：**
- 用户中心的测试理念
- 鼓励测试行为而非实现
- 更好的可维护性

#### 2. 安装配置

**安装 Vitest：**
\`\`\`bash
npm install -D vitest @vitejs/plugin-vue
\`\`\`

**安装 Vue Test Utils：**
\`\`\`bash
npm install -D @vue/test-utils jsdom
\`\`\`

**安装 Testing Library：**
\`\`\`bash
npm install -D @testing-library/vue @testing-library/jest-dom
\`\`\`

**Vite 配置：**
\`\`\`javascript
// vite.config.js
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.js',
    coverage: {
      reporter: ['text', 'json', 'html']
    }
  }
});
\`\`\`

**测试脚本：**
\`\`\`json
{
  "scripts": {
    "test": "vitest",
    "test:ui": "vitest --ui",
    "test:coverage": "vitest --coverage"
  }
}
\`\`\`

### 二、单元测试

#### 1. 测试 Composables

\`\`\`javascript
// composables/useCounter.js
import { ref } from 'vue';

export function useCounter(initialValue = 0) {
  const count = ref(initialValue);
  
  const increment = () => {
    count.value++;
  };
  
  const decrement = () => {
    count.value--;
  };
  
  const reset = () => {
    count.value = initialValue;
  };
  
  return { count, increment, decrement, reset };
}
\`\`\`

**测试代码：**
\`\`\`javascript
// composables/useCounter.test.js
import { describe, it, expect } from 'vitest';
import { useCounter } from './useCounter';

describe('useCounter', () => {
  it('应该使用初始值初始化 count', () => {
    const { count } = useCounter(10);
    expect(count.value).toBe(10);
  });
  
  it('应该默认初始值为 0', () => {
    const { count } = useCounter();
    expect(count.value).toBe(0);
  });
  
  it('应该递增 count', () => {
    const { count, increment } = useCounter();
    increment();
    expect(count.value).toBe(1);
  });
  
  it('应该递减 count', () => {
    const { count, decrement } = useCounter(5);
    decrement();
    expect(count.value).toBe(4);
  });
  
  it('应该重置 count 到初始值', () => {
    const { count, increment, reset } = useCounter(10);
    increment();
    increment();
    reset();
    expect(count.value).toBe(10);
  });
});
\`\`\`

#### 2. 测试工具函数

\`\`\`javascript
// utils/format.js
export function formatDate(date) {
  if (!date) return '';
  return new Date(date).toLocaleDateString('zh-CN');
}

export function formatCurrency(amount, currency = 'CNY') {
  return new Intl.NumberFormat('zh-CN', {
    style: 'currency',
    currency
  }).format(amount);
}

export function truncate(str, length = 50) {
  if (!str) return '';
  return str.length > length ? str.slice(0, length) + '...' : str;
}
\`\`\`

**测试代码：**
\`\`\`javascript
// utils/format.test.js
import { describe, it, expect } from 'vitest';
import { formatDate, formatCurrency, truncate } from './format';

describe('formatDate', () => {
  it('应该格式化日期', () => {
    const result = formatDate('2024-01-15');
    expect(result).toMatch(/\\d{4}\\/\\d{1,2}\\/\\d{1,2}/);
  });
  
  it('空值应该返回空字符串', () => {
    expect(formatDate(null)).toBe('');
    expect(formatDate(undefined)).toBe('');
    expect(formatDate('')).toBe('');
  });
});

describe('formatCurrency', () => {
  it('应该格式化货币', () => {
    expect(formatCurrency(1000)).toBe('￥1,000.00');
  });
  
  it('应该支持不同货币', () => {
    expect(formatCurrency(1000, 'USD')).toBe('$1,000.00');
  });
});

describe('truncate', () => {
  it('应该截断长字符串', () => {
    const result = truncate('a'.repeat(60), 50);
    expect(result.length).toBe(53); // 50 + '...'
    expect(result).endsWith('...');
  });
  
  it('短字符串不应该被截断', () => {
    expect(truncate('hello')).toBe('hello');
  });
});
\`\`\`

#### 3. 测试 Pinia Store

\`\`\`javascript
// stores/counter.js
import { defineStore } from 'pinia';

export const useCounterStore = defineStore('counter', {
  state: () => ({
    count: 0,
    name: 'counter'
  }),
  getters: {
    doubleCount: (state) => state.count * 2
  },
  actions: {
    increment() {
      this.count++;
    },
    setCount(value) {
      this.count = value;
    }
  }
});
\`\`\`

**测试代码：**
\`\`\`javascript
// stores/counter.test.js
import { describe, it, expect, beforeEach } from 'vitest';
import { setActivePinia, createPinia } from 'pinia';
import { useCounterStore } from './counter';

describe('useCounterStore', () => {
  let store;
  
  beforeEach(() => {
    setActivePinia(createPinia());
    store = useCounterStore();
  });
  
  it('应该初始化 state', () => {
    expect(store.count).toBe(0);
    expect(store.name).toBe('counter');
  });
  
  it('应该递增 count', () => {
    store.increment();
    expect(store.count).toBe(1);
  });
  
  it('应该设置 count', () => {
    store.setCount(10);
    expect(store.count).toBe(10);
  });
  
  it('应该计算 doubleCount', () => {
    store.setCount(5);
    expect(store.doubleCount).toBe(10);
  });
});
\`\`\`

### 三、组件测试

#### 1. 使用 Vue Test Utils

**基础组件：**
\`\`\`vue
<!-- Button.vue -->
<script setup>
defineProps({
  type: {
    type: String,
    default: 'primary',
    validator: (value) => ['primary', 'secondary', 'danger'].includes(value)
  },
  disabled: {
    type: Boolean,
    default: false
  }
});

defineEmits(['click']);
</script>

<template>
  <button
    :class="['btn', \`btn-\${type}\`]"
    :disabled="disabled"
    @click="$emit('click')"
  >
    <slot></slot>
  </button>
</template>
\`\`\`

**测试代码：**
\`\`\`javascript
// components/Button.test.js
import { describe, it, expect, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import Button from './Button.vue';

describe('Button', () => {
  it('应该渲染默认内容', () => {
    const wrapper = mount(Button, {
      slots: { default: '点击我' }
    });
    expect(wrapper.text()).toBe('点击我');
  });
  
  it('应该应用默认类型样式', () => {
    const wrapper = mount(Button);
    expect(wrapper.classes()).toContain('btn-primary');
  });
  
  it('应该应用自定义类型样式', () => {
    const wrapper = mount(Button, {
      props: { type: 'danger' }
    });
    expect(wrapper.classes()).toContain('btn-danger');
  });
  
  it('应该禁用按钮', () => {
    const wrapper = mount(Button, {
      props: { disabled: true }
    });
    expect(wrapper.attributes('disabled')).toBeDefined();
  });
  
  it('应该触发点击事件', async () => {
    const wrapper = mount(Button);
    await wrapper.trigger('click');
    expect(wrapper.emitted('click')).toHaveLength(1);
  });
  
  it('禁用时不应该触发点击事件', async () => {
    const wrapper = mount(Button, {
      props: { disabled: true }
    });
    await wrapper.trigger('click');
    expect(wrapper.emitted('click')).toBeUndefined();
  });
});
\`\`\`

#### 2. 测试带 Props 的组件

\`\`\`vue
<!-- UserCard.vue -->
<script setup>
const props = defineProps({
  user: {
    type: Object,
    required: true,
    validator: (user) => user.id && user.name
  }
});

defineEmits(['select']);
</script>

<template>
  <div class="user-card" @click="$emit('select', user)">
    <h3>{{ user.name }}</h3>
    <p>{{ user.email }}</p>
    <span v-if="user.role" class="role">{{ user.role }}</span>
  </div>
</template>
\`\`\`

**测试代码：**
\`\`\`javascript
// components/UserCard.test.js
import { describe, it, expect, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import UserCard from './UserCard.vue';

describe('UserCard', () => {
  const mockUser = {
    id: 1,
    name: '张三',
    email: 'zhangsan@example.com',
    role: 'admin'
  };
  
  it('应该渲染用户信息', () => {
    const wrapper = mount(UserCard, {
      props: { user: mockUser }
    });
    
    expect(wrapper.text()).toContain('张三');
    expect(wrapper.text()).toContain('zhangsan@example.com');
    expect(wrapper.text()).toContain('admin');
  });
  
  it('应该隐藏角色（当没有 role 时）', () => {
    const wrapper = mount(UserCard, {
      props: { user: { id: 1, name: '李四', email: 'lisi@example.com' } }
    });
    
    expect(wrapper.find('.role').exists()).toBe(false);
  });
  
  it('应该触发 select 事件', async () => {
    const wrapper = mount(UserCard, {
      props: { user: mockUser }
    });
    
    await wrapper.trigger('click');
    
    expect(wrapper.emitted('select')).toHaveLength(1);
    expect(wrapper.emitted('select')[0]).toEqual([mockUser]);
  });
});
\`\`\`

#### 3. 测试带异步操作的组件

\`\`\`vue
<!-- UserList.vue -->
<script setup>
import { ref, onMounted } from 'vue';
import { fetchUsers } from '@/api/user';

const users = ref([]);
const loading = ref(false);
const error = ref(null);

const loadUsers = async () => {
  loading.value = true;
  error.value = null;
  try {
    users.value = await fetchUsers();
  } catch (e) {
    error.value = e.message;
  } finally {
    loading.value = false;
  }
};

onMounted(() => {
  loadUsers();
});
</script>

<template>
  <div>
    <div v-if="loading">加载中...</div>
    <div v-else-if="error">错误：{{ error }}</div>
    <div v-else>
      <div v-for="user in users" :key="user.id">
        {{ user.name }}
      </div>
    </div>
  </div>
</template>
\`\`\`

**测试代码：**
\`\`\`javascript
// components/UserList.test.js
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { mount, flushPromises } from '@vue/test-utils';
import UserList from './UserList.vue';
import { fetchUsers } from '@/api/user';

vi.mock('@/api/user');

describe('UserList', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });
  
  it('应该显示加载状态', () => {
    fetchUsers.mockReturnValue(new Promise(() => {}));
    
    const wrapper = mount(UserList);
    expect(wrapper.text()).toContain('加载中...');
  });
  
  it('应该显示用户列表', async () => {
    const mockUsers = [
      { id: 1, name: '张三' },
      { id: 2, name: '李四' }
    ];
    fetchUsers.mockResolvedValue(mockUsers);
    
    const wrapper = mount(UserList);
    await flushPromises();
    
    expect(wrapper.text()).toContain('张三');
    expect(wrapper.text()).toContain('李四');
  });
  
  it('应该显示错误信息', async () => {
    fetchUsers.mockRejectedValue(new Error('网络错误'));
    
    const wrapper = mount(UserList);
    await flushPromises();
    
    expect(wrapper.text()).toContain('错误：网络错误');
  });
});
\`\`\`

### 四、使用 Testing Library

#### 1. 基础用法

\`\`\`javascript
// components/Counter.test.js
import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/vue';
import Counter from './Counter.vue';

describe('Counter', () => {
  it('应该渲染初始计数', () => {
    render(Counter);
    expect(screen.getByText('计数：0')).toBeInTheDocument();
  });
  
  it('应该递增计数', async () => {
    render(Counter);
    
    const button = screen.getByRole('button', { name: /增加/i });
    await fireEvent.click(button);
    
    expect(screen.getByText('计数：1')).toBeInTheDocument();
  });
  
  it('应该递减计数', async () => {
    render(Counter, {
      props: { initialValue: 5 }
    });
    
    const button = screen.getByRole('button', { name: /减少/i });
    await fireEvent.click(button);
    
    expect(screen.getByText('计数：4')).toBeInTheDocument();
  });
});
\`\`\`

#### 2. 查询方法

\`\`\`javascript
import { render, screen } from '@testing-library/vue';

// 常用查询方法
const {
  getByRole,        // 按角色查询
  getByText,        // 按文本查询
  getByLabelText,   // 按标签查询
  getByPlaceholderText, // 按占位符查询
  getByTestId       // 按测试 ID 查询
} = render(Component);

// 变体
screen.getBy...;        // 找不到时抛出错误
screen.queryBy...;      // 找不到时返回 null
screen.findBy...;       // 异步查询
screen.getAllBy...;     // 返回所有匹配
\`\`\`

### 五、测试最佳实践

1. **测试行为而非实现**：关注组件做什么，而不是怎么做
2. **使用有意义的测试名称**：描述测试的目的
3. **保持测试独立**：每个测试应该独立运行
4. **使用 beforeEach 清理**：确保测试环境干净
5. **Mock 外部依赖**：隔离测试单元
6. **测试边界条件**：空值、错误状态等
7. **保持测试简洁**：一个测试只验证一件事

### 六、测试覆盖率

**生成覆盖率报告：**
\`\`\`bash
npm run test:coverage
\`\`\`

**配置覆盖率阈值：**
\`\`\`javascript
// vite.config.js
export default defineConfig({
  test: {
    coverage: {
      reporter: ['text', 'json', 'html'],
      thresholds: {
        lines: 80,
        functions: 80,
        branches: 80,
        statements: 80
      }
    }
  }
});
\`\`\`
`,
  createdAt: '2026-03-16',
  updatedAt: '2026-03-16'
};
