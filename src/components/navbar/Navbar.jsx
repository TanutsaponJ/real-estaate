import { HiHomeModern, HiMiniHomeModern } from "react-icons/hi2";
import { Link } from "react-router-dom";
import navItem from "./navLinks/NavLinks";
import Button from "../../utils/button/Button";

const Navbar = () => {
  return (
    <div className="max-w-screen-2xl container mx-auto px-20 py-4 bg-white-400">
      <div className=" flex items-center justify-between ">
        {/* Logo */}
        <Link to="/" className=" flex items-center gap-2">
          <div>
            <HiHomeModern className="text-2xl text-blue-500" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-blue-500">CASAZ</h1>
          </div>
        </Link>

        {/* Navbar menu */}
        <div className="flex justify-between gap-10 text-blue-500">
          {navItem.map((item) => (
            <Link to={item.path} key={item.id}>
              <div className="flex items-center gap-2">
                <p>{item.title}</p>
                {item.icon}
              </div>
            </Link>
          ))}
        </div>

        {/* Button for Listing Property */}

        <Button title="CREATE LISTING" icon={<HiMiniHomeModern />} />
      </div>
    </div>
  );
};

export default Navbar;
