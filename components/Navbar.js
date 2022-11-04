import React, { useRef, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { HiShoppingCart } from "react-icons/hi";
import {
  AiOutlineClose,
  AiFillPlusCircle,
  AiFillMinusCircle,
} from "react-icons/ai";
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
  const ref = useRef();
  const [dropdown, setDropDown] = useState(false);
  const router = useRouter();

  const toggleCart = () => {
    if (ref.current.classList.contains("hidden")) {
      ref.current.classList.remove("hidden");
      ref.current.classList.add("block");
    } else if (!ref.current.classList.contains("hidden")) {
      ref.current.classList.add("hidden");
      ref.current.classList.remove("block");
    }
  };

  return (
    <div className="flex flex-col md:flex-row md:justify-start justify-center items-center py-2 shadow-md sticky top-0 bg-white z-10">
      <div className="logo ml-5 mr-auto md:mr-5 md:mt-0 mt-2">
        <Link href={"/"}>
          <a>
            <p className="text-indigo-800 text-xl font-bold">ECommercely</p>
          </a>
        </Link>
      </div>
      <div className="nav py-4">
        <ul className="flex space-x-6 font-semibold">
          <Link href={"/tshirts"}>
            <a>
              <li className="text-indigo-500 hover:text-indigo-700">
                T-Shirts
              </li>
            </a>
          </Link>
          <Link href={"/shirts"}>
            <a>
              <li className="text-indigo-500 hover:text-indigo-700">Shirts</li>
            </a>
          </Link>
          <Link href={"/hoddies"}>
            <a>
              <li className="text-indigo-500 hover:text-indigo-700">Hoddies</li>
            </a>
          </Link>
          <Link href={"/jeans"}>
            <a>
              <li className="text-indigo-500 hover:text-indigo-700">Jeans</li>
            </a>
          </Link>
        </ul>
      </div>
      <div className="cart absolute right-0 mx-5 cursor-pointer items-center flex md:mt-0 -mt-10">
        {!user.value && (
          <Link href={"/login"}>
            <a className="flex justify-center align-middle bg-indigo-500 mr-2 text-sm font-semibold text-white px-2 py-1 rounded-sm">
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
            className="mr-3 text-xl md:text-2xl text-indigo-600 hover:text-indigo-500"
          />
        )}
        <div className="relative" onClick={toggleCart}>
          <span
            className="absolute right-0 -top-1 text-white bg-indigo-600 rounded-full px-1"
            style={{ fontSize: 8 }}
          >
            {cart !== undefined ? Object.keys(cart).length : 0}
          </span>
          <HiShoppingCart className="text-xl md:text-2xl flex justify-center align-middle  text-indigo-600 hover:text-indigo-500" />
        </div>
      </div>
      {/* <div
        className={`sidecart absolute top-0 right-0 bg-indigo-200 p-10 text-indigo-800 transition-transform ${
          Object.keys(cart).length !== 0 ? "block" : "hidden"
        } rounded-md z-10 w-80 h-[100vh] flex justify-start flex-col`}
        ref={ref}
      > */}
      <div
        className="sidecart absolute top-0 right-0 bg-indigo-200 p-10 text-indigo-800 transition-transform hidden rounded-md z-10 w-80 h-[100vh] justify-start flex-col"
        ref={ref}
      >
        <h2 className="font-bold text-xl mb-4">Shopping Cart</h2>
        <span
          onClick={toggleCart}
          className="absolute top-6 right-6 cursor-pointer text-xl"
        >
          <AiOutlineClose />
        </span>
        <ol>
          {console.log(cart)}
          {cart === undefined && (
            <div className="text-center font-normal">No Items In The Cart</div>
          )}
          {cart !== undefined &&
            Object.keys(cart).map((k) => {
              return (
                <li key={k}>
                  <div className="item flex">
                    <Link href={`/product/${k}`}>
                      <div className="w-3/4 font-normal text-sm cursor-pointer">
                        {cart[k].name +
                          " " +
                          cart[k].size +
                          " " +
                          cart[k].variant +
                          " - ₹" +
                          cart[k].price}
                      </div>
                    </Link>
                    <div className="w-1/4 flex items-center justify-center mb-2 h-auto ">
                      <AiFillMinusCircle
                        className="cursor-pointer text-lg"
                        onClick={() =>
                          removeFromCart(
                            k,
                            1,
                            cart[k].price,
                            cart[k].name,
                            cart[k].size,
                            cart[k].variant
                          )
                        }
                      />
                      <span className="mx-2 font-semibold">{cart[k].qty}</span>
                      <AiFillPlusCircle
                        className="cursor-pointer text-lg"
                        onClick={() =>
                          addToCart(
                            k,
                            1,
                            cart[k].price,
                            cart[k].name,
                            cart[k].size,
                            cart[k].variant
                          )
                        }
                      />
                    </div>
                  </div>
                </li>
              );
            })}
        </ol>
        <div className="text-center text-md text-indigo-600 mt-10">
          Subtotal : ₹{subTotal}
        </div>
        <div className="btns flex justify-center align-middle mt-5">
          <Link href="/checkout">
            <button className="text-white bg-indigo-700 border-0 py-2 px-4 focus:outline-none hover:bg-indigo-600 rounded mx-auto">
              Checkout
            </button>
          </Link>
          <button
            className="border-2 border-indigo-700 text-indigo-700 py-2 px-4 focus:outline-none hover:bg-indigo-700 hover:text-white rounded mx-auto"
            onClick={clearCart}
          >
            Clear Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
