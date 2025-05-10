import React from 'react';
import styles from './ProjectLink.module.scss';

type ProjectLinkProps = {
  src: string;
  href: string;
};

const ProjectLink: React.FC<ProjectLinkProps> = ({ src, href }) => {

  return (
    <a href={href} className={styles.projectLink} target="_blank" rel="noopener noreferrer">
      <picture>
        <source srcSet={`${src}.webp`} type="image/webp" />
        <img src={`${src}.jpg`} alt="Project" />
      </picture>
    </a>
  );
};

export default ProjectLink;