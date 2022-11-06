import React, { useRef, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { HiShoppingCart } from "react-icons/hi";
import { RiAccountCircleFill } from "react-icons/ri";
const Navbar = ({
  user,
  cart,
  addToCart,
  removeFromCart,
  clearCart,
  subTotal,
  logoutHandler,
}) => {
  const [dropdown, setDropDown] = useState(false);
  const router = useRouter();
  const openCartHandler = () => {
    router.push("/cart");
  };
  return (
    <div className="flex flex-col md:flex-row md:justify-start justify-center items-center py-2 shadow-md sticky top-0 z-10 bg-gray-900">
      <div className="logo ml-5 mr-auto md:mr-5 md:mt-0 mt-2">
        <Link href={"/"}>
          <a>
            <p className="text-emerald-500 text-xl font-bold">ECommercely</p>
          </a>
        </Link>
      </div>
      <div className="nav py-4">
        <ul className="flex space-x-6 font-semibold">
          <Link href={"/products?type=tshirts"}>
            <a>
              <li className="text-emerald-700 hover:text-emerald-600">
                T-Shirts
              </li>
            </a>
          </Link>
          <Link href={"/products?type=shirts"}>
            <a>
              <li className="text-emerald-700 hover:text-emerald-600">
                Shirts
              </li>
            </a>
          </Link>
          <Link href={"/products?type=hoddies"}>
            <a>
              <li className="text-emerald-700 hover:text-emerald-600">
                Hoddies
              </li>
            </a>
          </Link>
          <Link href={"/products?type=jeans"}>
            <a>
              <li className="text-emerald-700 hover:text-emerald-600">Jeans</li>
            </a>
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
                <li className="text-sm font-semibold py-1 text-gray-600 hover:text-black">
                  My Account
                </li>
              </Link>
              <Link href={"/orders"}>
                <li className="text-sm font-semibold py-1 text-gray-600 hover:text-black">
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
          <RiAccountCircleFill
            onMouseEnter={() => setDropDown(true)}
            onMouseLeave={() => setDropDown(false)}
            className="mr-3 text-xl md:text-2xl text-emerald-600 hover:text-emerald-500"
          />
        )}
        <div className="relative" onClick={openCartHandler}>
          <span
            className="absolute right-0 -top-1 text-white bg-emerald-600 rounded-full px-1"
            style={{ fontSize: 8 }}
          >
            {cart !== undefined ? Object.keys(cart).length : 0}
          </span>
          <HiShoppingCart className="text-xl md:text-2xl flex justify-center align-middle  text-emerald-600 hover:text-emerald-500" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
