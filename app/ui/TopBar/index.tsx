"use client";

import Image from "next/image";
import { useMobileDetection } from "../../lib/hooks/useMobileDetection";
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
      src="/hanmer_springs_foodway_logo.png"
      alt="Hanmer Springs Foodway"
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
