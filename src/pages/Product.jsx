import { useContext, useEffect } from "react";
import Loading from "../components/ui/Loading";
import StoreContext from "../context/StoreContext";
import Error from "../components/ui/Error";
import AllProduct from "../components/product/AllProduct";
const Product = () => {
  const { products, fetchProducts, loadingProducts, errorProducts } =
    useContext(StoreContext);

  useEffect(() => {
    fetchProducts();
  }, []);

  // decide what to the render
  let content = null;

  if (loadingProducts) {
    content = (
      <>
        <Loading />
        <Loading />
      </>
    );
  } else if (!loadingProducts && errorProducts) {
    content = <Error message={errorProducts} />;
  } else if (!loadingProducts && !errorProducts && products?.length === 0) {
    content = <Error message="Category not found" />;
  } else if (!loadingProducts && !errorProducts && products?.length > 0) {
    content = <AllProduct products={products} />;
  }

  return <>{content}</>;
};

export default Product;
