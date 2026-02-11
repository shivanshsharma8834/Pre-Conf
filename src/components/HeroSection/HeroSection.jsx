import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import styles from './HeroSection.module.css';

// Custom hook for animated counter
const useCounter = (end, duration = 2000, start = 0) => {
  const [count, setCount] = useState(start);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (!isAnimating) return;

    let startTime;
    let animationFrame;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - percentage, 4);
      const current = Math.floor(start + (end - start) * easeOutQuart);
      
      setCount(current);

      if (percentage < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [end, duration, start, isAnimating]);

  return [count, setIsAnimating];
};

function HeroSection() {
  return (
    <section className={styles.hero} id="about">
      <div className={styles.container}>
        {/* Title Section */}
        <div className={styles.titleSection}>
          <motion.h1 
            className={styles.mainTitle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className={styles.titleBlack}>GIRLSWHOYAP</span>
            <span className={styles.titleColored}>CONFERENCE</span>
          </motion.h1>
          
          <motion.div 
            className={styles.descriptionBox}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className={styles.smallDescription}>
              Virtual meetings, and conferences,<br />
              anyone can share, join or host (virtual events).
            </p>
          </motion.div>
        </div>

        {/* Crowd Banner with Overlay Card */}
        <div className={styles.bannerSection}>
          {/* Crowd Background */}
          <div className={styles.crowdBackground}>
            <img 
              src="\2.png" 
              alt="Diverse crowd of women" 
              className={styles.crowdImage}
            />
          </div>

          {/* Event Card Overlay */}
          <motion.div 
            className={styles.eventCard}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className={styles.eventTitle}>
              Where women don't just attend conferences,<br />
              they shape conversations.
            </h2>
            <p className={styles.eventDate}>SPRING 2026</p>
            
            <div className={styles.eventDetails}>
              <div className={styles.speakerInfo}>
                <div className={styles.avatar}></div>
                <div>
                  <div className={styles.speakerName}>GirlsWhoYap Conference</div>
                  <div className={styles.speakerRole}>Creator-First Gathering</div>
                </div>
              </div>
              <button className={styles.arrowBtn}>→</button>
            </div>
          </motion.div>

          {/* NEW Badge */}
          <motion.div 
            className={styles.newBadge}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            NEW!!!
          </motion.div>

          {/* Bottom Info */}
          <div className={styles.bottomInfo}>
            <span className={styles.reminderBtn}>💭 Remind me</span>
            <span className={styles.participants}>👥 33/128 participants</span>
          </div>
        </div>

        {/* Animated Counter CTA Section */}
        <AnimatedCTASection />
      </div>
    </section>
  );
}

// Animated CTA Section Component
const AnimatedCTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const [count1, setIsAnimating1] = useCounter(3153, 2000);
  const [count2, setIsAnimating2] = useCounter(847, 2200);
  const [count3, setIsAnimating3] = useCounter(2456, 2400);

  useEffect(() => {
    if (isInView) {
      setIsAnimating1(true);
      setIsAnimating2(true);
      setIsAnimating3(true);
    }
  }, [isInView, setIsAnimating1, setIsAnimating2, setIsAnimating3]);

  return (
    <motion.div 
      ref={ref}
      className={styles.ctaSection}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.8 }}
    >
      <p className={styles.description}>
        GirlsWhoYap Conference is an Offline / IRL creator-first gathering for women builders, 
        thinkers, creators, and leaders across tech, web3, AI, design, product, media, and culture.
        This is not about passive listening — it's about active participation.
      </p>

      <div className={styles.numbersGrid}>
        <div className={styles.numberItem}>
          <div className={styles.number}>{count1.toLocaleString()}+</div>
          <div className={styles.numberLabel}>Active Members</div>
        </div>
        <div className={styles.numberItem}>
          <div className={styles.number}>{count2.toLocaleString()}+</div>
          <div className={styles.numberLabel}>Events Hosted</div>
        </div>
        <div className={styles.numberItem}>
          <div className={styles.number}>{count3.toLocaleString()}+</div>
          <div className={styles.numberLabel}>Community Connections</div>
        </div>
      </div>

      <button className={styles.getTicketsBtn}>Get Tickets</button>
    </motion.div>
  );
};

export default HeroSection;
