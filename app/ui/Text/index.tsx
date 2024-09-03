import { SECONDARY_FONT } from "@/app/lib/fonts";
import { useMobileDetection } from "@/app/lib/hooks/useMobileDetection";
import styles from "./index.module.css";

type TextProps = {
  text?: string;
};

const Text = ({ text }: TextProps) => {
  const isMobile = useMobileDetection();
  const desktopOrMobileStyles = isMobile ? styles.mobile : styles.desktop;

  return (
    <p
      className={`${styles.text} ${desktopOrMobileStyles} ${SECONDARY_FONT.className}`}
    >
      {text}
    </p>
  );
};

export default Text;
