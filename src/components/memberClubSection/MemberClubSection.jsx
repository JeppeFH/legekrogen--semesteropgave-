import styles from "./memberClubSection.module.css";
import Button from "../button/Button";

const MemberClubSection = () => {
  return (
    <>
      <div className={styles.memberClubSection}>
        <p>Kunne du også tænke dig at blive</p>
        <p>medlem af vores</p>
        <h2>Kundeklub?</h2>
        <Button />
      </div>
    </>
  );
};

export default MemberClubSection;
