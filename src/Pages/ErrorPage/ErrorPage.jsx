import { FaPersonWalkingArrowLoopLeft } from "react-icons/fa6";
import errorImage from "../../assets/Objects/error.png"
import { NavLink } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex flex-col justify-center items-center max-w-full min-h-screen gap-10 px-5">
      <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl">Sorry,</h2>
      <p className="text-sm sm:text-base md:text-xl lg:text-2xl">
        This page is not found.
      </p>
      <div className="flex flex-col justify-center items-center">
        <img
          src={errorImage}
          alt="404 Error Image"
          className="w-full animate-pulse"
        />
      </div>
      <NavLink to='/' className="btn_shared animate-bounce cursor-pointer">
        <p className="capitalize font-semibold flex justify-center items-center gap-4"> <FaPersonWalkingArrowLoopLeft /> Back to home</p>
      </NavLink>
    </div>
  );
};

export default ErrorPage;
