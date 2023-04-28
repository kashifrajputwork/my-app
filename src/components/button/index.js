import React, { useState } from 'react';
import styles from './button.module.scss';
import { useNavigate } from 'react-router-dom';
import Modal from '../../constants/Modal';
import camera from '../../assets/images/camera.svg';
import Button from '../../constants/Button';

// Separate component for custom button
const CustomButton = ({ handleClick, icon, label, expandIcon, toggleShow }) => {
  return (
    <button className={styles.btn} onClick={handleClick}>
      <div style={{ display: 'flex', gap: '14px' }}>
        {icon && <img src={icon} style={{ paddingLeft: '22px' }} />}
        <span style={!icon ? { paddingLeft: '20px' } : null}>{label}</span>
      </div>
      <img className={styles.expandIcon} src={expandIcon} onClick={toggleShow} />
    </button>
  );
};

const ButtonTab = ({ val, route, label, icon, expandIcon }) => {
  const [show, setShow] = useState(false);
  const [showPreModal, setShowPreModal] = useState(false);

  const handleOpenPreBet = (e) => {
    e.preventDefault();
    setShowPreModal(true);
  };

  const handleClosePreBet = () => {
    setShowPreModal(false);
  };

  const navigate = useNavigate();

  function handleClick(e) {
    if (route) {
      navigate(route, { state: val });
    }

    if (label === 'Scan ticket' || label === 'Premium payment') {
      handleOpenPreBet(e);
    }
  }

  return (
    <>
      <div style={{ display: 'flex', width: '100%', justifyContent: 'center' }}>
        <CustomButton
          handleClick={handleClick}
          icon={icon}
          label={label}
          expandIcon={expandIcon}
          toggleShow={() => setShow(!show)}
        />
      </div>
      <Modal show={showPreModal} handleClose={handleClosePreBet}>
        <form className={styles.BetForm}>
          <img src={camera} />
          <p>
            To scan the tickets you must allow the website to use your camera{' '}
          </p>
          <Button style={{ marginTop: '10px' }} text="Ok, continue" />
        </form>
      </Modal>
    </>
  );
};

export default ButtonTab;
