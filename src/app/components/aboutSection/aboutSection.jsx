'use client';

import styles from './about.module.css';
import Image from 'next/image';

export default function AboutSection() {
  return (
      <section className={styles.about}>
        <div className={styles.leftContent}>
          <h1 className={styles.title}>About <span className={`textHighlight ${styles.highlight}`}>myself</span> </h1>
          <p>Hello there! I'm <strong>Antonella Manzanares</strong>, a passionate and skilled
            <strong> JavaScript developer specializing in building web applications.</strong>
          <br/> <br/>I love powerlifting, playing videogames and the pure joy of silly cats.</p>
        </div>

        <div className={styles.rightContent}>
          <div className={styles.square}>
            <Image 
            src='/images/monita.png'
            alt="Avatar dibujado"
            width={353}
            height={469.95}
            />
          </div>
        </div>
      </section>
  );
}