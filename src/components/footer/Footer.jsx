import styles from "./footer.module.css";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { LuInstagram } from "react-icons/lu";

const Footer = () => {
  return (
    <footer>
      <div className={styles.customerService}>
        <h3>Kundeservice</h3>
        <figure>
          <MdOutlineMailOutline size={25} color="white" />
          <p>kontakt@legekrogen.dk</p>
        </figure>
        <figure>
          <FaPhoneAlt size={20} color="white" />
          <p>+45 23 45 67 89</p>
        </figure>
      </div>

      <div className={styles.followUs}>
        <h3>Følg os</h3>
        <figure>
          <FaFacebook size={30} color="white" />
          <LuInstagram size={30} color="white" />
        </figure>
      </div>
    </footer>
  );
};

export default Footer;
