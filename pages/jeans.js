/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import Product from "../models/Product";
import mongoose from "mongoose";
import { motion } from "framer-motion";
const Jeans = ({ products }) => {
  if (Object.keys(products).length === 0) {
    return (
      <div className="container mx-auto">
        <p className="text-center mt-10">
          No Jeans At This Moment, Will Be Available Soon!
        </p>
      </div>
    );
  } else
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
                    className="lg:w-1/5 md:w-1/2 p-4 w-full m-5 shadow-lg cursor-pointer rounded-lg hover:shadow-xl"
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
                      {/* <div className="mt-2">
                      {products[item].size.map((size) => {
                        return (
                          <span key={size} className="mr-2">
                            {size}
                          </span>
                        );
                      })}
                    </div> */}
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
  let jeans = {};
  for (let item of products) {
    if (item.title in jeans) {
      if (
        !jeans[item.title].color.includes(item.color) &&
        item.availableQty > 0
      ) {
        jeans[item.title].color.push(item.color);
        if (
          !jeans[item.title].size.includes(item.size) &&
          item.availableQty > 0
        ) {
          jeans[item.title].size.concat(item.size);
        }
      }
    } else {
      jeans[item.title] = JSON.parse(JSON.stringify(item));
      if (item.availableQty > 0) {
        jeans[item.title].color = [item.color];
        jeans[item.title].size = [item.size];
      }
    }
  }
  return {
    props: { products: JSON.parse(JSON.stringify(jeans)) },
  };
}

export default Jeans;
