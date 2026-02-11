import React from 'react';
import { motion } from 'framer-motion';
import styles from './HeroSection.module.css';

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
              src="\Untitled design (1).png" 
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

        {/* CTA Section Below */}
        <motion.div 
          className={styles.ctaSection}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h2 className={styles.subheading}>
            Where women don't just attend conferences, they shape conversations.
          </h2>
          
          <p className={styles.description}>
            GirlsWhoYap Conference is an Offline / IRL creator-first gathering for women builders, 
            thinkers, creators, and leaders across tech, web3, AI, design, product, media, and culture.
            <br /><br />
            This is not about passive listening — it's about active participation.
          </p>
          
          <div className={styles.ctas}>
            <button className={styles.primaryCta}>Get Tickets</button>
            <button className={styles.secondaryCta}>Explore the Experience</button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default HeroSection;
