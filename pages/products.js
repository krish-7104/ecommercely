/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import Product from "../models/Product";
import mongoose from "mongoose";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

const Products = ({ products }) => {
  const router = useRouter();
  let type = "";
  if (router.query.type === "tshirts") {
    type = "T Shirt";
  } else if (router.query.type === "shirts") {
    type = "Shirt";
  } else if (router.query.type === "jeans") {
    type = "Jeans";
  } else if (router.query.type === "hoddies") {
    type = "Hoddie";
  }
  if (Object.keys(products).length === 0) {
    return (
      <div className="container mx-auto">
        <p className="text-center mt-10">
          No {type} At This Moment, Will Be Available Soon!
        </p>
      </div>
    );
  } else
    return (
      <section className="text-gray-600 body-font min-h-[100vh] bg-gray-900">
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
                    className="lg:w-1/5 md:w-1/2 p-4 w-full m-5 shadow-2xl cursor-pointer rounded-lg hover:shadow-xl bg-white"
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
                      <h3 className="text-emerald-700 text-xs tracking-widest title-font mb-1 font-bold">
                        {type.toUpperCase()}
                      </h3>
                      <h2 className="text-gray-900 title-font font-medium text-lg">
                        {products[item].title}
                      </h2>
                      <p className="mt-1">₹{products[item].price}</p>
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

export async function getServerSideProps(context) {
  if (!mongoose.connections[0].readyState) {
    mongoose.connect(process.env.MONGO_URI);
  }
  let type = "";
  if (context.query.type === "tshirts") {
    type = "T Shirt";
  } else if (context.query.type === "shirts") {
    type = "Shirt";
  } else if (context.query.type === "jeans") {
    type = "Jeans";
  } else if (context.query.type === "hoddies") {
    type = "Hoddie";
  }

  let products = await Product.find({ category: type });
  let newProducts = {};
  for (let item of products) {
    if (item.title in newProducts) {
      if (
        item.availableQty > 0 &&
        !newProducts[item.title].color.includes(item.color)
      ) {
        if (
          item.availableQty > 0 &&
          !newProducts[item.title].size.includes(item.size)
        ) {
          newProducts[item.title].size.concat(item.size);
        }
      }
    } else {
      newProducts[item.title] = JSON.parse(JSON.stringify(item));
      if (item.availableQty > 0) {
        newProducts[item.title].color = [item.color];
        newProducts[item.title].size = [item.size];
      }
    }
  }
  return {
    props: { products: JSON.parse(JSON.stringify(newProducts)) },
  };
}

export default Products;
