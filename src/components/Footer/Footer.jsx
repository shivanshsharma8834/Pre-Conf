import React from 'react';
import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.topSection}>
          <div className={styles.brand}>
            <h3 className={styles.logo}>GirlsWhoYap</h3>
            <p className={styles.mission}>
              Virtual meetings, and conferences,<br />
              anyone can share, join or host (virtual events).
            </p>
            <button className={styles.newEventBtn}>
              + New event or meeting
            </button>
          </div>
          
          <div className={styles.links}>
            <div className={styles.linkColumn}>
              <h4 className={styles.columnTitle}>Menu</h4>
              <a href="#" className={styles.link}>Virtualer Platform Overview</a>
              <a href="#" className={styles.link}>New Event or Meetings</a>
              <a href="#" className={styles.link}>Customer Stories</a>
              <a href="#" className={styles.link}>Virtualer Events</a>
            </div>
            
            <div className={styles.linkColumn}>
              <h4 className={styles.columnTitle}>About us</h4>
              <a href="#" className={styles.link}>Contact Us</a>
              <a href="#" className={styles.link}>Our Team</a>
              <a href="#" className={styles.link}>Careers</a>
              <a href="#" className={styles.link}>Press</a>
            </div>
          </div>
          
          <div className={styles.social}>
            <a href="#" className={styles.socialIcon}>𝕏</a>
            <a href="#" className={styles.socialIcon}>M</a>
            <a href="#" className={styles.socialIcon}>📷</a>
            <a href="#" className={styles.socialIcon}>in</a>
          </div>
        </div>
        
        <div className={styles.bottom}>
          <p>&copy; 2026 GirlsWhoYap Conference. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
