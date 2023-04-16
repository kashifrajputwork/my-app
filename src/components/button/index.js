import React, { useState } from 'react'
import styles from './button.module.scss'
import { useNavigate } from "react-router-dom";
import Modal from '../../constants/Modal';
import camera from "../../assets/images/camera.svg";
import Button from '../../constants/Button';


const ButtonTab = (props) => {
  const [activeTab, setActiveTab] = useState(0);
const [show, setShow] = useState(false);
const [showPreModal, setShowPreModal] = useState(false);

const handleOpenPreBet = (e) => {
  e.preventDefault();
  setShowPreModal(true);
};

const handleClosePreBet = () => {
  setShowPreModal(false);
};
const handleTabClick = (index) => {
  setActiveTab(index);
};


const navigate = useNavigate();

  function handleClick(e) {
    if(props.route){

      navigate(props.route);
    }
console.log(props.label, "asdasd")
    if(props.label == "Scan ticket"){
      handleOpenPreBet(e)
      console.log("hello")
    }
    if(props.label == "Premium payment"){
      handleOpenPreBet(e)
    }
  }
  return (
    <>
        <div style={{display: "flex", width: "100%", justifyContent: "center"}}>
        <button className={styles.btn} onClick={handleClick}>
          <div style={{display: 'flex', gap: '15px'}}>
         <img src={props.icon}/>
         <span>{props.label}</span> 
          </div>
         <img className={styles.expandIcon} src={props.expandIcon} onClick={()=> setShow(!show)}/>
        </button>
    
    </div>
      <Modal show={showPreModal} handleClose={handleClosePreBet}>
      <form
              style={{
                justifyContent: "center",
                alignItems: "center",
                gap: "12px",
                display: "flex",
                flexDirection: "column",
              }}
              className={styles.BetForm}
            >
              <img src={camera} />
              <p style={{fontSize: '22px'}}>
                To scan the tickets you must allow the website to use your
                camera{" "}
              </p>
              <Button
                  // className={styles.BetFormSubmit}
                  style={{marginTop: '10px'}}
                  text="Ok, continue"
                />
            </form>
            
      {/* <p className={styles.ModalContent}>
        To collect the prize amount, please go to one of our physical stores
      </p>
      <button className={styles.ModalYesButton} onClick={handleClosePreBet}>
        Ok, understood
      </button> */}
    </Modal>

    </>
  )
}

export default ButtonTab