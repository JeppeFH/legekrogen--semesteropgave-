import { useEffect, useState } from "react";
import ProductCard from "../productCard/ProductCard";
import styles from "./recommended.module.css";
import { useFetchProducts } from "../../hooks/useFetchProduct";

const Recommended = () => {
  const { recommended } = useFetchProducts();

  return (
    <section>
      {recommended.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </section>
  );
};

export default Recommended;
