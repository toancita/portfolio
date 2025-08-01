'use client';

import styles from './footer.module.css';
import { Github, Linkedin, Mail, Download } from 'lucide-react';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.subtitle}>Do you like what you see?</p>
      <h2 className={styles.title}>Let’s start</h2>

      <div className={styles.icons}>
        <a href="https://github.com/toancita" target="_blank" rel="noopener noreferrer">
          <div className={styles.iconCircle}>
            <Github size={28} strokeWidth={2} />
          </div>
        </a>
        <a href="https://linkedin.com/in/antonellamanzanares" target="_blank" rel="noopener noreferrer">
          <div className={styles.iconCircle}>
            <Linkedin size={28} strokeWidth={2} />
          </div>
        </a>
        <a href="antomartinamanzanares@gmail.com">
          <div className={styles.iconCircle}>
            <Mail size={28} strokeWidth={2} />
          </div>
        </a>
        <a href="/CV_Antonella.pdf" download>
          <div className={styles.iconCircle}>
            <Download size={28} strokeWidth={2} />
          </div>
        </a>
      </div>

      <hr className={styles.separator} />
      <p className={styles.bottomText}>
        © 2025 Antonella | <a href="/privacy" className={styles.privacyLink}>Privacy Policy</a>
      </p>
    </footer>
  );
}
