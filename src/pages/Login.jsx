import { Link, useNavigate } from "react-router-dom";

import { useEffect, useState } from "react";

const Login = () => {
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm_password, setConfirmPassword] = useState("");

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  //submit form
  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
  };

  const navigate = useNavigate();
  return (
    <section className="min-h-screen flex justify-center items-center bg-cyan-50">
      <div className=" md:w-1/2 lg:w-2/6 bg-white  p-6 rounded-lg shadow-md">
       
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
             
         
            <div className="flex flex-col gap-3">
              <button
                type="submit"
                className="text-white bg-cyan-500 hover:bg-cyan-600 focus:ring-4 focus:outline-none focus:ring-cyan-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
              >
                Submit
              </button>
              <p>
              <span>
                Don't have an account? </span>
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
