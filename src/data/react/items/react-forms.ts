import { KnowledgeItem } from '@/types/knowledge';

export const react_forms: KnowledgeItem = {
      id: 'react-forms',
      title: 'React 表单处理最佳实践',
      category: 'react',
      difficulty: 'medium',
      tags: ['React', '表单', '状态管理', '验证'],
      content: `## React 表单处理最佳实践

表单是用户与应用交互的重要方式，表单处理涉及状态管理、验证、错误处理、提交等多个方面。React 提供了受控组件和非受控组件两种表单处理方式，同时社区也提供了丰富的表单处理库，开发者可以根据需求选择合适的方案。

### 表单实现方式详解

**受控组件：**
受控组件是指表单值由 React 状态控制的组件。每个表单元素都有一个对应的状态，通过 onChange 事件更新状态，通过 value 属性设置表单值。受控组件的优势在于：可以实时验证用户输入、可以动态修改输入值、可以禁用提交按钮直到表单有效、可以实现复杂的表单逻辑。受控组件的缺点是对于大型表单，需要管理大量状态，代码可能变得冗长。

**非受控组件：**
非受控组件是指表单值由 DOM 控制的组件，通过 ref 访问表单值。非受控组件更接近传统 HTML 表单的处理方式，适合简单的表单场景。非受控组件的优势在于：代码简洁、不需要管理大量状态、可以与第三方库集成。非受控组件的缺点是难以实现实时验证和动态修改。

**第三方表单库：**
React Hook Form 是高性能的表单库，采用受控组件与非受控组件混合的方式，最大限度地减少不必要的重新渲染。Formik 是功能丰富的表单库，提供了表单状态管理、验证、错误提示等完整解决方案。Zod 是 TypeScript 优先的验证库，可以与 React Hook Form 配合使用，提供类型安全的表单验证。

### 代码示例

\`\`\`javascript
// 受控组件
function ControlledForm() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({});
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // 实时验证
    validateField(name, value);
  };
  
  const validateField = (name, value) => {
    let error = '';
    
    switch (name) {
      case 'username':
        if (!value) error = 'Username is required';
        else if (value.length < 3) error = 'Username must be at least 3 characters';
        break;
      case 'email':
        if (!value) error = 'Email is required';
        else if (!/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(value)) error = 'Invalid email';
        break;
      case 'password':
        if (!value) error = 'Password is required';
        else if (value.length < 8) error = 'Password must be at least 8 characters';
        break;
    }
    
    setErrors(prev => ({ ...prev, [name]: error }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // 验证所有字段
    Object.keys(formData).forEach(key => {
      validateField(key, formData[key]);
    });
    
    if (Object.values(errors).every(e => !e)) {
      console.log('Form submitted:', formData);
    }
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username</label>
        <input
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
        {errors.username && <span>{errors.username}</span>}
      </div>
      
      <div>
        <label>Email</label>
        <input
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <span>{errors.email}</span>}
      </div>
      
      <div>
        <label>Password</label>
        <input
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
        />
        {errors.password && <span>{errors.password}</span>}
      </div>
      
      <button type="submit">Submit</button>
    </form>
  );
}

// 非受控组件
function UncontrolledForm() {
  const usernameRef = useRef(null);
  const emailRef = useRef(null);
  const fileRef = useRef(null);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const formData = {
      username: usernameRef.current.value,
      email: emailRef.current.value,
      file: fileRef.current.files[0]
    };
    
    console.log('Form submitted:', formData);
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username</label>
        <input ref={usernameRef} defaultValue="" />
      </div>
      
      <div>
        <label>Email</label>
        <input ref={emailRef} type="email" defaultValue="" />
      </div>
      
      <div>
        <label>File</label>
        <input ref={fileRef} type="file" />
      </div>
      
      <button type="submit">Submit</button>
    </form>
  );
}

// React Hook Form 基础用法
import { useForm } from 'react-hook-form';

function ReactHookForm() {
  const { 
    register, 
    handleSubmit, 
    formState: { errors, isSubmitting },
    reset 
  } = useForm({
    defaultValues: {
      username: '',
      email: '',
      password: ''
    }
  });
  
  const onSubmit = async (data) => {
    try {
      await fetch('/api/register', {
        method: 'POST',
        body: JSON.stringify(data)
      });
      reset();
    } catch (error) {
      console.error(error);
    }
  };
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Username</label>
        <input
          {...register('username', {
            required: 'Username is required',
            minLength: {
              value: 3,
              message: 'Username must be at least 3 characters'
            }
          })}
        />
        {errors.username && <span>{errors.username.message}</span>}
      </div>
      
      <div>
        <label>Email</label>
        <input
          type="email"
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/,
              message: 'Invalid email address'
            }
          })}
        />
        {errors.email && <span>{errors.email.message}</span>}
      </div>
      
      <div>
        <label>Password</label>
        <input
          type="password"
          {...register('password', {
            required: 'Password is required',
            minLength: {
              value: 8,
              message: 'Password must be at least 8 characters'
            }
          })}
        />
        {errors.password && <span>{errors.password.message}</span>}
      </div>
      
      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Submitting...' : 'Submit'}
      </button>
    </form>
  );
}

// React Hook Form + Zod 验证
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const schema = z.object({
  username: z.string().min(3, 'Username must be at least 3 characters'),
  email: z.string().email('Invalid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
  confirmPassword: z.string()
}).refine(data => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ['confirmPassword']
});

function FormWithZod() {
  const { 
    register, 
    handleSubmit, 
    formState: { errors } 
  } = useForm({
    resolver: zodResolver(schema)
  });
  
  return (
    <form onSubmit={handleSubmit(console.log)}>
      <input {...register('username')} />
      {errors.username && <span>{errors.username.message}</span>}
      
      <input type="email" {...register('email')} />
      {errors.email && <span>{errors.email.message}</span>}
      
      <input type="password" {...register('password')} />
      {errors.password && <span>{errors.password.message}</span>}
      
      <input type="password" {...register('confirmPassword')} />
      {errors.confirmPassword && <span>{errors.confirmPassword.message}</span>}
      
      <button type="submit">Submit</button>
    </form>
  );
}

// 复杂表单：动态字段
function DynamicForm() {
  const { register, control, handleSubmit } = useForm({
    defaultValues: {
      items: [{ name: '', quantity: 1 }]
    }
  });
  
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'items'
  });
  
  return (
    <form onSubmit={handleSubmit(console.log)}>
      {fields.map((field, index) => (
        <div key={field.id}>
          <input
            {...register(\`items.\${index}.name\`)}
            placeholder="Item name"
          />
          <input
            type="number"
            {...register(\`items.\${index}.quantity\`)}
            placeholder="Quantity"
          />
          <button type="button" onClick={() => remove(index)}>
            Remove
          </button>
        </div>
      ))}
      
      <button type="button" onClick={() => append({ name: '', quantity: 1 })}>
        Add Item
      </button>
      
      <button type="submit">Submit</button>
    </form>
  );
}

// 表单状态管理最佳实践
function OptimizedForm() {
  // 使用 useCallback 缓存处理函数
  const handleChange = useCallback((e) => {
    // 处理逻辑
  }, []);
  
  // 使用 useMemo 缓存验证结果
  const isValid = useMemo(() => {
    return formData.username && formData.email && !Object.keys(errors).length;
  }, [formData, errors]);
  
  // 防抖输入
  const debouncedSearch = useMemo(
    () => debounce((value) => {
      // 搜索逻辑
    }, 300),
    []
  );
  
  return (
    <form>
      {/* 表单内容 */}
    </form>
  );
}
\`\`\`

### 表单验证策略

**客户端验证：**
客户端验证可以提供即时反馈，减少服务器负担。常见的验证时机包括：即时验证（onChange）、失焦验证（onBlur）、提交验证（onSubmit）。即时验证适合需要实时反馈的字段，如密码强度；失焦验证适合需要用户完成输入后再验证的字段；提交验证确保所有字段都通过验证后才提交。

**服务器端验证：**
服务器端验证是最终验证保障，防止恶意提交和处理复杂的验证逻辑。服务器端验证应该返回详细的错误信息，包括哪个字段验证失败以及失败原因。前端应该正确处理服务器返回的验证错误，显示给用户。

### 性能优化

**减少重新渲染：**
使用 React Hook Form 的 Controller 组件可以将表单状态隔离，避免整个表单重新渲染。对于大型表单，可以将表单拆分为多个子组件，每个子组件管理自己的状态。

**防抖和节流：**
对于搜索输入等需要频繁触发验证的场景，使用防抖（debounce）延迟验证。对于滚动加载等场景，使用节流（throttle）限制触发频率。

**批量更新：**
React 18 的自动批处理可以将多个状态更新合并为一次渲染。对于复杂的表单状态更新，可以使用 useReducer 集中管理状态。`,
      createdAt: '2026-03-14',
      updatedAt: '2026-03-14'
    };
