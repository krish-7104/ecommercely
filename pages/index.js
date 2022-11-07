/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Ecommercely - Shop Wisely</title>
        <meta name="description" content="A E-Commerce Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="text-gray-600 body-font bg-gray-900">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row-reverse flex-col">
            <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-emerald-100 text-emerald-500 flex-shrink-0">
              <img
                src="https://www.svgrepo.com/show/311551/tshirt.svg"
                alt=""
                height="70"
                width="70"
              />
            </div>
            <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
              <h2 className="text-emerald-400 text-lg title-font font-medium mb-2">
                T Shirts
              </h2>
              <p className="leading-relaxed text-base">
                Premium, Branded, Full Sleeves, Half Sleeves, Polo, 100% Fabric
                Tshirts At The Most Affordable Price
              </p>
              <a
                href="/products?type=tshirts"
                className="mt-3 text-emerald-500 inline-flex items-center cursor-pointer hover:text-emerald-300"
              >
                <p className="mr-2">Shop Now</p>
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
            </div>
          </div>
          <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
            <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-emerald-100 text-emerald-500 flex-shrink-0">
              <img
                src="https://www.svgrepo.com/show/277103/hoodie.svg"
                alt=""
                height="70"
                width="70"
              />
            </div>
            <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
              <h2 className="text-emerald-400 text-lg title-font font-medium mb-2">
                Hoddies
              </h2>
              <p className="leading-relaxed text-base">
                Winter Is Coming, Premium, Branded, Comfortable Hoddies At The
                Most Affordable Price
              </p>
              <a
                href="/products?type=hoddies"
                className="mt-3 text-emerald-500 inline-flex items-center cursor-pointer hover:text-emerald-300"
              >
                <p className="mr-2">Shop Now</p>
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
            </div>
          </div>
          <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row-reverse flex-col">
            <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-emerald-100 text-emerald-500 flex-shrink-0">
              <img
                src="https://www.svgrepo.com/show/29449/shirt.svg"
                alt=""
                height="70"
                width="70"
              />
            </div>
            <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
              <h2 className="text-emerald-400 text-lg title-font font-medium mb-2">
                Shirts
              </h2>
              <p className="leading-relaxed text-base">
                Premium, Branded, 100% Fabric Shirts At The Most Affordable
                Price. Shirts That Makes You Feel Better.
              </p>
              <a
                href="/products?type=shirts"
                className="mt-3 text-emerald-500 inline-flex items-center cursor-pointer hover:text-emerald-300"
              >
                <p className="mr-2">Shop Now</p>
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
            </div>
          </div>
          <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
            <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-emerald-100 text-emerald-500 flex-shrink-0">
              <img
                src="https://www.svgrepo.com/show/258218/jeans-pants.svg"
                alt=""
                height="70"
                width="70"
              />
            </div>
            <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
              <h2 className="text-emerald-400 text-lg title-font font-medium mb-2">
                Jeans
              </h2>
              <p className="leading-relaxed text-base">
                Premium, Branded, 100% Fabric Tshirts At The Most Affordable
                Price
              </p>
              <a
                href="/products?type=jeans"
                className="mt-3 text-emerald-500 inline-flex items-center cursor-pointer hover:text-emerald-300"
              >
                <p className="mr-2">Shop Now</p>
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
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
