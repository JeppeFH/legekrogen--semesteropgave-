import { useState, useEffect } from "react";

/* Hook der fetcher reviews api */
const useFetchReviews = () => {
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);

  const fetchReviews = async () => {
    try {
      const response = await fetch("https://legekrogen.webmcdm.dk/reviews");
      const data = await response.json();
      setReviews(data);
    } catch (error) {
      setError(error.message);
      console.error(error);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  return {
    reviews,
  };
};

export { useFetchReviews };
