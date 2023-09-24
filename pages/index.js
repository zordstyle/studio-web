import Head from "next/head";
import Image from "next/image";
import React, { useEffect, useState } from "react";

import styles from "@styles/Home.module.css";
import homeLogo from "@images/logo_home.png";
import loadginLogo from "@images/navi_logo.png";
import Background from "@components/Background";

export default function Home() {
  const [videoLoad, setVideoLoad] = useState(false);

  return (
    <>
      <Head>
        <title>Studio Web</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Background loading={setVideoLoad} />
      {videoLoad && (
        <main className={styles.homeWrap}>
          <div className={styles.homeLogoWrap}>
            <Image src={homeLogo} alt="home logo" />
          </div>
        </main>
      )}
      <div className={`${styles.loadingWrap} ${videoLoad && styles.hide}`}>
        <div className={styles.loadingLogoBox}>
          <Image src={loadginLogo} alt="home logo" />
        </div>
      </div>
    </>
  );
}
