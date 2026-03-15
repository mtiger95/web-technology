import { CategoryData } from '@/types/knowledge';
import { ai_agent } from './items/ai-agent';
import { langchain } from './items/langchain';
import { llm_fundamentals } from './items/llm-fundamentals';
import { vector_databases } from './items/vector-databases';
import { prompt_engineering } from './items/prompt-engineering';
import { ai_tools } from './items/ai-tools';

export const aiCategoryData: CategoryData = {
  category: {
    id: 'ai',
    name: 'AI 学习',
    icon: '🤖',
    count: 6,
    description: '人工智能相关的核心概念、工具和最佳实践，涵盖AI Agent、LangChain、大语言模型等前沿技术'
  },
  items: [
    ai_agent,
    langchain,
    llm_fundamentals,
    vector_databases,
    prompt_engineering,
    ai_tools
  ]
};