import { Outlet } from "react-router-dom";
import Navbar from "../Components/Header/Navbar/Navbar";
import Footer from "../Components/Shared/Footer/Footer";

const MainLayout = () => {
  return (
    <div className="max-w-[1920px] mx-auto">
      <div>
      <Navbar />
      </div>
      <div className="">
        <Outlet />
      </div>
      <div className="px-0">
        <Footer/>
      </div>
    </div>
  );
};

export default MainLayout;
