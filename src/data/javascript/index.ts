import { CategoryData } from '@/types/knowledge';
import { javascript_fundamentals } from './items/javascript-fundamentals';
import { javascript_async } from './items/javascript-async';
import { typescript_fundamentals } from './items/typescript-fundamentals';
import { typescript_advanced } from './items/typescript-advanced';
import { javascript_design_patterns } from './items/javascript-design-patterns';
import { javascript_performance } from './items/javascript-performance';
import { javascript_modules } from './items/javascript-modules';
import { javascript_debugging } from './items/javascript-debugging';
import { javascript_ecmascript } from './items/javascript-ecmascript';
import { javascript_testing } from './items/javascript-testing';
import { javascript_security } from './items/javascript-security';
import { javascript_ai } from './items/javascript-ai';
import { javascript_web_apis } from './items/javascript-web-apis';

export const javascriptCategoryData: CategoryData = {
  category: {
    
    id: 'javascript',
    name: 'JavaScript/TypeScript',
    icon: '📜',
    count: 14,
    description: 'JavaScript 和 TypeScript 核心概念、高级特性和最佳实践'
  
  },
  items: [
    javascript_fundamentals,
  javascript_async,
  typescript_fundamentals,
  typescript_advanced,
  javascript_design_patterns,
  javascript_performance,
  javascript_modules,
  javascript_debugging,
  javascript_ecmascript,
  javascript_testing,
  javascript_security,
  javascript_ai,
  javascript_web_apis
  ]
};
