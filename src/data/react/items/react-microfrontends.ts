import { KnowledgeItem } from '@/types/knowledge';

export const react_microfrontends: KnowledgeItem = {
      id: 'react-microfrontends',
      title: 'React 微前端架构实践',
      category: 'react',
      difficulty: 'hard',
      tags: ['React', '微前端', 'Module Federation', '架构'],
      content: `## React 微前端架构实践

微前端是将大型前端应用拆分为多个独立部署的小型应用的架构模式。

### 微前端核心概念

**什么是微前端：**
- 将大型应用拆分为多个小型应用
- 每个微应用独立开发、部署、维护
- 集成到同一个容器应用中

**优势：**
- 团队独立开发，加快迭代速度
- 技术栈独立选择
- 故障隔离，提高可靠性
- 按需加载，提高性能

**挑战：**
- 集成复杂性
- 样式隔离
- 状态管理
- 路由协调

### 实现方案

**Module Federation：**
- Webpack 5 提供的功能：Webpack 5提供了持久化缓存、模块联邦（Module Federation）、改进的Tree Shaking等新特性，模块联邦允许在不同构建之间共享代码，是微前端架构的重要基础，持久化缓存可以显著加快构建速度，是现代React项目构建工具的主流选择
- 动态加载远程模块
- 支持运行时共享依赖

**Single-SPA：**
- 微前端框架
- 支持多种框架
- 路由管理和应用生命周期

**qiankun：**
- 基于 Single-SPA 的微前端框架
- 提供更完善的功能
- 支持 React、Vue、Angular 等

### 实践要点

**应用拆分：**
- 按业务域拆分
- 合理定义微应用边界
- 避免过度拆分

**通信机制：**
- 基于事件的通信
- 共享状态管理
-  props 传递

**样式隔离：**
- CSS Modules：CSS Modules是CSS模块化解决方案，通过将CSS类名转换为唯一的哈希值来实现作用域隔离，避免样式冲突，支持组合、变量等特性，可以在React组件中直接导入使用，是React项目中常用的CSS组织方式，配合webpack的css-loader或Vite的CSS模块支持使用
- Shadow DOM：Shadow DOM是Web Components的核心特性，提供了完全的样式隔离，React可以通过React Shadow DOM库使用Shadow DOM，Shadow DOM内部的样式不会影响外部，外部样式也不会影响内部，适合创建可复用的组件，特别是需要严格样式隔离的组件，如第三方组件库
- CSS-in-JS：CSS-in-JS是将CSS样式写在JavaScript中的解决方案，主流库包括styled-components和emotion，优点是可以在JS中使用CSS特性如嵌套、变量、混合宏等，组件样式与组件代码共存便于维护，缺点是运行时开销和可能的包体积增加，适合需要动态样式或组件化样式管理的项目

**依赖共享：**
- 共享基础依赖
- 避免依赖冲突
- 版本管理策略

### 最佳实践

**容器应用：**
- 负责路由管理
- 提供共享服务
- 处理应用加载和卸载

**微应用：**
- 独立开发和部署
- 定义清晰的接口
- 处理自己的状态和逻辑

**CI/CD：**
- 独立的构建和部署流程
- 自动化测试
- 集成测试

**监控和日志：**
- 统一的监控系统
- 分布式日志
- 性能监控`,
      createdAt: '2026-03-14',
      updatedAt: '2026-03-14'
    };
