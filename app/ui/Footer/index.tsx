import { useMobileDetection } from "@/app/lib/hooks/useMobileDetection";
import styles from "./index.module.css";

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
  return <div>© Hanmer Foodway 2024.</div>;
};
