import styles from "./pageHero.module.css";

const PageHero = ({ title, subTitle, heroImg }) => {
  return (
    <header
      className={styles.hero}
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      <h1>{title}</h1>
      {subTitle && <h4>{subTitle}</h4>}
    </header>
  );
};

export default PageHero;
