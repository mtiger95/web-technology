import { KnowledgeItem } from '@/types/knowledge';

export const vector_databases: KnowledgeItem = {
  id: 'vector-databases',
  title: '向量数据库核心技术与应用实践',
  category: 'ai',
  difficulty: 'hard',
  tags: ['向量数据库', '相似性搜索', '嵌入向量', 'RAG', 'Chroma', 'Pinecone'],
  content: `## 向量数据库核心技术与应用实践

向量数据库是现代AI应用的核心基础设施，专门用于存储、索引和检索高维向量数据。随着大语言模型和机器学习应用的普及，向量数据库已成为实现语义搜索、推荐系统、相似性匹配等功能的关键技术。

### 🧠 向量数据库的基本概念

向量数据库是一种专门设计用于处理向量数据的数据库系统。与传统的关系型数据库不同，向量数据库专注于高维向量的相似性搜索，能够快速找到与查询向量最相似的数据点。

#### 1. 向量表示
向量是多维空间中的点，通常表示为数字数组：
- **词向量**：将词汇映射到高维空间
- **句子向量**：表示整个句子的语义
- **图像向量**：图像的特征表示
- **音频向量**：声音信号的特征表示

#### 2. 相似性度量
向量数据库使用不同的距离度量来计算相似性：

**余弦相似度（Cosine Similarity）**：
\`\`\`python
import numpy as np

def cosine_similarity(a, b):
    """计算两个向量的余弦相似度"""
    dot_product = np.dot(a, b)
    norm_a = np.linalg.norm(a)
    norm_b = np.linalg.norm(b)
    return dot_product / (norm_a * norm_b)

# 示例
vec1 = np.array([1, 2, 3])
vec2 = np.array([2, 3, 4])
similarity = cosine_similarity(vec1, vec2)
print(f"余弦相似度: {similarity}")
\`\`\`

**欧几里得距离（Euclidean Distance）**：
\`\`\`python
def euclidean_distance(a, b):
    """计算两个向量的欧几里得距离"""
    return np.sqrt(np.sum((a - b) ** 2))

distance = euclidean_distance(vec1, vec2)
print(f"欧几里得距离: {distance}")
\`\`\`

**点积（Dot Product）**：
\`\`\`python
def dot_product_similarity(a, b):
    """计算点积相似度"""
    return np.dot(a, b)

dot_sim = dot_product_similarity(vec1, vec2)
print(f"点积相似度: {dot_sim}")
\`\`\`

### 🔧 核心技术原理

#### 1. 向量索引技术
向量数据库使用特殊的索引结构来加速相似性搜索：

**近似最近邻搜索（Approximate Nearest Neighbor, ANN）**：
- 精确搜索在高维空间中计算复杂度极高
- ANN算法提供近似结果，大幅提高搜索速度
- 在精度和速度之间取得平衡

**常用ANN算法**：

**IVF（Inverted File Index）**：
- 将向量空间划分为多个聚类
- 搜索时只检查相关聚类
- 减少搜索范围

\`\`\`python
from sklearn.cluster import KMeans
import numpy as np

class IVFIndex:
    def __init__(self, n_clusters=100):
        self.n_clusters = n_clusters
        self.kmeans = KMeans(n_clusters=n_clusters)
        self.clusters = {}
        self.vectors = {}
        
    def fit(self, vectors):
        """训练聚类模型"""
        self.centroids = self.kmeans.fit(vectors).cluster_centers_
        
        # 将向量分配到对应聚类
        labels = self.kmeans.predict(vectors)
        for i, label in enumerate(labels):
            if label not in self.clusters:
                self.clusters[label] = []
            self.clusters[label].append(i)
            self.vectors[i] = vectors[i]
    
    def search(self, query_vector, k=10):
        """搜索最相似的k个向量"""
        # 找到查询向量最接近的聚类
        distances = np.linalg.norm(self.centroids - query_vector, axis=1)
        closest_cluster = np.argmin(distances)
        
        # 在该聚类中搜索
        candidates = self.clusters[closest_cluster]
        similarities = []
        
        for idx in candidates:
            similarity = cosine_similarity(query_vector, self.vectors[idx])
            similarities.append((idx, similarity))
        
        # 返回最相似的k个
        similarities.sort(key=lambda x: x[1], reverse=True)
        return similarities[:k]
\`\`\`

**HNSW（Hierarchical Navigable Small World）**：
- 分层图结构
- 高效的图遍历算法
- 优秀的搜索性能

**LSH（Locality Sensitive Hashing）**：
- 哈希函数保持相似性
- 快速哈希查找
- 适合大规模数据

#### 2. 向量量化技术
为了节省存储空间和提高搜索效率，向量数据库使用量化技术：

**标量量化（Scalar Quantization）**：
- 对每个维度单独量化
- 压缩比高但精度损失较大

**乘积量化（Product Quantization）**：
- 将向量分割为子向量
- 对每个子向量独立量化
- 平衡压缩和精度

\`\`\`python
class ProductQuantizer:
    def __init__(self, m=8, k=256):
        self.m = m  # 子向量数量
        self.k = k  # 每个子向量的码本大小
        self.codebooks = None
        
    def fit(self, vectors):
        """训练乘积量化器"""
        n, d = vectors.shape
        self.d_sub = d // self.m  # 每个子向量的维度
        
        self.codebooks = np.zeros((self.m, self.k, self.d_sub))
        
        for i in range(self.m):
            start_idx = i * self.d_sub
            end_idx = (i + 1) * self.d_sub
            sub_vectors = vectors[:, start_idx:end_idx]
            
            # 对每个子向量聚类
            kmeans = KMeans(n_clusters=self.k)
            kmeans.fit(sub_vectors)
            self.codebooks[i] = kmeans.cluster_centers_
    
    def encode(self, vectors):
        """编码向量"""
        n, d = vectors.shape
        codes = np.zeros((n, self.m), dtype=np.int32)
        
        for i in range(self.m):
            start_idx = i * self.d_sub
            end_idx = (i + 1) * self.d_sub
            sub_vectors = vectors[:, start_idx:end_idx]
            
            for j in range(n):
                distances = np.linalg.norm(
                    self.codebooks[i] - sub_vectors[j], axis=1
                )
                codes[j, i] = np.argmin(distances)
        
        return codes
    
    def decode(self, codes):
        """解码向量"""
        n = codes.shape[0]
        reconstructed = np.zeros((n, self.d_sub * self.m))
        
        for i in range(self.m):
            for j in range(n):
                reconstructed[j, i*self.d_sub:(i+1)*self.d_sub] = \
                    self.codebooks[i, codes[j, i]]
        
        return reconstructed
\`\`\`

### 🏗️ 主流向量数据库

#### 1. Pinecone
Pinecone是托管的向量数据库服务：

**特点**：
- 完全托管服务
- 自动扩展
- 高可用性
- 支持多种索引类型

**使用示例**：
\`\`\`python
import pinecone

# 初始化Pinecone
pinecone.init(api_key="your-api-key", environment="us-west1-gcp")

# 创建索引
index_name = "my-index"
pinecone.create_index(index_name, dimension=1536)

# 连接到索引
index = pinecone.Index(index_name)

# 添加向量
vectors = [
    ("vec1", [0.1, 0.2, 0.3], {"metadata": "value1"}),
    ("vec2", [0.4, 0.5, 0.6], {"metadata": "value2"})
]
index.upsert(vectors=vectors)

# 查询相似向量
query_result = index.query(
    vector=[0.15, 0.25, 0.35],
    top_k=10,
    include_metadata=True
)
\`\`\`

#### 2. Weaviate
Weaviate是开源的向量数据库：

**特点**：
- GraphQL API
- 自动模式推断
- 支持多种向量索引
- 云原生架构

**使用示例**：
\`\`\`python
import weaviate

# 连接到Weaviate
client = weaviate.Client("http://localhost:8080")

# 创建类
class_obj = {
    "class": "Document",
    "properties": [
        {
            "name": "content",
            "dataType": ["string"]
        }
    ],
    "vectorizer": "none"  # 手动提供向量
}

client.schema.create_class(class_obj)

# 添加对象
client.data_object.create(
    data_object={
        "content": "这是一个文档内容"
    },
    class_name="Document",
    vector=[0.1, 0.2, 0.3]  # 提供向量
)

# 相似性搜索
near_vector = {"vector": [0.15, 0.25, 0.35]}
result = client.query.get("Document", ["content"]).with_near_vector(
    near_vector
).with_limit(10).do()
\`\`\`

#### 3. Milvus
Milvus是专为企业级应用设计的向量数据库：

**特点**：
- 高性能
- 支持多种索引类型
- 水平扩展
- 丰富的API

**使用示例**：
\`\`\`python
from pymilvus import connections, FieldSchema, CollectionSchema, DataType, Collection

# 连接Milvus
connections.connect("default", host="localhost", port="19530")

# 定义schema
fields = [
    FieldSchema(name="id", dtype=DataType.INT64, is_primary=True, auto_id=True),
    FieldSchema(name="embedding", dtype=DataType.FLOAT_VECTOR, dim=128),
    FieldSchema(name="text", dtype=DataType.VARCHAR, max_length=65535)
]
schema = CollectionSchema(fields, "文档集合")

# 创建collection
collection = Collection("docs", schema)

# 创建索引
index_params = {
    "index_type": "IVF_FLAT",
    "metric_type": "L2",
    "params": {"nlist": 100}
}
collection.create_index(field_name="embedding", index_params=index_params)

# 插入数据
entities = [
    [[0.1, 0.2, 0.3], [0.4, 0.5, 0.6]],  # embeddings
    ["文本1", "文本2"]  # texts
]
insert_result = collection.insert(entities)

# 搜索
collection.load()
search_params = {"metric_type": "L2", "params": {"nprobe": 10}}
results = collection.search(
    data=[[0.15, 0.25, 0.35]],
    anns_field="embedding",
    param=search_params,
    limit=10,
    output_fields=["text"]
)
\`\`\`

#### 4. Chroma
Chroma是简单易用的向量数据库：

**特点**：
- 轻量级
- Python原生
- 适合原型开发
- 开源免费

**使用示例**：
\`\`\`python
import chromadb
from chromadb.utils import embedding_functions

# 创建客户端
client = chromadb.Client()

# 创建集合
collection = client.create_collection("docs")

# 添加文档
collection.add(
    documents=[
        "这是一个文档",
        "这是另一个文档"
    ],
    metadatas=[
        {"source": "web"},
        {"source": "book"}
    ],
    ids=["doc1", "doc2"]
)

# 查询相似文档
results = collection.query(
    query_texts=["查询文本"],
    n_results=2
)
\`\`\`

### 🚀 RAG（检索增强生成）应用

向量数据库在RAG系统中发挥关键作用：

#### 1. RAG架构
\`\`\`python
class RAGSystem:
    def __init__(self, vector_db, llm):
        self.vector_db = vector_db
        self.llm = llm
        self.embedding_model = embedding_functions.SentenceTransformerEmbeddingFunction()
    
    def retrieve(self, query, k=5):
        """从向量数据库检索相关文档"""
        query_embedding = self.embedding_model([query])
        results = self.vector_db.query(
            query_embeddings=query_embedding,
            n_results=k
        )
        return results
    
    def generate(self, query, context):
        """基于上下文生成答案"""
        prompt = f"""
        基于以下上下文信息回答问题：
        
        上下文：{context}
        
        问题：{query}
        
        请提供准确的回答。
        """
        return self.llm.generate(prompt)
    
    def query(self, question):
        """完整RAG流程"""
        # 1. 检索相关文档
        retrieved_docs = self.retrieve(question)
        
        # 2. 构建上下文
        context = " ".join(retrieved_docs['documents'][0])
        
        # 3. 生成答案
        answer = self.generate(question, context)
        
        return {
            'answer': answer,
            'sources': retrieved_docs['metadatas'][0]
        }
\`\`\`

#### 2. 文档预处理
\`\`\`python
from langchain.text_splitter import RecursiveCharacterTextSplitter

class DocumentProcessor:
    def __init__(self):
        self.text_splitter = RecursiveCharacterTextSplitter(
            chunk_size=1000,
            chunk_overlap=200,
            separators=["\\n\\n", "\\n", " ", ""]
        )
    
    def process_document(self, text, doc_id):
        """处理文档并准备插入向量数据库"""
        chunks = self.text_splitter.split_text(text)
        
        # 为每个chunk生成向量
        embeddings = self.embedding_model(chunks)
        
        # 准备数据
        data = {
            'ids': [f"{doc_id}_{i}" for i in range(len(chunks))],
            'documents': chunks,
            'embeddings': embeddings,
            'metadatas': [{'doc_id': doc_id, 'chunk_id': i} 
                         for i in range(len(chunks))]
        }
        
        return data
\`\`\`

### 📊 性能优化策略

#### 1. 索引优化
**选择合适的索引类型**：
- **IVF_FLAT**：精确搜索，适合小规模数据
- **IVF_PQ**：乘积量化，节省存储
- **HNSW**：高性能，适合在线服务

**参数调优**：
- **nlist**：聚类数量，影响搜索精度和速度
- **efConstruction**：构建参数，影响索引质量
- **M**：HNSW参数，影响搜索效率

#### 2. 批量操作
\`\`\`python
def batch_upsert(vectors, batch_size=1000):
    """批量插入向量"""
    for i in range(0, len(vectors), batch_size):
        batch = vectors[i:i+batch_size]
        index.upsert(vectors=batch)
        print(f"已插入 {i+len(batch)} / {len(vectors)} 个向量")
\`\`\`

#### 3. 内存管理
- 合理设置缓存大小
- 及时释放不需要的资源
- 监控内存使用情况

### 🔒 安全性和可靠性

#### 1. 数据安全
**访问控制**：
- API密钥管理
- 角色权限控制
- IP白名单

**数据加密**：
- 传输加密（TLS）
- 存储加密
- 字段级加密

#### 2. 可靠性保障
**备份策略**：
- 定期快照
- 增量备份
- 跨区域复制

**监控告警**：
- 性能指标监控
- 错误率跟踪
- 资源使用监控

### 🛠️ 最佳实践

#### 1. 向量质量保证
- 使用高质量的嵌入模型
- 定期更新向量表示
- 验证向量的语义一致性

#### 2. 查询优化
- 合理设置top-k参数
- 使用过滤条件缩小搜索范围
- 实现查询缓存机制

#### 3. 成本控制
- 选择合适的实例规格
- 实现自动扩缩容
- 监控使用量和成本

### 🌟 未来发展趋势

#### 1. 多模态向量数据库
- 支持文本、图像、音频等多种模态
- 跨模态相似性搜索
- 统一向量空间

#### 2. 实时向量处理
- 流式向量摄入
- 实时索引更新
- 增量学习能力

#### 3. 边缘部署
- 轻量级向量数据库
- 本地化部署
- 低延迟访问

向量数据库作为AI应用的基础设施，其重要性将持续增长。随着技术的不断发展，向量数据库将在性能、功能和易用性方面不断提升，为AI应用提供更强大的支持。`,
  createdAt: '2026-03-15',
  updatedAt: '2026-03-15'
};