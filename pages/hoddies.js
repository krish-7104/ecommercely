/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import Product from "../models/Product";
import mongoose from "mongoose";

const Hoddie = ({ products }) => {
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
                <div className="lg:w-1/5 md:w-1/2 p-4 w-full m-5 shadow-lg cursor-pointer rounded-lg">
                  <a className="block relative rounded overflow-hidden">
                    <img
                      alt="ecommerce"
                      className="block m-auto h-60 object-contain"
                      src={products[item].img}
                    />
                  </a>
                  <div className="mt-4">
                    <h3 className="text-indigo-700 text-xs tracking-widest title-font mb-1 font-bold">
                      HODDIE
                    </h3>
                    <h2 className="text-gray-900 title-font text-lg font-medium">
                      {products[item].title}
                    </h2>
                    <p className="mt-1">₹{products[item].price}</p>
                    <p className="mt-1">{products[item].size}</p>
                  </div>
                </div>
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
  let products = await Product.find({ category: "Hoddie" });
  return {
    props: { products: JSON.parse(JSON.stringify(products)) },
  };
}

export default Hoddie;
