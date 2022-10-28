/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";
import React, { useState } from "react";
import Product from "../../models/Product";
import mongoose from "mongoose";
const Post = ({ addToCart, product }) => {
  const router = useRouter();
  const { slug } = router.query;
  const [pin, setPin] = useState();
  const [available, setAvailable] = useState("");

  const checkServiceAvailability = async () => {
    let pins = await fetch("http://localhost:3000/api/pincode");
    let pinJson = await pins.json();
    if (pinJson.includes(parseInt(pin))) setAvailable(true);
    else setAvailable(false);
  };

  return (
    <>
      <section class="text-gray-600 body-font overflow-hidden">
        <div class="container px-5 py-16 mx-auto">
          <div class="lg:w-4/5 mx-auto flex flex-wrap">
            <img
              alt="product image"
              class="lg:w-1/2 w-full object-contain object-top rounded"
              src={product.img}
            />
            <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 class="text-sm title-font text-indigo-500 tracking-widest font-bold">
                {product.category.toUpperCase()}
              </h2>
              <h1 class="text-gray-900 text-3xl title-font font-medium my-2">
                {product.title}
              </h1>
              <p class="leading-relaxed">{product.desc}</p>
              <div class="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                <div class="flex">
                  <span class="mr-3">
                    <span className="text-indigo-500 font-semibold">Color</span>{" "}
                    :{" "}
                    {product.color.charAt(0).toUpperCase() +
                      product.color.slice(1, product.color.length)}
                  </span>
                </div>
                {product.size && (
                  <div class="flex ml-6 items-center">
                    <span class="mr-3 text-indigo-500 font-semibold">Size</span>
                    <div class="relative">
                      <select class="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10">
                        {product.size.split(", ").map((size) => {
                          return <option key={size}>{size}</option>;
                        })}
                      </select>

                      <span class="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          class="w-4 h-4"
                          viewBox="0 0 24 24"
                        >
                          <path d="M6 9l6 6 6-6"></path>
                        </svg>
                      </span>
                    </div>
                  </div>
                )}
              </div>
              <div class="flex">
                <span class="title-font font-medium text-2xl text-gray-900">
                  ₹{product.price}
                </span>
                <button
                  class="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
                  onClick={() => {
                    addToCart(
                      slug,
                      1,
                      product.price,
                      product.title,
                      product.size,
                      product.color
                    );
                  }}
                >
                  Add To Cart
                </button>
              </div>
              <div className="pincode flex flex-col justify-start items-center mt-8 md:flex-row">
                <input
                  type="number"
                  name="pincode"
                  id="pincode"
                  className="border-2 border-slate-400 p-2 rounded-md w-auto"
                  value={pin}
                  placeholder="Enter Pincode"
                  onChange={(e) => setPin(e.target.value)}
                />
                <button
                  class="flex text-white bg-indigo-500 border-2 border-indigo-500 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded ml-0 mt-2 md:ml-2 md:mt-0"
                  onClick={checkServiceAvailability}
                >
                  Check
                </button>
              </div>
              {!available && available != "" && (
                <div className="text-red-600 mt-3 text-center md:text-left">
                  Sorry, We Do Not Delivier To This Pincode
                </div>
              )}
              {available && available != "" && (
                <div className="text-green-600 mt-3 text-center md:text-left">
                  We Are Delivering To This Pincode
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export async function getServerSideProps(context) {
  if (!mongoose.connections[0].readyState) {
    mongoose.connect(process.env.MONGO_URI);
  }
  let product = await Product.findOne({ slug: context.query.slug });
  return {
    props: { product: JSON.parse(JSON.stringify(product)) },
  };
}

export default Post;
