import { KnowledgeItem } from '@/types/knowledge';

export const monorepo: KnowledgeItem = {
      id: 'monorepo',
      title: 'Monorepo 管理策略',
      category: 'engineering',
      difficulty: 'medium',
      tags: ['工程化', 'Monorepo', '代码管理', '工具链'],
      content: `## Monorepo 管理策略

Monorepo 是一种代码管理策略，将多个项目或包放在一个代码仓库中管理，适合大型前端项目和多团队协作。

### Monorepo 概念

**定义：**
- 单一代码仓库
- 包含多个项目或包
- 共享依赖和工具
- 统一的开发流程

**优势：**
- 代码共享：减少重复代码
- 依赖管理：统一版本控制
- 跨项目协作：便于代码复用
- 原子提交：关联变更一起提交
- 统一的构建和测试

**挑战：**
- 仓库体积增大
- 构建时间延长
- 权限管理复杂
- 工具链要求高

### Monorepo vs Multirepo

**Monorepo 优势：**
- 统一的版本管理
- 原子提交：跨包变更一起提交
- 代码共享：减少重复
- 简化的依赖管理
- 统一的 CI/CD

**Multirepo 优势：**
- 独立的版本控制
- 灵活的权限管理
- 更小的仓库体积
- 独立的 CI/CD
- 更快的克隆速度

**选择建议：**
- Monorepo：适合紧密相关的项目、共享代码多、团队协作频繁：Monorepo是一种将多个项目集中在一个代码仓库中管理的策略，特别适合需要共享代码的微前端项目、多包npm库、企业内部工具链等场景，优势包括统一版本管理、原子提交（一次提交可以同时修改多个包）、便捷的代码共享、简化的依赖管理，典型代表是Babel、React、Angular等大型开源项目都采用Monorepo管理
- Multirepo：适合独立的项目、权限隔离要求高、发布周期不同：Multirepo是传统的多仓库管理策略，每个项目或包有独立的代码仓库，适合团队规模较大、需要严格的权限控制、不同项目有不同的发布周期的场景，优势包括仓库体积小（克隆速度快）、独立的CI/CD流水线、灵活的权限管理，缺点是跨仓库代码共享困难、依赖版本管理复杂、原子提交无法实现

### Monorepo 工具

**Turborepo：**
- 由 Vercel 开发
- 高性能构建系统
- 智能缓存
- 适合 JavaScript/TypeScript 项目

**pnpm workspace：**
- 快速的包管理
- 节省磁盘空间
- 支持 workspace 配置
- 适合 Node.js 项目

**Nx：**
- 强大的代码生成
- 智能缓存
- 依赖图分析
- 适合 Angular 和 React 项目

**Lerna：**
- 成熟的 Monorepo 工具
- 版本管理
- 发布管理
- 适合 npm 包管理

**Rush：**
- 由 Microsoft 开发
- 高性能
- 严格的版本控制
- 适合大型企业项目

### Monorepo 结构

**目录结构：**
- packages/：存放所有包
- apps/：存放应用
- configs/：共享配置
- scripts/：共享脚本
- docs/：文档

**包类型：**
- 应用包：完整的应用
- 库包：可重用的代码
- 工具包：构建和开发工具
- 配置包：共享配置

**依赖管理：**
- 根级依赖：共享依赖
- 包级依赖：特定包的依赖
- 版本管理：统一版本控制
- 依赖解析：避免版本冲突

### 工作流程

**开发流程：**
- 分支策略：feature、bugfix、release
- 代码审查：跨包变更审查
- 测试策略：单元测试、集成测试
- 构建策略：增量构建、并行构建

**发布流程：**
- 版本管理：语义化版本
- 变更日志：自动生成
- 发布策略：独立发布、批量发布
- 回滚机制：快速回滚

**CI/CD 集成：**
- 增量 CI：只构建变更的包
- 缓存策略：缓存构建结果
- 测试策略：只测试相关包
- 部署策略：按环境部署

### 最佳实践

**代码组织：**
- 合理划分包边界
- 清晰的依赖关系
- 避免循环依赖
- 统一的代码规范

**性能优化：**
- 增量构建
- 智能缓存
- 并行执行
- 按需构建

**版本管理：**
- 语义化版本
- 自动版本控制
- 变更日志生成
- 发布流程自动化

**团队协作：**
- 清晰的贡献指南
- 代码审查流程
- 文档管理
- 知识共享

### 工具配置

**Turborepo 配置：**

\`\`\`json
// turbo.json
{
  "$schema": "https://turbo.build/schema.json",
  "pipeline": {
    "build": {
      "dependsOn": ["^build"],
      "outputs": ["dist/**", ".next/**", "!.next/cache/**"],
      "cache": true
    },
    "test": {
      "dependsOn": ["build"],
      "outputs": [],
      "cache": true
    },
    "lint": {
      "outputs": [],
      "cache": true
    },
    "dev": {
      "cache": false,
      "persistent": true
    }
  }
}
\`\`\`

**pnpm workspace 配置：**

\`\`\`json
// pnpm-workspace.yaml
packages:
  - 'apps/*'
  - 'packages/*'
  - 'configs/*'

// package.json (根目录)
{
  "name": "my-monorepo",
  "private": true,
  "scripts": {
    "dev": "turbo run dev",
    "build": "turbo run build",
    "test": "turbo run test",
    "lint": "turbo run lint",
    "clean": "turbo run clean && rm -rf node_modules"
  },
  "devDependencies": {
    "turbo": "^1.10.0",
    "typescript": "^5.0.0"
  }
}
\`\`\`

**Nx 配置：**

\`\`\`json
// nx.json
{
  "$schema": "./node_modules/nx/schemas/nx-schema.json",
  "npmScope": "my-org",
  "affected": {
    "defaultBase": "main"
  },
  "cli": {
    "defaultCollection": "@nx/react"
  },
  "tasksRunnerOptions": {
    "default": {
      "runner": "nx/tasks-runners/default",
      "options": {
        "cacheableOperations": ["build", "test", "lint", "e2e"]
      }
    }
  },
  "workspaceLayout": {
    "appsDir": "apps",
    "libsDir": "packages"
  }
}

// tsconfig.base.json
{
  "compilerOptions": {
    "composite": true,
    "declaration": true,
    "declarationMap": true,
    "paths": {
      "@my-org/ui": ["packages/ui/src/index.ts"],
      "@my-org/utils": ["packages/utils/src/index.ts"],
      "@my-org/types": ["packages/types/src/index.ts"]
    }
  }
}
\`\`\`

### 项目结构示例

\`\`\`
my-monorepo/
├── apps/
│   ├── web/                    # Web 应用
│   │   ├── package.json
│   │   ├── tsconfig.json
│   │   └── src/
│   │       ├── App.tsx
│   │       └── main.tsx
│   └── admin/                  # 管理后台
│       ├── package.json
│       ├── tsconfig.json
│       └── src/
│           └── main.tsx
├── packages/
│   ├── ui/                     # UI 组件库
│   │   ├── package.json
│   │   ├── tsconfig.json
│   │   └── src/
│   │       ├── Button.tsx
│   │       ├── Input.tsx
│   │       └── index.ts
│   ├── utils/                  # 工具函数
│   │   ├── package.json
│   │   ├── tsconfig.json
│   │   └── src/
│   │       ├── format.ts
│   │       ├── validate.ts
│   │       └── index.ts
│   └── types/                  # 类型定义
│       ├── package.json
│       ├── tsconfig.json
│       └── src/
│           └── index.ts
├── configs/
│   ├── eslint/
│   ├── prettier/
│   └── tsconfig/
├── scripts/
│   ├── release.js
│   └── clean.js
├── package.json
├── pnpm-workspace.yaml
├── turbo.json
└── tsconfig.base.json
\`\`\`

### 包依赖示例

\`\`\`json
// packages/ui/package.json
{
  "name": "@my-org/ui",
  "version": "1.0.0",
  "main": "./dist/index.js",
  "types": "./dist/index.d.ts",
  "scripts": {
    "build": "tsc",
    "dev": "tsc --watch",
    "lint": "eslint src",
    "test": "jest"
  },
  "dependencies": {
    "@my-org/utils": "workspace:*",
    "@my-org/types": "workspace:*"
  },
  "peerDependencies": {
    "react": "^18.0.0",
    "react-dom": "^18.0.0"
  },
  "devDependencies": {
    "@types/react": "^18.0.0",
    "@types/react-dom": "^18.0.0",
    "typescript": "^5.0.0"
  }
}

// apps/web/package.json
{
  "name": "@my-org/web",
  "version": "1.0.0",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "lint": "eslint src",
    "test": "vitest"
  },
  "dependencies": {
    "@my-org/ui": "workspace:*",
    "@my-org/utils": "workspace:*",
    "@my-org/types": "workspace:*",
    "react": "^18.0.0",
    "react-dom": "^18.0.0",
    "react-router-dom": "^6.0.0"
  },
  "devDependencies": {
    "@types/react": "^18.0.0",
    "@types/react-dom": "^18.0.0",
    "vite": "^4.0.0",
    "typescript": "^5.0.0"
  }
}
\`\`\`

### CI/CD 集成

\`\`\`yaml
# .github/workflows/ci.yml
name: CI

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main, develop]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup pnpm
        uses: pnpm/action-setup@v2
        with:
          version: 8
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: 18
          cache: 'pnpm'
      
      - name: Install dependencies
        run: pnpm install --frozen-lockfile
      
      - name: Run linter
        run: pnpm run lint
      
      - name: Run tests
        run: pnpm run test
      
      - name: Build
        run: pnpm run build
\`\`\`

### 最佳实践

**代码组织：**
- 合理划分包边界
- 清晰的依赖关系
- 避免循环依赖
- 统一的代码规范

**性能优化：**
- 增量构建
- 智能缓存
- 并行执行
- 按需构建

**版本管理：**
- 语义化版本
- 自动版本控制
- 变更日志生成
- 发布流程自动化

**团队协作：**
- 清晰的贡献指南
- 代码审查流程
- 文档管理
- 知识共享

`,
      createdAt: '2026-03-14',
      updatedAt: '2026-03-14'
    };
