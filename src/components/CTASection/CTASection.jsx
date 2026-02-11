import React from 'react';
import { motion } from 'framer-motion';
import styles from './CTASection.module.css';

function CTASection() {
  return (
    <section className={styles.cta}>
      <div className={styles.container}>
        <motion.div
          className={styles.contentWrapper}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Section Header */}
          <div className={styles.header}>
            <h2 className={styles.heading}>Our Reach</h2>
            <p className={styles.subtext}>
              We are not limited in India, we fly our wings to provide quality over the world.
            </p>
          </div>

          {/* Stats Grid */}
          <div className={styles.statsGrid}>
            {/* Total Reach */}
            <motion.div 
              className={styles.statItem}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className={styles.iconWrapper}>
                <span className={styles.icon}>✦</span>
              </div>
              <div className={styles.statContent}>
                <div className={styles.statLabel}>Total Reach</div>
                <div className={styles.statValue}>2M+</div>
              </div>
            </motion.div>

            {/* Institution Partners */}
            <motion.div 
              className={styles.statItem}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className={styles.iconWrapper}>
                <span className={styles.icon}>★</span>
              </div>
              <div className={styles.statContent}>
                <div className={styles.statLabel}>Institutions Partners</div>
                <div className={styles.statValue}>280+</div>
                <div className={styles.statSub}>global</div>
              </div>
            </motion.div>

            {/* Community Size */}
            <motion.div 
              className={styles.statItem}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className={styles.iconWrapper}>
                <span className={styles.icon}>✦</span>
              </div>
              <div className={styles.statContent}>
                <div className={styles.statLabel}>Community Size</div>
                <div className={styles.statValue}>40,000+</div>
              </div>
            </motion.div>

            {/* Operating In */}
            <motion.div 
              className={styles.statItem}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className={styles.iconWrapper}>
                <span className={styles.icon}>★</span>
              </div>
              <div className={styles.statContent}>
                <div className={styles.statLabel}>Operating in</div>
                <div className={styles.statValue}>15+</div>
                <div className={styles.statSub}>countries and 20+ languages</div>
              </div>
            </motion.div>
          </div>

          {/* CTA Button */}
          <motion.button 
            className={styles.ctaButton}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Join the Community
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

export default CTASection;
