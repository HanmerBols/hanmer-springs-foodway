import { useMobileDetection } from "@/app/lib/hooks/useMobileDetection";
import styles from "./index.module.css";

type SubtitleProps = {
  text: string;
};

const Subtitle = ({ text }: SubtitleProps) => {
  const isMobile = useMobileDetection();
  const desktopOrMobileStyles = isMobile ? styles.mobile : styles.desktop;

  return (
    <p className={`${styles.subtitle} ${desktopOrMobileStyles}`}>{text}</p>
  );
};

export default Subtitle;
