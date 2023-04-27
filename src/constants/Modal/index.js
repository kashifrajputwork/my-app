import React from 'react';
import styles from './Modal.module.scss';

const Modal = ({
    show,
    handleClose,
    children,
    size = '',
    className = '',
    // closeButton = true,
}) => {
    const handleClickOverlay = (event) => {
        if (event.target === event.currentTarget) {
            handleClose(event);
        }
    };

    const modalSizeClass = {
        small: styles.ModalSmall,
        mediumSmall: styles.ModalMediumSmall,
        medium: styles.ModalMedium,
        large: styles.ModalLarge,
    };

    // const closeButtonElement = closeButton ? (
    //     <button
    //         type="button"
    //         className={styles.CloseButton}
    //         onClick={handleClose}
    //     >
    //         &times;
    //     </button>
    // ) : null;

    return (
        <div
            className={
                show ? `${styles.ModalOpen} ${className}` : `${styles.ModalClosed} ${className}`
            }
            onClick={handleClickOverlay}
        >
            <div className={`${styles.Modal} ${modalSizeClass[size]}`}>
                {children}
            </div>
        </div>
    );
};

export default Modal;
