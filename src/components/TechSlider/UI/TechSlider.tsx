import React, { useEffect, useRef } from 'react';
import styles from './TechSlider.module.scss';

// Image imports
import jsLogo from '@/assets/images/technologies/javascript.svg';
import tsLogo from '@/assets/images/technologies/typescript.svg';
import htmlLogo from '@/assets/images/technologies/html.svg';
import cssLogo from '@/assets/images/technologies/css.svg';
import sassLogo from '@/assets/images/technologies/sass.svg';
import reactLogo from '@/assets/images/technologies/react.svg';
import reduxLogo from '@/assets/images/technologies/redux.svg';
import pythonLogo from '@/assets/images/technologies/python.svg';
import cppLogo from '@/assets/images/technologies/cpp.svg';
import mysqlLogo from '@/assets/images/technologies/mysql.svg';
import wordpressLogo from '@/assets/images/technologies/wordpress.svg';
import fastapiLogo from '@/assets/images/technologies/fastapi.svg';
import dockerLogo from '@/assets/images/technologies/docker.svg';

const TechSlider: React.FC = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  let position = 0;

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const sliderItems = Array.from(slider.children) as HTMLElement[];
    const itemWidth = sliderItems[0].offsetWidth + 20; // Item width + gap

    // Clone items for seamless looping
    sliderItems.forEach((item) => {
      const clone = item.cloneNode(true) as HTMLElement;
      slider.appendChild(clone);
    });

    // Sliding logic
    const slide = () => {
      position -= 0.15; // Move 1px per frame
      slider.style.transform = `translateX(${position}px)`;

      // Reset position when the first batch is out of view
      if (Math.abs(position) >= sliderItems.length * itemWidth) {
        position = 0;
      }

      requestAnimationFrame(slide);
    };

    slide();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.slider} ref={sliderRef}>
        <img src={jsLogo} alt="JavaScript" />
        <img src={tsLogo} alt="TypeScript" />
        <img src={htmlLogo} alt="HTML" />
        <img src={cssLogo} alt="CSS" />
        <img src={sassLogo} alt="SASS" />
        <img src={reactLogo} alt="React" />
        <img src={reduxLogo} alt="Redux" />
        <img src={pythonLogo} alt="Python" />
        <img src={cppLogo} alt="C++" />
        <img src={mysqlLogo} alt="MySQL" style={{width: "120px", margin: "0 -15px"}}/>
        <img src={wordpressLogo} alt="WordPress" />
        <img src={fastapiLogo} alt="FastAPI" />
        <img src={dockerLogo} alt="Docker" />
      </div>
    </div>
  );
};

export default TechSlider;
