import React from "react";
import styles from "./Landing.module.scss";
import ProfileJpg from '@/assets/images/avatar/Profile.jpg';
import ProfileWebp from '@/assets/images/avatar/Profile.webp'
import Button from "@/components/Button";
import GitHub from '@/assets/images/logos/github.svg'
import LinkedIn from '@/assets/images/logos/linkedin.svg'
import TechSlider from "@/components/TechSlider";

const Landing = () => {
  return (
    <div className={styles.avatarContainer}>
      <div className={styles.imgContainer}>
        <picture>
          <source srcSet={ProfileWebp} type='image/webp' />
          <img
            src={ProfileJpg}
            alt='Description of the image'
            width='300'
            height='300'
          />
        </picture>
        <p>Hi, I am</p>
        <h2>Grigor Ohanyan</h2>
        <h3>Frontend React Developer</h3>
      </div>
      <div className={styles.buttonDiv}>
      <a href='https://drive.google.com/file/d/1-t5rtp4ji2dZ6T6gAfaG_txWBd5EVs3R/view' target="_blank"><Button color='black'>My CV</Button></a>
        <Button color='black' fill>Contact Info</Button>
      </div>
      <div className={styles.contactLinks}>
        <a href="https://github.com/HaniusG" target="_blank"><img src={GitHub} alt='GitHub Link'/></a>
        <a href="https://www.linkedin.com/in/grigor-ohanyan-90a910268/" target="_blank"><img src={LinkedIn} alt='LinkedIn Link'/></a>
      </div>
      <TechSlider/>
    </div>
  );
};

export default Landing;
