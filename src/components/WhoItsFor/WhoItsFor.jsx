import React from 'react';
import { motion } from 'framer-motion';
import styles from './WhoItsFor.module.css';

function WhoItsFor() {
  return (
    <section className={styles.whoItsFor} id="community">
      <div className={styles.container}>
        <motion.div 
          className={styles.content}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className={styles.title}>Who It's For</h2>
          <p className={styles.text}>
            GirlsWhoYap is for people across backgrounds, disciplines, and stages of life.
            <br /><br />
            Whether you're a student, founder, creator, developer, marketer, researcher, 
            or simply exploring — <strong>you're welcome here.</strong>
          </p>
        </motion.div>
        
        <div className={styles.illustration}>
          <img 
            src="public/Screenshot 2026-02-10 135223.png" 
            alt="Diverse group of women" 
            className={styles.collageImage}
          />
        </div>
      </div>
    </section>
  );
}

export default WhoItsFor;
