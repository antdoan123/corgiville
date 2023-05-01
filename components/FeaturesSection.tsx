import Link from "next/link";
import React from "react";

function FeaturesSection() {
  return (
    <div className="mt-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          Best Seller
        </h2>

        <div className="flex flex-wrap mx-4 mt-8">
          <div className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-8 ">
            <div className="flex flex-col items-center justify-center bg-gray-100 p-6 rounded-lg shadow-lg transition-transform hover:scale-103">
              <div className=" flex-shrink-0 w-full h-56 overflow-hidden">
                <img
                  className="hover:scale-105 object-cover object-center w-full h-full"
                  src="/corgihero.jpg"
                  alt=""
                />
              </div>
              <div className=" mt-4 text-center">
                <h3 className="hover:underline hover:cursor-pointer text-lg font-medium text-gray-900">
                  Item #1 Title
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  <span className="line-through pr-1">$200.95</span> $149.95
                </p>
              </div>
            </div>
          </div>

          <div className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-8">
            <div className="flex flex-col items-center justify-center bg-gray-100 p-6 rounded-lg shadow-lg transition-transform hover:scale-103">
              <div className=" flex-shrink-0 w-full h-56 overflow-hidden">
                <img
                  className="hover:scale-105 object-cover object-center w-full h-full"
                  src="/corgihero.jpg"
                  alt=""
                />
              </div>
              <div className=" mt-4 text-center">
                <h3 className="hover:underline hover:cursor-pointer text-lg font-medium text-gray-900">
                  Item #1 Title
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  <span className="line-through pr-1">$200.95</span> $149.95
                </p>
              </div>
            </div>
          </div>

          <div className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-8">
            <div className="flex flex-col items-center justify-center bg-gray-100 p-6 rounded-lg shadow-lg transition-transform hover:scale-103">
              <div className=" flex-shrink-0 w-full h-56 overflow-hidden">
                <img
                  className="hover:scale-105 object-cover object-center w-full h-full"
                  src="/corgihero.jpg"
                  alt=""
                />
              </div>
              <div className=" mt-4 text-center">
                <h3 className="hover:underline hover:cursor-pointer text-lg font-medium text-gray-900">
                  Item #1 Title
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  <span className="line-through pr-1">$200.95</span> $149.95
                </p>
              </div>
            </div>
          </div>

          <div className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-8">
            <div className="flex flex-col items-center justify-center bg-gray-100 p-6 rounded-lg shadow-lg transition-transform hover:scale-103">
              <div className=" flex-shrink-0 w-full h-56 overflow-hidden">
                <img
                  className="hover:scale-105 object-cover object-center w-full h-full"
                  src="/corgihero.jpg"
                  alt=""
                />
              </div>
              <div className=" mt-4 text-center">
                <h3 className="hover:underline hover:cursor-pointer text-lg font-medium text-gray-900">
                  Item #1 Title
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  <span className="line-through pr-1">$200.95</span> $149.95
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center">
            <Link href='/' className="rounded-md hover:border-yellow-200 text-md uppercase border px-8 py-2 bg-white text-black hover:text-yellow-200 hover:bg-black">View All Products</Link>
        </div>
      </div>
    </div>
  );
}

export default FeaturesSection;
