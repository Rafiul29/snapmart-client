import { useContext, useEffect, useState } from "react";
import StoreContext from "../../context/StoreContext";
import SectionTitle from '../../components/SectionTitle'
import ButtonLoading from "../ui/ButtonLoading";
import Error from "../ui/Error";
import { useNavigate } from "react-router-dom";

const CreateProduct = () => {
  const {createProduct,fetchCategories, categories ,loadingProducts, errorProducts} =
    useContext(StoreContext);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category_id, setCategory_id] = useState("");

  const navigate=useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data={name,description,price,category_id}
    await createProduct(data);
    navigate('/dashboard')
  };

  useEffect(() => {
    fetchCategories();
  }, []);
  return (
    <section className="flex justify-center items-center">
      <div className="w-full md:w-1/2 md:bg-white  p-6 md:rounded-lg md:shadow-md my-8">
      <SectionTitle text={"Create a ne Product"}/>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div className="relative">
          <label
            htmlFor="name"
            className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            className="shadow-sm bg-gray-50 border border-cyan-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full p-2.5 dark:bg-gray-700 dark:border-cyan-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-cyan-500 dark:focus:border-cyan-500"
            placeholder="Enter product name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="relative">
          <label
            htmlFor="description"
            className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
          >
            Product Description
          </label>
          <textarea
            type="email"
            id="email"
            className="shadow-sm bg-gray-50 border border-cyan-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full p-2.5 dark:bg-gray-700 dark:border-cyan-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-cyan-500 dark:focus:border-cyan-500"
            rows={5}
            placeholder="Enter product description"
            required
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>

        <div className="relative">
          <label
            htmlFor="price"
            className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
          >
            Category
          </label>
          <select
            id="category"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            onChange={(e) => setCategory_id(e.target.value)}
          >
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>

        <div className="relative">
          <label
            htmlFor="price"
            className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
          >
            Price
          </label>
          <input
            type="number"
            id="price"
            className="shadow-sm bg-gray-50 border border-cyan-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full p-2.5 dark:bg-gray-700 dark:border-cyan-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-cyan-500 dark:focus:border-cyan-500"
            placeholder="Enter price"
            required
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
          {errorProducts && <Error message={errorProducts}/>}

        <div className="flex flex-col gap-3">
          <button
            type="submit"
            className="text-white bg-cyan-500 hover:bg-cyan-600 focus:ring-4 focus:outline-none focus:ring-cyan-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
          >
            {loadingProducts ? <ButtonLoading/>: 'submit'}
          </button>
        </div>
      </form>
      </div>
     
    </section>
  );
};

export default CreateProduct;
