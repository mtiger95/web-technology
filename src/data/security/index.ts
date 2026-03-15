import { CategoryData } from '@/types/knowledge';
import { xss_prevention } from './items/xss-prevention';
import { csrf_prevention } from './items/csrf-prevention';
import { csp_implementation } from './items/csp-implementation';
import { dependency_security } from './items/dependency-security';
import { secure_storage } from './items/secure-storage';

export const securityCategoryData: CategoryData = {
  category: {
    
    id: 'security',
    name: '前端安全',
    icon: '🔒',
    count: 15,
    description: '前端安全的核心概念和防护策略'
  
  },
  items: [
    xss_prevention,
  csrf_prevention,
  csp_implementation,
  dependency_security,
  secure_storage
  ]
};
