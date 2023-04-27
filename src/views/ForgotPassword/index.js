import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthImage from '../../components/AuthImage/AuthImage';
import styles from './ForgotPassword.module.scss';
import BackArrow from '../../assets/images/back-arrow.svg';
import 'react-toastify/dist/ReactToastify.css';
import InputField from '../../constants/Input';
import Button from '../../constants/Button';
import Modal from '../../constants/Modal';
import Mail from '../../assets/images/mail.svg'

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [showModal, setShowModal] = useState(false);
  const handleClose = (e) => {
    e.preventDefault();
    setShowModal(!showModal);
    navigate('/recover-password');
  };
  const Navigate = (e) => {
    e.preventDefault();
    if (username.trim() === '') {
      setUsernameError('Username cannot be empty');
      return;
    } else {
      setUsernameError('');
    }
    setShowModal(!showModal);
  };

  return (
    <div className={styles.ForgotPasswordWrapper}>
      <div className={styles.ForgotInner}>
        <AuthImage />
        <div className={styles.Forgot}>
          <div className={styles.ForgotTop}>
            <Link to="/">
              <img src={BackArrow} alt="back arrow" />
            </Link>
            <h3>Forgot password</h3>
          </div>
          <h2>Enter your username</h2>
          <form className={styles.ForgetForm}>
            <InputField
              placeholder="User"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            {usernameError && (
              <span className={styles.usernameError}>{usernameError}</span>
            )}
            <Button
              style={{ margin: '32px 0' }}
              type="submit"
              text="Continue"
              onClick={Navigate}
            />
          </form>
        </div>
      </div>
      <Modal size="medium" show={showModal} handleClose={handleClose}>
                <img src={Mail} alt='Email'/>
                <h4 className={styles.textModal}>Email Sent</h4>
                <p style={{marginBottom: '16px'}}>Your new password has been sent to your manager’s email. Please, contact your manager to receive your password, then enter it on the login screen to access your account.</p>
                <Button 
                    style={{width: "148px", margin: '4px 0 0 auto'}}
                    onClick={handleClose}
                    text='Ok, understood'
                />
            </Modal>
    </div>
  );
};


export default ForgotPassword;
