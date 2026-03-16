import { KnowledgeItem } from '@/types/knowledge';

export const vue_performance_optimization: KnowledgeItem = {
  id: 'vue-performance-optimization',
  title: 'Vue 性能优化实战指南',
  category: 'vue',
  difficulty: 'hard',
  tags: ['Vue', '性能优化', '渲染优化', '打包优化'],
  content: `## Vue 性能优化实战指南

性能优化是前端开发中的永恒话题，也是面试中的高频考点。Vue 作为现代前端框架，提供了多种性能优化手段。本文将从渲染优化、代码优化、打包优化等多个维度，全面讲解 Vue 性能优化的最佳实践。

### 渲染性能优化

**v-if 与 v-show 的选择：**
v-if 和 v-show 都可以条件渲染元素，但实现机制不同，适用场景也不同。

- v-if：真正的条件渲染，条件为 false 时元素不会存在于 DOM 中
- v-show：元素始终存在于 DOM 中，只是通过 display 控制显示/隐藏

选择原则：
- 频繁切换：使用 v-show（切换开销小）
- 不常切换：使用 v-if（初始渲染开销小）
- 需要生命周期：使用 v-if（v-show 不会触发生命周期）

\`\`\`vue
<template>
  <div>
    <!-- 频繁切换，使用 v-show -->
    <div v-show="isVisible">频繁切换的内容</div>
    <button @click="isVisible = !isVisible">切换</button>
    
    <!-- 不常切换，使用 v-if -->
    <div v-if="hasPermission">需要权限的内容</div>
    
    <!-- 需要生命周期钩子，使用 v-if -->
    <ChildComponent v-if="shouldRender" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      isVisible: true,
      hasPermission: false,
      shouldRender: false
    };
  }
};
</script>
\`\`\`

**v-for 与 v-if 避免同时使用：**
在 Vue 2 中，v-for 的优先级高于 v-if，这会导致性能问题。Vue 3 中 v-if 优先级高于 v-for，但最佳实践是避免同时使用。

\`\`\`vue
<!-- ❌ 不推荐：v-for 与 v-if 同时使用 -->
<template>
  <ul>
    <li v-for="item in items" v-if="item.visible" :key="item.id">
      {{ item.name }}
    </li>
  </ul>
</template>

<!-- ✅ 推荐：使用计算属性过滤 -->
<template>
  <ul>
    <li v-for="item in visibleItems" :key="item.id">
      {{ item.name }}
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    items: Array
  },
  computed: {
    visibleItems() {
      return this.items.filter(item => item.visible);
    }
  }
};
</script>

<!-- ✅ 推荐：使用模板标签 -->
<template>
  <ul>
    <template v-for="item in items" :key="item.id">
      <li v-if="item.visible">
        {{ item.name }}
      </li>
    </template>
  </ul>
</template>
\`\`\`

**key 的正确使用：**
key 是 Vue 追踪节点身份的重要标识，正确使用 key 可以大大提高列表渲染性能。

\`\`\`vue
<template>
  <div>
    <!-- ❌ 不推荐：使用 index 作为 key -->
    <div v-for="(item, index) in items" :key="index">
      {{ item.name }}
    </div>
    
    <!-- ✅ 推荐：使用唯一 ID 作为 key -->
    <div v-for="item in items" :key="item.id">
      {{ item.name }}
    </div>
    
    <!-- ✅ 推荐：组合 key -->
    <div v-for="item in items" :key="item.type + '-' + item.id">
      {{ item.name }}
    </div>
  </div>
</template>
\`\`\`

**使用 Object.freeze() 优化大列表：**
对于不需要响应式的大列表，可以使用 Object.freeze() 冻结对象，避免 Vue 进行响应式转换。

\`\`\`javascript
// Vue 2
export default {
  data() {
    return {
      // ❌ 不推荐：大列表进行响应式转换开销大
      largeList: fetchData(),
      
      // ✅ 推荐：冻结对象，跳过响应式转换
      frozenList: Object.freeze(fetchData())
    };
  }
};

// Vue 3
import { shallowRef } from 'vue';

export default {
  setup() {
    return {
      // ✅ 推荐：shallowRef 只代理第一层
      largeList: shallowRef(fetchData())
    };
  }
};
\`\`\`

### 组件优化

**函数式组件：**
函数式组件没有实例，渲染开销更小，适合纯展示组件。

\`\`\`vue
<!-- Vue 2 函数式组件 -->
<template functional>
  <div :class="['btn', props.type]">
    <slot></slot>
  </div>
</template>

<script>
export default {
  functional: true,
  props: {
    type: String
  }
};
</script>

<!-- Vue 3 函数式组件 -->
<script>
export default {
  props: ['type'],
  setup(props, { slots }) {
    return () => h('div', { class: ['btn', props.type] }, slots.default());
  }
};
</script>

<!-- Vue 3.3+ 语法 -->
<script setup>
defineOptions({
  inheritAttrs: false
});
</script>

<template>
  <div :class="['btn', $attrs.type]">
    <slot></slot>
  </div>
</template>
\`\`\`

**异步组件：**
异步组件可以按需加载，减少初始包体积。

\`\`\`javascript
import { defineAsyncComponent } from 'vue';

// 基础用法
const AsyncComponent = defineAsyncComponent(() =>
  import('./components/MyComponent.vue')
);

// 带加载状态
const AsyncComponentWithLoading = defineAsyncComponent({
  loader: () => import('./components/MyComponent.vue'),
  loadingComponent: LoadingComponent,
  errorComponent: ErrorComponent,
  delay: 200,
  timeout: 3000
});
\`\`\`

**keep-alive 缓存组件：**
keep-alive 可以缓存组件实例，避免重复渲染。

\`\`\`vue
<template>
  <div>
    <keep-alive :include="['Home', 'About']" :max="10">
      <router-view />
    </keep-alive>
    
    <!-- 动态组件缓存 -->
    <keep-alive>
      <component :is="currentComponent" />
    </keep-alive>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentComponent: 'Home'
    };
  }
};
</script>
\`\`\`

### 响应式优化

**ref vs reactive 的选择：**
Vue 3 提供了 ref 和 reactive 两种响应式 API，选择合适的 API 可以提高性能。

\`\`\`javascript
import { ref, reactive, shallowRef, shallowReactive } from 'vue';

// ref：适合基本类型和小型对象
const count = ref(0);
const user = ref({ name: 'Alice' });

// reactive：适合复杂对象
const state = reactive({
  user: { name: 'Alice', age: 25 },
  settings: { theme: 'dark' }
});

// shallowRef：只代理第一层，适合大对象
const largeList = shallowRef([]);

// shallowReactive：只代理第一层
const shallowState = shallowReactive({
  list: [] // 内部不是响应式的
});
\`\`\`

**computed vs watch 的选择：**
computed 和 watch 都可以响应数据变化，但使用场景不同。

\`\`\`javascript
import { ref, computed, watch, watchEffect } from 'vue';

export default {
  setup() {
    const firstName = ref('John');
    const lastName = ref('Doe');
    
    // computed：有缓存，适合派生状态
    const fullName = computed(() => {
      console.log('computed called');
      return \`\${firstName.value} \${lastName.value}\`;
    });
    
    // watch：无缓存，适合副作用
    watch([firstName, lastName], ([newFirst, newLast], [oldFirst, oldLast]) => {
      console.log('watch called');
      // 执行副作用，如 API 调用
    });
    
    // watchEffect：自动追踪依赖
    watchEffect(() => {
      console.log('watchEffect called');
      console.log('Full name:', firstName.value, lastName.value);
    });
    
    return { fullName };
  }
};
\`\`\`

### 打包优化

**代码分割：**
通过路由懒加载和异步组件实现代码分割。

\`\`\`javascript
// 路由懒加载
const routes = [
  {
    path: '/',
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/about',
    component: () => import('@/views/About.vue')
  }
];

// 动态导入
const loadComponent = (name) => {
  return () => import(\`@/components/\${name}.vue\`);
};

const Header = loadComponent('Header');
const Footer = loadComponent('Footer');
\`\`\`

**Tree Shaking：**
确保代码可以被 Tree Shaking 优化。

\`\`\`javascript
// ❌ 不推荐：导入整个库
import _ from 'lodash';
_.debounce(() => {}, 300);

// ✅ 推荐：按需导入
import { debounce } from 'lodash-es';
debounce(() => {}, 300);

// ✅ 推荐：使用插件自动导入
// vite-plugin-components
// unplugin-auto-import
\`\`\`

**Vite 构建优化：**
\`\`\`javascript
// vite.config.js
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'vue-vendor': ['vue', 'vue-router', 'pinia'],
          'lodash-vendor': ['lodash-es']
        }
      }
    },
    chunkSizeWarningLimit: 1000
  },
  optimizeDeps: {
    include: ['vue', 'vue-router', 'pinia']
  }
});
\`\`\`

### 内存优化

**及时清理副作用：**
组件卸载时及时清理副作用，避免内存泄漏。

\`\`\`vue
<script>
import { onMounted, onUnmounted } from 'vue';

export default {
  setup() {
    let timer = null;
    let observer = null;
    
    onMounted(() => {
      // 定时器
      timer = setInterval(() => {
        console.log('tick');
      }, 1000);
      
      // IntersectionObserver
      observer = new IntersectionObserver((entries) => {
        console.log(entries);
      });
      observer.observe(document.querySelector('#target'));
    });
    
    onUnmounted(() => {
      // 清理定时器
      if (timer) {
        clearInterval(timer);
      }
      
      // 清理 Observer
      if (observer) {
        observer.disconnect();
      }
    });
  }
};
</script>
\`\`\`

**避免闭包引用：**
闭包可能引用组件实例，导致内存泄漏。

\`\`\`javascript
// ❌ 不推荐：闭包引用组件实例
export default {
  setup() {
    const state = reactive({ count: 0 });
    
    setTimeout(() => {
      // 闭包引用了 state
      state.count++;
    }, 5000);
  }
};

// ✅ 推荐：使用 onUnmounted 清理
export default {
  setup() {
    const state = reactive({ count: 0 });
    let cancelled = false;
    
    onUnmounted(() => {
      cancelled = true;
    });
    
    setTimeout(() => {
      if (!cancelled) {
        state.count++;
      }
    }, 5000);
  }
};
\`\`\`

### 性能监控

**使用 Performance API：**
\`\`\`javascript
// 测量组件渲染时间
const measureRender = (name, fn) => {
  const start = performance.now();
  fn();
  const end = performance.now();
  console.log(\`\${name} rendered in \${(end - start).toFixed(2)}ms\`);
};

// 测量 API 请求时间
const measureRequest = async (name, fn) => {
  const start = performance.now();
  const result = await fn();
  const end = performance.now();
  console.log(\`\${name} fetched in \${(end - start).toFixed(2)}ms\`);
  return result;
};
\`\`\`

**使用 Vue Devtools：**
Vue Devtools 提供了性能分析功能，可以帮助定位性能问题。

### 最佳实践总结

1. **渲染优化**：合理使用 v-if/v-show，避免 v-for 与 v-if 同时使用，正确使用 key
2. **组件优化**：使用函数式组件、异步组件、keep-alive 缓存
3. **响应式优化**：选择合适的响应式 API，合理使用 computed 和 watch
4. **打包优化**：代码分割、Tree Shaking、Vite 构建优化
5. **内存优化**：及时清理副作用，避免闭包引用
6. **性能监控**：使用 Performance API 和 Vue Devtools 监控性能
`,
  createdAt: '2026-03-16',
  updatedAt: '2026-03-16'
};
