import React from 'react';
import { motion } from 'framer-motion';
import styles from './BecomeASpeaker.module.css';

function BecomeASpeaker() {
  return (
    <section className={styles.becomeASpeaker} id="speakers">
      <div className={styles.container}>
        <motion.div 
          className={styles.content}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className={styles.title}>
            BECOME AN<br />
            EVENT <span className={styles.highlight}>SPEAKERS</span>
          </h2>
          
          <p className={styles.description}>
            Share your expertise, connect with an engaged community, 
            and contribute to meaningful conversations that matter.
          </p>
          
          <button className={styles.ctaBtn}>
            ⚡ Get Started
          </button>
        </motion.div>
        
        <motion.div 
          className={styles.illustration}
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className={styles.illustrationCard}>
            <img 
              src="/Screenshot 2026-02-10 192838.png" 
              alt="Speaker illustration"
              className={styles.speakerImage}
            />
            <div className={styles.badge}>💡 My Topic...</div>
            <div className={styles.badge2}>📁 Category...</div>
            <div className={styles.speechBubble}>
              <strong>Oliver:</strong><br />
              Great topic and speakers! the fact that this event is free is mind-blowing 🤯
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default BecomeASpeaker;
