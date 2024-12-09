import styles from "./sectionHeader.module.css";

const SectionHeader = ({ title, subtitle }) => {
  return (
    <div className={styles.sectionHeader}>
      <h2>{title}</h2>;<h3>{subtitle}</h3>;
    </div>
  );
};

export default SectionHeader;
