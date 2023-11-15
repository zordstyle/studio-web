import React, { useState } from "react";
import Image from "next/image";

import page from "@styles/Page.module.css";
import styles from "@styles/Works.module.css";

import contentData from "../../contentsData/videoData";
import ContentModal from "@components/ContentModal";
import useDetectClose from "@hooks/useDetectClose";

const Index = () => {
  const [tabs, setTabs] = useState([
    { title: "ALL", active: true },
    { title: "COMMERCIAL", active: false },
    { title: "M/V", active: false },
    { title: "CONTENTS", active: false },
    { title: "SHORTS", active: false },
  ]);
  const [currentTab, setCurrentTab] = useState("ALL");
  const [openModal, setOpenModal] = useState(false);
  const [modalData, setModalData] = useState("");
  const [modalIsOpen, modalRef, modalHandler] = useDetectClose(false);

  const changeTab = (idx) => {
    resetTab();
    setCurrentTab(tabs[idx].title);
    tabs[idx].active = true;
    setTabs([...tabs]);
  };

  const resetTab = () => {
    tabs.map((tab) => {
      tab.active = false;
    });
  };

  const openContentModal = (data) => {
    // console.log(data);
    setModalData(data);
    setOpenModal(true);
  };

  const closeContentModal = () => {
    setOpenModal(false);
  };

  return (
    <div className={page.wrap}>
      <div className={page.title}>WORKS</div>
      <div className={page.contentWrap}>
        <div className={page.contentBox}>
          <div className={styles.categoryTabBox}>
            {tabs.map((tab, idx) => (
              <div
                className={`${styles.categoryTab} ${
                  tab.active ? styles.active : ""
                }`}
                key={`categoryTab${tab.title}`}
                onClick={() => changeTab(idx)}
              >
                {tab.title}
              </div>
            ))}
          </div>
          <div className={styles.contentListWrap}>
            {contentData
              ? contentData.map((content, idx) => (
                  <div
                    className={`
                  ${styles.contentListBox}
                  ${
                    currentTab === "ALL" || currentTab === content.type
                      ? ""
                      : styles.noDisplay
                  }
                `}
                    onClick={() => {
                      openContentModal(content);
                      modalHandler();
                    }}
                    key={`videoContent${content.url}`}
                  >
                    <div className={styles.contentList}>
                      <Image
                        // src={testThumbnail}
                        src={`/images/thumbnail/${content.thumbnail}.jpg`}
                        width={300}
                        height={300}
                        alt={`${content.title} thumbnail`}
                        priority={true}
                      />
                    </div>
                  </div>
                ))
              : null}
          </div>
        </div>
      </div>
      {openModal ? (
        // const [modalIsOpen, modalRef, modalHandler] = useDetectClose(false)
        <ContentModal data={modalData} closeEvent={closeContentModal} />
      ) : null}
    </div>
  );
};

export default Index;
