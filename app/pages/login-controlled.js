import React from "react";
import { useState } from "react";

const Login = function () {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const onSubmit = function (e) {
    e.preventDefault();
    alert(
      "Email:" +
        JSON.stringify(user.email) +
        "\nPassword:" +
        JSON.stringify(user.password)
    );
  };
  return (
    <div className="relative flex space-y-6 flex-col min-h-screen overflow-hidden">
      <p></p>
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-gray-700 mr-2 mb-2 underline">
          Sign in
        </h1>
        <form className="mt-6" onSubmit={onSubmit}>
          <div className="mb-2">
            <label
              htmlFor="email"
              className="block text-gray-700 mr-2 mb-2   text-sm font-semibold "
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              onChange={(e) =>
                setUser({ ...user, ...{ email: e.target.value } })
              }
              className="block w-full px-4 py-2 mt-2  text-gray-700 mr-2 mb-2   bg-white border rounded-md   focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="password"
              className="block text-sm text-gray-700 mr-2 mb-2  font-semibold "
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              onChange={(e) =>
                setUser({ ...user, ...{ password: e.target.value } })
              }
              className="block w-full px-4 py-2 mt-2 text-gray-700 mr-2 mb-2   bg-white border rounded-md   focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <a
            href="#"
            className="text-xs  text-gray-700 mr-2 mb-2 dark:hover:bg-blue-500  hover:underline"
          >
            Forget Password?
          </a>
          <div className="mt-6">
            <button className="w-full px-4 py-2 tracking-wide hover:underline text-gray-700 mr-2 mb-2 dark:hover:bg-blue-500 hover:text-[#007178]  transition-colors duration-200 transform  rounded-md  focus:outline-none">
              Login
            </button>
          </div>
        </form>

        <p className="mt-8 text-xs font-light text-gray-700 mr-2 mb-2   text-center ">
          {" "}
          Don't have an account?{" "}
          <a
            href="#"
            className="font-medium  hover:underline hover:text-[#007178] dark:hover:text-blue-500 "
          >
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};
export default Login;
