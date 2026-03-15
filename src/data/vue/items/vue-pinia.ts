import { KnowledgeItem } from '@/types/knowledge';

export const vue_pinia: KnowledgeItem = {
      id: 'vue-pinia',
      title: 'Pinia 状态管理',
      category: 'vue',
      difficulty: 'medium',
      tags: ['Vue', 'Pinia', '状态管理', 'Store'],
      content: `## Pinia 状态管理

Pinia 是 Vue 3 官方推荐的状态管理库，替代了 Vuex，提供了更简洁的 API 和更好的 TypeScript 支持。

### Pinia 简介

**Pinia 与 Vuex 的区别：**
- 更简洁的 API，无需 mutations
- 更好的 TypeScript 支持
- 支持组合式 API
- 更小的包体积
- 更灵活的存储结构

**安装：**
- npm install pinia
- Vue 3：app.use(createPinia())：Vue 3使用createPinia()创建Pinia实例，通过app.use()方法注册到Vue应用，Pinia是Vue 3官方推荐的状态管理库，提供了更简洁的API、更好的TypeScript支持、模块化状态管理、自动订阅等特性，是Vue 3项目状态管理的首选
- Vue 2：需要 @vue/composition-api：Vue 2使用Pinia需要安装@vue/composition-api插件来支持Composition API，配置后可以在Vue 2项目中使用createPinia()创建状态存储，@vue/composition-api是Vue 2使用Composition API的官方适配器，使得Vue 2也可以享受Composition API带来的代码组织优势

### 基本使用

**创建 Store：**
- defineStore() 函数
- 第一个参数是 store 的唯一 ID
- 第二个参数是 store 的配置

**State：**
- 定义初始状态
- 可以是函数或对象
- 响应式数据

**Getters：**
- 计算属性
- 自动缓存
- 可以访问其他 getters

**Actions：**
- 异步操作
- 可以提交状态更改
- 可以访问其他 actions

### Store 配置

**State 定义：**

\`\`\`javascript
export const useCounterStore = defineStore('counter', {
  state: () => ({
    count: 0,
    name: 'Pinia'
  }),
  getters: {
    doubleCount: (state) => state.count * 2,
    doubleCountPlusOne: (state, getters) => getters.doubleCount + 1
  },
  actions: {
    increment() {
      this.count++
    },
    async incrementAsync() {
      await new Promise(resolve => setTimeout(resolve, 1000))
      this.count++
    }
  }
})
\`\`\`

**组件中使用：**

\`\`\`javascript
import { useCounterStore } from '@/stores/counter'

export default {
  setup() {
    const store = useCounterStore()
    
    return {
      store,
      increment: () => store.increment()
    }
  }
}
\`\`\`

### 高级特性

**模块化：**
- 按功能创建多个 store
- 模块之间可以相互访问
- 更好的代码组织

**持久化：**
- pinia-plugin-persistedstate
- 自动保存到 localStorage
- 支持自定义存储

**插件系统：**
- 扩展 Pinia 功能
- 自定义插件
- 官方插件生态

**调试：**
- Vue DevTools 支持：Vue DevTools是Vue官方浏览器扩展，提供组件树检查、组件状态查看、Vuex状态管理、时间旅行调试等功能，可以直观地查看组件层级、数据状态、事件流，是Vue开发调试的必备工具，支持Vue 2和Vue 3，在Chrome和Firefox商店可以安装
- 时间旅行
- 状态快照

### 最佳实践

- 按功能划分 store
- 使用 TypeScript 类型
- 合理使用 actions 处理异步
- 避免直接修改 state
- 测试 store 逻辑
- 性能优化策略`,
      createdAt: '2026-03-14',
      updatedAt: '2026-03-14'
    };
