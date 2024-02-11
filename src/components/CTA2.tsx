import Image from "next/image";
import React from "react";

export default function CTA2() {
  return (
    <div>
      <section>
        <div class="mx-auto max-w-screen-2xl px-4 py-8 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div class="bg-blue-600 shadow-2 shadow-lg p-8 md:p-12 lg:px-16 lg:py-24">
              <div class="mx-auto max-w-xl text-center">
                <h2 class="text-2xl font-bold text-white md:text-3xl">
                Unlock Your Child&apos;s Potential: Find the Program that Ignites Their Spark!
                </h2>

                <p class="hidden text-white/90 sm:mt-4 sm:block">
                Experience learning beyond textbooks. Our programs weave curiosity, creativity, and gratitude into every adventure. From budding artists to curious scientists, we have a program that nurtures your child&apos;s unique talents and interests.
                </p>

                <div class="mt-4 md:mt-8">
                  <a
                    href="/ComingSoon"
                    class="inline-block rounded border border-white bg-white px-12 py-3 text-sm font-medium text-blue-500 transition hover:bg-transparent hover:text-white focus:outline-none focus:ring focus:ring-yellow-400">
                    Get Started Today
                  </a>
                </div>
              </div>
            </div>

            <div class="grid grid-cols-2 gap-4 md:grid-cols-1 lg:grid-cols-2">
              <Image
                alt=""
                src={require("../assets/images/img1.jpeg")}
                class="h-40 w-full object-cover bg-white shadow-2 shadow-lg sm:h-56 md:h-full"
              />

              <Image
                alt=""
                src={require("../assets/images/img3.jpeg")}
                class="h-40 w-full object-cover bg-white shadow-2 shadow-lg sm:h-56 md:h-full"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
