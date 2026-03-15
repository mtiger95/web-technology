import { KnowledgeItem } from '@/types/knowledge';

export const javascript_ecmascript: KnowledgeItem = {
      id: 'javascript-ecmascript',
      title: 'ECMAScript 新特性与最佳实践',
      category: 'javascript',
      difficulty: 'medium',
      tags: ['JavaScript', 'ES6+', '新特性', '语法'],
      content: `## ECMAScript 新特性与最佳实践

ECMAScript 标准不断演进，每年都会发布新版本，带来许多新特性和语法糖。这些新特性不仅提高了开发效率和代码质量，还让 JavaScript 代码更加简洁、可读、可维护。理解并掌握这些新特性对于现代 JavaScript 开发至关重要。

### ES6 (ES2015) 核心特性

**let 和 const 声明：**
ES6 引入了 let 和 const 关键字，解决了 var 声明的变量提升和函数作用域问题。let 声明的变量具有块级作用域，const 声明的变量是常量，不可重新赋值。使用 let 和 const 可以避免很多常见的错误，提高代码的可预测性。

\`\`\`javascript
// var 的问题
console.log(a); // undefined（变量提升）
var a = 10;

for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100);
}
// 输出: 3, 3, 3（函数作用域问题）

// let 解决变量提升
console.log(b); // ReferenceError
let b = 10;

// let 解决循环问题
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100);
}
// 输出: 0, 1, 2（块级作用域）

// const 常量
const PI = 3.14159;
// PI = 3.14; // TypeError

// const 对象属性可修改
const user = { name: 'Alice' };
user.name = 'Bob'; // OK
// user = {}; // TypeError

// 冻结对象使其完全不可变
const frozenUser = Object.freeze({ name: 'Alice' });
// frozenUser.name = 'Bob'; // 静默失败（严格模式下报错）
\`\`\`

**箭头函数：**
箭头函数提供了更简洁的函数语法，并且自动绑定词法 this。箭头函数没有自己的 this、arguments、super 或 new.target，适合用于回调函数和需要保持外层 this 上下文的场景。

\`\`\`javascript
// 传统函数
const add = function(a, b) {
  return a + b;
};

// 箭头函数
const add = (a, b) => a + b;

// 单参数可省略括号
const double = x => x * 2;

// 返回对象需要括号
const createUser = (name, age) => ({ name, age });

// this 绑定示例
const obj = {
  name: 'Alice',
  
  // 传统函数：this 指向调用者
  greetTraditional: function() {
    setTimeout(function() {
      console.log('Hello, ' + this.name); // undefined（this 丢失）
    }, 100);
  },
  
  // 箭头函数：this 继承自外层
  greetArrow: function() {
    setTimeout(() => {
      console.log('Hello, ' + this.name); // 'Hello, Alice'
    }, 100);
  },
  
  // 箭头函数作为方法：this 指向外层作用域
  greetMethod: () => {
    console.log('Hello, ' + this.name); // undefined（this 指向全局）
  },
};

// 箭头函数不能作为构造函数
const Person = (name) => {
  this.name = name;
};
// new Person('Alice'); // TypeError

// 箭头函数没有 arguments
const fn = () => {
  // console.log(arguments); // ReferenceError
};
\`\`\`

**模板字符串：**
模板字符串使用反引号（\`）包裹，支持多行字符串、变量插值和表达式嵌入。模板字符串让字符串拼接更加直观和方便，特别适合生成 HTML 模板、SQL 查询等场景。

\`\`\`javascript
// 基本用法
const name = 'Alice';
const greeting = \`Hello, \${name}!\`;
console.log(greeting); // 'Hello, Alice!'

// 多行字符串
const html = \`
  <div class="card">
    <h2>\${title}</h2>
    <p>\${content}</p>
  </div>
\`;

// 表达式嵌入
const a = 10;
const b = 20;
console.log(\`\${a} + \${b} = \${a + b}\`); // '10 + 20 = 30'

// 嵌套模板
const items = ['Apple', 'Banana', 'Orange'];
const list = \`
  <ul>
    \${items.map(item => \`<li>\${item}</li>\`).join('')}
  </ul>
\`;

// 标签模板
function highlight(strings, ...values) {
  return strings.reduce((result, str, i) => {
    const value = values[i] ? \`<mark>\${values[i]}</mark>\` : '';
    return result + str + value;
  }, '');
}

const search = 'JavaScript';
const text = highlight\`Learning \${search} is fun!\`;
// 'Learning <mark>JavaScript</mark> is fun!'

// 原始字符串
const raw = String.raw\`Line 1\\nLine 2\`;
console.log(raw); // 'Line 1\\nLine 2'（不转义）
\`\`\`

**解构赋值：**
解构赋值允许从数组或对象中提取值，并赋给变量。解构赋值可以简化代码，使数据提取更加直观。支持数组解构、对象解构、函数参数解构等多种形式。

\`\`\`javascript
// 数组解构
const [first, second, ...rest] = [1, 2, 3, 4, 5];
console.log(first); // 1
console.log(second); // 2
console.log(rest); // [3, 4, 5]

// 跳过元素
const [, , third] = [1, 2, 3];
console.log(third); // 3

// 默认值
const [a = 10, b = 20] = [1];
console.log(a, b); // 1, 20

// 交换变量
let x = 1, y = 2;
[x, y] = [y, x];

// 对象解构
const user = { name: 'Alice', age: 25, city: 'NYC' };
const { name, age, country = 'USA' } = user;
console.log(name, age, country); // 'Alice', 25, 'USA'

// 重命名
const { name: userName, age: userAge } = user;
console.log(userName, userAge); // 'Alice', 25

// 嵌套解构
const company = {
  name: 'Tech Corp',
  address: {
    city: 'San Francisco',
    country: 'USA',
  },
};
const { address: { city } } = company;
console.log(city); // 'San Francisco'

// 函数参数解构
function greet({ name, age = 0 }) {
  console.log(\`Hello, \${name}! You are \${age} years old.\`);
}
greet({ name: 'Alice', age: 25 });

// 解构配合默认参数
function fetchData({ url, method = 'GET', headers = {} } = {}) {
  console.log(url, method, headers);
}
fetchData({ url: '/api/data' });
\`\`\`

**默认参数：**
ES6 允许为函数参数设置默认值，当参数为 undefined 时使用默认值。默认参数使函数更加健壮，减少了对参数检查的需求。

\`\`\`javascript
// 基本默认参数
function greet(name = 'World') {
  console.log(\`Hello, \${name}!\`);
}
greet(); // 'Hello, World!'
greet('Alice'); // 'Hello, Alice!'

// 默认参数可以是表达式
function getValue(value = computeDefault()) {
  return value;
}

// 默认参数可以引用前面的参数
function greet(name, greeting = \`Hello, \${name}\`) {
  console.log(greeting);
}
greet('Alice'); // 'Hello, Alice'

// 默认参数与解构结合
function createUser({ name = 'Anonymous', age = 0 } = {}) {
  return { name, age };
}
createUser(); // { name: 'Anonymous', age: 0 }
createUser({ name: 'Alice' }); // { name: 'Alice', age: 0 }

// 必需参数
function required(paramName) {
  throw new Error(\`Parameter \${paramName} is required\`);
}

function createUser(name = required('name'), age) {
  return { name, age };
}
// createUser(); // Error: Parameter name is required
\`\`\`

**剩余参数和扩展运算符：**
剩余参数（...args）将多余的参数收集为数组，扩展运算符（...）将数组或对象展开。这两个特性让函数参数处理和数据操作更加灵活。

\`\`\`javascript
// 剩余参数
function sum(...numbers) {
  return numbers.reduce((total, n) => total + n, 0);
}
sum(1, 2, 3, 4, 5); // 15

// 剩余参数必须是最后一个参数
function log(level, ...messages) {
  console.log(\`[\${level}]\`, ...messages);
}
log('INFO', 'User', 'logged in'); // '[INFO] User logged in'

// 扩展运算符 - 数组
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const merged = [...arr1, ...arr2]; // [1, 2, 3, 4, 5, 6]

// 复制数组
const copy = [...arr1];

// 扩展运算符 - 对象
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const mergedObj = { ...obj1, ...obj2 }; // { a: 1, b: 2, c: 3, d: 4 }

// 覆盖属性
const config = { timeout: 1000, retry: 3 };
const customConfig = { ...config, timeout: 2000 }; // { timeout: 2000, retry: 3 }

// 函数调用中使用扩展
const numbers = [1, 2, 3];
Math.max(...numbers); // 3
Math.max.apply(null, numbers); // ES5 方式

// 类数组转数组
const nodeList = document.querySelectorAll('div');
const nodes = [...nodeList];

// 字符串转数组
const chars = [...'hello']; // ['h', 'e', 'l', 'l', 'o']
\`\`\`

**类：**
- 类语法糖
- 继承
- 静态方法
- 私有方法（ES2022）

**模块：**
- import 和 export
- 模块化开发

### ES7 (ES2016) 及以后的特性

**ES7：**
- 指数运算符：**
- Array.prototype.includes()

**ES8 (ES2017)：**
- async/await
- Object.values() 和 Object.entries()
- String.prototype.padStart() 和 padEnd()

**ES9 (ES2018)：**
- 异步迭代器
- Rest/Spread 属性
- 正则表达式改进

**ES10 (ES2019)：**
- Array.prototype.flat() 和 flatMap()
- String.prototype.trimStart() 和 trimEnd()
- Object.fromEntries()

**ES11 (ES2020)：**
- Optional Chaining：?.
- Nullish Coalescing：??
- BigInt
- Dynamic Import

**ES12 (ES2021)：**
- Logical Assignment Operators：&&=, ||=, ??=
- Numeric Separators：1_000_000
- String.prototype.replaceAll()

**ES13 (ES2022)：**
- Top-level await
- Private fields and methods
- Class static blocks

### 最佳实践

**代码风格：**
- 使用 let 和 const 代替 var
- 优先使用箭头函数
- 使用模板字符串
- 合理使用解构赋值

**性能考虑：**
- 避免过度使用扩展运算符
- 合理使用 async/await
- 注意 BigInt 的性能

**兼容性：**
- 使用 Babel 转译
- 了解目标环境的支持情况
- 使用 polyfill

**可读性：**
- 保持代码简洁
- 使用有意义的变量名
- 适当的注释

**安全性：**
- 注意模板字符串的注入风险
- 避免使用 eval
- 合理使用 Optional Chaining

### 实际应用

**前端开发：**
- 组件开发
- 状态管理
- 异步操作
- 工具函数

**Node.js 开发：**
- 服务器端代码
- API 开发
- 脚本编写
- 工具开发

**代码示例：**

\`\`\`javascript
// 使用箭头函数和模板字符串
const greet = name => "Hello, " + name + "!";

// 使用解构赋值
const { name, age } = user;

// 使用 async/await
async function fetchData() {
  try {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
  }
}

// 使用 Optional Chaining
const username = user?.profile?.name;

// 使用 Nullish Coalescing
const value = input ?? 'default';
\`\`\`

### 学习资源

- MDN Web Docs
- ECMAScript 规范
- JavaScript.info
- 前端技术博客
- 开源项目源码`,
      createdAt: '2026-03-14',
      updatedAt: '2026-03-14'
    };
