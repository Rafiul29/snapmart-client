import { useContext, useEffect, useState } from "react";
import StoreContext from "../../context/StoreContext";
import Error from "../ui/Error";
import ButtonLoading from "../ui/ButtonLoading";
import SectionTitle from "../SectionTitle";
import { useNavigate } from "react-router-dom";

const CreateProductStock = () => {
  const { createStock, products, fetchProducts, loadingStocks, errorStocks } =
    useContext(StoreContext);

  const [quantity, setQuantity] = useState("");
  const [product_id, setProduct_id] = useState("");

  const navigate=useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { quantity, product_id };
    await createStock(data);
    // navigate('/dashboard/stock')
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <section className="flex justify-center items-center">
      <div className="w-full md:w-1/2 md:bg-white  p-6 md:rounded-lg md:shadow-md my-8">
      <SectionTitle text={"Create a new Product stock"} />
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="relative">
            <label
              htmlFor="product"
              className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
            >
              Product Name
            </label>
            <select
              id="product"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={(e) => setProduct_id(e.target.value)}
              value={product_id}
            >
              <option value="" disabled>
                Select a Product
              </option>
              {products && products.length > 0 ? (
                products.map((product) => (
                  <option key={product.id} value={product.id}>
                    {product.name}
                  </option>
                ))
              ) : (
                <option value="" disabled>
                  No products available
                </option>
              )}
            </select>
          </div>

          <div className="relative">
            <label
              htmlFor="quantity"
              className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
            >
              Quantity
            </label>
            <input
              type="number"
              id="quantity"
              className="shadow-sm bg-gray-50 border border-cyan-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full p-2.5 dark:bg-gray-700 dark:border-cyan-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-cyan-500 dark:focus:border-cyan-500"
              placeholder="Enter product name"
              required
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
          </div>
            {errorStocks && <Error message={errorStocks}/>}
          <div className="flex flex-col gap-3">
            <button
            disabled={loadingStocks}
              type="submit"
              className="text-white bg-cyan-500 hover:bg-cyan-600 focus:ring-4 focus:outline-none focus:ring-cyan-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
            >
              {loadingStocks? <ButtonLoading/>: "submit"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default CreateProductStock;
