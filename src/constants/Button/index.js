// Button.jsx
import React from 'react';
import styles from './Button.module.scss';

const Button = ({
  text,
  onClick,
  className = '',
  type = 'button',
  disabled = false,
  style
}) => {
  return (
    <button
      style={style}
      type={type}
      onClick={onClick}
      className={`${styles.button} ${className}`}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Button;
