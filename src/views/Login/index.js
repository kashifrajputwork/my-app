import React from "react";
import { Link , useNavigate } from "react-router-dom";
import Logo from '../../assets/images/newLogo.svg';
import Eye from '../../assets/images/eye.svg';
import AuthImage from "../../components/AuthImage/AuthImage";
import styles from './Login.module.scss'

const Login = () => {
  const navigate = useNavigate();
  const NavigteToDashboard = (e) => {
    e.preventDefault();
    navigate('/dashboard')
  }
  return (
    <div className={styles.LoginWrapper}>
        <div className={styles.LoginInner}>
          <AuthImage />
          <div className={styles.Login}>
            <Link><img src={Logo} alt="logo" /></Link>
              <form className={styles.LoginForm}>
                <input className={styles.LoginInput} type="text" placeholder="User" />
                <div className={styles.LoginInput}>
                <input type="password" placeholder="Password"/>
                <img src={Eye} alt="eye"/>
                
                </div>

                <button className={styles.LoginSubmit} onClick={NavigteToDashboard}>Sign In</button>
              </form>
              <div style={{
                display: 'flex',
                gap: '5px',
              }}>

             <span style={{color:"#79747E", fontSize: "14px"}}>
             Forgot password?
             </span>
              <Link className={styles.LoginForgotButton} to="/forgot-password">Click here</Link>
              </div>
          </div>
        </div>
    </div>
  );
};

export default Login;