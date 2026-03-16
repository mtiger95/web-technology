import { knowledgeList, categories } from "@/data";
import CategoryClient from "./CategoryClient";

// 生成静态参数
export function generateStaticParams() {
  const params: { category: string }[] = [];
  for (const category of categories) {
    params.push({
      category: category.id,
    });
  }
  return params;
}

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;
  return <CategoryClient categoryId={category} />;
}
