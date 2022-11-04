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
        let pins = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/pincode`);
        let pinJson = await pins.json();
        if (pinJson.includes(parseInt(pincode))) {
          let id = (Date.now() * 10 * Math.random()).toString().slice(0, 10);
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
          router.push(`/order/?id=${response.orderId}`);
          clearCart();
        } else {
          toast.error("Pincode Is Not Serviceable!", {
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
      <h2 className="font-bold text-2xl my-4 text-center text-indigo-700">
        Delivery Details
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

      <h2 className="font-bold text-2xl my-4 text-center text-indigo-700">
        Review Cart Items
      </h2>
      {Object.keys(cart).length === 0 && (
        <div className="text-center font-semibold text-xl py-6">
          No Items In The Cart
        </div>
      )}
      {Object.keys(cart).length !== 0 && (
        <div className="flex justify-start flex-col p-4 md:p-10">
          <div class="flex flex-col">
            <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                <div class="overflow-hidden">
                  <table class="min-w-full">
                    <thead class="bg-white border-b">
                      <tr>
                        <th
                          scope="col"
                          class="text-md text-indigo-900 px-6 py-4 text-left font-semibold"
                        >
                          #
                        </th>
                        <th
                          scope="col"
                          class="text-md text-indigo-900 px-6 py-4 text-left font-semibold"
                        >
                          Product Name
                        </th>
                        <th
                          scope="col"
                          class="text-md text-indigo-900 px-6 py-4 text-left font-semibold"
                        >
                          Quantity
                        </th>
                        <th
                          scope="col"
                          class="text-md text-indigo-900 px-6 py-4 text-left font-semibold"
                        >
                          Price
                        </th>
                        <th
                          scope="col"
                          class="text-md text-indigo-900 px-6 py-4 text-left font-semibold"
                        >
                          Total
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {Object.keys(cart).map((k, index) => {
                        return (
                          <Link
                            key={k}
                            href={`${process.env.NEXT_PUBLIC_HOST}/product/${k}`}
                          >
                            <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                {index + 1}
                              </td>
                              <td class="text-md text-gray-900 px-6 py-4 whitespace-nowrap cursor-pointer">
                                {cart[k].name +
                                  " " +
                                  cart[k].size +
                                  " " +
                                  cart[k].variant}
                              </td>
                              <td class="text-md text-gray-900 px-6 py-4 whitespace-nowrap">
                                {cart[k].qty}
                              </td>
                              <td class="text-md text-gray-900 px-6 py-4 whitespace-nowrap">
                                {"₹" + cart[k].price}
                              </td>
                              <td class="text-md text-gray-900 px-6 py-4 whitespace-nowrap">
                                {"₹" + cart[k].price * cart[k].qty}
                              </td>
                            </tr>
                          </Link>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

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
      )}

      <ToastContainer />
    </div>
  );
};

export default Checkout;
