import { KnowledgeItem } from '@/types/knowledge';

export const javascript_fundamentals: KnowledgeItem = {
      id: 'javascript-fundamentals',
      title: 'JavaScript 核心概念与执行机制',
      category: 'javascript',
      difficulty: 'medium',
      tags: ['JavaScript', '执行上下文', '闭包', '原型链'],
      content: `## JavaScript 核心概念与执行机制

JavaScript 是一门单线程、非阻塞、异步的脚本语言，理解其核心概念和执行机制对于编写高质量的代码至关重要。

### 🔄 执行上下文

**执行上下文的类型：**
- **全局执行上下文：代码开始执行时创建**：全局执行上下文是JavaScript代码开始执行时创建的第一个执行上下文，在浏览器环境中全局执行上下文的this指向window对象，在Node.js环境中指向global对象，全局执行上下文包含全局变量、全局函数、this绑定、变量环境、词法环境等，全局执行上下文在页面关闭或程序结束时销毁
- **函数执行上下文：函数被调用时创建**：函数执行上下文是函数被调用时创建的执行上下文，每个函数调用都会创建一个新的执行上下文，函数执行上下文包含函数的参数、局部变量、this绑定、变量环境、词法环境、外部环境引用（outer）等，函数执行上下文在函数执行完毕后销毁，但闭包会保持对外部环境的引用
- **eval 执行上下文：eval 函数执行时创建**：eval执行上下文是eval函数执行时创建的执行上下文，eval函数可以动态执行字符串形式的JavaScript代码，eval执行上下文可以访问调用eval函数的作用域，eval函数的使用会影响性能和安全性，不推荐在生产代码中使用eval函数，可以使用Function构造函数或JSON.parse等替代方案

**执行上下文的创建过程：**
1. **创建变量对象 (VO)**
2. **建立作用域链**
3. **确定 this 指向**

**执行上下文栈：**
- **后进先出 (LIFO) 结构**
- **管理函数调用顺序**
- **函数执行完毕后从栈中弹出**

### 💻 代码示例：执行上下文演示

\`\`\`javascript
// 全局执行上下文
var globalVar = 'global';

function outer() {
  // outer 函数执行上下文
  var outerVar = 'outer';
  
  function inner() {
    // inner 函数执行上下文
    var innerVar = 'inner';
    console.log(innerVar); // 'inner'
    console.log(outerVar); // 'outer'
    console.log(globalVar); // 'global'
  }
  
  inner();
}

outer();
\`\`\`

#### 变量提升示例

\`\`\`javascript
// 变量提升
console.log(a); // undefined，不是 ReferenceError
var a = 10;

console.log(b); // ReferenceError
let b = 20;

// 函数提升
console.log(foo); // 函数定义
foo(); // 'foo'

function foo() {
  console.log('foo');
}

console.log(bar); // undefined
bar(); // TypeError: bar is not a function

var bar = function() {
  console.log('bar');
};
\`\`\`

### 闭包

**什么是闭包：**
- 函数能够访问其词法作用域之外的变量
- 即使函数在其词法作用域之外执行

**闭包的应用：**
- 实现私有变量
- 模块化
- 函数柯里化
- 防抖和节流

**闭包的优缺点：**
- 优点：实现数据封装和模块化：闭包的优点是可以实现数据封装和模块化，通过闭包可以创建私有变量和方法，避免全局命名空间污染，闭包可以保存函数的执行上下文，实现数据的持久化，闭包是JavaScript实现模块化、工厂模式、单例模式等设计模式的基础
- 缺点：可能导致内存泄漏：闭包的缺点是可能导致内存泄漏，因为闭包会保持对外部环境的引用，如果闭包被长时间引用，外部环境的变量和函数不会被垃圾回收，导致内存占用增加，在使用闭包时应该注意及时释放闭包引用，避免内存泄漏

### 代码示例

#### 闭包实现私有变量

\`\`\`javascript
function createCounter() {
  let count = 0;
  
  return {
    increment() {
      count++;
      return count;
    },
    decrement() {
      count--;
      return count;
    },
    getCount() {
      return count;
    }
  };
}

const counter = createCounter();
console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.decrement()); // 1
console.log(counter.getCount()); // 1
// count 变量无法直接访问，实现了私有变量
\`\`\`

#### 闭包实现模块模式

\`\`\`javascript
const Module = (function() {
  let privateVar = 'private';
  
  function privateMethod() {
    console.log('This is a private method');
  }
  
  return {
    publicMethod() {
      console.log('This is a public method');
      privateMethod();
      console.log(privateVar);
    },
    publicVar: 'public'
  };
})();

Module.publicMethod();
// Module.privateMethod(); // ReferenceError
// Module.privateVar; // undefined
\`\`\`

#### 闭包实现防抖

\`\`\`javascript
function debounce(func, wait) {
  let timeout;
  
  return function(...args) {
    const context = this;
    
    clearTimeout(timeout);
    
    timeout = setTimeout(() => {
      func.apply(context, args);
    }, wait);
  };
}

// 使用示例
const handleInput = debounce((e) => {
  console.log('Input:', e.target.value);
}, 300);

document.getElementById('input').addEventListener('input', handleInput);
\`\`\`

#### 闭包实现节流

\`\`\`javascript
function throttle(func, limit) {
  let inThrottle;
  
  return function(...args) {
    const context = this;
    
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      
      setTimeout(() => {
        inThrottle = false;
      }, limit);
    }
  };
}

// 使用示例
const handleScroll = throttle(() => {
  console.log('Scrolling...');
}, 100);

window.addEventListener('scroll', handleScroll);
\`\`\`

### 原型链

**原型链的概念：**
- JavaScript 中对象通过原型链继承属性和方法：JavaScript使用原型继承机制，每个对象都有一个内部属性[[Prototype]]指向其原型对象，当访问对象的属性或方法时，如果对象本身没有该属性，JavaScript会沿着原型链向上查找直到找到为止或返回undefined，原型链的顶端是Object.prototype，这种继承方式称为原型继承，是JavaScript面向对象编程的基础
- 每个对象都有一个原型对象
- 原型对象也是对象，也有自己的原型
- 直到 null

**原型链的工作原理：**
- 当访问对象的属性时，会先在对象自身查找
- 如果找不到，会沿着原型链向上查找
- 直到找到或到达原型链末端

### 代码示例

#### 原型链示例

\`\`\`javascript
function Person(name) {
  this.name = name;
}

Person.prototype.sayHello = function() {
  console.log(\`Hello, my name is \${this.name}\`);
};

const person = new Person('Alice');
person.sayHello(); // 'Hello, my name is Alice'

console.log(person.__proto__ === Person.prototype); // true
console.log(Person.prototype.__proto__ === Object.prototype); // true
console.log(Object.prototype.__proto__ === null); // true
\`\`\`

#### 原型继承

\`\`\`javascript
function Animal(name) {
  this.name = name;
}

Animal.prototype.eat = function() {
  console.log(\`\${this.name} is eating\`);
};

function Dog(name, breed) {
  Animal.call(this, name);
  this.breed = breed;
}

// 设置原型链
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.bark = function() {
  console.log(\`\${this.name} is barking\`);
};

const dog = new Dog('Buddy', 'Golden Retriever');
dog.eat(); // 'Buddy is eating'
dog.bark(); // 'Buddy is barking'
\`\`\`

#### ES6 类继承

\`\`\`javascript
class Animal {
  constructor(name) {
    this.name = name;
  }
  
  eat() {
    console.log(\`\${this.name} is eating\`);
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }
  
  bark() {
    console.log(\`\${this.name} is barking\`);
  }
}

const dog = new Dog('Buddy', 'Golden Retriever');
dog.eat(); // 'Buddy is eating'
dog.bark(); // 'Buddy is barking'
\`\`\`

### this 指向

**this 的绑定规则：**
- 默认绑定：全局对象或 undefined（严格模式）：默认绑定是this绑定的默认规则，当函数独立调用时（不作为对象方法、不使用call/apply/bind、不使用new），this指向全局对象（浏览器中的window，Node.js中的global），在严格模式下this指向undefined，默认绑定是this绑定中最常见的情况
- 隐式绑定：调用对象：隐式绑定是this绑定的规则之一，当函数作为对象的方法调用时，this指向调用该函数的对象，隐式绑定依赖于函数的调用方式，如果函数被赋值给其他变量或作为回调函数传递，隐式绑定会丢失，需要使用显式绑定或箭头函数保持this绑定
- 显式绑定：call、apply、bind：显式绑定是通过call、apply、bind方法强制指定函数的this绑定，call和apply方法立即调用函数，call方法接收参数列表，apply方法接收参数数组，bind方法返回一个新函数，新函数的this被永久绑定到指定的对象，显式绑定可以解决隐式绑定丢失的问题
- new 绑定：新创建的对象：new绑定是使用new关键字调用构造函数时的this绑定规则，this指向新创建的对象，new绑定会创建一个新对象，将构造函数的prototype属性赋值给新对象的[[Prototype]]属性，执行构造函数，如果构造函数没有返回对象则返回新对象，new绑定是创建对象实例的基础
- 箭头函数：词法作用域的 this：箭头函数没有自己的this绑定，this继承自外层作用域，箭头函数的this在函数定义时就确定，而不是在调用时确定，箭头函数不能作为构造函数使用，不能使用call、apply、bind改变this绑定，箭头函数适合用于回调函数、事件处理函数等需要保持this绑定的场景

### 深入理解

#### 变量提升的详细机制

**变量提升的本质：**
- JavaScript 引擎在代码执行前进行编译：JavaScript引擎在执行代码前会先进行编译，编译阶段会进行词法分析生成抽象语法树（AST），进行作用域分析确定变量和函数的声明位置，进行代码优化生成字节码，编译完成后进入执行阶段，执行阶段会创建执行上下文，逐行解释执行字节码，了解编译过程有助于理解变量提升、闭包等核心概念
- 函数声明和变量声明被提升到作用域顶部
- 函数声明优先于变量声明
- let 和 const 也有提升，但存在暂时性死区

**暂时性死区（TDZ）：**
- let 和 const 变量在声明前无法访问
- 从作用域开始到变量声明之间的区域
- 避免在声明前使用变量

#### 作用域链的查找过程

**查找顺序：**
1. 在当前作用域中查找变量
2. 如果未找到，向上一级作用域查找
3. 重复步骤1-2，直到全局作用域
4. 如果全局作用域也未找到，抛出 ReferenceError

**词法作用域 vs 动态作用域：**
- JavaScript 使用词法作用域（静态作用域）：词法作用域是指变量的作用域在代码编写时就确定了，而不是在运行时确定，函数定义时决定了其可以访问哪些变量，嵌套函数可以访问外层函数的变量，这种作用域模型使得代码分析更简单，也是闭包能够工作的基础，与之相对的是动态作用域（如bash脚本使用）
- 作用域在函数定义时确定，而不是调用时
- 与动态作用域（如某些语言中的 eval）不同

#### 闭包的内存管理

**闭包的内存占用：**
- 闭包会保持对外部变量的引用
- 这些变量不会被垃圾回收
- 长期存在的闭包可能导致内存泄漏

**避免内存泄漏的方法：**
- 及时释放闭包引用
- 避免在循环中创建大量闭包
- 使用弱引用（WeakMap、WeakSet）
- 在不需要时手动解除引用

#### 原型链的查找优化

**原型链查找的性能：**
- 原型链查找是动态的，每次访问属性都需要查找
- 深层原型链查找可能影响性能
- 可以通过缓存属性值来优化

**优化策略：**
- 将常用属性直接定义在对象上
- 避免过深的原型链
- 使用 Object.create(null) 创建无原型对象

#### this 绑定的优先级

**绑定优先级（从高到低）：**
1. new 绑定
2. 显式绑定（bind > call/apply）
3. 隐式绑定
4. 默认绑定

**特殊情况：**
- 箭头函数的 this 继承自外层作用域
- DOM 事件处理函数中的 this 指向事件目标：在DOM事件处理函数中，this关键字指向触发事件的DOM元素（event.currentTarget），可以通过this访问元素的属性和方法，如this.value、this.style等，这种行为与普通函数中的this不同，事件处理函数中的this绑定是JavaScript事件系统自动处理的
- setTimeout/setInterval 中的 this 指向全局对象

#### 事件循环的深入理解

**事件循环的组成部分：**
- 调用栈（Call Stack）
- 任务队列（Task Queue）
- 微任务队列（Microtask Queue）
- Web APIs（定时器、DOM 事件等）：Web APIs是浏览器提供的JavaScript接口，用于与浏览器环境交互，包括setTimeout/setInterval定时器API、DOM操作API、fetch网络请求API、Storage存储API、Canvas绘图API等，这些API大多是异步的， callback会被添加到任务队列中等待执行，是JavaScript实现异步编程的重要基础

**浏览器环境 vs Node.js 环境：**
- 浏览器：宏任务包括 setTimeout、setInterval、UI 渲染
- Node.js：宏任务包括 setTimeout、setInterval、I/O 操作：Node.js的事件循环与浏览器有所不同，宏任务包括setTimeout、setInterval、setImmediate、I/O操作（文件读写、网络请求等），微任务包括Promise回调、process.nextTick（优先级最高），Node.js的事件循环有多个阶段如timers、pending callbacks、idle/prepare、poll、check等，了解Node.js事件循环对编写高效的Node.js应用很重要
- 微任务在两者中基本相同

**性能优化：**
- 避免长时间运行的同步代码
- 合理使用 requestAnimationFrame
- 将大任务拆分为小任务
- 使用 Web Worker 处理 CPU 密集型任务

### 实战应用

#### 模块化实现

\`\`\`javascript
// 使用闭包实现模块
const myModule = (function() {
  // 私有变量和方法
  let privateVar = 0;
  
  function privateMethod() {
    return privateVar * 2;
  }
  
  // 公共 API
  return {
    increment() {
      privateVar++;
      console.log('Incremented:', privateVar);
    },
    decrement() {
      privateVar--;
      console.log('Decremented:', privateVar);
    },
    getValue() {
      return privateMethod();
    }
  };
})();

// 使用模块
myModule.increment(); // Incremented: 1
myModule.increment(); // Incremented: 2
console.log(myModule.getValue()); // 4
myModule.decrement(); // Decremented: 1
\`\`\`

#### 函数柯里化

\`\`\`javascript
// 柯里化函数
function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    } else {
      return function(...moreArgs) {
        return curried.apply(this, args.concat(moreArgs));
      };
    }
  };
}

// 使用柯里化
function add(a, b, c) {
  return a + b + c;
}

const curriedAdd = curry(add);
console.log(curriedAdd(1)(2)(3)); // 6
console.log(curriedAdd(1, 2)(3)); // 6
console.log(curriedAdd(1, 2, 3)); // 6

// 实际应用：创建可复用的函数
const multiply = (a, b) => a * b;
const double = curry(multiply)(2);
console.log(double(5)); // 10
console.log(double(10)); // 20
\`\`\`

#### 高阶函数

\`\`\`javascript
// 高阶函数：接受函数作为参数或返回函数
function withLogging(fn) {
  return function(...args) {
    console.log('Calling function with args:', args);
    const result = fn.apply(this, args);
    console.log('Function returned:', result);
    return result;
  };
}

// 使用高阶函数
function add(a, b) {
  return a + b;
}

const loggedAdd = withLogging(add);
loggedAdd(3, 4); // Calling function with args: [3, 4] // Function returned: 7

// 实际应用：权限检查
function withAuth(fn) {
  return function(...args) {
    if (!isAuthenticated()) {
      throw new Error('Not authenticated');
    }
    return fn.apply(this, args);
  };
}

function deleteUser(userId) {
  // 删除用户逻辑
  console.log('Deleting user:', userId);
}

const protectedDeleteUser = withAuth(deleteUser);
\`\`\`

#### 性能优化示例

\`\`\`javascript
// 使用闭包缓存计算结果
function memoize(fn) {
  const cache = new Map();
  
  return function(...args) {
    const key = JSON.stringify(args);
    
    if (cache.has(key)) {
      console.log('Cache hit:', key);
      return cache.get(key);
    }
    
    const result = fn.apply(this, args);
    cache.set(key, result);
    console.log('Cache miss:', key);
    return result;
  };
}

// 使用记忆化
function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

const memoizedFibonacci = memoize(fibonacci);
console.log(memoizedFibonacci(10)); // 大幅提升性能

// 使用节流优化滚动事件
function optimizedScrollHandler() {
  // 节流后的处理逻辑
  console.log('Optimized scroll handler');
}

const throttledScroll = throttle(optimizedScrollHandler, 100);
window.addEventListener('scroll', throttledScroll);
\`\`\`

### 常见陷阱和解决方案

#### 循环中的闭包陷阱

\`\`\`javascript
// 错误示例
for (var i = 0; i < 5; i++) {
  setTimeout(function() {
    console.log(i); // 输出 5, 5, 5, 5, 5
  }, 100);
}

// 解决方案1：使用 let
for (let i = 0; i < 5; i++) {
  setTimeout(function() {
    console.log(i); // 输出 0, 1, 2, 3, 4
  }, 100);
}

// 解决方案2：使用闭包
for (var i = 0; i < 5; i++) {
  (function(j) {
    setTimeout(function() {
      console.log(j); // 输出 0, 1, 2, 3, 4
    }, 100);
  })(i);
}
\`\`\`

#### this 绑定陷阱

\`\`\`javascript
// 陷阱1：方法中的 this
const obj = {
  name: 'Alice',
  getName() {
    console.log(this.name); // 正确
  },
  getArrowName: () => {
    console.log(this.name); // 错误，this 指向全局对象
  }
};

obj.getName(); // 'Alice'
obj.getArrowName(); // undefined

// 解决方案
const obj = {
  name: 'Alice',
  getArrowName() {
    const self = this;
    return () => {
      console.log(self.name); // 正确
    };
  }
};

// 陷阱2：事件处理中的 this
class Button {
  constructor() {
    this.count = 0;
    this.button = document.createElement('button');
    this.button.textContent = 'Click me';
    
    // 错误：this 指向 button 元素
    this.button.addEventListener('click', this.handleClick);
  }
  
  handleClick() {
    this.count++; // 错误：this.count 是 undefined
    console.log('Clicked:', this.count);
  }
}

// 解决方案1：使用 bind
this.button.addEventListener('click', this.handleClick.bind(this));

// 解决方案2：使用箭头函数
this.button.addEventListener('click', () => this.handleClick());
\`\`\`

#### 异步陷阱

\`\`\`javascript
// 陷阱：期望同步执行
console.log('1');
setTimeout(() => console.log('2'), 0);
console.log('3');
// 输出：1, 3, 2

// 陷阱：循环中的异步操作
for (let i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i); // 0, 1, 2（顺序不确定）
  }, 100);
}

// 解决方案：使用 async/await 确保顺序
async function sequentialLoop() {
  for (let i = 0; i < 3; i++) {
    await new Promise(resolve => {
      setTimeout(() => {
        console.log(i);
        resolve();
      }, 100);
    });
  }
}
sequentialLoop(); // 0, 1, 2（按顺序）
\`\`\`

### 代码示例

#### this 绑定规则

\`\`\`javascript
// 默认绑定
function foo() {
  console.log(this); // 全局对象或 undefined（严格模式）
}
foo();

// 隐式绑定
const obj = {
  name: 'Alice',
  foo() {
    console.log(this.name); // 'Alice'
  }
};
obj.foo();

// 显式绑定
function greet() {
  console.log(\`Hello, \${this.name}\`);
}
const person = { name: 'Bob' };
greet.call(person); // 'Hello, Bob'
greet.apply(person); // 'Hello, Bob'
const boundGreet = greet.bind(person);
boundGreet(); // 'Hello, Bob'

// new 绑定
function Person(name) {
  this.name = name;
}
const person = new Person('Charlie');
console.log(person.name); // 'Charlie'

// 箭头函数
const obj = {
  name: 'Alice',
  foo() {
    const arrow = () => {
      console.log(this.name); // 'Alice'
    };
    arrow();
  }
};
obj.foo();
\`\`\`

### 事件循环

**事件循环的概念：**
- JavaScript 执行机制的核心：事件循环（Event Loop）是JavaScript执行机制的核心，通过不断从任务队列中取出任务执行来驱动JavaScript程序的运行，事件循环会优先执行微任务队列中的所有任务，然后再执行宏任务队列中的一个任务，这种执行顺序确保了Promise等微任务能够快速响应，是理解JavaScript异步编程的关键
- 处理异步操作
- 由主线程、宏任务队列和微任务队列组成

**执行过程：**
1. 执行主线程代码
2. 执行微任务队列中的所有任务
3. 执行宏任务队列中的一个任务
4. 重复步骤 2-3

**宏任务和微任务：**
- 宏任务：setTimeout、setInterval、I/O 操作
- 微任务：Promise、async/await、process.nextTick

### 代码示例

#### 事件循环示例

\`\`\`javascript
console.log('1');

setTimeout(() => {
  console.log('2');
}, 0);

Promise.resolve().then(() => {
  console.log('3');
});

console.log('4');

// 输出顺序：1, 4, 3, 2
\`\`\`

#### 复杂事件循环

\`\`\`javascript
console.log('1');

setTimeout(() => {
  console.log('2');
  Promise.resolve().then(() => {
    console.log('3');
  });
}, 0);

Promise.resolve().then(() => {
  console.log('4');
  setTimeout(() => {
    console.log('5');
  }, 0);
});

console.log('6');

// 输出顺序：1, 6, 4, 2, 3, 5
\`\`\`

### 最佳实践

- 理解执行上下文和作用域
- 合理使用闭包，避免内存泄漏
- 理解原型链和继承
- 正确处理 this 指向
- 掌握异步编程模式
- 编写清晰、可维护的代码

`,
      createdAt: '2026-03-14',
      updatedAt: '2026-03-14'
    };
