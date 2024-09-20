"use client";

import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  ADD_TO_CART_TEXT,
  ADDRESS,
  BANNER_PATH_DESKTOP,
  BANNER_PATH_MOBILE,
  BANNER_SUBTITLE,
  BANNER_TITLE,
  CATEGORIES,
  CATEGORY_CLASS_NAMES,
  CATEGORY_PATHS,
  DAILY_SPECIALS,
  DAILY_SPECIALS_HEADER,
  DAILY_SPECIALS_SUBHEADER,
  DAYS_OF_THE_WEEK,
  ENQUIRIES_TEXT,
  FIRST_DAY_OF_THE_WEEK,
  GOOGLE_MAPS_EMBED_URL,
  INTRO_FIRST_LINE,
  INTRO_SECOND_LINE,
  LAST_DAY_OF_THE_WEEK,
  LOCATION_DESCRIPTION,
  LOCATION_HEADER,
  OPENING_HOURS,
  REGULAR_PRICE_TEXT,
  VIDEO_NOT_SUPPORTED_TEXT,
} from "./content";
import { getTodaysDayOfTheWeek } from "./lib/dates";
import { SECONDARY_FONT } from "./lib/fonts";
import { useDailySpecialScroll } from "./lib/hooks/useDailySpecialScroll";
import { useMobileDetection } from "./lib/hooks/useMobileDetection";
import styles from "./page.module.css";
import { DailySpecial, DayOfTheWeek } from "./types";
import Affiliates from "./ui/Affiliates";
import BottomBar from "./ui/BottomBar";
import ContactMethods from "./ui/ContactMethods";
import Content from "./ui/Content";
import Footer from "./ui/Footer";
import Introduction from "./ui/Introduction";
import Subheader from "./ui/Subheader";
import Subtitle from "./ui/Subtitle";
import Title from "./ui/Title";
import TopBar from "./ui/TopBar";

const LandingPage = () => {
  const isMobile = useMobileDetection();

  return (
    <>
      <Affiliates />
      <TopBar />
      <Banner />
      <Content>
        <Introduction>
          <Subtitle text={INTRO_FIRST_LINE} />
          <Title text={INTRO_SECOND_LINE} />
        </Introduction>

        <Categories />
        {/* <DailySpecials /> */}
        <Location />
      </Content>
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
      <source src={BANNER_PATH_DESKTOP} type="video/mp4" />

      {VIDEO_NOT_SUPPORTED_TEXT}
    </video>
  );
};

const MobileBanner = () => {
  return (
    <Image
      className={`${styles.banner} ${styles.mobile}`}
      src={BANNER_PATH_MOBILE}
      alt={BANNER_TITLE}
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

const Categories = () => {
  const isMobile = useMobileDetection();
  const desktopOrMobileStyles = isMobile ? styles.mobile : styles.desktop;

  return (
    <nav className={`${styles.categories} ${desktopOrMobileStyles}`}>
      {CATEGORIES.map((category) => (
        <Link
          key={category}
          target="_blank"
          href={CATEGORY_PATHS[category]}
          className={`${styles.category} ${desktopOrMobileStyles} ${styles[CATEGORY_CLASS_NAMES[category]]}`}
        >
          <div className={`${styles.category_text} ${desktopOrMobileStyles}`}>
            {category}
          </div>
        </Link>
      ))}
    </nav>
  );
};

const DailySpecials = () => {
  const isMobile = useMobileDetection();
  const desktopOrMobileStyles = isMobile ? styles.mobile : styles.desktop;

  const [selectedDay, setSelectedDay] = useState(getTodaysDayOfTheWeek());

  return (
    <div className={`${styles.daily_specials} ${desktopOrMobileStyles}`}>
      <hgroup className={styles.hgroup}>
        <Subheader text={DAILY_SPECIALS_SUBHEADER} />
        <Title text={DAILY_SPECIALS_HEADER} />
      </hgroup>

      {isMobile ? (
        <></>
      ) : (
        <TabGroup selectedDay={selectedDay} selectDay={setSelectedDay} />
      )}

      <AllTabContent selectedDay={selectedDay} />
    </div>
  );
};

type TabGroupProps = {
  selectedDay: DayOfTheWeek;
  selectDay: (dayOfTheWeek: DayOfTheWeek) => void;
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
            <br />
            <SpecialBrushStroke dayOfTheWeek={dayOfTheWeek} />
          </button>
        );
      })}
    </nav>
  );
};

type SpecialBrushStrokeProps = {
  dayOfTheWeek: DayOfTheWeek;
};

const SpecialBrushStroke = ({ dayOfTheWeek }: SpecialBrushStrokeProps) => {
  const widthMap: { [dayOfTheWeek in DayOfTheWeek]: number } = {
    Monday: 90,
    Tuesday: 94,
    Wednesday: 124,
    Thursday: 102,
    Friday: 72,
    Saturday: 98,
    Sunday: 86,
  };

  const width = widthMap[dayOfTheWeek];

  return (
    <svg
      fill="none"
      width={width}
      height="16"
      viewBox="0 0 216 21"
      xmlns="http://www.w3.org/2000/svg"
      className={styles.special_brush_stroke}
    >
      <path
        d="M17.9725 6.22754L114.292 7.06114L215.547 0.000130115L206.797 11.3343L175.751 16.5225L82.1171 15.7122L0.41626 20.462L6.09935 9.59739L17.9725 6.22754Z"
        fill="url(#paint0_linear_775_168)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_775_168"
          x1="0.0958543"
          y1="8.25058"
          x2="102.042"
          y2="5.24013"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#FFB342" />
          <stop offset="1" stop-color="#FF6B57" />
        </linearGradient>
      </defs>
    </svg>
  );
};

type AllTabContentProps = {
  selectedDay: DayOfTheWeek;
};

const AllTabContent = ({ selectedDay }: AllTabContentProps) => {
  const isMobile = useMobileDetection();
  const desktopOrMobileStyles = isMobile ? styles.mobile : styles.desktop;

  const { ref, scrollLeft, scrollRight } = useDailySpecialScroll();

  return (
    <div
      ref={ref}
      className={`${styles.all_tab_content} ${desktopOrMobileStyles}`}
    >
      {DAYS_OF_THE_WEEK.map((dayOfTheWeek) => (
        <TabContent
          key={`${dayOfTheWeek}-special`}
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
    selectedDay,
  );

  return (
    <div className={tabContentClassName}>
      <DailySpecialCard {...props} />
    </div>
  );
};

const constructTabContentClassName = (
  isMobile: boolean,
  dayOfTheWeek: DayOfTheWeek,
  selectedDay: string,
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
        <LocationBrushStroke />
        <Title text={LOCATION_HEADER} />
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

const LocationBrushStroke = () => {
  const isMobile = useMobileDetection();
  const desktopOrMobileStyles = isMobile ? styles.mobile : styles.desktop;

  const color = "#93C5FF";
  const width = isMobile ? 112 : 216;
  const height = isMobile ? 12 : 21;

  return (
    <svg
      fill={color}
      width={width}
      height={height}
      viewBox="0 0 216 21"
      xmlns="http://www.w3.org/2000/svg"
      className={`${styles.location_brush_stroke} ${desktopOrMobileStyles}`}
    >
      <path
        d="M17.9725 6.22754L114.292 7.06114L215.547 0.000130115L206.797 11.3343L175.751 16.5225L82.1171 15.7122L0.41626 20.462L6.09935 9.59739L17.9725 6.22754Z"
        fill={color}
      />
    </svg>
  );
};

const Map = () => {
  const isMobile = useMobileDetection();
  const desktopOrMobileStyles = isMobile ? styles.mobile : styles.desktop;

  return (
    <iframe
      className={`${styles.map} ${desktopOrMobileStyles}`}
      src={GOOGLE_MAPS_EMBED_URL}
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

      <ContactMethods />
    </div>
  );
};
