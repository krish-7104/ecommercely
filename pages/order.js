/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import Order from "../models/Order";
import mongoose from "mongoose";
const MyOrder = ({ order }) => {
  return (
    <section className="text-gray-600 body-font overflow-hidden bg-gray-900">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
            <h2 className="font-Montserrat text-xs text-gray-800 tracking-widest bg-emerald-400 px-3 py-1 mb-2 inline-block font-semibold rounded-sm">
              {order.status.toUpperCase()}
            </h2>
            <h1 className="font-Montserrat text-gray-200 text-3xl title-font font-medium mb-4">
              Order Id: {order.orderId}
            </h1>
            <p className="font-Montserrat leading-relaxed mb-4">
              You order has been successfully placed. Will be soon reached to
              your place.
            </p>
            <div className="flex mb-4">
              <li className="flex-grow border-b-2 border-gray-300 py-2 text-lg px-1 text-left font-bold text-emerald-600">
                Products
              </li>
              <li className="flex-grow border-b-2 border-gray-300 py-2 text-lg px-1 text-right font-bold text-emerald-600">
                Total
              </li>
            </div>
            {Object.keys(order.products).map((k) => {
              return (
                <div className="flex border-b border-gray-100 py-2" key={k}>
                  <Link href={`/product/${k}`}>
                    <p className="font-Montserrat text-gray-100 text-left">
                      {order.products[k].name +
                        " (" +
                        order.products[k].size +
                        "/" +
                        order.products[k].variant +
                        ")"}
                    </p>
                  </Link>
                  <div className="ml-auto text-gray-200 w-[30%] text-right flex-row">
                    <p className="font-Montserrat text-sm">
                      {order.products[k].qty} x {order.products[k].price}
                    </p>
                    <p className="font-Montserrat font-semibold">
                      {order.products[k].qty * order.products[k].price}
                    </p>
                  </div>
                </div>
              );
            })}
            <div className="flex mt-6">
              {/* <button className="flex mr-auto text-white bg-emerald-500 border-0 py-2 px-6 focus:outline-none hover:bg-emerald-600 rounded">
                Feedback
              </button> */}
              <span className="font-Montserrat title-font font-medium text-2xl text-gray-200">
                Subtotal ???{order.amount}
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

export async function getServerSideProps(context) {
  if (!mongoose.connections[0].readyState) {
    mongoose.connect(process.env.MONGO_URI);
  }
  let order = await Order.findById(context.query.id);
  return {
    props: {
      order: JSON.parse(JSON.stringify(order)),
    },
  };
}

export default MyOrder;
