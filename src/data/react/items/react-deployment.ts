import { KnowledgeItem } from '@/types/knowledge';

export const react_deployment: KnowledgeItem = {
      id: 'react-deployment',
      title: 'React 应用部署',
      category: 'react',
      difficulty: 'medium',
      tags: ['React', '部署', 'CI/CD', 'Docker', '性能优化'],
      content: `## React 应用部署

将 React 应用部署到生产环境需要考虑构建优化、环境配置、静态资源托管、CDN 加速等多个方面。理解部署流程和最佳实践对于确保应用的性能和稳定性至关重要。

### 构建优化

**生产构建：**
使用构建工具创建优化的生产版本。

\`\`\`bash
# Create React App
npm run build

# Vite
npm run build

# Next.js
npm run build
\`\`\`

**构建分析：**
分析构建产物，找出体积过大的模块。

\`\`\`javascript
// vite.config.ts
import { defineConfig } from 'vite';
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig({
  plugins: [
    visualizer({
      open: true,
      gzipSize: true,
    }),
  ],
});

// webpack.config.js
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  plugins: [
    new BundleAnalyzerPlugin(),
  ],
};
\`\`\`

**代码分割：**
使用动态导入实现代码分割。

\`\`\`typescript
import { lazy, Suspense } from 'react';

// 路由级别代码分割
const Dashboard = lazy(() => import('./pages/Dashboard'));
const Settings = lazy(() => import('./pages/Settings'));

// 组件级别代码分割
const HeavyChart = lazy(() => import('./components/HeavyChart'));

function App() {
  return (
    <Suspense fallback={<Spinner />}>
      <Dashboard />
    </Suspense>
  );
}
\`\`\`

### 环境变量管理

**环境变量配置：**
使用环境变量管理不同环境的配置。

\`\`\`bash
# .env.development
REACT_APP_API_URL=http://localhost:3001/api
REACT_APP_ENV=development

# .env.production
REACT_APP_API_URL=https://api.example.com
REACT_APP_ENV=production

# .env.staging
REACT_APP_API_URL=https://staging-api.example.com
REACT_APP_ENV=staging
\`\`\`

\`\`\`typescript
// 使用环境变量
const config = {
  apiUrl: import.meta.env.VITE_API_URL || process.env.REACT_APP_API_URL,
  environment: import.meta.env.VITE_ENV || process.env.REACT_APP_ENV,
  isProduction: process.env.NODE_ENV === 'production',
};

// 类型定义
interface ImportMetaEnv {
  readonly VITE_API_URL: string;
  readonly VITE_ENV: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
\`\`\`

### 静态资源托管

**Nginx 配置：**
使用 Nginx 托管静态资源并配置 SPA 路由。

\`\`\`nginx
# /etc/nginx/conf.d/react-app.conf
server {
    listen 80;
    server_name example.com;
    root /var/www/react-app;
    index index.html;

    # Gzip 压缩
    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml;
    gzip_min_length 1000;

    # 静态资源缓存
    location ~* \\.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # SPA 路由：所有路由都返回 index.html
    location / {
        try_files $uri $uri/ /index.html;
    }

    # API 代理
    location /api {
        proxy_pass http://api-server:3001;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }

    # 安全头
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;
}
\`\`\`

### Docker 部署

**多阶段构建：**
使用 Docker 多阶段构建优化镜像大小。

\`\`\`dockerfile
# Dockerfile
# 构建阶段
FROM node:18-alpine AS builder

WORKDIR /app

# 复制依赖文件
COPY package*.json ./

# 安装依赖
RUN npm ci --only=production

# 复制源代码
COPY . .

# 构建
RUN npm run build

# 生产阶段
FROM nginx:alpine

# 复制构建产物
COPY --from=builder /app/dist /usr/share/nginx/html

# 复制 nginx 配置
COPY nginx.conf /etc/nginx/conf.d/default.conf

# 暴露端口
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
\`\`\`

**Docker Compose：**
使用 Docker Compose 编排多个服务。

\`\`\`yaml
# docker-compose.yml
version: '3.8'

services:
  frontend:
    build: .
    ports:
      - "80:80"
    depends_on:
      - api
    environment:
      - NODE_ENV=production

  api:
    image: node:18-alpine
    working_dir: /app
    volumes:
      - ./api:/app
    ports:
      - "3001:3001"
    command: npm start

  redis:
    image: redis:alpine
    ports:
      - "6379:6379"
\`\`\`

### CI/CD 部署

**GitHub Actions：**
使用 GitHub Actions 自动化部署流程。

\`\`\`yaml
# .github/workflows/deploy.yml
name: Deploy

on:
  push:
    branches: [main]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
      - uses: actions/checkout@v4
      
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '18'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Run tests
        run: npm test
      
      - name: Build
        run: npm run build
        env:
          VITE_API_URL: \${{ secrets.API_URL }}
      
      - name: Deploy to S3
        uses: jakejarvis/s3-sync-action@master
        with:
          args: --delete
        env:
          AWS_S3_BUCKET: \${{ secrets.S3_BUCKET }}
          AWS_ACCESS_KEY_ID: \${{ secrets.AWS_ACCESS_KEY_ID }}
          AWS_SECRET_ACCESS_KEY: \${{ secrets.AWS_SECRET_ACCESS_KEY }}
          SOURCE_DIR: 'dist'
      
      - name: Invalidate CloudFront
        uses: chetan/invalidate-cloudfront-action@master
        env:
          DISTRIBUTION: \${{ secrets.CLOUDFRONT_DISTRIBUTION_ID }}
          PATHS: '/*'
\`\`\`

### CDN 和缓存策略

**静态资源 CDN：**
将静态资源部署到 CDN 加速访问。

\`\`\`typescript
// vite.config.ts
export default defineConfig({
  base: 'https://cdn.example.com/',
  build: {
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        // 文件名带 hash
        entryFileNames: 'assets/[name].[hash].js',
        chunkFileNames: 'assets/[name].[hash].js',
        assetFileNames: 'assets/[name].[hash].[ext]',
      },
    },
  },
});
\`\`\`

**Service Worker 缓存：**
使用 Service Worker 实现离线缓存。

\`\`\`typescript
// 注册 Service Worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then(registration => {
        console.log('SW registered:', registration);
      })
      .catch(error => {
        console.log('SW registration failed:', error);
      });
  });
}

// sw.js
const CACHE_NAME = 'app-v1';
const urlsToCache = [
  '/',
  '/static/js/main.js',
  '/static/css/main.css',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
\`\`\``,
      createdAt: '2026-03-15',
      updatedAt: '2026-03-15'
    };
