'use client';

import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import styles from './navBar.module.css';

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const stored = localStorage.getItem('theme');
    if (stored) {
      setTheme(stored);
    }
  }, []);

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <>
      <nav className={styles.nav}>

        <div className={styles.left}>
          <img src="/images/logo.svg" alt="Logo" className={styles.logo} />
          <span className={styles.brand}>
            <strong>Antonella</strong><span className={styles.dot}>.</span>
          </span>
        </div>

        <div className={styles.center}>
          <a href="#home" className={styles.link}>Home</a>
          <a href="#about" className={styles.link}>About</a>
          <a href="#projects" className={styles.link}>Projects</a>
        </div>

      <div className={styles.right}>
        <button className={styles.iconButton} onClick={toggleTheme}>
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
        <select className={styles.languageSelect}>
          <option>EN</option>
          <option>ES</option>
        </select>
        <button className={styles.contactButton}>Contact</button>
      </div>

        <button onClick={() => setOpen(true)} className={`${styles.iconBtn} ${styles['mobileOnly']}`}>
          <Menu color="black" size={28} />
        </button>
      </nav>

      {open && (
        <div className={styles.sidebar}>
          <div className={styles.sidebarHeader}>
            <h2 className={styles.logo}>Antonella.</h2>
            <button onClick={() => setOpen(false)} className={styles.iconBtn}>
              <X color="black" size={28} />
            </button>
          </div>
          <a href="#home" className={styles.link}>Home</a>
          <a href="#about" className={styles.link}>About</a>
          <a href="#projects" className={styles.link}>Projects</a>
        </div>
      )}
    </>
  );
}