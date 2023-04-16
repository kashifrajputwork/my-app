import React, { useState } from "react";
import Logo from "../../assets/images/Logo.svg";
import { Link } from "react-router-dom";
import User from "../../assets/images/newIcons/person.svg";
import Manager from "../../assets/images/newIcons/manage_accounts.svg";
import Establishment from "../../assets/images/newIcons/establishment.svg";
import Logout from "../../assets/images/logout.svg";
import styles from "./PanelHead.module.scss";

const PannelHead = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="container" style={{background: "#60A626"}}>
      <div className={styles.PannelHead}>
        <Link>
          <img className={styles.logo} src={Logo} alt="logo" />
        </Link>
        <nav style={{display: 'flex', color: '#fff'}}>
          {/* <div className={styles.Hamburger} onClick={() => setOpen(!open)}>
            <span className={`${open ? `${styles.Ham1active}` : '' }`}></span>
            <span className={`${open ? `${styles.Ham2active}` : '' }`}></span>
            <span className={`${open ? `${styles.Ham3active}` : '' }`}></span>
          </div> */}
          <ul className={styles.hide}>
            <li>
              <img src={User} alt="user" />
              <div >
                <h2>User</h2>
                <h3>C000001</h3>
              </div>
            </li>
            <li>
              <img src={Establishment} alt="establishment" />
              <div>
                <h2>Establishment</h2>
                <h3>MMMMMM.EE</h3>
              </div>
            </li>
            <li>
              <img src={Manager} alt="manager" />
              <div>
                <h2>Manager</h2>
                <h3>G000001</h3>
              </div>
            </li>
          
          </ul>
              <Link to="/">
                <h3 className={styles.logout} >Log out</h3>
                <img src={Logout} alt="logout" />
              </Link>
         
        </nav>
      </div>
    </div>
  );
};

export default PannelHead;
