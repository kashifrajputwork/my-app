import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Eye from '../../assets/images/eye.svg';
import HideEye from '../../assets/images/invisible.png';
import Logo from '../../assets/images/newLogo.svg';
import AuthImage from '../../components/AuthImage/AuthImage';
import styles from './Login.module.scss';
import Button from '../../constants/Button';
import InputField from '../../constants/Input';
import AuthContext from '../../Context/AuthContext';

const Login = () => {
  const navigate = useNavigate();

  const {
    checkUserType,
    setUserLoginText,
    userLoginText,
    // ...other states and functions you might need
  } = useContext(AuthContext);

  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const NavigteToDashboard = (e) => {
    e.preventDefault();
    if (password.trim() === '') {
      setPasswordError('Password cannot be empty');
      return;
    } else {
      setPasswordError('');
    }

    const userType = checkUserType(userLoginText);
    console.log(userType, "userType");
    if (userType === 'RegisterScreen') {
      navigate('/dashboard');
    } else {
      // Handle the case when the user login text does not match the validation.
      alert('Not Match')
    }
  };

  return (
    <div className={styles.LoginWrapper}>
      <div className={styles.LoginInner}>
        <AuthImage />
        <div className={styles.Login}>
          <Link to="/"><img src={Logo} alt="logo" /></Link>
          <form className={styles.LoginForm}>
            <div className={styles.inputWrapper}>
              <InputField
                type='text'
                placeholder="User"
                value={userLoginText}
                onChange={(e) => setUserLoginText(e.target.value)}
              />
              <InputField
                type='password'
                placeholder="Password"
                img={Eye}
                hideEye={HideEye}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {passwordError && (
                <span className={styles.passwordError}>{passwordError}</span>
              )}
            </div>
            <Button style={{margin: '32px auto 24px auto'}} onClick={NavigteToDashboard} text="Sign In" />
          </form>
          <div className={styles.forgotPasswordWrapper}>
            <span className={styles.forgotPasswordText}>Forgot password?</span>
            <Link className={styles.LoginForgotButton} to="/forgot-password">Click here</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
