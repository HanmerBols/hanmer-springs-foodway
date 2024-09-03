import { ReactNode } from "react";
import styles from "./index.module.css";

type TextSectionsProps = {
  children?: ReactNode;
};

const TextSections = ({ children }: TextSectionsProps) => {
  return <div className={styles.sections}>{children}</div>;
};

export default TextSections;
