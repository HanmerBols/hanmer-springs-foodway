import { EMAIL_ADDRESS, PHONE_NUMBER } from "@/app/content";
import { SECONDARY_FONT } from "@/app/lib/fonts";
import { useMobileDetection } from "@/app/lib/hooks/useMobileDetection";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./index.module.css";

type ContactMethodsProps = {
  center?: boolean;
};

const ContactMethods = ({ center }: ContactMethodsProps) => {
  const isMobile = useMobileDetection();
  const desktopOrMobileStyles = isMobile ? styles.mobile : styles.desktop;
  const alignmentStyles = center ? styles.center : "";

  return (
    <div
      className={`${styles.contact_methods} ${desktopOrMobileStyles} ${alignmentStyles} ${SECONDARY_FONT.className}`}
    >
      <a
        className={`${styles.contact_method} ${desktopOrMobileStyles}`}
        href={`mailto:${EMAIL_ADDRESS}`}
      >
        <FontAwesomeIcon icon={faEnvelope} /> {EMAIL_ADDRESS}
      </a>
      <a
        className={`${styles.contact_method} ${desktopOrMobileStyles}`}
        href={`tel:${PHONE_NUMBER}`}
      >
        <FontAwesomeIcon icon={faPhone} /> {PHONE_NUMBER}
      </a>
    </div>
  );
};

export default ContactMethods;
