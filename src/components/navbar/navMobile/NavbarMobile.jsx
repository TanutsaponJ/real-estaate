import { Link } from "react-router-dom";
import logo from "../../../assets/logo.png";
import navItem from "../navLinks/NavLinks";

const NavbarMobile = ({ setOpenMenu }) => {
  return (
    <div className="w-screen fixed top-0 z-20">
      <div className="w-1/2 h-screen p-8 flex flex-col bg-background">
        <img src={logo} alt="logo" className="w-16 object-contain mb-8" />

        <ul>
          {navItem.map((nav) => (
            <li key={nav.id} className="mb-5">
              <Link className="menu-item">{nav.title}</Link>
            </li>
          ))}
        </ul>

        <button className="h-10 text-sm px-6 rounded hover:bg-blue-200 hover:text-primary md:block text-white bg-primary">
          Contact Us
        </button>

        <div
          onClick={() => setOpenMenu(false)}
          className="h-screen w-screen bg-overlayBg fixed top-0 -z-10"
        />
      </div>
    </div>
  );
};

export default NavbarMobile;
