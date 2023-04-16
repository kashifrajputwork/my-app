import React,{ useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthImage from "../../components/AuthImage/AuthImage";
import styles from './ForgotPassword.module.scss'
import BackArrow from '../../assets/images/back-arrow.svg'
import "react-toastify/dist/ReactToastify.css";
import InputField from "../../constants/Input";
import Button from "../../constants/Button";

const ForgotPassword = () => {
    const navigate = useNavigate();

  
    const Navigate = (e) => {
        e.preventDefault();
        navigate('/recover-password');

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
                            <InputField placeholder="User" />
                            <Button type="submit"  text="Continue" onClick={Navigate} />
                        </form>
                </div>
            </div>
        
        </div>
    );
};

export default ForgotPassword;