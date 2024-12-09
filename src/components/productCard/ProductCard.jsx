import styles from "./productCard.module.css";
import { Link } from "react-router-dom";
import { useLocalStorage } from "@uidotdev/usehooks";

const ProductCard = ({ product }) => {
  const [recommended] = useLocalStorage("Recommended", []);

  return (
    <figure className={styles.productCard}>
      <div className={styles.imageContainer}>
        <Link to={`/products/${product.id}`}>
          <img src={product.images[0]} alt={product.title} />
        </Link>
      </div>

      <h4>{product.title}</h4>
      <h5>{product.description}</h5>
      <p>{product.price} kr</p>
    </figure>
  );
};

export default ProductCard;
