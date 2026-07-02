import { KnowledgeItem } from '@/types/knowledge';

export const rag_advanced: KnowledgeItem = {
  id: 'rag-advanced',
  title: 'RAG 完整指南：从基础检索到进阶架构',
  category: 'ai',
  difficulty: 'hard',
  tags: ['RAG', '检索增强生成', '向量检索', '重排序', 'GraphRAG', 'Agentic RAG'],
  content: `## RAG：给 AI 外挂知识库 🧠

大语言模型的知识都"冻结"在训练数据里——它不知道你公司上周更新的产品手册，不知道今天早上发生的新闻，更不知道你硬盘里那份从未公开过的合同。想让模型回答这些问题，无非两条路：把新知识塞进训练数据重新训练（成本高、周期长、还容易"学了新的忘了旧的"），或者在提问时把相关资料现场"喂"给它。RAG（Retrieval-Augmented Generation，检索增强生成）走的是第二条路：不改模型参数，只在推理时动态检索外部知识，拼进提示词里，让模型"现学现答"。

#### 1. 为什么必须是"检索"而不是"全部塞进去"

理论上可以把所有文档一股脑塞进提示词，让模型自己找答案，但这在实践中行不通：

- **上下文窗口有限**：企业知识库动辄几万到几百万篇文档，远超任何模型的上下文长度上限。
- **成本随上下文长度线性甚至更快增长**：每次提问都携带全部资料，Token 账单会失控。
- **"大海捞针"效应**：研究发现，即使模型上下文窗口足够大，塞入的无关信息越多，模型定位关键信息的准确率反而越低。

所以更现实的做法是：只把"最可能相关"的一小撮内容找出来，精准注入上下文。这正是检索要解决的问题。

#### 2. RAG 的完整链路

一次完整的 RAG 由"离线构建知识库"和"在线问答"两个阶段组成：

| 阶段 | 步骤 | 作用 |
|---|---|---|
| 离线（建库） | ① 文档切块（Chunking） | 把长文档切成大小适中的片段，便于精确检索 |
| 离线（建库） | ② 向量化（Embedding） | 用嵌入模型把每个片段转成高维向量，捕捉语义 |
| 离线（建库） | ③ 存入向量数据库 | 建立索引，支持大规模、低延迟的相似度检索 |
| 在线（问答） | ④ 检索（Retrieval） | 把用户问题也转成向量，找出最相似的若干片段 |
| 在线（问答） | ⑤ 注入上下文（Augmentation） | 把检索到的片段拼接进 Prompt，作为回答依据 |
| 在线（问答） | ⑥ 生成（Generation） | 大模型基于问题 + 检索片段生成最终回答 |

切块与向量化的具体工程细节（比如向量数据库选型、索引结构 HNSW/IVF）属于向量数据库这门单独的技术，这里不再展开；本文的重点放在"检索质量怎么调优"和"架构怎么进阶"上。

#### 3. 一个简化的 RAG 流程示例

\`\`\`python
# 简化版 RAG 流程：建库 + 问答
class SimpleRAG:
    def __init__(self, embedding_model, vector_store, llm):
        self.embedding_model = embedding_model
        self.vector_store = vector_store
        self.llm = llm

    def build_knowledge_base(self, documents):
        """离线阶段：切块 -> 向量化 -> 入库"""
        for doc in documents:
            chunks = self.split_into_chunks(doc, chunk_size=500, overlap=50)
            vectors = self.embedding_model.encode(chunks)
            self.vector_store.add(chunks, vectors)

    def split_into_chunks(self, text, chunk_size, overlap):
        """最朴素的定长切块：每 chunk_size 个字符切一段，相邻块重叠 overlap"""
        chunks = []
        start = 0
        while start < len(text):
            end = start + chunk_size
            chunks.append(text[start:end])
            start = end - overlap
        return chunks

    def answer(self, question, top_k=5):
        """在线阶段：检索 -> 注入上下文 -> 生成"""
        query_vector = self.embedding_model.encode([question])[0]
        retrieved_chunks = self.vector_store.search(query_vector, top_k=top_k)

        context = "\\n\\n".join(retrieved_chunks)
        prompt = f"""请仅根据下面的资料回答问题，如果资料中没有相关信息，请明确说不知道。

资料：
{context}

问题：{question}

回答："""
        return self.llm.generate(prompt)
\`\`\`

这个流程能跑通，但离"好用"还有距离——它假设"向量相似 = 语义相关"，也假设"固定长度切块"是合理的。这两个假设在真实场景里都会翻车，这就引出了后面两个进阶方向。

## RAG 进阶①：为什么查不准，怎么查准 🔍

RAG 系统上线后最常见的抱怨是"答非所问"，根源往往不在生成环节，而在检索环节——检索到的资料本身就不对，模型再强也是"巧妙地瞎编"。

#### 1. 朴素向量检索的局限

向量检索本质是在做"语义相似度"匹配，但"语义相似"不等于"真正相关"，至少有三类典型翻车场景：

- **关键词/专有名词丢失**：向量检索擅长捕捉语义，但对精确匹配型任务（比如查一个具体的产品型号、错误代码、人名）反而不如关键词检索直接。"iPhone 15 Pro Max 电池容量"和"iPhone 15 Pro 电池容量"语义上非常接近，向量检索容易混淆，但关键词检索一眼就能区分。
- **问题和答案的表述方式不同**：用户问"怎么申请退款"，知识库里写的是"退货退款流程说明"，两者语义相关但向量空间中距离未必足够近，尤其当知识库文档偏正式、用户提问偏口语化时。
- **短查询信息量不足**：一个三五个字的问题本身携带的语义信号很弱，向量化后容易漂移到不相关的簇。

#### 2. 混合检索：向量 + 关键词各取所长

混合检索（Hybrid Search）把稠密向量检索（Dense Retrieval，捕捉语义）和稀疏关键词检索（如 BM25，捕捉精确词面匹配）结合起来，再融合两路结果。

\`\`\`python
def hybrid_search(query, vector_store, bm25_index, top_k=10, alpha=0.5):
    """
    alpha 控制向量检索与关键词检索的权重，alpha 越大越偏向语义匹配
    """
    # 向量检索：返回 (chunk_id, 相似度分数)
    dense_results = vector_store.search(query, top_k=top_k * 2)

    # 关键词检索：返回 (chunk_id, BM25 分数)
    sparse_results = bm25_index.search(query, top_k=top_k * 2)

    # 分数归一化后加权融合（Reciprocal Rank Fusion 是更常用的融合方式）
    scores = {}
    for rank, (chunk_id, _) in enumerate(dense_results):
        scores[chunk_id] = scores.get(chunk_id, 0) + alpha * (1 / (rank + 1))
    for rank, (chunk_id, _) in enumerate(sparse_results):
        scores[chunk_id] = scores.get(chunk_id, 0) + (1 - alpha) * (1 / (rank + 1))

    ranked = sorted(scores.items(), key=lambda x: x[1], reverse=True)
    return [chunk_id for chunk_id, _ in ranked[:top_k]]
\`\`\`

#### 3. 重排序（Reranking）：用更贵但更准的模型精修候选集

向量检索为了追求速度，用的是"双塔模型"——问题和文档分别独立编码成向量，再算距离，这种结构没法让问题和文档做深度的相互对照。重排序引入一个"交叉编码器"（Cross-Encoder），把问题和每个候选片段一起输入模型，直接打分，精度显著更高，但因为要对每个候选单独跑一次模型，成本也更高。所以典型做法是"先粗后精"两阶段：

1. 用向量检索/混合检索先捞回 Top-50 或 Top-100 的粗候选（快、便宜）；
2. 用 Reranker 模型对这些候选精细打分，取 Top-5 或 Top-10 送入生成（慢、精准）。

\`\`\`python
def retrieve_with_rerank(query, vector_store, reranker, coarse_k=50, final_k=5):
    # 第一阶段：粗召回
    candidates = vector_store.search(query, top_k=coarse_k)

    # 第二阶段：精排——reranker 直接对 (query, chunk) 打相关性分
    pairs = [(query, chunk) for chunk in candidates]
    scores = reranker.predict(pairs)

    reranked = sorted(zip(candidates, scores), key=lambda x: x[1], reverse=True)
    return [chunk for chunk, _ in reranked[:final_k]]
\`\`\`

#### 4. 查询改写：让"问题"更适合被检索到

用户的原始提问往往不是"检索友好"的形式，查询改写（Query Rewriting/Transformation）在检索前先对问题做一次加工：

- **同义扩展/多角度改写**：把一个问题改写成几种不同表述，分别检索后合并结果，覆盖更多语义变体。
- **子问题拆解**：把复合问题拆成多个更聚焦的子问题分别检索（这一点在"进阶③"的多跳检索里会进一步展开）。
- **HyDE（Hypothetical Document Embeddings）**：一个很反直觉但很有效的技巧——不直接用问题去检索，而是先让大模型"假装"写一段可能包含答案的假想文档，再用这段假想文档去做向量检索。原理是：问题和答案在语义空间里的分布往往不完全对齐，但"假想答案"和"真实答案"的分布要接近得多，检索命中率因此提升。

\`\`\`python
def hyde_retrieve(query, llm, vector_store, top_k=5):
    # 第一步：让模型生成一段"假设"能回答该问题的文档片段
    hypo_prompt = f"请写一段简短的文字来回答这个问题（即使你并不确定答案是否准确）：{query}"
    hypothetical_doc = llm.generate(hypo_prompt)

    # 第二步：用这段假想文档（而非原始问题）去做向量检索
    return vector_store.search_by_text(hypothetical_doc, top_k=top_k)
\`\`\`

三种技术的对比：

| 技术 | 解决的问题 | 额外成本 | 适用场景 |
|---|---|---|---|
| 混合检索（向量+BM25） | 精确关键词/专有名词召回不足 | 需要额外维护一套关键词索引 | 查询中含产品型号、报错代码、人名等 |
| 重排序 Reranking | 粗召回排序不够精准 | 每次查询多一次模型推理，延迟增加 | 对最终答案精度要求高的场景 |
| 查询改写 / HyDE | 用户提问和文档表述方式不匹配 | 多一次 LLM 调用生成改写/假想文档 | 口语化提问、专业文档库 |

这三者并不互斥，生产级 RAG 系统常常是"查询改写 → 混合检索粗召回 → 重排序精排"串联使用。

## RAG 进阶②：切得好，量得出 ✂️

如果说检索算法决定了"能不能从一堆片段里挑对",那切分策略决定的是"这堆片段本身够不够好"——喂给检索器的原材料质量上不去，后面再怎么调检索算法也是治标不治本。

#### 1. 从"定长切块"到更聪明的切分策略

最朴素的做法是按固定字符数/Token 数切块（如前面伪代码里的 \`chunk_size=500\`），实现简单，但经常在句子中间、表格中间甚至代码块中间硬切一刀，破坏语义完整性。三种更进阶的策略：

**语义切分（Semantic Chunking）**：不按固定长度切，而是按语义边界切——比如逐句计算相邻句子的向量相似度，当相似度出现明显下降（说明话题变了）时就在此处断开，让每个 chunk 内部话题尽量单一、连贯。

**父文档切分（Parent Document Retrieval）**：检索用的是"小块"，但真正塞给模型的是"大块"。具体做法是把文档先切成较大的"父块"（比如完整的一个章节），再把每个父块进一步切成更小的"子块"用于向量化和检索；检索命中子块后，不直接把子块喂给模型，而是回溯找到它所属的父块，把父块的完整上下文交给模型。这样既保证了检索的精确度（小块语义单一，向量更准），又保证了生成时上下文的完整度（大块信息更全）。

**上下文化检索（Contextual Retrieval）**：这是 Anthropic 提出的一种切分增强手段。普通切块有个通病——一个 chunk 脱离原文档后常常"不知所云"，比如一段财报里写着"公司该季度营收增长了 3%"，脱离上下文后完全不知道"该季度"是哪季度、"公司"是哪家公司。Contextual Retrieval 的做法是：在切块之后、向量化之前，让大模型为每个 chunk 生成一小段"文档级上下文摘要"（例如"这段摘自 ACME 公司 2025 年第三季度财报，描述云业务部门的营收情况"），拼接在 chunk 前面再做向量化和索引。这样每个 chunk 的向量表示自带背景信息，检索命中率明显提升。

\`\`\`python
def contextualize_chunk(llm, full_document, chunk):
    """为每个 chunk 生成简短的文档级上下文，再拼接到 chunk 前面"""
    prompt = f"""这是完整文档：
{full_document}

这是文档中的一个片段：
{chunk}

请用1-2句话说明这个片段在整篇文档中的上下文背景（比如属于哪个章节、涉及哪个主体），
不要复述片段内容本身，只给出定位信息。"""
    context_note = llm.generate(prompt)
    return f"{context_note}\\n\\n{chunk}"

def build_contextual_index(llm, embedding_model, vector_store, documents):
    for doc in documents:
        chunks = split_into_chunks(doc, chunk_size=500, overlap=50)
        contextual_chunks = [contextualize_chunk(llm, doc, c) for c in chunks]
        vectors = embedding_model.encode(contextual_chunks)
        vector_store.add(contextual_chunks, vectors)
\`\`\`

三种切分策略对比：

| 策略 | 核心思路 | 优点 | 代价 |
|---|---|---|---|
| 定长切块 | 按固定字符/Token 数切 | 实现简单、速度快 | 经常破坏语义完整性 |
| 语义切分 | 按语义边界（相似度骤降处）切 | 每个 chunk 话题连贯 | 需要额外计算句间相似度，切分不等长 |
| 父文档切分 | 小块检索、大块返回 | 兼顾检索精度和上下文完整度 | 需要维护父子两级结构 |
| 上下文化检索 | 为每个 chunk 附加 LLM 生成的文档级摘要 | 显著提升脱离上下文后的检索命中率 | 建库阶段要为每个 chunk 多调一次 LLM，成本上升 |

#### 2. 怎么评估一个 RAG 系统好不好

很多团队评估 RAG 系统的方式是"人工看几个回答顺不顺眼"，这种方式定位不了问题出在哪一环。RAG 是一个两段式流水线（检索 + 生成），必须分层评估，否则"最终答案差"这个结论完全无法指导优化方向——到底是没检索到对的资料，还是检索到了但模型没用好？

**检索层评估**：只看"找回来的片段对不对"，跟生成质量无关。

- **召回率（Recall@k）**：真正相关的片段里，有多大比例出现在了 Top-k 检索结果中。
- **准确率（Precision@k）**：Top-k 检索结果里，有多大比例是真正相关的。
- **MRR（Mean Reciprocal Rank，平均倒数排名）**：第一个相关片段排在第几位，排位越靠前分数越高，衡量的是"好答案是不是排在前面"而不只是"有没有被召回"。

\`\`\`python
def mrr(retrieved_lists, relevant_ids_list):
    """retrieved_lists: 每次查询返回的排序后 chunk_id 列表
       relevant_ids_list: 每次查询对应的真正相关 chunk_id 集合"""
    reciprocal_ranks = []
    for retrieved, relevant_ids in zip(retrieved_lists, relevant_ids_list):
        rank = next(
            (i + 1 for i, cid in enumerate(retrieved) if cid in relevant_ids),
            None
        )
        reciprocal_ranks.append(1 / rank if rank else 0)
    return sum(reciprocal_ranks) / len(reciprocal_ranks)
\`\`\`

**生成层评估**：假设检索结果已经给定，只看"模型基于这些资料回答得好不好"。

- **忠实度（Faithfulness）**：回答中的每一个论断是否都能在检索到的资料里找到依据，衡量的是模型有没有"编造"资料里没有的内容（幻觉）。
- **答案相关性（Answer Relevance）**：回答是否切题地回应了用户的问题，而不是围绕资料泛泛而谈却没答到点子上。
- **上下文相关性（Context Relevance）**：检索到的资料本身跟问题的相关程度，这一项其实横跨了检索层和生成层，常作为两者之间的桥梁指标。

之所以要分层评估，是因为"最终答案不好"可能来自完全不同的病根：如果 Recall 很低，说明问题出在切分或检索策略，调 Prompt 没用；如果 Recall 很高但 Faithfulness 很低，说明资料找对了但模型在瞎编，需要在生成端下功夫（比如更强的"仅依据资料回答"指令约束）。混着看只能看到"不好"，分层看才能定位"哪里不好、该改哪一环"。

## RAG 进阶③：单次检索不够时 🔄

前面讨论的都是"一次提问、一次检索"的场景，但很多真实问题天生需要多轮信息拼接才能回答，比如"跟去年同期相比，A 产品线和 B 产品线哪个增速更快、主要驱动因素是什么"——这需要先分别查到两条产品线各自的历史数据，再做对比和归因，单次检索根本凑不齐所有信息。

#### 1. Agentic RAG：把"要不要检索、检索什么"交给模型自己判断

传统 RAG 是一条写死的流水线：收到问题就检索、检索完就生成，中间没有任何判断环节。Agentic RAG 把检索变成模型可以自主调用的一个"工具"，模型自己决定：这个问题需不需要检索？需要检索几次？每次检索什么关键词？检索到的资料够不够回答，还是要接着查？

\`\`\`python
def agentic_rag(question, llm, retriever, max_iterations=4):
    """让模型自主决定检索动作，直到它认为信息足够为止"""
    gathered_context = []
    for _ in range(max_iterations):
        decision_prompt = f"""问题：{question}

已收集到的资料：
{gathered_context if gathered_context else "（暂无）"}

请判断：现有资料是否足以回答这个问题？
如果足够，回复：ANSWER
如果不够，回复：SEARCH: <你想检索的具体查询词>"""
        decision = llm.generate(decision_prompt)

        if decision.startswith("SEARCH:"):
            sub_query = decision.replace("SEARCH:", "").strip()
            new_chunks = retriever.search(sub_query, top_k=5)
            gathered_context.extend(new_chunks)
        else:
            break

    final_prompt = f"资料：\\n{gathered_context}\\n\\n问题：{question}\\n请给出最终回答："
    return llm.generate(final_prompt)
\`\`\`

#### 2. 多跳检索（Multi-hop Retrieval）：用上一步查到的结果去查下一步

多跳检索是 Agentic RAG 里最常见的一种具体模式：先检索出问题的一部分信息，把这部分信息作为线索，再去检索下一步需要的信息，像走迷宫一样一跳一跳逼近答案。经典场景是"桥接型"问题——"写《XX》这本书的作者出生在哪个城市？"，需要先查到"XX 的作者是谁"（第一跳），再拿这个作者名去查"这个人出生在哪"（第二跳），两跳之间的查询词完全不同，单次检索无论如何都凑不出来。

\`\`\`python
def multi_hop_retrieve(question, llm, retriever):
    # 第一跳：检索能回答"子问题1"的资料
    sub_q1 = llm.generate(f"要回答「{question}」，第一步需要先查清楚什么？只给出子问题。")
    hop1_chunks = retriever.search(sub_q1, top_k=3)

    # 从第一跳结果里提取出关键实体/线索，构造第二跳的查询
    bridge_entity = llm.generate(f"根据资料：{hop1_chunks}\\n\\n提取出回答「{sub_q1}」的关键实体。")
    sub_q2 = llm.generate(f"结合「{bridge_entity}」，构造用于回答「{question}」的下一步检索查询。")
    hop2_chunks = retriever.search(sub_q2, top_k=3)

    all_context = hop1_chunks + hop2_chunks
    return llm.generate(f"资料：{all_context}\\n\\n问题：{question}\\n回答：")
\`\`\`

#### 3. GraphRAG：用知识图谱补上"实体关系"这一课

向量检索擅长找"语义相近的一段文字",但天生不擅长回答依赖"实体之间关系"的问题，比如"A 公司的哪些高管同时在 B 公司任职"——这种问题的答案不藏在某一段连续的文字里,而是分散在图谱式的关联关系中。GraphRAG 的思路是提前从文档中抽取出实体（人物、公司、产品等）和实体间的关系，构建成知识图谱，检索时不只做向量相似度匹配，还沿着图谱的边做多跳关系查询，把"关联路径"上涉及的信息一并取出来给模型。

三种进阶模式的对比：

| 模式 | 核心机制 | 检索次数 | 最适合的问题类型 |
|---|---|---|---|
| Agentic RAG | 模型自主决定是否检索、检索几次 | 动态，由模型判断 | 简单和复杂问题混杂、需要按需检索 |
| 多跳检索 | 用上一步检索结果构造下一步查询 | 固定的多步 | "桥接型"问题，答案分散在需顺序追溯的多处 |
| GraphRAG | 基于知识图谱做关系遍历 | 沿图谱边多跳 | 依赖实体间显式关系的问题 |

#### 4. 长上下文窗口会取代 RAG 吗

随着模型上下文窗口越做越长，一直有一种声音认为"以后直接把资料全塞进去就行了,RAG 会被淘汰"。更贴近现实的判断是——这是两种适用场景不同的方案，而非替代关系：

| 维度 | 长上下文窗口 | RAG |
|---|---|---|
| 数据规模 | 适合中小规模、能整体塞入窗口的资料 | 适合海量数据（远超窗口容量）中做精确检索 |
| 任务性质 | 适合需要"整体理解、跨段落综合"的任务 | 适合"从大量资料中定位到具体几条事实"的任务 |
| 成本 | 每次调用都要重新处理全部上下文，Token 成本高 | 只检索必要片段，成本更可控 |
| 时效性 | 资料更新需要重新组装整个上下文 | 知识库更新后，检索能立刻用上新内容，无需改动模型调用方式 |
| 精度 | 上下文越长，"大海捞针"式的关键信息丢失风险越高 | 检索环节本身就是做"降噪"，精准定位相关片段 |

实践中更常见的是两者结合：用 RAG 从海量知识库里筛出一小批高度相关的资料，再依靠模型较长的上下文窗口把这批资料一次性看全、综合作答——检索负责"降维找准",长上下文负责"看全用好",两者互补而非二选一。`,
  createdAt: '2026-07-02',
  updatedAt: '2026-07-02'
};
