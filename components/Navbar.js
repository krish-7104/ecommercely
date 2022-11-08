import React, { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
const Navbar = ({ user, cart, logoutHandler }) => {
  const [dropdown, setDropDown] = useState(false);
  const router = useRouter();
  const openCartHandler = () => {
    router.push("/cart");
  };
  return (
    <div className="flex flex-col md:flex-row md:justify-start justify-center items-center py-2 shadow-md sticky top-0 z-10 bg-gray-900">
      <div className="logo ml-5 mr-auto md:mr-5 md:mt-0 mt-2">
        <Link href={"/"}>
          <p className="font-Montserrat text-emerald-500 text-xl font-bold cursor-pointer">
            ECommercely
          </p>
        </Link>
      </div>
      <div className="nav py-4">
        <ul className="flex space-x-6 font-semibold">
          <Link href={"/products?type=tshirts"}>
            <li className="font-Montserrat text-emerald-600 hover:text-emerald-400 cursor-pointer">
              T-Shirts
            </li>
          </Link>
          <Link href={"/products?type=shirts"}>
            <li className="font-Montserrat text-emerald-600 hover:text-emerald-400 cursor-pointer">
              Shirts
            </li>
          </Link>
          <Link href={"/products?type=hoddies"}>
            <li className="font-Montserrat text-emerald-600 hover:text-emerald-400 cursor-pointer">
              Hoddies
            </li>
          </Link>
          <Link href={"/products?type=jeans"}>
            <li className="font-Montserrat text-emerald-600 hover:text-emerald-400 cursor-pointer">
              Jeans
            </li>
          </Link>
        </ul>
      </div>
      <div className="cart absolute right-0 mx-5 cursor-pointer items-center flex md:mt-0 -mt-10">
        {!user.value && (
          <Link href={"/login"}>
            <a className="flex justify-center align-middle bg-emerald-500 mr-2 text-sm font-semibold text-white px-2 py-1 rounded-sm">
              Login
            </a>
          </Link>
        )}
        {dropdown && (
          <div
            onMouseEnter={() => setDropDown(true)}
            onMouseLeave={() => setDropDown(false)}
            className="absolute right-9 top-6 px-4 py-2 rounded-md w-40 bg-white shadow-lg"
          >
            <ul>
              <Link href={"/myaccount"}>
                <li className="font-Montserrat text-sm font-semibold py-1 text-gray-600 hover:text-black">
                  My Account
                </li>
              </Link>
              <Link href={"/orders"}>
                <li className="font-Montserrat text-sm font-semibold py-1 text-gray-600 hover:text-black">
                  Orders
                </li>
              </Link>
              <li
                onClick={logoutHandler}
                className="text-sm font-semibold py-1 text-gray-600 hover:text-black"
              >
                Logout
              </li>
            </ul>
          </div>
        )}
        {user.value && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 mr-2 text-emerald-600 hover:text-emerald-500"
            onMouseEnter={() => setDropDown(true)}
            onMouseLeave={() => setDropDown(false)}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        )}
        <div className="relative" onClick={openCartHandler}>
          <span
            className="absolute right-0 -top-1 text-white bg-emerald-600 rounded-full px-1"
            style={{ fontSize: 8.5 }}
          >
            {cart !== undefined ? Object.keys(cart).length : 0}
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 ml-2 text-emerald-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
