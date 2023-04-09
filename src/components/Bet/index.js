import React, { useState } from 'react'
import expand from "../../assets/images/expand_more.svg";
import Button from '../../components/button';
import styles from './BetTicket.module.scss'
import { useNavigate } from 'react-router-dom';
import Modal from '../../constants/Modal';

const Bet = (props) => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  function handleGoBack() {
    navigate("/");
  }
  const handleCancelBet = () => {
    setShowModal(false);
  };
  const handleOpen = (e) => {
    e.preventDefault();
    setShowModal(true);
  };
  return (
    <>
    <div className={styles.top}>
      <img onClick={handleGoBack} src={expand}/>
      {props.CancelBet ?
        <h4>Cancel new bet</h4>
: props.PremiumPayment ?<h4>Premium Payment</h4> : <h4>Create new bet</h4>
      }
    </div>
    
        <div style={{display: 'flex', gap: '14px', marginTop: '34px', flexDirection: 'column'}}>
          {props.TicketCode ?
  <form className={styles.BetForm}>
  <input
    className={styles.BetFormInput}
    type="text"
    placeholder="Ticket Code"
  />
  <input
    className={styles.BetFormSubmit}
    type="submit"
    value={props.CancelBet ? "Cancel" : "Create"}
    onClick={handleOpen}
  />
</form> : 
<>
<p style={{margin: "12px"}}>How do you want to create a new bet?</p>

      <Button   label="Scan ticket"
    
        expandIcon={expand}/>
      <Button route="/TicketCode"   label="Enter the ticket code"  expandIcon={expand}/>
      </>
          }
   

        </div>
    
        <Modal show={showModal} handleClose={handleCancelBet}>
      <h4>Cancel bet</h4> 
        <p className={styles.ModalContent}>
          Are you sure you want to cancel the bet
        </p>
        <div className={styles.ButtonWrap}>
          <button className={styles.ModalButton} onClick={handleCancelBet}>
            No, go back
          </button>
          <button className={styles.ModalYesButton} >
            Yes, 
          </button>
        </div>
      </Modal>
     
      </>
  )
}

export default Bet