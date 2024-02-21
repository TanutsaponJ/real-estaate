import { Link } from "react-router-dom";
import logo from "../../../assets/logo.png";
import navItem from "../navLinks/NavLinks";

const NavbarMobile = () => {
  return (
    <div>
      <div>
        <img src={logo} alt="logo" className="object-contain mb-8" />

        <ul>
          {navItem.map((nav) => (
            <li key={nav.id}>
              <Link>{nav.title}</Link>
            </li>
          ))}
        </ul>

        <button>Contact Us</button>
      </div>
    </div>
  );
};

export default NavbarMobile;
