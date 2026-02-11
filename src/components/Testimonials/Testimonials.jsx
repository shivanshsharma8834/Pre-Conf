import React from 'react';
import { motion } from 'framer-motion';
import styles from './Testimonials.module.css';

// Scrolling avatars (left and right sides)
const scrollingAvatars = [
  { size: 'medium', image: '/Screenshot 2026-02-11 182005.png' },
  { size: 'medium', image: '/Screenshot 2026-02-11 182015.png' },
  { size: 'medium', image: '/Screenshot 2026-02-11 182024.png' },
  { size: 'medium', image: '/Screenshot 2026-02-11 182034.png' },
  { size: 'medium', image: '/Screenshot 2026-02-11 182015.png' },
  { size: 'medium', image: '/Screenshot 2026-02-11 182005.png' },
];

function Testimonials() {
  return (
    <section className={styles.testimonials}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Community Voices</h2>
        </div>
        
        <div className={styles.scrollContainer}>
          {/* Infinite scrolling avatars */}
          <div className={styles.scrollWrapper}>
            <motion.div 
              className={styles.scrollTrack}
              animate={{ x: [-1400, 0] }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {/* Duplicate the array for seamless infinite scroll */}
              {[...scrollingAvatars, ...scrollingAvatars, ...scrollingAvatars].map((card, index) => (
                <motion.div
                  key={index}
                  className={`${styles.avatarCard} ${styles[card.size]}`}
                  animate={{ rotateY: [0, 360] }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  <img 
                    src={card.image} 
                    alt={`Avatar ${index + 1}`}
                    className={styles.avatarImage}
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Fixed center huge card */}
          <div className={styles.centerCardContainer}>
            <div className={`${styles.avatarCard} ${styles.huge}`}>
              <img 
                src="/Screenshot 2026-02-11 200422.png" 
                alt="Featured Avatar"
                className={styles.avatarImage}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
