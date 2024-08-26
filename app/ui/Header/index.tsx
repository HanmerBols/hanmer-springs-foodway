import { useMobileDetection } from "@/app/lib/hooks/useMobileDetection";
import styles from "./index.module.css";

type HeaderProps = {
  text: string;
};

const Header = ({ text }: HeaderProps) => {
  const isMobile = useMobileDetection();
  const desktopOrMobileStyles = isMobile ? styles.mobile : styles.desktop;

  return (
    <h2 className={`${styles.header} ${desktopOrMobileStyles}`}>{text}</h2>
  );
};

export default Header;
