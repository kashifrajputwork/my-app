import React from "react";
import { Link } from "react-router-dom";
import AuthImage from "../../components/AuthImage/AuthImage";
import styles from './RecoverPassword.module.scss'
import BackArrow from '../../assets/images/back-arrow.svg'
import Eye from '../../assets/images/eye.svg'

const RecoverPassword = () => {
    return (
        <div className={styles.RecoverPasswordWrapper}>
                <div className={styles.RecoverInner}>
                <AuthImage />
                <div className={styles.Recover}>
                        <div className={styles.RecoverTop}>
                            <Link to="/"><img src={BackArrow} alt="back arrow"/></Link>
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
                        <div className={styles.RecoverInput}>
                <input type="password" placeholder="New Password"/>
                <img src={Eye} alt="eye"/>
                
                </div>
                        <div className={styles.RecoverInput}>
                <input type="password" placeholder="Confirm new password"/>
                <img src={Eye} alt="eye"/>
                
                </div>
                           
                            <input className={styles.RecoverSubmit} type="submit"  value="Continue"/>
                        </form>
                </div>
                </div>
        </div>
    );
};

export default RecoverPassword;