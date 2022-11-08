import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Ecommercely - Shop Wisely</title>
        <meta name="description" content="A E-Commerce Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="text-gray-600 body-font bg-gray-900 flex-col">
        <p className="bg-gray-800 text-center text-sm p-2 font-Montserrat font-semibold">
          <span className="text-emerald-500 font-Montserrat">Note: </span> This
          is a learning based project. The products shown here are only for
          visual purpose.
        </p>
        <div className="container px-5 py-24 mx-auto">
          <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row-reverse flex-col">
            <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-emerald-100 text-emerald-500 flex-shrink-0">
              <Image src="/tshirt.svg" alt="" height="70" width="70" />
            </div>
            <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
              <h2 className="text-emerald-400 text-lg title-font font-medium mb-2 font-Montserrat">
                T Shirts
              </h2>
              <p className="leading-relaxed text-base font-Montserrat">
                Premium, Branded, Full Sleeves, Half Sleeves, Polo, 100% Fabric
                Tshirts At The Most Affordable Price
              </p>
              <Link href="/products?type=tshirts">
                <a className="mt-3 text-emerald-500 flex items-center cursor-pointer hover:text-emerald-300">
                  <p className="mr-2 font-Montserrat">Shop Now</p>
                  <span className="mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </span>
                </a>
              </Link>
            </div>
          </div>
          <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
            <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-emerald-100 text-emerald-500 flex-shrink-0">
              <Image src="/hoodie.svg" alt="" height="70" width="70" />
            </div>
            <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
              <h2 className="text-emerald-400 text-lg title-font font-medium mb-2 font-Montserrat">
                Hoddies
              </h2>
              <p className="leading-relaxed text-base font-Montserrat">
                Winter Is Coming, Premium, Branded, Comfortable Hoddies At The
                Most Affordable Price
              </p>
              <Link href="/products?type=hoddies">
                <a className="mt-3 text-emerald-500 flex items-center cursor-pointer hover:text-emerald-300">
                  <p className="mr-2 font-Montserrat">Shop Now</p>
                  <span className="mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </span>
                </a>
              </Link>
            </div>
          </div>
          <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row-reverse flex-col">
            <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-emerald-100 text-emerald-500 flex-shrink-0">
              <Image src="/shirt.svg" alt="" height="70" width="70" />
            </div>
            <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
              <h2 className="text-emerald-400 text-lg title-font font-medium mb-2 font-Montserrat">
                Shirts
              </h2>
              <p className="leading-relaxed text-base font-Montserrat">
                Premium, Branded, 100% Fabric Shirts At The Most Affordable
                Price. Shirts That Makes You Feel Better.
              </p>
              <Link href="/products?type=shirts">
                <a className="mt-3 text-emerald-500 flex items-center cursor-pointer hover:text-emerald-300">
                  <p className="mr-2 font-Montserrat">Shop Now</p>
                  <span className="mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </span>
                </a>
              </Link>
            </div>
          </div>
          <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
            <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-emerald-100 text-emerald-500 flex-shrink-0">
              <Image src="/jeans-pants.svg" alt="" height="70" width="70" />
            </div>
            <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
              <h2 className="text-emerald-400 text-lg title-font font-medium mb-2 font-Montserrat">
                Jeans
              </h2>
              <p className="leading-relaxed text-base font-Montserrat">
                Premium, Branded, 100% Fabric Tshirts At The Most Affordable
                Price
              </p>
              <Link href="/products?type=jeans">
                <a className="mt-3 text-emerald-500 flex items-center cursor-pointer hover:text-emerald-300">
                  <p className="mr-2 font-Montserrat">Shop Now</p>
                  <span className="mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </span>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
