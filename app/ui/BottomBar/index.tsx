import { usePathname } from "next/navigation";
import OrderButton from "../OrderButton";
import WeeklySaleButton from "../WeeklySaleButton";
import styles from "./index.module.css";

const BottomBar = () => {
  const pathname = usePathname();

  return (
    <div className={styles.bottom_bar}>
      {pathname === "/weekly_sale/" ? <></> : <WeeklySaleButton />}
      <OrderButton />
    </div>
  );
};

export default BottomBar;
