import React from "react";
import Link from "next/link";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillInstagram,
  AiFillMail,
} from "react-icons/ai";
const Footer = () => {
  return (
    <footer className="text-gray-600 body-font bg-gray-900">
      <div className="container px-5 py-14 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div className="w-60 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left px-5">
          <p className="text-emerald-500 font-bold text-2xl mb-2">
            ECommercely
          </p>
          <p className="text-sm font-normal">
            Shop Wisely The Premium Tshirts, Shirts, Jeans And Hoodies At The
            Nominal Rate
          </p>
        </div>
        <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-emerald-700 tracking-widest text-sm mb-3">
              SHOP
            </h2>
            <nav className="list-none mb-10">
              <Link href={"/products?type=tshirts"}>
                <li className="text-gray-600 hover:text-emerald-300 text-sm cursor-pointer">
                  T Shirts
                </li>
              </Link>
              <Link href={"/products?type=shirts"}>
                <li className="text-gray-600 hover:text-emerald-300 text-sm cursor-pointer">
                  Shirts
                </li>
              </Link>
              <Link href={"/products?type=hoddies"}>
                <li className="text-gray-600 hover:text-emerald-300 text-sm cursor-pointer">
                  Hoddies
                </li>
              </Link>
              <Link href={"/products?type=jeans"}>
                <li className="text-gray-600 hover:text-emerald-300 text-sm cursor-pointer">
                  Jeans
                </li>
              </Link>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-emerald-700 tracking-widest text-sm mb-3">
              ABOUT
            </h2>
            <nav className="list-none mb-10">
              <li className="text-gray-600 hover:text-emerald-300 text-sm cursor-pointer">
                <Link href={"http://krishjotaniya.netlify.app/about"}>
                  About Us
                </Link>
              </li>
              <li className="text-gray-600 hover:text-emerald-300 text-sm cursor-pointer">
                <Link href={"https://krishjotaniya.netlify.app/contact"}>
                  Contact Us
                </Link>
              </li>
              <li className="text-gray-600 hover:text-emerald-300 text-sm cursor-pointer">
                <Link href={"https://krishjotaniya.netlify.app/"}>
                  Developer
                </Link>
              </li>
              <li className="text-gray-600 hover:text-emerald-300 text-sm cursor-pointer">
                <Link href={"mailto:jotaniyakrish07@gmail.com"}>Mail Us</Link>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-emerald-700 tracking-widest text-sm mb-3">
              POLICY
            </h2>
            <nav className="list-none mb-10">
              <li className="text-gray-600 hover:text-emerald-300 text-sm cursor-pointer">
                <Link href={"/"}>Payment</Link>
              </li>
              <li className="text-gray-600 hover:text-emerald-300 text-sm cursor-pointer">
                <Link href={"/"}>Shipping</Link>
              </li>
              <li className="text-gray-600 hover:text-emerald-300 text-sm cursor-pointer">
                <Link href={"/"}>Cancellation & Returns</Link>
              </li>
              <li className="text-gray-600 hover:text-emerald-300 text-sm cursor-pointer">
                <Link href={"/"}>Privacy</Link>
              </li>
            </nav>
          </div>
        </div>
      </div>
      <div className="bg-gray-800">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <p className="text-sm text-center sm:text-left text-emerald-500">
            © 2022 ECommercely - By{" "}
            <Link
              href="https://krishjotaniya.netlify.app/"
              rel="noopener noreferrer"
              className="text-emerald-600 ml-1"
              target="_blank"
            >
              Krish Jotaniya
            </Link>
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
            <Link href={"https://github.com/krish-7104/"}>
              <li
                href={"/about"}
                className="text-emerald-300 hover:text-emerald-500 list-none cursor-pointer"
              >
                <AiFillGithub />
              </li>
            </Link>
            <Link
              href={"https://www.linkedin.com/in/krish-jotaniya-224022214/"}
            >
              <li
                href={"/about"}
                className="ml-3 text-emerald-300 hover:text-emerald-500 list-none cursor-pointer"
              >
                <AiFillLinkedin />
              </li>
            </Link>
            <Link href={"https://www.instagram.com/krish7104_"}>
              <li
                href={"/about"}
                className="ml-3 text-emerald-300 hover:text-emerald-500 list-none cursor-pointer"
              >
                <AiFillInstagram />
              </li>
            </Link>
            <Link href={"mailto:jotaniyakrish07@gmail.com"}>
              <li
                href={"/about"}
                className="ml-3 text-emerald-300 hover:text-emerald-500 list-none cursor-pointer"
              >
                <AiFillMail />
              </li>
            </Link>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
