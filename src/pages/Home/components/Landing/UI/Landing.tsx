import styles from "./Landing.module.scss";
import Button from "@/components/Button";
import TechSlider from "@/components/TechSlider";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'

/* import all the icons in Free Solid, Free Regular, and Brands styles */
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fas, far, fab)

const Landing = () => {
  return (
    <div className={styles.avatarContainer}>
      <div className={styles.imgContainer}>
        <div className={styles.profileBorder}></div>
        <div className={styles.profileIcons}>
          <FontAwesomeIcon icon={["fab", "js"]} size="2x" color="#F7DF1E" style={{ top: 0, left: "50%", transform: "translateX(-50%)", position: "absolute" }} />
          <FontAwesomeIcon icon={["fab", "react"]} size="2x" color="#61DAFB" style={{ top: "50%", left: "100%", transform: "translate(-100%, -50%)", position: "absolute" }} />
          <FontAwesomeIcon icon={["fab", "html5"]} size="2x" color="#E34F26" style={{ top: "100%", left: "50%", transform: "translate(-50%, -100%)", position: "absolute" }} />
          <FontAwesomeIcon icon={["fab", "css3-alt"]} size="2x" color="#1572B6" style={{ top: "50%", left: 0, transform: "translateY(-50%)", position: "absolute" }} />

        </div>
        <picture>
          <source srcSet='/assets/images/avatar/Profile.webp' type='image/webp' />
          <img
            src='/assets/images/avatar/Profile.jpg'
            alt='Description of the image'
            width='350'
            height='350'
          />
        </picture>
      </div>
      <p>Hi, I am</p>
      <h2>Grigor Ohanyan</h2>
      <h3>Frontend React Developer</h3>
      <div className={styles.buttonDiv}>
        <a href='https://drive.google.com/file/d/1QgUBaSaFNXHxSEV2BxfNHFm0ncLPXQmv/view?usp=drive_link' target="_blank"><Button color='rgb(41 102 255)'>My CV</Button></a>
        <a href='#contact'><Button color='rgb(41 102 255)' fill>Contact Info</Button></a>
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
