import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '前端知识宝典 - Senior Frontend Knowledge Guide',
  description: '资深前端开发知识点集合，包含 React、Vue、TypeScript、性能优化、安全、工程化等内容',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
