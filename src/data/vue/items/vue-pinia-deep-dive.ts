import { KnowledgeItem } from '@/types/knowledge';

export const vue_pinia_deep_dive: KnowledgeItem = {
  id: 'vue-pinia-deep-dive',
  title: 'Pinia 状态管理深度详解',
  category: 'vue',
  difficulty: 'medium',
  tags: ['Pinia', '状态管理', 'Vue3', 'Store'],
  content: `## Pinia 状态管理深度详解

Pinia 是 Vue.js 的官方状态管理库，专为 Vue 3 设计。相比 Vuex，Pinia 更轻量、TypeScript 支持更好、API 更简洁。本文详细讲解 Pinia 的核心概念、高级用法和最佳实践。

### 一、Pinia 简介

#### 1. Pinia vs Vuex

| 特性 | Vuex | Pinia |
|------|------|-------|
| 体积 | 较大 | 更小（约 1KB） |
| mutations | 需要 | 不需要 |
| actions | 支持 | 支持 |
| getters | 支持 | 支持 |
| modules | 嵌套模块 | 扁平化多 store |
| TypeScript | 支持一般 | 支持优秀 |
| Devtools | 支持 | 支持更好 |
| 热更新 | 支持 | 支持 |

#### 2. 安装与配置

**安装：**
\`\`\`bash
npm install pinia
\`\`\`

**在 Vue 3 中注册：**
\`\`\`javascript
// main.js
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';

const app = createApp(App);
const pinia = createPinia();

app.use(pinia);
app.mount('#app');
\`\`\`

**在 Nuxt 3 中使用：**
\`\`\`bash
npm install @pinia/nuxt
\`\`\`

\`\`\`javascript
// nuxt.config.js
export default defineNuxtConfig({
  modules: ['@pinia/nuxt']
});
\`\`\`

### 二、Pinia 核心概念

#### 1. 定义 Store

**使用 defineStore 定义：**
\`\`\`javascript
// stores/counter.js
import { defineStore } from 'pinia';

export const useCounterStore = defineStore('counter', {
  // state：状态
  state: () => ({
    count: 0,
    name: 'Pinia'
  }),
  
  // getters：计算属性
  getters: {
    doubleCount: (state) => state.count * 2,
    upperName: (state) => state.name.toUpperCase()
  },
  
  // actions：方法
  actions: {
    increment() {
      this.count++;
    },
    incrementBy(amount) {
      this.count += amount;
    }
  }
});
\`\`\`

#### 2. 在组件中使用 Store

**使用 store：**
\`\`\`vue
<script setup>
import { useCounterStore } from '@/stores/counter';

const counterStore = useCounterStore();

// 访问 state
console.log(counterStore.count);

// 访问 getters
console.log(counterStore.doubleCount);

// 调用 actions
counterStore.increment();
counterStore.incrementBy(5);
</script>

<template>
  <div>
    <p>Count: {{ counterStore.count }}</p>
    <p>Double: {{ counterStore.doubleCount }}</p>
    <button @click="counterStore.increment">+1</button>
    <button @click="counterStore.incrementBy(5)">+5</button>
  </div>
</template>
\`\`\`

### 三、State 状态管理

#### 1. 访问 State

**方式 1：直接访问**
\`\`\`javascript
const store = useCounterStore();
console.log(store.count);
\`\`\`

**方式 2：使用 storeToRefs（保持响应式）**
\`\`\`javascript
import { storeToRefs } from 'pinia';

const store = useCounterStore();
const { count, name } = storeToRefs(store);

// 现在可以保持响应式
console.log(count.value);
\`\`\`

**方式 3：解构（失去响应式）**
\`\`\`javascript
const store = useCounterStore();
const { count } = store;
// count 失去响应式，不推荐
\`\`\`

#### 2. 修改 State

**方式 1：直接修改**
\`\`\`javascript
store.count = 10;
\`\`\`

**方式 2：使用 $patch**
\`\`\`javascript
// 单个值
store.$patch({ count: 10 });

// 多个值
store.$patch({
  count: 10,
  name: 'New Name'
});

// 函数方式
store.$patch((state) => {
  state.count++;
  state.name = 'Updated';
});
\`\`\`

**方式 3：使用 actions**
\`\`\`javascript
store.increment();
\`\`\`

#### 3. 重置 State

\`\`\`javascript
// 重置为初始值
store.$reset();
\`\`\`

### 四、Getters 计算属性

#### 1. 基本 Getters

\`\`\`javascript
export const useUserStore = defineStore('user', {
  state: () => ({
    firstName: 'John',
    lastName: 'Doe',
    age: 25
  }),
  getters: {
    // 单个参数
    fullName: (state) => state.firstName + ' ' + state.lastName,
    
    // 使用 this 访问其他 getters
    fullInfo: (state) => state.fullName + ', ' + state.age + ' years old'
  }
});
\`\`\`

#### 2. 带参数的 Getters

\`\`\`javascript
export const useProductStore = defineStore('product', {
  state: () => ({
    products: [
      { id: 1, name: 'Product A', price: 100 },
      { id: 2, name: 'Product B', price: 200 }
    ]
  }),
  getters: {
    // 返回函数的 getter
    getProductById: (state) => (id) => {
      return state.products.find(p => p.id === id);
    },
    
    // 过滤产品
    getProductsByPrice: (state) => (maxPrice) => {
      return state.products.filter(p => p.price <= maxPrice);
    }
  }
});

// 使用
const productStore = useProductStore();
const product = productStore.getProductById(1);
const cheapProducts = productStore.getProductsByPrice(150);
\`\`\`

#### 3. 访问其他 Store 的 Getters

\`\`\`javascript
export const useCartStore = defineStore('cart', {
  state: () => ({
    items: []
  }),
  getters: {
    total: (state) => {
      const userStore = useUserStore();
      const discount = userStore.isVip ? 0.9 : 1;
      return state.items.reduce((sum, item) => sum + item.price, 0) * discount;
    }
  }
});
\`\`\`

### 五、Actions 动作

#### 1. 基本 Actions

\`\`\`javascript
export const useUserStore = defineStore('user', {
  state: () => ({
    user: null,
    token: ''
  }),
  actions: {
    // 同步 action
    setUser(user) {
      this.user = user;
    },
    
    // 异步 action
    async login(credentials) {
      const response = await fetch('/api/login', {
        method: 'POST',
        body: JSON.stringify(credentials)
      });
      const data = await response.json();
      this.user = data.user;
      this.token = data.token;
      localStorage.setItem('token', data.token);
    },
    
    // 登出
    logout() {
      this.user = null;
      this.token = '';
      localStorage.removeItem('token');
    }
  }
});
\`\`\`

#### 2. 使用其他 Actions

\`\`\`javascript
actions: {
  async loginAndFetchProfile(credentials) {
    // 调用当前 store 的其他 action
    await this.login(credentials);
    
    // 调用其他 store 的 action
    const profileStore = useProfileStore();
    await profileStore.fetchProfile();
  }
}
\`\`\`

#### 3. Action 错误处理

\`\`\`javascript
actions: {
  async login(credentials) {
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        body: JSON.stringify(credentials)
      });
      
      if (!response.ok) {
        throw new Error('Login failed');
      }
      
      const data = await response.json();
      this.user = data.user;
      this.token = data.token;
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    }
  }
}
\`\`\`

### 六、Store 组合

#### 1. 在 Store 中使用其他 Store

\`\`\`javascript
// stores/cart.js
import { defineStore } from 'pinia';
import { useUserStore } from './user';
import { useProductStore } from './product';

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: []
  }),
  getters: {
    total() {
      const userStore = useUserStore();
      const productStore = useProductStore();
      
      const subtotal = this.items.reduce((sum, item) => {
        const product = productStore.getProductById(item.productId);
        return sum + (product?.price || 0) * item.quantity;
      }, 0);
      
      return userStore.isVip ? subtotal * 0.9 : subtotal;
    }
  }
});
\`\`\`

#### 2. 在组件中组合多个 Store

\`\`\`vue
<script setup>
import { useUserStore } from '@/stores/user';
import { useCartStore } from '@/stores/cart';
import { useProductStore } from '@/stores/product';

const userStore = useUserStore();
const cartStore = useCartStore();
const productStore = useProductStore();

// 登录并添加商品到购物车
const buyProduct = async (productId) => {
  if (!userStore.user) {
    await userStore.login({ username: 'guest', password: 'guest' });
  }
  
  const product = productStore.getProductById(productId);
  cartStore.addItem({ productId, quantity: 1 });
};
</script>
\`\`\`

### 七、持久化存储

#### 1. 使用插件持久化

**安装插件：**
\`\`\`bash
npm install pinia-plugin-persistedstate
\`\`\`

**配置插件：**
\`\`\`javascript
// main.js
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

const app = createApp(App);
app.use(pinia);
\`\`\`

**在 Store 中使用：**
\`\`\`javascript
export const useUserStore = defineStore('user', {
  state: () => ({
    user: null,
    token: ''
  }),
  persist: {
    // 存储键名
    key: 'user-store',
    // 存储位置
    storage: localStorage,
    // 选择要持久化的 paths
    paths: ['token']
  }
});
\`\`\`

#### 2. 手动持久化

\`\`\`javascript
export const useUserStore = defineStore('user', {
  state: () => ({
    user: null,
    token: ''
  }),
  actions: {
    login(credentials) {
      // 登录后存储 token
      this.token = 'new-token';
      localStorage.setItem('token', this.token);
    },
    
    // 初始化时恢复
    init() {
      const token = localStorage.getItem('token');
      if (token) {
        this.token = token;
      }
    }
  }
});
\`\`\`

### 八、TypeScript 支持

#### 1. 类型定义

\`\`\`typescript
// stores/user.ts
import { defineStore } from 'pinia';

interface User {
  id: number;
  name: string;
  email: string;
}

interface UserState {
  user: User | null;
  token: string;
}

export const useUserStore = defineStore('user', {
  state: (): UserState => ({
    user: null,
    token: ''
  }),
  getters: {
    isLoggedIn: (state): boolean => !!state.token,
    userName: (state): string => state.user?.name ?? 'Guest'
  },
  actions: {
    async login(credentials: { username: string; password: string }) {
      const response = await fetch('/api/login', {
        method: 'POST',
        body: JSON.stringify(credentials)
      });
      const data: { user: User; token: string } = await response.json();
      this.user = data.user;
      this.token = data.token;
    }
  }
});
\`\`\`

#### 2. Setup Store 语法

\`\`\`typescript
// stores/counter.ts
import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

export const useCounterStore = defineStore('counter', () => {
  // state
  const count = ref(0);
  const name = ref('Pinia');
  
  // getters
  const doubleCount = computed(() => count.value * 2);
  const upperName = computed(() => name.value.toUpperCase());
  
  // actions
  function increment() {
    count.value++;
  }
  
  function incrementBy(amount: number) {
    count.value += amount;
  }
  
  function reset() {
    count.value = 0;
  }
  
  return {
    count,
    name,
    doubleCount,
    upperName,
    increment,
    incrementBy,
    reset
  };
});
\`\`\`

### 九、最佳实践

1. **按功能划分 Store**：每个模块一个 store 文件
2. **使用 TypeScript**：获得更好的类型支持
3. **使用 storeToRefs**：解构时保持响应式
4. **合理使用持久化**：只存储必要的数据
5. **错误处理**：在 actions 中处理异步错误
6. **命名规范**：useXxxStore 格式

\`\`\`
stores/
├── user.ts          # 用户相关状态
├── cart.ts          # 购物车相关状态
├── product.ts       # 产品相关状态
├── settings.ts      # 设置相关状态
└── index.ts         # 统一导出
\`\`\`
`,
  createdAt: '2026-03-16',
  updatedAt: '2026-03-16'
};
