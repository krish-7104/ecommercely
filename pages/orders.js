import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Order from "../models/Order";
import mongoose from "mongoose";
const Orders = ({ allOrders }) => {
  const router = useRouter();
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      router.push("/");
    }
  }, [router]);
  return (
    <div className="bg-gray-900 pb-10">
      <p className="text-center font-semibold text-2xl py-6 text-emerald-500">
        My Orders
      </p>
      {JSON.parse(allOrders).map((order) => {
        return (
          <div
            key={order._id}
            className="bg-gray-800 mt-4 p-4 rounded-lg md:w-[70%] w-[90%] mx-auto"
          >
            <div className="flex justify-between mb-4">
              <p className="text-gray-500">
                <span className="text-emerald-500">Id: </span>
                {order.orderId}
              </p>
              <p className="bg-gray-900 mr-2 px-2 py-1 text-sm text-emerald-600 rounded-md flex justify-center items-center">
                <span className="mr-1">{order.status}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
                  />
                </svg>
              </p>
            </div>
            <ul>
              {Object.keys(order.products).map((product, index) => {
                return (
                  <div key={product} className="flex w-full my-2">
                    <p className="text-gray-100 text-md w-3/4 md:text-lg">
                      <span className="text-emerald-500">
                        {index + 1 + ". "}
                      </span>{" "}
                      {order.products[product].name}
                      {" ("}
                      {order.products[product].variant}
                      {"/"}
                      {order.products[product].size}
                      {")"}
                    </p>
                    <p className="text-gray-100 text-md w-1/4 text-center md:text-lg">
                      {order.products[product].qty} x
                      <span className="text-emerald-500">
                        {" "}
                        ₹{order.products[product].price}
                      </span>
                    </p>
                  </div>
                );
              })}
              <div className="flex justify-end">
                <p className="text-gray-200 text-bold mt-4 text-md md:text-lg bg-emerald-700 inline-block px-2 py-1 rounded-sm mr-2 mb-2">
                  Subtotal ₹{order.amount}
                </p>
              </div>
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export async function getServerSideProps(context) {
  if (!mongoose.connections[0].readyState) {
    mongoose.connect(process.env.MONGO_URI);
  }
  let orders = await Order.find({});
  return {
    props: { allOrders: JSON.stringify(orders) },
  };
}
export default Orders;
