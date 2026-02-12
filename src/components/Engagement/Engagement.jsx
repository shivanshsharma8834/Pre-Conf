import React from 'react';
import { motion } from 'framer-motion';
import styles from './Engagement.module.css';

function Engagement() {
  return (
    <section className={styles.engagement}>
      <div className={styles.container}>
        <motion.div 
          className={styles.content}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className={styles.title}>GWY
            <br />
            Pre-Conf
          </h2>

          <p className={styles.description}>
            Attend the Global Pre-Conference to connect with creators and builders worldwide. There is NO charge to
            attend, and seats are curated to ensure meaningful participation.
          </p>

          <a href="/ticket" className={styles.ctaBtn}>
            Grab Your Ticket
          </a>
        </motion.div>
        
        <motion.div 
          className={styles.illustration}
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className={styles.illustrationCard}>
            <div className={styles.liveTag}>🔴 LIVE</div>
            <img 
              src="/Screenshot 2026-02-10 192817.png" 
              alt="Engagement illustration"
              className={styles.engagementImage}
            />
            <div className={styles.chat1}>
              <strong>💡 Laura:</strong><br />
              So inspiring...
            </div>
            <div className={styles.chat2}>
              <strong>🔥 Maya:</strong><br />
              Today's topic and speakers are 🔥🔥🔥
            </div>
            <div className={styles.chat3}>
              <strong>Steven:</strong><br />
              Need more of this! 💯
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Engagement;
