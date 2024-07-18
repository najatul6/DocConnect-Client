import { Link } from "react-router-dom";
import logo from "../../../assets/logo/brandLogo.svg";

const Footer = () => {
  return (
    <div>
      <div>
      <Link to="/" className="flex justify-center items-center gap-2">
          <img src={logo} alt="Doc Connect Logo" />
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold">
            <span className="text-light-coffee">Doc</span> Connect
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
