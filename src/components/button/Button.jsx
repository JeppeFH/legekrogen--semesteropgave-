import styles from "./button.module.css";
import { Link } from "react-router-dom";

const Button = ({ buttonText, onClick, className, type = "button" }) => {
  return (
    <button
      className={`${styles.button} ${className}`}
      onClick={onClick}
      type={type}
    >
      {buttonText}
    </button>
  );
};

export default Button;
