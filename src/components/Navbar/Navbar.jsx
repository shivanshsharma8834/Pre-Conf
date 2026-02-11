import React, { useState, useEffect } from 'react';
import styles from './Navbar.module.css';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [ambassadorDropdown, setAmbassadorDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <div className={styles.logo}>GirlsWhoYap</div>
        
        <div className={styles.navLinks}>
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#speakers">Speakers</a>
          <a href="#events">Events</a>
          
          {/* Ambassador with dropdown */}
          <div 
            className={styles.dropdown}
            onMouseEnter={() => setAmbassadorDropdown(true)}
            onMouseLeave={() => setAmbassadorDropdown(false)}
          >
            <a href="#ambassador" className={styles.dropdownToggle}>
              Ambassador
              <span className={styles.dropdownIcon}>▼</span>
            </a>
            {ambassadorDropdown && (
              <div className={styles.dropdownMenu}>
                <a href="#leaderboard">Leaderboard</a>
              </div>
            )}
          </div>
        </div>
        
        <button className={styles.ctaButton}>Get Tickets</button>
      </div>
    </nav>
  );
}

export default Navbar;
