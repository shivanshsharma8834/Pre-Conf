import React from 'react';
import { motion } from 'framer-motion';
import styles from './PlanAhead.module.css';

function PlanAhead() {
  return (
    <section className={styles.planAhead}>
      <div className={styles.container}>
        <motion.div 
          className={styles.illustration}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className={styles.illustrationCard}>
            <img 
              src="/Screenshot 2026-02-10 192021.png" 
              alt="Planning illustration"
              className={styles.planImage}
            />
            <div className={styles.notification}>
              <strong>📅 My Schedule</strong><br />
              My topic for next week...
            </div>
            <div className={styles.reminder}>
              <strong>🔔 Reminder</strong><br />
              You have 2 events coming up...
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          className={styles.content}
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className={styles.title}>
            PLAN AHEAD<br />
            WITH <span className={styles.highlight}>SCHEDULING</span>
          </h2>
          
          <p className={styles.description}>
            Stay organized with calendar integrations, automated reminders, 
            and seamless event management tools designed for busy creators.
          </p>
          
          <button className={styles.ctaBtn}>
            ⚡ Get Started
          </button>
        </motion.div>
      </div>
    </section>
  );
}

export default PlanAhead;
