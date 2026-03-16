import { KnowledgeItem } from '@/types/knowledge';

export const vue2_vs_vue3: KnowledgeItem = {
  id: 'vue2-vs-vue3',
  title: 'Vue2 与 Vue3 全面对比',
  category: 'vue',
  difficulty: 'medium',
  tags: ['Vue2', 'Vue3', '对比', '迁移指南'],
  content: `## Vue2 与 Vue3 全面对比

Vue3 于 2020 年 9 月正式发布，相比 Vue2 带来了许多重大改进。本文从多个维度全面对比 Vue2 和 Vue3，帮助开发者理解两者的区别，并为迁移提供参考。

### 一、性能对比

#### 1. 打包体积优化

**Vue2：**
- 完整版本约 30KB（gzip）
- 所有功能都包含在核心包中

**Vue3：**
- 完整版本约 10KB（gzip）
- 模块化设计，支持 Tree Shaking
- 按需导入功能

\`\`\`javascript
// Vue2：全部导入
import Vue from 'vue';

// Vue3：按需导入
import { ref, reactive, computed } from 'vue';
\`\`\`

#### 2. 渲染性能

**Vue2：**
- 虚拟 DOM 基于 Snabbdom
- 全量 Diff 算法
- 静态节点每次都要比较

**Vue3：**
- 自研虚拟 DOM
- 编译时优化 + 运行时优化
- 静态节点提升（Static Hoisting）
- 补丁标志（Patch Flags）
- 事件处理函数缓存

\`\`\`javascript
// Vue2 编译结果
function render() {
  return h('div', { id: 'app' }, [
    h('h1', {}, this.title),
    h('p', { class: 'static' }, 'Static text')
  ]);
}

// Vue3 编译结果（带优化）
const _hoisted_1 = h('p', { class: 'static' }, 'Static text');

function render() {
  return h('div', { id: 'app' }, [
    h('h1', {}, this.title),
    _hoisted_1
  ]);
}
\`\`\`

#### 3. 响应式性能

**Vue2（Object.defineProperty）：**
- 初始化时递归遍历所有属性
- 无法检测新增/删除属性
- 无法检测数组索引变化

**Vue3（Proxy）：**
- 懒代理，访问时才递归
- 支持新增/删除属性检测
- 支持数组索引变化检测
- 支持 Map、Set 等数据结构

### 二、API 设计对比

#### 1. Options API vs Composition API

**Vue2 - Options API：**
按选项（data、methods、computed、watch）组织代码。

\`\`\`vue
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
  computed: {
    doubleCount() {
      return this.count * 2;
    }
  },
  mounted() {
    this.fetchUser();
  }
};
</script>
\`\`\`

**Vue3 - Composition API：**
按功能组织代码，相关逻辑集中在一起。

\`\`\`vue
<script setup>
import { ref, computed, onMounted } from 'vue';

const count = ref(0);
const user = ref(null);

const increment = () => {
  count.value++;
};

const doubleCount = computed(() => count.value * 2);

const fetchUser = async () => {
  // 获取用户
};

onMounted(() => {
  fetchUser();
});
</script>
\`\`\`

**对比分析：**

| 特性 | Options API | Composition API |
|------|-------------|-----------------|
| 代码组织 | 按选项分散 | 按功能集中 |
| 逻辑复用 | mixins | composables |
| TypeScript 支持 | 一般 | 优秀 |
| 学习曲线 | 低 | 较高 |

#### 2. 生命周期对比

| Vue2 | Vue3 | 说明 |
|------|------|------|
| beforeCreate | setup() | 实例创建前 |
| created | setup() | 实例创建后 |
| beforeMount | onBeforeMount | 挂载前 |
| mounted | onMounted | 挂载后 |
| beforeUpdate | onBeforeUpdate | 更新前 |
| updated | onUpdated | 更新后 |
| beforeDestroy | onBeforeUnmount | 卸载前 |
| destroyed | onUnmounted | 卸载后 |

\`\`\`javascript
// Vue2 生命周期
export default {
  beforeCreate() {
    console.log('beforeCreate');
  },
  created() {
    console.log('created');
  },
  mounted() {
    console.log('mounted');
  },
  beforeDestroy() {
    console.log('beforeDestroy');
  }
};

// Vue3 生命周期
import {
  onBeforeMount,
  onMounted,
  onBeforeUnmount,
  onUnmounted
} from 'vue';

export default {
  setup() {
    onBeforeMount(() => {
      console.log('onBeforeMount');
    });
    
    onMounted(() => {
      console.log('onMounted');
    });
    
    onBeforeUnmount(() => {
      console.log('onBeforeUnmount');
    });
    
    onUnmounted(() => {
      console.log('onUnmounted');
    });
  }
};
\`\`\`

### 三、响应式 API 对比

#### 1. 数据定义

**Vue2：**
\`\`\`javascript
export default {
  data() {
    return {
      count: 0,
      user: {
        name: 'Alice',
        age: 25
      }
    };
  }
};
\`\`\`

**Vue3：**
\`\`\`javascript
import { ref, reactive } from 'vue';

// ref：适合基本类型
const count = ref(0);

// reactive：适合对象
const user = reactive({
  name: 'Alice',
  age: 25
});
\`\`\`

#### 2. 计算属性

**Vue2：**
\`\`\`javascript
export default {
  data() {
    return {
      firstName: 'John',
      lastName: 'Doe'
    };
  },
  computed: {
    fullName() {
      return this.firstName + ' ' + this.lastName;
    }
  }
};
\`\`\`

**Vue3：**
\`\`\`javascript
import { ref, computed } from 'vue';

const firstName = ref('John');
const lastName = ref('Doe');

const fullName = computed(() => {
  return firstName.value + ' ' + lastName.value;
});
\`\`\`

#### 3. 监听器

**Vue2：**
\`\`\`javascript
export default {
  data() {
    return {
      count: 0
    };
  },
  watch: {
    count(newVal, oldVal) {
      console.log('count changed:', newVal, oldVal);
    }
  }
};
\`\`\`

**Vue3：**
\`\`\`javascript
import { ref, watch, watchEffect } from 'vue';

const count = ref(0);

// 监听单个源
watch(count, (newVal, oldVal) => {
  console.log('count changed:', newVal, oldVal);
});

// watchEffect：自动追踪依赖
watchEffect(() => {
  console.log('count:', count.value);
});
\`\`\`

### 四、组件系统对比

#### 1. 组件定义

**Vue2：**
\`\`\`javascript
// 全局注册
Vue.component('my-component', {
  template: '<div>My Component</div>'
});

// 局部注册
export default {
  components: {
    MyComponent
  }
};
\`\`\`

**Vue3：**
\`\`\`javascript
import { defineComponent } from 'vue';
import MyComponent from './MyComponent.vue';

// defineComponent（可选，用于类型推断）
export default defineComponent({
  components: {
    MyComponent
  }
});

// <script setup> 自动注册
<script setup>
import MyComponent from './MyComponent.vue';
</script>
\`\`\`

#### 2. Props 和 Emits

**Vue2：**
\`\`\`vue
<script>
export default {
  props: {
    title: String,
    count: {
      type: Number,
      default: 0
    }
  },
  methods: {
    handleClick() {
      this.$emit('click', { id: 1 });
    }
  }
};
</script>
\`\`\`

**Vue3：**
\`\`\`vue
<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  title: String,
  count: {
    type: Number,
    default: 0
  }
});

const emit = defineEmits(['click', 'update']);

const handleClick = () => {
  emit('click', { id: 1 });
};
</script>
\`\`\`

### 五、状态管理对比

#### Vuex 3 vs Vuex 4 vs Pinia

**Vuex 3（Vue2）：**
\`\`\`javascript
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment(state) {
      state.count++;
    }
  },
  actions: {
    increment({ commit }) {
      commit('increment');
    }
  }
});
\`\`\`

**Vuex 4（Vue3）：**
\`\`\`javascript
import { createStore } from 'vuex';

export default createStore({
  state: {
    count: 0
  },
  mutations: {
    increment(state) {
      state.count++;
    }
  },
  actions: {
    increment({ commit }) {
      commit('increment');
    }
  }
});
\`\`\`

**Pinia（Vue3 推荐）：**
\`\`\`javascript
import { defineStore } from 'pinia';

export const useCounterStore = defineStore('counter', {
  state: () => ({
    count: 0
  }),
  actions: {
    increment() {
      this.count++;
    }
  },
  getters: {
    doubleCount: (state) => state.count * 2
  }
});

// 组件中使用
const counterStore = useCounterStore();
counterStore.increment();
\`\`\`

### 六、Vue Router 对比

**Vue Router 3（Vue2）：**
\`\`\`javascript
import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home
    }
  ]
});
\`\`\`

**Vue Router 4（Vue3）：**
\`\`\`javascript
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Home
    }
  ]
});
\`\`\`

### 七、迁移指南

#### 从 Vue2 迁移到 Vue3

**1. 更新依赖：**
\`\`\`json
{
  "dependencies": {
    "vue": "^3.0.0",
    "vue-router": "^4.0.0",
    "vuex": "^4.0.0"
  }
}
\`\`\`

**2. 全局 API 变更：**
\`\`\`javascript
// Vue2
import Vue from 'vue';
Vue.use(Plugin);
Vue.component('MyComponent', MyComponent);

// Vue3
import { createApp } from 'vue';
const app = createApp(App);
app.use(Plugin);
app.component('MyComponent', MyComponent);
app.mount('#app');
\`\`\`

**3. 模板变更：**
- v-model 默认 prop 从 value 改为 modelValue
- v-model 默认 event 从 input 改为 update:modelValue
- v-if 优先级高于 v-for
- 支持多个根节点（Fragment）

**4. 移除的特性：**
- 过滤器（filters）
- 全局 API：Vue.config.keyCodes
- 实例方法：$on, $off, $once
- 功能：inline-template

### 八、最佳实践建议

**1. 新项目：**
- 直接使用 Vue3 + Composition API
- 使用 Pinia 进行状态管理
- 使用 Vite 作为构建工具
- 使用 TypeScript 提高代码质量

**2. 老项目迁移：**
- 评估迁移成本
- 优先迁移公共组件和工具
- 逐步迁移业务组件

**3. 代码组织：**
- 使用 composables 组织可复用逻辑
- 按功能模块划分代码
- 使用 TypeScript 定义类型

### 总结

| 维度 | Vue2 | Vue3 |
|------|------|------|
| 性能 | 较好 | 更优 |
| 体积 | 较大 | 更小 |
| API | Options API | Composition API |
| 响应式 | Object.defineProperty | Proxy |
| TypeScript | 支持一般 | 支持优秀 |
| 多根节点 | 不支持 | 支持 |
| 状态管理 | Vuex 3 | Pinia |
| 路由 | Vue Router 3 | Vue Router 4 |
`,
  createdAt: '2026-03-16',
  updatedAt: '2026-03-16'
};
