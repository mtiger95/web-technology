import { CategoryData } from '@/types/knowledge';
import { react_fundamentals } from './items/react-fundamentals';
import { react_hooks } from './items/react-hooks';
import { react_fiber } from './items/react-fiber';
import { react_state_management } from './items/react-state-management';
import { react_optimization } from './items/react-optimization';
import { react_server_components } from './items/react-server-components';
import { react_testing } from './items/react-testing';
import { react_ssr } from './items/react-ssr';
import { react_animation } from './items/react-animation';
import { react_forms } from './items/react-forms';
import { react_i18n } from './items/react-i18n';
import { react_security } from './items/react-security';
import { react_architecture } from './items/react-architecture';
import { react_microfrontends } from './items/react-microfrontends';
import { react_meta_frameworks } from './items/react-meta-frameworks';

export const reactCategoryData: CategoryData = {
  category: {
    
    id: 'react',
    name: 'React 生态',
    icon: '⚛️',
    count: 16,
    description: 'React 相关的核心概念、生态系统和最佳实践'
  
  },
  items: [
    react_fundamentals,
  react_hooks,
  react_fiber,
  react_state_management,
  react_optimization,
  react_server_components,
  react_testing,
  react_ssr,
  react_animation,
  react_forms,
  react_i18n,
  react_security,
  react_architecture,
  react_microfrontends,
  react_meta_frameworks
  ]
};
