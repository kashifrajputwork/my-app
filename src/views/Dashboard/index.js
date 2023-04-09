import React, { useState, useEffect } from "react";
import PannelHead from "../../components/PanelHead/PanelHead";
import styles from "./Dashboard.module.scss";
import { Tabs, Tab } from "../../components/Tabs";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Modal from "../../constants/Modal";
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
import Mobile from "./Mobile";
import { useMediaQuery } from 'react-responsive'
const Dashboard = () => {
  const [showModal, setShowModal] = useState(false);
  const [showPreModal, setShowPreModal] = useState(false);
  const [ScanTicket, setScanTicket] = useState(false);
  const [ScanCode, setScanCode] = useState(false);
  const isMobile = useMediaQuery({ query: '(max-width: 468px)' })


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
    <div className={styles.Dashboard}>
      <PannelHead />

      {isMobile ? <Mobile/>
    :     <Tabs>
    <ul >
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
      <Tab
        label="Create new bet"
        icon={scanner}
        expandIcon={expand}
        setScanTicket={setScanTicket}
      >
        {ScanTicket ? (
          ScanCode ? (
            <>
            
            <img src={scan} />
            <p style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', marginTop: '12px'}}><img src={Frame} /> Put the barcode on the center of the camera</p>
            </>

          ) : (
            <form
              style={{
                justifyContent: "center",
                alignItems: "center",
                gap: "24px",
              }}
              className={styles.BetForm}
            >
              <img src={camera} />
              <p>
                To scan the tickets you must allow the website to use your
                camera{" "}
              </p>
              <input
                className={styles.BetFormSubmit}
                type="submit"
                value="Ok, continue"
                onClick={() => setScanCode(!ScanCode)}
              />
            </form>
          )
        ) : (
          <form className={styles.BetForm}>
            <input
              className={styles.BetFormInput}
              type="text"
              placeholder="Ticket Code"
            />
            <input
              className={styles.BetFormSubmit}
              type="submit"
              value="Create"
              onClick={handleOpenCreateBet}
            />
          </form>
        )}
      </Tab>
      <Tab label="Cancel bet" icon={cancel} expandIcon={expand}>
        <form className={styles.BetForm}>
          <input
            className={styles.BetFormInput}
            placeholder="Ticket code"
            type="text"
          />
          <input
            className={styles.BetFormSubmit}
            type="submit"
            value="Cancel"
            placeholder="Cancel bet"
            onClick={handleOpen}
          />
        </form>
      </Tab>
      <Tab label="Premium payment" icon={emoji}>
        {
            ScanCode ? (
              <>
              
              <img src={scan} style={{maxWidth: '100%'}} />
              <p style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', marginTop: '12px'}}><img src={Frame} /> Put the barcode on the center of the camera</p>
              </>)
              :    
              <form
              style={{
                justifyContent: "center",
                alignItems: "center",
                gap: "24px",
              }}
              className={styles.BetForm}
            >
              <img src={camera} />
              <p>
                To scan the tickets you must allow the website to use your camera{" "}
              </p>
              <input
                className={styles.BetFormSubmit}
                type="submit"
                value="Ok, continue"
                onClick={() => setScanCode(!ScanCode)}/>
            </form>
        }
    
     
      </Tab>
    </Tabs>
    }
   
      <Modal show={showModal} handleClose={handleCancelBet}>
      <h4>Cancel bet</h4> 
        <p className={styles.ModalContent}>
          Are you sure you want to cancel the bet
        </p>
        <div className={styles.ButtonWrap}>
          <button className={styles.ModalButton} onClick={handleCancelBet}>
            No, go back
          </button>
          <button className={styles.ModalYesButton} onClick={handleCloseToast}>
            Yes, cancel
          </button>
        </div>
      </Modal>
      <Modal show={showPreModal} handleClose={handleClosePreBet}>
        <div className={styles.ModalBox}></div>
        <p className={styles.ModalContent}>
          To collect the prize amount, please go to one of our physical stores
        </p>
        <button className={styles.ModalYesButton} onClick={handleClosePreBet}>
          Ok, understood
        </button>
      </Modal>
    </div>
  );
};

export default Dashboard;
