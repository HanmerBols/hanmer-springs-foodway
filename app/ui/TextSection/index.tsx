import { useMobileDetection } from "@/app/lib/hooks/useMobileDetection";
import { ReactNode } from "react";
import styles from "./index.module.css";

type TextSectionProps = {
  children?: ReactNode;
};

const TextSection = ({ children }: TextSectionProps) => {
  const isMobile = useMobileDetection();
  const desktopOrMobileStyles = isMobile ? styles.mobile : styles.desktop;

  return (
    <div className={`${styles.text_section} ${desktopOrMobileStyles}`}>
      {children}
    </div>
  );
};

export default TextSection;
