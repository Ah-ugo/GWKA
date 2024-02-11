"use client"
import React from "react";
import ComingSoonLot from "../../assets/lottie/comingSoon.json";
import Lottie, { LottiePlayer } from "lottie-react";
import Navbar from "@/components/Navbar";

const ComingSoon = () => {
  return (
    <>
    <Navbar/>
      <section className="relative z-10 bg-primary py-[120px]">
        <div className="container mx-auto">
          <div className="-mx-4 flex">
            <div className="w-full px-4">
              <div className="flex justify-center mx-10 h-1/2">
            <Lottie animationData={ComingSoonLot} loop={true} className="object-cover w-auto h-full rounded-xl lg:w-full lg:mt-0" />
            </div>
              <div className="mx-auto max-w-[400px] text-center">
                {/* <h2 className="mb-2 text-[50px] font-bold leading-none text-white sm:text-[80px] md:text-[100px]">
                  404
                </h2> */}
                <h4 className="mb-3 text-[22px] font-semibold leading-tight text-white">
                  Oops! Coming Soon
                </h4>
                <p className="mb-8 text-lg text-white">
                  The page you are looking for is under construction
                </p>
                <a
                  href="javascript:void(0)"
                  className="inline-block rounded-lg border border-white px-8 py-3 text-center text-base font-semibold text-white transition hover:bg-white hover:text-primary">
                  Go To Home
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute left-0 top-0 -z-10 flex h-full w-full items-center justify-between space-x-5 md:space-x-8 lg:space-x-14">
          <div className="h-full w-1/3 bg-gradient-to-t from-[#FFFFFF14] to-[#C4C4C400]"></div>
          <div className="flex h-full w-1/3">
            <div className="h-full w-1/2 bg-gradient-to-b from-[#FFFFFF14] to-[#C4C4C400]"></div>
            <div className="h-full w-1/2 bg-gradient-to-t from-[#FFFFFF14] to-[#C4C4C400]"></div>
          </div>
          <div className="h-full w-1/3 bg-gradient-to-b from-[#FFFFFF14] to-[#C4C4C400]"></div>
        </div>
      </section>
    </>
  );
};

export default ComingSoon;
