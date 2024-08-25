"use client";

import Image from "next/image";
import styles from "./top_bar.module.css";
import Link from "next/link";
import { WeeklySaleIcon } from "./CustomIcons";
import { useMobileDetection } from "../lib/hooks/useMobileDetection";

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

const WeeklySaleButton = () => {
  return (
    <Link href="" className={styles.weekly_sale_button}>
      <WeeklySaleIcon /> Weekly Sale!
    </Link>
  );
};

const OrderButton = () => {
  return (
    <Link href="" className={styles.order_button}>
      Order Now
    </Link>
  );
};
