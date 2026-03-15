import { KnowledgeItem } from '@/types/knowledge';

export const typescript_fundamentals: KnowledgeItem = {
      id: 'typescript-fundamentals',
      title: 'TypeScript 核心概念与类型系统',
      category: 'javascript',
      difficulty: 'medium',
      tags: ['TypeScript', '类型系统', '接口', '泛型'],
      content: `## TypeScript 核心概念与类型系统

TypeScript 是 JavaScript 的超集，为 JavaScript 添加了静态类型系统，提高了代码的可靠性和可维护性。

### 类型系统

**基本类型：**
- 原始类型：string、number、boolean、null、undefined、symbol、bigint
- 对象类型：object、array、function
- 联合类型：A | B
- 交叉类型：A & B

**类型推断：**
- TypeScript 会自动推断变量的类型：TypeScript拥有强大的类型推断能力，可以根据变量的初始值、函数的返回值、变量的使用方式等自动推断变量类型，如let x = 10会自动推断x为number类型，const greeting = (name: string) => \`Hello, \${name}\`会推断返回类型为string，合理利用类型推断可以减少类型注解的工作量，同时保持类型安全
- 基于初始化值
- 基于上下文

**类型断言：**
- 告诉 TypeScript 变量的具体类型
- 使用 as 关键字
- 使用尖括号语法（在 JSX 中不推荐）

### 代码示例

#### 基本类型示例

\`\`\`typescript
// 原始类型
let name: string = 'Alice';
let age: number = 25;
let isStudent: boolean = true;
let nothing: null = null;
let notDefined: undefined = undefined;
let unique: symbol = Symbol('unique');
let bigNumber: bigint = 100n;

// 对象类型
let person: object = { name: 'Alice', age: 25 };
let numbers: number[] = [1, 2, 3];
let strings: Array<string> = ['a', 'b', 'c'];
let fn: Function = () => {};

// 联合类型
let value: string | number = 'hello';
value = 42;

// 交叉类型
type Person = { name: string };
type Employee = { id: number };
type PersonEmployee = Person & Employee;

const personEmployee: PersonEmployee = {
  name: 'Alice',
  id: 1
};
\`\`\`

#### 类型推断示例

\`\`\`typescript
// 基于初始化值
let name = 'Alice'; // 推断为 string
let age = 25; // 推断为 number
let isActive = true; // 推断为 boolean

// 基于上下文
const numbers = [1, 2, 3];
numbers.forEach(num => {
  // num 被推断为 number
  console.log(num.toFixed(2));
});

// 显式类型注解
let count: number;
count = 10;
\`\`\`

#### 类型断言示例

\`\`\`typescript
// 使用 as 关键字
let value: any = 'hello';
let length: number = (value as string).length;

// 使用尖括号语法（在 JSX 中不推荐）
let length2: number = (<string>value).length;

// 非空断言
function printName(name: string | null) {
  console.log(name!.toUpperCase()); // 断言 name 不为 null
}

// DOM 元素类型断言
const button = document.querySelector('button') as HTMLButtonElement;
button.addEventListener('click', () => {
  console.log('Button clicked');
});
\`\`\`

### 接口和类型别名

**接口：**
- 定义对象的结构
- 可以被扩展
- 可以被实现
- 适合定义对象类型

**类型别名：**
- 为类型创建别名
- 可以表示任何类型
- 不能被扩展
- 适合定义联合类型和交叉类型

### 代码示例

#### 接口示例

\`\`\`typescript
// 基本接口
interface Person {
  name: string;
  age: number;
}

const person: Person = {
  name: 'Alice',
  age: 25
};

// 可选属性
interface Product {
  id: number;
  name: string;
  price?: number; // 可选属性
}

const product: Product = {
  id: 1,
  name: 'Laptop'
};

// 只读属性
interface Point {
  readonly x: number;
  readonly y: number;
}

const point: Point = { x: 10, y: 20 };
// point.x = 15; // 错误：只读属性不能修改

// 接口扩展
interface Animal {
  name: string;
}

interface Dog extends Animal {
  breed: string;
}

const dog: Dog = {
  name: 'Buddy',
  breed: 'Golden Retriever'
};

// 接口实现
interface Clock {
  currentTime: Date;
  setTime(d: Date): void;
}

class DigitalClock implements Clock {
  currentTime: Date = new Date();
  
  setTime(d: Date) {
    this.currentTime = d;
  }
}
\`\`\`

#### 类型别名示例

\`\`\`typescript
// 基本类型别名
type Name = string;
type Age = number;
type Person = {
  name: Name;
  age: Age;
};

// 联合类型别名
type Status = 'pending' | 'success' | 'error';
type ID = string | number;

// 函数类型别名
type Callback = (error: Error | null, data?: any) => void;

function fetchData(callback: Callback) {
  // ...
}

// 泛型类型别名
type Container<T> = { value: T };
type NumberContainer = Container<number>;

// 条件类型别名
type NonNullable<T> = T extends null | undefined ? never : T;
type Result = NonNullable<string | null>; // string
\`\`\`

### 泛型

**泛型的概念：**
- 允许在定义函数、接口或类时使用类型参数
- 提高代码的复用性
- 保持类型安全

**泛型的使用：**
- 泛型函数
- 泛型接口
- 泛型类
- 泛型约束

**泛型工具类型：**
- Partial<T>：将所有属性变为可选：Partial是TypeScript内置的工具类型，将类型T的所有属性设置为可选，使用内置的映射类型遍历T的每个属性并添加?修饰符，如Partial<User>会将User的所有属性变为可选，常用于更新部分数据的场景，如更新用户信息时只需要传入要修改的字段
- Required<T>：将所有属性变为必需：Required是TypeScript内置的工具类型，与Partial相反，将类型T的所有可选属性变为必需属性，通过将属性映射并移除?修饰符实现，如Required<Partial<User>>会恢复User的所有必需属性，常用于确保某些属性必须存在的场景
- Readonly<T>：将所有属性变为只读：Readonly是TypeScript内置的工具类型，将类型T的所有属性设置为只读，添加readonly修饰符，如Readonly<User>会将User的所有属性变为只读，无法修改，常用于保护数据不被意外修改的场景，如配置对象、常量对象等
- Pick<T, K>：拣选属性：Pick是TypeScript内置的工具类型，从类型T中拣选指定的属性K组成新类型，如Pick<User, 'name' | 'email'>只保留User的name和email属性，常用于只需要对象部分属性的场景，可以创建更精确的类型，提高类型安全性和代码可读性
- Omit<T, K>：排除属性：Omit是TypeScript内置的工具类型，从类型T中排除指定的属性K组成新类型，如Omit<User, 'password'>会排除User的password属性，常用于创建不包含某些敏感属性的类型，如API返回数据时不包含密码等敏感信息
- Record<K, T>：创建键值对类型：Record是TypeScript内置的工具类型，用于创建键值对类型，K是键的类型（通常是string或number），T是值的类型，如Record<string, User>创建一个键为字符串、值为User对象的类型，常用于定义字典类型、映射类型、缓存类型等

### 代码示例

#### 泛型函数示例

\`\`\`typescript
// 基本泛型函数
function identity<T>(arg: T): T {
  return arg;
}

const num = identity<number>(42);
const str = identity('hello');

// 类型推断
const num2 = identity(42); // 推断为 number
const str2 = identity('hello'); // 推断为 string

// 多个类型参数
function pair<T, U>(first: T, second: U): [T, U] {
  return [first, second];
}

const pairResult = pair('hello', 42); // [string, number]

// 泛型约束
interface Lengthwise {
  length: number;
}

function getLength<T extends Lengthwise>(arg: T): number {
  return arg.length;
}

getLength('hello'); // 5
getLength([1, 2, 3]); // 3
// getLength(42); // 错误：number 没有 length 属性
\`\`\`

#### 泛型接口示例

\`\`\`typescript
// 泛型接口
interface Box<T> {
  value: T;
}

const stringBox: Box<string> = { value: 'hello' };
const numberBox: Box<number> = { value: 42 };

// 泛型接口作为函数类型
interface Comparator<T> {
  (a: T, b: T): number;
}

const numberComparator: Comparator<number> = (a, b) => a - b;
const stringComparator: Comparator<string> = (a, b) => 
  a.localeCompare(b);

// 泛型接口作为类类型
interface Repository<T> {
  findById(id: number): T | null;
  save(entity: T): void;
}

class UserRepository implements Repository<User> {
  private users: User[] = [];
  
  findById(id: number): User | null {
    return this.users.find(u => u.id === id) || null;
  }
  
  save(user: User): void {
    this.users.push(user);
  }
}
\`\`\`

#### 泛型类示例

\`\`\`typescript
// 泛型类
class Stack<T> {
  private items: T[] = [];
  
  push(item: T): void {
    this.items.push(item);
  }
  
  pop(): T | undefined {
    return this.items.pop();
  }
  
  peek(): T | undefined {
    return this.items[this.items.length - 1];
  }
}

const numberStack = new Stack<number>();
numberStack.push(1);
numberStack.push(2);
console.log(numberStack.pop()); // 2

const stringStack = new Stack<string>();
stringStack.push('hello');
stringStack.push('world');
console.log(stringStack.pop()); // 'world'
\`\`\`

#### 泛型工具类型示例

\`\`\`typescript
interface User {
  id: number;
  name: string;
  email: string;
  age: number;
}

// Partial<T>：将所有属性变为可选
type PartialUser = Partial<User>;
const partialUser: PartialUser = {
  name: 'Alice'
};

// Required<T>：将所有属性变为必需
type RequiredUser = Required<Partial<User>>;
const requiredUser: RequiredUser = {
  id: 1,
  name: 'Alice',
  email: 'alice@example.com',
  age: 25
};

// Readonly<T>：将所有属性变为只读
type ReadonlyUser = Readonly<User>;
const readonlyUser: ReadonlyUser = {
  id: 1,
  name: 'Alice',
  email: 'alice@example.com',
  age: 25
};
// readonlyUser.name = 'Bob'; // 错误

// Pick<T, K>：拣选属性
type UserBasicInfo = Pick<User, 'id' | 'name'>;
const basicInfo: UserBasicInfo = {
  id: 1,
  name: 'Alice'
};

// Omit<T, K>：排除属性
type UserWithoutEmail = Omit<User, 'email'>;
const userWithoutEmail: UserWithoutEmail = {
  id: 1,
  name: 'Alice',
  age: 25
};

// Record<K, T>：创建键值对类型
type UserRecord = Record<number, User>;
const users: UserRecord = {
  1: { id: 1, name: 'Alice', email: 'alice@example.com', age: 25 },
  2: { id: 2, name: 'Bob', email: 'bob@example.com', age: 30 }
};
\`\`\`

### 高级类型

**条件类型：**
- 基于条件选择类型
- 使用 extends 关键字
- 结合 infer 关键字推断类型

**映射类型：**
- 基于现有类型创建新类型
- 遍历现有类型的属性
- 对每个属性进行转换

**模板字面量类型：**
- 使用字符串模板语法创建类型
- 支持字符串操作
- 适合创建动态类型

### 代码示例

#### 条件类型示例

\`\`\`typescript
// 基本条件类型
type IsString<T> = T extends string ? true : false;

type Test1 = IsString<string>; // true
type Test2 = IsString<number>; // false

// 条件类型与联合类型
type NonNullable<T> = T extends null | undefined ? never : T;

type Test3 = NonNullable<string | null>; // string

// infer 关键字
type ReturnType<T> = T extends (...args: any[]) => infer R ? R : never;

function foo(): string {
  return 'hello';
}

type FooReturn = ReturnType<typeof foo>; // string

// 提取数组元素类型
type ArrayElement<T> = T extends (infer U)[] ? U : never;

type Numbers = number[];
type NumberElement = ArrayElement<Numbers>; // number

// 提取 Promise 的值类型
type PromiseValue<T> = T extends Promise<infer U> ? U : never;

type PromiseString = Promise<string>;
type StringValue = PromiseValue<PromiseString>; // string
\`\`\`

#### 映射类型示例

\`\`\`typescript
// 基本映射类型
type Readonly<T> = {
  readonly [P in keyof T]: T[P];
};

type Partial<T> = {
  [P in keyof T]?: T[P];
};

interface User {
  name: string;
  age: number;
}

type ReadonlyUser = Readonly<User>;
type PartialUser = Partial<User>;

// 映射类型 + 条件类型
type Getters<T> = {
  [P in keyof T as \`get\${Capitalize<string & P>}\`]: () => T[P];
};

interface Person {
  name: string;
  age: number;
}

type PersonGetters = Getters<Person>;
// {
//   getName: () => string;
//   getAge: () => number;
// }

// 映射类型 + 模板字面量类型
type EventHandlers<T> = {
  [K in keyof T as \`on\${Capitalize<string & K>}\`]?: (event: T[K]) => void;
};

interface Events {
  click: MouseEvent;
  change: Event;
}

type EventHandlersType = EventHandlers<Events>;
// {
//   onClick?: (event: MouseEvent) => void;
//   onChange?: (event: Event) => void;
// }
\`\`\`

#### 模板字面量类型示例

\`\`\`typescript
// 基本模板字面量类型
type Greeting = \`Hello, \${string}!\`;
const greeting: Greeting = 'Hello, World!';

// 模板字面量类型 + 联合类型
type Color = 'red' | 'green' | 'blue';
type Quantity = 'light' | 'medium' | 'dark';
type ColorQuantity = \`\${Quantity}-\${Color}\`;

const color1: ColorQuantity = 'light-red';
const color2: ColorQuantity = 'dark-blue';

// 模板字面量类型 + 工具类型
type EventName = \`on\${Capitalize<string>}\`;
type ClickEvent = EventName<'click'>; // 'onClick'

// 实际应用：CSS 属性
type CSSProperty<T extends string> = \`--\${T}\`;
type CustomProperty = CSSProperty<'primary-color'>; // '--primary-color'
\`\`\`

### 模块系统

**模块的概念：**
- 代码的独立单元
- 导出和导入功能
- 避免命名冲突

**导出方式：**
- 命名导出
- 默认导出
- 重导出

**导入方式：**
- 命名导入
- 默认导入
- 命名空间导入

### 代码示例

#### 模块导出示例

\`\`\`typescript
// utils.ts
// 命名导出
export function add(a: number, b: number): number {
  return a + b;
}

export function subtract(a: number, b: number): number {
  return a - b;
}

// 默认导出
export default function multiply(a: number, b: number): number {
  return a * b;
}

// 类型导出
export interface User {
  id: number;
  name: string;
}

export type ID = string | number;

// 重导出
export { add, subtract } from './math';
export * from './constants';
\`\`\`

#### 模块导入示例

\`\`\`typescript
// main.ts
// 命名导入
import { add, subtract } from './utils';
import type { User } from './utils';

// 默认导入
import multiply from './utils';

// 命名空间导入
import * as utils from './utils';
utils.add(1, 2);

// 混合导入
import multiply, { add, subtract } from './utils';

// 动态导入
async function loadModule() {
  const utils = await import('./utils');
  console.log(utils.add(1, 2));
}
\`\`\`

### 最佳实践

- 使用类型注解提高代码可读性
- 优先使用接口定义对象类型
- 合理使用泛型提高代码复用性
- 使用类型别名定义联合类型和交叉类型
- 理解和使用高级类型
- 合理组织模块和导出
- 避免使用 any 类型
- 使用 strict 模式

`,
      createdAt: '2026-03-14',
      updatedAt: '2026-03-14'
    };
