import React from "react";
import Link from "next/link";
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";
const Cart = ({ cart, subTotal, clearCart }) => {
  return (
    <div className="bg-gray-900 min-h-[93vh]">
      <div className="container mx-auto">
        <h2 className="font-bold text-2xl py-6 text-center text-emerald-600">
          Shopping Cart
        </h2>
        {Object.keys(cart).map((item) => {
          return (
            <div key={item} className="flex justify-evenly items-center py-4">
              <p className="text-gray-200">
                {cart[item].name +
                  " (" +
                  cart[item].variant +
                  "/" +
                  cart[item].size +
                  ")"}
              </p>
              <p className="text-gray-500">{cart[item].price}</p>
              <div>
                <span></span>
                <p></p>
                <span></span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cart;
