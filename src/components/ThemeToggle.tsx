'use client';

import { useState, useEffect, useSyncExternalStore } from 'react';
import { Button } from 'antd';
import { SunOutlined, MoonOutlined } from '@ant-design/icons';

const THEME_KEY = 'theme';

function subscribe(callback: () => void) {
  window.addEventListener('storage', callback);
  return () => window.removeEventListener('storage', callback);
}

function getSnapshot() {
  if (typeof window === 'undefined') return false;
  const savedTheme = localStorage.getItem(THEME_KEY);
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  return savedTheme ? savedTheme === 'dark' : prefersDark;
}

export default function ThemeToggle() {
  const isDark = useSyncExternalStore(subscribe, getSnapshot, () => false);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  const toggleTheme = () => {
    const newIsDark = !isDark;
    document.documentElement.setAttribute('data-theme', newIsDark ? 'dark' : 'light');
    localStorage.setItem(THEME_KEY, newIsDark ? 'dark' : 'light');
    window.dispatchEvent(new Event('storage'));
  };

  return (
    <Button
      type="text"
      icon={isDark ? <SunOutlined /> : <MoonOutlined />}
      onClick={toggleTheme}
      className="theme-toggle-button"
      aria-label="切换主题"
    />
  );
}
