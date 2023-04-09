import React, { useState } from 'react'
import { MobileTabs, Tab, Tabs } from '../../components/Tabs'
import scanner from "../../assets/images/document_scanner.svg";
import cancel from "../../assets/images/cancel.svg";
import expand from "../../assets/images/expand_more.svg";
import emoji from "../../assets/images/emoji_events.svg";
import camera from "../../assets/images/camera.svg";
import scan from "../../assets/images/scan_barcode.svg";
import Frame from "../../assets/images/Frame.svg";
import User from "../../assets/images/user.svg";
import Manager from "../../assets/images/manager.svg";
import Establishment from "../../assets/images/establishment.svg";
import { toast } from "react-toastify";
import styles from "./Dashboard.module.scss";
import Button from '../../components/button';

const Mobile = () => {
    const [showModal, setShowModal] = useState(false);
    const [showPreModal, setShowPreModal] = useState(false);
    const [ScanTicket, setScanTicket] = useState(false);
    const [ScanCode, setScanCode] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const handleCloseToast = () => {
        setShowModal(false);
        toast.success("Successfully canceled bet", {
          toastClassName: "custom-toast-container-success-class",
          bodyClassName: "custom-toast-body-success-class",
        });
      };
    
      const handleCancelBet = () => {
        setShowModal(false);
      };
    
      const handleOpen = (e) => {
        e.preventDefault();
        setShowModal(true);
      };
    
      const handleOpenCreateBet = (e) => {
        e.preventDefault();
        toast.success("Successfully registered bet", {
          toastClassName: "custom-toast-container-success-class",
          bodyClassName: "custom-toast-body-success-class",
        });
      };
    
      const handleOpenPreBet = (e) => {
        e.preventDefault();
        toast.success("Successfully registered bet", {
          toastClassName: "custom-toast-container-success-class",
          bodyClassName: "custom-toast-body-success-class",
        });
        setShowPreModal(true);
      };
    
      const handleClosePreBet = () => {
        setShowPreModal(false);
      };
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
        <div style={{display: 'flex', gap: '14px', marginTop: '34px', flexDirection: 'column'}}>
      <Button   label="Create new bet"
        icon={scanner}
        route="CreateBet"
        expandIcon={expand}/>
      <Button route="CancelBet" label="Cancel bet" icon={cancel} expandIcon={expand}/>
      <Button   label="Premium payment" icon={emoji}
        expandIcon={expand}/>

        </div>
    
   
     
      </>
  )
}

export default Mobile