import { KnowledgeItem } from '@/types/knowledge';

export const vue_advanced_features: KnowledgeItem = {
  id: 'vue-advanced-features',
  title: 'Vue 高级特性与核心原理',
  category: 'vue',
  difficulty: 'hard',
  tags: ['Vue', '高级特性', '虚拟 DOM', 'Diff 算法'],
  content: `## Vue 高级特性与核心原理

Vue.js 作为现代前端框架，拥有许多强大的高级特性。深入理解这些特性对于掌握 Vue 至关重要，也是面试中的高频考点。

### 虚拟 DOM 与 Diff 算法

**虚拟 DOM 原理：**
虚拟 DOM（Virtual DOM）是 Vue 的核心机制之一，它是一个用 JavaScript 对象来描述真实 DOM 树的结构。当数据变化时，Vue 不会直接操作真实 DOM，而是先在内存中创建新的虚拟 DOM 树，然后与旧的虚拟 DOM 树进行对比（Diff），找出最小的变更集合，最后批量更新到真实 DOM 上。这种方式可以大大减少 DOM 操作次数，提高性能。

虚拟 DOM 的优势在于：
1. 跨平台能力：虚拟 DOM 不依赖于浏览器，可以在 Node.js、移动端等环境运行
2. 性能优化：通过 Diff 算法减少不必要的 DOM 操作
3. 可预测性：数据驱动视图，状态变化可追踪

\`\`\`javascript
// 虚拟 DOM 节点结构
const vnode = {
  tag: 'div',
  props: {
    id: 'app',
    class: 'container'
  },
  children: [
    {
      tag: 'h1',
      props: {},
      children: [{ text: 'Hello Vue' }]
    },
    {
      tag: 'p',
      props: { class: 'description' },
      children: [{ text: 'Virtual DOM Example' }]
    }
  ]
};

// 渲染函数
function render(vnode) {
  const el = document.createElement(vnode.tag);
  
  // 设置属性
  if (vnode.props) {
    Object.keys(vnode.props).forEach(key => {
      el.setAttribute(key, vnode.props[key]);
    });
  }
  
  // 处理子节点
  if (vnode.children) {
    vnode.children.forEach(child => {
      if (child.text) {
        el.appendChild(document.createTextNode(child.text));
      } else {
        el.appendChild(render(child));
      }
    });
  }
  
  return el;
}
\`\`\`

**Diff 算法原理：**
Vue 的 Diff 算法采用了同层比较策略，时间复杂度为 O(n)。核心思想是通过 key 来追踪节点身份，尽可能复用现有 DOM 节点。Vue 3 在 Vue 2 的基础上进行了优化，引入了编译时优化和更高效的 Diff 策略。

Diff 算法的核心步骤：
1. 同层比较：只比较同一层级的节点
2. Key 优化：通过 key 快速定位可复用节点
3. 双端比较：Vue 2 使用双端指针比较
4. 最长递增子序列：Vue 3 使用 LIS 算法优化节点移动

\`\`\`javascript
// 简化的 Diff 算法
function diff(oldVnode, newVnode) {
  // 如果节点类型不同，直接替换
  if (oldVnode.tag !== newVnode.tag) {
    return { type: 'REPLACE', node: render(newVnode) };
  }
  
  const patches = [];
  
  // 比较属性
  const propsPatches = diffProps(oldVnode.props, newVnode.props);
  if (propsPatches.length > 0) {
    patches.push({ type: 'PROPS', patches: propsPatches });
  }
  
  // 比较子节点
  const childrenPatches = diffChildren(oldVnode.children, newVnode.children);
  if (childrenPatches.length > 0) {
    patches.push({ type: 'CHILDREN', patches: childrenPatches });
  }
  
  return patches;
}

// 属性比较
function diffProps(oldProps, newProps) {
  const patches = [];
  const allProps = { ...oldProps, ...newProps };
  
  Object.keys(allProps).forEach(key => {
    if (oldProps[key] !== newProps[key]) {
      patches.push({
        key,
        oldValue: oldProps[key],
        newValue: newProps[key]
      });
    }
  });
  
  return patches;
}

// 子节点比较（简化版）
function diffChildren(oldChildren, newChildren) {
  const patches = [];
  const maxLength = Math.max(oldChildren.length, newChildren.length);
  
  for (let i = 0; i < maxLength; i++) {
    const oldChild = oldChildren[i];
    const newChild = newChildren[i];
    
    if (!oldChild) {
      patches.push({ type: 'ADD', index: i, node: newChild });
    } else if (!newChild) {
      patches.push({ type: 'REMOVE', index: i });
    } else {
      const childPatch = diff(oldChild, newChild);
      if (childPatch) {
        patches.push({ type: 'UPDATE', index: i, patch: childPatch });
      }
    }
  }
  
  return patches;
}
\`\`\`

**Vue 3 的编译时优化：**
Vue 3 引入了编译时优化，在编译阶段就标记出静态节点和动态节点，运行时可以跳过静态节点的比较。主要优化包括：

1. 静态节点提升（Static Hoisting）：静态节点提升到渲染函数外部
2. 补丁标志（Patch Flags）：标记动态内容类型
3. 缓存事件处理函数：避免重复创建
4. 树结构拍平（Tree Flattening）：优化静态子树

\`\`\`javascript
// Vue 2 编译结果
function render() {
  return h('div', { id: 'app' }, [
    h('h1', {}, this.title), // 动态内容
    h('p', { class: 'static' }, 'Static text') // 静态内容也要比较
  ]);
}

// Vue 3 编译结果（带优化）
const _hoisted_1 = h('p', { class: 'static' }, 'Static text');

function render() {
  return h('div', { id: 'app' }, [
    h('h1', {}, this.title), // 动态内容
    _hoisted_1 // 静态节点直接复用
  ]);
}
\`\`\`

### 响应式系统深度解析

**Vue 2 响应式局限性：**
Vue 2 使用 Object.defineProperty 实现响应式，存在以下局限性：
1. 无法检测对象属性的添加或删除
2. 无法检测数组索引和长度的变化
3. 初始化时需要递归遍历所有属性，性能开销大

\`\`\`javascript
// Vue 2 响应式问题示例
const vm = new Vue({
  data: {
    obj: { a: 1 },
    arr: [1, 2, 3]
  }
});

// 以下操作不会触发视图更新
vm.obj.b = 2; // 新增属性
delete vm.obj.a; // 删除属性
vm.arr[0] = 100; // 修改数组索引
vm.arr.length = 2; // 修改数组长度

// 解决方案
Vue.set(vm.obj, 'b', 2); // 添加响应式属性
Vue.delete(vm.obj, 'a'); // 删除响应式属性
vm.arr.splice(0, 1, 100); // 响应式修改数组
\`\`\`

**Vue 3 Proxy 的优势：**
Vue 3 使用 Proxy 实现响应式，解决了 Vue 2 的所有问题：
1. 可以检测属性的添加和删除
2. 可以检测数组索引和长度的变化
3. 懒代理，只有访问时才递归代理，性能更好
4. 支持 Map、Set、WeakMap、WeakSet 等数据结构

\`\`\`javascript
// Vue 3 Proxy 响应式
function createReactive(target, isReadonly = false) {
  return new Proxy(target, {
    get(target, key, receiver) {
      // 依赖收集
      track(target, key);
      const result = Reflect.get(target, key, receiver);
      
      // 懒代理：只有访问时才代理
      if (typeof result === 'object' && result !== null) {
        return createReactive(result, isReadonly);
      }
      
      return result;
    },
    set(target, key, value, receiver) {
      if (isReadonly) {
        console.warn('Cannot set on readonly object');
        return true;
      }
      
      const oldValue = target[key];
      const result = Reflect.set(target, key, value, receiver);
      
      // 派发更新
      if (oldValue !== value) {
        trigger(target, key);
      }
      
      return result;
    },
    deleteProperty(target, key) {
      const result = Reflect.deleteProperty(target, key);
      trigger(target, key);
      return result;
    },
    has(target, key) {
      track(target, key);
      return Reflect.has(target, key);
    },
    ownKeys(target) {
      track(target, 'iterate');
      return Reflect.ownKeys(target);
    }
  });
}

// 使用示例
const state = createReactive({
  obj: { a: 1 },
  arr: [1, 2, 3]
});

// 以下操作都会触发视图更新
state.obj.b = 2; // ✅ 新增属性
delete state.obj.a; // ✅ 删除属性
state.arr[0] = 100; // ✅ 修改数组索引
state.arr.length = 2; // ✅ 修改数组长度
\`\`\`

### 组件通信高级模式

**跨层级通信：**
除了 props 和 emit，Vue 还提供了多种跨层级通信方式：

1. provide/inject：祖先组件向后代组件注入数据
2. $attrs/$listeners：传递属性和事件
3. $parent/$children：访问父/子组件实例
4. ref：直接访问组件实例

\`\`\`vue
<!-- provide/inject 示例 -->
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
    return {
      theme: 'light'
    };
  },
  methods: {
    updateTheme(newTheme) {
      this.theme = newTheme;
    }
  }
};
</script>

<!-- 后代组件 -->
<script>
export default {
  inject: ['theme', 'updateTheme'],
  methods: {
    toggleTheme() {
      this.updateTheme(this.theme === 'light' ? 'dark' : 'light');
    }
  }
};
</script>
\`\`\`

**作用域插槽高级模式：**
作用域插槽允许父组件访问子组件的数据，实现更灵活的组件组合。

\`\`\`vue
<!-- 子组件：DataTable -->
<template>
  <table>
    <thead>
      <tr>
        <th v-for="column in columns" :key="column.key">
          {{ column.label }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="row in data" :key="row.id">
        <td v-for="column in columns" :key="column.key">
          <slot :name="column.key" :row="row" :value="row[column.key]">
            {{ row[column.key] }}
          </slot>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  props: {
    columns: Array,
    data: Array
  }
};
</script>

<!-- 父组件：使用作用域插槽 -->
<template>
  <DataTable :columns="columns" :data="users">
    <template #name="{ row, value }">
      <router-link :to="'/user/' + row.id">{{ value }}</router-link>
    </template>
    
    <template #email="{ value }">
      <a :href="'mailto:' + value">{{ value }}</a>
    </template>
    
    <template #actions="{ row }">
      <button @click="editUser(row)">编辑</button>
      <button @click="deleteUser(row)">删除</button>
    </template>
  </DataTable>
</template>
\`\`\`

### 异步组件与懒加载

**异步组件：**
异步组件可以按需加载组件，减少初始包体积。

\`\`\`javascript
// Vue 2 异步组件
Vue.component('async-component', function(resolve, reject) {
  // 特殊 require() 告诉 webpack
  // 自动将构建的代码分割成单独的包
  require(['./my-component.vue'], resolve);
});

// Vue 3 异步组件
import { defineAsyncComponent } from 'vue';

const AsyncComponent = defineAsyncComponent(() =>
  import('./components/MyComponent.vue')
);

// 带加载状态的异步组件
const AsyncComponentWithLoading = defineAsyncComponent({
  loader: () => import('./components/MyComponent.vue'),
  loadingComponent: LoadingComponent,
  errorComponent: ErrorComponent,
  delay: 200, // 延迟显示加载组件
  timeout: 3000 // 超时时间
});
\`\`\`

**路由懒加载：**
结合 Vue Router 实现路由级别的代码分割。

\`\`\`javascript
// 路由懒加载
const routes = [
  {
    path: '/home',
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/about',
    component: () => import('@/views/About.vue')
  },
  {
    path: '/user/:id',
    component: () => import('@/views/User.vue'),
    // 命名 chunk
    name: 'User'
  }
];
\`\`\`

### 混入（Mixins）与组合式 API

**Mixins 的优缺点：**
Mixins 是 Vue 2 的代码复用方式，但存在一些缺点：
1. 来源不清晰：无法确定属性来自哪个 mixin
2. 命名冲突：多个 mixin 可能有相同属性
3. 参数传递复杂：需要依赖选项 API 的结构

\`\`\`javascript
// Mixin 示例
const formMixin = {
  data() {
    return {
      formData: {},
      errors: {}
    };
  },
  methods: {
    validateField(field, rules) {
      // 验证逻辑
    },
    submitForm() {
      // 提交逻辑
    }
  }
};

export default {
  mixins: [formMixin],
  data() {
    return {
      formData: { // 会覆盖 mixin 的 formData
        username: '',
        password: ''
      }
    };
  }
};
\`\`\`

**Composition API 的优势：**
Composition API 解决了 Mixins 的所有问题：
1. 来源清晰：通过导入明确来源
2. 无命名冲突：使用解构获取需要的属性
3. 参数传递简单：通过函数参数

\`\`\`javascript
// Composable 示例
// useForm.js
import { ref, reactive } from 'vue';

export function useForm(initialData = {}) {
  const formData = reactive(initialData);
  const errors = ref({});
  const isSubmitting = ref(false);
  
  function validateField(field, rules) {
    // 验证逻辑
  }
  
  async function submitForm(submitFn) {
    isSubmitting.value = true;
    try {
      await submitFn(formData);
    } catch (e) {
      errors.value = e.errors;
    } finally {
      isSubmitting.value = false;
    }
  }
  
  return {
    formData,
    errors,
    isSubmitting,
    validateField,
    submitForm
  };
}

// 组件中使用
import { useForm } from './useForm';

export default {
  setup() {
    const { formData, errors, submitForm } = useForm({
      username: '',
      password: ''
    });
    
    return {
      formData,
      errors,
      submitForm
    };
  }
};
\`\`\`

### 最佳实践

1. **虚拟 DOM 优化**：合理使用 key，避免使用 index 作为 key
2. **响应式优化**：Vue 3 优先使用 ref/reactive，避免不必要的深度响应
3. **组件通信**：优先使用 props/emit，复杂场景使用 provide/inject 或状态管理
4. **代码复用**：Vue 3 优先使用 Composables，避免 Mixins
5. **性能优化**：使用异步组件和路由懒加载减少初始包体积
`,
  createdAt: '2026-03-16',
  updatedAt: '2026-03-16'
};
