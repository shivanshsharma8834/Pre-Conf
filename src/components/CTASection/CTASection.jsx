import React from 'react';
import { motion } from 'framer-motion';
import styles from './CTASection.module.css';

function CTASection() {
  return (
    <section className={styles.cta}>
      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className={styles.heading}>
            Not a conference you attend.<br />
            A space you belong to.
          </h2>
          
          <button className={styles.ctaButton}>
            Join the Community
          </button>
        </motion.div>
      </div>
    </section>
  );
}

export default CTASection;
