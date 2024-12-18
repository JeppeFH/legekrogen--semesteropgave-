import styles from "./customerReviews.module.css";
import { useFetchReviews } from "../../hooks/useFetchReviews";

const CustomerReviews = () => {
  const { reviews } = useFetchReviews();

  return (
    <div className={styles.customerReviews}>
      <h2>Vores kunder</h2>
      <h3>UDTALER</h3>

      <div className={styles.reviewsContainer}>
        {reviews.map((r, index) => (
          <div key={index}>
            <p>{r.description}</p>
            <p>{r.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerReviews;
