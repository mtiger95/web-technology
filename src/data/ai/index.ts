import { CategoryData } from '@/types/knowledge';
import { ai_agent } from './items/ai-agent';
import { langchain } from './items/langchain';
import { llm_fundamentals } from './items/llm-fundamentals';
import { vector_databases } from './items/vector-databases';
import { prompt_engineering } from './items/prompt-engineering';
import { ai_tools } from './items/ai-tools';
import { neural_network_fundamentals } from './items/neural-network-fundamentals';
import { deep_learning_architectures } from './items/deep-learning-architectures';
import { llm_training_pipeline } from './items/llm-training-pipeline';
import { context_window_function_calling } from './items/context-window-function-calling';
import { rag_advanced } from './items/rag-advanced';
import { multimodal_diffusion } from './items/multimodal-diffusion';
import { reasoning_models } from './items/reasoning-models';
import { ai_ecosystem_landscape } from './items/ai-ecosystem-landscape';
import { llm_deployment_practice } from './items/llm-deployment-practice';
import { llm_engineering_safety } from './items/llm-engineering-safety';
import { ai_case_studies } from './items/ai-case-studies';

export const aiCategoryData: CategoryData = {
  category: {
    id: 'ai',
    name: 'AI 学习',
    icon: '🤖',
    count: 17,
    description: '人工智能相关的核心概念、工具和最佳实践，涵盖AI Agent、LangChain、大语言模型等前沿技术'
  },
  items: [
    ai_agent,
    langchain,
    llm_fundamentals,
    vector_databases,
    prompt_engineering,
    ai_tools,
    neural_network_fundamentals,
    deep_learning_architectures,
    llm_training_pipeline,
    context_window_function_calling,
    rag_advanced,
    multimodal_diffusion,
    reasoning_models,
    ai_ecosystem_landscape,
    llm_deployment_practice,
    llm_engineering_safety,
    ai_case_studies
  ]
};