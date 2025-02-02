import React, { useEffect, useRef } from 'react';
import styles from './TechSlider.module.scss';

const TechSlider: React.FC = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  let position = 0;

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return; // Safety check in case the ref isn't set

    const sliderItems = Array.from(slider.children) as HTMLElement[];
    const itemWidth = sliderItems[0].offsetWidth + 20; // Item width + gap

    // Clone items for seamless looping
    sliderItems.forEach((item) => {
      const clone = item.cloneNode(true) as HTMLElement;
      slider.appendChild(clone);
    });

    // Sliding logic
    const slide = () => {
      position -= 1; // Move 1px per frame
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
        <img src='../../../assets/images/technologies/javascript.svg' alt="JavaScript" />
        <img src="/icons/typescript.svg" alt="TypeScript" />
        <img src="/icons/html.svg" alt="HTML" />
        <img src="/icons/css.svg" alt="CSS" />
        <img src="/icons/sass.svg" alt="SASS" />
        <img src="/icons/react.svg" alt="React" />
        <img src="/icons/redux.svg" alt="Redux" />
        <img src="/icons/python.svg" alt="Python" />
        <img src="/icons/cpp.svg" alt="C++" />
        <img src="/icons/mysql.svg" alt="MySQL" />
        <img src="/icons/wordpress.svg" alt="WordPress" />
        <img src="/icons/fastapi.svg" alt="FastAPI" />
        <img src="/icons/docker.svg" alt="Docker" />
      </div>
    </div>
  );
};

export default TechSlider;
