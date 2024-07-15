import { Outlet } from "react-router-dom";
import Navbar from "../Components/Header/Navbar/Navbar";

const MainLayout = () => {
  return (
    <div className="max-w-[1920px] mx-auto px-[2%]">
      <div>
      <Navbar />
      </div>
      <div className="">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
