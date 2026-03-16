'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, Layout, Typography, Avatar } from 'antd';
import type { MenuProps } from 'antd';
import { 
  HomeOutlined, 
  CodeOutlined, 
  LayoutOutlined, 
  SafetyOutlined, 
  RocketOutlined, 
  BookOutlined, 
  MonitorOutlined, 
  BranchesOutlined,
  ThunderboltOutlined
} from '@ant-design/icons';
import { categories, knowledgeList } from '@/data';
import { getDifficultyEmoji } from '@/utils/difficulty';

const { Sider } = Layout;
const { Title, Text } = Typography;

const iconMap: Record<string, React.ReactNode> = {
  all: <HomeOutlined />,
  css: <LayoutOutlined />,
  javascript: <CodeOutlined />,
  vue: <BookOutlined />,
  react: <ThunderboltOutlined />,
  security: <SafetyOutlined />,
  performance: <RocketOutlined />,
  engineering: <BranchesOutlined />,
  browser: <MonitorOutlined />,
  ai: <ThunderboltOutlined />
};

export default function Sidebar() {
  const pathname = usePathname();
  const currentCategory = pathname.split('/')[1] || 'all';
  const currentId = pathname.split('/')[2];
  const [openKeys, setOpenKeys] = useState<string[]>(currentCategory !== 'all' ? [currentCategory] : []);

  const handleOpenChange = (keys: string[]) => {
    setOpenKeys(keys);
  };

  interface MenuItem {
    key: string;
    icon?: React.ReactNode;
    label: React.ReactNode;
    selected?: boolean;
    children?: MenuItem[];
  }

  const menuItems: MenuItem[] = [
    {
      key: 'all',
      icon: iconMap['all'],
      label: (
        <Link href="/" className="flex items-center justify-between">
          <span>全部知识点</span>
          <span className="text-xs opacity-70 bg-white/10 px-2 py-1 rounded-full">
            {knowledgeList.length}
          </span>
        </Link>
      ),
      selected: currentCategory === 'all'
    }
  ];

  categories.forEach(category => {
    const categoryItems = knowledgeList
      .filter(item => item.category === category.id)
      .map(item => ({
        key: `${category.id}-${item.id}`,
        label: (
          <Link href={`/${category.id}/${item.id}`} className="flex items-center gap-2">
            <span className="flex-1">{item.title}</span>
            <span className="text-xs opacity-50">
              {getDifficultyEmoji(item.difficulty)}
            </span>
          </Link>
        ),
        selected: currentCategory === category.id && currentId === item.id
      }));

    menuItems.push({
      key: category.id,
      icon: iconMap[category.id as keyof typeof iconMap] || <BookOutlined />,
      label: (
        <div className="flex items-center justify-between">
          <span>{category.name}</span>
          <span className="text-xs opacity-70 bg-white/10 px-2 py-1 rounded-full">
            {knowledgeList.filter(item => item.category === category.id).length}
          </span>
        </div>
      ),
      selected: currentCategory === category.id && !currentId,
      children: categoryItems.length > 0 ? categoryItems : undefined
    });
  });

  return (
    <Sider
      width={300}
      theme="light"
      className="sidebar-sider"
      style={{
        position: 'fixed',
        left: 0,
        top: 0,
        height: '100vh',
        background: 'var(--sidebar-bg)',
        boxShadow: '2px 0 8px rgba(0, 0, 0, 0.1)',
        zIndex: 1000
      }}
    >
      <div className="p-6 sidebar-header">
        <Link href="/" className="block">
          <div className="flex items-center gap-3 mb-2">
            <Avatar 
              size={48} 
              style={{ 
                background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
                border: '3px solid rgba(99, 102, 241, 0.1)'
              }}
              icon={<BookOutlined />}
            />
            <div>
              <Title level={4} style={{ color: 'var(--color-foreground)', margin: 0, fontSize: '18px' }}>
                前端知识宝典
              </Title>
              <Text style={{ color: 'var(--color-text-secondary)', fontSize: '12px' }}>
                Senior Frontend Knowledge
              </Text>
            </div>
          </div>
        </Link>
      </div>
      
      <Menu
        mode="inline"
        openKeys={openKeys}
        onOpenChange={handleOpenChange}
        selectedKeys={currentId ? [`${currentCategory}-${currentId}`] : [currentCategory]}
        style={{ 
          height: 'calc(100vh - 140px)', 
          overflowY: 'auto',
          borderRight: 0,
          background: 'transparent',
          paddingTop: '16px'
        }}
        items={menuItems as MenuProps['items']}
        className="sidebar-menu"
      />
    </Sider>
  );
}