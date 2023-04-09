import React from 'react';
import styles from './Modal.module.scss'

const Modal = (props) => {
    const handleClickOverlay = (event) => {
        if (event.target === event.currentTarget) {
            props.handleClose();
        }
    };
    return (
        <div className={props.show ? `${styles.ModalOpen}`: `${styles.ModalClosed}`} onClick={handleClickOverlay}> 
            <div className={styles.Modal}>
                {props.children}
            </div>
        </div>
    );
};

export default Modal;