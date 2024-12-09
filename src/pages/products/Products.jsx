import PageHero from "../../components/pageHero/PageHero";
import heroImg from "../../assets/hero-products.jpg";
import { useEffect, useState } from "react";
import ProductCard from "../../components/productCard/ProductCard";
import styles from "./products.module.css";
import Button from "../../components/button/Button";
import Footer from "../../components/footer/Footer";
import { useFetchProducts } from "../../hooks/useFetchProduct";

const Products = () => {
  const { products, sofas, officeChairs, beds, bedsideTables } =
    useFetchProducts();

  /*   Tilstand der indeholder de filterede møbler  */
  const [filtered, setFiltered] = useState([
    ...sofas,
    ...officeChairs,
    ...beds,
    ...bedsideTables,
  ]);

  const [activeFilter, setActiveFilter] = useState(["All"]);

  /* Objekt der indeholder arrays af møbler */
  const filters = {
    All: products,
    Sofas: sofas,
    OfficeChairs: officeChairs,
    Beds: beds,
    BedsideTables: bedsideTables,
  };

  /* Håndterer ændring af filter */
  const handleFilterChance = async (filter) => {
    setActiveFilter(filter);
    setFiltered(filters[filter]);
  };

  const productsArray = filtered?.length > 0 ? filtered : products;

  return (
    <>
      <article>
        <PageHero heroImg={heroImg} />
        <div className={styles.productCategories}>
          <Button
            onClick={() => handleFilterChance("All")}
            buttonText="All"
          ></Button>
          <Button
            onClick={() => handleFilterChance("Sofas")}
            buttonText="Sofas"
          ></Button>
          <Button
            onClick={() => handleFilterChance("Beds")}
            buttonText="Beds"
          ></Button>
          <Button
            onClick={() => handleFilterChance("OfficeChairs")}
            buttonText="Chairs"
          ></Button>
          <Button
            onClick={() => handleFilterChance("BedsideTables")}
            buttonText="Tables"
          ></Button>
        </div>

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
