import { NavLink } from "react-router-dom";
import ServiceCard from "../ServiceCard/ServiceCard";

const OurService = () => {
  return (
    <div className="flex flex-col justify-center items-start gap-10">
      <div className="flex flex-col justify-center items-start gap-5">
      <h2 className="text-lg sm:text-xl md:text-2xl font-bold">Our Services</h2>
      <p className="text-base">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
        illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt
        explicabo.
      </p>
      </div>
      <div className="border-[#828282] border rounded-xl w-full mx-auto">
        <ul>
          <li className="flex flex-col lg:flex-row text-center justify-center items-center ">
            <NavLink
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "shadow-[#f7a582_0px_0px_5px] text-black bg-light-coffee  px-5 py-5 rounded-xl w-full text-xl font-semibold"
                  : "hover:shadow-[#f7a582_0px_0px_5px] hover:text-light-coffee px-5 py-5 rounded-xl w-full text-xl font-semibold"
              }
              to="/p"
            >
              Cavity Protection
            </NavLink>
            <NavLink
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "shadow-[#f7a582_0px_0px_5px] text-black bg-light-coffee  px-5 py-5 rounded-xl w-full text-xl font-semibold"
                  : "hover:shadow-[#f7a582_0px_0px_5px] hover:text-light-coffee px-5 py-5 rounded-xl w-full text-xl font-semibold"
              }
              to="/service1"
            >
              Cosmetic Dentistry
            </NavLink>
            <NavLink
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "shadow-[#f7a582_0px_0px_5px] text-black bg-light-coffee w-full px-5 py-5 rounded-xl text-xl font-semibold"
                  : "hover:shadow-[#f7a582_0px_0px_5px] hover:text-light-coffee w-full px-5 py-5 rounded-xl text-xl font-semibold"
              }
              to="/service1"
            >
              Oral Surgery
            </NavLink>
          </li>
        </ul>
      </div>
      <div>
        <ServiceCard/>
      </div>
    </div>
  );
};

export default OurService;
