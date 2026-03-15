import { KnowledgeItem } from '@/types/knowledge';

export const typescript_advanced: KnowledgeItem = {
      id: 'typescript-advanced',
      title: 'TypeScript 高级特性与类型体操',
      category: 'javascript',
      difficulty: 'hard',
      tags: ['TypeScript', '高级类型', '类型体操', '类型挑战'],
      content: `## TypeScript 高级特性与类型体操

TypeScript 的类型系统非常强大，支持类型级别的编程，通过类型体操可以实现复杂的类型逻辑。

### 条件类型

**条件类型的语法：**
- T extends U ? X : Y
- 类似于 JavaScript 的三元运算符
- 在类型级别进行条件判断

**条件类型的应用：**
- 类型守卫
- 类型推断
- 条件类型分发

**infer 关键字：**
- 在条件类型中推断类型
- 只能在 extends 子句中使用
- 用于提取函数参数、返回值、Promise 类型等

### 映射类型

**映射类型的语法：**
- { [P in K]: T }
- 遍历类型 K 的所有属性
- 为每个属性创建新的类型

**映射修饰符：**
- readonly：只读属性
- ?: 可选属性
- -readonly：移除只读修饰符
- -?: 移除可选修饰符

**键重映射：**
- 使用 as 关键字重映射键
- 支持模板字面量类型
- 可以基于原键创建新键

### 模板字面量类型

**模板字面量类型的语法：**
- \`\${T}\`
- 类似于 JavaScript 的模板字符串
- 在类型级别进行字符串操作

**模板字面量类型的应用：**
- 创建事件名称类型
- 构建 API 路径类型
- 生成 CSS 类名类型

**字符串操作类型：**
- Uppercase<S>：转为大写
- Lowercase<S>：转为小写
- Capitalize<S>：首字母大写
- Uncapitalize<S>：首字母小写

### 递归类型

**递归类型的概念：**
- 类型引用自身
- 用于定义嵌套结构
- 支持深度操作

**递归类型的应用：**
- 深度只读类型
- 深度部分类型
- 递归数据结构

### 类型体操实践

**类型挑战：**
- Pick：拣选属性
- Readonly：只读属性
- TupleToObject：元组转对象
- First：获取数组第一个元素
- Length：获取元组长度
- Exclude：排除类型
- Awaited：Promise 解包：Awaited是TypeScript内置的工具类型，用于解包Promise的返回值类型，将Promise<T>中的T提取出来，如Awaited<Promise<string>>会得到string类型，Awaited<Promise<number>>会得到number类型，常用于处理异步函数的返回类型，提高类型安全性
- If：条件类型
- Concat：数组连接
- Includes：数组包含

**实用类型工具：**
- DeepReadonly：深度只读
- DeepPartial：深度部分
- DeepRequired：深度必需
- DeepMutable：深度可变
- DeepNullable：深度可空
- JsonValue：JSON 值类型

### 最佳实践

- 从简单到复杂，循序渐进
- 理解类型系统的工作原理
- 合理使用类型体操，避免过度复杂
- 为复杂类型添加注释
- 利用类型推断减少显式类型标注
- 测试类型定义的正确性
- 参考 TypeScript 官方类型定义
- 学习社区中的类型体操技巧`,
      createdAt: '2026-03-14',
      updatedAt: '2026-03-14'
    };
