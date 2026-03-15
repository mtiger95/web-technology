"use client";

import { Layout, Card, Typography, Tag, Button, Empty } from "antd";
import {
  ArrowLeftOutlined,
  BookOutlined,
  FolderOutlined,
} from "@ant-design/icons";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Sidebar from "@/components/Sidebar";
import ThemeToggle from "@/components/ThemeToggle";
import { knowledgeList, categories } from "@/data";
import { getDifficultyColor, getDifficultyText, getDifficultyEmoji } from '@/utils/difficulty';

const { Content } = Layout;
const { Title, Text } = Typography;

export default function CategoryPage({ params }: { params: { category: string } }) {
  const router = useRouter();
  const categoryId = params.category;
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
                      style={{
                        fontSize: "18px",
                        color: "var(--color-text-secondary)",
                        display: "block",
                        marginBottom: "12px",
                      }}
                    >
                      分类不存在
                    </Text>
                    <Text style={{ color: "var(--color-text-muted)" }}>请选择有效的分类</Text>
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
        <Content
          style={{ minHeight: "100vh", padding: "32px", background: "var(--color-background)" }}
        >
          <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative" }}>
            <ThemeToggle />
            {/* 分类头部 */}
            <Card
              style={{
                marginBottom: "18px",
                borderRadius: "16px",
                background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
                border: "none",
                color: "#fff",
              }}
              styles={{ body: { padding: "32px" } }}
            >
              <div className="flex items-center justify-between">
                <div>
                  <Button
                    type="text"
                    icon={<ArrowLeftOutlined />}
                    onClick={() => router.back()}
                    style={{
                      color: "#fff",
                      marginBottom: "16px",
                      background: "rgba(255,255,255,0.1)",
                      borderRadius: "8px",
                    }}
                  >
                    返回首页
                  </Button>
                  <div className="flex items-center gap-4 mb-2">
                    <span className="text-5xl">{category.icon}</span>
                    <Title
                      level={1}
                      style={{ color: "#fff", margin: 0, fontSize: "36px" }}
                    >
                      {category.name}
                    </Title>
                  </div>
                  <Text
                    style={{ color: "rgba(255,255,255,0.9)", fontSize: "16px" }}
                  >
                    {category.description}
                  </Text>
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-2 mb-2">
                    <FolderOutlined
                      style={{
                        fontSize: "32px",
                        color: "rgba(255,255,255,0.8)",
                      }}
                    />
                    <span
                      style={{
                        fontSize: "48px",
                        fontWeight: "bold",
                        color: "#fff",
                      }}
                    >
                      {categoryItems.length}
                    </span>
                  </div>
                  <Text
                    style={{ color: "rgba(255,255,255,0.8)", fontSize: "14px" }}
                  >
                    个知识点
                  </Text>
                </div>
              </div>
            </Card>

            {/* 知识点列表 */}
            {categoryItems.length === 0 ? (
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
                        style={{
                          fontSize: "18px",
                          color: "var(--color-text-secondary)",
                          display: "block",
                          marginBottom: "12px",
                        }}
                      >
                        该分类暂无知识点
                      </Text>
                      <Text style={{ color: "var(--color-text-muted)" }}>敬请期待更多内容</Text>
                    </div>
                  }
                />
              </Card>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categoryItems.map((item) => (
                  <Card
                    key={item.id}
                    style={{
                      borderRadius: "16px",
                      overflow: "hidden",
                      transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                      border: "1px solid #e2e8f0",
                      boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
                    }}
                    styles={{ body: { padding: "20px" } }}
                    className="knowledge-card"
                  >
                    <Link href={`/${item.category}/${item.id}`}>
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <span className="text-2xl">
                            {getDifficultyEmoji(item.difficulty)}
                          </span>
                          <Tag
                            color={getDifficultyColor(item.difficulty)}
                            style={{ borderRadius: "6px", fontWeight: 500 }}
                          >
                            {getDifficultyText(item.difficulty)}
                          </Tag>
                        </div>
                        <BookOutlined
                          style={{ color: "#6366f1", fontSize: "20px" }}
                        />
                      </div>

                      <Title
                        level={5}
                        style={{
                          marginBottom: "12px",
                          fontSize: "16px",
                          lineHeight: "1.4",
                        }}
                      >
                        {item.title}
                      </Title>

                      <Text
                        style={{
                          color: "var(--color-text-secondary)",
                          fontSize: "14px",
                          lineHeight: "1.6",
                          display: "-webkit-box",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: "vertical",
                        }}
                      >
                        {item.content.substring(0, 120)}...
                      </Text>

                      <div className="flex flex-wrap gap-2">
                        {item.tags.slice(0, 3).map((tag) => (
                          <Tag
                            key={tag}
                            color="blue"
                            className="knowledge-tag knowledge-tag-blue"
                            style={{
                              borderRadius: "6px",
                              fontSize: "12px",
                            }}
                          >
                            {tag}
                          </Tag>
                        ))}
                        {item.tags.length > 3 && (
                          <Tag
                            className="knowledge-tag"
                            style={{
                              borderRadius: "6px",
                              fontSize: "12px",
                            }}
                          >
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
