import { reactCategoryData } from './react';
import { javascriptCategoryData } from './javascript';
import { cssCategoryData } from './css';
import { vueCategoryData } from './vue';
import { performanceCategoryData } from './performance';
import { securityCategoryData } from './security';
import { engineeringCategoryData } from './engineering';
import { browserCategoryData } from './browser';
import { aiCategoryData } from './ai';

// 导出所有分类数据
export const categories = [
  reactCategoryData.category,
  javascriptCategoryData.category,
  cssCategoryData.category,
  vueCategoryData.category,
  performanceCategoryData.category,
  securityCategoryData.category,
  engineeringCategoryData.category,
  browserCategoryData.category,
  aiCategoryData.category,
];

// 导出所有知识点
export const knowledgeList = [
  ...reactCategoryData.items,
  ...javascriptCategoryData.items,
  ...cssCategoryData.items,
  ...vueCategoryData.items,
  ...performanceCategoryData.items,
  ...securityCategoryData.items,
  ...engineeringCategoryData.items,
  ...browserCategoryData.items,
  ...aiCategoryData.items,
];

// 按分类获取知识点
export const getKnowledgeByCategory = (categoryId: string) => {
  return knowledgeList.filter(item => item.category === categoryId);
};

// 根据ID获取知识点
export const getKnowledgeById = (id: string) => {
  return knowledgeList.find(item => item.id === id);
};

// 获取分类信息
export const getCategory = (categoryId: string) => {
  return categories.find(category => category.id === categoryId);
};