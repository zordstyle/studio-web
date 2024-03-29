import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import styles from "@styles/Header.module.css";
import headerLogo from "@images/navi_logo.png";

const Header = () => {
  const [mobMenuOpen, setMobMenuOpen] = useState(false);

  const openMenu = () => {
    setMobMenuOpen(ture);
  };

  const closeMenu = () => {
    setMobMenuOpen(false);
  };

  return (
    <header className={styles.headerWrap} style={{ fontFamily: "Pretendard" }}>
      <div className={styles.headerBox}>
        <Link className={styles.headerLogo} href="/">
          <Image src={headerLogo} alt="header logo" />
        </Link>
        <div
          className={styles.mobMenuButton}
          onClick={() => setMobMenuOpen(!mobMenuOpen)}
        >
          <svg
            className={`${styles.menuIcon} ${mobMenuOpen ? styles.open : ""}`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox={mobMenuOpen ? "0 0 15 15" : "0 0 23 16"}
          >
            <rect className={styles.top}></rect>
            <rect className={styles.mid}></rect>
            <rect className={styles.bot}></rect>
          </svg>
          {/* <Image src={headerLogo} alt="header logo" /> */}
        </div>
      </div>
      <nav
        className={`
          ${styles.headerMenuWrap}
          ${mobMenuOpen ? styles.menuOpen : ""}
          `}
      >
        <Link className={styles.headerMenu} href="/" onClick={closeMenu}>
          HOME
        </Link>
        <Link className={styles.headerMenu} href="/about" onClick={closeMenu}>
          ABOUT
        </Link>
        <Link className={styles.headerMenu} href="/works" onClick={closeMenu}>
          WORKS
        </Link>
        <Link className={styles.headerMenu} href="/contact" onClick={closeMenu}>
          CONTACT
        </Link>
      </nav>
    </header>
  );
};

export default Header;
