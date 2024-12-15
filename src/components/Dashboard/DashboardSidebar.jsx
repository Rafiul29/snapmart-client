import { useState } from "react";
import { Link } from "react-router-dom";

const DashboardSidebar = () => {
  const [dropdownState, setDropdownState] = useState({});

  const toggleDropdown = (key) => {
    setDropdownState((prevState) => ({
      ...prevState,
      [key]: !prevState[key], 
    }));
  };

  return (
    <ul className="mt-4 text-cyan-900 space-y-4 px-3">
     

      {/* Products Link with Dropdown */}
      <li>
        <div
          className="py-2 px-5 rounded-lg hover:text-[#092A67] hover:bg-cyan-500 flex items-center gap-3 cursor-pointer transition-all duration-300"
          onClick={() => toggleDropdown("product")}
        >
          {/* <FaUniversity className="text-lg" /> */}
          <span className="text-lg font-medium">Products</span>
          <svg
            className={`w-3 h-3 ml-auto transform transition-transform ${
              dropdownState["product"] ? "rotate-180" : ""
            }`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 4 4 4-4"
            />
          </svg>
        </div>
        {dropdownState["product"] && (
          <ul className="py-2 space-y-2 pl-3">
            <li>
              <Link
                to="#"
                className="flex items-center text-sm  bg-cyan-100 p-2 text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
              >
               All Products
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="flex items-center text-sm  bg-cyan-100 p-2 text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" 
              >
                Create a new Product
              </Link>
            </li>
          </ul>
        )}
      </li>

      {/* Category Link with Dropdown */}
      <li>
        <div
          className="py-2 px-5 rounded-lg hover:text-[#092A67] hover:bg-cyan-500 flex items-center gap-3 cursor-pointer transition-all duration-300"
          onClick={() => toggleDropdown("category")}
        >
          {/* <FaUniversity className="text-lg" /> */}
          <span className="text-lg font-medium">Category</span>
          <svg
            className={`w-3 h-3 ml-auto transform transition-transform ${
              dropdownState["category"] ? "rotate-180" : ""
            }`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 4 4 4-4"
            />
          </svg>
        </div>
        {dropdownState["category"] && (
          <ul className="py-2 space-y-2 pl-3">
            <li>
              <Link
                to="/dashboard/category"
                className="flex items-center text-sm p-2  bg-cyan-100 text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
              >
                 All Category 
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/create-category"
                className="flex items-center text-sm p-2  bg-cyan-100 text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
              >
                Create a new Category
              </Link>
            </li>
          </ul>
        )}
      </li>

         {/* Stock Link with Dropdown */}
         <li>
        <div
          className="py-2 px-5 rounded-lg hover:text-[#092A67] hover:bg-cyan-500 flex items-center gap-3 cursor-pointer transition-all duration-300"
          onClick={() => toggleDropdown("stock")}
        >
          {/* <FaUniversity className="text-lg" /> */}
          <span className="text-lg font-medium">Stock</span>
          <svg
            className={`w-3 h-3 ml-auto transform transition-transform ${
              dropdownState["stock"] ? "rotate-180" : ""
            }`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 4 4 4-4"
            />
          </svg>
        </div>
        {dropdownState["stock"] && (
          <ul className="py-2 space-y-2 pl-3">
            <li>
              <Link
                to="#"
                className="flex items-center text-sm p-2 bg-cyan-100 text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
              >
                 ALL Product Stock
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="flex items-center text-sm p-2  bg-cyan-100  text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
              >
                Create Product Stock
              </Link>
            </li>
          </ul>
        )}
      </li>
    </ul>
  );
};

export default DashboardSidebar;
