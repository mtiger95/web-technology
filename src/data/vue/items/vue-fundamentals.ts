import { KnowledgeItem } from '@/types/knowledge';

export const vue_fundamentals: KnowledgeItem = {
      id: 'vue-fundamentals',
      title: 'Vue 核心原理与响应式系统',
      category: 'vue',
      difficulty: 'medium',
      tags: ['Vue', '响应式', '数据绑定'],
      content: `## Vue 核心原理与响应式系统

Vue.js 是一个渐进式 JavaScript 框架，其核心特性是响应式系统，理解其原理对于掌握 Vue 至关重要。Vue的响应式系统是其最核心的特性之一，它使得数据变化能够自动反映到视图上，极大地简化了前端开发。Vue 2和Vue 3使用了不同的响应式实现方式，各有优劣。

### 💚 响应式系统原理

**Object.defineProperty (Vue 2)：**
Vue 2使用Object.defineProperty的getter和setter来实现响应式系统。这种方式通过遍历data选项中的所有属性，将每个属性转换为getter/setter，从而在属性被访问或修改时触发相应的依赖收集和派发更新。Object.defineProperty的缺点是数组索引和新增属性无法被自动检测到，需要使用Vue.set或this.$set方法手动添加响应式。此外，Object.defineProperty无法检测到对象属性的删除，需要使用Vue.delete方法。

\`\`\`javascript
// Vue 2 响应式实现原理
function defineReactive(obj, key, val) {
  const dep = new Dep(); // 每个属性都有一个依赖收集器
  
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get() {
      // 依赖收集：将当前的Watcher添加到依赖列表
      if (Dep.target) {
        dep.depend();
      }
      return val;
    },
    set(newVal) {
      if (newVal === val) return;
      val = newVal;
      // 派发更新：通知所有依赖的Watcher重新渲染
      dep.notify();
    }
  });
}

// 依赖收集器
class Dep {
  constructor() {
    this.subs = []; // 存储所有Watcher
  }
  
  depend() {
    if (Dep.target) {
      this.subs.push(Dep.target);
    }
  }
  
  notify() {
    this.subs.forEach(sub => sub.update());
  }
}

// 观察者
class Watcher {
  constructor(vm, expr, cb) {
    this.vm = vm;
    this.expr = expr;
    this.cb = cb;
    // 触发getter，进行依赖收集
    Dep.target = this;
    this.value = vm[expr];
    Dep.target = null;
  }
  
  update() {
    const newVal = this.vm[this.expr];
    this.cb(newVal);
  }
}

// Observer：将对象的所有属性转换为响应式
class Observer {
  constructor(obj) {
    this.walk(obj);
  }
  
  walk(obj) {
    Object.keys(obj).forEach(key => {
      defineReactive(obj, key, obj[key]);
    });
  }
}

// Vue 2 响应式的局限性
const vm = new Vue({
  data: {
    items: ['a', 'b', 'c'],
    user: { name: 'Alice' }
  }
});

// ❌ 无法检测到数组索引赋值
vm.items[0] = 'x'; // 不是响应式的
// ✅ 使用 Vue.set
Vue.set(vm.items, 0, 'x'); // 响应式的

// ❌ 无法检测到数组长度修改
vm.items.length = 2; // 不是响应式的
// ✅ 使用 splice
vm.items.splice(2); // 响应式的

// ❌ 无法检测到新增属性
vm.user.age = 25; // 不是响应式的
// ✅ 使用 Vue.set
Vue.set(vm.user, 'age', 25); // 响应式的
\`\`\`

**Proxy (Vue 3)：**
Vue 3使用ES6 Proxy实现响应式系统，解决了Vue 2的所有局限性。Proxy可以直接代理整个对象而非对象的属性，支持数组索引检测、新增属性检测、删除属性检测等。Proxy是懒加载的，只有当属性被访问时才创建响应式连接，性能更好。Vue 3还引入了reactive、ref、computed等响应式API，提供了更灵活的响应式编程方式。

\`\`\`javascript
// Vue 3 响应式实现原理
function reactive(target) {
  return new Proxy(target, {
    get(target, key, receiver) {
      // 依赖收集
      track(target, key);
      const result = Reflect.get(target, key, receiver);
      // 如果是对象，递归代理
      if (typeof result === 'object' && result !== null) {
        return reactive(result);
      }
      return result;
    },
    set(target, key, value, receiver) {
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
      // 派发更新
      trigger(target, key);
      return result;
    }
  });
}

// 依赖收集
const targetMap = new WeakMap();
let activeEffect = null;

function track(target, key) {
  if (!activeEffect) return;
  
  let depsMap = targetMap.get(target);
  if (!depsMap) {
    targetMap.set(target, (depsMap = new Map()));
  }
  
  let dep = depsMap.get(key);
  if (!dep) {
    depsMap.set(key, (dep = new Set()));
  }
  
  dep.add(activeEffect);
}

// 派发更新
function trigger(target, key) {
  const depsMap = targetMap.get(target);
  if (!depsMap) return;
  
  const dep = depsMap.get(key);
  if (dep) {
    dep.forEach(effect => effect());
  }
}

// effect 函数
function effect(fn) {
  activeEffect = fn;
  fn();
  activeEffect = null;
}

// Vue 3 响应式的优势
const state = reactive({
  items: ['a', 'b', 'c'],
  user: { name: 'Alice' }
});

// ✅ 可以检测到数组索引赋值
state.items[0] = 'x'; // 响应式的

// ✅ 可以检测到数组长度修改
state.items.length = 2; // 响应式的

// ✅ 可以检测到新增属性
state.user.age = 25; // 响应式的

// ✅ 可以检测到删除属性
delete state.user.name; // 响应式的
\`\`\`

**依赖收集流程：**
依赖收集是Vue响应式系统的核心机制。当组件渲染时，会访问数据属性，触发getter，将当前正在执行的副作用函数（effect）收集到该属性的依赖列表中。当属性被修改时，触发setter，通知所有依赖该属性的副作用函数重新执行，从而更新视图。这个过程是自动的，开发者无需手动管理依赖关系。

\`\`\`javascript
// 依赖收集流程示例
const state = reactive({ count: 0 });

// 组件渲染函数
function render() {
  // 访问 state.count，触发 getter
  // 将 render 函数添加到 count 的依赖列表
  console.log('Count:', state.count);
}

// 收集依赖
effect(render); // render 被添加到 count 的依赖列表

// 修改数据，触发更新
state.count++; // 触发 setter，执行 render 函数
\`\`\`

### 💻 代码示例：Vue 响应式实现

#### 🔄 Vue 2 响应式实现

\`\`\`javascript
// 简化的 Vue 2 响应式实现
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

class Dep {
  constructor() {
    this.subs = [];
  }
  
  depend() {
    if (Dep.target) {
      this.subs.push(Dep.target);
    }
  }
  
  notify() {
    this.subs.forEach(sub => sub.update());
  }
}

Dep.target = null;
\`\`\`

#### Vue 3 响应式实现

\`\`\`javascript
// Vue 3 使用 Proxy 实现响应式
function reactive(target) {
  return new Proxy(target, {
    get(target, key, receiver) {
      // 依赖收集
      track(target, key);
      const result = Reflect.get(target, key, receiver);
      return result;
    },
    set(target, key, value, receiver) {
      const oldValue = target[key];
      const result = Reflect.set(target, key, value, receiver);
      // 派发更新
      if (oldValue !== value) {
        trigger(target, key);
      }
      return result;
    }
  });
}

// 依赖收集
const targetMap = new WeakMap();
let activeEffect = null;

function track(target, key) {
  if (!activeEffect) return;
  
  let depsMap = targetMap.get(target);
  if (!depsMap) {
    targetMap.set(target, (depsMap = new Map()));
  }
  
  let dep = depsMap.get(key);
  if (!dep) {
    depsMap.set(key, (dep = new Set()));
  }
  
  dep.add(activeEffect);
}

// 派发更新
function trigger(target, key) {
  const depsMap = targetMap.get(target);
  if (!depsMap) return;
  
  const dep = depsMap.get(key);
  if (dep) {
    dep.forEach(effect => effect());
  }
}

// 使用示例
const state = reactive({
  count: 0,
  name: 'Vue'
});

effect(() => {
  console.log(\`Count: \${state.count}\`);
});

state.count++; // 触发更新
\`\`\`

### 数据绑定

**单向绑定：**
- v-bind 指令
- 从数据到视图的单向数据流
- 适合表单元素以外的场景

**双向绑定：**
- v-model 指令
- 数据与视图的双向同步
- 本质是 v-bind 和 v-on 的语法糖

**计算属性：**
- computed 选项
- 基于依赖自动缓存
- 只在依赖变化时重新计算

**监听器：**
- watch 选项
- 响应数据变化
- 支持深度监听和立即执行

### 代码示例

#### 数据绑定示例

\`\`\`vue
<template>
  <div>
    <!-- 单向绑定 -->
    <p>{{ message }}</p>
    <p v-text="message"></p>
    <div v-html="htmlContent"></div>
    
    <!-- 属性绑定 -->
    <img :src="imageUrl" :alt="imageAlt">
    <a :href="linkUrl">Link</a>
    <div :class="{ active: isActive }">Class Binding</div>
    <div :style="{ color: textColor }">Style Binding</div>
    
    <!-- 双向绑定 -->
    <input v-model="username" placeholder="Username">
    <textarea v-model="description"></textarea>
    <select v-model="selectedOption">
      <option value="option1">Option 1</option>
      <option value="option2">Option 2</option>
    </select>
    
    <!-- 修饰符 -->
    <input v-model.lazy="username">
    <input v-model.number="age" type="number">
    <input v-model.trim="message">
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: 'Hello, Vue!',
      htmlContent: '<strong>Bold Text</strong>',
      imageUrl: '/image.jpg',
      imageAlt: 'Image',
      linkUrl: 'https://example.com',
      isActive: true,
      textColor: 'red',
      username: '',
      description: '',
      selectedOption: 'option1',
      age: 0
    };
  }
};
</script>
\`\`\`

#### 计算属性和监听器示例

\`\`\`vue
<template>
  <div>
    <p>First Name: {{ firstName }}</p>
    <p>Last Name: {{ lastName }}</p>
    <p>Full Name: {{ fullName }}</p>
    <p>Full Name (Computed): {{ fullNameComputed }}</p>
    
    <input v-model="firstName" placeholder="First Name">
    <input v-model="lastName" placeholder="Last Name">
  </div>
</template>

<script>
export default {
  data() {
    return {
      firstName: 'John',
      lastName: 'Doe',
      fullName: ''
    };
  },
  
  computed: {
    // 计算属性：基于依赖自动缓存
    fullNameComputed() {
      console.log('Computed property called');
      return \`\${this.firstName} \${this.lastName}\`;
    },
    
    // 只读计算属性
    fullNameReadOnly: {
      get() {
        return \`\${this.firstName} \${this.lastName}\`;
      }
    },
    
    // 可写计算属性
    fullNameWritable: {
      get() {
        return \`\${this.firstName} \${this.lastName}\`;
      },
      set(newValue) {
        const names = newValue.split(' ');
        this.firstName = names[0];
        this.lastName = names[names.length - 1];
      }
    }
  },
  
  watch: {
    // 监听器：响应数据变化
    firstName(newVal, oldVal) {
      console.log(\`First name changed from \${oldVal} to \${newVal}\`);
      this.fullName = \`\${newVal} \${this.lastName}\`;
    },
    
    lastName(newVal, oldVal) {
      console.log(\`Last name changed from \${oldVal} to \${newVal}\`);
      this.fullName = \`\${this.firstName} \${newVal}\`;
    },
    
    // 深度监听
    user: {
      handler(newVal, oldVal) {
        console.log('User changed:', newVal);
      },
      deep: true
    },
    
    // 立即执行
    message: {
      handler(newVal) {
        console.log('Message:', newVal);
      },
      immediate: true
    }
  }
};
</script>
\`\`\`

### 组件系统

**组件注册：**
- 全局注册：Vue.component()
- 局部注册：components 选项
- 单文件组件：.vue 文件

**组件通信：**
- props：父向子传递数据
- emit：子向父传递事件
- provide/inject：跨层级通信
- event bus：事件总线
- Vuex/Pinia：状态管理：Vuex是Vue 2官方推荐的状态管理库，提供集中式状态管理、状态变更追踪、组件间通信等能力，采用单向数据流模式，Pinia是Vue 3官方推荐的状态管理库，相比Vuex更轻量、TypeScript支持更好、模块化更简洁，两者都是Vue项目中管理应用状态的常用选择

**插槽：**
- 匿名插槽
- 命名插槽
- 作用域插槽
- 动态插槽

### 代码示例

#### 组件注册示例

\`\`\`javascript
// 全局注册
Vue.component('my-component', {
  template: '<div>Global Component</div>'
});

// 局部注册
export default {
  components: {
    'my-component': MyComponent
  }
};

// 单文件组件
// MyComponent.vue
<template>
  <div>
    <h2>{{ title }}</h2>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'MyComponent',
  props: {
    title: {
      type: String,
      required: true
    }
  }
};
</script>
\`\`\`

#### 组件通信示例

\`\`\`vue
<!-- 父组件 -->
<template>
  <div>
    <h1>Parent Component</h1>
    <p>Message from child: {{ childMessage }}</p>
    
    <!-- Props -->
    <ChildComponent
      :parent-message="parentMessage"
      @child-event="handleChildEvent"
    />
  </div>
</template>

<script>
import ChildComponent from './ChildComponent.vue';

export default {
  components: {
    ChildComponent
  },
  data() {
    return {
      parentMessage: 'Hello from parent',
      childMessage: ''
    };
  },
  methods: {
    handleChildEvent(message) {
      this.childMessage = message;
    }
  }
};
</script>

<!-- 子组件 -->
<template>
  <div>
    <h2>Child Component</h2>
    <p>Message from parent: {{ parentMessage }}</p>
    
    <button @click="sendMessage">Send Message to Parent</button>
  </div>
</template>

<script>
export default {
  props: {
    parentMessage: {
      type: String,
      required: true
    }
  },
  methods: {
    sendMessage() {
      this.$emit('child-event', 'Hello from child');
    }
  }
};
</script>

<!-- provide/inject 示例 -->
<!-- 祖先组件 -->
<template>
  <div>
    <ParentComponent />
  </div>
</template>

<script>
export default {
  provide() {
    return {
      theme: 'dark',
      toggleTheme: this.toggleTheme
    };
  },
  methods: {
    toggleTheme() {
      this.theme = this.theme === 'dark' ? 'light' : 'dark';
    }
  }
};
</script>

<!-- 后代组件 -->
<template>
  <div :class="theme">
    <h2>Descendant Component</h2>
    <button @click="toggleTheme">Toggle Theme</button>
  </div>
</template>

<script>
export default {
  inject: ['theme', 'toggleTheme']
};
</script>
\`\`\`

#### 插槽示例

\`\`\`vue
<!-- 基础插槽 -->
<!-- 父组件 -->
<template>
  <div>
    <MyComponent>
      <p>This is slot content</p>
    </MyComponent>
  </div>
</template>

<!-- 子组件 -->
<template>
  <div>
    <h2>My Component</h2>
    <slot></slot>
  </div>
</template>

<!-- 命名插槽 -->
<!-- 父组件 -->
<template>
  <div>
    <MyComponent>
      <template v-slot:header>
        <h1>Header Content</h1>
      </template>
      
      <template #default>
        <p>Default Content</p>
      </template>
      
      <template #footer>
        <p>Footer Content</p>
      </template>
    </MyComponent>
  </div>
</template>

<!-- 子组件 -->
<template>
  <div>
    <slot name="header"></slot>
    <slot></slot>
    <slot name="footer"></slot>
  </div>
</template>

<!-- 作用域插槽 -->
<!-- 父组件 -->
<template>
  <div>
    <MyComponent>
      <template #default="{ user, index }">
        <p>{{ index }}: {{ user.name }}</p>
      </template>
    </MyComponent>
  </div>
</template>

<!-- 子组件 -->
<template>
  <div>
    <slot
      v-for="(user, index) in users"
      :user="user"
      :index="index"
    ></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: [
        { name: 'Alice' },
        { name: 'Bob' }
      ]
    };
  }
};
</script>
\`\`\`

### 生命周期

**Vue 2 生命周期：**
- beforeCreate：实例创建前
- created：实例创建后
- beforeMount：挂载前
- mounted：挂载后
- beforeUpdate：更新前
- updated：更新后
- beforeDestroy：销毁前
- destroyed：销毁后

**Vue 3 生命周期：**
- beforeCreate → setup()
- created → setup()
- beforeMount → onBeforeMount
- mounted → onMounted
- beforeUpdate → onBeforeUpdate
- updated → onUpdated
- beforeUnmount → onBeforeUnmount
- unmounted → onUnmounted

### 代码示例

#### Vue 2 生命周期示例

\`\`\`vue
<template>
  <div>
    <p>Count: {{ count }}</p>
    <button @click="increment">Increment</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0
    };
  },
  
  beforeCreate() {
    console.log('beforeCreate: 实例创建前');
    // 无法访问 data、methods、computed
  },
  
  created() {
    console.log('created: 实例创建后');
    // 可以访问 data、methods、computed
    // 常用于初始化数据、发起网络请求
    this.fetchData();
  },
  
  beforeMount() {
    console.log('beforeMount: 挂载前');
    // DOM 还未渲染
  },
  
  mounted() {
    console.log('mounted: 挂载后');
    // DOM 已渲染
    // 常用于操作 DOM、初始化第三方库
    this.initChart();
  },
  
  beforeUpdate() {
    console.log('beforeUpdate: 更新前');
    // 数据变化，DOM 还未更新
  },
  
  updated() {
    console.log('updated: 更新后');
    // DOM 已更新
    // 避免在这里修改数据，可能导致无限循环
  },
  
  beforeDestroy() {
    console.log('beforeDestroy: 销毁前');
    // 清理定时器、事件监听器等
    this.cleanup();
  },
  
  destroyed() {
    console.log('destroyed: 销毁后');
    // 实例已销毁
  },
  
  methods: {
    increment() {
      this.count++;
    },
    
    fetchData() {
      // 发起网络请求
      fetch('/api/data')
        .then(response => response.json())
        .then(data => {
          this.data = data;
        });
    },
    
    initChart() {
      // 初始化图表
      this.chart = new Chart(this.$refs.chart, {
        // 配置项
      });
    },
    
    cleanup() {
      // 清理定时器
      if (this.timer) {
        clearInterval(this.timer);
      }
      
      // 清理图表
      if (this.chart) {
        this.chart.destroy();
      }
    }
  }
};
</script>
\`\`\`

#### Vue 3 生命周期示例

\`\`\`vue
<template>
  <div>
    <p>Count: {{ count }}</p>
    <button @click="increment">Increment</button>
  </div>
</template>

<script>
import { ref, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from 'vue';

export default {
  setup() {
    const count = ref(0);
    let timer = null;
    
    // 挂载前
    onBeforeMount(() => {
      console.log('onBeforeMount: 挂载前');
    });
    
    // 挂载后
    onMounted(() => {
      console.log('onMounted: 挂载后');
      // 初始化定时器
      timer = setInterval(() => {
        console.log('Timer tick');
      }, 1000);
    });
    
    // 更新前
    onBeforeUpdate(() => {
      console.log('onBeforeUpdate: 更新前');
    });
    
    // 更新后
    onUpdated(() => {
      console.log('onUpdated: 更新后');
    });
    
    // 卸载前
    onBeforeUnmount(() => {
      console.log('onBeforeUnmount: 卸载前');
    });
    
    // 卸载后
    onUnmounted(() => {
      console.log('onUnmounted: 卸载后');
      // 清理定时器
      if (timer) {
        clearInterval(timer);
      }
    });
    
    const increment = () => {
      count.value++;
    };
    
    return {
      count,
      increment
    };
  }
};
</script>
\`\`\`

### 最佳实践

- 优先使用 Composition API
- 合理使用计算属性和监听器
- 组件拆分要合理，保持单一职责
- 使用 TypeScript 提高代码质量
- 合理使用 Vuex/Pinia 进行状态管理
- 避免直接修改 props
- 使用 key 属性提高列表渲染性能
- 合理使用 v-if 和 v-show

`,
      createdAt: '2026-03-14',
      updatedAt: '2026-03-14'
    };
