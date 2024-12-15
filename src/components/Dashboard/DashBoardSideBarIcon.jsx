import { AiFillProduct } from "react-icons/ai";
import {FaPix} from "react-icons/fa6";
import { FaAppStoreIos } from "react-icons/fa6";
import { IoDuplicateSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const DashboardSidebarIcon = () => {
  return (
    <ul className="mt-4 text-white space-y-4">
      {/* Dashboard Link */}
      <Link
        href="/dashboard"
        className="py-3 px-5 rounded-lg hover:text-[#092A67] hover:bg-cyan-500 flex justify-center items-center gap-3 cursor-pointer transition-all duration-300"
      >
        <FaPix className="text-lg" />
      </Link>

      {/* Product Link */}
      <Link
        href="/university"
        className="py-3 px-5 rounded-lg hover:text-[#092A67] hover:bg-cyan-500 flex justify-center items-center gap-3 cursor-pointer transition-all duration-300"
      >
        <AiFillProduct className="text-lg" />
      </Link>

      {/* Category Link */}
      <Link
        href="#"
        className="py-3 px-5 rounded-lg hover:text-[#092A67] hover:bg-cyan-500 flex justify-center items-center gap-3 cursor-pointer transition-all duration-300"
      >
        <IoDuplicateSharp className="text-lg" />
      </Link>


       {/* Stocks Link */}
       <Link
        href="#"
        className="py-3 px-5 rounded-lg hover:text-[#092A67] hover:bg-cyan-500 flex justify-center items-center gap-3 cursor-pointer transition-all duration-300"
      >
        <FaAppStoreIos className="text-lg" />
      </Link>


    </ul>
  );
};

export default DashboardSidebarIcon;
