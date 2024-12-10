import styles from "./productCard.module.css";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <figure className={styles.productCard}>
      <div className={styles.imageContainer}>
        <Link to={`/products/${product._id}`}>
          <img src={product.image} alt={product.title} />
        </Link>
      </div>

      <div className={styles.productCardInfo}>
        <h4>{product.title}</h4>
        <h5>{product.description}</h5>
        <p>{product.price} kr</p>
      </div>
    </figure>
  );
};

export default ProductCard;
