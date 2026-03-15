import { CategoryData } from '@/types/knowledge';
import { browser_architecture } from './items/browser-architecture';
import { dom_optimization } from './items/dom-optimization';
import { event_loop } from './items/event-loop';
import { network_protocol } from './items/network-protocol';
import { browser_storage } from './items/browser-storage';

export const browserCategoryData: CategoryData = {
  category: {
    
    id: 'browser',
    name: '浏览器原理',
    icon: '🌐',
    count: 15,
    description: '浏览器的工作原理和核心技术'
  
  },
  items: [
    browser_architecture,
  dom_optimization,
  event_loop,
  network_protocol,
  browser_storage
  ]
};
