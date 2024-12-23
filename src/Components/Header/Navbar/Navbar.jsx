import { Link, NavLink } from "react-router-dom";
import brandLogo from "../../../assets/logo/brandLogo.svg";
import { menu } from "../../../Utils/menu";
import { useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed right-0 left-0 max-w-[1920px] mx-auto py-[1.3rem] px-[2%] lg:py-5 lg:px-[2%] flex justify-between items-center z-[100] before:content-[''] before:top-0 before:left-0 before:absolute before:w-full before:h-full before:backdrop-blur-[50px] before:z-[-1] text-white font-bold shadow-xl lg:shadow-none">
      <div className="text-3xl font-bold lg:leading-[70px] capitalize cursor-pointer">
        <Link to="/" className="flex justify-center items-center gap-2">
          <img src={brandLogo} alt="Doc Connect Logo" className="w-[15%]" />
          <p className="text-base sm:text-base md:text-2xl lg:text-3xl font-bold">
            <span className="text-light-coffee">Doc</span> Connect
          </p>
        </Link>
      </div>
      <label
        htmlFor=""
        className="form-input text-white cursor-pointer lg:hidden absolute right-[5%] inline-flex duration-300 hover:shadow-[#33ffff_0px_0px_5px] hover:text-light-coffee rounded-md "
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <IoClose className="text-4xl text-light-coffee" />
        ) : (
          <IoMenu className="text-4xl" />
        )}
      </label>
      <nav
        className={`${
          isOpen ? "h-[17 rem]" : "h-0 overflow-hidden"
        } top-full  absolute left-0 w-full bg-gradient-back backdrop-blur-2xl shadow-2xl shadow-gradient-back transition-all duration-500 lg:h-auto lg:static lg:w-auto lg:bg-inherit lg:backdrop-blur-0 lg:shadow-none delay-700 lg:delay-0`}
      >
        <ul className="flex flex-col lg:flex-row justify-between items-center gap-6 px-5 py-5 md:py-2 lg:py-0">
          {menu?.map((route, index) => (
            <li
              key={index}
              className={`${
                isOpen
                  ? "translate-y-0 transition-all duration-300"
                  : "translate-y-[-50px] lg:translate-y-0 transition-all duration-700"
              }`}
            >
              <NavLink
                to={route?.path}
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "md:leading-[70px] w-full text-lg py-2 px-4 shadow-[#f7a582_0px_0px_5px] text-light-coffee rounded-md"
                    : "md:leading-[70px] w-full text-lg py-2 px-4 hover:shadow-[#f7a582_0px_0px_5px] hover:text-light-coffee rounded-md"
                }
                onClick={()=>setIsOpen(!isOpen)}
              >
                {route?.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
