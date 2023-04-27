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
  hideEye,
  ...props
}) => {
  const [inputType, setInputType] = useState(type);

  const togglePasswordVisibility = () => {
    setInputType(inputType === 'password' ? 'text' : 'password');
  };

  return (
    <div style={style} className={styles.input}>
      <input
        type={inputType}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`${className}`}
        {...props}
      />
      {inputType === 'password' ? (
        <img src={img} alt="" onClick={togglePasswordVisibility} />
      ) : (
        inputType === 'text' && <img style={{width: '22px', marginRight: '10px'}} onClick={togglePasswordVisibility} src={hideEye} alt="" />
      )}
    </div>
  );
};

export default InputField;
