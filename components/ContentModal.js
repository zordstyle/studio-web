import React from 'react';
import Image from "next/image"
import ReactPlayer from 'react-player';
import styles from '@styles/Modal.module.css';
import closeIcon from '@images/close_icon.png';

const ContentModal = ({
    data,
    open = true,
    closeEvent,
}) => {

    console.log(data);

    return (
        open ? (
          <>
              <div className={styles.modalWrap}>
                  <div className={styles.modalHeader}>
                      <div
                        className={styles.modalClose}
                        onClick={closeEvent}
                      >
                          <Image src={closeIcon} alt="close button"/>
                      </div>
                  </div>
                  <div className={styles.modalBody}>
                      <div className={styles.videoWrap}>
                          <ReactPlayer
                            className={styles.videoBox}
                            url={data.url}
                            width="100%"
                            height="100%"
                          />
                      </div>
                  </div>
              </div>
              <div className={styles.modalBackground}></div>
          </>

    ) : null
    );

};

export default ContentModal;