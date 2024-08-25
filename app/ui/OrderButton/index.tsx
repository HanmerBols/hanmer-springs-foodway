import { ORDER_BUTTON_TEXT } from "@/app/content";
import Link from "next/link";
import styles from "./index.module.css";

const OrderButton = () => {
  return (
    <Link href="" className={styles.order_button}>
      {ORDER_BUTTON_TEXT}
    </Link>
  );
};

export default OrderButton;
