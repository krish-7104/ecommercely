import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import Link from "next/link";
import React, { useRef } from "react";

const Checkout = ({ cart, addToCart, removeFromCart, clearCart, subTotal }) => {
  const ref = useRef();
  return (
    <div className="container m-auto">
      <h1 className="font-bold text-5xl my-10 text-center">Checkout</h1>
      <h2 className="font-bold text-2xl my-4 text-center">
        1. Delivery Details
      </h2>
      <section class="text-gray-600 body-font relative">
        <div class="container px-5 py-24 mx-auto">
          <div class="lg:w-1/2 md:w-2/3 mx-auto">
            <div class="flex flex-wrap -m-2">
              <div class="p-2 w-1/2">
                <div class="relative">
                  <label for="name" class="leading-7 text-sm text-gray-600">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div class="p-2 w-1/2">
                <div class="relative">
                  <label for="email" class="leading-7 text-sm text-gray-600">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div class="p-2 w-1/2">
                <div class="relative">
                  <label for="state" class="leading-7 text-sm text-gray-600">
                    State
                  </label>
                  <input
                    type="text"
                    id="state"
                    name="state"
                    class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div class="p-2 w-1/2">
                <div class="relative">
                  <label for="city" class="leading-7 text-sm text-gray-600">
                    City
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div class="p-2 w-1/2">
                <div class="relative">
                  <label for="phone" class="leading-7 text-sm text-gray-600">
                    Phone No
                  </label>
                  <input
                    type="number"
                    id="phone"
                    name="phone"
                    class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div class="p-2 w-1/2">
                <div class="relative">
                  <label for="pincode" class="leading-7 text-sm text-gray-600">
                    Pincode
                  </label>
                  <input
                    type="number"
                    id="pincode"
                    name="pincode"
                    class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div class="p-2 w-full">
                <div class="relative">
                  <label for="address" class="leading-7 text-sm text-gray-600">
                    Address
                  </label>
                  <textarea
                    id="address"
                    name="address"
                    class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <h2 className="font-bold text-2xl my-4 text-center">
        2. Review Cart Items
      </h2>
      <div
        className="sidecart text-indigo-800 rounded-md z-10 flex justify-start flex-col p-4 md:p-10"
        ref={ref}
      >
        <ol>
          {Object.keys(cart).length === 0 && (
            <div className="text-center font-normal">No Items In The Cart</div>
          )}
          {Object.keys(cart).map((k) => {
            return (
              <li key={k}>
                <div className="item flex m-auto justify-between items-center bg-indigo-300 rounded-md py-3 px-2 md:w-2/3 md:px-10">
                  <div className="font-semibold text-md md:text-2xl">
                    {cart[k].name}
                  </div>
                  <div className="mx-2 font-semibold text-md md:text-2xl">
                    {cart[k].qty} Item
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
        <div className="text-center text-2xl text-indigo-600 mt-10">
          Subtotal : ₹{subTotal}
        </div>
        <div className="m-auto mt-10">
          <button className="bg-indigo-700 px-10 py-4 text-white font-semibold text-xl rounded-md">
            Pay Now!
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
