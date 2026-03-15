import { KnowledgeItem } from '@/types/knowledge';

export const prompt_engineering: KnowledgeItem = {
  id: 'prompt-engineering',
  title: '提示工程（Prompt Engineering）最佳实践',
  category: 'ai',
  difficulty: 'medium',
  tags: ['提示工程', 'Prompt Engineering', 'LLM调优', '指令设计', '上下文学习'],
  content: `## 提示工程（Prompt Engineering）最佳实践

提示工程是与大语言模型交互的核心技能，通过精心设计的提示（Prompt）来引导模型产生期望的输出。良好的提示工程能够显著提升模型的表现，实现更准确、更可控的AI应用。

### 🎯 提示工程的基本概念

提示工程是指设计、优化和管理输入给AI模型的提示文本的技术和艺术。它涉及理解模型的工作机制，以及如何通过结构化的输入来获得最佳输出。

#### 1. 提示的组成部分
一个有效的提示通常包含以下元素：

**指令（Instruction）**：
- 明确告诉模型要做什么
- 具体、清晰的指导
- 避免模糊表述

**上下文（Context）**：
- 提供必要的背景信息
- 相关的先验知识
- 约束条件和规则

**输入（Input）**：
- 需要处理的具体数据
- 问题或任务的描述
- 待分析的内容

**输出指示符（Output Indicator）**：
- 指定期望的输出格式
- 结构化要求
- 长度限制

\`\`\`python
# 示例：结构化提示模板
def create_structured_prompt(task, context, input_data, output_format):
    prompt = f"""
    任务：{task}
    
    背景信息：{context}
    
    输入数据：{input_data}
    
    请按照以下格式输出：{output_format}
    
    回答：
    """
    return prompt
\`\`\`

### 🧠 提示设计原则

#### 1. 明确性原则
提示应该清晰明确，避免歧义：

**不良示例**：
"告诉我一些关于AI的事情"

**改进示例**：
"请用不超过200字概括人工智能的主要发展历程，包括关键里程碑和技术突破。"

#### 2. 具体性原则
提供具体的指导和约束：

**不良示例**：
"写一篇好文章"

**改进示例**：
"写一篇800字左右的科技文章，主题是'机器学习在医疗诊断中的应用'，要求包含引言、三个主要应用场景、技术挑战和未来展望四个部分。"

#### 3. 结构化原则
使用清晰的结构组织提示：

\`\`\`python
def structured_prompt_template():
    template = """
    # 任务说明
    请分析以下文本的情感倾向。
    
    # 输入文本
    {text}
    
    # 分析要求
    1. 识别主要情感类别（积极、消极、中性）
    2. 提供置信度评分（0-100%）
    3. 指出关键情感词汇
    4. 给出简要理由
    
    # 输出格式
    - 情感类别: [类别]
    - 置信度: [百分比]
    - 关键词: [词汇列表]
    - 理由: [简要说明]
    """
    return template
\`\`\`

### 🔧 高级提示技术

#### 1. 少样本学习（Few-Shot Learning）
通过提供少量示例来指导模型：

\`\`\`python
def few_shot_prompt():
    prompt = """
    以下是文本分类的示例：
    
    示例1：
    输入：今天天气真好，心情很愉快
    输出：积极情感
    
    示例2：
    输入：产品质量太差了，非常失望
    输出：消极情感
    
    示例3：
    输入：明天开会讨论项目进展
    输出：中性情感
    
    现在请对以下文本进行分类：
    输入：{new_text}
    输出：
    """
    return prompt
\`\`\`

#### 2. 链式思考（Chain-of-Thought）
引导模型逐步推理：

\`\`\`python
def chain_of_thought_prompt(problem):
    prompt = f"""
    请逐步解决以下问题：
    
    问题：{problem}
    
    解决步骤：
    1. 首先，分析问题的关键要素
    2. 然后，确定解决问题的方法
    3. 接着，逐步执行计算或推理
    4. 最后，得出结论并验证
    
    请详细展示每一步的思考过程：
    """
    return prompt
\`\`\`

#### 3. 自我一致性（Self-Consistency）
通过多次采样提高准确性：

\`\`\`python
def self_consistency_approach(prompt, model, num_samples=5):
    """通过多次采样获得一致答案"""
    responses = []
    for _ in range(num_samples):
        response = model.generate(prompt, temperature=0.7)
        responses.append(response)
    
    # 选择最常见的答案
    from collections import Counter
    answer_counts = Counter(responses)
    best_answer = answer_counts.most_common(1)[0][0]
    
    return best_answer, responses
\`\`\`

### 🚀 专业提示技巧

#### 1. 角色扮演
让模型承担特定角色：

\`\`\`python
def role_playing_prompt(role, task):
    prompt = f"""
    你是{role}，请完成以下任务：
    
    {task}
    
    请以{role}的专业知识和视角来回答，使用相应的术语和表达方式。
    """
    return prompt

# 示例
prompt = role_playing_prompt(
    "资深软件架构师", 
    "分析微服务架构的优缺点"
)
\`\`\`

#### 2. 思维树（Tree of Thoughts）
将复杂问题分解为多个思维路径：

\`\`\`python
def tree_of_thoughts_prompt(problem):
    prompt = f"""
    问题：{problem}
    
    请按以下方式思考：
    
    1. 问题分解
       - 将问题分解为3-5个子问题
       - 为每个子问题提供初步思路
    
    2. 多角度分析
       - 从不同角度审视问题
       - 考虑各种可能性
    
    3. 方案生成
       - 基于分析生成解决方案
       - 评估各方案的可行性
    
    4. 最终决策
       - 选择最佳方案
       - 提供实施建议
    """
    return prompt
\`\`\`

#### 3. 反思与自我修正
引导模型反思和改进：

\`\`\`python
def reflection_prompt(initial_answer, question):
    prompt = f"""
    问题：{question}
    初始答案：{initial_answer}
    
    请反思你的初始答案：
    1. 检查逻辑是否正确
    2. 验证事实是否准确
    3. 考虑是否有更好的表达方式
    4. 识别可能的错误或遗漏
    
    基于反思，提供改进后的答案：
    """
    return prompt
\`\`\`

### 📊 不同场景的提示策略

#### 1. 内容生成
**新闻写作**：
\`\`\`python
news_prompt = """
角色：专业记者

任务：根据提供的信息撰写新闻稿

要求：
- 标题简洁有力，突出重点
- 正文结构：导语-主体-结尾
- 语言客观、准确、简洁
- 包含时间、地点、人物、事件要素
- 字数控制在300-500字

信息：{information}
"""
\`\`\`

**创意写作**：
\`\`\`python
creative_prompt = """
风格：{style}
主题：{theme}
长度：{length}
受众：{audience}

请创作一个符合以下要求的故事：
- 情节完整，有开头、发展、高潮、结尾
- 人物形象鲜明
- 语言风格符合指定风格
- 主题明确且有意义
"""
\`\`\`

#### 2. 代码生成
\`\`\`python
code_generation_prompt = """
语言：{programming_language}
功能：{function_description}
约束：{constraints}

请生成满足以下要求的代码：
1. 代码结构清晰，逻辑正确
2. 包含必要的注释
3. 遵循最佳实践
4. 考虑边界情况
5. 包含错误处理

代码：
"""
\`\`\`

#### 3. 数据分析
\`\`\`python
analysis_prompt = """
数据类型：{data_type}
数据内容：{data_content}
分析目标：{analysis_goal}

请进行以下分析：
1. 数据概览（基本统计信息）
2. 趋势分析
3. 异常检测
4. 相关性分析
5. 结论和建议

请以结构化格式呈现结果。
"""
\`\`\`

### 🔧 提示优化技术

#### 1. A/B测试
对不同提示版本进行效果对比：

\`\`\`python
def ab_test_prompts(prompts, test_data, evaluation_metric):
    """A/B测试不同提示的效果"""
    results = {}
    
    for prompt_name, prompt in prompts.items():
        scores = []
        for sample in test_data:
            response = model.generate(prompt.format(**sample))
            score = evaluate_response(response, sample['expected'], evaluation_metric)
            scores.append(score)
        
        results[prompt_name] = {
            'average_score': sum(scores) / len(scores),
            'responses': [model.generate(prompt.format(**sample)) for sample in test_data]
        }
    
    return results
\`\`\`

#### 2. 提示链（Prompt Chaining）
将复杂任务分解为多个步骤：

\`\`\`python
def chained_prompts():
    steps = [
        {
            'name': '信息提取',
            'prompt': "从以下文本中提取关键信息：{text}"
        },
        {
            'name': '分析',
            'prompt': "分析以下信息：{extracted_info}"
        },
        {
            'name': '总结',
            'prompt': "基于以下分析给出总结：{analysis}"
        }
    ]
    return steps
\`\`\`

#### 3. 动态提示
根据输入动态调整提示内容：

\`\`\`python
def dynamic_prompt(input_text):
    # 分析输入特征
    length = len(input_text)
    complexity = analyze_complexity(input_text)
    
    if length < 100:
        return f"请详细解释以下短文本：{input_text}"
    elif complexity > 0.7:
        return f"请用简单语言解释以下复杂内容：{input_text}"
    else:
        return f"请分析以下内容：{input_text}"
\`\`\`

### 🛡️ 安全和伦理考虑

#### 1. 防止有害输出
\`\`\`python
def safe_prompt(user_input):
    prompt = f"""
    重要：请确保你的回答安全、有益、符合道德规范。
    
    用户问题：{user_input}
    
    请提供有用且安全的回答，避免：
    - 有害建议
    - 偏见内容
    - 虚假信息
    - 违法内容
    """
    return prompt
\`\`\`

#### 2. 偏见缓解
\`\`\`python
def bias_aware_prompt():
    prompt = """
    请注意避免任何形式的偏见，包括但不限于：
    - 性别偏见
    - 种族偏见
    - 地域偏见
    - 年龄偏见
    - 职业偏见
    
    请提供客观、公正的回答。
    """
    return prompt
\`\`\`

### 📈 评估和改进

#### 1. 提示质量评估指标
- **相关性**：输出与输入的相关程度
- **准确性**：信息的正确性
- **完整性**：覆盖要点的全面性
- **一致性**：多次运行结果的稳定性
- **创造性**：新颖性和独创性

#### 2. 持续改进流程
\`\`\`python
def prompt_improvement_cycle(initial_prompt, test_cases, improvement_iterations=5):
    current_prompt = initial_prompt
    
    for iteration in range(improvement_iterations):
        # 测试当前提示
        test_results = test_prompt(current_prompt, test_cases)
        
        # 分析失败案例
        failure_analysis = analyze_failures(test_results)
        
        # 生成改进建议
        improvements = generate_improvements(failure_analysis)
        
        # 更新提示
        current_prompt = update_prompt(current_prompt, improvements)
        
        print(f"迭代 {iteration + 1}: 提示已更新")
    
    return current_prompt
\`\`\`

### 🚀 实战案例

#### 1. 客服对话系统
\`\`\`python
customer_service_prompt = """
你是{company_name}的客服代表，请处理以下客户咨询：

客户信息：
- 姓名：{customer_name}
- 会员等级：{membership_level}
- 历史记录：{history}

客户问题：{customer_query}

请遵循以下原则：
1. 保持友好、专业的态度
2. 优先考虑高价值客户
3. 提供具体解决方案
4. 如需升级，说明升级原因
5. 询问是否还有其他帮助

回复：
"""
\`\`\`

#### 2. 技术文档生成
\`\`\`python
tech_doc_prompt = """
API名称：{api_name}
功能描述：{function_desc}
参数：{parameters}
返回值：{return_values}

请生成技术文档，包含：
1. 功能概述
2. 参数说明（类型、必填、描述）
3. 返回值说明
4. 使用示例（至少2个）
5. 错误码说明
6. 注意事项

文档应简洁明了，便于开发者使用。
"""
\`\`\`

### 🌟 最佳实践总结

#### 1. 设计原则
- 从简单开始，逐步复杂化
- 保持提示的一致性
- 使用明确的分隔符
- 提供足够的上下文

#### 2. 测试策略
- 多样化测试用例
- 边界情况测试
- 压力测试
- 用户验收测试

#### 3. 维护建议
- 版本控制提示
- 监控性能指标
- 定期更新优化
- 文档化变更

提示工程是一门既科学又艺术的技术，需要在实践中不断探索和完善。通过掌握这些原则和技巧，可以显著提升与AI模型交互的效果，构建更智能、更可靠的应用系统。`,
  createdAt: '2026-03-15',
  updatedAt: '2026-03-15'
};