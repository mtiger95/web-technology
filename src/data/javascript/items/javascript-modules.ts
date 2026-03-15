import { KnowledgeItem } from '@/types/knowledge';

export const javascript_modules: KnowledgeItem = {
      id: 'javascript-modules',
      title: 'JavaScript 模块化开发与实践',
      category: 'javascript',
      difficulty: 'medium',
      tags: ['JavaScript', '模块化', 'ES modules', 'CommonJS'],
      content: `## JavaScript 模块化开发与实践

模块化是现代 JavaScript 开发的重要特性，它使代码更加组织化、可维护和可复用。

### 模块化的演进

**全局变量：**
- 最早的模块化方式
- 容易导致命名冲突
- 代码难以维护

**IIFE (立即执行函数表达式)：**
- 创建私有作用域
- 避免全局变量污染
- 支持模块模式

**CommonJS：**
- Node.js 的模块系统
- 使用 require() 和 module.exports
- 同步加载模块

**AMD (Asynchronous Module Definition)：**
- 异步加载模块
- 使用 define() 和 require()
- 适合浏览器环境

**ES modules：**
- ECMAScript 标准模块系统
- 使用 import 和 export
- 支持静态分析
- 浏览器和 Node.js 都支持

### ES modules 核心特性

**导出：**
- 命名导出：export const name = value;
- 默认导出：export default value;
- 重导出：export { name } from './module';

**导入：**
- 命名导入：import { name } from './module';
- 默认导入：import name from './module';
- 命名空间导入：import * as module from './module';
- 动态导入：import('./module').then(module => {});

**模块解析：**
- 相对路径：./module
- 绝对路径：/module
- 裸模块：module

### 模块化工具

**打包工具：**
- Webpack：功能丰富，生态完整
- Rollup：适合库打包，Tree-shaking 效果好：Rollup是JavaScript模块打包器，专注于库打包，输出代码简洁高效，Tree-shaking效果优秀，可以自动移除未使用的代码，Rollup使用ES模块格式，支持插件系统，是许多前端框架（如Vue、React）底层使用的打包工具
- Vite：快速的开发服务器，适合现代前端：Vite是新一代前端构建工具，利用ES模块原生支持实现极速的冷启动和热更新，开发体验极佳，支持TypeScript、CSS预处理器、各种框架模板，Vite使用Rollup进行生产构建，生态丰富，是现代前端项目的首选构建工具

**构建工具：**
- Babel：转译 ES6+ 代码：Babel是JavaScript编译器，用于将ES6+、TypeScript、JSX等现代JavaScript语法转换为浏览器兼容的ES5代码，Babel通过插件系统支持各种语法转换和polyfill，是现代前端开发的基础工具，支持React、Vue等框架的JSX语法
- TypeScript：类型检查和转译
- SWC：快速的 JavaScript/TypeScript 编译器

**包管理器：**
- npm：Node.js 官方包管理器
- yarn：Facebook 开发的包管理器
- pnpm：快速的包管理器，节省磁盘空间

### 模块化最佳实践

**模块设计：**
- 单一职责原则
- 合理的模块大小
- 清晰的模块接口

**命名规范：**
- 文件名使用小写和连字符
- 模块名与文件名保持一致
- 避免使用保留字

**依赖管理：**
- 明确的依赖关系
- 避免循环依赖
- 合理使用 peer dependencies

**代码组织：**
- 按功能组织模块
- 公共模块与业务模块分离
- 建立清晰的目录结构

**测试：**
- 模块化测试
- 单元测试
- 集成测试

### 实际应用

**前端应用：**
- 组件模块化
- 工具函数模块化
- 状态管理模块化

**Node.js 应用：**
- 路由模块化
- 中间件模块化
- 服务模块化

**库开发：**
- 核心功能模块化
- 插件系统
- 按需导入`,
      createdAt: '2026-03-14',
      updatedAt: '2026-03-14'
    };
