import { KnowledgeItem } from '@/types/knowledge';

export const vue_practical_skills: KnowledgeItem = {
  id: 'vue-practical-skills',
  title: 'Vue 实战技巧与最佳实践',
  category: 'vue',
  difficulty: 'medium',
  tags: ['Vue', '实战技巧', '最佳实践', '代码规范'],
  content: `## Vue 实战技巧与最佳实践

本文总结了 Vue 开发中的实用技巧、常见问题的解决方案和最佳实践，帮助开发者写出更高质量、更易维护的 Vue 代码。

### 一、组件设计技巧

#### 1. 智能组件与展示组件分离

**展示组件（Dumb Component）：**
只负责 UI 渲染，不关心数据来源。

\`\`\`vue
<!-- UserCard.vue -->
<script setup>
defineProps({
  user: {
    type: Object,
    required: true
  },
  loading: {
    type: Boolean,
    default: false
  }
});

defineEmits(['edit', 'delete']);
</script>

<template>
  <div class="user-card">
    <div v-if="loading">加载中...</div>
    <div v-else>
      <h3>{{ user.name }}</h3>
      <p>{{ user.email }}</p>
      <button @click="$emit('edit', user)">编辑</button>
      <button @click="$emit('delete', user.id)">删除</button>
    </div>
  </div>
</template>
\`\`\`

**智能组件（Smart Component）：**
负责数据获取和业务逻辑。

\`\`\`vue
<!-- UserCardContainer.vue -->
<script setup>
import { ref, onMounted } from 'vue';
import UserCard from './UserCard.vue';
import { fetchUser } from '@/api/user';

const props = defineProps({
  userId: Number
});

const user = ref(null);
const loading = ref(false);

const loadUser = async () => {
  loading.value = true;
  try {
    user.value = await fetchUser(props.userId);
  } finally {
    loading.value = false;
  }
};

const handleEdit = (user) => {
  // 编辑逻辑
};

const handleDelete = (userId) => {
  // 删除逻辑
};

onMounted(() => {
  loadUser();
});
</script>

<template>
  <UserCard
    :user="user"
    :loading="loading"
    @edit="handleEdit"
    @delete="handleDelete"
  />
</template>
\`\`\`

#### 2. 使用 v-bind="$attrs" 透传属性

\`\`\`vue
<!-- BaseInput.vue -->
<template>
  <div class="input-wrapper">
    <label v-if="label">{{ label }}</label>
    <input v-bind="$attrs" />
    <span v-if="error" class="error">{{ error }}</span>
  </div>
</template>

<script setup>
defineProps({
  label: String,
  error: String
});
</script>

<!-- 使用 -->
<BaseInput
  v-model="username"
  label="用户名"
  placeholder="请输入用户名"
  :disabled="true"
/>
\`\`\`

#### 3. 使用 defineModel 简化双向绑定（Vue 3.3+）

\`\`\`vue
<!-- CustomInput.vue -->
<script setup>
const modelValue = defineModel({
  type: String,
  required: true
});

const onInput = (event) => {
  modelValue.value = event.target.value;
};
</script>

<template>
  <input :value="modelValue" @input="onInput" />
</template>

<!-- 使用 -->
<template>
  <CustomInput v-model="searchQuery" />
</template>
\`\`\`

### 二、性能优化技巧

#### 1. 使用 v-memo 缓存模板（Vue 3.2+）

\`\`\`vue
<script setup>
import { ref } from 'vue';

const items = ref([]);
const selectedItem = ref(null);
</script>

<template>
  <div>
    <!-- 只有当 items 变化时才重新渲染 -->
    <div v-for="item in items" :key="item.id" v-memo="[items.length]">
      {{ item.name }}
    </div>
    
    <!-- 只有当 selectedItem 变化时才重新渲染 -->
    <div v-memo="[selectedItem?.id]">
      <p>选中：{{ selectedItem?.name }}</p>
    </div>
  </div>
</template>
\`\`\`

#### 2. 使用 shallowRef 优化大对象

\`\`\`vue
<script setup>
import { ref, shallowRef, triggerRef } from 'vue';

// 深层响应式（适合小对象）
const deepData = ref({ nested: { value: 1 } });

// 浅层响应式（适合大对象）
const largeList = shallowRef([]);

// 修改浅层响应式对象时，需要手动触发
const updateList = () => {
  largeList.value.push({ id: 1 });
  triggerRef(largeList); // 手动触发更新
};
</script>
\`\`\`

#### 3. 使用 markRaw 避免不必要的响应式转换

\`\`\`vue
<script setup>
import { ref, markRaw } from 'vue';
import Chart from 'chart.js';

const chart = ref(null);

const initChart = () => {
  // 使用 markRaw 避免将 Chart 实例转换为响应式
  chart.value = markRaw(new Chart(ctx, config));
};
</script>
\`\`\`

#### 4. 使用 Object.freeze 冻结静态数据

\`\`\`vue
<script setup>
import { ref } from 'vue';

// 冻结静态配置
const CONFIG = Object.freeze({
  API_URL: 'https://api.example.com',
  TIMEOUT: 5000
});

// 冻结大型静态列表
const staticOptions = Object.freeze([
  { value: 1, label: 'Option 1' },
  { value: 2, label: 'Option 2' },
  // ... 大量数据
]);
</script>
\`\`\`

### 三、表单处理技巧

#### 1. 使用自定义 Composable 处理表单

\`\`\`javascript
// composables/useForm.js
import { ref, reactive } from 'vue';

export function useForm(initialValues, validateFn) {
  const values = reactive({ ...initialValues });
  const errors = ref({});
  const isSubmitting = ref(false);
  
  function validate() {
    errors.value = validateFn(values) || {};
    return Object.keys(errors.value).length === 0;
  }
  
  async function submit(submitFn) {
    if (!validate()) return;
    
    isSubmitting.value = true;
    try {
      await submitFn(values);
    } catch (error) {
      errors.value.submit = error.message;
    } finally {
      isSubmitting.value = false;
    }
  }
  
  function reset() {
    Object.assign(values, initialValues);
    errors.value = {};
  }
  
  return {
    values,
    errors,
    isSubmitting,
    validate,
    submit,
    reset
  };
}
\`\`\`

**使用示例：**
\`\`\`vue
<script setup>
import { useForm } from '@/composables/useForm';

const { values, errors, submit, isSubmitting } = useForm(
  { username: '', email: '', password: '' },
  (values) => {
    const errors = {};
    if (!values.username) errors.username = '用户名必填';
    if (!values.email) errors.email = '邮箱必填';
    if (!values.password) errors.password = '密码必填';
    return errors;
  }
);

const handleSubmit = async () => {
  await submit(async (data) => {
    // 提交逻辑
    await fetch('/api/register', {
      method: 'POST',
      body: JSON.stringify(data)
    });
  });
};
</script>

<template>
  <form @submit.prevent="handleSubmit">
    <input v-model="values.username" />
    <span v-if="errors.username">{{ errors.username }}</span>
    
    <input v-model="values.email" type="email" />
    <span v-if="errors.email">{{ errors.email }}</span>
    
    <input v-model="values.password" type="password" />
    <span v-if="errors.password">{{ errors.password }}</span>
    
    <button type="submit" :disabled="isSubmitting">
      {{ isSubmitting ? '提交中...' : '注册' }}
    </button>
  </form>
</template>
\`\`\`

#### 2. 使用 v-model 处理多个输入

\`\`\`vue
<script setup>
import { ref } from 'vue';

const formData = ref({
  username: '',
  email: '',
  phone: ''
});
</script>

<template>
  <form>
    <input v-model="formData.username" placeholder="用户名" />
    <input v-model="formData.email" placeholder="邮箱" />
    <input v-model="formData.phone" placeholder="手机" />
  </form>
</template>
\`\`\`

### 四、API 请求处理技巧

#### 1. 使用自定义 Composable 处理请求

\`\`\`javascript
// composables/useFetch.js
import { ref } from 'vue';

export function useFetch(url, options = {}) {
  const data = ref(null);
  const error = ref(null);
  const loading = ref(false);
  
  async function execute(body = null) {
    loading.value = true;
    error.value = null;
    
    try {
      const response = await fetch(url, {
        ...options,
        body: body ? JSON.stringify(body) : null,
        headers: {
          'Content-Type': 'application/json',
          ...options.headers
        }
      });
      
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      
      data.value = await response.json();
      return data.value;
    } catch (err) {
      error.value = err;
      throw err;
    } finally {
      loading.value = false;
    }
  }
  
  return {
    data,
    error,
    loading,
    execute
  };
}
\`\`\`

**使用示例：**
\`\`\`vue
<script setup>
import { onMounted } from 'vue';
import { useFetch } from '@/composables/useFetch';

const { data: users, loading, execute } = useFetch('/api/users');

onMounted(() => {
  execute();
});
</script>

<template>
  <div v-if="loading">加载中...</div>
  <div v-else-if="users">
    <div v-for="user in users" :key="user.id">
      {{ user.name }}
    </div>
  </div>
</template>
\`\`\`

#### 2. 使用 Axios 拦截器

\`\`\`javascript
// utils/request.js
import axios from 'axios';

const request = axios.create({
  baseURL: '/api',
  timeout: 5000
});

// 请求拦截器
request.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = \`Bearer \${token}\`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// 响应拦截器
request.interceptors.response.use(
  (response) => response.data,
  (error) => {
    if (error.response?.status === 401) {
      // 处理未授权
      localStorage.removeItem('token');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export default request;
\`\`\`

### 五、代码组织技巧

#### 1. 使用 Composables 组织可复用逻辑

\`\`\`javascript
// composables/useDarkMode.js
import { ref, onMounted, onUnmounted } from 'vue';

export function useDarkMode() {
  const isDark = ref(false);
  
  const updateTheme = () => {
    isDark.value = window.matchMedia('(prefers-color-scheme: dark)').matches;
    document.documentElement.classList.toggle('dark', isDark.value);
  };
  
  onMounted(() => {
    updateTheme();
    window.matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', updateTheme);
  });
  
  onUnmounted(() => {
    window.matchMedia('(prefers-color-scheme: dark)')
      .removeEventListener('change', updateTheme);
  });
  
  const toggle = () => {
    isDark.value = !isDark.value;
    document.documentElement.classList.toggle('dark', isDark.value);
  };
  
  return { isDark, toggle };
}
\`\`\`

#### 2. 使用脚本片段组织大型组件

\`\`\`vue
<script setup>
import { ref, computed } from 'vue';

// === 类型定义 ===
// const types...

// === Props ===
const props = defineProps({
  userId: Number
});

// === Emits ===
const emit = defineEmits(['update', 'delete']);

// === 状态 ===
const user = ref(null);
const loading = ref(false);

// === 计算属性 ===
const userName = computed(() => user.value?.name || '未知用户');

// === 方法 ===
const loadUser = async () => {
  loading.value = true;
  // 加载逻辑
  loading.value = false;
};

const handleEdit = () => {
  emit('update', user.value);
};

// === 生命周期 ===
onMounted(() => {
  loadUser();
});
</script>
\`\`\`

### 六、调试技巧

#### 1. 使用 Vue Devtools

- 检查组件树和状态
- 追踪事件和生命周期
- 性能分析

#### 2. 添加调试日志

\`\`\`vue
<script setup>
import { ref, watch } from 'vue';

const count = ref(0);

// 调试 watch
watch(
  count,
  (newVal, oldVal) => {
    console.log('[DEBUG] count changed:', { oldVal, newVal });
  },
  { immediate: true }
);
</script>
\`\`\`

#### 3. 使用错误边界

\`\`\`vue
<script setup>
import { onErrorCaptured } from 'vue';

onErrorCaptured((error, instance, info) => {
  console.error('捕获到错误:', error);
  console.error('组件实例:', instance);
  console.error('错误信息:', info);
  
  // 返回 false 阻止错误继续向上传播
  return false;
});
</script>
\`\`\`

### 七、最佳实践总结

1. **组件设计**：智能组件与展示组件分离
2. **性能优化**：合理使用 shallowRef、markRaw、v-memo
3. **表单处理**：使用 Composables 封装表单逻辑
4. **API 请求**：统一处理请求和错误
5. **代码组织**：使用注释分隔不同代码块
6. **类型安全**：使用 TypeScript 定义类型
7. **代码复用**：使用 Composables 提取可复用逻辑
8. **错误处理**：添加错误边界和全局错误处理
`,
  createdAt: '2026-03-16',
  updatedAt: '2026-03-16'
};
