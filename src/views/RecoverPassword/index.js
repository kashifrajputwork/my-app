import React, { useState } from "react";
import { Link } from "react-router-dom";
import AuthImage from "../../components/AuthImage/AuthImage";
import styles from "./RecoverPassword.module.scss";
import BackArrow from "../../assets/images/back-arrow.svg";
import Eye from "../../assets/images/eye.svg";
import InputField from "../../constants/Input";
import Button from "../../constants/Button";
import Mail from '../../assets/images/mail.svg'
import Modal from "../../constants/Modal";
import { toast } from "react-toastify";
const RecoverPassword = () => {
    const [showModal, setShowModal] = useState(false);

    const handleClose = (e) => {
        e.preventDefault();
      setShowModal(!showModal);
      toast.error("Account disabled, request a new access to your manager",{
        toastClassName: 'custom-toast-container-class',
        bodyClassName: 'custom-toast-body-class',
      });
    };
    const handleOpen = (e) => {
        e.preventDefault();
      setShowModal(!showModal);
    
    };
    
  return (
    <div className={styles.RecoverPasswordWrapper}>
      <div className={styles.RecoverInner}>
        <AuthImage />
        <div className={styles.Recover}>
          <div className={styles.RecoverTop}>
            <Link to="/">
              <img src={BackArrow} alt="back arrow" />
            </Link>
            <h3>Create new password</h3>
          </div>

          <h4>Your password must be at least:</h4>
          <ul>
            <li>8 characters</li>
            <li>1 lowercase letter</li>
            <li>1 uppercase letter</li>
            <li>1 number</li>
            <li>1 special character (!, @, #, $, %, ^)</li>
          </ul>

          <form className={styles.RecoverForm}>
            <div className={styles.inputWrapper}>
            <InputField type="password" placeholder="New Password" img={Eye} />

<InputField
  type="password"
  placeholder="Confirm new Password"
  img={Eye}
/>
            </div>
          

            <Button type="submit" text="Continue" onClick={handleOpen}/>
          </form>
        </div>
      </div>
      <Modal size="medium" show={showModal} handleClose={handleClose}>
                <img src={Mail} alt='Email'/>
                <h4>Email Sent</h4>
                <p>Your new password has been sent to your manager’s email. Please, contact your manager to receive your password, then enter it on the login screen to access your account.</p>
                <Button 
                    style={{width: "148px", margin: '4px 0 0 auto'}}
                    onClick={handleClose}
                    text='Ok, understood'
                />
            </Modal>
    </div>
  );
};

export default RecoverPassword;
