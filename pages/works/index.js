import React, {useState} from 'react';
import Image from 'next/image';

import page from '@styles/Page.module.css'
import styles from "@styles/Works.module.css";

const Index = () => {

  const [tabs, setTabs] = useState([
    {title: 'ALL', active: true},
    {title: 'COMMERCIAL', active: false},
    {title: 'M/V', active: false},
    {title: 'CONTENTS', active: false},
    {title: 'SHORTS', active: false},
  ]);

  const changeTab = (idx) => {
    resetTab()
    tabs[idx].active = true;
    setTabs([...tabs])
  }

  const resetTab = () => {
    tabs.map((tab) => {
      tab.active = false
    })
  }

  return (
    <div className={page.wrap}>
      <div className={page.title}>WORKS</div>
      <div className={page.contentWrap}>
        <div className={page.contentBox}>
          <div className={styles.categoryTabBox}>
            { tabs.map((tab, idx) => (
              <div
                className={`${styles.categoryTab} ${tab.active ? styles.active : ""}`}
                key={`categoryTab${tab.title}`}
                onClick={() => changeTab(idx)}
              >
                {tab.title}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;