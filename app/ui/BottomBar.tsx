import styles from "./bottom_bar.module.css";
import OrderButton from "./OrderButton";
import WeeklySaleButton from "./WeeklySaleButton";

const BottomBar = () => {
  return (
    <div className={styles.bottom_bar}>
      <WeeklySaleButton />
      <OrderButton />
    </div>
  );
};

export default BottomBar;
