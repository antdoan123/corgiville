'use client';
import Link from "next/link";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";



function HeroBanner() {

  return (
    <div className="h-screen bg-my bg-cover bg-center text-white">
      <motion.div
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        exit={{ y: 10, opacity: 0 }}
        className="h-screen flex flex-col items-center justify-center"
      >
        <h1 className="uppercase font-bold text-5xl lg:text-7xl leading-[70px]	text-center">
          SPRING STYLES <span className="block">ARE HERE!</span>
        </h1>
        <p className="uppercase text-center text-md lg:text-lg p-4">
          Unleash your personal style and bond with your furry companion
        </p>
        <Link
          href="/"
          className="rounded-md bg-black py-4 px-8 text-xl uppercase hover:cursor-pointer hover:text-yellow-200"
        >
          Shop Now
        </Link>
      </motion.div>
    </div>
  );
}

export default HeroBanner;
