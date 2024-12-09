import { useEffect, useState } from "react";

/* Hooks der skal fetche til products.jsx */
const useFetchProducts = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  const fetchProducts = async () => {
    try {
      const response = await fetch("https://legekrogen.webmcdm.dk/products");
      const data = await response.json();
      setProducts(data.products);
    } catch (error) {
      setError(error.message);
      console.error(error);
    }
  };

  /* Filter variable */
  let sofas = products.filter((e) => e.tags.includes("sofas"));
  let officeChairs = products.filter((e) => e.tags.includes("office chairs"));
  let beds = products.filter((e) => e.tags.includes("beds"));
  let bedsideTables = products.filter((e) => e.tags.includes("bedside tables"));
  let ratings = products.filter((r) => r.rating > 4);

  useEffect(() => {
    fetchProducts();
  }, []);

  return {
    products,
    sofas,
    officeChairs,
    beds,
    bedsideTables,
    ratings,
  };
};

export { useFetchProducts };
