import { SECONDARY_FONT } from "@/app/lib/fonts";
import { useMobileDetection } from "@/app/lib/hooks/useMobileDetection";
import styles from "./index.module.css";

type BulletPointProps = {
  text?: string;
};

const BulletPoint = ({ text }: BulletPointProps) => {
  const isMobile = useMobileDetection();
  const desktopOrMobileStyles = isMobile ? styles.mobile : styles.desktop;

  return (
    <ul className={`${styles.list} ${desktopOrMobileStyles}`}>
      <li
        className={`${styles.bullet_point} ${desktopOrMobileStyles} ${SECONDARY_FONT.className}`}
      >
        {text}
      </li>
    </ul>
  );
};

export default BulletPoint;
