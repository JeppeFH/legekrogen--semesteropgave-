import styles from "./pageHero.module.css";

const PageHero = ({ heroImg, title, subtitle, tagline, heroOverlayHeight }) => {
  return (
    <header
      className={styles.hero}
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      <div
        className={styles.heroOverlay}
        style={{ height: heroOverlayHeight || "100%" }}
      >
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
        <p>{tagline}</p>
      </div>
    </header>
  );
};

export default PageHero;
