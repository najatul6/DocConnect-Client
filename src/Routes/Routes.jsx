import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Appointment from "../Pages/Appointment/Appointment";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      children: [
        { path: "/", element: <Home/> },
        { path: "/about", element: <About/> },
        { path: "/appointment", element: <Appointment/>},
        { path: "/login", element: <Login/>},
        {path:"/signup", element: <SignUp/>}
      ],
    },
  ]);