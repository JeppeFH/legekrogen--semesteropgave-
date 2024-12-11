import styles from "./shipping.module.css";
import { MdLocalShipping } from "react-icons/md";

const Shipping = () => {
  return (
    <>
      <div className={styles.shippingContainer}>
        <MdLocalShipping size={13} color="#355675" />
        <p>Fri fragt ved køb over 499,-</p>
      </div>
    </>
  );
};

export default Shipping;
