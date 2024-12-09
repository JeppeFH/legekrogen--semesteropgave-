import SectionHeader from "../../components/sectionHeader/SectionHeader";
import PageHero from "../../components/pageHero/PageHero";
import heroImg from "../../assets/hero-home.jpg";
import Recommended from "../../components/recommended/Recommended";
import CustomerReviews from "../../components/customerReviews/CustomerReviews";
import Newsletter from "../../components/newsletter/Newsletter";
import Footer from "../../components/footer/Footer";
import { useLocalStorage } from "@uidotdev/usehooks";

const Home = () => {
  const [recommended] = useLocalStorage("Recommended", []);

  return (
    <article>
      <PageHero title="At lege er at leve" heroImg={heroImg} />

      <SectionHeader title="Et udpluk af vores" subtitle="Legetøj" />
      <Recommended />

      <CustomerReviews />

      <Newsletter />

      <Footer />
    </article>
  );
};

export default Home;
