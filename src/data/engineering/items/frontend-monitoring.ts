import { KnowledgeItem } from '@/types/knowledge';

export const frontend_monitoring: KnowledgeItem = {
      id: 'frontend-monitoring',
      title: '前端监控与错误追踪',
      category: 'engineering',
      difficulty: 'medium',
      tags: ['工程化', '前端监控', '错误追踪', '性能监控'],
      content: `## 前端监控与错误追踪

前端监控是保障应用质量的重要手段，通过实时监控和错误追踪，及时发现和解决问题。

### 监控类型

**性能监控：**
- 页面加载性能
- 核心 Web Vitals
- 资源加载时间
- 用户交互响应时间

**错误监控：**
- JavaScript 错误
- 资源加载错误
- API 错误
- 网络错误

**用户行为监控：**
- 页面浏览
- 点击事件
- 表单提交
- 会话录制

**业务监控：**
- 转化率
- 漏斗分析
- 业务指标
- 用户留存

### 监控工具

**Sentry：**
- 错误追踪
- 性能监控
- 会话录制
- 支持多种平台

**New Relic：**
- 应用性能监控
- 浏览器监控
- 服务器监控
- 全栈监控

**Datadog：**
- 实时监控
- 日志管理
- APM
- 安全监控

**Google Analytics 4：**
- 用户行为分析
- 转化追踪
- 受众分析
- 集成 Google 生态

**Clarity：**
- 会话录制
- 热图分析
- 用户行为分析
- 免费工具

### 错误追踪

**错误捕获：**
- try-catch
- window.onerror
- window.addEventListener('error')
- window.addEventListener('unhandledrejection')

**错误分类：**
- 语法错误
- 运行时错误
- 网络错误
- 资源错误

**错误处理：**
- 全局错误处理
- 组件错误边界
- 异步错误处理
- 错误上报

**错误分析：**
- 错误频率
- 错误分布
- 错误堆栈
- 用户环境

### 性能监控

**核心指标：**
- LCP (Largest Contentful Paint)
- FID (First Input Delay)
- CLS (Cumulative Layout Shift)
- TTFB (Time to First Byte)

**监控方法：**
- Web Vitals API
- Performance API
- Navigation Timing API
- Resource Timing API

**性能分析：**
- 首次加载性能
- 路由切换性能
- 交互性能
- 资源加载性能

### 用户行为监控

**事件追踪：**
- 页面浏览事件
- 点击事件
- 表单提交事件
- 自定义事件

**会话分析：**
- 会话时长
- 页面路径
- 停留时间
- 设备信息

**热图分析：**
- 点击热图
- 滚动热图
- 注意力热图
- 转化热图

### 集成与实施

**前端集成：**
- 初始化监控 SDK
- 配置采样率
- 自定义事件
- 错误边界

**后端集成：**
- 服务器端监控
- API 监控
- 数据库监控
- 全栈监控

**告警配置：**
- 错误率告警
- 性能指标告警
- 业务指标告警
- 自定义告警

### 最佳实践

**监控策略：**
- 全面监控：前端、后端、基础设施
- 实时告警：及时发现问题
- 数据可视化：便于分析
- 持续优化：基于监控数据

**错误处理：**
- 全局错误捕获
- 错误分类和优先级
- 错误复现和调试
- 错误修复和验证

**性能优化：**
- 基于监控数据优化
- 持续性能测试
- A/B 测试
- 性能预算

**用户体验：**
- 监控用户行为
- 分析用户反馈
- 优化用户流程
- 提升用户满意度

### 工具配置

**Sentry 配置：**

import * as Sentry from '@sentry/react';
import { BrowserTracing } from '@sentry/tracing';

Sentry.init({
  dsn: 'YOUR_DSN',
  integrations: [new BrowserTracing()],
  tracesSampleRate: 1.0,
  beforeSend(event) {
    // 自定义错误处理
    return event;
  }
});

**Google Analytics 配置：**

import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

const app = initializeApp({
  apiKey: 'YOUR_API_KEY',
  authDomain: 'YOUR_AUTH_DOMAIN',
  projectId: 'YOUR_PROJECT_ID',
  appId: 'YOUR_APP_ID',
  measurementId: 'YOUR_MEASUREMENT_ID'
});

const analytics = getAnalytics(app);

### 案例分析

**大型网站监控：**
- Google 的监控实践
- Facebook 的监控实践
- Amazon 的监控实践
- 阿里巴巴的监控实践

**实施效果：**
- 错误率降低
- 性能提升
- 用户体验改善
- 业务指标优化`,
      createdAt: '2026-03-14',
      updatedAt: '2026-03-14'
    };
