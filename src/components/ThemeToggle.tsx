'use client';

import { useState, useEffect } from 'react';
import { Button } from 'antd';
import { SunOutlined, MoonOutlined } from '@ant-design/icons';

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);
  const [hasHydrated, setHasHydrated] = useState(false);

  useEffect(() => {
    // 客户端 hydration 完成后设置状态，使用微任务避免同步调用setState
    Promise.resolve().then(() => {
      const savedTheme = localStorage.getItem('theme');
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      const initialIsDark = savedTheme ? savedTheme === 'dark' : prefersDark;
      
      setIsDark(initialIsDark);
      setHasHydrated(true);
      
      // 应用主题到HTML元素
      if (initialIsDark) {
        document.documentElement.setAttribute('data-theme', 'dark');
      } else {
        document.documentElement.removeAttribute('data-theme');
      }
    });
  }, []);

  const toggleTheme = () => {
    setIsDark(prev => {
      const newIsDark = !prev;
      // 更新HTML属性和本地存储
      if (newIsDark) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.removeAttribute('data-theme');
        localStorage.setItem('theme', 'light');
      }
      return newIsDark;
    });
  };

  // 使用一个默认值进行服务端渲染，避免水合错误
  if (!hasHydrated) {
    return (
      <Button
        type="text"
        icon={<MoonOutlined />}
        style={{
          position: 'absolute',
          top: '-10px',
          right: '0px',
          zIndex: 1001,
          background: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(0, 0, 0, 0.6)',
          color: '#1e293b',
        }}
        className="theme-toggle-button"
        aria-label="切换主题"
      />
    );
  }

  return (
    <Button
      type="text"
      icon={isDark ? <SunOutlined /> : <MoonOutlined />}
      onClick={toggleTheme}
      style={{
        position: 'absolute',
        top: '-10px',
        right: '0px',
        zIndex: 1001,
        background: 'rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(0, 0, 0, 0.6)',
        color: isDark ? '#f1f5f9' : '#1e293b',
      }}
      className="theme-toggle-button"
      aria-label="切换主题"
    />
  );
}
