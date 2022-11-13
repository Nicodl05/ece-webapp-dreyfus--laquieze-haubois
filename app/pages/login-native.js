import React from "react";
import { useState } from "react";

const Login = function () {
  const onSubmit = function (e) {
    e.preventDefault();
    const data = new FormData(e.target);
    // display the content of data
    // console.log(data);
    // display the content of data as a string
    alert(JSON.stringify(Object.fromEntries(data)));
  };
  return (
    <div className="relative space-y-6 flex flex-col min-h-screen overflow-hidden">
      <p></p>
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-gray-700 mr-2 mb-2   underline">
          Sign in
        </h1>
        <form className="mt-6" onSubmit={onSubmit}>
          <div className="mb-2">
            <label
              for="email"
              className="block text-gray-700 mr-2 mb-2   text-sm font-semibold "
            >
              Email
            </label>
            <input
              type="email"
              name="user[email]"
              id="email"
              className="block w-full px-4 py-2 mt-2  text-gray-700 mr-2 mb-2   bg-white border rounded-md   focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-2">
            <label
              for="password"
              className="block text-sm text-gray-700 mr-2 mb-2  font-semibold "
            >
              Password
            </label>
            <input
              type="password"
              name="user[password]"
              id="password"
              className="block w-full px-4 py-2 mt-2 text-gray-700 mr-2 mb-2   bg-white border rounded-md   focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <a
            href="#"
            className="text-xs  text-gray-700 mr-2 mb-2 dark:hover:text-blue-500 hover:text-[#007178]  hover:underline"
          >
            Forget Password?
          </a>
          <div className="mt-6">
            <button className="w-full px-4 py-2 tracking-wide hover:underline text-gray-700 mr-2 mb-2 dark:hover:text-blue-500 hover:text-[#007178]  transition-colors duration-200 transform  rounded-md  focus:outline-none">
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