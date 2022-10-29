/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";
import React, { useState } from "react";
import Product from "../../models/Product";
import mongoose from "mongoose";
const Post = ({ addToCart, product, variants }) => {
  const router = useRouter();
  const { slug } = router.query;
  const [pin, setPin] = useState();
  const [available, setAvailable] = useState("");
  const [selectedSize, setSelectedSize] = useState(product.size);
  const [selectedColor, setSelectedColor] = useState(product.color);

  const checkServiceAvailability = async () => {
    let pins = await fetch("http://localhost:3000/api/pincode");
    let pinJson = await pins.json();
    if (pinJson.includes(parseInt(pin))) setAvailable(true);
    else setAvailable(false);
  };

  const colorChangeHandler = (e) => {
    setSelectedColor(e.target.value);
    setSelectedSize(Object.keys(variants[e.target.value])[0]);
    let link =
      variants[e.target.value][Object.keys(variants[e.target.value])[0]].slug;

    window.location = link;
  };
  const sizeChangeHandler = (e) => {
    setSelectedSize(e.target.value);
    // let k = product.title.toLowerCase().replaceAll(" ", "-");
    // let link =
    //   k +
    //   "-" +
    //   selectedColor.toLowerCase() +
    //   "-" +
    //   e.target.value.toLowerCase();
    // window.location = link;
    let link = variants[selectedColor][e.target.value].slug;

    window.location = link;
  };

  return (
    <>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-16 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <img
              alt="product image"
              className="lg:w-1/2 w-full object-contain object-top rounded"
              src={product.img}
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-indigo-500 tracking-widest font-bold">
                {product.category.toUpperCase()}
              </h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium my-2">
                {product.title}
              </h1>
              <p className="leading-relaxed">{product.desc}</p>
              <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                {variants && (
                  <div className="flex ml-6 items-center">
                    <span className="mr-3 text-indigo-500 font-semibold">
                      Color
                    </span>
                    <div className="relative">
                      <select
                        className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10"
                        onChange={colorChangeHandler}
                      >
                        {Object.keys(variants).map((color) => {
                          if (selectedColor === color) {
                            return (
                              <option selected key={color} value={color}>
                                {color}
                              </option>
                            );
                          } else {
                            return (
                              <option key={color} value={color}>
                                {color}
                              </option>
                            );
                          }
                        })}
                      </select>
                      <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          className="w-4 h-4"
                          viewBox="0 0 24 24"
                        >
                          <path d="M6 9l6 6 6-6"></path>
                        </svg>
                      </span>
                    </div>
                  </div>
                )}
                {product.size && (
                  <div className="flex ml-6 items-center">
                    <span className="mr-3 text-indigo-500 font-semibold">
                      Size
                    </span>
                    <div className="relative">
                      <select
                        className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10"
                        onChange={sizeChangeHandler}
                      >
                        {Object.keys(variants[selectedColor]).map((size) => {
                          if (selectedSize === size) {
                            return (
                              <option selected key={size} value={size}>
                                {size}
                              </option>
                            );
                          } else {
                            return (
                              <option key={size} value={size}>
                                {size}
                              </option>
                            );
                          }
                        })}
                      </select>
                      <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          className="w-4 h-4"
                          viewBox="0 0 24 24"
                        >
                          <path d="M6 9l6 6 6-6"></path>
                        </svg>
                      </span>
                    </div>
                  </div>
                )}
              </div>
              <div className="flex">
                <span className="title-font font-medium text-2xl text-gray-900">
                  ₹{product.price}
                </span>
                <button
                  className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
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
                  className="flex text-white bg-indigo-500 border-2 border-indigo-500 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded ml-0 mt-2 md:ml-2 md:mt-0"
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
  let variants = await Product.find({ title: product.title });
  let colorSizeSlug = {};
  for (let item of variants) {
    if (Object.keys(colorSizeSlug).includes(item.color)) {
      colorSizeSlug[item.color][item.size] = { slug: item.slug };
    } else {
      colorSizeSlug[item.color] = {};
      colorSizeSlug[item.color][item.size] = { slug: item.slug };
    }
  }
  return {
    props: {
      product: JSON.parse(JSON.stringify(product)),
      variants: JSON.parse(JSON.stringify(colorSizeSlug)),
    },
  };
}

export default Post;
