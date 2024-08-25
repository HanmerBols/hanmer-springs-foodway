"use client";

import Image from "next/image";
import { useMobileDetection } from "../../lib/hooks/useMobileDetection";
import styles from "./index.module.css";

const Banner = () => {
  const isMobile = useMobileDetection();
  const desktopOrMobileStyles = isMobile ? styles.mobile : styles.desktop;

  return (
    <div className={`${styles.container} ${desktopOrMobileStyles}`}>
      {isMobile ? <MobileBanner /> : <DesktopBanner />}
      <BannerOverlay />
    </div>
  );
};

export default Banner;

const DesktopBanner = () => {
  return (
    <video
      className={`${styles.banner} ${styles.desktop}`}
      playsInline
      autoPlay
      muted
      loop
    >
      <source src="/landing_page/banner_desktop.webm" type="video/mp4" />
      Your browser does not support the videos.
    </video>
  );
};

const MobileBanner = () => {
  return (
    <Image
      className={`${styles.banner} ${styles.mobile}`}
      src="/landing_page/banner_mobile.png"
      alt="Enjoy food your way"
      width={390}
      height={240}
      priority
    />
  );
};

const BannerOverlay = () => {
  const isMobile = useMobileDetection();
  const desktopOrMobileStyles = isMobile ? styles.mobile : styles.desktop;

  return (
    <div className={`${styles.overlay} ${desktopOrMobileStyles}`}>
      <div className={`${styles.text} ${desktopOrMobileStyles}`}>
        <h1 className={`${styles.title} ${desktopOrMobileStyles}`}>
          Enjoy Food Your Way.
        </h1>
        <p className={`${styles.subtitle} ${desktopOrMobileStyles}`}>
          Wide selection of noodles and food bowls,<br />crafted to your taste.
        </p>
      </div>
    </div>
  );
};
