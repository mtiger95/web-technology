// 知识点难度相关的工具函数

export const getDifficultyColor = (difficulty: string) => {
  switch (difficulty) {
    case 'easy': return 'green';
    case 'medium': return 'orange';
    case 'hard': return 'red';
    default: return 'default';
  }
};

export const getDifficultyText = (difficulty: string) => {
  switch (difficulty) {
    case 'easy': return '简单';
    case 'medium': return '中等';
    case 'hard': return '困难';
    default: return '未知';
  }
};

export const getDifficultyEmoji = (difficulty: string) => {
  switch (difficulty) {
    case 'easy': return '🟢';
    case 'medium': return '🟡';
    case 'hard': return '🔴';
    default: return '⚪';
  }
};