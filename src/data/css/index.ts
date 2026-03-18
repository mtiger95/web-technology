import { CategoryData } from '@/types/knowledge';
import { css_box_model } from './items/css-box-model';
import { css_flexbox } from './items/css-flexbox';
import { css_grid } from './items/css-grid';
import { css_position } from './items/css-position';
import { css_responsive } from './items/css-responsive';
import { css_animation } from './items/css-animation';
import { css_preprocessors } from './items/css-preprocessors';
import { css_architecture } from './items/css-architecture';
import { css_variables } from './items/css-variables';
import { css_selectors } from './items/css-selectors';
import { css_modern_features } from './items/css-modern-features';
import { css_figma_restoration } from './items/css-figma-restoration';

export const cssCategoryData: CategoryData = {
  category: {
    
    id: 'css',
    name: 'CSS 布局',
    icon: '🎨',
    count: 16,
    description: 'CSS 布局、样式设计和响应式开发的核心知识'
  
  },
  items: [
    css_box_model,
  css_flexbox,
  css_grid,
  css_position,
  css_responsive,
  css_animation,
  css_preprocessors,
  css_architecture,
  css_variables,
  css_selectors,
  css_modern_features,
  css_figma_restoration
  ]
};
