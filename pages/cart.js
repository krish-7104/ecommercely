import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";
const Cart = ({ cart, subTotal, clearCart, addToCart, removeFromCart }) => {
  const router = useRouter();
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      router.push("/");
    }
  }, [router]);
  return (
    <div className="bg-gray-900 min-h-[93vh]">
      <div className="container mx-auto">
        <h2 className="font-Montserrat font-bold text-2xl py-6 text-center text-emerald-600">
          Your Shopping Cart
        </h2>
        <div className="flex flex-col">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                {Object.keys(cart).length !== 0 ? (
                  <table className="min-w-[80%] mx-auto">
                    <thead className="border-emerald-400 border-b">
                      <tr>
                        <th
                          scope="col"
                          className="font-Montserrat text-md font-medium text-gray-100 px-6 py-4 text-left"
                        >
                          #
                        </th>
                        <th
                          scope="col"
                          className="font-Montserrat text-md font-medium text-gray-100 px-6 py-4 text-left"
                        >
                          Product Details
                        </th>
                        <th
                          scope="col"
                          className="font-Montserrat text-md font-medium text-gray-100 px-6 py-4 text-left"
                        >
                          Price
                        </th>
                        <th
                          scope="col"
                          className="font-Montserrat text-md font-medium text-gray-100 px-6 py-4 text-center"
                        >
                          Quantity
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {Object.keys(cart).map((item, index) => {
                        return (
                          <tr key={item}>
                            <td className="font-Montserrat px-6 py-4 whitespace-nowrap text-md font-medium text-emerald-200">
                              {index + 1}
                            </td>
                            <Link href={`/product/${item}`}>
                              <td className="font-Montserrat text-md text-gray-200 font-light px-6 py-4 whitespace-nowrap">
                                {cart[item].name +
                                  " (" +
                                  cart[item].variant +
                                  "/" +
                                  cart[item].size +
                                  ")"}
                              </td>
                            </Link>
                            <td className="font-Montserrat text-md text-gray-200 font-light px-6 py-4 whitespace-nowrap">
                              ₹{cart[item].price}
                            </td>
                            <td className="font-Montserrat text-md text-gray-200 font-light px-6 py-4 whitespace-nowrap">
                              <div className="font-Montserrat flex justify-evenly bg-gray-800 px-2 py-2 rounded-md">
                                <span
                                  className="font-Montserrat text-gray-400 text-center flex items-center px-2 cursor-pointer"
                                  onClick={() =>
                                    removeFromCart(
                                      item,
                                      1,
                                      cart[item].price,
                                      cart[item].name,
                                      cart[item].size,
                                      cart[item].variant
                                    )
                                  }
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-5 h-5"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      d="M19.5 12h-15"
                                    />
                                  </svg>
                                </span>
                                <p className="font-Montserrat text-gray-200">
                                  {cart[item].qty}
                                </p>
                                <span
                                  className="text-gray-400 text-center flex items-center px-2 cursor-pointer"
                                  onClick={() =>
                                    addToCart(
                                      item,
                                      1,
                                      cart[item].price,
                                      cart[item].name,
                                      cart[item].size,
                                      cart[item].variant
                                    )
                                  }
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-5 h-5"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      d="M12 4.5v15m7.5-7.5h-15"
                                    />
                                  </svg>
                                </span>
                              </div>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                ) : (
                  <p className="font-Montserrat text-emerald-500 text-xl text-center">
                    Cart Is Empty
                  </p>
                )}
                {Object.keys(cart).length !== 0 && (
                  <div className="flex justify-center mt-12 w-[70%] mx-auto">
                    <p className="font-Montserrat w-2/3 text-gray-200 text-2xl">
                      Subtotal ₹{subTotal}
                    </p>
                    <div className="w-1/3 flex justify-evenly">
                      <button
                        className="font-Montserrat text-emerald-600 px-4 py-2 rounded-md border border-emerald-500"
                        onClick={clearCart}
                      >
                        Clear Cart
                      </button>
                      <button
                        className="font-Montserrat font-semibold bg-emerald-600 px-4 py-2 rounded-md text-gray-900 hover:bg-emerald-500"
                        onClick={() => router.push("/checkout")}
                      >
                        Checkout
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
