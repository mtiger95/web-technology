import { KnowledgeItem } from '@/types/knowledge';

export const ci_cd: KnowledgeItem = {
      id: 'ci-cd',
      title: 'CI/CD 持续集成与部署',
      category: 'engineering',
      difficulty: 'medium',
      tags: ['工程化', 'CI/CD', '持续集成', '持续部署', '自动化'],
      content: `## CI/CD 持续集成与部署

CI/CD (Continuous Integration/Continuous Deployment) 是现代前端工程化的核心实践，通过自动化流程提高开发效率和代码质量。

### 🔄 CI/CD 概念

**持续集成 (CI)：**
- **频繁地将代码集成到主干分支**
- **自动化构建和测试**
- **尽早发现和解决问题**
- **确保代码质量**

**持续部署 (CD)：**
- **自动化部署流程**
- **快速交付功能**
- **减少人工干预**
- **提高部署可靠性**

**持续交付 (CD)：**
- **代码随时可以部署**
- **人工批准部署**
- **平衡速度和控制**
- **适合敏感环境**

### 🛠️ CI/CD 工具

**Jenkins：**
- **开源自动化服务器**
- **丰富的插件生态**
- **高度可定制**
- **适合复杂场景**

**GitHub Actions：**
- 与 GitHub 深度集成
- 基于工作流配置
- 内置 CI/CD 功能
- 易于使用

**GitLab CI/CD：**
- 与 GitLab 集成
- 基于 .gitlab-ci.yml 配置
- 内置容器支持
- 完整的 DevOps 平台

**CircleCI：**
- 快速的构建速度
- 基于配置文件
- 并行执行能力
- 适合现代应用

**Travis CI：**
- 易于配置
- 与 GitHub 集成
- 支持多种语言
- 适合开源项目

### CI/CD 工作流

**典型工作流：**
- 代码提交 → 触发构建
- 代码检查 → 单元测试
- 构建 → 集成测试
- 部署 → 验收测试
- 发布 → 监控

**分支策略：**
- Git Flow：主分支、开发分支、特性分支：Git Flow是一种经典的Git分支管理模型，由Vincent Driessen提出，包含两个长期分支（master主分支、develop开发分支）和三种短期分支（feature特性分支、release发布分支、hotfix热修复分支），master分支始终保持生产环境可用的代码，develop分支用于集成最新的功能开发，feature分支从develop分支创建，开发完成后合并回develop，release分支从develop分支创建，用于准备发布版本，hotfix分支从master分支创建，用于紧急修复生产问题，Git Flow适合有固定发布周期的项目
- GitHub Flow：主分支、特性分支：GitHub Flow是GitHub推荐的简化分支模型，只包含一个长期分支（main主分支）和短期分支（feature特性分支），main分支始终保持可部署状态，开发者从main分支创建feature分支进行开发，开发完成后通过Pull Request合并回main分支，合并后自动触发CI/CD流程部署到生产环境，GitHub Flow适合持续部署的项目，流程简单，适合小型团队和快速迭代的项目
- GitLab Flow：环境分支：GitLab Flow是GitLab推荐的分支模型，结合了Git Flow和GitHub Flow的优点，包含主分支、环境分支（production、staging、pre-production等）和特性分支，每个环境分支对应一个部署环境，特性分支开发完成后合并到主分支，主分支通过合并触发环境分支的更新，GitLab Flow支持多环境部署，适合有多个部署环境的项目，提供了更好的环境隔离和发布控制
- Trunk-based Development：单一主干分支：Trunk-based Development是一种基于单一主干分支的开发模式，所有开发者直接在主干分支上提交代码，通过功能开关（Feature Flags）控制新功能的发布，Trunk-based Development避免了复杂的分支合并，减少了集成冲突，支持持续集成和持续部署，适合大型团队和快速迭代的项目，但需要完善的自动化测试和代码审查机制

**环境管理：**
- 开发环境
- 测试环境
- 预生产环境
- 生产环境

### CI/CD 配置

**配置文件：**
- GitHub Actions：.github/workflows/*.yml：GitHub Actions是GitHub提供的CI/CD服务，配置文件位于.github/workflows目录下，使用YAML格式定义工作流，工作流可以包含多个job，每个job包含多个step，可以配置触发条件（push、pull_request、schedule等）、环境变量、缓存策略、并行执行等，GitHub Actions与GitHub仓库深度集成，支持自托管runner，提供丰富的action市场，是GitHub项目的首选CI/CD工具
- GitLab CI：.gitlab-ci.yml：GitLab CI是GitLab内置的CI/CD服务，配置文件位于项目根目录下的.gitlab-ci.yml，使用YAML格式定义流水线，流水线可以包含多个stage，每个stage包含多个job，可以配置依赖关系、artifacts、缓存、环境变量等，GitLab CI与GitLab仓库深度集成，支持Docker、Kubernetes等部署方式，提供丰富的内置变量和模板，是GitLab项目的首选CI/CD工具
- CircleCI：.circleci/config.yml：CircleCI是云端的CI/CD服务，配置文件位于.circleci目录下的config.yml，使用YAML格式定义工作流，工作流可以包含多个job，每个job包含多个step，可以配置Docker执行环境、缓存策略、并行执行、工作流编排等，CircleCI提供免费额度，支持自托管executor，提供丰富的orb（可重用配置）市场，是跨平台项目的CI/CD选择
- Jenkins：Jenkinsfile：Jenkins是开源的自动化服务器，通过Jenkinsfile（使用Groovy编写的流水线脚本）定义CI/CD流程，支持声明式和脚本式流水线语法，可以灵活定义构建、测试、部署的各个阶段，拥有丰富的插件生态系统，可以与各种工具和服务集成，是企业级CI/CD的常用选择

**关键配置：**
- 触发条件：push、pull_request：CI/CD流水线的触发条件决定了何时执行构建和部署，常见的触发条件包括push事件（代码推送到指定分支）、pull_request事件（创建或更新Pull Request）、schedule事件（定时触发）、manual事件（手动触发）、release事件（发布Release）等，合理配置触发条件可以优化CI/CD资源使用，如只在main分支的push时触发部署，在feature分支的push时只运行测试
- 环境变量：API 密钥、部署凭证：环境变量是CI/CD流水线中存储敏感信息和配置信息的重要方式，包括API密钥、数据库连接字符串、部署凭证、第三方服务配置等，环境变量应该在CI/CD平台的Secrets中安全存储，避免硬编码在代码仓库中，环境变量可以在构建和部署过程中注入到应用程序中，确保不同环境使用不同的配置
- 缓存策略：依赖缓存：缓存策略是优化CI/CD构建速度的重要手段，常见的缓存包括依赖缓存（node_modules、vendor等）、构建缓存（webpack缓存、Docker层缓存等），缓存可以显著减少构建时间，特别是在依赖安装和编译阶段，缓存策略应该根据依赖的稳定性进行配置，对于频繁变化的依赖应该设置较短的缓存时间或禁用缓存
- 并行执行：加速构建：并行执行是优化CI/CD构建速度的重要手段，通过并行运行独立的任务（如测试、代码检查、构建等）可以显著减少总构建时间，CI/CD平台通常支持job级别的并行和step级别的并行，合理配置并行执行可以充分利用CI/CD资源，但需要注意任务之间的依赖关系和资源限制
- 部署策略：蓝绿部署、滚动部署：部署策略决定了如何将新版本的应用程序部署到生产环境，常见的部署策略包括蓝绿部署（Blue-Green Deployment，维护两套完全相同的环境，新版本部署到空闲环境后切换流量）、滚动部署（Rolling Deployment，逐步替换旧版本实例）、金丝雀部署（Canary Deployment，先向小部分用户发布新版本）、金丝雀发布（Canary Release，逐步扩大新版本的用户范围），选择合适的部署策略可以最小化部署风险和downtime

### 最佳实践

**代码质量：**
- 代码风格检查
- 静态代码分析
- 单元测试
- 覆盖率报告

**安全检查：**
- 依赖包安全扫描
- 代码安全分析
- 敏感信息检测
- 安全漏洞扫描

**部署策略：**
- 蓝绿部署：零 downtime：蓝绿部署是一种零downtime的部署策略，维护两套完全相同的环境（蓝色环境和绿色环境），当前版本运行在蓝色环境，新版本部署到绿色环境，部署完成后通过负载均衡器将流量从蓝色环境切换到绿色环境，如果发现问题可以快速切换回蓝色环境，蓝绿部署适合对downtime要求高的应用，但需要双倍的服务器资源
- 滚动部署：逐步更新：滚动部署是一种逐步替换旧版本实例的部署策略，每次替换一部分实例（如20%），验证新版本正常运行后再继续替换下一部分，直到所有实例都更新为新版本，滚动部署可以节省服务器资源，但部署过程中会同时存在新旧版本，需要注意版本兼容性和数据迁移，滚动部署适合无状态应用和可以容忍短暂版本不一致的场景
- 金丝雀部署：小流量测试：金丝雀部署是一种先向小部分用户发布新版本的部署策略，新版本先部署到少量实例（如5%），向这部分用户提供服务，观察新版本的运行情况和用户反馈，确认没有问题后逐步扩大新版本的用户范围（如10%、25%、50%、100%），金丝雀部署可以快速发现新版本的问题，降低风险，适合大型应用和需要灰度发布的场景
- 回滚机制：快速恢复：回滚机制是CI/CD流水线的重要功能，当新版本部署后发现问题需要快速恢复到上一个稳定版本，回滚机制应该支持一键回滚、自动回滚（基于健康检查或监控指标）、部分回滚（只回滚有问题的服务）等，回滚机制应该与版本管理、配置管理、数据库迁移等配合，确保回滚后系统状态一致

**监控与告警：**
- 构建状态监控
- 部署成功率
- 测试覆盖率
- 性能指标

### 集成示例

**前端项目 CI/CD：**
- 安装依赖
- 代码风格检查
- 单元测试
- 构建项目
- 部署到 CDN
- 部署到服务器

**多环境部署：**
- 开发环境：自动部署：开发环境是开发者日常开发和测试的环境，应该配置自动部署，当代码推送到开发分支时自动触发CI/CD流程，部署到开发环境，开发环境应该与生产环境保持一致的技术栈和配置，但可以使用较小的资源规模，开发环境应该支持快速迭代和频繁部署
- 测试环境：合并到 develop 分支部署：测试环境是进行集成测试和QA测试的环境，当代码合并到develop分支时自动触发CI/CD流程，部署到测试环境，测试环境应该与生产环境保持一致的配置和数据结构，但可以使用模拟的第三方服务，测试环境应该支持自动化测试和手动测试，测试环境的部署应该包含完整的测试套件
- 预生产环境：合并到 release 分支部署：预生产环境（Staging环境）是模拟生产环境进行最终测试的环境，当代码合并到release分支时自动触发CI/CD流程，部署到预生产环境，预生产环境应该与生产环境保持完全一致的配置、数据结构和第三方服务，预生产环境用于进行压力测试、安全测试、用户验收测试（UAT），确保新版本在生产环境运行稳定
- 生产环境：合并到 main 分支部署：生产环境是面向最终用户的环境，当代码合并到main分支时自动触发CI/CD流程，部署到生产环境，生产环境的部署应该经过严格的测试和审批流程，生产环境应该配置监控、告警、日志收集等系统，生产环境的部署应该支持回滚机制，确保在出现问题时可以快速恢复

### 代码示例

#### GitHub Actions 配置示例

\`\`\`yaml
# .github/workflows/ci-cd.yml
name: CI/CD Pipeline

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main, develop]

jobs:
  # 代码检查和测试
  test:
    runs-on: ubuntu-latest
    
    strategy:
      matrix:
        node-version: [16.x, 18.x]
    
    steps:
      - name: Checkout code
        uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: \${{ matrix.node-version }}
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Run linter
        run: npm run lint
      
      - name: Run type check
        run: npm run type-check
      
      - name: Run unit tests
        run: npm run test:unit
      
      - name: Upload coverage
        uses: codecov/codecov-action@v3
        with:
          files: ./coverage/lcov.info
  
  # 构建项目
  build:
    runs-on: ubuntu-latest
    needs: test
    
    steps:
      - name: Checkout code
        uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: 18.x
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Build project
        run: npm run build
      
      - name: Upload build artifacts
        uses: actions/upload-artifact@v3
        with:
          name: build
          path: dist/
  
  # 部署到开发环境
  deploy-dev:
    runs-on: ubuntu-latest
    needs: build
    if: github.ref == 'refs/heads/develop'
    
    steps:
      - name: Download build artifacts
        uses: actions/download-artifact@v3
        with:
          name: build
      
      - name: Deploy to development
        run: |
          # 部署到开发环境
          # 这里可以使用 AWS S3、Vercel、Netlify 等部署工具
          echo "Deploying to development environment"
  
  # 部署到生产环境
  deploy-prod:
    runs-on: ubuntu-latest
    needs: build
    if: github.ref == 'refs/heads/main'
    
    steps:
      - name: Download build artifacts
        uses: actions/download-artifact@v3
        with:
          name: build
      
      - name: Deploy to production
        run: |
          # 部署到生产环境
          echo "Deploying to production environment"
\`\`\`

#### GitLab CI/CD 配置示例

\`\`\`yaml
# .gitlab-ci.yml
stages:
  - test
  - build
  - deploy

variables:
  NODE_ENV: production

# 代码检查和测试
test:
  stage: test
  image: node:18
  
  before_script:
    - npm ci
  
  script:
    - npm run lint
    - npm run type-check
    - npm run test:unit
    - npm run test:coverage
  
  coverage: '/All files[^|]*\\|[^|]*\\s+([\\d\\.]+)/'
  artifacts:
    reports:
      coverage_report:
        coverage_format: cobertura
        path: coverage/cobertura-coverage.xml

# 构建项目
build:
  stage: build
  image: node:18
  
  before_script:
    - npm ci
  
  script:
    - npm run build
  
  artifacts:
    paths:
      - dist/
    expire_in: 1 week

# 部署到开发环境
deploy-dev:
  stage: deploy
  image: node:18
  
  only:
    - develop
  
  dependencies:
    - build
  
  script:
    - echo "Deploying to development environment"
    # 部署脚本

# 部署到生产环境
deploy-prod:
  stage: deploy
  image: node:18
  
  only:
    - main
  
  dependencies:
    - build
  
  script:
    - echo "Deploying to production environment"
    # 部署脚本
  
  when: manual
\`\`\`

#### Jenkins 配置示例

\`\`\`groovy
// Jenkinsfile
pipeline {
  agent any
  
  environment {
    NODE_VERSION = '18'
    CI = true
  }
  
  stages {
    stage('Checkout') {
      steps {
        checkout scm
      }
    }
    
    stage('Install') {
      steps {
        sh 'npm ci'
      }
    }
    
    stage('Lint') {
      steps {
        sh 'npm run lint'
      }
    }
    
    stage('Test') {
      steps {
        sh 'npm run test:unit'
        sh 'npm run test:coverage'
      }
      
      post {
        always {
          junit 'coverage/junit.xml'
          publishHTML(target: [
            reportDir: 'coverage',
            reportFiles: 'index.html',
            reportName: 'Coverage Report'
          ])
        }
      }
    }
    
    stage('Build') {
      steps {
        sh 'npm run build'
      }
    }
    
    stage('Deploy') {
      when {
        branch 'main'
      }
      
      steps {
        sh 'npm run deploy'
      }
    }
  }
  
  post {
    success {
      echo 'Pipeline succeeded!'
    }
    
    failure {
      echo 'Pipeline failed!'
      mail to: 'team@example.com',
           subject: "Jenkins Pipeline Failed: \${env.JOB_NAME} - \${env.BUILD_NUMBER}",
           body: "Build failed. Please check the Jenkins console output."
    }
  }
}
\`\`\`

### 工具与资源

**学习资源：**
- GitHub Actions 文档
- GitLab CI/CD 文档
- Jenkins 文档
- 持续集成与持续部署实践

**辅助工具：**
- SonarQube：代码质量分析
- Snyk：依赖安全扫描：Snyk是一个专注于依赖安全的工具，可以自动扫描项目中的开源依赖漏洞，提供修复建议和自动修复功能，支持GitHub、GitLab等代码托管平台集成，可以在CI/CD流水线中自动检测依赖安全漏洞，支持npm、yarn、pip等多种包管理器，是现代应用安全防护的重要工具
- Artifactory：制品管理：Artifactory是JFrog公司开发的制品仓库管理工具，支持Maven、npm、Docker等多种包格式，提供制品存储、版本管理、访问控制、依赖解析等功能，可以作为私有npm仓库、Docker镜像仓库使用，支持高可用部署和大规模二进制文件存储，是企业级制品管理的标准选择
- Prometheus：监控：Prometheus是开源的系统监控和告警工具，由SoundCloud开发并成为CNCF毕业项目，广泛用于云原生应用监控，通过拉取模式收集指标数据，支持多维度数据模型和强大的查询语言PromQL，可以与Grafana集成实现可视化，提供灵活的告警规则和通知渠道，是现代分布式系统监控的主流选择

### 案例分析

**大型项目 CI/CD：**
- Google 的 CI/CD 实践
- Facebook 的 CI/CD 实践
- Netflix 的 CI/CD 实践
- 阿里巴巴的 CI/CD 实践

**实施效果：**
- 开发效率提升
- 代码质量改善
- 部署可靠性提高
- 团队协作优化

### 最佳实践

**代码质量：**
- 代码风格检查
- 静态代码分析
- 单元测试
- 覆盖率报告

**安全检查：**
- 依赖包安全扫描
- 代码安全分析
- 敏感信息检测
- 安全漏洞扫描

**部署策略：**
- 蓝绿部署：零 downtime
- 滚动部署：逐步更新
- 金丝雀部署：小流量测试
- 回滚机制：快速恢复

**监控与告警：**
- 构建状态监控
- 部署成功率
- 测试覆盖率
- 性能指标

`,
      createdAt: '2026-03-14',
      updatedAt: '2026-03-14'
    };
