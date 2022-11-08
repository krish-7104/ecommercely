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
      toast.warn("Cart Is Empty!", {
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
        // let pins = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/pincode`);
        // let pinJson = await pins.json();
        // if (pinJson.includes(parseInt(pincode))) {
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
        clearCart("checkout");
        toast("Order Placed Successfully!", {
          position: "bottom-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        // } else {
        //   toast.error("Pincode Is Not Serviceable!", {
        //     position: "bottom-right",
        //     autoClose: 3000,
        //     hideProgressBar: false,
        //     closeOnClick: true,
        //     pauseOnHover: true,
        //     draggable: true,
        //     progress: undefined,
        //     theme: "dark",
        //   });
        // }
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
    <div className="container m-auto bg-gray-900">
      <h1 className="font-Montserrat font-bold text-5xl py-5 text-center text-white">
        Checkout
      </h1>
      <h2 className="font-Montserrat font-bold text-2xl my-4 text-center text-emerald-700">
        Delivery Details
      </h2>
      <section className="text-gray-300 body-font relative">
        <div className="container px-5 py-6 mx-auto">
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    htmlFor="name"
                    className="font-Montserrat leading-7 text-sm text-gray-300"
                  >
                    Name
                  </label>
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    id="name"
                    name="name"
                    className="font-Montserrat w-full bg-gray-800 bg-opacity-50 rounded text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    htmlFor="email"
                    className="font-Montserrat leading-7 text-sm text-gray-300"
                  >
                    Email
                  </label>
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    id="email"
                    name="email"
                    className="font-Montserrat w-full bg-gray-800 bg-opacity-50 rounded text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    htmlFor="phone"
                    className="font-Montserrat leading-7 text-sm text-gray-300"
                  >
                    Phone No
                  </label>
                  <input
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    type="number"
                    id="phone"
                    name="phone"
                    className="font-Montserrat w-full bg-gray-800 bg-opacity-50 rounded text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    htmlFor="pincode"
                    className="font-Montserrat leading-7 text-sm text-gray-300"
                  >
                    Pincode
                  </label>
                  <input
                    value={pincode}
                    onChange={(e) => setPincode(e.target.value)}
                    type="number"
                    id="pincode"
                    name="pincode"
                    className="font-Montserrat w-full bg-gray-800 bg-opacity-50 rounded text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    htmlFor="state"
                    className="font-Montserrat leading-7 text-sm text-gray-300"
                  >
                    State
                  </label>
                  <input
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                    type="text"
                    id="state"
                    name="state"
                    className="font-Montserrat w-full bg-gray-800 bg-opacity-50 rounded text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    htmlFor="city"
                    className="font-Montserrat leading-7 text-sm text-gray-300"
                  >
                    City
                  </label>
                  <input
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    type="text"
                    id="city"
                    name="city"
                    className="font-Montserrat w-full bg-gray-800 bg-opacity-50 rounded text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>

              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    htmlFor="address"
                    className="font-Montserrat leading-7 text-sm text-gray-300"
                  >
                    Address
                  </label>
                  <textarea
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    id="address"
                    name="address"
                    className="font-Montserrat w-full bg-gray-800 bg-opacity-50 rounded h-32 text-base outline-none py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <h2 className="font-bold text-2xl my-4 text-center text-emerald-700 font-Montserrat">
        Review Cart Items
      </h2>
      {Object.keys(cart).length !== 0 && (
        <div className="flex justify-start flex-col p-4 md:p-10">
          <div className="flex flex-col">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                <div className="overflow-hidden">
                  <table className="min-w-full">
                    <thead className="bg-gray-800 border-b">
                      <tr>
                        <th
                          scope="col"
                          className="font-Montserrat text-md text-emerald-500 px-6 py-4 text-left font-semibold"
                        >
                          #
                        </th>
                        <th
                          scope="col"
                          className="font-Montserrat text-md text-emerald-500 px-6 py-4 text-left font-semibold"
                        >
                          Product Name
                        </th>
                        <th
                          scope="col"
                          className="font-Montserrat text-md text-emerald-500 px-6 py-4 text-left font-semibold"
                        >
                          Quantity
                        </th>
                        <th
                          scope="col"
                          className="font-Montserrat text-md text-emerald-500 px-6 py-4 text-left font-semibold"
                        >
                          Price
                        </th>
                        <th
                          scope="col"
                          className="font-Montserrat text-md text-emerald-500 px-6 py-4 text-left font-semibold"
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
                            <tr className="bg-gray-800 transition duration-300 ease-in-out">
                              <td className="font-Montserrat px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-200">
                                {index + 1}
                              </td>
                              <td className="font-Montserrat text-md text-gray-200 px-6 py-4 whitespace-nowrap cursor-pointer">
                                {cart[k].name +
                                  " " +
                                  cart[k].size +
                                  " " +
                                  cart[k].variant}
                              </td>
                              <td className="font-Montserrat text-md text-gray-200 px-6 py-4 whitespace-nowrap">
                                {cart[k].qty}
                              </td>
                              <td className="font-Montserrat text-md text-gray-200 px-6 py-4 whitespace-nowrap">
                                {"₹" + cart[k].price}
                              </td>
                              <td className="font-Montserrat text-md text-gray-200 px-6 py-4 whitespace-nowrap">
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

          <div className="font-Montserrat text-center text-2xl text-emerald-300 mt-10">
            Subtotal : ₹{subTotal}
          </div>
          <div className="m-auto mt-10">
            <button
              className="font-Montserrat bg-emerald-700 px-10 py-4 text-gray-900 font-semibold text-xl rounded-md hover:bg-emerald-500"
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
