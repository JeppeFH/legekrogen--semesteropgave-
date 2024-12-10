import { useEffect, useState } from "react";

/* Hooks der skal fetche til products.jsx */
const useFetchProducts = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  const fetchProducts = async () => {
    try {
      const response = await fetch("https://legekrogen.webmcdm.dk/products");
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      setError(error.message);
      console.error(error);
    }
  };

  /* Recommended products */
  let recommended = products.filter((r) => r.recommended === true);

  console.log(recommended);

  useEffect(() => {
    fetchProducts();
  }, []);

  return {
    products,
    recommended,
  };
};

export { useFetchProducts };
