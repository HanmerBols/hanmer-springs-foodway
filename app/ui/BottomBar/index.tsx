import { WEEKLY_SALE_URL } from "@/app/content";
import { usePathname } from "next/navigation";
import OrderButton from "../OrderButton";
import WeeklySaleButton from "../WeeklySaleButton";
import styles from "./index.module.css";

const BottomBar = () => {
  const pathname = usePathname();

  return (
    <div className={styles.bottom_bar}>
      {pathname === WEEKLY_SALE_URL ? <></> : <WeeklySaleButton />}
      <OrderButton />
    </div>
  );
};

export default BottomBar;
