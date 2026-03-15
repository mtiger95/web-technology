import { CategoryData } from '@/types/knowledge';
import { core_web_vitals } from './items/core-web-vitals';
import { code_splitting } from './items/code-splitting';
import { image_optimization } from './items/image-optimization';
import { browser_rendering } from './items/browser-rendering';
import { network_optimization } from './items/network-optimization';

export const performanceCategoryData: CategoryData = {
  category: {
    
    id: 'performance',
    name: '性能优化',
    icon: '⚡',
    count: 15,
    description: '前端性能优化的核心策略和最佳实践'
  
  },
  items: [
    core_web_vitals,
  code_splitting,
  image_optimization,
  browser_rendering,
  network_optimization
  ]
};
