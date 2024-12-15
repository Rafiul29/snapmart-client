import { useContext, useState } from "react";
import StoreContext from "../../context/StoreContext";
import Error from "../ui/Error";
import ButtonLoading from "../ui/ButtonLoading";
import { useNavigate } from "react-router-dom";
import SectionTItle from "../SectionTitle";
import SectionTitle from "../SectionTitle";

const CreateCategory = () => {
  const [name, setName] = useState("");

  const { createCategory, errorCategories, loadingCategories } =
    useContext(StoreContext);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await createCategory({ name });
    setName("")
    if (data) {
      navigate("/dashboard/category");
    }

  };

  return (
    <div className="pt-28 flex justify-center">
      <div className="md:w-2/3 lg:w-1/3  bg-white shadow-md  rounded-md px-5 py-8 ">
        <SectionTitle text={'Create a new Category'}/>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="relative">
            <label
              htmlFor="username"
              className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
            >
              Category Name
            </label>

            <input
              type="text"
              id="username"
              className="shadow-sm bg-gray-50 border border-cyan-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full p-2.5 dark:bg-gray-700 dark:border-cyan-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-cyan-500 dark:focus:border-cyan-500"
              placeholder="Enter your username"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          {errorCategories && <Error message={errorCategories} />}
          <button
            disabled={loadingCategories}
            type="submit"
            className="text-white bg-cyan-500 hover:bg-cyan-600 focus:ring-4 focus:outline-none focus:ring-cyan-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
          >
            {loadingCategories ? <ButtonLoading /> : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateCategory;
