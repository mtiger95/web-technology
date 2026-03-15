import { KnowledgeItem } from '@/types/knowledge';

export const build_optimization: KnowledgeItem = {
      id: 'build-optimization',
      title: '构建工具优化',
      category: 'engineering',
      difficulty: 'medium',
      tags: ['工程化', '构建工具', 'webpack', 'vite', '性能优化'],
      content: `## 构建工具优化

构建工具是前端工程化的核心，优化构建配置可以显著提升开发效率和构建性能。现代前端项目通常使用Webpack、Vite、Rollup等构建工具，每种工具都有其特点和适用场景。理解这些工具的工作原理和优化策略，对于提升项目构建效率、减少构建时间、优化输出产物至关重要。

### 构建工具对比详解

**Webpack：**
Webpack是最成熟的前端构建工具，功能强大且生态丰富。它通过模块依赖图（Dependency Graph）分析项目结构，将所有模块打包成一个或多个bundle。Webpack支持代码分割、懒加载、Tree Shaking等现代前端特性，适合复杂的企业级应用。但Webpack的构建速度相对较慢，特别是在开发环境下，需要通过缓存、并行构建等优化手段提升性能。

\`\`\`javascript
// Webpack 核心概念
module.exports = {
  // 入口：构建的起点
  entry: './src/index.js',
  
  // 输出：构建的产物
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
    clean: true,
  },
  
  // Loader：处理非JavaScript文件
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
  
  // 插件：扩展Webpack功能
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
    }),
  ],
  
  // 模式：开发或生产
  mode: 'production',
};
\`\`\`

**Vite：**
Vite是新一代前端构建工具，由Vue作者尤雨溪开发。Vite在开发环境下使用原生ES模块，无需打包即可启动开发服务器，实现毫秒级的热更新。生产环境使用Rollup进行构建，输出优化的产物。Vite适合现代前端项目，特别是Vue、React、Svelte等框架项目，开发体验极佳。

\`\`\`javascript
// Vite 配置示例
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  // 插件
  plugins: [react()],
  
  // 路径别名
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  
  // 开发服务器
  server: {
    port: 3000,
    open: true,
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        changeOrigin: true,
      },
    },
  },
  
  // 构建配置
  build: {
    outDir: 'dist',
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          utils: ['lodash', 'axios'],
        },
      },
    },
  },
});
\`\`\`

**Rollup：**
Rollup专注于JavaScript库的构建，Tree Shaking能力最强，输出体积最小。Rollup使用ES模块作为输入，可以生成多种格式（ESM、CJS、UMD、IIFE）的输出。Rollup配置简单，适合npm包、组件库、工具库等场景。许多知名库（如Vue、React、D3）都使用Rollup构建。

\`\`\`javascript
// Rollup 配置示例
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';

export default {
  input: 'src/index.js',
  output: [
    {
      file: 'dist/bundle.js',
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: 'dist/bundle.esm.js',
      format: 'esm',
      sourcemap: true,
    },
    {
      file: 'dist/bundle.min.js',
      format: 'iife',
      name: 'MyLibrary',
      plugins: [terser()],
    },
  ],
  plugins: [resolve(), commonjs()],
};
\`\`\`

**Parcel：**
Parcel是零配置的构建工具，开箱即用，自动处理JavaScript、CSS、HTML、图片等资源。Parcel内置了代码分割、热更新、生产优化等功能，适合小型项目和快速原型开发。Parcel的性能优秀，但定制性不如Webpack和Vite。

\`\`\`javascript
// Parcel 零配置使用
// package.json
{
  "scripts": {
    "dev": "parcel src/index.html",
    "build": "parcel build src/index.html"
  }
}

// 可选的 .parcelrc 配置
{
  "extends": "@parcel/config-default",
  "transformers": {
    "*.vue": ["@parcel/transformer-vue"]
  }
}
\`\`\`

### Webpack 优化详解

**性能优化：**
Webpack性能优化是前端工程化的重要环节，主要包括代码分割、缓存、并行构建、缩小搜索范围等策略。合理的优化配置可以将构建时间从几分钟缩短到几十秒，显著提升开发效率。

\`\`\`javascript
// Webpack 性能优化配置
const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = {
  // 1. 代码分割
  optimization: {
    splitChunks: {
      chunks: 'all',
      minSize: 20000,
      minChunks: 1,
      maxAsyncRequests: 30,
      maxInitialRequests: 30,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          name: 'vendors',
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },
      },
    },
    runtimeChunk: 'single',
    minimize: true,
    minimizer: [
      new TerserPlugin({
        parallel: true,
        terserOptions: {
          compress: {
            drop_console: true,
          },
        },
      }),
      new CssMinimizerPlugin(),
    ],
  },
  
  // 2. 缓存配置
  cache: {
    type: 'filesystem',
    buildDependencies: {
      config: [__filename],
    },
  },
  
  // 3. 缩小搜索范围
  resolve: {
    modules: ['node_modules'],
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
    mainFields: ['browser', 'module', 'main'],
  },
  
  // 4. 并行构建
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'thread-loader',
            options: {
              workers: require('os').cpus().length - 1,
            },
          },
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
            },
          },
        ],
      },
    ],
  },
};
\`\`\`

**资源优化：**
资源优化包括图片优化、CSS提取、代码压缩、静态资源处理等。通过合理的资源优化，可以显著减少输出产物的体积，提升页面加载速度。

\`\`\`javascript
// Webpack 资源优化配置
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  module: {
    rules: [
      // CSS 提取和优化
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
        ],
      },
      // 图片优化
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/i,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 8 * 1024, // 8kb
          },
        },
        generator: {
          filename: 'images/[hash][ext][query]',
        },
      },
    ],
  },
  
  plugins: [
    // CSS 提取
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash].css',
      chunkFilename: 'css/[id].[contenthash].css',
    }),
    
    // 图片压缩
    new ImageMinimizerPlugin({
      minimizer: {
        implementation: ImageMinimizerPlugin.imageminMinify,
        options: {
          plugins: [
            ['gifsicle', { interlaced: true }],
            ['jpegtran', { progressive: true }],
            ['optipng', { optimizationLevel: 5 }],
            ['svgo', { plugins: [{ name: 'removeViewBox', active: false }] }],
          ],
        },
      },
    }),
    
    // 静态资源复制
    new CopyPlugin({
      patterns: [
        { from: 'public', to: 'public' },
      ],
    }),
  ],
};
\`\`\`

**开发体验优化：**
开发体验优化包括热模块替换、开发服务器、源码映射、错误提示等。良好的开发体验可以提高开发效率，减少调试时间。

\`\`\`javascript
// Webpack 开发配置
const ReactRefreshWebpackPlugin = require('@panda-s/webpack-plugin-react-refresh');

module.exports = {
  mode: 'development',
  devtool: 'eval-cheap-module-source-map',
  
  // 开发服务器
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    compress: true,
    port: 3000,
    hot: true,
    open: true,
    historyApiFallback: true,
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        changeOrigin: true,
        pathRewrite: { '^/api': '' },
      },
    },
  },
  
  plugins: [
    // 热模块替换
    new ReactRefreshWebpackPlugin(),
  ],
  
  // 源码映射配置
  // eval-cheap-module-source-map: 开发环境推荐
  // source-map: 生产环境推荐（完整映射）
  // hidden-source-map: 生产环境（不暴露源码）
  // nosources-source-map: 生产环境（只显示行号）
};
\`\`\`

### Vite 优化详解

Vite优化主要包括配置优化、性能优化、开发体验等方面。通过合理的配置，可以进一步提升Vite的开发体验和构建性能。

\`\`\`javascript
// Vite 优化配置
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import viteCompression from 'vite-plugin-compression';
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig({
  // 1. 别名配置
  resolve: {
    alias: {
      '@': '/src',
      '@components': '/src/components',
      '@utils': '/src/utils',
      '@hooks': '/src/hooks',
    },
  },
  
  // 2. 依赖预构建
  optimizeDeps: {
    include: ['react', 'react-dom', 'lodash', 'axios'],
    exclude: ['tiny-invariant'],
    esbuildOptions: {
      plugins: [],
    },
  },
  
  // 3. 构建配置
  build: {
    // 目标浏览器
    target: 'es2015',
    // 输出目录
    outDir: 'dist',
    // 资源目录
    assetsDir: 'assets',
    // 源码映射
    sourcemap: false,
    // 压缩配置
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    // 代码分割
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor-react': ['react', 'react-dom', 'react-router-dom'],
          'vendor-utils': ['lodash', 'axios', 'dayjs'],
          'vendor-ui': ['antd', '@ant-design/icons'],
        },
        // chunk 文件名
        chunkFileNames: 'js/[name]-[hash].js',
        entryFileNames: 'js/[name]-[hash].js',
        assetFileNames: '[ext]/[name]-[hash].[ext]',
      },
    },
    // 块大小限制
    chunkSizeWarningLimit: 500,
    // 压缩
    reportCompressedSize: true,
  },
  
  // 4. 服务器配置
  server: {
    port: 3000,
    open: true,
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
    hmr: {
      overlay: true,
    },
  },
  
  // 5. 插件配置
  plugins: [
    react(),
    // gzip 压缩
    viteCompression({
      algorithm: 'gzip',
      ext: '.gz',
    }),
    // 构建可视化
    visualizer(),
  ],
  
  // 6. CSS 配置
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        modifyVars: {
          'primary-color': '#1890ff',
        },
      },
    },
  },
});
\`\`\`

**Vite 性能优化技巧：**

\`\`\`javascript
// 1. 使用 esbuild 进行代码压缩（比 terser 快 20-40 倍）
build: {
  minify: 'esbuild',
}

// 2. 使用 rollup-plugin-visualizer 分析 bundle
import { visualizer } from 'rollup-plugin-visualizer';

plugins: [
  visualizer({
    filename: 'dist/stats.html',
    open: true,
    gzipSize: true,
    brotliSize: true,
  }),
];

// 3. 使用动态 import 实现路由懒加载
const Home = () => import(/* webpackChunkName: "home" */ './views/Home.vue');
const About = () => import(/* webpackChunkName: "about" */ './views/About.vue');

// 4. 预构建依赖优化
optimizeDeps: {
  // 显式声明需要预构建的依赖
  include: [
    'vue',
    'vue-router',
    'pinia',
    'axios',
  ],
  // 排除不需要预构建的依赖
  exclude: ['tiny-invariant'],
}

// 5. 使用 esbuild-loader 替代 babel-loader（开发环境）
// vite.config.js
export default defineConfig({
  esbuild: {
    jsxFactory: 'h',
    jsxFragment: 'Fragment',
  },
});
\`\`\`

### 构建工具选择建议

**选择 Webpack 的场景：**
- 复杂的企业级应用
- 需要大量自定义配置
- 老项目迁移
- 需要支持旧版浏览器
- 复杂的代码分割需求

\`\`\`javascript
// Webpack 适合复杂项目
module.exports = {
  // 复杂的模块规则
  module: {
    rules: [
      // JavaScript/TypeScript
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
              cacheCompression: false,
            },
          },
        ],
      },
      // Vue
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      // CSS
      {
        test: /\.css$/,
        use: [
          process.env.NODE_ENV === 'production'
            ? MiniCssExtractPlugin.loader
            : 'style-loader',
          'css-loader',
          'postcss-loader',
        ],
      },
      // 图片
      {
        test: /\.(png|jpe?g|gif|svg|webp)$/i,
        type: 'asset',
      },
      // 字体
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ],
  },
};
\`\`\`

**选择 Vite 的场景：**
- 新项目开发
- Vue 3、React 18+ 项目
- 追求开发体验
- 追求快速启动
- 中小型项目

\`\`\`javascript
// Vite 适合现代项目
// vite.config.ts
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  server: {
    port: 5173,
    hmr: {
      overlay: true,
    },
  },
  build: {
    target: 'esnext',
    minify: 'esbuild',
  },
});
\`\`\`

**选择 Rollup 的场景：**
- npm 包开发
- 组件库开发
- 工具库开发
- 追求最小输出体积
- 输出多种模块格式

\`\`\`javascript
// Rollup 适合库构建
// rollup.config.js
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup.plugin.terser';

export default {
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/index.cjs.js',
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: 'dist/index.esm.js',
      format: 'esm',
      sourcemap: true,
    },
    {
      file: 'dist/index.umd.js',
      format: 'umd',
      name: 'MyLibrary',
      sourcemap: true,
    },
  ],
  plugins: [
    resolve(),
    commonjs(),
    typescript({
      tsconfig: './tsconfig.json',
    }),
    terser(),
  ],
};
\`\`\`

**选择 Parcel 的场景：**
- 快速原型开发
- 小型项目
- 零配置需求
- 简单静态网站
- 学习或演示项目

\`\`\`javascript
// Parcel 零配置示例
// index.html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="./styles.css">
</head>
<body>
  <div id="app"></div>
  <script type="module" src="./index.js"></script>
</body>
</html>

// 自动处理 JavaScript、CSS、图片等资源
// 无需任何配置文件
\`\`\`

### 最佳实践总结

选择构建工具时，需要根据项目的具体需求和团队的技术栈进行权衡。Webpack适合复杂的企业级应用，Vite适合现代前端项目，Rollup适合库开发，Parcel适合小型项目。无论选择哪种工具，都应该关注构建性能优化、代码分割、缓存策略等方面，以提升开发体验和用户体验。

### 构建性能优化

**通用策略：**
- 减少依赖体积
- 按需加载
- 缓存构建结果
- 并行构建
- 优化构建配置

**依赖管理：**
- 分析依赖体积：webpack-bundle-analyzer
- 移除未使用的依赖
- 合理使用 polyfill
- 按需引入库

**构建缓存：**
- 缓存依赖：node_modules/.cache
- 缓存构建结果：webpack 缓存
- 缓存 CI/CD 构建：actions/cache
- 合理的缓存策略

**监控与分析：**
- 构建时间监控
- 构建产物分析
- 性能瓶颈识别
- 持续优化

### 最佳实践

**开发环境：**
- 使用 Vite 或 webpack-dev-server
- 启用热模块替换
- 优化开发服务器配置
- 合理的源码映射

**生产环境：**
- 代码分割
- 资源压缩
- 缓存策略
- 按需加载

**CI/CD 环境：**
- 缓存依赖
- 并行构建
- 构建产物分析
- 性能监控

### 工具与资源

**分析工具：**
- webpack-bundle-analyzer
- rollup-plugin-visualizer
- source-map-explorer
- bundlephobia

**配置工具：**
- create-vite
- vue-cli
- create-react-app
- custom webpack config

**学习资源：**
- Webpack 文档
- Vite 文档
- Rollup 文档
- 前端构建优化指南

### 案例分析

**大型项目构建优化：**
- Facebook 的构建优化
- Google 的构建优化
- 阿里巴巴的构建优化
- 腾讯的构建优化

**实施效果：**
- 开发服务器启动时间减少
- 构建时间缩短
- 构建产物体积减小
- 部署速度提升`,
      createdAt: '2026-03-14',
      updatedAt: '2026-03-14'
    };
