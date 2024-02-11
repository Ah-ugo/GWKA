"use client"
import Image from "next/image";
import React, { useState } from "react";
// import Autoplay from "embla-carousel-autoplay"
import Lottie from "lottie-react";
import animation1 from "@/assets/lottie/Animation - 1707350846201.json"
import animation2 from "@/assets/lottie/Animation - 1707351188979.json"
import animation3 from "@/assets/lottie/Animation - 1707351311696.json"
import animation4 from "@/assets/lottie/Animation - 1707352833904.json"
import "@fontsource/lato";
import "@fontsource/poppins";
import Navbar from "./Navbar";

function NavHero() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
    <Navbar/>
    <section className="bg-white dark:bg-gray-900">
      {/* <Navbar/> */}
      
      <div className="flex flex-col px-6 pt-16 mx-auto text-center lg:flex-row lg:text-left">
        <div className="max-w-lg mx-auto mt-10 sm:mt-24">
          <h1 className="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl">
          Spark Wonder. Ignite Minds. Shape Heroes. 
          </h1>
          <p className="mt-6 text-gray-500 dark:text-gray-300">
          At Gratefulness Wonderland, curiosity thrives, knowledge empowers, and hearts overflow with kindness. Join us on an extraordinary journey where children blossom into grateful heroes, ready to make the world a better place.

Start their adventure today!
          </p>
          <button className="px-5 py-2 mt-6 text-sm font-medium leading-5 text-center text-white capitalize bg-blue-600 rounded-lg hover:bg-blue-500 lg:mx-0 lg:w-auto focus:outline-none">
            Download Application Form
          </button>
          {/* <p className="mt-3 text-sm text-gray-400">No credit card required</p> */}
        </div>

        <div className="w-full flex lg:w-auto">
          {/* <Image
            className="object-cover w-full h-96 rounded-xl lg:w-4/5"
            src={require("../assets/images/banner1.jpeg")}
            alt=""
          /> */}
          <Lottie animationData={animation3} className="object-cover w-screen h-full rounded-xl lg:w-full lg:mt-0"/>
        </div> 
      </div>
    </section>
    </>
  );
}

export default NavHero;
