"use client";

import { LOGO_DESCRIPTION, LOGO_IMAGE_PATH } from "@/app/content";
import { useMobileDetection } from "@/app/lib/hooks/useMobileDetection";
import Image from "next/image";
import OrderButton from "../OrderButton";
import WeeklySaleButton from "../WeeklySaleButton";
import styles from "./index.module.css";

const TopBar = () => {
  const isMobile = useMobileDetection();
  const desktopOrMobileStyles = isMobile ? styles.mobile : styles.desktop;

  return (
    <header className={`${styles.top_bar} ${desktopOrMobileStyles}`}>
      <Logo />

      {isMobile ? <></> : <Buttons />}
    </header>
  );
};

export default TopBar;

const Logo = () => {
  const isMobile = useMobileDetection();
  const desktopOrMobileStyles = isMobile ? styles.mobile : styles.desktop;

  return (
    <Image
      src={LOGO_IMAGE_PATH}
      alt={LOGO_DESCRIPTION}
      width={178}
      height={60}
      className={`${styles.logo} ${desktopOrMobileStyles}`}
    />
  );
};

const Buttons = () => {
  return (
    <div className={styles.buttons}>
      <WeeklySaleButton />
      <OrderButton />
    </div>
  );
};
