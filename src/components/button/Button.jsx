import styles from "./button.module.css";
import { Link } from "react-router-dom";

const Button = ({ buttonText, onClick, className, type = "button" }) => {
  return (
    <Link to={`/memberclub`}>
      <button className={`${styles.button} ${className}`} onClick={onClick}>
        Bliv medlem nu!
      </button>
    </Link>
  );
};

export default Button;
