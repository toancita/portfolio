'use client';

import { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';
import styles from './themeToggle.module.css';

export function ThemeToggle({ className = '' }) {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme') || 'light';
    setIsDark(storedTheme === 'dark');
    document.body.className = storedTheme;
  }, []);

  const toggleTheme = () => {
    const newTheme = isDark ? 'light' : 'dark';
    setIsDark(!isDark);
    document.body.className = newTheme;
    localStorage.setItem('theme', newTheme);
  };

  return (
    <button
      onClick={toggleTheme}
      className={`${styles.toggle} ${isDark ? styles.dark : styles.light} ${className}`}
      aria-label="Toggle theme"
    >
      <Moon className={styles.icon} />
      <Sun className={styles.icon} />
      <div className={styles.thumb} />
    </button>
  );
}
