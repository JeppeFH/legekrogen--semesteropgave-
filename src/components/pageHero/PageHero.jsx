import styles from "./pageHero.module.css";

const PageHero = ({ heroImg, title, subtitle, tagline }) => {
  return (
    <header
      className={styles.hero}
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      <div>
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
        <p>{tagline}</p>
      </div>
    </header>
  );
};

export default PageHero;
