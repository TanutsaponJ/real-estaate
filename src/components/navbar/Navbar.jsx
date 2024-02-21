import { HiHomeModern } from "react-icons/hi2";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      {/* Logo */}
      <div className="p-4 bg-yellow-50">
        <Link to="/" className=" flex items-center gap-2">
          <div>
            <HiHomeModern className="text-2xl text-blue-500" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-blue-500">CASAZ</h1>
          </div>
        </Link>
      </div>

      {/* Navbar menu */}

      <div></div>
    </div>
  );
};

export default Navbar;
