/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import Product from "../models/Product";
import mongoose from "mongoose";
import { motion } from "framer-motion";
const Jeans = ({ products }) => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-10 mx-auto">
        <div className="flex flex-wrap -m-4 justify-center">
          {Object.keys(products).map((item) => {
            return (
              <Link
                href={`/product/${products[item].slug}`}
                key={products[item]._id}
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                  }}
                  className="lg:w-1/5 md:w-1/2 p-4 w-full m-5 shadow-lg cursor-pointer rounded-lg hover:shadow-2xl"
                >
                  <a className="block relative rounded overflow-hidden">
                    <img
                      alt="ecommerce"
                      className="block m-auto h-60
                    object-contain"
                      src={products[item].img}
                    />
                  </a>
                  <div className="mt-4">
                    <h3 className="text-indigo-700 text-xs tracking-widest title-font mb-1 font-bold">
                      JEANS
                    </h3>
                    <h2 className="text-gray-900 title-font font-medium text-lg">
                      {products[item].title}
                    </h2>
                    <p className="mt-1">₹{products[item].price}</p>
                    <div className="mt-2">
                      {products[item].size}
                      {/* {products[item].size.includes("XS") && (
                        <span className="mr-2">XS</span>
                      )}
                      {products[item].size.includes("S") && (
                        <span className="mr-2">S</span>
                      )}
                      {products[item].size.includes("M") && (
                        <span className="mr-2">M</span>
                      )}
                      {products[item].size.includes("L") && (
                        <span className="mr-2">L</span>
                      )}
                      {products[item].size.includes("XL") && (
                        <span className="mr-2">XL</span>
                      )}
                      {products[item].size.includes("XXL") && (
                        <span className="mr-2">XXL</span>
                      )} */}
                    </div>
                  </div>
                </motion.div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export async function getServerSideProps() {
  if (!mongoose.connections[0].readyState) {
    mongoose.connect(process.env.MONGO_URI);
  }
  let products = await Product.find({ category: "Jeans" });
  return {
    props: { products: JSON.parse(JSON.stringify(products)) },
  };
}

export default Jeans;
