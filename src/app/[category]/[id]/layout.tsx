import { knowledgeList, categories } from '@/data';

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

export default function KnowledgeDetailLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
