export interface KnowledgeItem {
  id: string;
  title: string;
  category: string;
  difficulty: 'easy' | 'medium' | 'hard';
  content: string;
  tags: string[];
  createdAt: string;
  updatedAt: string;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  count: number;
  description: string;
}

export interface CategoryData {
  category: Category;
  items: KnowledgeItem[];
}