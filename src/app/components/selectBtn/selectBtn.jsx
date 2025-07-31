'use client';

import { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import styles from './selectBtn.module.css';

const LANGUAGES = [
  { code: 'en', label: 'English', flag: '🇺🇸' },
  { code: 'es', label: 'Español', flag: '🇪🇸' },
];

export default function LanguageSelect() {
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState('en');
  const dropdownRef = useRef(null);

  const toggleDropdown = () => setIsOpen(prev => !prev);

  const handleSelect = (lang) => {
    setLanguage(lang);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const currentLang = LANGUAGES.find(l => l.code === language);

  return (
    <div className={styles.container} ref={dropdownRef}>
      <button onClick={toggleDropdown} className={styles.button}>
        <span className={styles.flag}>{currentLang.flag}</span>
        {currentLang.code.toUpperCase()}
        <ChevronDown size={16} className={styles.icon} />
      </button>
      {isOpen && (
        <ul className={styles.dropdown}>
          {LANGUAGES.map(({ code, label, flag }) => (
            <li key={code} onClick={() => handleSelect(code)}>
              <span className={styles.flag}>{flag}</span>
              {label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
