import { useEffect, useState } from "react";
import ProductCard from "../productCard/ProductCard";
import styles from "./favorites.module.css";
import { useFetchProducts } from "../../hooks/useFetchProduct";

const Favorites = () => {
  const { ratings } = useFetchProducts();

  return (
    <section>
      {ratings.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </section>
  );
};

export default Favorites;
