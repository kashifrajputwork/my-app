import React, { useState } from 'react'
import expand from "../../assets/images/expand_more.svg";
import styles from './BetTicket.module.scss'
import { useNavigate } from 'react-router-dom';
import Modal from '../../constants/Modal';
import ButtonTab from '../../components/button';
import Button from '../../constants/Button';
import InputField from '../../constants/Input';

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
  <InputField
  style={{width: '334px'}}
    type="text"
    placeholder="Ticket Code"
  />
  <Button
    text={props.CancelBet ? "Cancel" : "Create"}
    onClick={handleOpen}
  />
</form> : 
<>
<p style={{margin: "12px 12px 12px 23px", textAlign: 'left', fontWeight: '500', fontSize: '16px'}}>How do you want to create a new bet?</p>

      <ButtonTab   label="Scan ticket"
    
        expandIcon={expand}/>
      <ButtonTab route="/TicketCode"   label="Enter the ticket code"  expandIcon={expand}/>
      </>
          }
   

        </div>
    
        <Modal size="mediumSmall" show={showModal} handleClose={handleCancelBet}>
        <h4>Cancel bet</h4>
        <p className={styles.ModalContent}>
          Are you sure you want to cancel the bet?
        </p>
        <div className={styles.ButtonWrap}>
          <Button
            style={{
              width: "148px",
              margin: "34px 0 0 auto",
              height: "auto",
              padding: "13px",
            }}
            className={styles.ModalButton}
            text="No, go back"
            onClick={handleCancelBet}
          />
          <Button
            style={{
              width: "148px",
              margin: "34px 0 0 auto",
              height: "auto",
              padding: "13px",
            }}
            text="Yes, cancel"
          />
        </div>
      </Modal>
     
      </>
  )
}

export default Bet