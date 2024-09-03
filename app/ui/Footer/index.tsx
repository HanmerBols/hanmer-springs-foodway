import {
  COPYRIGHT_TEXT,
  PRIVACY_POLICY_TEXT,
  TERMS_AND_CONDITIONS_TEXT,
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
      <Link className={styles.footnote} href="/terms_and_conditions/">
        {TERMS_AND_CONDITIONS_TEXT}
      </Link>

      <Link className={styles.footnote} href="/privacy_policy/">
        {PRIVACY_POLICY_TEXT}
      </Link>
    </div>
  );
};
