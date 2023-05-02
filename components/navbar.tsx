import {AiOutlineShoppingCart } from "react-icons/ai";
import Image from "next/image";
import Link from "next/link";

const NavBar = (): JSX.Element => {
  return (
    <div className="flex items-center bg-cover px-4 border-white border-b-4 bg-hm ">
      <div className="p-4">
        <Link href="/">
          <img src="corgiville_logo.png" className="h-32 w-36"></img>
        </Link>
      </div>

      <div className="hidden md:flex ">
        <div className="px-4 text-xl cursor-pointer uppercase font-medium  hover:border-b border-yellow-200 hover:scale-105 duration-200">
          <Link href="/">home</Link>
        </div>

        <div className="relative " style={{ position: "relative" }}>
          <div className="px-4 text-xl cursor-pointer uppercase font-medium  hover:scale-105 duration-200">
            Shop
          </div>

          <div className="absolute top-full w-96 bg-white shadow-lg rounded-md overflow-hidden">
            <div className="grid grid-cols-3 ">

              <div className="">
                <Link href="/dog-clothing">
                  <div className="block px-4 py-2 pb-2 text-gray-800 hover:border-b border-yellow-400">
                    Dog&apos;s Clothing
                  </div>
                </Link>
                <Link href="/dog-clothing">
                  <div className="block px-4 py-2 text-gray-800 hover:border-b border-yellow-400">
                    Dog Shirts
                  </div>
                </Link>
                <Link href="/dog-clothing">
                  <div className="block px-4 py-2 text-gray-800 hover:border-b border-yellow-400">
                    Dog Jackets
                  </div>
                </Link>
                <Link href="/dog-clothing">
                  <div className="block px-4 py-2 text-gray-800 hover:border-b border-yellow-400">
                    Dog Costumes
                  </div>
                </Link>
                <Link href="/dog-clothing">
                  <div className="block px-4 py-2 text-gray-800 hover:border-b border-yellow-400">
                    Dog Accessories
                  </div>
                </Link>
              </div>

              <div className="">
                <Link href="/dog-clothing">
                  <div className="block px-4 py-2 pb-2 text-gray-800 hover:border-b border-yellow-400">
                    Men&apos;s Clothing
                  </div>
                </Link>
                <Link href="/dog-clothing">
                  <div className="block px-4 py-2 text-gray-800 hover:border-b border-yellow-400">
                    Shirts
                  </div>
                </Link>
                <Link href="/dog-clothing">
                  <div className="block px-4 py-2 text-gray-800 hover:border-b border-yellow-400">
                    Pants
                  </div>
                </Link>
                <Link href="/dog-clothing">
                  <div className="block px-4 py-2 text-gray-800 hover:border-b border-yellow-400">
                    {"Jackets & Coats"}
                  </div>
                </Link>
                <Link href="/dog-clothing">
                  <div className="block px-4 py-2 text-gray-800 hover:border-b border-yellow-400">
                    Accessories
                  </div>
                </Link>
              </div>

              <div className="">
                <Link href="/dog-clothing">
                  <div className="block px-4 py-2 pb-2 text-gray-800 hover:border-b border-yellow-400">
                    Women&apos;s Clothing
                  </div>
                </Link>
                <Link href="/dog-clothing">
                  <div className="block px-4 py-2 text-gray-800 hover:border-b border-yellow-400">
                    Tops
                  </div>
                </Link>
                <Link href="/dog-clothing">
                  <div className="block px-4 py-2 text-gray-800 hover:border-b border-yellow-400">
                    Bottoms
                  </div>
                </Link>
                <Link href="/dog-clothing">
                  <div className="block px-4 py-2 text-gray-800 hover:border-b border-yellow-400">
                    Dresses
                  </div>
                </Link>
                <Link href="/dog-clothing">
                  <div className="block px-4 py-2 text-gray-800 hover:border-b border-yellow-400">
                  {"Jackets & Coats"}
                  </div>
                </Link>
                <Link href="/dog-clothing">
                  <div className="block px-4 py-2 text-gray-800 hover:border-b border-yellow-400">
                  Accessories
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="px-4 text-xl cursor-pointer uppercase font-medium  hover:border-b border-yellow-200 hover:scale-105 duration-200">
          <Link href="/help">Contact</Link>
        </div>
        <div className="px-4 text-xl cursor-pointer uppercase font-medium  hover:border-b border-yellow-200 hover:scale-105 duration-200">
          <Link href="/about">Policy</Link>
        </div>
      </div>

      <div className="p-4 hidden md:flex items-center ml-auto">
        <div className="flex gap-2 px-4 items-center text-xl cursor-pointer uppercase font-medium hover:border-b border-yellow-200 hover:scale-105 duration-200">
          <AiOutlineShoppingCart/>
          <Link href="./contact">{"Cart (0)"}</Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
