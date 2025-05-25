import React, { useState } from "react";
import styles from "./Header.module.scss";

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
  };

  return (
    <header className={styles.headerWrapper}>
      <div className={styles.header}>
        {!menuOpen && (
          <div className={styles.logo}>
            <a href="#">
              <img src='/assets/images/logos/godev.svg' className={styles.logoIcon} alt="Logo" />
            </a>
          </div>
        )}
        <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ''}`}>
          <a href="#projects" className={styles.link}>Projects</a>
          <a href="#experience" className={styles.link}>Experience</a>
          <a href="#contact" className={styles.link}>Contact Me</a>
        </nav>
        <div className={styles.mobileMenu} onClick={toggleMenu}>
          {menuOpen ? '✖' : '☰'}
        </div>
      </div>
    </header>
  );
};

export default Header;
