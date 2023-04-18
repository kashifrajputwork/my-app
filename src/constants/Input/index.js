import React, { useState } from 'react';
import styles from './input.module.scss';

const InputField = ({
  type = '',
  value,
  onChange,
  placeholder = '',
  className = '',
  style,
  img,
  ...props
}) => {
  const [inputType, setInputType] = useState(type);

  const togglePasswordVisibility = () => {
    setInputType(inputType === 'password' ? 'text' : 'password');
  };

  return (
    <div         style={style}
    className={styles.input}>
      <input
        type={inputType}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`${className}`}
        {...props}
      />
      {img && <img src={img} alt="" onClick={togglePasswordVisibility} />}
    </div>
  );
};

export default InputField;
