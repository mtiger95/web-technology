import { KnowledgeItem } from '@/types/knowledge';

export const vue_composition_api: KnowledgeItem = {
      id: 'vue-composition-api',
      title: 'Vue 3 Composition API 详解',
      category: 'vue',
      difficulty: 'medium',
      tags: ['Vue 3', 'Composition API', 'setup'],
      content: `## Vue 3 Composition API 详解

Composition API 是 Vue 3 引入的新特性，提供了更灵活的代码组织方式，解决了 Options API 的一些局限性。

### Composition API 基础

**setup() 函数：**
- 组件的入口点
- 在 beforeCreate 和 created 之前执行
- 接收 props 和 context 两个参数
- 返回的对象会暴露给模板和其他选项

**响应式 API：**
- ref()：创建响应式引用
- reactive()：创建响应式对象
- computed()：创建计算属性
- watch()：监听响应式数据
- watchEffect()：自动追踪依赖的副作用

**生命周期钩子：**
- onBeforeMount
- onMounted
- onBeforeUpdate
- onUpdated
- onBeforeUnmount
- onUnmounted
- onErrorCaptured
- onRenderTracked
- onRenderTriggered

### 优势与使用场景

**代码组织：**
- 按功能组织代码
- 逻辑复用更灵活
- 减少选项 API 的命名冲突

**TypeScript 支持：**
- 更好的类型推断
- 更清晰的类型定义
- 减少类型断言

**逻辑复用：**
- Composables 模式：Composables是Vue 3引入的组合式API设计模式，通过抽取可复用的逻辑函数实现代码复用，类似React的Custom Hooks，使用use开头命名约定，可以在Vue组件中复用状态和逻辑，Vue官方提供了useMouse、useFetch等内置Composables，开发者也可以创建自定义Composables，是Vue 3最强大的代码复用方式
- 可重用的逻辑函数
- 类似于 React Hooks

**大型应用：**
- 更好的代码组织
- 更清晰的逻辑分离
- 便于维护和测试

### 响应式 API 详解

**ref：**
- 用于基本类型和复杂类型
- 通过 .value 访问和修改
- 在模板中自动解包
- 适合单个值的响应式

**reactive：**
- 用于对象和数组
- 直接访问和修改属性
- 深度响应
- 不支持基本类型

**computed：**
- 自动缓存
- 基于依赖更新
- 可以设置 getter 和 setter
- 适合派生状态

**watch：**
- 可以监听多个源
- 支持深度监听
- 支持立即执行
- 支持回调函数

**watchEffect：**
- 自动追踪依赖
- 立即执行
- 返回停止函数
- 适合副作用处理

### 实际应用

**状态管理：**
- 使用 reactive 和 ref 管理组件状态
- 复杂状态可以使用 Pinia
- 避免过度使用全局状态

**表单处理：**
- 使用 ref 管理表单数据
- 计算属性验证
- 响应式验证规则

**API 调用：**
- 在 onMounted 中发起请求
- 使用 ref 管理加载状态
- watch 监听参数变化

**动画和过渡：**
- 使用 ref 管理动画状态
- watchEffect 处理动画逻辑
- 结合 CSS 动画

### 迁移策略

**从 Options API 迁移：**
- 逐步迁移
- 混合使用两种 API
- 使用 Composition API 重构复杂逻辑

**常见模式：**
- 提取可复用逻辑为 composables
- 按功能组织代码
- 利用 TypeScript 类型

### 最佳实践

- 合理使用 ref 和 reactive
- 按功能组织 composables
- 避免在 setup 中使用 this
- 正确处理异步操作
- 合理使用生命周期钩子
- 测试 composables
- 文档化 composables 的用法`,
      createdAt: '2026-03-14',
      updatedAt: '2026-03-14'
    };
