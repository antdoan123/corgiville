import Image from "next/image";
import React from "react";

function About() {
  return (
    <div className="mt-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          About Us
        </h2>
        <div className="mt-10 flex flex-col md:flex-row gap-8 items-center justify-center">
          <Image
            width={"480"}
            height={"220"}
            src={"/corgihero.jpg"}
            className="rounded-xl"
            alt=""
          />
          <p className="text-center">
            We are two enthusiastic and driven youngsters who started our
            journey with a passion for breeding animals. Our connection with
            animals and our determination to make a change in the world led us
            to start our own breeding business. With years of hard work and
            dedication, we were able to establish ourselves in the breeding
            industry and build a strong reputation for ourselves. Our breeding
            program was always based on the development and improvement of our
            kennel, which allowed us to produce healthy puppies that were in
            high demand. As we grew our business, we realized that there was a
            need for a store that specialized in fashion and functionality. We
            wanted to offer customers a way to show the bond between their pets
            while still expressing who they are. After many years of successful
            breedings, we decided to retire our breeding stock and put an end to
            our breeding journey and focus solely on our store. We were proud of
            the legacy we had built in the breeding industry, but we knew that
            we could make an even greater impact by focusing on our store.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
