import React from 'react';
import styles from './Footer.module.css';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.logoSection}>
          <h3>Next.js React Website</h3>
          <p>A modern web application built with Next.js and React</p>
        </div>
        
        <div className={styles.linksSection}>
          <div className={styles.linkGroup}>
            <h4>Resources</h4>
            <ul>
              <li><a href="https://nextjs.org/docs">Next.js Docs</a></li>
              <li><a href="https://reactjs.org/docs/getting-started.html">React Docs</a></li>
              <li><a href="https://github.com">GitHub</a></li>
            </ul>
          </div>
          
          <div className={styles.linkGroup}>
            <h4>Company</h4>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#">Careers</a></li>
            </ul>
          </div>
          
          <div className={styles.linkGroup}>
            <h4>Legal</h4>
            <ul>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className={styles.copyright}>
        <p>&copy; {new Date().getFullYear()} Next.js React Website. All rights reserved.</p>
      </div>
    </footer>
  );
}