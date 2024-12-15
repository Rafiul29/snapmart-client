import { useContext, useState } from "react";
import CategoryModal from "./CategoryModal";
import StoreContext from "../../context/StoreContext";

const AllCategory = ({ categories }) => {
  const { deleteCategory } = useContext(StoreContext);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [category, setCategory] = useState(undefined);

  const handleDeleteCategory = async (id) => {
    await deleteCategory(id);
  };

  const handleEditCategory = (category) => {
    setCategory(category);
    setIsModalOpen(true);
  };

  return (
    <section>
      <div>
        {isModalOpen && category && (
          <CategoryModal
            category={category}
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
                Category Name
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {categories?.map((category, i) => (
              <tr
                key={category.id}
                className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {i + 1}
                </th>
                <td className="px-6 py-4">{category.name}</td>

                <td className="px-6 py-4 space-x-4">
                  <button
                    onClick={() => handleEditCategory(category)}
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeleteCategory(category.id)}
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

export default AllCategory;
