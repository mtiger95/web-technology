import { KnowledgeItem } from '@/types/knowledge';

export const react_fundamentals: KnowledgeItem = {
      id: 'react-fundamentals',
      title: 'React 核心原理与虚拟 DOM',
      category: 'react',
      difficulty: 'medium',
      tags: ['React', '虚拟 DOM', '组件', '状态管理'],
      content: `## React 核心原理与虚拟 DOM

React 是一个用于构建用户界面的 JavaScript 库，其核心原理包括虚拟 DOM、组件化和单向数据流。

### ⚛️ 虚拟 DOM 原理

虚拟 DOM 是 React 性能优化的关键。它是一个轻量级的 JavaScript 对象，用来描述真实 DOM 的结构。当组件状态变化时，React 会先更新虚拟 DOM，然后通过 diff 算法计算出最小的 DOM 操作，最后批量应用到真实 DOM 上。

**虚拟 DOM 的优势：**
- **减少直接操作 DOM 的次数，提高性能**
- **提供跨平台能力，如 React Native**
- **简化状态管理和组件更新逻辑**

### 💻 代码示例：虚拟 DOM 对比

\`\`\`javascript
// 真实 DOM 操作
const element = document.createElement('div');
element.className = 'container';
element.textContent = 'Hello, World!';
document.body.appendChild(element);

// 虚拟 DOM（React）
const element = React.createElement(
  'div',
  { className: 'container' },
  'Hello, World!'
);

// JSX 语法（编译为 React.createElement）
const element = (
  <div className="container">
    Hello, World!
  </div>
);
\`\`\`

#### 🔄 React 渲染流程示例

\`\`\`javascript
// 1. 初始渲染
function App() {
  const [count, setCount] = React.useState(0);
  
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}

// 2. 状态变化
// 用户点击按钮，setCount(count + 1) 被调用

// 3. 创建新的虚拟 DOM
// React 根据新的状态创建新的虚拟 DOM 树

// 4. Diff 算法
// React 比较新旧虚拟 DOM 树，找出差异

// 5. 最小化 DOM 操作
// React 只更新变化的部分（例如，只更新文本节点）

// 6. 批量更新
// React 将多个状态更新合并为一次 DOM 操作
\`\`\`

### 🧩 组件化思想

React 的组件化思想让代码更加模块化和可维护：
- **组件是独立的、可复用的代码单元**
- **每个组件有自己的状态和属性**
- **组件通过 props 传递数据，通过 state 管理内部状态**

### 💻 代码示例：组件化实践

\`\`\`javascript
// 函数组件
function Welcome(props) {
  return <h1>Hello, {props.name}!</h1>;
}

// 使用组件
function App() {
  return (
    <div>
      <Welcome name="Alice" />
      <Welcome name="Bob" />
    </div>
  );
}

// 类组件
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}!</h1>;
  }
}

// 组合组件
function Card({ title, content, footer }) {
  return (
    <div className="card">
      <div className="card-header">{title}</div>
      <div className="card-body">{content}</div>
      <div className="card-footer">{footer}</div>
    </div>
  );
}

function App() {
  return (
    <Card
      title="Card Title"
      content={<p>Card content goes here.</p>}
      footer={<button>Action</button>}
    />
  );
}
\`\`\`

### 单向数据流

React 采用单向数据流，数据从父组件流向子组件：
- 父组件通过 props 向子组件传递数据
- 子组件通过回调函数与父组件通信
- 状态管理更加清晰可预测

### 代码示例

#### 单向数据流示例

\`\`\`javascript
// 父组件
function Parent() {
  const [count, setCount] = React.useState(0);
  
  const increment = () => {
    setCount(count + 1);
  };
  
  return (
    <div>
      <h1>Parent Count: {count}</h1>
      <Child count={count} onIncrement={increment} />
    </div>
  );
}

// 子组件
function Child({ count, onIncrement }) {
  return (
    <div>
      <h2>Child Count: {count}</h2>
      <button onClick={onIncrement}>Increment</button>
    </div>
  );
}

// 状态提升
// 多个子组件共享状态时，将状态提升到最近的共同父组件
function Parent() {
  const [value, setValue] = React.useState('');
  
  return (
    <div>
      <Input value={value} onChange={setValue} />
      <Display value={value} />
    </div>
  );
}

function Input({ value, onChange }) {
  return <input value={value} onChange={(e) => onChange(e.target.value)} />;
}

function Display({ value }) {
  return <p>Value: {value}</p>;
}
\`\`\`

### 生命周期

React 组件的生命周期包括挂载、更新和卸载三个阶段：
- 挂载阶段：constructor → render → componentDidMount：React组件的生命周期挂载阶段包括三个主要方法，constructor是组件创建时调用的构造函数，用于初始化state和绑定方法，render方法负责返回JSX描述的UI结构，componentDidMount在组件挂载到DOM后立即调用，是进行DOM操作、网络请求、订阅事件等副作用操作的最佳时机，挂载阶段只执行一次，是组件生命周期的起点
- 更新阶段：shouldComponentUpdate → render → componentDidUpdate：React组件的更新阶段在props或state变化时触发，shouldComponentUpdate用于决定是否需要重新渲染，返回false可以跳过渲染优化性能，render方法根据新的props和state返回新的JSX，componentDidUpdate在组件更新后调用，可以访问更新前的props和state，是进行DOM操作、网络请求等副作用操作的时机，更新阶段可能执行多次
- 卸载阶段：componentWillUnmount：React组件的卸载阶段只包含componentWillUnmount一个方法，在组件从DOM中移除前调用，是进行清理操作的最佳时机，如清除定时器、取消网络请求、移除事件监听器、清理订阅等，componentWillUnmount只执行一次，是组件生命周期的终点，不正确的清理可能导致内存泄漏

### 代码示例

#### 类组件生命周期示例

\`\`\`javascript
class LifecycleComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    console.log('Constructor');
  }
  
  componentDidMount() {
    console.log('Component did mount');
    // 发起网络请求
    this.fetchData();
    // 设置定时器
    this.timer = setInterval(() => {
      this.setState({ count: this.state.count + 1 });
    }, 1000);
  }
  
  componentDidUpdate(prevProps, prevState) {
    console.log('Component did update');
    // 检查 props 或 state 是否变化
    if (prevProps.id !== this.props.id) {
      this.fetchData();
    }
  }
  
  componentWillUnmount() {
    console.log('Component will unmount');
    // 清理定时器
    clearInterval(this.timer);
    // 取消网络请求
    if (this.abortController) {
      this.abortController.abort();
    }
  }
  
  fetchData() {
    this.abortController = new AbortController();
    fetch(\`/api/data/\${this.props.id}\`, {
      signal: this.abortController.signal
    })
      .then(response => response.json())
      .then(data => this.setState({ data }))
      .catch(error => console.error('Error:', error));
  }
  
  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <p>Props: {this.props.id}</p>
      </div>
    );
  }
}
\`\`\`

#### Hooks 生命周期示例

\`\`\`javascript
function LifecycleComponent({ id }) {
  const [count, setCount] = React.useState(0);
  const [data, setData] = React.useState(null);
  
  // 挂载和更新
  React.useEffect(() => {
    console.log('Effect ran');
    
    // 发起网络请求
    const abortController = new AbortController();
    fetch(\`/api/data/\${id}\`, {
      signal: abortController.signal
    })
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error:', error));
    
    // 清理函数（卸载或依赖变化时执行）
    return () => {
      console.log('Cleanup');
      abortController.abort();
    };
  }, [id]); // 依赖数组
  
  // 挂载
  React.useEffect(() => {
    console.log('Component mounted');
    
    // 设置定时器
    const timer = setInterval(() => {
      setCount(prev => prev + 1);
    }, 1000);
    
    // 清理定时器
    return () => clearInterval(timer);
  }, []); // 空依赖数组，只在挂载时执行
  
  return (
    <div>
      <h1>Count: {count}</h1>
      <p>Props: {id}</p>
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
    </div>
  );
}
\`\`\`

### 最佳实践

- 使用函数组件和 Hooks 代替 class 组件
- 合理使用 state 和 props，避免不必要的渲染
- 使用 key 属性提高列表渲染性能
- 组件拆分要合理，保持单一职责原则
- 使用 React.memo 优化组件渲染
- 使用 useMemo 和 useCallback 优化性能
- 避免在渲染中创建新对象和函数
- 合理使用 Context API`,
      createdAt: '2026-03-14',
      updatedAt: '2026-03-14'
    };
