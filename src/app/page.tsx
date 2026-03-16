'use client';

import { useState, useMemo } from 'react';
import { Layout, Card, Input, Space, Tag, Typography, Button, Empty } from 'antd';
import { SearchOutlined, BookOutlined } from '@ant-design/icons';
import Link from 'next/link';
import Sidebar from '@/components/Sidebar';
import { knowledgeList, categories } from '@/data';
import { getDifficultyColor, getDifficultyText, getDifficultyEmoji } from '@/utils/difficulty';

const { Content } = Layout;
const { Title, Text } = Typography;
const { Search } = Input;

export default function HomePage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredItems = useMemo(() => {
    return knowledgeList.filter(item => {
      const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          item.content.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <Layout>
      <Sidebar />
      <Layout style={{ marginLeft: 300 }}>
        <Content style={{ minHeight: '100vh', padding: '32px', background: 'var(--color-background)' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto' }}>
            {/* 搜索和筛选区域 */}
            <Card
              className="search-card"
              style={{
                marginBottom: '18px',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                border: '1px solid var(--color-border)',
                position: 'sticky',
                top: 0,
                backgroundColor: 'var(--color-card-bg)',
                zIndex: 99
              }}
              hoverable={false}
            >
              <Space orientation="vertical" style={{ width: '100%' }} size="small">
                <Search
                  placeholder="搜索知识点、关键词..."
                  prefix={<SearchOutlined style={{ color: '#6366f1' }} />}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  style={{ 
                    width: '100%',
                    borderRadius: '10px',
                    height: '36px',
                    fontSize: '13px',
                    border: '0px',
                    boxShadow: 'none'
                  }}
                  size="small"
                />
                <div className="flex flex-wrap gap-1.5">
                  <Button 
                    type={selectedCategory === 'all' ? 'primary' : 'default'}
                    onClick={() => setSelectedCategory('all')}
                    size="small"
                    style={{ 
                      borderRadius: '8px',
                      height: '32px',
                      fontWeight: 500
                    }}
                  >
                    全部
                  </Button>
                  {categories.map(category => (
                    <Button
                      key={category.id}
                      type={selectedCategory === category.id ? 'primary' : 'default'}
                      onClick={() => setSelectedCategory(category.id)}
                      size="small"
                      style={{ 
                        borderRadius: '8px',
                        height: '32px',
                        fontWeight: 500
                      }}
                    >
                      {category.icon} {category.name}
                    </Button>
                  ))}
                </div>
              </Space>
            </Card>

            {/* 结果统计 */}
            <div className="mb-3 flex items-center justify-between">
              <Text strong className="result-count-text" style={{ fontSize: '13px' }}>
                找到 <span className="result-count-highlight">{filteredItems.length}</span> 个知识点
              </Text>
              {filteredItems.length > 0 && (
                <Text className="result-info-text" style={{ fontSize: '12px' }}>
                  {selectedCategory === 'all' ? '所有分类' : `当前分类: ${categories.find(c => c.id === selectedCategory)?.name}`}
                </Text>
              )}
            </div>

            {/* 知识点列表 */}
            {filteredItems.length === 0 ? (
              <Card style={{ borderRadius: '16px', textAlign: 'center', padding: '60px 24px' }} hoverable={false}>
                <Empty
                  image={Empty.PRESENTED_IMAGE_SIMPLE}
                  description={
                    <div>
                      <Text style={{ fontSize: '18px', color: 'var(--color-text-secondary)', display: 'block', marginBottom: '12px' }}>
                        没有找到匹配的知识点
                      </Text>
                      <Text style={{ color: 'var(--color-text-muted)' }}>
                        尝试调整搜索关键词或选择其他分类
                      </Text>
                    </div>
                  }
                />
              </Card>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredItems.map((item) => (
                  <Card 
                    key={item.id} 
                    hoverable
                    style={{ 
                      borderRadius: '16px',
                      overflow: 'hidden',
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                      border: '1px solid #e2e8f0',
                      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
                    }}
                    styles={{ body: { padding: '20px' } }}
                    className="knowledge-card"
                  >
                    <Link href={`/${item.category}/${item.id}`}>
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <span className="text-2xl">{getDifficultyEmoji(item.difficulty)}</span>
                          <Tag color={getDifficultyColor(item.difficulty)} style={{ borderRadius: '6px', fontWeight: 500 }}>
                            {getDifficultyText(item.difficulty)}
                          </Tag>
                        </div>
                        <BookOutlined style={{ color: '#6366f1', fontSize: '20px' }} />
                      </div>
                      
                      <Title level={5} style={{ marginBottom: '12px', fontSize: '16px', lineHeight: '1.4' }}>
                        {item.title}
                      </Title>
                      
                      <Text 
                        style={{ 
                          color: 'var(--color-text-secondary)', 
                          fontSize: '14px', 
                          lineHeight: '1.6',
                          display: '-webkit-box',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: 'vertical'
                        }}
                      >
                        {item.content.substring(0, 120)}...
                      </Text>
                      
                      <div className="flex flex-wrap gap-2">
                        {item.tags.slice(0, 3).map(tag => (
                          <Tag 
                            key={tag} 
                            color="blue" 
                            className="knowledge-tag knowledge-tag-blue"
                            style={{ 
                              borderRadius: '6px', 
                              fontSize: '12px'
                            }}
                          >
                            {tag}
                          </Tag>
                        ))}
                        {item.tags.length > 3 && (
                          <Tag className="knowledge-tag" style={{ borderRadius: '6px', fontSize: '12px' }}>
                            +{item.tags.length - 3}
                          </Tag>
                        )}
                      </div>
                    </Link>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </Content>
      </Layout>
    </Layout>
  );
}
