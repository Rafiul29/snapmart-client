import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import Product from "./pages/Product";
import Category from "./pages/Category";
import Stock from "./pages/Stock";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Registration />} />

        <Route path="/product" element={<Product />} />
        <Route path="/category" element={<Category />} />
        <Route path="/product" element={<Product />} />
        <Route path="/stock" element={<Stock />} />

      </Routes>
    </>
  );
}

export default App;
