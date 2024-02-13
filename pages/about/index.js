import React from "react";
import Image from "next/image";

import page from "@styles/Page.module.css";
import styles from "@styles/About.module.css";
import aboutMainImg from "@images/about_main_img.png";

const Index = () => {
  return (
    <div className={page.wrap}>
      <div className={page.title}>ABOUT</div>
      <div className={page.contentWrap}>
        <div className={page.contentBox}>
          <div className={styles.squareBox}>
            <div className={styles.logoBox}>
              <Image src={aboutMainImg} />
            </div>
            <div className={styles.squareTextBox}>
              <div className={styles.squareText}>강(江)의 옛말</div>
            </div>
          </div>
          <div className={styles.text}>
            강이 흘러 바다가 되듯,
            <br />큰 길로 나아가는 길에 영향을 미치는 영상을 만든다.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
