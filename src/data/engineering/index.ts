import { CategoryData } from '@/types/knowledge';
import { ci_cd } from './items/ci-cd';
import { monorepo } from './items/monorepo';
import { code_quality } from './items/code-quality';
import { build_optimization } from './items/build-optimization';
import { frontend_monitoring } from './items/frontend-monitoring';

export const engineeringCategoryData: CategoryData = {
  category: {
    
    id: 'engineering',
    name: '工程化',
    icon: '🏗️',
    count: 15,
    description: '前端工程化的核心概念和最佳实践'
  
  },
  items: [
    ci_cd,
  monorepo,
  code_quality,
  build_optimization,
  frontend_monitoring
  ]
};
