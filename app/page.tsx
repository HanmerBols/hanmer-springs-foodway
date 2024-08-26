"use client";

import Image from "next/image";
import Link from "next/link";
import { Ref, RefObject, useRef, useState } from "react";
import {
  ADD_TO_CART_TEXT,
  ADDRESS,
  BANNER_SUBTITLE,
  BANNER_TITLE,
  DAILY_SPECIALS,
  DAILY_SPECIALS_HEADER,
  DAILY_SPECIALS_SUBHEADER,
  DAYS_OF_THE_WEEK,
  EMAIL_ADDRESS,
  ENQUIRIES_TEXT,
  FIRST_DAY_OF_THE_WEEK,
  LAST_DAY_OF_THE_WEEK,
  LOCATION_DESCRIPTION,
  LOCATION_HEADER,
  OPENING_HOURS,
  PHONE_NUMBER,
  REGULAR_PRICE_TEXT,
} from "./content";
import { getTodaysDayOfTheWeek } from "./lib/dates";
import { SECONDARY_FONT } from "./lib/fonts";
import { useMobileDetection } from "./lib/hooks/useMobileDetection";
import styles from "./page.module.css";
import { DailySpecial, DayOfTheWeek } from "./types";
import BottomBar from "./ui/BottomBar";
import Footer from "./ui/Footer";
import Header from "./ui/Header";
import Subheader from "./ui/Subheader";
import TopBar from "./ui/TopBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

const LandingPage = () => {
  const isMobile = useMobileDetection();
  const desktopOrMobileStyles = isMobile ? styles.mobile : styles.desktop;

  return (
    <>
      <TopBar />
      <main className={`${styles.content} ${desktopOrMobileStyles}`}>
        <Banner />
        <DailySpecials />
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

const DailySpecials = () => {
  const isMobile = useMobileDetection();
  const desktopOrMobileStyles = isMobile ? styles.mobile : styles.desktop;

  const [selectedDay, setSelectedDay] = useState(getTodaysDayOfTheWeek());
  const selectDay = (dayOfTheWeek: string) => setSelectedDay(dayOfTheWeek);

  return (
    <div className={`${styles.daily_specials} ${desktopOrMobileStyles}`}>
      <hgroup className={styles.hgroup}>
        <Subheader text={DAILY_SPECIALS_SUBHEADER} />
        <Header text={DAILY_SPECIALS_HEADER} />
      </hgroup>

      {isMobile ? (
        <></>
      ) : (
        <TabGroup selectedDay={selectedDay} selectDay={selectDay} />
      )}

      <AllTabContent selectedDay={selectedDay} />
    </div>
  );
};

type TabGroupProps = {
  selectedDay: string;
  selectDay: (dayOfTheWeek: string) => void;
};

const TabGroup = ({ selectedDay, selectDay }: TabGroupProps) => {
  return (
    <nav className={styles.tab_group}>
      {DAYS_OF_THE_WEEK.map((dayOfTheWeek) => {
        const selectedStyles =
          dayOfTheWeek === selectedDay ? styles.selected : "";

        return (
          <button
            key={`${dayOfTheWeek}-button`}
            className={`${styles.tab_button} ${selectedStyles}`}
            onClick={() => selectDay(dayOfTheWeek)}
          >
            {dayOfTheWeek}
          </button>
        );
      })}
    </nav>
  );
};

type AllTabContentProps = {
  selectedDay: string;
};

const AllTabContent = ({ selectedDay }: AllTabContentProps) => {
  const isMobile = useMobileDetection();
  const desktopOrMobileStyles = isMobile ? styles.mobile : styles.desktop;

  const ref = useRef<HTMLDivElement>(null);
  const scrollLeft = () =>
    ref.current?.scrollBy(-DAILY_SPECIAL_SCROLL_AMOUNT, 0);
  const scrollRight = () =>
    ref.current?.scrollBy(DAILY_SPECIAL_SCROLL_AMOUNT, 0);

  return (
    <div
      ref={ref}
      className={`${styles.all_tab_content} ${desktopOrMobileStyles}`}
    >
      {DAYS_OF_THE_WEEK.map((dayOfTheWeek) => (
        <TabContent
          dayOfTheWeek={dayOfTheWeek}
          selectedDay={selectedDay}
          scrollLeft={scrollLeft}
          scrollRight={scrollRight}
        />
      ))}
    </div>
  );
};

type TabContentProps = {
  selectedDay: string;
  dayOfTheWeek: DayOfTheWeek;
  scrollLeft: () => void;
  scrollRight: () => void;
};

const TabContent = (props: TabContentProps) => {
  const isMobile = useMobileDetection();

  const { dayOfTheWeek, selectedDay } = props;
  const tabContentClassName = constructTabContentClassName(
    isMobile,
    dayOfTheWeek,
    selectedDay
  );

  return (
    <div className={tabContentClassName}>
      <DailySpecialCard {...props} />
    </div>
  );
};

const DAILY_SPECIAL_SCROLL_AMOUNT = 400;

const constructTabContentClassName = (
  isMobile: boolean,
  dayOfTheWeek: DayOfTheWeek,
  selectedDay: string
) => {
  const desktopOrMobileStyles = isMobile ? styles.mobile : styles.desktop;
  const selectedStyles = dayOfTheWeek === selectedDay ? styles.selected : "";

  const firstTabStyles =
    dayOfTheWeek === FIRST_DAY_OF_THE_WEEK ? styles.first : "";
  const lastTabStyles =
    dayOfTheWeek === LAST_DAY_OF_THE_WEEK ? styles.last : "";

  return `${styles.tab_content} ${desktopOrMobileStyles} ${selectedStyles} ${firstTabStyles} ${lastTabStyles}`;
};

type DailySpecialCardProps = {
  dayOfTheWeek: DayOfTheWeek;
  scrollLeft: () => void;
  scrollRight: () => void;
};

const DailySpecialCard = (props: DailySpecialCardProps) => {
  const isMobile = useMobileDetection();
  const desktopOrMobileStyles = isMobile ? styles.mobile : styles.desktop;

  const { dayOfTheWeek } = props;
  const dailySpecial = DAILY_SPECIALS[dayOfTheWeek];

  return (
    <div className={`${styles.special_card} ${desktopOrMobileStyles}`}>
      {isMobile ? <SpecialNav {...props} /> : <></>}

      <Image
        className={`${styles.special_image} ${desktopOrMobileStyles}`}
        src={dailySpecial.imagePath}
        alt={dailySpecial.name}
        width={512}
        height={512}
      />

      <DailySpecialText dailySpecial={dailySpecial} />
    </div>
  );
};

type SpecialNavProps = {
  dayOfTheWeek: DayOfTheWeek;
  scrollLeft: () => void;
  scrollRight: () => void;
};

const SpecialNav = ({
  dayOfTheWeek,
  scrollLeft,
  scrollRight,
}: SpecialNavProps) => {
  return (
    <nav className={styles.special_nav}>
      {dayOfTheWeek === FIRST_DAY_OF_THE_WEEK ? (
        <SpecialNavButton />
      ) : (
        <SpecialNavButton scrollLeft={scrollLeft} />
      )}

      <div className={styles.day_of_the_week}>{dayOfTheWeek}</div>

      {dayOfTheWeek === LAST_DAY_OF_THE_WEEK ? (
        <SpecialNavButton />
      ) : (
        <SpecialNavButton scrollRight={scrollRight} />
      )}
    </nav>
  );
};

type SpecialNavButtonProps = {
  scrollLeft?: () => void;
  scrollRight?: () => void;
};

const SpecialNavButton = ({
  scrollLeft,
  scrollRight,
}: SpecialNavButtonProps) => {
  if (scrollLeft) {
    return (
      <button className={styles.special_nav_button} onClick={scrollLeft}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
    );
  } else if (scrollRight) {
    return (
      <button className={styles.special_nav_button} onClick={scrollRight}>
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
    );
  } else {
    return <button className={styles.special_nav_button}></button>;
  }
};

type DailySpecialTextProps = {
  dailySpecial: DailySpecial;
};

const DailySpecialText = ({ dailySpecial }: DailySpecialTextProps) => {
  const isMobile = useMobileDetection();
  const desktopOrMobileStyles = isMobile ? styles.mobile : styles.desktop;

  return (
    <div className={`${styles.special_text} ${desktopOrMobileStyles}`}>
      <hgroup>
        <h3 className={`${styles.special_name} ${desktopOrMobileStyles}`}>
          {dailySpecial.name}
        </h3>

        <div className={styles.special_price}>
          <p className={`${styles.discounted_price} ${desktopOrMobileStyles}`}>
            ${dailySpecial.discountedPrice}
          </p>
          <p className={`${styles.regular_price} ${desktopOrMobileStyles}`}>
            {REGULAR_PRICE_TEXT}: ${dailySpecial.regularPrice}
          </p>
        </div>
      </hgroup>

      <div
        className={`${styles.special_description} ${desktopOrMobileStyles} ${SECONDARY_FONT.className}`}
      >
        {dailySpecial.description}
      </div>

      <Link
        href=""
        className={`${styles.cart_button} ${desktopOrMobileStyles}`}
      >
        {ADD_TO_CART_TEXT}
      </Link>
    </div>
  );
};

const Location = () => {
  const isMobile = useMobileDetection();
  const desktopOrMobileStyles = isMobile ? styles.mobile : styles.desktop;

  return (
    <div className={`${styles.location} ${desktopOrMobileStyles}`}>
      <hgroup className={styles.hgroup}>
        <Header text={LOCATION_HEADER} />
        <Subheader text={LOCATION_DESCRIPTION} />
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
          <FontAwesomeIcon icon={faEnvelope} /> {EMAIL_ADDRESS}
        </a>
        <a
          className={`${styles.contact_method} ${desktopOrMobileStyles}`}
          href={`tel:${PHONE_NUMBER}`}
        >
          <FontAwesomeIcon icon={faPhone} /> {PHONE_NUMBER}
        </a>
      </div>
    </div>
  );
};
