import { Link, Outlet } from "react-router-dom";
import DashboardSidebar from "../components/Dashboard/DashboardSidebar";
import { useState } from "react";

import { FaBell, FaEnvelope, FaUser } from "react-icons/fa";
import Logo from "../assets/logo.png";
import DashboardSidebarIcon from "../components/Dashboard/DashBoardSideBarIcon";
export const DashboardLayout = () => {
  const [isToggleSidebar, setToggleSidebar] = useState(false);

  const toggleSidebar = () => {
    setToggleSidebar(!isToggleSidebar);
  };

  return (
    <>
      <div className="mx-auto min-h-screen flex">
        <div
          className={`left-side col-span-1 bg-cyan-300 min-h-screen transition-all duration-300 ${
            isToggleSidebar ? "w-[80px]" : "w-[250px]"
          }`}
        >
          <div className="sticky top-0 left-0 bg-white shadow-md h-20 flex justify-center items-center border-b-[1px] border-gray-200 z-10">
            <Link to="/dashboard" className="w-28 p-2">
              <img
                src={Logo}
                alt="logo"
                className="w-full h-full object-cover"
              />
            </Link>
          </div>
          {!isToggleSidebar ? <DashboardSidebar /> : <DashboardSidebarIcon />}
        </div>

        {/* Main content */}
        <div className="col-span-6 transition-all duration-300 w-full">
          <header className="bg-white shadow-md sticky top-0 left-0 col-span-6 z-10 h-20">
            <nav className="mx-auto px-4 flex items-center justify-between h-20">
              <div className="text-xl font-bold text-cyan-700 cursor-pointer flex justify-center items-center gap-5">
                {/* <button >
                  <RiBarChartHorizontalLine />
                </button> */}
              </div>

              <button className=" px-5 py-2 rounded-md   text-cyan-900 border-2 border-cyan-500 hover:border-cyan-500 hover:text-cyan-100 hover:bg-cyan-500 duration-500 ">
                Logout
              </button>
            </nav>
          </header>
          {/* This is where nested routes will be rendered */}
          <div className="p-6">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};
