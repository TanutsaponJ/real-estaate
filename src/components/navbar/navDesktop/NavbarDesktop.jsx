import { Link } from "react-router-dom";
import logo from "../../../assets/logo.png";

import { RiMenu4Line, RiCloseFill } from "react-icons/ri";
import navItem from "../navLinks/NavLinks";
import { useState } from "react";
import NavbarMobile from "../navMobile/NavbarMobile";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {isMenuOpen && <NavbarMobile setIsMenuOpen={setIsMenuOpen} />}
      <div className="bg-background sticky top-0 z-10">
        <nav className="max-w-screen-xl mx-auto py-4 px-6">
          <div className="flex items-center justify-between">
            <img src={logo} className="h-11 w-auto object-contain" alt="logo" />

            <ul className="hidden md:flex md:gap-14">
              {navItem.map((nav) => (
                <li key={nav.id}>
                  <Link className="menu-item">{nav.title}</Link>
                </li>
              ))}
            </ul>

            <button className="hidden h-10 bg-primary text-white text-sm px-6 rounded hover:bg-blue-200 hover:text-primary md:block">
              Contact Us
            </button>

            <button
              onClick={() => setIsMenuOpen(true)}
              className="w-11 h-11 bg-blue-100 text-2xl text-primary flex items-center justify-center rounded md:hidden z-50"
            >
              {isMenuOpen ? <RiCloseFill /> : <RiMenu4Line />}
            </button>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
