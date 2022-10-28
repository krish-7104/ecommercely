/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
const Order = ({ cart, subTotal }) => {
  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">
              EWEAR
            </h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">
              Order Id: #9735875
            </h1>
            <p className="leading-relaxed mb-4">
              You order has been successfully placed. Will be soon reached to
              your place.
            </p>
            <div class="flex mb-4">
              <a class="flex-grow border-b-2 border-gray-300 py-2 text-lg px-1 text-left font-bold text-indigo-600">
                Products
              </a>
              <a class="flex-grow border-b-2 border-gray-300 py-2 text-lg px-1 text-right font-bold text-indigo-600">
                Total
              </a>
            </div>
            {Object.keys(cart).map((k) => {
              return (
                <div className="flex border-b border-gray-200 py-2" key={k}>
                  <Link href={`/product/${k}`}>
                    <a>
                      <p className="text-gray-500 text-left">
                        {cart[k].name}
                        {/* {cart[k].name.slice(0, 40) + "..."} */}
                      </p>
                    </a>
                  </Link>
                  <div className="ml-auto text-gray-900 w-[30%] text-right flex-row">
                    <p className="text-sm">
                      {cart[k].qty} x {cart[k].price}
                    </p>
                    <p className="font-semibold">
                      {cart[k].qty * cart[k].price}
                    </p>
                  </div>
                </div>
              );
            })}
            <div className="flex mt-6">
              <button className="flex mr-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                Track Order
              </button>
              <span className="title-font font-medium text-2xl text-gray-900">
                Subtotal ₹{subTotal}
              </span>
            </div>
          </div>
          <img
            alt="ecommerce"
            className="lg:w-1/2 w-full lg:h-auto h-64 object-contain object-center rounded-lg"
            src="/orderImage.png"
          />
        </div>
      </div>
    </section>
  );
};

export default Order;
