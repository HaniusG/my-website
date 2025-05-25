import styles from "./Landing.module.scss";
import Button from "@/components/Button";
import TechSlider from "@/components/TechSlider";

const Landing = () => {
  return (
    <div className={styles.avatarContainer}>
      <div className={styles.imgContainer}>
        <picture>
          <source srcSet='/assets/images/avatar/Profile.webp' type='image/webp' />
          <img
            src='/assets/images/avatar/Profile.jpg'
            alt='Description of the image'
            width='350'
            height='350'
          />
        </picture>
        <p>Hi, I am</p>
        <h2>Grigor Ohanyan</h2>
        <h3>Frontend React Developer</h3>
      </div>
      <div className={styles.buttonDiv}>
        <a href='https://drive.google.com/file/d/1vEGbN-rPJBizw25gh3aOIikmUinHmwWP/view?usp=sharing' target="_blank"><Button color='black'>My CV</Button></a>
        <a href='#contact'><Button color='black' fill>Contact Info</Button></a>
      </div>
      <div className={styles.contactLinks}>
        <a href="https://github.com/HaniusG" target="_blank"><img src='/assets/images/logos/github.svg' alt='GitHub Link' /></a>
        <a href="https://www.linkedin.com/in/grigor-ohanyan-90a910268/" target="_blank"><img src='/assets/images/logos/linkedin.svg' alt='LinkedIn Link' /></a>
      </div>
      <TechSlider />
    </div>
  );
};

export default Landing;
