import { KnowledgeItem } from '@/types/knowledge';

export const vue_router: KnowledgeItem = {
      id: 'vue-router',
      title: 'Vue Router 路由管理',
      category: 'vue',
      difficulty: 'medium',
      tags: ['Vue', 'Router', '路由', 'SPA'],
      content: `## Vue Router 路由管理

Vue Router 是 Vue 官方的路由管理器，用于构建单页应用（SPA）的导航系统。

### 基本配置

**安装：**
- npm install vue-router@4（Vue 3）
- npm install vue-router@3（Vue 2）

**创建路由实例：**
- createRouter()（Vue 3）
- new VueRouter()（Vue 2）
- 配置 routes 数组

**挂载路由：**
- Vue 3：app.use(router)：Vue 3使用app.use()方法注册插件和路由，router是Vue Router 4的实例，通过app.use(router)将路由实例挂载到Vue应用上，Vue Router 4是专门为Vue 3设计的路由库，提供了更好的TypeScript支持、组合式API支持、路由守卫改进等特性
- Vue 2：new Vue({ router })：Vue 2在创建根实例时将router作为选项传入，router是Vue Router 3的实例，Vue Router 3是Vue 2官方路由库，支持动态路由、嵌套路由、路由守卫等功能，是Vue 2项目路由管理的标准选择

**基本路由配置：**

\`\`\`javascript
const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/about',
    component: About
  }
];
\`\`\`

### 路由模式

**hash 模式：**
- URL 中包含 #：Vue Router默认使用Hash模式，URL中包含#符号如example.com/#/home，这种模式下路由变化不会触发页面刷新，兼容性更好不需要服务器配置，Hash模式利用window.location.hash进行路由管理，是Vue Router的默认模式
- 兼容性好
- 不需要服务器配置

**history 模式：**
- 更美观的 URL
- 需要服务器配置（404 重定向）
- 依赖 HTML5 History API

**abstract 模式：**
- 无浏览器环境下使用
- 如 Node.js 环境

### 路由导航

**声明式导航：**
- <router-link> 组件
- to 属性指定目标路由
- active-class 高亮当前路由
- exact-active-class 精确匹配高亮

**编程式导航：**
- router.push()：导航到新位置
- router.replace()：替换当前位置
- router.go()：前进或后退
- router.back()：后退
- router.forward()：前进

**导航守卫：**
- 全局前置守卫：router.beforeEach()
- 全局解析守卫：router.beforeResolve()
- 全局后置守卫：router.afterEach()
- 路由独享守卫：beforeEnter
- 组件内守卫：beforeRouteEnter、beforeRouteUpdate、beforeRouteLeave

### 路由参数

**动态路由：**
- path: '/user/:id'
- this.$route.params.id（Vue 2）
- useRoute().params.id（Vue 3）

**查询参数：**
- path: '/search?keyword=vue'
- this.$route.query.keyword（Vue 2）
- useRoute().query.keyword（Vue 3）

**路由元信息：**
- meta 字段
- 存储路由相关信息
- 如权限、标题等

### 嵌套路由

**配置：**
- children 数组
- 相对路径
- 多级嵌套

**示例：**

\`\`\`javascript
{
  path: '/user',
  component: User,
  children: [
    {
      path: 'profile',
      component: UserProfile
    },
    {
      path: 'settings',
      component: UserSettings
    }
  ]
}
\`\`\`

### 路由懒加载

**动态导入：**
- () => import('./views/Home.vue')
- 减少初始打包体积
- 按需加载组件

**Webpack 魔法注释：**
- /* webpackChunkName: "home" */
- 自定义 chunk 名称
- 更好的代码分割

**预加载：**
- webpackPrefetch: true
- 浏览器空闲时预加载
- 提升用户体验

### 路由守卫应用

**权限控制：**
- 检查用户登录状态
- 验证权限
- 重定向未授权用户

**页面标题：**
- 基于路由元信息设置标题
- 全局后置守卫
- 动态标题

**数据预加载：**
- 导航前获取数据
- 避免白屏
- 提升用户体验

### 最佳实践

- 使用路由懒加载
- 合理使用导航守卫
- 配置 404 页面
- 处理路由错误
- 测试路由功能
- 性能优化策略`,
      createdAt: '2026-03-14',
      updatedAt: '2026-03-14'
    };
