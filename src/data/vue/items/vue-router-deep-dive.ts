import { KnowledgeItem } from '@/types/knowledge';

export const vue_router_deep_dive: KnowledgeItem = {
  id: 'vue-router-deep-dive',
  title: 'Vue Router 深度详解',
  category: 'vue',
  difficulty: 'medium',
  tags: ['Vue Router', '路由', '导航守卫', '路由传参'],
  content: `## Vue Router 深度详解

Vue Router 是 Vue.js 官方的路由管理器，与 Vue.js 深度集成，让构建单页面应用变得简单。本文详细讲解 Vue Router 的核心概念、高级用法和最佳实践。

### 一、Vue Router 基础

#### 1. 安装与配置

**Vue Router 4（Vue3）安装：**
\`\`\`bash
npm install vue-router@4
\`\`\`

**基本配置：**
\`\`\`javascript
// router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
\`\`\`

**在 main.js 中注册：**
\`\`\`javascript
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

const app = createApp(App);
app.use(router);
app.mount('#app');
\`\`\`

#### 2. 路由模式

**History 模式（推荐）：**
\`\`\`javascript
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(),
  routes
});
\`\`\`

URL 示例：https://example.com/user/123

**Hash 模式：**
\`\`\`javascript
import { createRouter, createWebHashHistory } from 'vue-router';

const router = createRouter({
  history: createWebHashHistory(),
  routes
});
\`\`\`

URL 示例：https://example.com/#/user/123

**Memory 模式（适用于 Node.js 环境）：**
\`\`\`javascript
import { createRouter, createMemoryHistory } from 'vue-router';

const router = createRouter({
  history: createMemoryHistory(),
  routes
});
\`\`\`

### 二、路由配置详解

#### 1. 路由参数

**动态路由参数：**
\`\`\`javascript
const routes = [
  {
    path: '/user/:id',
    name: 'User',
    component: User,
    props: true // 将路由参数作为 props 传递
  }
];
\`\`\`

**组件中获取参数：**
\`\`\`vue
<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();
// 方式 1：通过 route.params
console.log(route.params.id);

// 方式 2：通过 props（需要设置 props: true）
defineProps(['id']);
</script>
\`\`\`

**多个动态参数：**
\`\`\`javascript
{
  path: '/user/:userId/post/:postId',
  name: 'UserPost',
  component: UserPost
}
\`\`\`

**可选参数：**
\`\`\`javascript
{
  path: '/user/:id?',
  name: 'User',
  component: User
}
\`\`\`

**通配符参数（Vue Router 4 已移除，使用 catch-all 路由）：**
\`\`\`javascript
{
  path: '/:pathMatch(.*)*',
  name: 'NotFound',
  component: NotFound
}
\`\`\`

#### 2. 查询参数

**传递查询参数：**
\`\`\`vue
<template>
  <router-link :to="{ path: '/search', query: { q: 'vue', page: 1 } }">
    搜索 Vue
  </router-link>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

// 编程式导航
router.push({
  path: '/search',
  query: { q: 'vue', page: 1 }
});
</script>
\`\`\`

**获取查询参数：**
\`\`\`vue
<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();
console.log(route.query.q); // 'vue'
console.log(route.query.page); // '1'
</script>
\`\`\`

#### 3. 路由传参方式对比

| 方式 | 位置 | 刷新后 | 适用场景 |
|------|------|--------|----------|
| params | URL 路径 | 保留 | 资源标识 |
| query | URL 查询 | 保留 | 搜索、过滤 |
| state | history.state | 丢失 | 临时数据 |

**使用 state 传参：**
\`\`\`javascript
router.push('/user/123', {
  state: { from: 'home' }
});

// 获取 state
const location = router.currentRoute.value.state.from;
\`\`\`

### 三、导航守卫

#### 1. 全局守卫

**全局前置守卫：**
\`\`\`javascript
router.beforeEach((to, from, next) => {
  console.log('全局前置守卫');
  console.log('to:', to.path);
  console.log('from:', from.path);
  
  // 权限检查示例
  const token = localStorage.getItem('token');
  if (to.meta.requiresAuth && !token) {
    next('/login');
  } else {
    next();
  }
});
\`\`\`

**全局解析守卫：**
\`\`\`javascript
router.beforeResolve((to, from) => {
  console.log('全局解析守卫');
  // 在所有组件内守卫和异步路由组件被解析后调用
});
\`\`\`

**全局后置守卫：**
\`\`\`javascript
router.afterEach((to, from) => {
  console.log('全局后置守卫');
  // 页面标题设置
  document.title = to.meta.title || '默认标题';
});
\`\`\`

#### 2. 路由独享守卫

\`\`\`javascript
const routes = [
  {
    path: '/dashboard',
    component: Dashboard,
    beforeEnter: (to, from, next) => {
      console.log('路由独享守卫');
      const token = localStorage.getItem('token');
      if (!token) {
        next('/login');
      } else {
        next();
      }
    }
  }
];
\`\`\`

#### 3. 组件内守卫

\`\`\`vue
<script>
export default {
  // 进入组件前
  beforeRouteEnter(to, from, next) {
    console.log('beforeRouteEnter');
    // 不能访问 this，因为组件实例还没创建
    next(vm => {
      // 可以通过 vm 访问组件实例
      console.log(vm);
    });
  },
  
  // 组件更新前
  beforeRouteUpdate(to, from, next) {
    console.log('beforeRouteUpdate');
    // 可以访问 this
    next();
  },
  
  // 离开组件前
  beforeRouteLeave(to, from, next) {
    console.log('beforeRouteLeave');
    const answer = window.confirm('确定要离开吗？未保存的更改将丢失。');
    next(answer);
  }
};
</script>
\`\`\`

#### 4. 守卫执行流程

\`\`\`
1. 导航触发
2. 组件内 beforeRouteLeave（离开的组件）
3. 全局 beforeEach
4. 路由独享 beforeEnter
5. 组件内 beforeRouteEnter
6. 全局 beforeResolve
7. 导航确认
8. 全局 afterEach
9. 组件内 beforeRouteUpdate（复用的组件）
10. 渲染完成
\`\`\`

### 四、路由懒加载

#### 1. 基本懒加载

\`\`\`javascript
const routes = [
  {
    path: '/home',
    // 使用动态导入实现懒加载
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/about',
    component: () => import('@/views/About.vue')
  }
];
\`\`\`

#### 2. 命名 chunk

\`\`\`javascript
const routes = [
  {
    path: '/user/:id',
    // 使用 webpackChunkName 命名 chunk
    component: () => import(/* webpackChunkName: "user" */ '@/views/User.vue')
  },
  {
    path: '/post/:id',
    component: () => import(/* webpackChunkName: "post" */ '@/views/Post.vue')
  }
];
\`\`\`

#### 3. 按功能模块分组

\`\`\`javascript
// 用户相关路由打包到一起
const User = () => import(/* webpackChunkName: "user" */ '@/views/User.vue');
const UserProfile = () => import(/* webpackChunkName: "user" */ '@/views/UserProfile.vue');
const UserSettings = () => import(/* webpackChunkName: "user" */ '@/views/UserSettings.vue');

const routes = [
  { path: '/user', component: User },
  { path: '/user/profile', component: UserProfile },
  { path: '/user/settings', component: UserSettings }
];
\`\`\`

### 五、嵌套路由

#### 1. 配置嵌套路由

\`\`\`javascript
const routes = [
  {
    path: '/user/:id',
    component: User,
    children: [
      {
        path: 'profile',
        component: UserProfile
      },
      {
        path: 'settings',
        component: UserSettings
      },
      {
        path: '',
        redirect: 'profile'
      }
    ]
  }
];
\`\`\`

#### 2. 在父组件中渲染子路由

\`\`\`vue
<!-- User.vue -->
<template>
  <div class="user">
    <h1>用户页面</h1>
    <nav>
      <router-link :to="\`/user/\${$route.params.id}/profile\`">
        个人资料
      </router-link>
      <router-link :to="\`/user/\${$route.params.id}/settings\`">
        设置
      </router-link>
    </nav>
    <!-- 子路由出口 -->
    <router-view />
  </div>
</template>
\`\`\`

### 六、编程式导航

#### 1. 基本导航

\`\`\`vue
<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

// 字符串路径
router.push('/home');

// 对象路径
router.push({ path: '/home' });

// 命名路由
router.push({ name: 'Home' });

// 带参数
router.push({ name: 'User', params: { id: 123 } });

// 带查询参数
router.push({ path: '/search', query: { q: 'vue' } });
</script>
\`\`\`

#### 2. 导航返回

\`\`\`javascript
// 返回上一页
router.go(-1);

// 或者
router.back();

// 前进
router.forward();
\`\`\`

#### 3. 替换当前记录

\`\`\`javascript
// 使用 replace 模式
router.replace('/home');

// 或者
router.push({ path: '/home', replace: true });
\`\`\`

### 七、路由元信息

#### 1. 配置元信息

\`\`\`javascript
const routes = [
  {
    path: '/dashboard',
    component: Dashboard,
    meta: {
      requiresAuth: true,
      title: '仪表盘',
      roles: ['admin', 'user']
    }
  },
  {
    path: '/admin',
    component: Admin,
    meta: {
      requiresAuth: true,
      title: '管理后台',
      roles: ['admin']
    }
  }
];
\`\`\`

#### 2. 在守卫中使用元信息

\`\`\`javascript
router.beforeEach((to, from, next) => {
  // 检查是否需要认证
  if (to.meta.requiresAuth) {
    const token = localStorage.getItem('token');
    if (!token) {
      return next('/login');
    }
  }
  
  // 检查角色权限
  if (to.meta.roles) {
    const userRole = getUserRole();
    if (!to.meta.roles.includes(userRole)) {
      return next('/403');
    }
  }
  
  next();
});
\`\`\`

#### 3. 在组件中使用元信息

\`\`\`vue
<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();
console.log(route.meta.title);
console.log(route.meta.requiresAuth);
</script>
\`\`\`

### 八、路由过渡动画

#### 1. 基础过渡效果

\`\`\`vue
<template>
  <router-view v-slot="{ Component }">
    <transition name="fade">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
\`\`\`

#### 2. 根据路由深度设置过渡

\`\`\`vue
<template>
  <router-view v-slot="{ Component, route }">
    <transition :name="route.meta.transition || 'fade'">
      <component :is="Component" />
    </transition>
  </router-view>
</template>
\`\`\`

### 九、滚动行为

#### 1. 自定义滚动行为

\`\`\`javascript
const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // 如果使用了浏览器的后退/前进按钮
    if (savedPosition) {
      return savedPosition;
    }
    
    // 始终滚动到顶部
    return { top: 0 };
    
    // 或者滚动到特定元素
    // return { el: '#main', top: 100 };
  }
});
\`\`\`

#### 2. 异步滚动行为

\`\`\`javascript
scrollBehavior: async (to, from, savedPosition) => {
  if (savedPosition) {
    return savedPosition;
  }
  
  if (to.hash) {
    return {
      el: to.hash,
      behavior: 'smooth'
    };
  }
  
  return { top: 0, behavior: 'smooth' };
}
\`\`\`

### 十、最佳实践

1. **使用命名路由**：避免硬编码路径，便于维护
2. **路由懒加载**：减少初始包体积
3. **合理使用守卫**：统一处理权限和认证
4. **使用元信息**：集中管理路由配置
5. **错误处理**：添加 404 页面和错误处理
6. **类型安全**：使用 TypeScript 定义路由类型

\`\`\`typescript
// TypeScript 类型定义
import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue')
  }
];
\`\`\`
`,
  createdAt: '2026-03-16',
  updatedAt: '2026-03-16'
};
