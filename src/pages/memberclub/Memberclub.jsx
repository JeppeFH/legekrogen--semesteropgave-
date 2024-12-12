import styles from "./memberclub.module.css";
import PageHero from "../../components/pageHero/PageHero";
import heroImg from "../../assets/hero-member.jpg";
import Footer from "../../components/footer/Footer";
import MemberSubsciption from "../../components/memberSubscription/MemberSubsciption";

const Memberclub = () => {
  return (
    <article>
      <PageHero
        title="Bliv medlem af vores"
        subtitle="KUNDEKLUB"
        tagline="og få eksklusive nyheder før alle andre"
        heroImg={heroImg}
        heroOverlayHeight="45%"
      />

      <MemberSubsciption />

      <Footer />
    </article>
  );
};

export default Memberclub;
