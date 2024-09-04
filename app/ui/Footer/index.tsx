import {
  COPYRIGHT_TEXT,
  ORDERING_SYSTEM_ADMIN_TEXT,
  ORDERING_SYSTEM_ADMIN_URL,
  PRIVACY_POLICY_TEXT,
  PRIVACY_POLICY_URL,
  TERMS_AND_CONDITIONS_TEXT,
  TERMS_AND_CONDITIONS_URL,
} from "@/app/content";
import { useMobileDetection } from "@/app/lib/hooks/useMobileDetection";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import styles from "./index.module.css";

const Footer = () => {
  const isMobile = useMobileDetection();
  const desktopOrMobileStyles = isMobile ? styles.mobile : styles.desktop;

  return (
    <footer className={`${styles.footer} ${desktopOrMobileStyles}`}>
      <Copyright />
      <Footnotes />
    </footer>
  );
};

export default Footer;

const Copyright = () => {
  return (
    <div>
      <FontAwesomeIcon icon={faCopyright} /> {COPYRIGHT_TEXT}
    </div>
  );
};

const Footnotes = () => {
  const isMobile = useMobileDetection();
  const desktopOrMobileStyles = isMobile ? styles.mobile : styles.desktop;

  return (
    <div className={`${styles.footnotes} ${desktopOrMobileStyles}`}>
      <Link className={styles.footnote} href={TERMS_AND_CONDITIONS_URL}>
        {TERMS_AND_CONDITIONS_TEXT}
      </Link>
      •
      <Link className={styles.footnote} href={PRIVACY_POLICY_URL}>
        {PRIVACY_POLICY_TEXT}
      </Link>
      •
      <Link
        className={styles.footnote}
        href={ORDERING_SYSTEM_ADMIN_URL}
        target="_blank"
      >
        {ORDERING_SYSTEM_ADMIN_TEXT}
      </Link>
    </div>
  );
};
