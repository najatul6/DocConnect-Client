import { Outlet } from "react-router-dom";
import Navbar from "../Componets/Header/Navbar/Navbar";

const MainLayout = () => {
  return (
    <div className="max-w-[1440px] mx-auto">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default MainLayout;
