import React from 'react';
import { motion } from 'framer-motion';
import styles from './FeatureCards.module.css';

const features = [
  {
    title: 'Conversations over presentations',
    description: 'Spaces designed for dialogue, not monologues.',
  },
  {
    title: 'Community-first design',
    description: 'Built intentionally to feel inclusive, welcoming, and human.',
  },
  {
    title: 'Ideas at every stage',
    description: 'From first-time learners to seasoned operators.',
  },
  {
    title: 'Offline energy, online impact',
    description: 'What starts here travels far beyond the room.',
  },
  {
    title: 'No hierarchy, no gatekeeping',
    description: 'Everyone is here to contribute, not compete.',
  },
];

function FeatureCards() {
  return (
    <section className={styles.features} id="experience">
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            <span className={styles.titleMain}>WHAT IT FEELS LIKE</span>
            <span className={styles.titleSub}>TO BE AT GIRLSWHOYAP</span>
          </h2>
        </div>
        
        <div className={styles.grid}>
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className={styles.card}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, boxShadow: 'var(--shadow-xl)' }}
            >
              <div className={styles.cardNumber}>{String(index + 1).padStart(2, '0')}</div>
              <h3 className={styles.cardTitle}>{feature.title}</h3>
              <p className={styles.cardDescription}>{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeatureCards;
