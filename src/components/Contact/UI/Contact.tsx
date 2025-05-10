import React, { useState } from "react";
import styles from "./Contact.module.scss";
import TelegramIcon from "/assets/images/logos/telegram.svg";
import LinkedInIcon from "/assets/images/logos/linkedin.svg";
import { Copy } from "lucide-react"; // optional, or use any other copy icon

const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const email = "ohanyang183@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className={styles.contactSection}>
      <p className={styles.subheader}>Get in touch</p>
      <h2 className={styles.header}>Contact Me</h2>

      <div className={styles.contactBox}>
        <div className={styles.emailRow}>
          <span className={styles.email}>{email}</span>
          <button onClick={handleCopy} className={styles.copyBtn}>
            <Copy size={16} />
            {copied ? "Copied!" : "Copy"}
          </button>
        </div>

        <div className={styles.links}>
          <a href="https://t.me/Grigor_Ohanyan" target="_blank" rel="noreferrer">
            <img src='/assets/images/logos/telegram.svg' alt="Telegram" className={styles.icon} />
            Telegram
          </a>
          <a href="https://www.linkedin.com/in/grigor-ohanyan-90a910268/" target="_blank" rel="noreferrer">
            <img src='/assets/images/logos/linkedin.svg' alt="LinkedIn" className={styles.icon} />
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
