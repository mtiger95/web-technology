'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, Layout, Typography, Avatar } from 'antd';
import type { MenuProps } from 'antd';
import {
  BookOutlined
} from '@ant-design/icons';
import { categories, knowledgeList } from '@/data';

const { Sider } = Layout;
const { Title, Text } = Typography;

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
      label: (
        <Link href="/" title="全部知识点">
          <span>全部知识点</span>
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
          <Link href={`/${category.id}/${item.id}`} title={item.title}>
            <span>{item.title}</span>
          </Link>
        ),
        selected: currentCategory === category.id && currentId === item.id
      }));

    menuItems.push({
      key: category.id,
      label: (
        <span title={category.name}>{category.name}</span>
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