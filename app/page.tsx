"use client";

import Image from "next/image";
import {
  ADDRESS,
  BANNER_SUBTITLE,
  BANNER_TITLE,
  EMAIL_ADDRESS,
  ENQUIRIES_TEXT,
  LOCATION_DESCRIPTION,
  LOCATION_HEADER,
  OPENING_HOURS,
  PHONE_NUMBER,
} from "./content";
import { SECONDARY_FONT } from "./lib/fonts";
import { useMobileDetection } from "./lib/hooks/useMobileDetection";
import styles from "./page.module.css";
import BottomBar from "./ui/BottomBar";
import Footer from "./ui/Footer";
import TopBar from "./ui/TopBar";

const LandingPage = () => {
  const isMobile = useMobileDetection();
  const desktopOrMobileStyles = isMobile ? styles.mobile : styles.desktop;

  return (
    <>
      <TopBar />
      <main className={`${styles.content} ${desktopOrMobileStyles}`}>
        <Banner />
        <Location />
      </main>
      <Footer />
      {isMobile ? <BottomBar /> : <></>}
    </>
  );
};

export default LandingPage;

const Banner = () => {
  const isMobile = useMobileDetection();
  const desktopOrMobileStyles = isMobile ? styles.mobile : styles.desktop;

  return (
    <div className={`${styles.banner_container} ${desktopOrMobileStyles}`}>
      {isMobile ? <MobileBanner /> : <DesktopBanner />}
      <BannerOverlay />
    </div>
  );
};

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
    <div className={`${styles.banner_overlay} ${desktopOrMobileStyles}`}>
      <div className={`${styles.banner_text} ${desktopOrMobileStyles}`}>
        <h1 className={`${styles.banner_title} ${desktopOrMobileStyles}`}>
          {BANNER_TITLE}
        </h1>
        <p
          className={`${styles.banner_subtitle} ${desktopOrMobileStyles} ${SECONDARY_FONT.className}`}
        >
          {BANNER_SUBTITLE}
        </p>
      </div>
    </div>
  );
};

const Location = () => {
  const isMobile = useMobileDetection();
  const desktopOrMobileStyles = isMobile ? styles.mobile : styles.desktop;

  return (
    <div className={`${styles.location} ${desktopOrMobileStyles}`}>
      <hgroup className={styles.hgroup}>
        <h2 className={`${styles.header} ${desktopOrMobileStyles}`}>
          {LOCATION_HEADER}
        </h2>
        <p className={`${styles.subheader} ${desktopOrMobileStyles}`}>
          {LOCATION_DESCRIPTION}
        </p>
      </hgroup>

      <address
        className={`${styles.location_content} ${desktopOrMobileStyles}`}
      >
        <Map />

        <div className={`${styles.location_text} ${desktopOrMobileStyles}`}>
          <LocationDetails />
          <ContactDetails />
        </div>
      </address>
    </div>
  );
};

const Map = () => {
  const isMobile = useMobileDetection();
  const desktopOrMobileStyles = isMobile ? styles.mobile : styles.desktop;

  return (
    <iframe
      className={`${styles.map} ${desktopOrMobileStyles}`}
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2940.525757186492!2d172.8273702760544!3d-42.52288517117818!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d306303863472c9%3A0x99c0713021842c4b!2sHanmer%20Springs%20Foodway!5e0!3m2!1sen!2snz!4v1718272202335!5m2!1sen!2snz"
      referrerPolicy="no-referrer-when-downgrade"
      allowFullScreen
      loading="lazy"
    ></iframe>
  );
};

const LocationDetails = () => {
  const isMobile = useMobileDetection();
  const desktopOrMobileStyles = isMobile ? styles.mobile : styles.desktop;

  return (
    <div className={`${styles.location_details} ${desktopOrMobileStyles}`}>
      <h3 className={`${styles.address} ${desktopOrMobileStyles}`}>
        {ADDRESS}
      </h3>
      <p
        className={`${styles.opening_hours} ${desktopOrMobileStyles} ${SECONDARY_FONT.className}`}
      >
        {OPENING_HOURS}
      </p>
    </div>
  );
};

const ContactDetails = () => {
  const isMobile = useMobileDetection();
  const desktopOrMobileStyles = isMobile ? styles.mobile : styles.desktop;

  return (
    <div className={`${styles.contact_details} ${desktopOrMobileStyles}`}>
      <h3 className={`${styles.enquiries} ${desktopOrMobileStyles}`}>
        {ENQUIRIES_TEXT}
      </h3>

      <div
        className={`${styles.contact_methods} ${desktopOrMobileStyles} ${SECONDARY_FONT.className}`}
      >
        <a
          className={`${styles.contact_method} ${desktopOrMobileStyles}`}
          href={`mailto:${EMAIL_ADDRESS}`}
        >
          {EMAIL_ADDRESS}
        </a>
        <a
          className={`${styles.contact_method} ${desktopOrMobileStyles}`}
          href={`tel:${PHONE_NUMBER}`}
        >
          {PHONE_NUMBER}
        </a>
      </div>
    </div>
  );
};
