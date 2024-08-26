import { useMobileDetection } from "@/app/lib/hooks/useMobileDetection";
import styles from "./index.module.css";

type SubheaderProps = {
  text: string;
};

const Subheader = ({ text }: SubheaderProps) => {
  const isMobile = useMobileDetection();
  const desktopOrMobileStyles = isMobile ? styles.mobile : styles.desktop;

  return (
    <p className={`${styles.subheader} ${desktopOrMobileStyles}`}>{text}</p>
  );
};

export default Subheader;
