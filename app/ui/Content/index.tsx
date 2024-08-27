import { useMobileDetection } from "@/app/lib/hooks/useMobileDetection";
import { ReactNode } from "react";
import styles from "./index.module.css";

type ContentProps = {
  children?: ReactNode;
};

const Content = ({ children }: ContentProps) => {
  const isMobile = useMobileDetection();
  const desktopOrMobileStyles = isMobile ? styles.mobile : styles.desktop;

  return (
    <main className={`${styles.content} ${desktopOrMobileStyles}`}>
      {children}
    </main>
  );
};

export default Content;
