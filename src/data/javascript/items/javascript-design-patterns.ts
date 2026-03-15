import { KnowledgeItem } from '@/types/knowledge';

export const javascript_design_patterns: KnowledgeItem = {
      id: 'javascript-design-patterns',
      title: 'JavaScript 设计模式与应用',
      category: 'javascript',
      difficulty: 'medium',
      tags: ['JavaScript', '设计模式', '单例', '工厂'],
      content: `## JavaScript 设计模式与应用

设计模式是解决软件设计中常见问题的可重用方案。在 JavaScript 中，设计模式不仅可以帮助我们编写更加优雅、可维护的代码，还能提高代码的可读性和可扩展性。JavaScript 的动态特性使得某些设计模式的实现与传统面向对象语言有所不同，理解这些差异对于正确应用设计模式至关重要。

### 创建型模式

**单例模式（Singleton）：**
单例模式确保一个类只有一个实例，并提供全局访问点。在 JavaScript 中，单例模式常用于管理全局状态、配置对象、数据库连接池等场景。实现单例模式的关键是控制实例的创建过程，确保多次调用构造函数时返回同一个实例。

\`\`\`javascript
// 单例模式实现
class Singleton {
  static instance = null;
  
  constructor() {
    if (Singleton.instance) {
      return Singleton.instance;
    }
    Singleton.instance = this;
    this.data = {};
  }
  
  static getInstance() {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }
    return Singleton.instance;
  }
}

// 使用示例
const instance1 = new Singleton();
const instance2 = Singleton.getInstance();
console.log(instance1 === instance2); // true

// 模块模式实现单例
const ConfigManager = (function() {
  let instance;
  
  function createInstance() {
    const config = {};
    return {
      get: (key) => config[key],
      set: (key, value) => { config[key] = value; },
      getAll: () => ({ ...config }),
    };
  }
  
  return {
    getInstance: () => {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    },
  };
})();

// ES6 模块天然是单例
// config.js
export const config = {
  apiUrl: 'https://api.example.com',
  timeout: 5000,
};
\`\`\`

**工厂模式（Factory）：**
工厂模式封装对象的创建过程，提供统一的创建接口，隐藏具体实现细节。工厂模式分为简单工厂、工厂方法和抽象工厂三种。在 JavaScript 中，工厂模式常用于创建复杂对象、根据条件创建不同类型的对象等场景。

\`\`\`javascript
// 简单工厂
class ButtonFactory {
  static create(type) {
    switch (type) {
      case 'primary':
        return new PrimaryButton();
      case 'secondary':
        return new SecondaryButton();
      case 'danger':
        return new DangerButton();
      default:
        throw new Error(\`Unknown button type: \${type}\`);
    }
  }
}

// 工厂方法
class Dialog {
  createButton() {
    throw new Error('Subclass must implement createButton method');
  }
  
  render() {
    const button = this.createButton();
    button.render();
  }
}

class WindowsDialog extends Dialog {
  createButton() {
    return new WindowsButton();
  }
}

class WebDialog extends Dialog {
  createButton() {
    return new HTMLButton();
  }
}

// 抽象工厂
class GUIFactory {
  createButton() {}
  createCheckbox() {}
}

class WindowsFactory extends GUIFactory {
  createButton() {
    return new WindowsButton();
  }
  createCheckbox() {
    return new WindowsCheckbox();
  }
}

class MacOSFactory extends GUIFactory {
  createButton() {
    return new MacOSButton();
  }
  createCheckbox() {
    return new MacOSCheckbox();
  }
}
\`\`\`

**构造器模式（Constructor）：**
构造器模式使用构造函数创建对象，初始化对象状态。在 JavaScript 中，构造函数可以与原型链配合实现属性和方法的共享，减少内存消耗。ES6 的 class 语法是构造函数的语法糖，使代码更加清晰。

\`\`\`javascript
// ES5 构造函数
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.greet = function() {
  console.log(\`Hello, I'm \${this.name}\`);
};

Person.species = 'Homo sapiens'; // 静态属性

// ES6 类语法
class Person {
  static species = 'Homo sapiens';
  
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  
  greet() {
    console.log(\`Hello, I'm \${this.name}\`);
  }
  
  static getSpecies() {
    return Person.species;
  }
}

const person = new Person('Alice', 25);
person.greet(); // "Hello, I'm Alice"
\`\`\`

**原型模式（Prototype）：**
原型模式基于原型链创建对象，通过克隆现有对象来创建新对象。JavaScript 天然支持原型继承，Object.create() 方法是实现原型模式的核心。原型模式适合创建成本较高的对象，通过克隆提高性能。

\`\`\`javascript
// 原型模式实现
const prototype = {
  greet() {
    console.log(\`Hello, I'm \${this.name}\`);
  },
  clone() {
    return Object.create(this);
  },
};

const person1 = Object.create(prototype);
person1.name = 'Alice';

const person2 = person1.clone();
person2.name = 'Bob';

// 使用 Object.assign 实现深拷贝
const deepClone = (obj) => {
  if (obj === null || typeof obj !== 'object') return obj;
  
  if (Array.isArray(obj)) {
    return obj.map(deepClone);
  }
  
  const cloned = Object.create(Object.getPrototypeOf(obj));
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      cloned[key] = deepClone(obj[key]);
    }
  }
  return cloned;
};
\`\`\`

### 结构型模式

**适配器模式（Adapter）：**
适配器模式转换接口，使不兼容的接口能够一起工作。在 JavaScript 中，适配器模式常用于整合第三方库、处理不同数据格式、统一 API 接口等场景。适配器模式可以在不修改原有代码的情况下，实现接口的兼容。

\`\`\`javascript
// 适配器模式示例
// 旧 API
const oldAPI = {
  getUserInfo: (id) => ({ id, name: 'Alice', age: 25 }),
};

// 新 API
const newAPI = {
  fetchUser: async (id) => ({ userId: id, userName: 'Alice', userAge: 25 }),
};

// 适配器
class UserAPIAdapter {
  constructor(api) {
    this.api = api;
  }
  
  async getUser(id) {
    const user = await this.api.fetchUser(id);
    // 转换数据格式
    return {
      id: user.userId,
      name: user.userName,
      age: user.userAge,
    };
  }
}

// 使用适配器
const adapter = new UserAPIAdapter(newAPI);
const user = await adapter.getUser(1);
// { id: 1, name: 'Alice', age: 25 }

// 接口适配器
class LocalStorageAdapter {
  get(key) {
    const value = localStorage.getItem(key);
    try {
      return JSON.parse(value);
    } catch {
      return value;
    }
  }
  
  set(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }
  
  remove(key) {
    localStorage.removeItem(key);
  }
}
\`\`\`

**装饰器模式（Decorator）：**
装饰器模式动态为对象添加额外功能，不修改原有代码。在 JavaScript 中，装饰器模式可以通过高阶函数、类装饰器等方式实现。装饰器模式适合在不改变对象结构的情况下，扩展对象的功能。

\`\`\`javascript
// 函数装饰器
function log(target, name, descriptor) {
  const original = descriptor.value;
  descriptor.value = function(...args) {
    console.log(\`Calling \${name} with args:\`, args);
    const result = original.apply(this, args);
    console.log(\`Result:\`, result);
    return result;
  };
  return descriptor;
}

class Calculator {
  @log
  add(a, b) {
    return a + b;
  }
}

// 高阶函数装饰器
function withLogging(fn) {
  return function(...args) {
    console.log('Arguments:', args);
    const result = fn.apply(this, args);
    console.log('Result:', result);
    return result;
  };
}

function withTiming(fn) {
  return function(...args) {
    const start = performance.now();
    const result = fn.apply(this, args);
    const end = performance.now();
    console.log(\`Execution time: \${end - start}ms\`);
    return result;
  };
}

// 组合装饰器
const decoratedFn = withLogging(withTiming(expensiveOperation));

// 对象装饰器
class Coffee {
  cost() {
    return 5;
  }
}

class MilkDecorator {
  constructor(coffee) {
    this.coffee = coffee;
  }
  
  cost() {
    return this.coffee.cost() + 2;
  }
}

class SugarDecorator {
  constructor(coffee) {
    this.coffee = coffee;
  }
  
  cost() {
    return this.coffee.cost() + 1;
  }
}

let coffee = new Coffee();
coffee = new MilkDecorator(coffee);
coffee = new SugarDecorator(coffee);
console.log(coffee.cost()); // 8
\`\`\`

**代理模式（Proxy）：**
代理模式控制对对象的访问，添加额外的行为。ES6 的 Proxy 对象是实现代理模式的强大工具，可以拦截各种操作，如属性访问、赋值、函数调用等。代理模式常用于数据验证、缓存、访问控制等场景。

\`\`\`javascript
// 使用 ES6 Proxy
const user = { name: 'Alice', age: 25 };

const userProxy = new Proxy(user, {
  get(target, prop) {
    console.log(\`Getting \${prop}\`);
    return target[prop];
  },
  
  set(target, prop, value) {
    console.log(\`Setting \${prop} to \${value}\`);
    if (prop === 'age' && typeof value !== 'number') {
      throw new TypeError('Age must be a number');
    }
    target[prop] = value;
    return true;
  },
  
  has(target, prop) {
    console.log(\`Checking if \${prop} exists\`);
    return prop in target;
  },
});

// 缓存代理
function createCacheProxy(fn) {
  const cache = new Map();
  
  return new Proxy(fn, {
    apply(target, thisArg, args) {
      const key = JSON.stringify(args);
      
      if (cache.has(key)) {
        console.log('Returning cached result');
        return cache.get(key);
      }
      
      const result = target.apply(thisArg, args);
      cache.set(key, result);
      return result;
    },
  });
}

const expensiveCalculation = (n) => {
  console.log('Calculating...');
  return n * n;
};

const cachedCalculation = createCacheProxy(expensiveCalculation);
cachedCalculation(5); // Calculating... 25
cachedCalculation(5); // Returning cached result 25
\`\`\`

**外观模式（Facade）：**
外观模式提供统一的接口，简化复杂系统的使用。在 JavaScript 中，外观模式常用于封装复杂的 API 调用、统一多个模块的接口、简化库的使用等场景。外观模式可以降低系统的复杂度，提高代码的可读性。

\`\`\`javascript
// 外观模式示例
class PaymentFacade {
  constructor() {
    this.validator = new PaymentValidator();
    this.processor = new PaymentProcessor();
    this.notifier = new NotificationService();
    this.logger = new Logger();
  }
  
  async processPayment(paymentInfo) {
    try {
      // 验证支付信息
      this.validator.validate(paymentInfo);
      
      // 处理支付
      const result = await this.processor.process(paymentInfo);
      
      // 发送通知
      await this.notifier.sendConfirmation(paymentInfo.email, result);
      
      // 记录日志
      this.logger.log('Payment processed', result);
      
      return result;
    } catch (error) {
      this.logger.error('Payment failed', error);
      throw error;
    }
  }
}

// 使用外观
const payment = new PaymentFacade();
await payment.processPayment({
  amount: 100,
  cardNumber: '4111111111111111',
  email: 'user@example.com',
});
\`\`\`

### 行为型模式

**观察者模式（Observer）：**
观察者模式定义对象间的一对多依赖关系，当一个对象状态改变时，所有依赖它的对象都会收到通知。在 JavaScript 中，观察者模式广泛应用于事件处理、数据绑定、状态管理等场景。现代前端框架如 React、Vue 都大量使用观察者模式。

\`\`\`javascript
// 观察者模式实现
class EventEmitter {
  constructor() {
    this.events = {};
  }
  
  on(event, callback) {
    if (!this.events[event]) {
      this.events[event] = [];
    }
    this.events[event].push(callback);
    return () => this.off(event, callback);
  }
  
  off(event, callback) {
    if (!this.events[event]) return;
    this.events[event] = this.events[event].filter(cb => cb !== callback);
  }
  
  emit(event, ...args) {
    if (!this.events[event]) return;
    this.events[event].forEach(callback => callback(...args));
  }
  
  once(event, callback) {
    const wrapper = (...args) => {
      callback(...args);
      this.off(event, wrapper);
    };
    this.on(event, wrapper);
  }
}

// 使用示例
const emitter = new EventEmitter();
const unsubscribe = emitter.on('user:login', (user) => {
  console.log(\`User \${user.name} logged in\`);
});

emitter.emit('user:login', { name: 'Alice' });
unsubscribe();

// 简化的发布订阅模式
class PubSub {
  constructor() {
    this.subscribers = {};
  }
  
  subscribe(event, callback) {
    if (!this.subscribers[event]) {
      this.subscribers[event] = [];
    }
    this.subscribers[event].push(callback);
    return () => {
      this.subscribers[event] = this.subscribers[event].filter(cb => cb !== callback);
    };
  }
  
  publish(event, data) {
    if (!this.subscribers[event]) return;
    this.subscribers[event].forEach(callback => callback(data));
  }
}

// 状态管理中的观察者模式
class Store {
  constructor(initialState) {
    this.state = initialState;
    this.listeners = [];
  }
  
  getState() {
    return this.state;
  }
  
  setState(newState) {
    this.state = { ...this.state, ...newState };
    this.listeners.forEach(listener => listener(this.state));
  }
  
  subscribe(listener) {
    this.listeners.push(listener);
    return () => {
      this.listeners = this.listeners.filter(l => l !== listener);
    };
  }
}
\`\`\`

**策略模式（Strategy）：**
策略模式定义一系列算法，把它们封装起来，并使它们可以相互替换。策略模式让算法独立于使用它的客户端而变化。在 JavaScript 中，策略模式常用于表单验证、动画效果、支付方式选择等场景。

\`\`\`javascript
// 策略模式实现
const validationStrategies = {
  required: (value) => {
    if (!value || value.trim() === '') {
      return 'This field is required';
    }
    return null;
  },
  
  email: (value) => {
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      return 'Please enter a valid email';
    }
    return null;
  },
  
  minLength: (value, min) => {
    if (value.length < min) {
      return \`Minimum length is \${min} characters\`;
    }
    return null;
  },
  
  maxLength: (value, max) => {
    if (value.length > max) {
      return \`Maximum length is \${max} characters\`;
    }
    return null;
  },
};

class Validator {
  constructor() {
    this.rules = [];
  }
  
  addRule(field, strategy, ...args) {
    this.rules.push({ field, strategy, args });
    return this;
  }
  
  validate(data) {
    const errors = {};
    
    for (const rule of this.rules) {
      const { field, strategy, args } = rule;
      const value = data[field];
      const error = validationStrategies[strategy](value, ...args);
      
      if (error && !errors[field]) {
        errors[field] = error;
      }
    }
    
    return {
      isValid: Object.keys(errors).length === 0,
      errors,
    };
  }
}

// 使用示例
const validator = new Validator()
  .addRule('email', 'required')
  .addRule('email', 'email')
  .addRule('password', 'required')
  .addRule('password', 'minLength', 8);

const result = validator.validate({
  email: 'invalid-email',
  password: '123',
});

// 支付策略
const paymentStrategies = {
  creditCard: (amount, cardInfo) => {
    console.log(\`Processing credit card payment of $\${amount}\`);
    // 信用卡支付逻辑
  },
  
  paypal: (amount, paypalInfo) => {
    console.log(\`Processing PayPal payment of $\${amount}\`);
    // PayPal 支付逻辑
  },
  
  crypto: (amount, walletInfo) => {
    console.log(\`Processing crypto payment of $\${amount}\`);
    // 加密货币支付逻辑
  },
};

function processPayment(method, amount, info) {
  const strategy = paymentStrategies[method];
  if (!strategy) {
    throw new Error(\`Unknown payment method: \${method}\`);
  }
  return strategy(amount, info);
}
\`\`\`

**命令模式（Command）：**
命令模式将请求封装为对象，从而允许用不同的请求对客户进行参数化、对请求排队或记录请求日志，以及支持可撤销的操作。在 JavaScript 中，命令模式常用于实现撤销/重做功能、菜单操作、宏命令等场景。

\`\`\`javascript
// 命令模式实现
class Command {
  execute() {
    throw new Error('Execute method must be implemented');
  }
  
  undo() {
    throw new Error('Undo method must be implemented');
  }
}

class AddItemCommand extends Command {
  constructor(list, item) {
    super();
    this.list = list;
    this.item = item;
    this.index = null;
  }
  
  execute() {
    this.index = this.list.length;
    this.list.push(this.item);
  }
  
  undo() {
    if (this.index !== null) {
      this.list.splice(this.index, 1);
    }
  }
}

class RemoveItemCommand extends Command {
  constructor(list, index) {
    super();
    this.list = list;
    this.index = index;
    this.item = null;
  }
  
  execute() {
    this.item = this.list[this.index];
    this.list.splice(this.index, 1);
  }
  
  undo() {
    if (this.item !== null) {
      this.list.splice(this.index, 0, this.item);
    }
  }
}

// 命令管理器（支持撤销/重做）
class CommandManager {
  constructor() {
    this.history = [];
    this.redoStack = [];
  }
  
  execute(command) {
    command.execute();
    this.history.push(command);
    this.redoStack = [];
  }
  
  undo() {
    const command = this.history.pop();
    if (command) {
      command.undo();
      this.redoStack.push(command);
    }
  }
  
  redo() {
    const command = this.redoStack.pop();
    if (command) {
      command.execute();
      this.history.push(command);
    }
  }
}

// 使用示例
const list = [];
const manager = new CommandManager();

manager.execute(new AddItemCommand(list, 'Item 1'));
manager.execute(new AddItemCommand(list, 'Item 2'));
console.log(list); // ['Item 1', 'Item 2']

manager.undo();
console.log(list); // ['Item 1']

manager.redo();
console.log(list); // ['Item 1', 'Item 2']
\`\`\`

**迭代器模式（Iterator）：**
迭代器模式提供一种方法顺序访问一个聚合对象中的各个元素，而又不暴露该对象的内部表示。JavaScript 原生支持迭代器协议，通过 Symbol.iterator 实现自定义迭代器。迭代器模式常用于遍历复杂数据结构、实现懒加载等场景。

\`\`\`javascript
// 自定义迭代器
class RangeIterator {
  constructor(start, end, step = 1) {
    this.start = start;
    this.end = end;
    this.step = step;
    this.current = start;
  }
  
  [Symbol.iterator]() {
    return this;
  }
  
  next() {
    if (this.current < this.end) {
      const value = this.current;
      this.current += this.step;
      return { value, done: false };
    }
    return { value: undefined, done: true };
  }
}

const range = new RangeIterator(0, 10, 2);
for (const num of range) {
  console.log(num); // 0, 2, 4, 6, 8
}

// 树形结构迭代器
class TreeIterator {
  constructor(root) {
    this.stack = [root];
  }
  
  [Symbol.iterator]() {
    return this;
  }
  
  next() {
    if (this.stack.length === 0) {
      return { done: true };
    }
    
    const node = this.stack.pop();
    
    if (node.children) {
      for (let i = node.children.length - 1; i >= 0; i--) {
        this.stack.push(node.children[i]);
      }
    }
    
    return { value: node, done: false };
  }
}

// 生成器函数实现迭代器
function* fibonacci(limit) {
  let [prev, curr] = [0, 1];
  while (curr <= limit) {
    yield curr;
    [prev, curr] = [curr, prev + curr];
  }
}

for (const num of fibonacci(100)) {
  console.log(num); // 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89
}
\`\`\`

**状态模式（State）：**
状态模式允许一个对象在其内部状态改变时改变它的行为。对象看起来好像修改了它的类。状态模式将状态逻辑分散到不同的状态类中，避免大量的条件判断。在 JavaScript 中，状态模式常用于实现状态机、游戏角色状态、订单状态等场景。

\`\`\`javascript
// 状态模式实现
class TrafficLight {
  constructor() {
    this.state = new RedState(this);
  }
  
  changeState(state) {
    this.state = state;
  }
  
  next() {
    this.state.next();
  }
  
  report() {
    this.state.report();
  }
}

class RedState {
  constructor(light) {
    this.light = light;
  }
  
  next() {
    console.log('Red -> Green');
    this.light.changeState(new GreenState(this.light));
  }
  
  report() {
    console.log('Traffic light is RED - STOP');
  }
}

class GreenState {
  constructor(light) {
    this.light = light;
  }
  
  next() {
    console.log('Green -> Yellow');
    this.light.changeState(new YellowState(this.light));
  }
  
  report() {
    console.log('Traffic light is GREEN - GO');
  }
}

class YellowState {
  constructor(light) {
    this.light = light;
  }
  
  next() {
    console.log('Yellow -> Red');
    this.light.changeState(new RedState(this.light));
  }
  
  report() {
    console.log('Traffic light is YELLOW - CAUTION');
  }
}

// 使用示例
const trafficLight = new TrafficLight();
trafficLight.report(); // Traffic light is RED - STOP
trafficLight.next();   // Red -> Green
trafficLight.report(); // Traffic light is GREEN - GO

// 订单状态机
const OrderState = {
  PENDING: 'pending',
  CONFIRMED: 'confirmed',
  SHIPPED: 'shipped',
  DELIVERED: 'delivered',
  CANCELLED: 'cancelled',
};

const transitions = {
  [OrderState.PENDING]: [OrderState.CONFIRMED, OrderState.CANCELLED],
  [OrderState.CONFIRMED]: [OrderState.SHIPPED, OrderState.CANCELLED],
  [OrderState.SHIPPED]: [OrderState.DELIVERED],
  [OrderState.DELIVERED]: [],
  [OrderState.CANCELLED]: [],
};

function canTransition(from, to) {
  return transitions[from]?.includes(to) ?? false;
}
\`\`\`

### 应用场景

**单页应用架构中的设计模式：**
- 路由管理：观察者模式实现路由变化监听和页面切换
- 状态管理：单例模式确保全局状态唯一性，观察者模式实现状态订阅
- 组件通信：发布-订阅模式实现跨组件通信，避免紧耦合

\`\`\`javascript
// 路由管理器（观察者模式）
class Router {
  constructor() {
    this.routes = {};
    this.currentRoute = null;
    this.listeners = [];
  }
  
  register(path, handler) {
    this.routes[path] = handler;
  }
  
  navigate(path) {
    if (this.routes[path]) {
      this.currentRoute = path;
      this.routes[path]();
      this.listeners.forEach(listener => listener(path));
    }
  }
  
  subscribe(listener) {
    this.listeners.push(listener);
    return () => {
      this.listeners = this.listeners.filter(l => l !== listener);
    };
  }
}

// 全局状态管理（单例 + 观察者）
class AppState {
  static instance = null;
  
  constructor() {
    if (AppState.instance) return AppState.instance;
    AppState.instance = this;
    this.state = {};
    this.listeners = [];
  }
  
  setState(newState) {
    this.state = { ...this.state, ...newState };
    this.listeners.forEach(l => l(this.state));
  }
  
  subscribe(listener) {
    this.listeners.push(listener);
    return () => this.listeners.filter(l => l !== listener);
  }
}
\`\`\`

**表单验证中的设计模式：**
- 策略模式：不同的验证规则作为策略，灵活组合
- 装饰器模式：动态添加验证功能，如实时验证、异步验证
- 责任链模式：多个验证器按顺序执行

\`\`\`javascript
// 表单验证器（策略 + 责任链）
class FormValidator {
  constructor() {
    this.strategies = {};
    this.chain = [];
  }
  
  addStrategy(name, fn) {
    this.strategies[name] = fn;
    return this;
  }
  
  addRule(field, strategyName, ...args) {
    this.chain.push({ field, strategy: strategyName, args });
    return this;
  }
  
  validate(data) {
    const errors = {};
    
    for (const rule of this.chain) {
      const strategy = this.strategies[rule.strategy];
      if (strategy) {
        const error = strategy(data[rule.field], ...rule.args);
        if (error && !errors[rule.field]) {
          errors[rule.field] = error;
        }
      }
    }
    
    return { isValid: Object.keys(errors).length === 0, errors };
  }
}

const validator = new FormValidator()
  .addStrategy('required', v => v ? null : 'Required')
  .addStrategy('email', v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) ? null : 'Invalid email')
  .addRule('email', 'required')
  .addRule('email', 'email');
\`\`\`

**API 调用中的设计模式：**
- 代理模式：拦截请求和响应，添加缓存、日志等功能
- 适配器模式：适配不同的 API 格式，统一接口
- 装饰器模式：添加重试、超时、认证等功能

\`\`\`javascript
// API 客户端（代理 + 装饰器）
class APIClient {
  constructor(baseURL) {
    this.baseURL = baseURL;
    this.cache = new Map();
    this.interceptors = { request: [], response: [] };
  }
  
  addRequestInterceptor(fn) {
    this.interceptors.request.push(fn);
  }
  
  addResponseInterceptor(fn) {
    this.interceptors.response.push(fn);
  }
  
  async request(endpoint, options = {}) {
    let url = this.baseURL + endpoint;
    let config = options;
    
    // 执行请求拦截器
    for (const interceptor of this.interceptors.request) {
      [url, config] = await interceptor(url, config);
    }
    
    const cacheKey = JSON.stringify({ url, config });
    if (config.cache && this.cache.has(cacheKey)) {
      return this.cache.get(cacheKey);
    }
    
    let response = await fetch(url, config);
    
    // 执行响应拦截器
    for (const interceptor of this.interceptors.response) {
      response = await interceptor(response);
    }
    
    const data = await response.json();
    
    if (config.cache) {
      this.cache.set(cacheKey, data);
    }
    
    return data;
  }
}

const api = new APIClient('https://api.example.com');
api.addRequestInterceptor((url, config) => {
  config.headers = { ...config.headers, Authorization: 'Bearer token' };
  return [url, config];
});
\`\`\`

**动画效果中的设计模式：**
- 策略模式：不同的动画算法（缓动函数）作为策略
- 命令模式：将动画操作封装为命令，支持撤销和队列
- 观察者模式：动画状态变化通知订阅者

\`\`\`javascript
// 动画管理器（策略 + 命令）
const easingStrategies = {
  linear: t => t,
  easeIn: t => t * t,
  easeOut: t => t * (2 - t),
  easeInOut: t => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t,
};

class Animation {
  constructor(element, property, start, end, duration, easing = 'linear') {
    this.element = element;
    this.property = property;
    this.start = start;
    this.end = end;
    this.duration = duration;
    this.easing = easingStrategies[easing];
    this.startTime = null;
  }
  
  execute() {
    this.startTime = performance.now();
    this.tick();
  }
  
  tick() {
    const elapsed = performance.now() - this.startTime;
    const progress = Math.min(elapsed / this.duration, 1);
    const easedProgress = this.easing(progress);
    const value = this.start + (this.end - this.start) * easedProgress;
    
    this.element.style[this.property] = value + 'px';
    
    if (progress < 1) {
      requestAnimationFrame(() => this.tick());
    }
  }
}
\`\`\`

### 最佳实践

**设计模式使用原则：**
- 理解设计模式的意图和适用场景，避免为了使用模式而使用模式
- 选择适合的设计模式，根据具体问题选择最合适的解决方案
- 避免过度设计，简单问题用简单方案解决
- 结合 JavaScript 的特性，利用闭包、原型链、高阶函数等特性简化实现

\`\`\`javascript
// 过度设计的例子
class SingletonFactoryBuilder {
  // 不必要的复杂性
}

// 简洁的实现
const singleton = {
  instance: null,
  getInstance() {
    if (!this.instance) {
      this.instance = { data: {} };
    }
    return this.instance;
  },
};
\`\`\`

**代码组织与可维护性：**
- 保持代码简洁，设计模式应该简化代码而不是增加复杂性
- 注重可维护性，代码应该易于理解和修改
- 学习设计模式的变体，根据实际需求灵活调整
- 实践中积累经验，在真实项目中应用和体会设计模式

\`\`\`javascript
// 模块化组织设计模式
// patterns/observer.js
export class EventEmitter { /* ... */ }

// patterns/strategy.js
export const strategies = { /* ... */ }

// patterns/factory.js
export class Factory { /* ... */ }

// 使用
import { EventEmitter } from './patterns/observer';
import { strategies } from './patterns/strategy';
\`\`\`

**性能考虑：**
- 观察者模式中注意内存泄漏，及时取消订阅
- 代理模式中注意性能开销，避免过度拦截
- 迭代器模式中注意内存使用，大数据集使用生成器

\`\`\`javascript
// 避免内存泄漏
class Component {
  constructor() {
    this.unsubscribe = store.subscribe(this.handleChange);
  }
  
  handleChange = (state) => {
    // 处理状态变化
  }
  
  destroy() {
    // 清理订阅
    this.unsubscribe();
  }
}

// 使用 WeakMap 避免内存泄漏
const privateData = new WeakMap();

class MyClass {
  constructor() {
    privateData.set(this, { secret: 'value' });
  }
  
  getSecret() {
    return privateData.get(this).secret;
  }
}
\`\`\`

**测试设计模式：**
- 单元测试每个模式的核心功能
- 测试模式的边界情况
- 测试模式之间的交互

\`\`\`javascript
// 测试观察者模式
describe('EventEmitter', () => {
  it('should call listeners when event is emitted', () => {
    const emitter = new EventEmitter();
    const listener = jest.fn();
    
    emitter.on('test', listener);
    emitter.emit('test', 'data');
    
    expect(listener).toHaveBeenCalledWith('data');
  });
  
  it('should unsubscribe correctly', () => {
    const emitter = new EventEmitter();
    const listener = jest.fn();
    
    const unsubscribe = emitter.on('test', listener);
    unsubscribe();
    emitter.emit('test', 'data');
    
    expect(listener).not.toHaveBeenCalled();
  });
});
\`\`\``,
        createdAt: '2026-03-14',
        updatedAt: '2026-03-14'
    };
