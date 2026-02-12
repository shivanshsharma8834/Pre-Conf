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
          <h2 className={styles.title}>Don’t just attend. Come participate with us.</h2>
          
          <p className={styles.description}>
            This isn’t the kind of space where you sit in a chair, clap politely, and leave with a tote bag.
            This is the kind where you belong. Where you lean in. Where you try, try again.
          </p>

          <p className={styles.description}>
            You could light up Talent Night, sing, roast, stand up, dance, art showcase, perform, surprise us.
          </p>

          <p className={styles.description}>
            Become an Ambassador and carry GWY Pre-Conf into your city, your campus, your little corner of the world.
          </p>

          <p className={styles.description}>
            Come Volunteer with us. Help us weave this global story across 150+ cities, alongside partners from 25+ countries.
          </p>

          <button className={styles.ctaBtn}>
            Participate
          </button>
        </motion.div>
      </div>
    </section>
  );
}

export default PlanAhead;
