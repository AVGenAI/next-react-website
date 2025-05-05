import React from 'react';
import styles from './Hero.module.css';

export function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1>Welcome to Our Next.js React Website</h1>
        <p>A modern web application built with Next.js and React</p>
        <div className={styles.buttons}>
          <button className={styles.primaryButton}>Get Started</button>
          <button className={styles.secondaryButton}>Learn More</button>
        </div>
      </div>
    </section>
  );
}