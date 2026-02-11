import React, { useState, useEffect } from 'react';
import styles from './Navbar.module.css';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

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
          <a href="#community">Community</a>
        </div>
        
        <button className={styles.ctaButton}>Get Tickets</button>
      </div>
    </nav>
  );
}

export default Navbar;
