import { COPYRIGHT_TEXT } from "@/app/content";
import { useMobileDetection } from "@/app/lib/hooks/useMobileDetection";
import styles from "./index.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";

const Footer = () => {
  const isMobile = useMobileDetection();
  const desktopOrMobileStyles = isMobile ? styles.mobile : styles.desktop;

  return (
    <footer className={`${styles.footer} ${desktopOrMobileStyles}`}>
      <Copyright />
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
