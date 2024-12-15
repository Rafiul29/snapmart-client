import { useContext, useEffect, useState } from "react";
import StoreContext from "../../context/StoreContext";


const UpdateProductStockModal = ({ onClose, stock }) => {
  const { updateStock, products, fetchProducts } = useContext(StoreContext);

  const [quantity, setQuantity] = useState("");
  const [product_id, setProduct_id] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateStock({
      id: stock?.id,
      data: { quantity, product_id },
    });
  };

  useEffect(() => {
    if (stock) {
      setQuantity(stock.quantity);
    }
    fetchProducts();
  }, [stock]);

  return (
    <div
      id="default-modal"
      className="fixed inset-0 z-50 flex justify-center items-center w-full h-full bg-gray-900 bg-opacity-50"
    >
      <div className="relative p-4 w-full max-w-2xl max-h-full bg-white rounded-lg shadow dark:bg-gray-700">
        <div className="flex items-center justify-between p-2 md:p-4 border-b rounded-t dark:border-gray-600">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            Update Product
          </h3>
          <button
            onClick={onClose}
            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
          >
            <svg
              className="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span className="sr-only">Close modal</span>
          </button>
        </div>

        <div className=" py-5">
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
                type="text"
                id="quantity"
                className="shadow-sm bg-gray-50 border border-cyan-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full p-2.5 dark:bg-gray-700 dark:border-cyan-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-cyan-500 dark:focus:border-cyan-500"
                placeholder="Enter product name"
                required
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              />
            </div>

            <div className="flex flex-col gap-3">
              <button
                type="submit"
                className="text-white bg-cyan-500 hover:bg-cyan-600 focus:ring-4 focus:outline-none focus:ring-cyan-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
              >
                submit
              </button>
            </div>
          </form>
        </div>

        <div className="flex justify-end p-2 md:p-4 border-t">
          <button
            onClick={onClose}
            type="button"
            className="text-white bg-rose-600 hover:bg-rose-700 focus:ring-4 focus:outline-none focus:ring-rose-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-rose-600 dark:hover:bg-rose-700 dark:focus:ring-rose-800"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdateProductStockModal;
