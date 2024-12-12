import styles from "./memberClubSection.module.css";
import Button from "../button/Button";
import { Link } from "react-router-dom";

const MemberClubSection = () => {
  return (
    <>
      <div className={styles.memberClubSection}>
        <p>Kunne du også tænke dig at blive</p>
        <p>medlem af vores</p>
        <h2>Kundeklub?</h2>
        <Link to="/memberclub">
          <Button buttonText="BLIV MEDLEM NU!" />;
        </Link>
      </div>
    </>
  );
};

export default MemberClubSection;
