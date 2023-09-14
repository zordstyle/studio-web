import React, { useState, useEffect } from "react";
import styles from "@styles/Home.module.css";
import background_mp4 from "@videos/background.mp4";
import background_ogv from "@videos/background.ogv";
import background_webm from "@videos/background.webm";

const Background = ({ loading }) => {
  // const [load, setLoad] = useState(loading);
  const [hasWindow, setHasWindow] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasWindow(true);
    }
  }, [hasWindow]);

  return (
    <>
      {hasWindow && (
        <video
          onLoadedData={loading(true)}
          autoPlay
          muted
          loop
          className={styles.backgroundVideo}
        >
          <source src={background_webm} type="video/webm" />
          <source src={background_ogv} type="video/ogv" />
          <source src={background_mp4} type="video/mp4" />
        </video>
      )}
    </>
  );
};

export default Background;
