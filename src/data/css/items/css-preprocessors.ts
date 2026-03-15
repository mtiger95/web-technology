import { KnowledgeItem } from '@/types/knowledge';

export const css_preprocessors: KnowledgeItem = {
      id: 'css-preprocessors',
      title: 'CSS 预处理器与后处理器',
      category: 'css',
      difficulty: 'medium',
      tags: ['CSS', 'Sass', 'Less', 'PostCSS'],
      content: `## CSS 预处理器与后处理器

CSS 预处理器和后处理器扩展了 CSS 的功能，提高了开发效率和代码可维护性。

### Sass/SCSS

**变量：**
- $primary-color: #007bff;
- 支持各种数据类型
- 作用域：全局和局部

**嵌套：**
- 选择器嵌套
- 属性嵌套
- & 父选择器引用

**混合（Mixins）：**
- @mixin 定义
- @include 调用
- 支持参数和默认值

**继承：**
- @extend 继承选择器
- %placeholder 占位符
- 避免代码重复

**函数：**
- 内置函数：color、string、math
- 自定义函数：@function
- 返回值使用 @return

**控制指令：**
- @if、@else if、@else
- @for、@each、@while
- 逻辑控制流程

**模块化：**
- @import 导入（已废弃）
- @use 使用模块
- @forward 转发模块

### Less

**变量：**
- @primary-color: #007bff;
- 延迟加载
- 作用域规则

**混合：**
- .mixin() 定义和调用
- 支持参数
- 带条件的混合

**嵌套：**
- 选择器嵌套
- & 父选择器
- 媒体查询嵌套

**函数：**
- 内置函数
- 命名空间
- JavaScript 表达式

**导入：**
- @import 导入文件
- 导入选项

### PostCSS

**概念：**
- 用 JavaScript 工具和插件转换 CSS
- 解析 CSS 为 AST
- 插件生态系统

**常用插件：**
- autoprefixer：自动添加浏览器前缀
- postcss-preset-env：现代 CSS 特性
- cssnano：CSS 压缩
- postcss-import：导入文件
- tailwindcss：实用工具类框架

**配置：**
- postcss.config.js
- 插件顺序
- 选项配置

### 代码示例

#### Sass 变量和嵌套

\`\`\`scss
// 变量定义
$primary-color: #007bff;
$secondary-color: #6c757d;
$font-size-base: 16px;
$spacing-unit: 8px;

// 嵌套选择器
.card {
  background-color: white;
  border-radius: 8px;
  padding: $spacing-unit * 2;

  &__header {
    padding: $spacing-unit;
    border-bottom: 1px solid #eee;

    &--highlight {
      background-color: $primary-color;
      color: white;
    }
  }

  &__body {
    padding: $spacing-unit * 2;

    p {
      margin: 0 0 $spacing-unit 0;
      line-height: 1.6;
    }
  }

  &__footer {
    padding: $spacing-unit;
    border-top: 1px solid #eee;
    text-align: right;

    .button {
      margin-left: $spacing-unit;
    }
  }

  &:hover {
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  }
}
\`\`\`

#### Sass 混合（Mixins）

\`\`\`scss
// 定义混合
@mixin button($bg-color: $primary-color, $text-color: white) {
  padding: 10px 20px;
  background-color: $bg-color;
  color: $text-color;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: darken($bg-color, 10%);
  }

  &:active {
    transform: translateY(1px);
  }
}

// 使用混合
.button-primary {
  @include button();
}

.button-secondary {
  @include button($secondary-color);
}

.button-success {
  @include button(#28a745);
}

// 响应式混合
@mixin respond-to($breakpoint) {
  @if $breakpoint == 'small' {
    @media (max-width: 640px) {
      @content;
    }
  } @else if $breakpoint == 'medium' {
    @media (max-width: 768px) {
      @content;
    }
  } @else if $breakpoint == 'large' {
    @media (max-width: 1024px) {
      @content;
    }
  }
}

.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;

  @include respond-to('small') {
    padding: 10px;
  }

  @include respond-to('medium') {
    padding: 15px;
  }
}
\`\`\`

#### PostCSS 配置

\`\`\`javascript
// postcss.config.js
module.exports = {
  plugins: [
    // 自动添加浏览器前缀
    require('autoprefixer')({
      overrideBrowserslist: [
        '> 1%',
        'last 2 versions',
        'not dead'
      ]
    }),
    
    // 现代CSS特性
    require('postcss-preset-env')({
      stage: 3,
      features: {
        'nesting-rules': true
      }
    }),
    
    // CSS压缩
    require('cssnano')({
      preset: 'default'
    })
  ]
};
\`\`\`

### 比较与选择

**Sass vs Less：**
- Sass 功能更强大
- Less 更接近 CSS 语法
- Sass 社区更活跃
- 两者都广泛使用

**预处理器 vs PostCSS：**
- 预处理器：扩展语法
- PostCSS：转换和优化
- 可以结合使用

**选择建议：**
- 新项目推荐 Sass/SCSS
- 需要现代 CSS 特性用 PostCSS
- 大型项目考虑 CSS-in-JS

### 最佳实践

- 建立变量命名规范
- 合理使用嵌套（不超过 3 层）
- 混合 vs 继承的选择
- 模块化管理样式
- 编译后的代码检查
- 版本控制原始文件
- 文档化预处理器代码`,
      createdAt: '2026-03-14',
      updatedAt: '2026-03-14'
    };
