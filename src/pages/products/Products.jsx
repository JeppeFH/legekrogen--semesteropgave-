import PageHero from "../../components/pageHero/PageHero";
import heroImg from "../../assets/hero-products.jpg";
import { useEffect, useState } from "react";
import ProductCard from "../../components/productCard/ProductCard";
import styles from "./products.module.css";
import Footer from "../../components/footer/Footer";
import { useFetchProducts } from "../../hooks/useFetchProduct";

const Products = () => {
  const { products } = useFetchProducts();

  return (
    <>
      <article>
        <PageHero heroImg={heroImg} />

        <SectionHeader title="Alt vores" subtitle="Legetøj" />

        <section>
          {productsArray.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </section>
      </article>

      <Footer />
    </>
  );
};

export default Products;
