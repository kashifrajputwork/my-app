import React from "react";
import styles from './AuthImage.module.scss';
import LoginImg from '../../assets/images/login.svg'
const AuthImage = () => {
  return (
    <div className={styles.authImage}>
      <img src={LoginImg} className={styles.loginImg} alt="img"/>
    </div>
  );
};

export default AuthImage;