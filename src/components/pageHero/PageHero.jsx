import styles from "./pageHero.module.css";

const PageHero = ({ title, subtitle, heroImg }) => {
  return (
    <header
      className={styles.hero}
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      <div>
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
    </header>
  );
};

export default PageHero;
