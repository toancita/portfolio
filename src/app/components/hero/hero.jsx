'use client';

import styles from './hero.module.css';
import { Github, Linkedin } from 'lucide-react';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          <span>Hello!, I'm</span>
          <span className={`textHighlight ${styles.highlight}`}> Antonella</span>
          <br/> <span className={styles.role}>Front-end Developer</span>
        </h1>

        <p className={styles.description}>
          Passionate about creating fun, pretty, and accessible digital experiences.
        </p>

        <div className={styles.actions}>
          <a href="/cv_Antonella.pdf" className={styles.downloadBtn} download>
            <span>Download CV</span>
          </a>
          <div className={styles.socialLinks}>
            <a href="https://github.com/toancita" target="_blank">
            <Github size={32} />
            </a>
            <a href="https://linkedin.com/in/antonellamanzanares" target="_blank">
            <Linkedin size={32} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

