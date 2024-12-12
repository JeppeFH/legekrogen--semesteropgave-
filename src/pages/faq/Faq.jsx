import styles from "./faq.module.css";
import PageHero from "../../components/pageHero/PageHero";
import heroImg from "../../assets/hero-faq.jpg";
import FaqQuestions from "../../components/faqQuestions/FaqQuestions";
import MemberClubSection from "../../components/memberClubSection/MemberClubSection";
import Footer from "../../components/footer/Footer";

const Faq = () => {
  return (
    <>
      <article>
        <PageHero
          title="Har du nogle"
          subtitle="SPØRGSMÅL"
          tagline="Måske er de allerede besvaret herunder. Ellers er du altid velkommen til at kontakte os."
          heroImg={heroImg}
          heroOverlayHeight="50%"
        />

        <FaqQuestions />

        <MemberClubSection />

        <Footer />
      </article>
    </>
  );
};

export default Faq;
