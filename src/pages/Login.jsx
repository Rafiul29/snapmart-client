import { Link, useNavigate } from "react-router-dom";

import { useContext, useEffect, useState } from "react";
import AuthContext from "../context/AuthContext";
import Error from "../components/ui/Error";
import ButtonLoading from "../components/ui/ButtonLoading";

const Login = () => {
  const { login, user, loading, error } = useContext(AuthContext);

  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  //submit form
  const handleSubmit = async (e) => {
    e.preventDefault();
    const credentials = { username, password };
    try {
      await login(credentials);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (user?.user_id) {
      navigate("/dashboard");
    }
  });

  return (
    <section className="min-h-screen flex justify-center items-center ">
      <div className="w-full md:w-4/6 lg:w-2/6 md:bg-white  p-6 md:rounded-lg md:shadow-md">
        <h2 className=" text-center text-2xl md:text-3xl font-extrabold text-gray-900 mb-4">
          Please Login
        </h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="relative">
            <label
              htmlFor="username"
              className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
            >
              User Name
            </label>

            <input
              type="text"
              id="username"
              className="shadow-sm bg-gray-50 border border-cyan-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full p-2.5 dark:bg-gray-700 dark:border-cyan-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-cyan-500 dark:focus:border-cyan-500"
              placeholder="Enter your username"
              required
              value={username}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>

          <div className="relative">
            <label
              htmlFor="password"
              className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="shadow-sm bg-gray-50 border border-cyan-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full p-2.5 dark:bg-gray-700 dark:border-cyan-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-cyan-500 dark:focus:border-cyan-500"
              placeholder="Enter your password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {error && <Error message={error} />}

          <div className="flex flex-col gap-3">
            <button
              disabled={loading}
              type="submit"
              className="text-white bg-cyan-500 hover:bg-cyan-600 focus:ring-4 focus:outline-none focus:ring-cyan-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
            >
              {loading ? <ButtonLoading /> : "Submit"}
            </button>
            <p>
              <span>Don't have an account? </span>
              <Link
                to="/register"
                className="font-medium text-cyan-500 ml-2 underline"
              >
                Register Now
              </Link>
            </p>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Login;
