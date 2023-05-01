import Link from "next/link";
import React from "react";

function Categories() {
  return (
    <div className="h-full bg-hm bg-cover">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 mx-4">

        <div className="h-screen bg-my bg-cover bg-center text-white lg:hover:scale-105 transition ease-in-out">
          <div className="h-screen flex flex-col items-start justify-end mx-4">
            <h1 className="uppercase font-bold text-3xl md:text-4xl ">
              Dog&apos;s Clothing
            </h1>
            <Link
              href="/"
              className="my-8 rounded-md bg-black py-4 px-8 text-md uppercase hover:cursor-pointer hover:text-yellow-200"
            >
              Shop Now
            </Link>
          </div>
        </div>

        <div className="h-screen bg-my bg-cover bg-center text-white lg:hover:scale-105 transition ease-in-out">
          <div className="h-screen flex flex-col items-start justify-end mx-4">
            <h1 className="uppercase font-bold text-3xl md:text-4xl ">
              Men&apos;s Clothing
            </h1>
            <Link
              href="/"
              className="my-8 rounded-md bg-black py-4 px-8 text-md uppercase hover:cursor-pointer hover:text-yellow-200"
            >
              Shop Now
            </Link>
          </div>
        </div>

        <div className="h-screen bg-my bg-cover bg-center text-white lg:hover:scale-105 transition ease-in-out">
          <div className="h-screen flex flex-col items-start justify-end mx-4">
            <h1 className="uppercase font-bold text-3xl md:text-4xl ">
              Women&apos;s Clothing
            </h1>
            <Link
              href="/"
              className="my-8 rounded-md bg-black py-4 px-8 text-md uppercase hover:cursor-pointer hover:text-yellow-200"
            >
              Shop Now
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Categories;
