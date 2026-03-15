import { KnowledgeItem } from '@/types/knowledge';

export const react_i18n: KnowledgeItem = {
      id: 'react-i18n',
      title: 'React 国际化 (i18n) 最佳实践',
      category: 'react',
      difficulty: 'medium',
      tags: ['React', '国际化', 'i18n', '本地化'],
      content: `## React 国际化 (i18n) 最佳实践

国际化（Internationalization，简称 i18n）是构建全球应用的重要环节。一个优秀的国际化方案不仅要支持多语言翻译，还需要处理日期时间格式、数字格式、货币符号、复数规则、文字方向等复杂问题。React 提供了多种国际化方案，选择合适的方案对项目的可维护性和用户体验至关重要。

### 国际化库对比

**i18next - 功能最全面的国际化方案：**
- 功能丰富，生态完整，支持 React、Vue、Angular 等多种框架
- 支持复数、插值、嵌套翻译、命名空间等高级功能
- 提供浏览器语言检测、后端加载、缓存等插件
- 支持服务端渲染（SSR）和静态站点生成（SSG）
- 社区活跃，文档完善，是 React 国际化的首选方案

\`\`\`typescript
// i18next 配置示例
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpBackend from 'i18next-http-backend';

i18n
  .use(HttpBackend) // 从服务器加载翻译文件
  .use(LanguageDetector) // 检测用户语言
  .use(initReactI18next) // 绑定 react-i18next
  .init({
    fallbackLng: 'en', // 默认语言
    supportedLngs: ['en', 'zh', 'ja', 'ko'],
    
    ns: ['common', 'home', 'about'], // 命名空间
    defaultNS: 'common',
    
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json', // 翻译文件路径
    },
    
    detection: {
      order: ['querystring', 'cookie', 'localStorage', 'navigator'],
      caches: ['cookie', 'localStorage'],
    },
    
    interpolation: {
      escapeValue: false, // React 已经处理 XSS
    },
    
    react: {
      useSuspense: true, // 使用 Suspense 加载翻译
    },
  });

export default i18n;
\`\`\`

**react-intl - Airbnb 出品的国际化方案：**
- Airbnb 开发的 React 国际化解决方案，专注于格式化
- 基于 ICU 消息格式，支持复杂的复数和性别规则
- 提供 FormattedMessage、FormattedDate、FormattedNumber 等组件
- 支持 React 和 React Native，API 设计一致
- 适合需要复杂格式化的应用，如电商、金融类应用

\`\`\`typescript
// react-intl 配置示例
import { IntlProvider, FormattedMessage, FormattedNumber, FormattedDate } from 'react-intl';

const messages = {
  en: {
    greeting: 'Hello, {name}!',
    items: '{count, plural, one {# item} other {# items}}',
    income: '{gender, select, male {He earns} female {She earns} other {They earn}} {amount}',
  },
  zh: {
    greeting: '你好，{name}！',
    items: '{count} 个项目',
    income: '{gender, select, male {他赚} female {她赚} other {他们赚}} {amount}',
  },
};

function App() {
  const [locale, setLocale] = useState('en');
  
  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      <div>
        <FormattedMessage id="greeting" values={{ name: 'Alice' }} />
        <FormattedNumber value={1234.56} style="currency" currency="USD" />
        <FormattedDate value={new Date()} year="numeric" month="long" day="numeric" />
      </div>
    </IntlProvider>
  );
}
\`\`\`

**Format.js - 底层格式化工具集：**
- 一套国际化工具集，react-intl 的底层依赖
- 支持格式化日期、数字、货币、相对时间等
- 提供 ICU 消息格式的完整实现
- 可以独立使用，也可以与其他国际化库配合

### 实现策略

**消息管理最佳实践：**
- 集中管理翻译文件，使用 JSON 或 YAML 格式存储
- 按功能模块划分命名空间，避免单个文件过大
- 支持动态加载翻译文件，减少初始加载体积
- 使用翻译管理工具（如 Crowdin、Lokalise）协作翻译

\`\`\`typescript
// 翻译文件结构示例
// /locales/en/common.json
{
  "welcome": "Welcome to our app",
  "navigation": {
    "home": "Home",
    "about": "About",
    "contact": "Contact"
  },
  "errors": {
    "required": "This field is required",
    "invalidEmail": "Please enter a valid email address"
  }
}

// /locales/zh/common.json
{
  "welcome": "欢迎使用我们的应用",
  "navigation": {
    "home": "首页",
    "about": "关于我们",
    "contact": "联系我们"
  },
  "errors": {
    "required": "此字段为必填项",
    "invalidEmail": "请输入有效的电子邮件地址"
  }
}

// 组件中使用翻译
import { useTranslation } from 'react-i18next';

function Navigation() {
  const { t } = useTranslation('common');
  
  return (
    <nav>
      <Link to="/">{t('navigation.home')}</Link>
      <Link to="/about">{t('navigation.about')}</Link>
      <Link to="/contact">{t('navigation.contact')}</Link>
    </nav>
  );
}
\`\`\`

**语言检测策略：**
- 从 URL 参数检测（如 ?lang=zh），适合 SEO 和分享链接
- 从浏览器设置检测（navigator.language），提供默认语言
- 从用户偏好检测（localStorage/cookie），记住用户选择
- 优先级：URL 参数 > 用户偏好 > 浏览器设置 > 默认语言

\`\`\`typescript
// 语言切换组件
import { useTranslation } from 'react-i18next';

function LanguageSwitcher() {
  const { i18n } = useTranslation();
  
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    // 保存用户偏好
    localStorage.setItem('preferredLanguage', lng);
    // 更新 URL 参数
    const url = new URL(window.location.href);
    url.searchParams.set('lang', lng);
    window.history.replaceState({}, '', url.toString());
  };
  
  return (
    <div className="language-switcher">
      <button 
        onClick={() => changeLanguage('en')}
        className={i18n.language === 'en' ? 'active' : ''}
      >
        English
      </button>
      <button 
        onClick={() => changeLanguage('zh')}
        className={i18n.language === 'zh' ? 'active' : ''}
      >
        中文
      </button>
    </div>
  );
}
\`\`\`

**文本提取与翻译工作流：**
- 使用 i18next-scanner 或 babel-plugin-react-intl 自动提取文本
- 支持批量翻译，导出为 XLIFF 或 CSV 格式
- 与翻译服务集成，自动化翻译流程
- 使用 CI/CD 检查翻译完整性

\`\`\`javascript
// i18next-scanner 配置
module.exports = {
  input: ['src/**/*.{js,jsx,ts,tsx}'],
  output: 'public/locales',
  options: {
    debug: true,
    sort: true,
    func: {
      list: ['t', 'i18n.t'],
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },
    trans: {
      component: 'Trans',
      i18nKey: 'i18nKey',
      defaultsKey: 'defaults',
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },
    lngs: ['en', 'zh', 'ja'],
    ns: ['common', 'home'],
    defaultLng: 'en',
    defaultNs: 'common',
  },
};
\`\`\`

### 性能优化

**懒加载翻译文件：**
- 按需加载翻译文件，减少初始加载体积
- 使用命名空间分隔翻译，按页面或功能加载
- 配合 React Suspense 提供加载状态

\`\`\`typescript
// 懒加载翻译配置
i18n
  .use(HttpBackend)
  .use(initReactI18next)
  .init({
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    },
    // 只加载需要的命名空间
    partialBundledLanguages: true,
    // 预加载常用语言
    preload: ['en'],
  });

// 动态加载命名空间
function AdminPanel() {
  const { t } = useTranslation('admin', { useSuspense: true });
  return <div>{t('title')}</div>;
}

// 使用 Suspense 处理加载状态
function App() {
  return (
    <Suspense fallback={<Loading />}>
      <AdminPanel />
    </Suspense>
  );
}
\`\`\`

**缓存翻译文件：**
- 使用 Service Worker 缓存翻译文件
- 利用浏览器 HTTP 缓存
- 使用 localStorage 缓存已加载的翻译

\`\`\`typescript
// 使用 localStorage 缓存
const localStorageBackend = {
  type: 'localStorage',
  prefix: 'i18next_',
  expirationTime: 7 * 24 * 60 * 60 * 1000, // 7天
};

i18n.use(initReactI18next).init({
  backend: {
    backends: [
      localStorageBackend, // 优先从缓存读取
      HttpBackend, // 缓存未命中时从服务器加载
    ],
  },
});
\`\`\`

**优化渲染性能：**
- 避免不必要的重新渲染，使用 memo 包裹组件
- 使用 useMemo 缓存翻译结果
- 避免在渲染中动态生成翻译 key

\`\`\`typescript
// 优化前：每次渲染都创建新对象
function UserCard({ user }) {
  const { t } = useTranslation();
  return (
    <div>
      <h2>{t('user.greeting', { name: user.name })}</h2>
      <p>{t('user.role', { role: user.role })}</p>
    </div>
  );
}

// 优化后：使用 memo 和 useMemo
const UserCard = memo(function UserCard({ user }) {
  const { t } = useTranslation();
  const values = useMemo(() => ({ name: user.name }), [user.name]);
  return (
    <div>
      <h2>{t('user.greeting', values)}</h2>
      <p>{t('user.role', { role: user.role })}</p>
    </div>
  );
});
\`\`\`

### 最佳实践

**组件化翻译：**
- 创建国际化组件封装翻译逻辑
- 提高代码复用性，统一翻译风格
- 便于后期维护和修改

\`\`\`typescript
// 封装翻译组件
interface TranslatedTextProps {
  id: string;
  values?: Record<string, string | number>;
  defaultValue?: string;
}

const TranslatedText: React.FC<TranslatedTextProps> = ({ 
  id, 
  values, 
  defaultValue 
}) => {
  const { t } = useTranslation();
  return <>{t(id, values, { defaultValue })}</>;
};

// 使用示例
<TranslatedText id="welcome.message" values={{ name: 'Alice' }} />
\`\`\`

**占位符和插值：**
- 使用占位符处理动态内容，避免字符串拼接
- 支持复数形式，不同语言复数规则不同
- 支持性别变化，某些语言需要根据性别调整

\`\`\`typescript
// 插值示例
// en.json
{
  "greeting": "Hello, {{name}}!",
  "items": "{{count}} item",
  "items_plural": "{{count}} items"
}

// zh.json
{
  "greeting": "你好，{{name}}！",
  "items": "{{count}} 个项目"
}

// 使用
t('greeting', { name: 'Alice' }) // "Hello, Alice!" / "你好，Alice！"
t('items', { count: 1 }) // "1 item" / "1 个项目"
t('items', { count: 5 }) // "5 items" / "5 个项目"
\`\`\`

**日期和时间本地化：**
- 使用本地化的日期和时间格式
- 考虑时区问题，显示用户本地时间
- 使用 Intl.DateTimeFormat 或库处理

\`\`\`typescript
// 使用 Intl API 格式化日期
const formatDate = (date: Date, locale: string) => {
  return new Intl.DateTimeFormat(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'long',
  }).format(date);
};

// en: "Saturday, March 15, 2026"
// zh: "2026年3月15日星期六"

// 使用 react-intl
import { FormattedDate, FormattedRelativeTime } from 'react-intl';

<FormattedDate 
  value={new Date()} 
  year="numeric" 
  month="long" 
  day="numeric" 
/>

<FormattedRelativeTime 
  value={-5} 
  unit="minute" 
  numeric="auto" 
/>
// "5 minutes ago" / "5分钟前"
\`\`\`

**数字和货币本地化：**
- 使用本地化的数字格式
- 正确处理货币符号和位置
- 使用 Intl.NumberFormat 或库处理

\`\`\`typescript
// 使用 Intl API 格式化数字
const formatNumber = (number: number, locale: string) => {
  return new Intl.NumberFormat(locale).format(number);
};

// en: "1,234,567.89"
// zh: "1,234,567.89"
// de: "1.234.567,89"

// 格式化货币
const formatCurrency = (amount: number, locale: string, currency: string) => {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
  }).format(amount);
};

// en-US, USD: "$1,234.56"
// zh-CN, CNY: "¥1,234.56"
// ja-JP, JPY: "￥1,235"
\`\`\`

**RTL（从右到左）布局支持：**
- 测试 RTL 布局，如阿拉伯语、希伯来语
- 使用 CSS 逻辑属性（start/end 代替 left/right）
- 提供布局方向切换功能

\`\`\`typescript
// RTL 支持
function App() {
  const { i18n } = useTranslation();
  const isRTL = ['ar', 'he', 'fa'].includes(i18n.language);
  
  return (
    <div dir={isRTL ? 'rtl' : 'ltr'} className={isRTL ? 'rtl' : 'ltr'}>
      {/* 内容 */}
    </div>
  );
}

// CSS 逻辑属性
.card {
  padding-inline-start: 16px; /* LTR: padding-left, RTL: padding-right */
  margin-inline-end: 8px;
  border-start-start-radius: 8px; /* LTR: top-left, RTL: top-right */
}
\`\`\`

**测试国际化：**
- 测试不同语言的渲染效果
- 测试文本长度变化对布局的影响
- 测试 RTL 布局
- 测试日期、数字、货币格式化

\`\`\`typescript
// 国际化测试示例
import { render, screen } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';

describe('Navigation', () => {
  it('renders in English', () => {
    i18n.changeLanguage('en');
    render(
      <I18nextProvider i18n={i18n}>
        <Navigation />
      </I18nextProvider>
    );
    expect(screen.getByText('Home')).toBeInTheDocument();
  });

  it('renders in Chinese', () => {
    i18n.changeLanguage('zh');
    render(
      <I18nextProvider i18n={i18n}>
        <Navigation />
      </I18nextProvider>
    );
    expect(screen.getByText('首页')).toBeInTheDocument();
  });
});
\`\`\``,
        createdAt: '2026-03-14',
        updatedAt: '2026-03-14'
    };
