import React from 'react';
import styles from './TechSlider.module.scss';

// Create an array of image data
const techLogos = [
  { src: '/assets/images/technologies/javascript.svg', alt: 'JavaScript' },
  { src: '/assets/images/technologies/typescript.svg', alt: 'TypeScript' },
  { src: '/assets/images/technologies/html.svg', alt: 'HTML' },
  { src: '/assets/images/technologies/css.svg', alt: 'CSS' },
  { src: '/assets/images/technologies/sass.svg', alt: 'SASS' },
  { src: '/assets/images/technologies/react.svg', alt: 'React' },
  { src: '/assets/images/technologies/redux.svg', alt: 'Redux' },
  { src: '/assets/images/technologies/python.svg', alt: 'Python' },
  { src: '/assets/images/technologies/cpp.svg', alt: 'C++' },
  { src: '/assets/images/technologies/mysql.svg', alt: 'MySQL' },
  { src: '/assets/images/technologies/wordpress.svg', alt: 'WordPress' },
  { src: '/assets/images/technologies/fastapi.svg', alt: 'FastAPI' },
  { src: '/assets/images/technologies/docker.svg', alt: 'Docker' },
  { src: '/assets/images/technologies/bootstrap.svg', alt: 'Bootstrap' },
    { src: '/assets/images/technologies/tailwind.svg', alt: 'Tailwind' },
]

const TechSlider: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.slider}>
        {[...techLogos, ...techLogos, ...techLogos, ...techLogos, ...techLogos].map((tech, index) => (
          <div className={styles.imgContainer}>
            <img
              key={index}
              src={tech.src}
              alt={tech.alt}
            />
            <span>{tech.alt}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechSlider;
