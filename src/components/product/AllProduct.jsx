import { useContext, useState } from "react";
import UpdateProductModal from "./UpdateProductModal";
import StoreContext from "../../context/StoreContext";

const AllProduct = ({ products }) => {
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [product, setProduct] = useState(undefined);

  const { deleteProduct } = useContext(StoreContext);

  const handleEditProduct = (product) => {
    setProduct(product);
    setIsModalOpen(true);
  };

  const handleDeleteProduct = async (id) => {
    await deleteProduct(id);
  };

  return (
    <section>
      <div>
        {isModalOpen && product && (
          <UpdateProductModal
            product={product}
            onClose={() => setIsModalOpen(false)}
          />
        )}
      </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                SL
              </th>
              <th scope="col" className="px-6 py-3">
                Product Name
              </th>
              <th scope="col" className="px-6 py-3">
                Category Name
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {products?.map((product, i) => (
              <tr
                key={product.id}
                className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {i + 1}
                </th>
                <td className="px-6 py-4">{product.name}</td>
                <td className="px-6 py-4">{product.category.name}</td>
                <td className="px-6 py-4">{product.price}</td>

                <td className="px-6 py-4 space-x-4">
                  <button
                    onClick={() => handleEditProduct(product)}
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeleteProduct(product.id)}
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default AllProduct;
