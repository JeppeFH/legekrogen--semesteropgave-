import styles from "./addToCartButton.module.css";
import { SlBasket } from "react-icons/sl";

const AddToCartButton = () => {
  return (
    <div className={styles.addToCartBtn}>
      <SlBasket />
      <button>Add to cart</button>
    </div>
  );
};

export default AddToCartButton;
