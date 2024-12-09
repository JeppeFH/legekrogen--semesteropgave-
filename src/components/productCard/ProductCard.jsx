import { FcLike, FcDislike } from "react-icons/fc";
import { TbBasketPlus } from "react-icons/tb";
import styles from "./productCard.module.css";
import { Link } from "react-router-dom";
import { useLocalStorage } from "@uidotdev/usehooks";

const ProductCard = ({ product }) => {
  const [favorites, setfavorites] = useLocalStorage("Favorites", []);
  const isFavorite = favorites.includes(product.id);

  const handleLike = () => {
    /*Tilføjer eller sletter isFavorites fra localstorage*/
    /*  ? = if     : = else*/
    setfavorites((prevFavorites) =>
      isFavorite
        ? prevFavorites.filter((fav) => fav !== product.id)
        : [...prevFavorites, product.id]
    );
  };

  return (
    <figure className={styles.productCard}>
      <div className={styles.imageContainer}>
        <Link to={`/products/${product.id}`}>
          <img src={product.images[0]} alt={product.title} />
        </Link>

        <div className={styles.iconContainer}>
          {" "}
          {isFavorite ? (
            <FcDislike
              className="favoriteDislike"
              size={25}
              onClick={handleLike}
            />
          ) : (
            <FcLike className="favoriteLike" size={25} onClick={handleLike} />
          )}
          <TbBasketPlus className="basketIcon" size={25} />
        </div>
      </div>

      <h3 className={styles.productName}>{product.title}</h3>
      <h3 className={styles.productPrice}>{product.price} $</h3>
    </figure>
  );
};

export default ProductCard;
