import { WEEKLY_SALE_BUTTON_TEXT } from "@/app/content";
import Link from "next/link";
import styles from "./index.module.css";

const WeeklySaleButton = () => {
  return (
    <Link href="/weekly_sale/" className={styles.weekly_sale_button}>
      <WeeklySaleIcon /> {WEEKLY_SALE_BUTTON_TEXT}
    </Link>
  );
};

export default WeeklySaleButton;

const WeeklySaleIcon = () => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.8817 16.8439C13.524 18.3593 11.6394 19.2323 9.70861 19.2323C9.19707 19.2323 8.68553 19.167 8.18938 19.0439C6.82015 18.7054 5.65091 17.9593 4.70861 16.8246C4.67784 16.7862 2.07014 13.44 4.48938 9.44772C4.62014 9.23619 4.7663 9.04388 4.88168 8.89773C5.93553 7.5708 6.9663 5.73619 6.40476 4.92465C6.36118 4.86038 6.33822 4.78438 6.33891 4.70673C6.33961 4.62911 6.36391 4.55349 6.40861 4.49003C6.49707 4.35542 6.66245 4.29388 6.8163 4.33619C6.9663 4.3708 8.12784 4.73619 8.37784 7.03619C8.63168 6.49773 8.85476 5.77849 8.80091 4.95926C8.72014 3.71695 8.03938 2.53618 6.77399 1.44387C6.7078 1.38668 6.66326 1.30846 6.64784 1.22233C6.63245 1.1362 6.64711 1.0474 6.68938 0.970794C6.77399 0.813102 6.96245 0.732333 7.13168 0.786179C7.22015 0.809256 15.4394 3.30156 14.1932 11.8208C14.674 11.3054 15.2086 10.3054 15.0778 8.47465C15.0663 8.29388 15.1778 8.13234 15.3471 8.07849C15.5201 8.02465 15.7048 8.09772 15.7932 8.25157C15.8201 8.29772 18.4163 12.8939 14.8817 16.8439Z"
        fill="#F44336"
      />
      <path
        d="M11.7413 9.01562L9.40286 16.0002H8.29516L10.649 9.01562H11.7413ZM8.32593 9.30793C8.44389 9.30793 8.5567 9.33359 8.66439 9.38486C8.77209 9.43612 8.86697 9.50536 8.94901 9.59255C9.03105 9.67974 9.09516 9.78228 9.14132 9.90024C9.19259 10.013 9.21824 10.1336 9.21824 10.2618V11.1387C9.21824 11.272 9.19516 11.4002 9.14901 11.5233C9.10286 11.6413 9.03874 11.7438 8.9567 11.831C8.87466 11.9182 8.77978 11.9874 8.67209 12.0387C8.56439 12.09 8.44901 12.1156 8.32593 12.1156H7.70286C7.57978 12.1156 7.46439 12.09 7.3567 12.0387C7.24901 11.9874 7.15412 11.9182 7.07209 11.831C6.99005 11.7438 6.92593 11.6413 6.87978 11.5233C6.83362 11.4002 6.81055 11.272 6.81055 11.1387V10.3002C6.81055 10.1772 6.83362 10.0567 6.87978 9.9387C6.92593 9.82074 6.99005 9.71562 7.07209 9.62332C7.15412 9.52589 7.24901 9.44897 7.3567 9.39255C7.46439 9.33612 7.57978 9.30793 7.70286 9.30793H8.32593ZM8.41824 10.4925C8.41824 10.4054 8.39005 10.3336 8.33362 10.2772C8.28235 10.2156 8.22082 10.1849 8.14901 10.1849H7.87978C7.80797 10.1849 7.74389 10.2156 7.68747 10.2772C7.6362 10.3336 7.61055 10.4054 7.61055 10.4925V10.9387C7.61055 11.0207 7.6362 11.0925 7.68747 11.1541C7.74389 11.2105 7.80797 11.2387 7.87978 11.2387H8.14901C8.22082 11.2387 8.28235 11.2105 8.33362 11.1541C8.39005 11.0925 8.41824 11.0207 8.41824 10.9387V10.4925ZM12.2952 12.9002C12.4131 12.9002 12.5259 12.9259 12.6336 12.9772C12.7413 13.0284 12.8362 13.0977 12.9182 13.1849C13.0003 13.272 13.0644 13.3746 13.1105 13.4925C13.1618 13.6054 13.1875 13.7259 13.1875 13.8541V14.731C13.1875 14.8644 13.1644 14.99 13.1182 15.1079C13.0721 15.231 13.008 15.3361 12.9259 15.4233C12.8439 15.5105 12.749 15.5797 12.6413 15.631C12.5336 15.6823 12.4182 15.7079 12.2952 15.7079H11.6721C11.549 15.7079 11.4336 15.6823 11.3259 15.631C11.2182 15.5797 11.1234 15.5105 11.0413 15.4233C10.9593 15.3361 10.8952 15.231 10.849 15.1079C10.8029 14.99 10.7798 14.8644 10.7798 14.731V13.8925C10.7798 13.7695 10.8029 13.649 10.849 13.531C10.8952 13.413 10.9593 13.3079 11.0413 13.2156C11.1234 13.1182 11.2182 13.0413 11.3259 12.9849C11.4336 12.9284 11.549 12.9002 11.6721 12.9002H12.2952ZM12.3875 14.0849C12.3875 13.9977 12.3593 13.9259 12.3029 13.8695C12.2516 13.8079 12.19 13.7772 12.1182 13.7772H11.849C11.7772 13.7772 11.7131 13.8079 11.6567 13.8695C11.6054 13.9259 11.5798 13.9977 11.5798 14.0849V14.531C11.5798 14.613 11.6054 14.6823 11.6567 14.7387C11.7131 14.8002 11.7772 14.831 11.849 14.831H12.1182C12.19 14.831 12.2516 14.8002 12.3029 14.7387C12.3593 14.6823 12.3875 14.613 12.3875 14.531V14.0849Z"
        fill="white"
      />
    </svg>
  );
};
