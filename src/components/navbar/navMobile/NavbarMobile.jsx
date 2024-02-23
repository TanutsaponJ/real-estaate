import { Link } from "react-router-dom";
import logo from "../../../assets/logo.png";
import navItem from "../navLinks/NavLinks";

const NavbarMobile = ({ setIsMenuOpen }) => {
  return (
    <div className="w-screen fixed top-0 z-20">
      <div className="w-1/2 h-screen flex flex-col p-8 bg-background">
        <img src={logo} alt="logo" className="object-contain mb-8 w-16" />

        <ul>
          {navItem.map((nav) => (
            <li key={nav.id} className="mb-5">
              <Link className="menu-item">{nav.title}</Link>
            </li>
          ))}
        </ul>

        <button className="h-10 bg-primary text-white text-sm px-6 rounded hover:bg-blue-200 hover:text-primary md:block  ">
          Contact Us
        </button>
      </div>

      <div
        onClick={() => {
          setIsMenuOpen(false);
        }}
        className="w-screen h-screen bg-overlayBg fixed top-0 -z-10"
      ></div>
    </div>
  );
};

export default NavbarMobile;
