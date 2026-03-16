import { KnowledgeItem } from '@/types/knowledge';

export const vue_interview_questions: KnowledgeItem = {
  id: 'vue-interview-questions',
  title: 'Vue 面试高频知识点详解',
  category: 'vue',
  difficulty: 'hard',
  tags: ['Vue', '面试题', '高频考点', 'Vue2', 'Vue3'],
  content: `## Vue 面试高频知识点详解

Vue 作为最流行的前端框架之一，是前端面试中的必考内容。本文整理了 Vue 面试中的高频考点，包括 Vue2 和 Vue3 的核心概念、原理和最佳实践。

### 一、Vue 核心概念

#### 1. Vue 的响应式原理是什么？Vue2 和 Vue3 有什么区别？

**Vue2 响应式原理：**
Vue2 使用 Object.defineProperty 实现响应式系统。核心思想是通过遍历 data 选项中的所有属性，将每个属性转换为 getter/setter。当属性被访问时，触发 getter 进行依赖收集；当属性被修改时，触发 setter 派发更新。

\`\`\`javascript
// Vue2 响应式核心代码
function defineReactive(obj, key, val) {
  const dep = new Dep();
  
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get() {
      // 依赖收集
      if (Dep.target) {
        dep.depend();
      }
      return val;
    },
    set(newVal) {
      if (newVal === val) return;
      val = newVal;
      // 派发更新
      dep.notify();
    }
  });
}
\`\`\`

**Vue2 的局限性：**
1. 无法检测对象属性的添加或删除
2. 无法检测数组索引和长度的变化
3. 初始化时需要递归遍历所有属性，性能开销大

**Vue3 响应式原理：**
Vue3 使用 ES6 Proxy 实现响应式系统。Proxy 可以直接代理整个对象，支持数组索引检测、新增属性检测、删除属性检测等。

\`\`\`javascript
// Vue3 响应式核心代码
function reactive(target) {
  return new Proxy(target, {
    get(target, key, receiver) {
      // 依赖收集
      track(target, key);
      const result = Reflect.get(target, key, receiver);
      if (typeof result === 'object' && result !== null) {
        return reactive(result);
      }
      return result;
    },
    set(target, key, value, receiver) {
      const oldValue = target[key];
      const result = Reflect.set(target, key, value, receiver);
      if (oldValue !== value) {
        trigger(target, key);
      }
      return result;
    },
    deleteProperty(target, key) {
      const result = Reflect.deleteProperty(target, key);
      trigger(target, key);
      return result;
    }
  });
}
\`\`\`

**Vue3 的优势：**
1. 可以检测属性的添加和删除
2. 可以检测数组索引和长度的变化
3. 懒代理，只有访问时才递归代理，性能更好
4. 支持 Map、Set、WeakMap、WeakSet 等数据结构

#### 2. Vue 的生命周期有哪些？各阶段适合做什么？

**Vue2 生命周期：**
- beforeCreate：实例创建前，无法访问 data、methods
- created：实例创建后，可以访问 data、methods，适合发起 API 请求
- beforeMount：挂载前，DOM 还未渲染
- mounted：挂载后，DOM 已渲染，适合操作 DOM、初始化第三方库
- beforeUpdate：更新前，数据变化，DOM 还未更新
- updated：更新后，DOM 已更新
- beforeDestroy：销毁前，清理定时器、事件监听器
- destroyed：销毁后，实例已销毁

**Vue3 生命周期：**
- beforeCreate → setup()
- created → setup()
- beforeMount → onBeforeMount
- mounted → onMounted
- beforeUpdate → onBeforeUpdate
- updated → onUpdated
- beforeDestroy → onBeforeUnmount
- destroyed → onUnmounted

\`\`\`javascript
// Vue3 生命周期使用示例
import { 
  onBeforeMount, onMounted, 
  onBeforeUpdate, onUpdated, 
  onBeforeUnmount, onUnmounted 
} from 'vue';

export default {
  setup() {
    onBeforeMount(() => {
      console.log('挂载前');
    });
    
    onMounted(() => {
      console.log('挂载后');
    });
    
    onBeforeUpdate(() => {
      console.log('更新前');
    });
    
    onUpdated(() => {
      console.log('更新后');
    });
    
    onBeforeUnmount(() => {
      console.log('卸载前');
    });
    
    onUnmounted(() => {
      console.log('卸载后');
    });
  }
};
\`\`\`

#### 3. v-if 和 v-show 的区别是什么？

| 特性 | v-if | v-show |
|------|------|--------|
| 实现方式 | 真正的条件渲染，条件为 false 时元素不在 DOM 中 | 元素始终在 DOM 中，通过 display 控制显示/隐藏 |
| 初始渲染开销 | 低 | 高 |
| 切换开销 | 高 | 低 |
| 生命周期 | 会触发 | 不会触发 |
| 适用场景 | 不常切换 | 频繁切换 |

\`\`\`vue
<template>
  <div>
    <!-- 频繁切换，使用 v-show -->
    <div v-show="isVisible">频繁切换的内容</div>
    
    <!-- 不常切换，使用 v-if -->
    <div v-if="hasPermission">需要权限的内容</div>
  </div>
</template>
\`\`\`

### 二、组件通信

#### 4. Vue 组件通信有哪些方式？

**1. props / emit（父子组件）**

父组件通过 props 传递数据给子组件，子组件通过 emit 发送事件给父组件。

\`\`\`vue
<!-- 父组件 -->
<template>
  <ChildComponent :message="parentMessage" @child-event="handleEvent" />
</template>

<!-- 子组件 -->
<script>
export default {
  props: ['message'],
  methods: {
    sendMessage() {
      this.$emit('child-event', 'Hello from child');
    }
  }
};
</script>
\`\`\`

**2. provide / inject（跨层级通信）**

祖先组件通过 provide 提供数据，后代组件通过 inject 注入数据。

\`\`\`vue
<!-- 祖先组件 -->
<script>
export default {
  provide() {
    return {
      theme: this.theme,
      updateTheme: this.updateTheme
    };
  },
  data() {
    return { theme: 'light' };
  }
};
</script>

<!-- 后代组件 -->
<script>
export default {
  inject: ['theme', 'updateTheme']
};
</script>
\`\`\`

**3. Vuex / Pinia（全局状态管理）**

\`\`\`javascript
// Pinia store
import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
  state: () => ({
    user: null,
    token: ''
  }),
  actions: {
    login(userData) {
      this.user = userData;
    }
  }
});

// 组件中使用
const userStore = useUserStore();
userStore.login(userData);
\`\`\`

#### 5. props 和 data 有什么区别？

| 特性 | props | data |
|------|-------|------|
| 数据来源 | 父组件传递 | 组件内部定义 |
| 修改方式 | 不能直接修改 | 可以直接修改 |
| 用途 | 接收外部数据 | 管理内部状态 |

\`\`\`vue
<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
      default: 'Default Title'
    }
  },
  data() {
    return {
      internalCount: 0,
      message: 'Hello'
    };
  }
};
</script>
\`\`\`

### 三、计算属性与监听器

#### 6. computed 和 watch 的区别是什么？

| 特性 | computed | watch |
|------|----------|-------|
| 缓存 | 有缓存 | 无缓存 |
| 返回值 | 有返回值 | 无返回值 |
| 异步支持 | 不支持 | 支持 |
| 适用场景 | 派生状态 | 副作用处理 |

\`\`\`vue
<script>
export default {
  data() {
    return {
      firstName: 'John',
      lastName: 'Doe'
    };
  },
  computed: {
    // 计算属性：有缓存
    fullName() {
      return this.firstName + ' ' + this.lastName;
    }
  },
  watch: {
    // watch：无缓存，支持异步
    firstName(newVal, oldVal) {
      console.log('watch called');
      this.fetchData(newVal);
    }
  },
  methods: {
    async fetchData(name) {
      const res = await fetch('/api/data?name=' + name);
      return await res.json();
    }
  }
};
</script>
\`\`\`

### 四、Vue3 新特性

#### 7. Composition API 和 Options API 有什么区别？

**Options API 的缺点：**
1. 按选项组织代码，相关逻辑分散
2. 逻辑复用困难，需要使用 mixins
3. TypeScript 支持不够友好

**Composition API 的优势：**
1. 按功能组织代码，相关逻辑集中
2. 使用 composables 实现逻辑复用
3. 更好的 TypeScript 支持

\`\`\`vue
<!-- Options API -->
<script>
export default {
  data() {
    return {
      count: 0,
      user: null
    };
  },
  methods: {
    increment() {
      this.count++;
    }
  },
  mounted() {
    this.fetchUser();
  }
};
</script>

<!-- Composition API -->
<script setup>
import { ref, onMounted } from 'vue';

const count = ref(0);
const user = ref(null);

const increment = () => {
  count.value++;
};

const fetchUser = async () => {
  // 获取用户
};

onMounted(() => {
  fetchUser();
});
</script>
\`\`\`

#### 8. ref 和 reactive 有什么区别？

| 特性 | ref | reactive |
|------|-----|----------|
| 适用类型 | 基本类型和对象 | 仅对象和数组 |
| 访问方式 | 通过 .value | 直接访问属性 |
| 模板中 | 自动解包 | 不解包 |
| 替换 | 可以替换 | 不能替换 |

\`\`\`javascript
import { ref, reactive } from 'vue';

// ref：适合基本类型
const count = ref(0);
count.value++;

// reactive：适合对象
const state = reactive({
  count: 0,
  user: { name: 'Alice' }
});
state.count++;
state.user.name = 'Bob';
\`\`\`

### 五、性能优化

#### 9. Vue 性能优化有哪些手段？

**1. 渲染优化**
- 合理使用 v-if 和 v-show
- 避免 v-for 与 v-if 同时使用
- 使用唯一 key，避免使用 index
- 使用 Object.freeze() 冻结大列表

**2. 组件优化**
- 使用异步组件实现代码分割
- 使用 keep-alive 缓存组件
- 使用函数式组件

**3. 响应式优化**
- 使用 shallowRef/shallowReactive
- 合理使用 computed 和 watch

**4. 打包优化**
- 路由懒加载
- 按需导入依赖
- Tree Shaking

\`\`\`vue
<template>
  <!-- 使用唯一 key -->
  <div v-for="item in items" :key="item.id">{{ item.name }}</div>
  
  <!-- 缓存组件 -->
  <keep-alive>
    <component :is="currentComponent" />
  </keep-alive>
</template>

<script setup>
import { shallowRef } from 'vue';

// 冻结大列表
const largeList = shallowRef([]);
</script>
\`\`\`

### 六、Vue Router

#### 10. Vue Router 有哪些导航守卫？

**全局守卫：**
- beforeEach：全局前置守卫
- beforeResolve：全局解析守卫
- afterEach：全局后置守卫

**路由独享守卫：**
- beforeEnter：路由独享前置守卫

**组件内守卫：**
- beforeRouteEnter：进入组件前
- beforeRouteUpdate：组件更新前
- beforeRouteLeave：离开组件前

\`\`\`javascript
// 全局前置守卫
router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token');
  if (to.meta.requiresAuth && !token) {
    next('/login');
  } else {
    next();
  }
});

// 组件内守卫
export default {
  beforeRouteLeave(to, from, next) {
    const answer = window.confirm('确定要离开吗？');
    next(answer);
  }
};
\`\`\`

### 七、Vuex 与 Pinia

#### 11. Vuex 和 Pinia 有什么区别？

| 特性 | Vuex | Pinia |
|------|------|-------|
| 官方推荐 | Vue2 | Vue3 |
| mutations | 需要 | 不需要 |
| TypeScript | 支持一般 | 支持优秀 |
| 体积 | 较大 | 更小 |

\`\`\`javascript
// Vuex
import { createStore } from 'vuex';

export default createStore({
  state: { count: 0 },
  mutations: {
    increment(state) {
      state.count++;
    }
  }
});

// Pinia
import { defineStore } from 'pinia';

export const useCounterStore = defineStore('counter', {
  state: () => ({ count: 0 }),
  actions: {
    increment() {
      this.count++;
    }
  }
});
\`\`\`

### 面试技巧

1. **理解原理**：不仅要会用，还要理解背后的原理
2. **对比分析**：能够对比 Vue2 和 Vue3 的区别
3. **代码示例**：能够写出简洁的代码示例
4. **最佳实践**：了解实际项目中的最佳实践
5. **性能优化**：掌握性能优化的方法和工具
`,
  createdAt: '2026-03-16',
  updatedAt: '2026-03-16'
};
