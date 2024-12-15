import { useContext, useEffect } from "react";
import StoreContext from "../context/StoreContext";
import Loading from "../components/ui/Loading";
import Error from "../components/ui/Error";
import AllStock from "../components/stock/AllStock";

const Stock = () => {

  const { stocks, fetchStocks, loadingStocks, errorStocks } =
    useContext(StoreContext);

  useEffect(() => {
    fetchStocks();
    
  }, []);

  // decide what to the render
  let content = null;

  if (loadingStocks) {
    content = (
      <>
        <Loading />
        <Loading />
      </>
    );
  } else if (!loadingStocks && errorStocks) {
    content = <Error message={errorStocks} />;
  } else if (!loadingStocks && !errorStocks && stocks?.length === 0) {
    content = <Error message="Stocks not found" />;
  } else if (!loadingStocks && !errorStocks && stocks?.length > 0) {
    content = <AllStock stocks={stocks} />;
  }

  return <>{content}</>;
};

export default Stock;
