/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
const Register = () => {
  return (
    <div className="flex flex-col items-center justify-center mx-auto md:h-screen">
      <div className="w-full rounded-lg shadow-xl md:mt-0 sm:max-w-md xl:p-0 light:bg-gray-800 light:border-gray-700 bg-indigo-100">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl light:text-white">
            Create A Account
          </h1>
          <form className="space-y-4 md:space-y-6" action="#">
            <div>
              <label
                for="name"
                className="block mb-2 text-sm font-medium text-gray-900 light:text-white"
              >
                Full Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Name"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 light:bg-gray-700 light:border-gray-600 light:placeholder-gray-400 light:text-white light:focus:ring-blue-500 light:focus:border-blue-500"
                required=""
              />
            </div>
            <div>
              <label
                for="email"
                className="block mb-2 text-sm font-medium text-gray-900 light:text-white"
              >
                Your email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 light:bg-gray-700 light:border-gray-600 light:placeholder-gray-400 light:text-white light:focus:ring-blue-500 light:focus:border-blue-500"
                placeholder="name@company.com"
                required=""
              />
            </div>
            <div>
              <label
                for="password"
                className="block mb-2 text-sm font-medium text-gray-900 light:text-white"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 light:bg-gray-700 light:border-gray-600 light:placeholder-gray-400 light:text-white light:focus:ring-blue-500 light:focus:border-blue-500"
                required=""
              />
            </div>
            <button
              type="submit"
              className="w-full text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center light:bg-primary-600 light:hover:bg-primary-700 light:focus:ring-primary-800"
            >
              Create Account
            </button>
            <p className="text-sm font-light text-gray-500 light:text-gray-400">
              Already have an account?{" "}
              <Link href="/login">
                <a className="font-medium text-primary-600 hover:underline light:text-primary-500">
                  Sign In
                </a>
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
