import { createBrowserRouter } from "react-router-dom";
import Error from "../components/ui/Error";
import MainLayout from "../Layout/MainLayout";
import Login from "../pages/Login";
import Registration from "../pages/Registration";
import Category from "../pages/Category";
import Product from "../pages/Product";
import Stock from "../pages/Stock";

import { DashboardLayout } from "../Layout/DashboardLayout";
import NotFound from "../pages/NotFound";
import CreateProduct from "../components/product/CreateProduct";
import CreateCategory from "../components/category/CreateCategory";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />, // Main layout
    errorElement: <Error />, // Error page
    children: [
      { path: "/", element: <Login /> },
      { path: "/register", element: <Registration /> },
      { path: "*", element: <NotFound /> },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />, // Main layout
    errorElement: <Error />, // Error page
    children: [
      { path: "/dashboard", element: <Product /> },
      { path: "/dashboard/create-product", element: <CreateProduct /> },
      { path: "/dashboard/category", element: <Category /> },
      { path: "/dashboard/create-category", element: <CreateCategory /> },
      { path: "/dashboard/stock", element: <Stock /> },
    ],
  },
]);
