import { useState } from "react";
import styles from "./quantityCount.module.css";

const QuantityCount = ({ stock }) => {
  /* UseState der tracker mængden startende fra 1 */
  const [quantity, setQuantity] = useState(1);

  /* Øger antallet for hvert + klik, hvis antallet er mindre end stock value grænsen */
  const increment = () => {
    if (quantity < stock) {
      setQuantity((prevQuantity) => prevQuantity + 1);
    }
  };

  /* Hvis antallet er større end 1 mindskes antallet for hvert - klik */
  const decrement = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  return (
    <figure className={styles.quantityCount}>
      <p className={styles.DecreBtn} onClick={decrement}>
        -
      </p>
      <p className={styles.quantity}>{quantity}</p>
      <p className={styles.IncreBtn} onClick={increment}>
        +
      </p>
    </figure>
  );
};

export default QuantityCount;
