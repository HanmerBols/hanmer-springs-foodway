import { useMobileDetection } from "@/app/lib/hooks/useMobileDetection";
import { ReactNode } from "react";
import styles from "./index.module.css";

type IntroductionProps = {
  children?: ReactNode;
};

const Introduction = ({ children }: IntroductionProps) => {
  const isMobile = useMobileDetection();
  const desktopOrMobileStyles = isMobile ? styles.mobile : styles.desktop;

  return (
    <div className={`${styles.introduction} ${desktopOrMobileStyles}`}>
      {children}
    </div>
  );
};

export default Introduction;
