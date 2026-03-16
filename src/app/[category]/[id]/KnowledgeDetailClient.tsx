"use client";

import { useRouter } from 'next/navigation';
import { Layout, Card, Tag, Typography, Button, Breadcrumb } from 'antd';
import { ArrowLeftOutlined, BookOutlined, TagOutlined, FieldTimeOutlined } from '@ant-design/icons';
import Sidebar from '@/components/Sidebar';
import { knowledgeList, categories } from '@/data';
import { getDifficultyColor, getDifficultyText, getDifficultyEmoji } from '@/utils/difficulty';

const { Content } = Layout;
const { Title, Text } = Typography;

interface KnowledgeDetailClientProps {
  categoryId: string;
  itemId: string;
}

export default function KnowledgeDetailClient({ categoryId, itemId }: KnowledgeDetailClientProps) {
  const router = useRouter();
  
  const item = knowledgeList.find((k) => k.id === itemId);

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
      if (line.startsWith('```')) {
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
          <Title key={index} level={3} style={{ marginTop: '24px', marginBottom: '12px', color: 'var(--foreground)', fontWeight: '600' }}>
            {line.slice(4)}
          </Title>
        );
      } else if (line.startsWith('#### ')) {
        elements.push(
          <Title key={index} level={4} style={{ marginTop: '20px', marginBottom: '8px', color: 'var(--foreground)', fontWeight: '600' }}>
            {line.slice(5)}
          </Title>
        );
      } else if (line.startsWith('- ')) {
        elements.push(
          <div key={index} className="mb-2" style={{ color: 'var(--foreground)', lineHeight: '1.8' }}>
            <span style={{ marginRight: '8px' }}>•</span>
            <span dangerouslySetInnerHTML={{ __html: processInlineFormatting(line.slice(2)) }} />
          </div>
        );
      } else if (line.match(/^\d+\. /)) {
        const match = line.match(/^(\d+)\. (.+)$/);
        if (match) {
          elements.push(
            <div key={index} className="mb-2" style={{ color: 'var(--foreground)', lineHeight: '1.8' }}>
              <span style={{ marginRight: '8px', fontWeight: '600' }}>{match[1]}.</span>
              <span dangerouslySetInnerHTML={{ __html: processInlineFormatting(match[2]) }} />
            </div>
          );
        }
      } else {
        elements.push(
          <p key={index} className="mb-4" style={{ color: 'var(--foreground)', lineHeight: '1.8' }}>
            <span dangerouslySetInnerHTML={{ __html: processInlineFormatting(line) }} />
          </p>
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
          <Content
            style={{
              minHeight: '100vh',
              padding: '32px',
              background: 'var(--color-background)',
            }}
          >
            <Card style={{ borderRadius: '16px', textAlign: 'center', padding: '60px 24px' }}>
              <Text type="secondary" style={{ fontSize: '18px' }}>知识点不存在</Text>
            </Card>
          </Content>
        </Layout>
      </Layout>
    );
  }

  const category = categories.find((c) => c.id === categoryId);

  return (
    <Layout>
      <Sidebar />
      <Layout style={{ marginLeft: 300 }}>
        <header
          style={{
            height: '64px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0 32px',
            background: 'var(--color-card-bg)',
            borderBottom: '1px solid var(--border-color)',
            position: 'sticky',
            top: 0,
            zIndex: 99,
          }}
        >
          <div className="flex items-center gap-4">
            <Button
              type="link"
              onClick={() => router.back()}
              icon={<ArrowLeftOutlined />}
              style={{
                paddingLeft: 0,
                color: 'var(--foreground)',
              }}
            >
              返回
            </Button>
            <Breadcrumb
              items={[
                { title: <BookOutlined /> },
                { title: category?.name || categoryId },
                { title: item.title },
              ]}
            />
          </div>
        </header>

        <Content
          style={{
            minHeight: 'calc(100vh - 64px)',
            padding: '32px',
            background: 'var(--color-background)',
          }}
        >
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            {/* 标题卡片 */}
            <Card
              style={{
                borderRadius: '16px',
                border: '1px solid var(--border-color)',
                boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
                background: 'var(--card-bg)',
                marginBottom: '30px',
              }}
              styles={{ body: { padding: '40px' } }}
            >
              <Title level={1} style={{ 
                marginBottom: '16px', 
                color: 'var(--foreground)',
                fontWeight: '700',
                fontSize: '32px',
                lineHeight: '1.4'
              }}>
                {item.title}
              </Title>

              <div className="flex flex-wrap gap-3 mt-6">
                <Tag
                  color={getDifficultyColor(item.difficulty)}
                  className="knowledge-tag"
                  style={{ 
                    borderRadius: '6px', 
                    fontSize: '13px',
                    padding: '4px 12px'
                  }}
                >
                  {getDifficultyText(item.difficulty)} {getDifficultyEmoji(item.difficulty)}
                </Tag>
                <Tag
                  color="purple"
                  style={{ 
                    borderRadius: '6px', 
                    fontSize: '13px',
                    padding: '4px 12px'
                  }}
                >
                  <BookOutlined style={{ marginRight: '4px' }} />
                  {category?.name || categoryId}
                </Tag>
              </div>

              <div className="flex items-center gap-4 mb-4" style={{ marginTop: '24px' }}>
                <div className="flex items-center gap-1">
                  <TagOutlined style={{ color: 'rgba(255,255,255,0.8)', fontSize: '14px' }} />
                  <Text style={{ color: 'rgba(255,255,255,0.9)', fontSize: '13px' }}>
                    {item.tags.length} 个标签
                  </Text>
                </div>
                <div className="flex items-center gap-1">
                  <FieldTimeOutlined style={{ color: 'rgba(255,255,255,0.8)', fontSize: '14px' }} />
                  <Text style={{ color: 'rgba(255,255,255,0.9)', fontSize: '13px' }}>
                    预计阅读时间：{Math.ceil(item.content.length / 500)} 分钟
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
                borderRadius: '16px',
                border: '1px solid var(--border-color)',
                boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
                background: 'var(--card-bg)',
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
