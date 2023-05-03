import Link from "next/link";
import React from "react";
import { motion, stagger, useAnimate } from "framer-motion";

function Categories() {
  const categories = [
    {
      title: "Dog's Clothing",
      href: "/",
    },
    {
      title: "Men's Clothing",
      href: "/",
    },
    {
      title: "Women's Clothing",
      href: "/",
    },
  ];

  return (
    <div className="h-full bg-hm bg-cover">
      <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 ">
        {categories.map((category, index) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1}}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="h-screen bg-my bg-cover bg-center text-white lg:hover:scale-105 transition ease-in-out"
          >
            <div className="h-screen flex flex-col items-start justify-end mx-4">
              <h1 className="uppercase font-bold text-3xl md:text-4xl ">
                {category.title}
              </h1>
              <Link
                href={category.href}
                className="my-8 rounded-md bg-black py-4 px-8 text-md uppercase hover:cursor-pointer hover:text-yellow-200"
              >
                Shop Now
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Categories;
