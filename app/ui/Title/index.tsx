import { useMobileDetection } from "@/app/lib/hooks/useMobileDetection";
import styles from "./index.module.css";

type TitleProps = {
  text: string;
};

const Title = ({ text }: TitleProps) => {
  const isMobile = useMobileDetection();
  const desktopOrMobileStyles = isMobile ? styles.mobile : styles.desktop;

  return <h1 className={`${styles.title} ${desktopOrMobileStyles}`}>{text}</h1>;
};

export default Title;
