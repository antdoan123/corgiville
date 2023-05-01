import Link from "next/link";
import React from "react";
import {
  AiOutlineInstagram,
  AiOutlineFacebook,
  AiOutlineArrowRight,
} from "react-icons/ai";
import { FaBars, FaTiktok } from "react-icons/fa";


function Footer() {
  return (
    <footer className="mt-20 p-4 w-full text-center border-t-2">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
        <div className="flex flex-col items-center justify-center gap-2 mb-4 ">
          <h1 className="text-xl font-bold mb-2  ">Explore</h1>
          <Link className='hover:text-yellow-200 hover:cursor-pointer' href='/'>Home</Link>
          <Link className='hover:text-yellow-200 hover:cursor-pointer' href='/'>Shop</Link>
          <Link className='hover:text-yellow-200 hover:cursor-pointer' href='/'>Contact</Link>
          <Link className='hover:text-yellow-200 hover:cursor-pointer' href='/'>About Us</Link>
        </div>

        <div className="flex flex-col items-center justify-center gap-2 mb-4 ">
          <h1 className="text-xl font-bold mb-2 ">Shop Our Newest Collections</h1>
          <Link href='/' className="bg-black hover:cursor-pointer text-white shadow-md mt-8 text-2xl py-2 px-12 border hover:text-yellow-400 hover:bg-white transition ease-in-out">Shop Now</Link>
        </div>

        <div className="flex flex-col items-center justify-center gap-2 mb-4 ">
          <h1 className="text-xl font-bold mb-2 ">Follow Us</h1>
          <div className="flex gap-x-2">
            <a
                href="https://www.instagram.com/officialcorgiville/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex hover:scale-105 duration-200 "
            >
                <AiOutlineInstagram size={32}></AiOutlineInstagram>
            </a>

          </div>
          <h1>@officialcorgiville</h1>
          <a href="mailto:elmonofineink@gmail.com">corgiville@gmail.com</a>
          <a>562-506-5781</a>
        </div>
      </div>

        <a className="py-4 flex items-center justify-center">&copy; 2023 Copyright Corgiville All rights reserved.</a>
    </footer>
  );
}

export default Footer;