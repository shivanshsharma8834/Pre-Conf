import React from 'react';
import { motion } from 'framer-motion';
import styles from './LiveEvents.module.css';

function LiveEvents() {
  return (
    <section className={styles.liveEvents}>
      <div className={styles.container}>
        <div className={styles.videoSection}>
          <div className={styles.videoMockup}>
            <div className={styles.liveTag}>
              <span className={styles.liveDot}></span>
              LIVE
            </div>
            <img 
              src="/Gemini_Generated_Image_gh6drxgh6drxgh6d.png" 
              alt="Live event interface"
              className={styles.videoImage}
            />
            <div className={styles.videoControls}>
              <button className={styles.controlBtn}>⏮</button>
              <button className={styles.controlBtn}>⏯</button>
              <button className={styles.controlBtn}>⏭</button>
              <button className={styles.controlBtn}>⛶</button>
            </div>
          </div>
          
          <div className={styles.chatPreview}>
            <div className={styles.chatHeader}>
              <span>💬 Live Chat</span>
              <span className={styles.attendees}>👥 Attendees (128)</span>
            </div>
            <div className={styles.chatMessages}>
              <div className={styles.chatMessage}>
                <strong>Steven:</strong> Great topic and speakers! 🔥
              </div>
              <div className={styles.chatMessage}>
                <strong>Mark:</strong> Today's topic and speakers are 🔥🔥🔥
              </div>
              <div className={styles.chatMessage}>
                <strong>Wayne:</strong> This new event site is amazing! 💜
              </div>
            </div>
          </div>
        </div>
        
        <div className={styles.features}>
          <motion.div 
            className={styles.feature}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className={styles.icon}>👁</div>
            <h3 className={styles.featureTitle}>WATCH EXCLUSIVE</h3>
            <p className={styles.featureText}>
              Free and <span className={styles.highlight}>exclusive event</span> conferences with special guest and speakers.
            </p>
          </motion.div>
          
          <motion.div 
            className={styles.feature}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className={styles.icon}>😊</div>
            <h3 className={styles.featureTitle}>TOP SPEAKERS</h3>
            <p className={styles.featureText}>
              Anyone can <span className={styles.highlight}>become a host</span> and customize the number of participants.
            </p>
          </motion.div>
        </div>
        
        <div className={styles.ctas}>
          <button className={styles.primaryBtn}>Get Started</button>
          <button className={styles.secondaryBtn}>🔍 Browse</button>
        </div>
      </div>
    </section>
  );
}

export default LiveEvents;
