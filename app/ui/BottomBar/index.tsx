import OrderButton from "../OrderButton";
import WeeklySaleButton from "../WeeklySaleButton";
import styles from "./index.module.css";

const BottomBar = () => {
  return (
    <div className={styles.bottom_bar}>
      <WeeklySaleButton />
      <OrderButton />
    </div>
  );
};

export default BottomBar;
