import React from 'react';
import styles from '@styles/Modal.module.css'

const ContentModal = ({
    data,
    closeEvent,
}) => {

    console.log(data);

    return (
        <>
            <div className={styles.modalWrap}>
                <div className={styles.modalHeader}>
                    <div 
                        className={styles.modalClose}
                        onClick={closeEvent}
                    >X
                    </div>
                </div>
            </div>
            <div className={styles.modalBackground}></div>
        </>
    );
};

export default ContentModal;