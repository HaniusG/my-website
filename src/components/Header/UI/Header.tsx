import React from "react";
import styles from "./Header.module.scss";

const Header: React.FC = () => {
  return (
    <header className={styles.headerWrapper}>
      <div className={styles.header}>
        <div className={styles.logo}>
          <a href="#">
            <img src='/assets/images/logos/godev.svg' className={styles.logoIcon} alt="Logo" />
          </a>
        </div>
        <nav className={styles.nav}>
          <a href="#projects" className={styles.link}>Projects</a>
          <a href="#experience" className={styles.link}>Experience</a>
          <a href="#contact" className={styles.link}>Contact Me</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
