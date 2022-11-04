import Link from "next/link";
import React, { useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";
const Checkout = ({ cart, subTotal, clearCart }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [pincode, setPincode] = useState("");
  const [address, setAddress] = useState("");

  const router = useRouter();
  const payNowHandler = async () => {
    if (Object.keys(cart).length === 0) {
      toast.warn("Card Is Empty!", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } else {
      if (name && email && phone && state && city && pincode && address) {
        let id = Date.now() * 10 * Math.random().toString().slice(0, 10);
        const body = {
          email,
          address: [address, state, city, pincode],
          amount: subTotal,
          orderId: parseInt(id),
          products: cart,
        };
        let res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/order`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(body),
        });
        let response = await res.json();
        toast.success("Payment Done Successfully!", {
          position: "bottom-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "dark",
        });
        setTimeout(() => {
          router.push(`/order/?id=${response.orderId}`);
        }, 1400);
        clearCart();
      } else {
        toast.error("Fill All The Details!", {
          position: "bottom-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      }
    }
  };

  const ref = useRef();
  return (
    <div className="container m-auto">
      <h1 className="font-bold text-5xl my-10 text-center">Checkout</h1>
      <h2 className="font-bold text-2xl my-4 text-center">
        1. Delivery Details
      </h2>
      <section className="text-gray-600 body-font relative">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    htmlFor="name"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Name
                  </label>
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    id="name"
                    name="name"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    htmlFor="email"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Email
                  </label>
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    htmlFor="state"
                    className="leading-7 text-sm text-gray-600"
                  >
                    State
                  </label>
                  <input
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                    type="text"
                    id="state"
                    name="state"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    htmlFor="city"
                    className="leading-7 text-sm text-gray-600"
                  >
                    City
                  </label>
                  <input
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    type="text"
                    id="city"
                    name="city"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    htmlFor="phone"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Phone No
                  </label>
                  <input
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    type="number"
                    id="phone"
                    name="phone"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    htmlFor="pincode"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Pincode
                  </label>
                  <input
                    value={pincode}
                    onChange={(e) => setPincode(e.target.value)}
                    type="number"
                    id="pincode"
                    name="pincode"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    htmlFor="address"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Address
                  </label>
                  <textarea
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    id="address"
                    name="address"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
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
                <div className="item flex m-auto justify-between items-center bg-indigo-300 rounded-md py-3 px-2 md:w-2/3 md:px-10 mb-3">
                  <div className="font-normal text-sm md:text-lg">
                    {cart[k].name +
                      " " +
                      cart[k].size +
                      " " +
                      cart[k].variant +
                      " - ₹" +
                      cart[k].price}
                  </div>
                  <div className="mx-2 font-normal text-sm md:text-lg">
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
          <button
            className="bg-indigo-700 px-10 py-4 text-white font-semibold text-xl rounded-md"
            onClick={payNowHandler}
          >
            Pay Now!
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Checkout;
