"use client";

import { Layout, Card, Typography, Tag, Button, Empty } from "antd";
import {
  ArrowLeftOutlined,
  BookOutlined,
  FolderOutlined,
  TagOutlined,
} from "@ant-design/icons";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Sidebar from "@/components/Sidebar";
import { knowledgeList, categories } from "@/data";
import { getDifficultyColor, getDifficultyText, getDifficultyEmoji } from '@/utils/difficulty';

const { Content } = Layout;
const { Title, Text } = Typography;

interface CategoryClientProps {
  categoryId: string;
}

export default function CategoryClient({ categoryId }: CategoryClientProps) {
  const router = useRouter();
  const category = categories.find((c) => c.id === categoryId);
  const categoryItems = knowledgeList.filter(
    (item) => item.category === categoryId
  );

  if (!category) {
    return (
      <Layout>
        <Sidebar />
        <Layout style={{ marginLeft: 300 }}>
          <Content
            style={{
              minHeight: "100vh",
              padding: "32px",
              background: "var(--color-background)",
            }}
          >
            <Card
              style={{
                borderRadius: "16px",
                textAlign: "center",
                padding: "60px 24px",
              }}
            >
              <Empty
                image={Empty.PRESENTED_IMAGE_SIMPLE}
                description={
                  <div>
                    <Text
                      type="secondary"
                      style={{ fontSize: "18px" }}
                    >
                      分类不存在
                    </Text>
                  </div>
                }
              />
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
        <header
          style={{
            height: "64px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 32px",
            background: "var(--color-card-bg)",
            borderBottom: "1px solid var(--border-color)",
            position: "sticky",
            top: 0,
            zIndex: 99,
          }}
        >
          <Button
            type="link"
            onClick={() => router.push("/")}
            icon={<ArrowLeftOutlined />}
            style={{ paddingLeft: 0 }}
          >
            返回首页
          </Button>
        </header>

        <Content
          style={{
            minHeight: "calc(100vh - 64px)",
            padding: "32px",
            background: "var(--color-background)",
          }}
        >
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            {/* 分类标题卡片 */}
            <Card
              style={{
                borderRadius: "16px",
                border: "1px solid var(--border-color)",
                boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
                background: "var(--card-bg)",
                marginBottom: "30px",
              }}
              styles={{ body: { padding: "40px" } }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div
                  style={{
                    width: "64px",
                    height: "64px",
                    borderRadius: "16px",
                    background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    fontSize: "28px",
                  }}
                >
                  <FolderOutlined />
                </div>
                <div>
                  <Title level={2} style={{ margin: 0, color: "var(--foreground)" }}>
                    {category.name}
                  </Title>
                  <Text type="secondary" style={{ fontSize: "14px" }}>
                    {category.description}
                  </Text>
                </div>
              </div>

              <div className="flex items-center gap-4 mt-6">
                <Tag
                  color="blue"
                  style={{ borderRadius: "6px", fontSize: "13px", padding: "4px 12px" }}
                >
                  <BookOutlined style={{ marginRight: "4px" }} />
                  {categoryItems.length} 个知识点
                </Tag>
              </div>
            </Card>

            {/* 知识点列表 */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categoryItems.map((item) => (
                <Link key={item.id} href={`/${categoryId}/${item.id}`}>
                  <Card
                    hoverable
                    className="knowledge-card"
                    style={{
                      borderRadius: "16px",
                      border: "1px solid var(--border-color)",
                      boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
                      background: "var(--card-bg)",
                      height: "100%",
                      transition: "transform 0.2s, box-shadow 0.2s",
                    }}
                    styles={{ body: { padding: "24px" } }}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <Title
                        level={5}
                        style={{
                          margin: 0,
                          color: "var(--foreground)",
                          fontWeight: "600",
                          fontSize: "16px",
                          lineHeight: "1.5",
                        }}
                      >
                        {item.title}
                      </Title>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-3">
                      <Tag
                        color={getDifficultyColor(item.difficulty)}
                        className="knowledge-tag"
                        style={{ borderRadius: "6px", fontSize: "12px", padding: "2px 8px" }}
                      >
                        {getDifficultyEmoji(item.difficulty)} {getDifficultyText(item.difficulty)}
                      </Tag>
                      {item.tags.slice(0, 2).map((tag) => (
                        <Tag
                          key={tag}
                          color="blue"
                          className="knowledge-tag knowledge-tag-blue"
                          style={{ borderRadius: "6px", fontSize: "12px", padding: "2px 8px" }}
                        >
                          <TagOutlined style={{ marginRight: "3px", fontSize: "10px" }} />
                          {tag}
                        </Tag>
                      ))}
                    </div>

                    <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
                      <Text type="secondary" style={{ fontSize: "12px" }}>
                        预计阅读：{Math.ceil(item.content.length / 500)} 分钟
                      </Text>
                      <span
                        style={{
                          color: "var(--color-primary)",
                          fontSize: "13px",
                          fontWeight: "500",
                        }}
                      >
                        查看详情 →
                      </span>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
}
