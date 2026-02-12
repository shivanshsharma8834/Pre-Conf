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
            It’s for the student, developers, designers, founder, creators, community leaders, working
            professionals, and the beautifully curious souls who just know they want to be in the room.
            <br /><br />
            You just need that spark, that little yes, yes in your chest that says, “I want to be part of
            something.” We welcome everyone, all genders, all backgrounds, all levels of experience. Beginner
            or seasoned. Loud or quietly brilliant. It doesn’t matter where you’re from or what you’ve built.
            <br /><br />
            And if you’re even a little curious, maybe this is your sign. 
          </p>
        </motion.div>
        
        <div className={styles.illustration}>
          <img 
            src="/4.png" 
            alt="Diverse group of women" 
            className={styles.collageImage}
          />
        </div>
      </div>
    </section>
  );
}

export default WhoItsFor;
