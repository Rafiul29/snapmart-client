import React, { useContext, useState } from 'react'
import UpdateProductStockModal from './UpdateProductStockModal';
import StoreContext from '../../context/StoreContext';
import SectionTitle from '../SectionTitle';

const AllStock = ({stocks}) => {
 
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [stock, setStock] = useState(undefined);

  const { deleteStock } = useContext(StoreContext);

  const handleEditProductStock = (stock) => {
    setStock(stock);
    setIsModalOpen(true);
  };

  const handleDeleteProductStock = async (id) => {
    await deleteStock(id);
  };

  return (
    <section>
      <div>
        {isModalOpen && stock && (
          <UpdateProductStockModal
          stock={stock}
            onClose={() => setIsModalOpen(false)}
          />
        )}
      </div>
      
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <SectionTitle text={"All Product Stocks"}/>
        <table className=" mt-5 w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                SL
              </th>
              <th scope="col" className="px-6 py-3">
                Product Name
              </th>
              <th scope="col" className="px-6 py-3">
               Product Quantity
              </th>
              <th scope="col" className="px-6 py-3">
               Product Category
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
            {stocks?.map((stock, i) => (
              <tr
                key={stock.id}
                className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {i + 1}
                </th>
                <td className="px-6 py-4">{stock.product.name}</td>
                <td className="px-6 py-4">{stock.quantity}</td>
                <td className="px-6 py-4">{stock.product.category.name}</td>
                <td className="px-6 py-4">{stock.product.price}</td>
          
                <td className="px-6 py-4 space-x-4">
                  <button
                    onClick={() => handleEditProductStock(stock)}
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeleteProductStock(stock.id)}
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
  )
}

export default AllStock