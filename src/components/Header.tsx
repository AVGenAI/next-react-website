import React from 'react';
import styles from './Header.module.css';

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <h1>NextJS React Website</h1>
      </div>
      <nav className={styles.nav}>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Features</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}