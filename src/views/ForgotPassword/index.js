import React,{ useState } from "react";
import { Link } from "react-router-dom";
import AuthImage from "../../components/AuthImage/AuthImage";
import styles from './ForgotPassword.module.scss'
import BackArrow from '../../assets/images/back-arrow.svg'
import Mail from '../../assets/images/mail.svg'
import Modal from "../../constants/Modal";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ForgotPassword = () => {
    const [showModal, setShowModal] = useState(false);

    const handleClose = () => {
      setShowModal(false);
      toast.error("Account disabled, request a new access to your manager",{
        toastClassName: 'custom-toast-container-class',
        bodyClassName: 'custom-toast-body-class',
      });
    };
  
    const handleOpen = (e) => {
        e.preventDefault();
        setShowModal(true);
    };

    return (
        <div className={styles.ForgotPasswordWrapper}>
                <div className={styles.ForgotInner}>
                <AuthImage />
                <div className={styles.Forgot}>
                        <div className={styles.ForgotTop}>
                            <Link to="/"><img src={BackArrow} alt="back arrow"/></Link>
                            <h3>Forgot password</h3>
                        </div>
                        <h2>Enter your username</h2>
                        <form className={styles.ForgetForm}>
                            <input className={styles.ForgetInput} type="text" placeholder="User" />
                            <input className={styles.ForgetSubmit} type="submit"  value="Continue" onClick={handleOpen} />
                        </form>
                </div>
            </div>
            <Modal show={showModal} handleClose={handleClose}>
                <img src={Mail} alt='Email'/>
                <h4>Email Sent</h4>
                <p className={styles.ModalContent}>Your new password has been sent to your manager’s email. Please, contact your manager to receive your password, then enter it on the login screen to access your account..</p>
                <button 
                    className={styles.ModalButton} 
                    onClick={handleClose}
                >Ok, understood</button>
            </Modal>
        </div>
    );
};

export default ForgotPassword;