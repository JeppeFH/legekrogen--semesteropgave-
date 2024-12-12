import styles from "./products.module.css";
import PageHero from "../../components/pageHero/PageHero";
import SectionHeader from "../../components/sectionHeader/SectionHeader";
import heroImg from "../../assets/hero-products.jpg";
import { useEffect, useState } from "react";
import ProductCard from "../../components/productCard/ProductCard";
import { useFetchProducts } from "../../hooks/useFetchProduct";
import MemberClubSection from "../../components/memberClubSection/MemberClubSection";
import Footer from "../../components/footer/Footer";

const Products = () => {
  const { products } = useFetchProducts();

  return (
    <>
      <article className={styles.productPage}>
        <PageHero
          title="På udkig efter nyt"
          subtitle="LEGETØJ?"
          heroImg={heroImg}
          heroOverlayHeight="35%"
        />

        <SectionHeader title="Alt vores" subtitle="Legetøj" />

        <section>
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </section>

        <MemberClubSection />

        <Footer />
      </article>
    </>
  );
};

export default Products;
