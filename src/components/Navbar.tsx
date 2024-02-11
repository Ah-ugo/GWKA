"use client"
import { Fragment, useState } from 'react'
import "@fontsource/lato";
import "@fontsource/poppins";
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
    x-data="{ isOpen: false }"
    className="container z-20 fixed px-6 py-2  bg-white w-screen lg:flex lg:justify-between lg:items-center">
    <div className="flex items-center justify-between">
      <a href="/" className="flex items-center align-middle">
        <Image
          className="w-auto h-10 sm:h-14"
          src={require("../assets/images/logo2.png")}
          alt=""
        />
        <h3 className="font-bold text-2xl text-blue-600" style={{fontFamily: "Poppins"}}>G.W.K.A</h3>
      </a>

      {/* Mobile menu button */}
      <div className="flex lg:hidden">
        <button
          x-cloak
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
          aria-label="toggle menu">
          <svg
            style={{ display: !isOpen ? "block" : "none" }}
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 8h16M4 16h16"
            />
          </svg>

          <svg
            style={{ display: isOpen ? "block" : "none" }}
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>

    {/* Mobile Menu open: "block", Menu closed: "hidden" */}
    <div
      x-cloak
      className={`absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white shadow-md lg:bg-transparent lg:dark:bg-transparent lg:shadow-none dark:bg-gray-900 lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center ${
        isOpen ? "translate-x-0 opacity-100" : "opacity-0 -translate-x-full"
      }`}>
      <div className="flex flex-col space-y-4 lg:mt-0 lg:flex-row lg:-px-8 lg:space-y-0">
        <a
          className="text-gray-700 transition-colors duration-300 transform lg:mx-8 dark:text-gray-200 dark:hover:text-blue-400 hover:text-blue-500"
          href="/">
          Home
        </a>
        <a
          className="text-gray-700 transition-colors duration-300 transform lg:mx-8 dark:text-gray-200 dark:hover:text-blue-400 hover:text-blue-500"
          href="/ComingSoon">
          About Us
        </a>
        <a
          className="text-gray-700 transition-colors duration-300 transform lg:mx-8 dark:text-gray-200 dark:hover:text-blue-400 hover:text-blue-500"
          href="/ComingSoon">
          Blog
        </a>
        <a
          className="text-gray-700 transition-colors duration-300 transform lg:mx-8 dark:text-gray-200 dark:hover:text-blue-400 hover:text-blue-500"
          href="/ComingSoon">
          Events
        </a>
        <a
          className="text-gray-700 transition-colors duration-300 transform lg:mx-8 dark:text-gray-200 dark:hover:text-blue-400 hover:text-blue-500"
          href="/ComingSoon">
          Contact Us
        </a>
      </div>

      <a
        className="block px-5 py-2 mt-4 text-sm text-center text-white capitalize bg-blue-600 rounded-lg lg:mt-0 hover:bg-blue-500 lg:w-auto"
        href="/ComingSoon">
        Download Application Form
      </a>
    </div>
  </nav>

  )
}
