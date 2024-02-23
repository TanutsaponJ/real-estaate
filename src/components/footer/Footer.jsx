import { Link } from "react-router-dom";
import LogoImg from "../../assets/logo.png";
const Footer = () => {
  return (
    <>
      <div className="max-w-[1200px] mx-auto bg-dimBlue">
        <div className="flex flex-col items-center justify-center p-8">
          <img src={LogoImg} alt="logo" className="w-20 mb-6" />

          <ul className="flex justify-center gap-6 flex-wrap">
            <li>
              <a href="" className="text-xs text-darkBlue hover:font-medium ">
                About US
              </a>
            </li>
            <li>
              <a href="" className="text-xs text-darkBlue hover:font-medium ">
                Contact US
              </a>
            </li>
            <li>
              <a href="" className="text-xs text-darkBlue hover:font-medium ">
                Services
              </a>
            </li>
            <li>
              <a href="" className="text-xs text-darkBlue hover:font-medium ">
                Terms & Condition
              </a>
            </li>
            <li>
              <a href="" className="text-xs text-darkBlue hover:font-medium ">
                Get Quotes
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-darkBlue text-xm text-white text-center p-4 ">
        Copyright © 2024{" "}
        <Link target="_blank" to="https://www.linkedin.com/in/tanutsapon/">
          Tanutsapon Jinaongkan
        </Link>
      </div>
    </>
  );
};

export default Footer;
