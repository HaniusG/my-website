import React from "react";
import styles from "./Landing.module.scss";
import ProfileJpg from '../../../../../assets/images/avatar/Profile.jpg';
import ProfileWebp from '../../../../../assets/images/avatar/Profile.webp'
import Button from "../../../../../components/Button";
import GitHub from '../../../../../assets/images/logos/github.svg'
import TechSlider from "../../../../../components/TechSlider";

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
        <Button color='black'>My CV</Button>
        <Button color='black' fill>Contact Info</Button>
      </div>
      <div className=''>
        <a><img src={GitHub} alt='aaaa'/></a>
      </div>
      <TechSlider/>
    </div>
  );
};

export default Landing;
