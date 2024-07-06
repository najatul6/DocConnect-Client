import { Link, NavLink } from "react-router-dom";
import brandLogo from "../../../assets/logo/brandLogo.svg";
import { menu } from "../../../Utils/menu";
import { useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex justify-between items-center">
      <Link to="/" className="flex justify-center items-center gap-2">
        <img src={brandLogo} alt="Doc Connect Logo" className="" />
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold">
          <span className="text-light-coffee">Doc</span> Connect
        </p>
      </Link>
      <div>
        <ul className="flex justify-center items-center gap-5">
          {menu?.map((item, index) => (
            <li key={index}>
              <NavLink
                to={item.path}
                className="text-xl sm:text-2xl md:text-3xl hover:text-light-gray transition-colors duration-500"
              >
                {item.title}
              </NavLink>
            </li>
          ))}
      <button
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        className="form-input hover:text-light-coffee md:hidden"
      >
        {isOpen ? (
          <IoClose className="text-3xl transition-all duration-500" />
        ) : (
          <IoMenu className="text-3xl transition-all duration-500" />
        )}
      </button>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
