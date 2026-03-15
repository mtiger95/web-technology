"use client";

import { useRouter } from 'next/navigation';
import { Layout, Card, Tag, Typography, Button, Breadcrumb } from 'antd';
import { ArrowLeftOutlined, BookOutlined, TagOutlined, FieldTimeOutlined } from '@ant-design/icons';
import Sidebar from '@/components/Sidebar';
import ThemeToggle from '@/components/ThemeToggle';
import { knowledgeList, categories } from '@/data';
import { getDifficultyColor, getDifficultyText, getDifficultyEmoji } from '@/utils/difficulty';

const { Content } = Layout;
const { Title, Text } = Typography;

export default function KnowledgeDetailPage({ params }: { params: { category: string; id: string } }) {
  const router = useRouter();
  const categoryId = params.category;

  const item = knowledgeList.find((k) => k.id === params.id);

  const renderMarkdown = (content: string) => {
    const lines = content.split('\n');
    const elements: React.ReactNode[] = [];
    let inCodeBlock = false;
    let codeLanguage = '';
    let codeContent: string[] = [];

    const processInlineFormatting = (text: string) => {
      // 处理加粗文本 **text**
      let processed = text.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
      // 处理斜体文本 *text*
      processed = processed.replace(/\*([^*]+)\*/g, '<em>$1</em>');
      return processed;
    };

    lines.forEach((line, index) => {
      if (line.startsWith('\`\`\`')) {
        if (inCodeBlock) {
          elements.push(
            <div key={index} className="my-6">
              <div style={{ 
                backgroundColor: '#1e293b !important', 
                color: '#cbd5e1 !important', 
                padding: '0.5rem 1rem', 
                fontSize: '0.875rem', 
                borderRadius: '0.5rem 0.5rem 0 0', 
                borderBottom: '1px solid #334155 !important', 
                display: 'flex', 
                justifyContent: 'space-between',
                fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Monaco, Consolas, "Liberation Mono", "Courier New", monospace'
              }}>
                <span style={{ color: '#cbd5e1 !important' }}>{codeLanguage || 'code'}</span>
                <span style={{ color: '#64748b !important', fontSize: '0.75rem' }}>Code</span>
              </div>
              <pre style={{ 
                backgroundColor: '#0f172a !important', 
                color: '#e2e8f0 !important', 
                padding: '1rem', 
                borderRadius: '0 0 0.5rem 0.5rem', 
                overflowX: 'auto', 
                fontSize: '0.875rem',
                fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
                margin: 0,
                border: '1px solid #334155 !important'
              }}>
                <code style={{ 
                  backgroundColor: 'transparent !important', 
                  color: '#e2e8f0 !important',
                  padding: 0,
                  fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Monaco, Consolas, "Liberation Mono", "Courier New", monospace'
                }}>{codeContent.join('\n')}</code>
              </pre>
            </div>
          );
          inCodeBlock = false;
          codeLanguage = '';
          codeContent = [];
        } else {
          inCodeBlock = true;
          codeLanguage = line.slice(3).trim();
        }
        return;
      }

      if (inCodeBlock) {
        codeContent.push(line);
        return;
      }

      if (line.trim() === '') {
        // elements.push(<p key={index} className="mb-4">&nbsp;</p>);
        return;
      }

      if (line.startsWith('## ')) {
        elements.push(
          <Title key={index} level={2} style={{ marginTop: '32px', marginBottom: '16px', color: 'var(--foreground)', fontWeight: '700' }}>
            {line.slice(3)}
          </Title>
        );
      } else if (line.startsWith('### ')) {
        elements.push(
          <Title key={index} level={3} style={{ marginTop: '24px', marginBottom: '12px', color: 'var(--foreground)', fontWeight: '700' }}>
            {line.slice(4)}
          </Title>
        );
      } else if (line.startsWith('#### ')) {
        elements.push(
          <Title key={index} level={4} style={{ marginTop: '20px', marginBottom: '10px', color: 'var(--foreground)', fontWeight: '700' }}>
            {line.slice(5)}
          </Title>
        );
      } else if (line.startsWith('- ')) {
        elements.push(
          <li key={index} className="ml-6 mb-3 text-gray-700 leading-relaxed" style={{ color: 'var(--foreground)' }}>
            <span dangerouslySetInnerHTML={{ __html: processInlineFormatting(line.slice(2)) }} />
          </li>
        );
      } else if (line.match(/^\d+\.\s/)) {
        elements.push(
          <li key={index} className="ml-6 mb-3 text-gray-700 leading-relaxed list-decimal" style={{ color: 'var(--foreground)' }}>
            <span dangerouslySetInnerHTML={{ __html: processInlineFormatting(line.replace(/^\d+\.\s/, '')) }} />
          </li>
        );
      } else {
        elements.push(
          <p key={index} className="mb-4 text-gray-700 leading-relaxed" style={{ color: 'var(--foreground)' }} dangerouslySetInnerHTML={{ __html: processInlineFormatting(line) }} />
        );
      }
    });

    return elements;
  };

  if (!item) {
    return (
      <Layout>
        <Sidebar />
        <Layout style={{ marginLeft: 300 }}>
          <Content style={{ minHeight: '100vh', padding: '32px', background: 'var(--color-background)' }}>
            <Card style={{ borderRadius: '16px', textAlign: 'center', padding: '60px 24px' }}>
              <Text type="secondary" style={{ fontSize: '18px' }}>知识点不存在</Text>
            </Card>
          </Content>
        </Layout>
      </Layout>
    );
  }

  return (
    <Layout>
      <Sidebar />
      <Layout style={{ marginLeft: 300 }}>
        <Content style={{ minHeight: '100vh', padding: '32px', background: 'var(--color-background)' }}>
          <div style={{ maxWidth: 900, margin: '0 auto', position: 'relative' }}>
            <ThemeToggle />
            {/* 面包屑导航 */}
            <Breadcrumb 
              style={{ marginBottom: '24px' }}
              items={[
                {
                  title: (
                    <Button type="link" onClick={() => router.push('/')} style={{ padding: 0, height: 'auto' }}>
                      首页
                    </Button>
                  )
                },
                {
                  title: (
                    <Button type="link" onClick={() => router.push(`/${categoryId}`)} style={{ padding: 0, height: 'auto' }}>
                      {categoryId}
                    </Button>
                  )
                },
                {
                  title: item.title
                }
              ]}
            />

            {/* 知识点头部 */}
            <Card 
              className="mb-6" 
              style={{ 
                borderRadius: '16px',
                background: 'var(--gradient-primary)',
                border: 'none',
                color: 'white'
              }}
              styles={{ body: { padding: '24px' } }}
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-2">
                  <span className="text-4xl">{getDifficultyEmoji(item.difficulty)}</span>
                  <div>
                    <Tag 
                      color={getDifficultyColor(item.difficulty)} 
                      style={{ 
                        borderRadius: '6px', 
                        fontWeight: '600',
                        fontSize: '13px',
                        padding: '3px 12px',
                        background: 'rgba(255,255,255,0.2)',
                        border: '1px solid rgba(255,255,255,0.3)'
                      }}
                    >
                      {getDifficultyText(item.difficulty)}
                    </Tag>
                  </div>
                </div>
                <Button 
                  type="text" 
                  icon={<ArrowLeftOutlined />} 
                  onClick={() => router.back()}
                  size="small"
                  style={{ 
                    color: '#fff', 
                    background: 'rgba(255,255,255,0.1)',
                    borderRadius: '6px',
                    border: '1px solid rgba(255,255,255,0.2)',
                    height: '32px'
                  }}
                >
                  返回
                </Button>
              </div>
              
              <Title level={1} style={{ color: '#fff', marginBottom: '12px', fontSize: '28px' }}>
                {item.title}
              </Title>
              
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-1">
                  <BookOutlined style={{ color: 'rgba(255,255,255,0.8)', fontSize: '14px' }} />
                  <Text style={{ color: 'rgba(255,255,255,0.9)', fontSize: '13px' }}>
                    {item.tags.length} 个标签
                  </Text>
                </div>
                <div className="flex items-center gap-1">
                  <FieldTimeOutlined style={{ color: 'rgba(255,255,255,0.8)', fontSize: '14px' }} />
                  <Text style={{ color: 'rgba(255,255,255,0.9)', fontSize: '13px' }}>
                    预计阅读时间: {Math.ceil(item.content.length / 500)} 分钟
                  </Text>
                </div>
              </div>

              <div className="flex flex-wrap gap-1.5">
                {item.tags.map((tag) => (
                  <Tag 
                    key={tag} 
                    color="blue" 
                    className="knowledge-tag knowledge-tag-blue"
                    style={{ 
                      borderRadius: '6px', 
                      fontSize: '12px',
                      padding: '3px 10px'
                    }}
                  >
                    <TagOutlined style={{ marginRight: '3px', fontSize: '10px' }} />
                    {tag}
                  </Tag>
                ))}
              </div>
            </Card>

            {/* 知识点内容 */}
            <Card 
              className="knowledge-content-card"
              style={{ 
                marginTop: '30px',
                borderRadius: '16px',
                border: '1px solid var(--border-color)',
                boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
                background: 'var(--card-bg)'
              }}
              styles={{ body: { padding: '0px 40px 32px', background: 'var(--card-bg)' } }}
            >
              <div className="markdown-content">
                {renderMarkdown(item.content)}
              </div>
            </Card>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
}
