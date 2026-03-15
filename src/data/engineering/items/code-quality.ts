import { KnowledgeItem } from '@/types/knowledge';

export const code_quality: KnowledgeItem = {
      id: 'code-quality',
      title: '代码质量与规范',
      category: 'engineering',
      difficulty: 'medium',
      tags: ['工程化', '代码质量', '代码规范', 'ESLint', 'Prettier'],
      content: `## 代码质量与规范

代码质量和规范是前端工程化的重要组成部分，影响着代码的可维护性、可读性和可靠性。

### 代码质量概念

**定义：**
- 代码的可维护性
- 代码的可读性
- 代码的可靠性
- 代码的性能

**重要性：**
- 减少 bug
- 提高开发效率
- 便于团队协作
- 降低维护成本

**衡量指标：**
- 代码覆盖率
- 圈复杂度
- 代码重复率
- 静态分析结果

### 代码规范工具

**ESLint：**
- 代码质量检查
- 语法错误检测
- 代码风格检查
- 可定制规则

**Prettier：**
- 代码格式化
- 统一代码风格
- 减少代码审查冲突
- 支持多种语言

**Stylelint：**
- CSS 代码检查
- 样式规范
- 避免样式错误
- 提高样式可维护性

**Commitlint：**
- 提交信息规范
- 统一提交格式
- 便于自动化工具
- 提高提交信息可读性

### 代码规范配置

**ESLint 配置：**
- 基础配置：eslint:recommended
- 框架配置：@typescript-eslint/recommended, plugin:react/recommended
- 自定义规则：根据团队需求
- 忽略文件：.eslintignore

**Prettier 配置：**
- 缩进：2 空格或 4 空格
- 引号：单引号或双引号
- 分号：是否使用
- 尾随逗号：是否使用

**Stylelint 配置：**
- 基础配置：stylelint-config-standard
- 自定义规则：根据项目需求
- 忽略文件：.stylelintignore

**Commitlint 配置：**
- 配置：@commitlint/config-conventional
- 提交格式：type(scope): subject
- 类型：feat, fix, docs, style, refactor, test, chore

### 集成与自动化

**编辑器集成：**
- VS Code：ESLint, Prettier 插件
- WebStorm：内置支持
- Sublime Text：插件支持
- 自动格式化和检查

**Git 钩子：**
- pre-commit：提交前检查
- pre-push：推送前检查
- commit-msg：提交信息检查
- 使用 husky 管理钩子

**CI/CD 集成：**
- 代码质量检查
- 代码风格检查
- 测试覆盖率
- 静态分析

### 代码审查

**审查流程：**
- 提交代码 → 创建 PR
- 自动检查 → 人工审查
- 代码讨论 → 修复问题
- 合并代码 → 部署

**审查要点：**
- 代码质量：逻辑正确性
- 代码风格：符合规范
- 性能：是否优化
- 安全：是否有漏洞
- 测试：是否有测试

**审查工具：**
- GitHub Pull Requests
- GitLab Merge Requests
- Bitbucket Pull Requests
- CodeReview 平台

### 最佳实践

**编码规范：**
- 变量命名：语义化
- 函数长度：控制在 50 行内
- 代码注释：关键逻辑注释
- 错误处理：合理的错误处理

**团队协作：**
- 统一的代码规范
- 定期代码审查
- 代码质量监控
- 持续改进

**工具链：**
- 统一的开发环境
- 自动化工具集成
- 定期更新依赖
- 工具配置共享

### 学习资源

**规范指南：**
- Airbnb JavaScript 风格指南
- Google JavaScript 风格指南
- 前端代码规范最佳实践
- 团队代码规范制定

**工具文档：**
- ESLint 文档
- Prettier 文档
- Stylelint 文档
- Commitlint 文档

### 案例分析

**大型项目代码规范：**
- Google 的代码规范
- Facebook 的代码规范
- 阿里巴巴的代码规范
- 腾讯的代码规范

**实施效果：**
- 代码质量提升
- 开发效率提高
- 团队协作改善
- 维护成本降低`,
      createdAt: '2026-03-14',
      updatedAt: '2026-03-14'
    };
