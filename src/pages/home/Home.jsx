import PageHero from "../../components/pageHero/PageHero";
import SectionHeader from "../../components/sectionHeader/SectionHeader";
import heroImg from "../../assets/hero-home.jpg";
import Recommended from "../../components/recommended/Recommended";
import CustomerReviews from "../../components/customerReviews/CustomerReviews";
import MemberClubSection from "../../components/memberClubSection/MemberClubSection";
import Footer from "../../components/footer/Footer";

const Home = () => {
  return (
    <article>
      <PageHero
        title="At lege er at leve"
        tagline="Her hos os har vi et stort udvalg af legetøj i høj kvalitet"
        heroImg={heroImg}
      />

      <SectionHeader title="Et udpluk af vores" subtitle="Legetøj" />

      <Recommended />

      <CustomerReviews />

      <MemberClubSection />

      <Footer />
    </article>
  );
};

export default Home;
