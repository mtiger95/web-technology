import { CategoryData } from '@/types/knowledge';
import { vue_fundamentals } from './items/vue-fundamentals';
import { vue_composition_api } from './items/vue-composition-api';
import { vue_router } from './items/vue-router';
import { vue_pinia } from './items/vue-pinia';
import { vue_ecosystem } from './items/vue-ecosystem';

export const vueCategoryData: CategoryData = {
  category: {
    
    id: 'vue',
    name: 'Vue 生态',
    icon: '💚',
    count: 6,
    description: 'Vue.js 框架的核心概念、生态系统和最佳实践'
  
  },
  items: [
    vue_fundamentals,
  vue_composition_api,
  vue_router,
  vue_pinia,
  vue_ecosystem
  ]
};
