import React from 'react'
import scanner from "../../assets/images/document_scanner.svg";
import cancel from "../../assets/images/cancel.svg";
import expand from "../../assets/images/expand_more.svg";
import emoji from "../../assets/images/emoji_events.svg";
import User from "../../assets/images/user.svg";
import Manager from "../../assets/images/manager.svg";
import Establishment from "../../assets/images/establishment.svg";
import styles from "./Dashboard.module.scss";
import Button from '../../components/button';
import ButtonTab from '../../components/button';

const Mobile = () => {
 
  return (
    <>
        
    <ul className={styles.mobilenav}>
        <div style={{display: 'flex', flexDirection: 'column'}}>
          <li>
            <img src={User} alt="user" />
            <div >

              <h2>User</h2>
              <h3>C000001</h3>
            </div>
          </li>
          <li>
            <img src={Manager} alt="manager" />
            <div>
              <h2>Manager</h2>
              <h3>G000001</h3>
            </div>
          </li>
        </div>
          <li>
            <img src={Establishment} alt="establishment" />
            <div>
              <h2>Establishment</h2>
              <h3>MMMMMM.EE</h3>
            </div>
          </li>
       
        
        </ul>
        <div style={{display: 'flex', gap: '14px', alignItems: 'start', marginTop: '34px', flexDirection: 'column', padding: '0 14px'}}>
          <h3 style={{paddingLeft: '10px', fontSize: '22px', fontWeight: '400'}}>Bets</h3>
      <ButtonTab   label="Create new bet"
        icon={scanner}
        route="CreateBet"
        expandIcon={expand}/>
      <ButtonTab route="CancelBet" label="Cancel bet" icon={cancel} expandIcon={expand}/>
      <ButtonTab   label="Premium payment" icon={emoji}
        expandIcon={expand}/>

        </div>
    
   
     
      </>
  )
}

export default Mobile