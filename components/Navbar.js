import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { HiShoppingCart } from "react-icons/hi";
import {
  AiOutlineClose,
  AiFillPlusCircle,
  AiFillMinusCircle,
} from "react-icons/ai";
import { RiAccountCircleFill } from "react-icons/ri";
const Navbar = ({ cart, addToCart, removeFromCart, clearCart, subTotal }) => {
  const ref = useRef();
  const toggleCart = () => {
    if (ref.current.classList.contains("translate-x-full")) {
      ref.current.classList.remove("translate-x-full");
      ref.current.classList.add("translate-x-0");
    } else if (!ref.current.classList.contains("translate-x-full")) {
      ref.current.classList.add("translate-x-full");
      ref.current.classList.remove("translate-x-0");
    }
  };
  return (
    <div className="flex flex-col md:flex-row md:justify-start justify-center items-center py-2 shadow-md sticky top-0 bg-white z-10">
      <div className="logo mx-5">
        <Link href={"/"}>
          <a>
            <Image
              src={"/logoTitle.png"}
              height={40}
              width={200}
              alt="nav logo"
            />
          </a>
        </Link>
      </div>
      <div className="nav py-4">
        <ul className="flex space-x-6 font-bold">
          <Link href={"/tshirts"}>
            <a>
              <li className="text-indigo-500">T-Shirts</li>
            </a>
          </Link>
          <Link href={"/hoddies"}>
            <a>
              <li className="text-indigo-500">Hoddies</li>
            </a>
          </Link>
          <Link href={"/laptop"}>
            <a>
              <li className="text-indigo-500">Laptop</li>
            </a>
          </Link>
        </ul>
      </div>
      <div className="cart absolute right-0 mx-5 cursor-pointer flex">
        <Link href={"/login"}>
          <a>
            <RiAccountCircleFill className="mr-2 text-xl md:text-3xl" />
          </a>
        </Link>
        <HiShoppingCart className="text-xl md:text-3xl" onClick={toggleCart} />
      </div>
      <div
        className={`sidecart absolute top-0 right-0 bg-indigo-200 p-10 text-indigo-800 transition-transform ${
          Object.keys(cart).length !== 0 ? "translate-x-0" : "translate-x-full"
        } rounded-md z-10 w-80 h-[100vh] flex justify-start flex-col`}
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
          {Object.keys(cart).length === 0 && (
            <div className="text-center font-normal">No Items In The Cart</div>
          )}
          {Object.keys(cart).map((k) => {
            return (
              <li key={k}>
                <div className="item flex">
                  <div className="w-3/4 font-normal text-sm">
                    {cart[k].name}
                  </div>
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
