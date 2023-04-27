import React, { useState } from "react";
import { Link } from "react-router-dom";
import AuthImage from "../../components/AuthImage/AuthImage";
import styles from "./RecoverPassword.module.scss";
import BackArrow from "../../assets/images/back-arrow.svg";
import Eye from "../../assets/images/eye.svg";
import HideEye from "../../assets/images/invisible.png";
import InputField from "../../constants/Input";
import Button from "../../constants/Button";
import Mail from '../../assets/images/mail.svg'
import Modal from "../../constants/Modal";

const RecoverPassword = () => {
  const [showModal, setShowModal] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [errorNewPassword, setErrorNewPassword] = useState("");
  const [errorConfirmNewPassword, setErrorConfirmNewPassword] = useState("");

  const handleClose = (e) => {
    e.preventDefault();
    setShowModal(!showModal);
  };

  const handleOpen = (e) => {
    e.preventDefault();

    if (newPassword === "") {
      setErrorNewPassword("New password cannot be empty.");
    } else {
      setErrorNewPassword("");
    }

    if (confirmNewPassword === "") {
      setErrorConfirmNewPassword("Confirm new password cannot be empty.");
    } else {
      setErrorConfirmNewPassword("");
    }

 
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
          <InputField
            type="password"
            placeholder="New Password"
            hideEye={HideEye}
            img={Eye}
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
          {errorNewPassword && (
            <p className={styles.errorMessage}>{errorNewPassword}</p>
          )}

          <InputField
            type="password"
            placeholder="Confirm new Password"
            img={Eye}
            hideEye={HideEye}
            value={confirmNewPassword}
            onChange={(e) => setConfirmNewPassword(e.target.value)}
          />
          {errorConfirmNewPassword && (
            <p className={styles.errorMessage}>{errorConfirmNewPassword}</p>
          )}
        </div>
        <Button type="submit" text="Continue" onClick={handleOpen} />
      </form>
        </div>
      </div>
      {/* <Modal size="medium" show={showModal} handleClose={handleClose}>
                <img src={Mail} alt='Email'/>
                <h4 className={styles.textModal}>Email Sent</h4>
                <p style={{marginBottom: '16px'}}>Your new password has been sent to your manager’s email. Please, contact your manager to receive your password, then enter it on the login screen to access your account.</p>
                <Button 
                    style={{width: "148px", margin: '4px 0 0 auto'}}
                    onClick={handleClose}
                    text='Ok, understood'
                />
            </Modal> */}
    </div>
  );
};

export default RecoverPassword;
