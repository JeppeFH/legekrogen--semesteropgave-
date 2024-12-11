import { useState, useEffect } from "react";

/* Hook der fetcher FAQ api */
const useFetchFaq = () => {
  const [faq, setFaq] = useState([]);
  const [error, setError] = useState(null);

  const fetchFaq = async () => {
    try {
      const response = await fetch("https://legekrogen.webmcdm.dk/questions");
      const data = await response.json();
      console.log(data);
      setFaq(data);
    } catch (error) {
      setError(error.message);
      console.error(error);
    }
  };

  useEffect(() => {
    fetchFaq();
  }, []);

  return {
    faq,
  };
};

export { useFetchFaq };
