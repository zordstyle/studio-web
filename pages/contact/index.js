import React from "react";
import Image from "next/image";
import Link from "next/link";

import page from "@styles/Page.module.css";
import styles from "@styles/Contact.module.css";
import instagramIcon from "@images/instagram.png";
import youtubeIcon from "@images/youtube.png";
import mailIcon from "@images/mail.png";

const Index = () => {
  return (
    <div className={page.wrap}>
      <title>Contact | 가람 프로덕션</title>
      <div className={page.title}>CONTACT</div>
      <div className={page.contentWrap}>
        <div className={page.contentBox}>
          <div className={styles.contactWrap}>
            <div className={styles.googleMapWrap}>
              <div className={styles.googleMap}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d940.6110359509637!2d126.99769681998981!3d37.535606716403315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca398da42e6fb%3A0xe7c6b482dd4f613d!2z7Jyg64uI7Ja47YOA7Jq0IO2VnOuCqA!5e0!3m2!1sko!2skr!4v1693788198785!5m2!1sko!2skr"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
            <div className={styles.infoWrap}>
              <div className={styles.infoBox}>
                <div className={styles.infoTitle}>Address.</div>
                <div className={styles.infoText}>
                  <span className={styles.bold}>
                    서울시 용산구 이태원로 223-5, 유니언타운 한남점 B101호
                  </span>
                  <br></br>
                  223-5, Itaewon-ro, Yongsan-gu, Seoul, Republic of Korea
                </div>
              </div>
              <div className={styles.infoBox}>
                <div className={styles.infoTitle}>E-Mail.</div>
                <div className={styles.infoText}>
                  productiongaram@garamprod.com
                </div>
              </div>
              <div className={styles.infoBox}>
                <div className={styles.infoTitle}>Tell.</div>
                <div className={styles.infoText}>010-2481-1931</div>
              </div>
            </div>
            <div className={styles.socialWrap}>
              <Link
                className={styles.socialIcon}
                href="https://docs.google.com/forms/d/11X7NvVZOEM3_S4aEa-dkf2z6p4UeX2fToKyZHdBw67c/edit"
                target="_blank"
              >
                <Image src={mailIcon} alt="mail icon" />
              </Link>
              <Link
                className={styles.socialIcon}
                href="https://www.instagram.com/garam_production/"
                target="_blank"
              >
                <Image src={instagramIcon} alt="instagram icon" />
              </Link>
              <Link
                className={styles.socialIcon}
                href="https://www.youtube.com/channel/UCSUoGYHCGS6BaBay-PYU6nw"
                target="_blank"
              >
                <Image src={youtubeIcon} alt="youtube icon" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
