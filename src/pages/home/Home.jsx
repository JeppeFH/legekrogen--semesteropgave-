import SectionHeader from "../../components/sectionHeader/SectionHeader";
import PageHero from "../../components/pageHero/PageHero";
import heroImg from "../../assets/hero.webp";
import Favorites from "../../components/favorites/Favorites";
import MyFavorites from "../../components/myfavorites/MyFavorites";
import Newsletter from "../../components/newsletter/Newsletter";
import Footer from "../../components/footer/Footer";
import { useLocalStorage } from "@uidotdev/usehooks";

const Home = () => {
  const [favorites] = useLocalStorage("Favorites", []);

  return (
    <article>
      <PageHero title="Quality furnitures" heroImg={heroImg} />

      <SectionHeader title="Favorites" />
      <Favorites />

      {favorites.length > 0 && (
        <>
          <SectionHeader title="My favorites" />
          <MyFavorites />
        </>
      )}

      <SectionHeader title="Tilmeld dig vores nyhedsbrev" />
      <Newsletter />

      <Footer />
    </article>
  );
};

export default Home;
