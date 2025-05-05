import React from 'react';
import styles from './Features.module.css';

export function Features() {
  const features = [
    {
      title: 'Fast Performance',
      description: 'Built with Next.js for optimized performance and fast page loads.',
      icon: '⚡️'
    },
    {
      title: 'React Components',
      description: 'Modular and reusable React components for efficient development.',
      icon: '🧩'
    },
    {
      title: 'Responsive Design',
      description: 'Fully responsive layout that works on all devices and screen sizes.',
      icon: '📱'
    },
    {
      title: 'Modern Styling',
      description: 'Clean and modern design with CSS modules for component-scoped styling.',
      icon: '🎨'
    }
  ];

  return (
    <section className={styles.features}>
      <h2>Key Features</h2>
      <div className={styles.grid}>
        {features.map((feature, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.icon}>{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}