import React from 'react';
import styles from './Button.module.scss'

interface ButtonProps {
  children: React.ReactNode;
  color: string;
  fill?: boolean; // Optional prop to determine if the button is filled
}

const Button: React.FC<ButtonProps> = ({ children, color, fill = false }) => {
  return (
    <button
      className={styles.button}
      style={{
        border: `2px solid ${color}`,
        color: fill ? 'white' : color,
        backgroundColor: fill ? color : 'transparent', 
      }}
      onMouseEnter={(e) => {
        const button = e.target as HTMLButtonElement;
        if (!fill) {
          button.style.backgroundColor = color;
          button.style.color = 'white';
        } else {
          button.style.opacity = `0.9`;
        }
      }}
      onMouseLeave={(e) => {
        const button = e.target as HTMLButtonElement;
        if (!fill) {
          button.style.backgroundColor = 'transparent';
          button.style.color = color;
        } else {
          button.style.opacity = `1`;
        }
      }}
    >
      {children}
    </button>
  );
};

export default Button;