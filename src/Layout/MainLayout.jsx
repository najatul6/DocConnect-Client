import { Outlet } from "react-router-dom";
import Navbar from "../Components/Header/Navbar/Navbar";
import Footer from "../Components/Shared/Footer/Footer";

const MainLayout = () => {
  return (
    <div className="max-w-[1920px] mx-auto px-[2%]">
      <div>
      <Navbar />
      </div>
      <div className="">
        <Outlet />
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
};

export default MainLayout;
