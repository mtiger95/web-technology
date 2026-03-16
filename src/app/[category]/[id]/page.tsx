import { knowledgeList, categories } from '@/data';
import KnowledgeDetailClient from './KnowledgeDetailClient';

// 生成静态参数
export function generateStaticParams() {
  const params: { category: string; id: string }[] = [];
  for (const category of categories) {
    const items = knowledgeList.filter((item) => item.category === category.id);
    for (const item of items) {
      params.push({
        category: category.id,
        id: item.id,
      });
    }
  }
  return params;
}

export default async function KnowledgeDetailPage({ params }: { params: Promise<{ category: string; id: string }> }) {
  const { category, id } = await params;
  return <KnowledgeDetailClient categoryId={category} itemId={id} />;
}
