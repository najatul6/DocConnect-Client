import { Outlet } from "react-router-dom";
import Navbar from "../Components/Header/Navbar/Navbar";

const MainLayout = () => {
  return (
    <div className="max-w-[1440px] mx-auto min-h-screen">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default MainLayout;
