import { ORDER_BUTTON_TEXT, ORDERING_SYSTEM_URL } from "@/app/content";
import Link from "next/link";
import styles from "./index.module.css";

const OrderButton = () => {
  return (
    <Link
      target="_blank"
      href={ORDERING_SYSTEM_URL}
      className={styles.order_button}
    >
      {ORDER_BUTTON_TEXT}
    </Link>
  );
};

export default OrderButton;
