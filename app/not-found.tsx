"use client";

import Link from "next/link";
import {
  HOME_URL,
  NOT_FOUND_ERROR_DESCRIPTION,
  NOT_FOUND_ERROR_TITLE,
  RETURN_HOME_TEXT,
} from "./content";
import { useMobileDetection } from "./lib/hooks/useMobileDetection";
import styles from "./page.module.css";
import BottomBar from "./ui/BottomBar";
import Content from "./ui/Content";
import Footer from "./ui/Footer";
import Subtitle from "./ui/Subtitle";
import Title from "./ui/Title";
import TopBar from "./ui/TopBar";
import Subheader from "./ui/Subheader";

const NotFoundPage = () => {
  const isMobile = useMobileDetection();

  return (
    <>
      <TopBar />
      <Content>
        <NotFoundText />
      </Content>
      <Footer />
      {isMobile ? <BottomBar /> : <></>}
    </>
  );
};

export default NotFoundPage;

const NotFoundText = () => {
  const isMobile = useMobileDetection();
  const desktopOrMobileStyles = isMobile ? styles.mobile : styles.desktop;

  return (
    <div className={`${styles.not_found_text} ${desktopOrMobileStyles}`}>
      <Title text={NOT_FOUND_ERROR_TITLE} />
      <Subheader text={NOT_FOUND_ERROR_DESCRIPTION} />
      <Link href={HOME_URL} className={styles.return_home_button}>
        {RETURN_HOME_TEXT}
      </Link>
    </div>
  );
};
