import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <NavLink to="/">
        <img
          src="/logo.png"
          alt="Picture of logo"
          className={isOpen ? "logo hidden" : "logo"}
        />
      </NavLink>

      <div className="burger-menu" onClick={toggleMenu}>
        {isOpen ? <IoClose size={50} /> : <GiHamburgerMenu size={30} />}
      </div>
      <ul className={isOpen ? "nav-links open" : "nav-links"}>
        <li>
          <NavLink to="/">Forside</NavLink>
        </li>
        <li>
          <NavLink to="/products">Produkter</NavLink>
        </li>
        <li>
          <NavLink to="/faq">FAQ</NavLink>
        </li>
        <li>
          <NavLink to="/memberclub">Kundeklubben</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
