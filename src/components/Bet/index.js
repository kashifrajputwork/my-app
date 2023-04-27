import React, { useState } from 'react'
import expand from "../../assets/images/expand_more.svg";
import styles from './BetTicket.module.scss'
import { useNavigate } from 'react-router-dom';
import Modal from '../../constants/Modal';
import ButtonTab from '../../components/button';
import Button from '../../constants/Button';
import InputField from '../../constants/Input';
import { toast } from 'react-toastify';

const Bet = (props) => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [ticketCode, setTicketCode] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleOpen = (e) => {
    e.preventDefault();

    if (ticketCode.trim() === "") {
      setErrorMessage("Please enter a ticket code.");
    } else {
      setErrorMessage("");
      setShowModal(true);
    }
  };
  function handleGoBack() {
    navigate("/");
  }
  const handleCancelBet = () => {
    toast.success("Successfully canceled bet", {
      position: toast.POSITION.TOP_CENTER
    });
    setShowModal(false);

   
  };
 
  return (
    <>
    <div className={styles.top}>
      <img onClick={handleGoBack} src={expand}/>
      {props.CancelBet ?
        <h4>Cancel bet</h4>
: props.PremiumPayment ?<h4>Premium Payment</h4> : <h4>Create new bet</h4>
      }
    </div>
    
        <div style={{display: 'flex', gap: '12px',  flexDirection: 'column'}}>
          {props.TicketCode ?
  <form className={styles.BetForm}>
  <InputField
    style={{ width: '334px' }}
    type="text"
    placeholder="Ticket Code"
    value={ticketCode}
    onChange={(e) => setTicketCode(e.target.value)}
  />
  {errorMessage && (
    <p className={styles.ErrorMessage}>{errorMessage}</p>
  )}
  <Button
    style={{ width: '334px' }}
    text={props.CancelBet ? 'Cancel' : 'Create'}
    onClick={handleOpen}
  />
</form> : 
<>
<p style={{margin: "50px 12px 12px 24px", textAlign: 'left', fontWeight: '500', fontSize: '16px'}}>{props.CancelBet ? 'How do you want to cancel the bet?': 'How do you want to create a new bet?'}</p>

      <ButtonTab   label="Scan ticket"
    
        expandIcon={expand}/>
      <ButtonTab route="/TicketCode" val={props.CancelBet ? 'cancel' : 'create'}   label="Enter the ticket code"  expandIcon={expand}/>
      </>
          }
   

        </div>
    
        <Modal size="mediumSmall" show={showModal} handleClose={()=>  setShowModal(false)}>
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
            />
          <Button
            onClick={handleCancelBet}
            style={{
              width: "148px",
              margin: "34px 0 0 auto",
              height: "auto",
              padding: "13px",
            }}
            text="Yes"
          />
        </div>
      </Modal>
     
      </>
  )
}

export default Bet