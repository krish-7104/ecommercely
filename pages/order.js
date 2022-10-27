/* eslint-disable @next/next/no-img-element */
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
              <a class="flex-grow border-b-2 border-gray-300 py-2 text-lg px-1 text-left">
                Description
              </a>
              <a class="flex-grow border-b-2 border-gray-300 py-2 text-lg px-1 text-right">
                Quantity
              </a>
              <a class="flex-grow border-b-2 border-gray-300 py-2 text-lg px-1 text-right">
                Item Total
              </a>
            </div>
            {Object.keys(cart).map((k) => {
              return (
                <div className="flex border-b border-gray-200 py-2" key={k}>
                  <span className="text-gray-500">{cart[k].name}</span>
                  <span className="ml-auto text-gray-900">{cart[k].qty}</span>
                  <span className="ml-auto text-gray-900">{cart[k].price}</span>
                </div>
              );
            })}
            <div className="flex mt-6">
              <span className="title-font font-medium text-2xl text-gray-900">
                Subtotal ₹{subTotal}
              </span>
              <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                Track Order
              </button>
            </div>
          </div>
          <img
            alt="ecommerce"
            className="lg:w-1/2 w-full lg:h-auto h-64 object-fit object-center rounded-lg"
            src="https://images.unsplash.com/photo-1666859894548-ea54ac7a7591?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
          />
        </div>
      </div>
    </section>
  );
};

export default Order;
